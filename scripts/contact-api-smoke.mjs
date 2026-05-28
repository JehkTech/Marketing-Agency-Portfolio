const baseUrl = process.env.CONTACT_API_BASE_URL || 'http://127.0.0.1:3000';
const endpoint = new URL('/api/contact', baseUrl);
const runId = `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
const runSeed = Array.from(runId).reduce((sum, char) => sum + char.charCodeAt(0), 0);

function scenarioIp(offset) {
  return `198.51.100.${((runSeed + offset) % 200) + 1}`;
}

async function postContact(body, forwardedFor) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(forwardedFor ? { 'x-forwarded-for': forwardedFor } : {}),
    },
    body: JSON.stringify(body),
  });

  let json;
  try {
    json = await response.json();
  } catch {
    throw new Error(`Expected JSON response, got status ${response.status}`);
  }

  return { response, json };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function main() {
  const invalid = await postContact({ email: 'invalid', message: 'hi' }, scenarioIp(1));
  assert(invalid.response.status === 400, `Expected 400 for invalid payload, got ${invalid.response.status}`);
  assert(invalid.json.success === false, 'Expected invalid payload to fail');

  const honeypot = await postContact({
    name: 'Spam Bot',
    email: 'bot@example.com',
    message: 'This should be rejected.',
    website: 'https://spam.example',
    submittedAt: Date.now(),
  }, scenarioIp(2));
  assert(honeypot.response.status === 400, `Expected 400 for honeypot payload, got ${honeypot.response.status}`);
  assert(honeypot.json.success === false, 'Expected honeypot payload to fail');

  const validPayload = {
    name: 'Smoke Test User',
    email: 'smoke@test.example',
    company: 'Kinertic QA',
    message: 'This is a valid contact request for automated testing.',
    website: '',
    submittedAt: Date.now() - 2000,
  };

  const valid = await postContact(validPayload, scenarioIp(3));
  assert(valid.response.status === 200, `Expected 200 for valid payload, got ${valid.response.status}`);
  assert(valid.json.success === true, 'Expected valid payload to succeed');

  let rateLimited = false;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const result = await postContact({
      ...validPayload,
      submittedAt: Date.now() - 2000,
      message: `Rate limit probe ${attempt + 1}`,
    }, scenarioIp(4));
    if (result.response.status === 429) {
      rateLimited = true;
      break;
    }
  }

  assert(rateLimited, 'Expected the API to rate limit repeated submissions');

  console.log('Contact API smoke tests passed.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
