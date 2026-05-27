-- ============================================================
-- KINERTIC MEDIA ARTS — PostgreSQL Database Schema
-- Stack: Supabase (PostgreSQL 15) + Row Level Security
-- Generated: 2026
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- EXTENSIONS
-- ────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ────────────────────────────────────────────────────────────
-- SHARED TRIGGER: auto-update updated_at
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ════════════════════════════════════════════════════════════
-- 1. ADMIN USERS
--    Supabase Auth manages passwords; this extends auth.users
-- ════════════════════════════════════════════════════════════
CREATE TABLE admin_users (
    id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email       VARCHAR(255)  NOT NULL UNIQUE,
    full_name   VARCHAR(255),
    avatar_url  TEXT,
    role        VARCHAR(50)   NOT NULL DEFAULT 'editor'
                  CHECK (role IN ('super_admin', 'admin', 'editor')),
    last_login_at  TIMESTAMPTZ,
    created_at  TIMESTAMPTZ   DEFAULT NOW(),
    updated_at  TIMESTAMPTZ   DEFAULT NOW()
);

CREATE INDEX idx_admin_users_email ON admin_users(email);

CREATE TRIGGER trg_admin_users_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ════════════════════════════════════════════════════════════
-- 2. LEADS  ← most critical table for revenue
--    Every contact form submission lands here.
--    Includes UTM tracking for campaign attribution.
-- ════════════════════════════════════════════════════════════
CREATE TABLE leads (
    id                UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    -- Contact info
    name              VARCHAR(255) NOT NULL,
    email             VARCHAR(255) NOT NULL,
    company           VARCHAR(255),
    phone             VARCHAR(50),
    -- Intent signals
    service_interest  VARCHAR(100),      -- 'photography', 'videography', etc.
    budget_range      VARCHAR(50),       -- optional, captured if form includes it
    message           TEXT         NOT NULL,
    -- CRM pipeline
    status            VARCHAR(50)  NOT NULL DEFAULT 'new'
                        CHECK (status IN (
                          'new',           -- just submitted
                          'contacted',     -- first outreach sent
                          'qualified',     -- confirmed fit
                          'proposal_sent', -- quote delivered
                          'won',           -- converted to client
                          'lost',          -- did not convert
                          'archived'       -- spam or duplicate
                        )),
    assigned_to       UUID         REFERENCES admin_users(id) ON DELETE SET NULL,
    -- Attribution
    source            VARCHAR(100) DEFAULT 'contact_form',
    utm_source        VARCHAR(100),
    utm_medium        VARCHAR(100),
    utm_campaign      VARCHAR(100),
    referrer_url      TEXT,
    page_url          TEXT,
    -- Security / anti-spam
    ip_address        INET,
    user_agent        TEXT,
    honeypot_triggered BOOLEAN     DEFAULT FALSE,
    -- Timestamps
    contacted_at      TIMESTAMPTZ,
    created_at        TIMESTAMPTZ  DEFAULT NOW(),
    updated_at        TIMESTAMPTZ  DEFAULT NOW(),
    deleted_at        TIMESTAMPTZ            -- soft delete
);

CREATE INDEX idx_leads_status       ON leads(status)       WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_email        ON leads(email)        WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_created_at   ON leads(created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_assigned     ON leads(assigned_to)  WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_service      ON leads(service_interest) WHERE deleted_at IS NULL;

CREATE TRIGGER trg_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ════════════════════════════════════════════════════════════
-- 3. LEAD NOTES  — CRM activity log
--    Every call, email, meeting, and status change is logged.
-- ════════════════════════════════════════════════════════════
CREATE TABLE lead_notes (
    id         UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id    UUID         NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
    admin_id   UUID         NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
    content    TEXT         NOT NULL,
    note_type  VARCHAR(50)  NOT NULL DEFAULT 'note'
                 CHECK (note_type IN ('note', 'call', 'email', 'meeting', 'status_change', 'system')),
    -- For status_change notes, record the transition
    old_status VARCHAR(50),
    new_status VARCHAR(50),
    created_at TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_lead_notes_lead    ON lead_notes(lead_id, created_at DESC);
CREATE INDEX idx_lead_notes_admin   ON lead_notes(admin_id);

-- ════════════════════════════════════════════════════════════
-- 4. SERVICES
--    CMS-managed service catalog. Categories map to nav sections.
-- ════════════════════════════════════════════════════════════
CREATE TABLE services (
    id            UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    slug          VARCHAR(100) NOT NULL UNIQUE,
    category      VARCHAR(100) NOT NULL
                    CHECK (category IN (
                      'digital_marketing',
                      'photography',
                      'videography',
                      'website_design'
                    )),
    title         VARCHAR(255) NOT NULL,
    short_desc    VARCHAR(500),
    full_desc     TEXT,
    icon          VARCHAR(50),        -- Lucide icon name
    cta_label     VARCHAR(100) DEFAULT 'Get a Quote',
    display_order INT          DEFAULT 0,
    is_active     BOOLEAN      DEFAULT TRUE,
    created_at    TIMESTAMPTZ  DEFAULT NOW(),
    updated_at    TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_services_category  ON services(category, display_order) WHERE is_active = TRUE;

CREATE TRIGGER trg_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ════════════════════════════════════════════════════════════
-- 5. CASE STUDIES
--    Portfolio + trust signal. metrics JSONB stores results
--    like {"engagement_increase": "+40%", "reach": "50K"}.
-- ════════════════════════════════════════════════════════════
CREATE TABLE case_studies (
    id               UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    slug             VARCHAR(100) NOT NULL UNIQUE,
    client_name      VARCHAR(255) NOT NULL,
    client_industry  VARCHAR(100),
    -- Content
    title            VARCHAR(255) NOT NULL,
    tagline          VARCHAR(255),
    summary          TEXT,
    challenge        TEXT,        -- the problem we solved
    solution         TEXT,        -- our approach
    results          TEXT,        -- measurable outcomes
    -- Visuals
    hero_image_url   TEXT,
    thumbnail_url    TEXT,
    -- Taxonomy
    tags             TEXT[]       DEFAULT '{}',
    service_ids      UUID[]       DEFAULT '{}',  -- linked services
    -- Results snapshot (for cards)
    metrics          JSONB        DEFAULT '{}',
    -- Publishing
    is_featured      BOOLEAN      DEFAULT FALSE,
    is_published     BOOLEAN      DEFAULT FALSE,
    published_at     TIMESTAMPTZ,
    display_order    INT          DEFAULT 0,
    created_at       TIMESTAMPTZ  DEFAULT NOW(),
    updated_at       TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_case_studies_published ON case_studies(is_published, is_featured, display_order);
CREATE INDEX idx_case_studies_slug      ON case_studies(slug) WHERE is_published = TRUE;
CREATE INDEX idx_case_studies_tags      ON case_studies USING GIN(tags);

CREATE TRIGGER trg_case_studies_updated_at
  BEFORE UPDATE ON case_studies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ════════════════════════════════════════════════════════════
-- 6. CASE STUDY MEDIA
--    Gallery, BTS shots, and before/after comparisons.
-- ════════════════════════════════════════════════════════════
CREATE TABLE case_study_media (
    id             UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    case_study_id  UUID         NOT NULL REFERENCES case_studies(id) ON DELETE CASCADE,
    type           VARCHAR(50)  NOT NULL
                     CHECK (type IN ('image', 'video', 'before_after', 'embed')),
    url            TEXT         NOT NULL,
    thumbnail_url  TEXT,
    caption        VARCHAR(500),
    alt_text       VARCHAR(255),
    width          INT,
    height         INT,
    duration_secs  INT,          -- for video
    display_order  INT          DEFAULT 0,
    created_at     TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_csm_case_study ON case_study_media(case_study_id, display_order);

-- ════════════════════════════════════════════════════════════
-- 7. TEAM MEMBERS
-- ════════════════════════════════════════════════════════════
CREATE TABLE team_members (
    id             UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    name           VARCHAR(255) NOT NULL,
    role           VARCHAR(255) NOT NULL,
    bio            TEXT,
    photo_url      TEXT,
    linkedin_url   TEXT,
    instagram_url  TEXT,
    twitter_url    TEXT,
    display_order  INT          DEFAULT 0,
    is_active      BOOLEAN      DEFAULT TRUE,
    created_at     TIMESTAMPTZ  DEFAULT NOW(),
    updated_at     TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_team_active ON team_members(display_order) WHERE is_active = TRUE;

CREATE TRIGGER trg_team_updated_at
  BEFORE UPDATE ON team_members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ════════════════════════════════════════════════════════════
-- 8. CLIENTS
--    Logo wall. logo_dark_url is for dark-mode variant.
-- ════════════════════════════════════════════════════════════
CREATE TABLE clients (
    id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,
    logo_url        TEXT         NOT NULL,
    logo_dark_url   TEXT,        -- dark-mode logo variant
    website_url     TEXT,
    industry        VARCHAR(100),
    display_order   INT          DEFAULT 0,
    is_featured     BOOLEAN      DEFAULT FALSE,
    is_active       BOOLEAN      DEFAULT TRUE,
    created_at      TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_clients_display ON clients(display_order, is_featured) WHERE is_active = TRUE;

-- ════════════════════════════════════════════════════════════
-- 9. TESTIMONIALS
--    Trust signals. Linked to client/case study optionally.
-- ════════════════════════════════════════════════════════════
CREATE TABLE testimonials (
    id               UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id        UUID         REFERENCES clients(id) ON DELETE SET NULL,
    case_study_id    UUID         REFERENCES case_studies(id) ON DELETE SET NULL,
    author_name      VARCHAR(255) NOT NULL,
    author_role      VARCHAR(255),
    author_company   VARCHAR(255),
    author_photo_url TEXT,
    content          TEXT         NOT NULL,
    rating           SMALLINT     CHECK (rating BETWEEN 1 AND 5),
    is_featured      BOOLEAN      DEFAULT FALSE,
    is_active        BOOLEAN      DEFAULT TRUE,
    created_at       TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_testimonials_featured ON testimonials(is_featured) WHERE is_active = TRUE;

-- ════════════════════════════════════════════════════════════
-- 10. ANALYTICS EVENTS  (lightweight, privacy-safe)
--     Use Vercel Analytics for page views; this captures
--     conversion events (CTA clicks, form starts, etc.).
-- ════════════════════════════════════════════════════════════
CREATE TABLE analytics_events (
    id          UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type  VARCHAR(100) NOT NULL,   -- 'cta_click', 'form_start', 'form_submit', 'case_study_view'
    page_path   VARCHAR(500),
    referrer    TEXT,
    session_id  VARCHAR(100),
    lead_id     UUID         REFERENCES leads(id) ON DELETE SET NULL,
    metadata    JSONB        DEFAULT '{}',
    created_at  TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_analytics_type    ON analytics_events(event_type, created_at DESC);
CREATE INDEX idx_analytics_session ON analytics_events(session_id);
-- Consider partitioning by month once table exceeds ~500K rows:
-- PARTITION BY RANGE (created_at)

-- ════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS)
-- ════════════════════════════════════════════════════════════

-- Enable RLS on all tables
ALTER TABLE admin_users       ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads             ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes        ENABLE ROW LEVEL SECURITY;
ALTER TABLE services          ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies      ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_study_media  ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members      ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients           ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials      ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events  ENABLE ROW LEVEL SECURITY;

-- ── Public read policies (anonymous users) ──────────────────
CREATE POLICY "pub_read_services"
  ON services FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "pub_read_case_studies"
  ON case_studies FOR SELECT
  USING (is_published = TRUE);

CREATE POLICY "pub_read_case_study_media"
  ON case_study_media FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM case_studies cs
      WHERE cs.id = case_study_id AND cs.is_published = TRUE
    )
  );

CREATE POLICY "pub_read_team"
  ON team_members FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "pub_read_clients"
  ON clients FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "pub_read_testimonials"
  ON testimonials FOR SELECT
  USING (is_active = TRUE);

-- ── Anyone can submit a lead (contact form) ─────────────────
CREATE POLICY "pub_insert_lead"
  ON leads FOR INSERT
  WITH CHECK (honeypot_triggered = FALSE);

-- ── Anyone can insert analytics events ──────────────────────
CREATE POLICY "pub_insert_analytics"
  ON analytics_events FOR INSERT
  WITH CHECK (true);

-- ── Admin full access (uses Supabase JWT auth.uid()) ────────
CREATE POLICY "admin_all_leads"
  ON leads FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_lead_notes"
  ON lead_notes FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_services"
  ON services FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_case_studies"
  ON case_studies FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_case_study_media"
  ON case_study_media FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_team"
  ON team_members FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_clients"
  ON clients FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_testimonials"
  ON testimonials FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_read_analytics"
  ON analytics_events FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "admin_all_admin_users"
  ON admin_users FOR ALL
  USING (auth.uid() = id);

-- ════════════════════════════════════════════════════════════
-- SUPABASE REALTIME — enable tables for CDC broadcasting
-- ════════════════════════════════════════════════════════════
ALTER PUBLICATION supabase_realtime ADD TABLE leads;
ALTER PUBLICATION supabase_realtime ADD TABLE lead_notes;
ALTER PUBLICATION supabase_realtime ADD TABLE case_studies;

-- ════════════════════════════════════════════════════════════
-- SEED DATA — Service catalog
-- ════════════════════════════════════════════════════════════
INSERT INTO services (slug, category, title, short_desc, icon, display_order) VALUES
  ('brand-strategy',         'digital_marketing', 'Brand strategy',           'Build a brand that attracts premium clients',    'Compass',       1),
  ('campaign-management',    'digital_marketing', 'Campaign management',       'End-to-end social and digital campaign execution','Megaphone',     2),
  ('performance-marketing',  'digital_marketing', 'Performance marketing',     'ROI-driven paid media and conversion funnels',   'TrendingUp',    3),
  ('corporate-photography',  'photography',       'Corporate photography',     'Executive portraits and brand imagery',          'Camera',        4),
  ('product-photography',    'photography',       'Product photography',       'Commercial-grade product visuals',               'Aperture',      5),
  ('real-estate-photography','photography',       'Real estate photography',   'Architectural and interior photography',         'Building2',     6),
  ('event-photography',      'photography',       'Event photography',         'Conferences, galas, and corporate events',       'CalendarDays',  7),
  ('corporate-video',        'videography',       'Corporate video',           'Professional company story films',               'Video',         8),
  ('advertising-video',      'videography',       'Advertising video',         'High-impact commercial production',              'PlayCircle',    9),
  ('social-reels',           'videography',       'Social media reels',        'Scroll-stopping short-form content',             'Smartphone',   10),
  ('brand-films',            'videography',       'Brand storytelling films',  'Cinematic narrative productions',                'Film',         11),
  ('ui-ux-design',           'website_design',    'UI/UX design',              'User-centred interface and experience design',   'Layers',       12),
  ('landing-pages',          'website_design',    'Landing pages',             'Conversion-optimised campaign pages',            'Layout',       13),
  ('business-websites',      'website_design',    'Business websites',         'Full-stack Next.js web solutions',               'Globe',        14);
