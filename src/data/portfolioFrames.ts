export type PortfolioFrame = {
  id: number;
  src: string;
  label: string;
  caption: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const portfolioFrames: PortfolioFrame[] = [
  {
    id: 1,
    src: '/images/6M2B3586.jpg',
    label: 'Brand Story Concepts',
    caption: 'Campaign concepts aligned to audience intent and channel behavior.',
    challenge: 'Inconsistent messaging across channels caused low lead quality.',
    approach: 'Built a unified narrative framework and campaign-specific creative angles.',
    outcome: 'Improved message consistency and increased qualified enquiry intent.',
  },
  {
    id: 2,
    src: '/images/6M2B3648.jpg',
    label: 'Creative Production',
    caption: 'High-quality assets built for paid, organic, and landing page conversion.',
    challenge: 'Creative assets looked strong but were not optimized for conversion.',
    approach: 'Produced modular assets by funnel stage and channel consumption patterns.',
    outcome: 'Higher engagement quality and clearer click-through behavior across campaigns.',
  },
  {
    id: 3,
    src: '/images/6M2B3651.jpg',
    label: 'Channel Launch',
    caption: 'Coordinated launch across social, website, and retargeting touchpoints.',
    challenge: 'Campaign launches were fragmented with weak retargeting continuity.',
    approach: 'Launched synchronized channel sequencing with aligned landing messaging.',
    outcome: 'Stronger funnel progression from awareness to booked calls.',
  },
  {
    id: 4,
    src: '/images/6M2B3655.jpg',
    label: 'Performance Iteration',
    caption: 'Weekly optimization loops focused on lead quality and acquisition cost.',
    challenge: 'No reliable optimization cycle existed after campaigns went live.',
    approach: 'Introduced weekly reporting rituals with creative and audience iteration.',
    outcome: 'Lower cost per qualified action and more predictable month-over-month growth.',
  },
];