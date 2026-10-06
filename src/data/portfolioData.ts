import { ServiceItem, InterestItem, PillarItem } from '../types';

export const MONOGRAM_IMG = 'https://lh3.googleusercontent.com/aida/AEtjO1UQTmwHH99-bCmAroXjruLAKOvHDoAieBv7W8Db8PpI5i6fxdtPvhcP49SyCz0MeCZvA4CBgKVSO04MrNtA5dyzIHYlL283NYFzp7vNm4f_SkNXW56xP_zz9l7-5dNqk2v5Xdwyv0JUXlpwrUVZG-YxxRe1gu9ujA2XWIIxbmQ07NIeSuoICm8eYetgzKNQaU_wqby_U-37urwp4lItilHTc6F2a1Z_oIDUrj96D-j277mufVRn-1ZYDAc0';

export const HERO_PORTRAIT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJXRAXrZ_FMQx3a09R7rWc0l5bqWgymmdSA9z31sJLP8cAJbRVsMlCu3_DWZ6eGxmTMs8nRUE5UAxUw1AuF0t05e1cvEMIET9iFsHp_hJPlUSxE8uE6HcgHP20VKe4prZSanhAILgWA-5BwrlSkdztAESIz2p_sCnafIOn176FtHNRkfqt0Zvzp_ZZvL0vvHBo67OX369yiIFmdGJRdlePKB1JtiriGu2hoELcxCXjQLDuPCzZY7Ua4TM3rN0h7GvYxks';

export const ABOUT_PORTRAIT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT7rmn6noF5mpl9AbbHiIHbPz2tMvlExLRMn3uB7DBsLmmE6D0GZF0UCdV4_Yt6wJ8a0mcH4_SHGSFmx3LAJHHEB7gnTbHRtkE_yiaD-XwlKTWSl5mdTmgQLAtMs6W8t6Kyb0W7Kvwl6LTHcQnsc9X1mLJdS5RgoatZAjy0vHy8HzNosQaR4deBsrnjhNVRlKHe_HUGt2axYHYeY4ju3PB1OkLDnDf1ns8S7M7FHpglJfLhdWy4Xev-fIZs8xG7RQ_3o4';

export const PILLARS: PillarItem[] = [
  {
    category: 'Decision Clarity',
    title: 'Strategy',
    subtitle: 'Informed, high-conviction roadmap',
    iconName: 'psychology',
    glowColor: 'secondary'
  },
  {
    category: 'Tech Perspective',
    title: 'Computer Sci.',
    subtitle: 'Systemic technical intuition',
    iconName: 'code',
    glowColor: 'sky'
  },
  {
    category: 'Growth Engine',
    title: 'Scale & Ops',
    subtitle: 'Sustainable monetization & reach',
    iconName: 'trending_up',
    glowColor: 'indigo'
  },
  {
    category: 'Value Framing',
    title: 'Communication',
    subtitle: 'Compelling narrative & brand trust',
    iconName: 'campaign',
    glowColor: 'secondary'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-strategy',
    number: '01',
    title: 'Business Strategy',
    description: 'Helping businesses make better decisions through strategic planning and problem-solving.',
    tags: ['Strategic Roadmapping', 'Problem Resolution'],
    iconName: 'balance',
    colorTheme: 'secondary',
    details: {
      overview: 'Comprehensive strategic assessments and directional roadmapping designed to identify leverage points, de-risk pivotal decisions, and craft defensive competitive moats.',
      deliverables: [
        'Strategic Diagnostic & Competitive Landscape Map',
        'Executive Decision Frameworks & Resource Allocation',
        'Multi-Year Horizon Growth Roadmap'
      ],
      outcomes: [
        'Elimination of organizational ambiguity and misaligned initiatives',
        'Measurable acceleration in key executive milestones and operational clarity',
        'Capital-efficient strategic moves tailored to changing market dynamics'
      ]
    }
  },
  {
    id: 'business-development',
    number: '02',
    title: 'Business Development',
    description: 'Identifying opportunities, building partnerships, and creating sustainable growth strategies.',
    tags: ['Partnerships', 'Expansion', 'Sustainable Scale'],
    iconName: 'rocket_launch',
    colorTheme: 'sky',
    details: {
      overview: 'Designing and executing high-leverage commercial expansion pipelines, strategic alliances, and commercial distribution channels that compound growth.',
      deliverables: [
        'Partnership Architecture & Negotiation Support',
        'Market Entry & Expansion Playbook',
        'Commercial Model Optimization & Monetization Audit'
      ],
      outcomes: [
        'Diversification of revenue streams through enterprise partnerships',
        'Shortened sales and partnership gestation cycles',
        'Scalable go-to-market motions with repeatable unit economics'
      ]
    }
  },
  {
    id: 'marketing-strategy',
    number: '03',
    title: 'Marketing Strategy',
    description: 'Developing strategies that help businesses communicate value and connect with the right audience.',
    tags: ['Value Framing', 'Audience Engagement'],
    iconName: 'campaign',
    colorTheme: 'indigo',
    details: {
      overview: 'Transforming technical or complex offerings into crystal-clear value propositions that resonate with decision-makers and accelerate customer acquisition.',
      deliverables: [
        'Value Proposition & Core Narrative Formulation',
        'Target ICP Segmentation & Channel Prioritization',
        'Lifecycle Conversion & Retention Architecture'
      ],
      outcomes: [
        'Substantial lift in customer trust and perceived commercial value',
        'Reduced customer acquisition friction and higher contract velocity',
        'Consistent, authoritative market positioning across touchpoints'
      ]
    }
  },
  {
    id: 'brand-strategy',
    number: '04',
    title: 'Brand Strategy',
    description: 'Helping businesses build credible, memorable, and influential brands.',
    tags: ['Brand Equity', 'Authority', 'Market Influence'],
    iconName: 'auto_awesome',
    colorTheme: 'amber',
    details: {
      overview: 'Constructing institutional credibility and category leadership through deliberate brand positioning, thought-leadership architecture, and market presence.',
      deliverables: [
        'Brand Identity Architecture & Guidelines',
        'Executive & Corporate Reputation Blueprints',
        'Brand Moat Strategy against Commodity Pressures'
      ],
      outcomes: [
        'Pricing power and elevated willingness-to-pay from clients',
        'Distinctive category association that outlasts ad campaigns',
        'Elevated investor and stakeholder confidence'
      ]
    }
  },
  {
    id: 'public-speaking',
    number: '05',
    title: 'Public Speaking & Keynotes',
    description: 'Speaking on business strategy, entrepreneurship, innovation, leadership, and business growth to empower teams, founders, and business communities with actionable strategic insights.',
    tags: ['Business Strategy', 'Entrepreneurship', 'Innovation', 'Leadership & Growth'],
    iconName: 'podium',
    colorTheme: 'emerald',
    details: {
      overview: 'High-impact keynotes, executive workshops, and fireside sessions tailored for corporate offsites, industry summits, and founder retreats.',
      deliverables: [
        'Customized Keynote Addresses & Moderated Panels',
        'Interactive Executive Strategy War-Rooms & Masterclasses',
        'Follow-Up Actionable Takeaway Briefs for Attendees'
      ],
      outcomes: [
        'Inspired, unified teams with common strategic vocabulary',
        'Actionable frameworks founders and leaders can apply immediately',
        'High-conviction alignment on innovation priorities'
      ]
    }
  }
];

export const INTERESTS: InterestItem[] = [
  {
    id: 'biz-strat',
    name: 'Business Strategy',
    iconName: 'chess',
    colorTheme: 'secondary',
    description: 'Structuring systemic advantages, competitive dynamics, and long-term organizational value.'
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    iconName: 'lightbulb',
    colorTheme: 'sky',
    description: 'Venture creation, founder decision calculus, and scaling from zero to product-market fit.'
  },
  {
    id: 'branding',
    name: 'Branding',
    iconName: 'loyalty',
    colorTheme: 'indigo',
    description: 'Cultivating enduring brand equity, enterprise reputation, and iconic market perception.'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    iconName: 'insights',
    colorTheme: 'amber',
    description: 'Value communication, precision positioning, and high-conversion customer psychology.'
  },
  {
    id: 'innovation',
    name: 'Innovation',
    iconName: 'cyclone',
    colorTheme: 'emerald',
    description: 'Disruptive business models, technological inflection points, and adaptive business design.'
  },
  {
    id: 'biz-dev',
    name: 'Business Dev.',
    iconName: 'storefront',
    colorTheme: 'sky',
    description: 'Forging strategic partnerships, opening new market corridors, and institutional alliances.'
  },
  {
    id: 'leadership',
    name: 'Leadership',
    iconName: 'diversity_3',
    colorTheme: 'secondary',
    description: 'Executive alignment, culture velocity, and high-performance decision governance.'
  },
  {
    id: 'technology',
    name: 'Technology',
    iconName: 'terminal',
    colorTheme: 'indigo',
    description: 'Harnessing computational paradigms, software architecture, and AI to redefine business.'
  }
];

export const PHILOSOPHY_QUOTE = {
  quote: '“Businesses don’t grow because they do more. They grow because they solve better problems.”',
  author: 'Prince Chinedum',
  role: 'Strategic Maxim'
};

export const CONTACT_INFO = {
  email: 'hello@princechinedum.com',
  linkedin: 'https://linkedin.com/in/princechinedum',
  linkedinHandle: '/in/princechinedum',
  twitter: 'https://x.com/princechinedum',
  twitterHandle: '@princechinedum'
};
