import {
  ServiceItem,
  SpeakingItem,
  PillarItem,
  CaseStudyItem,
  Testimonial,
} from "../types";

export const MONOGRAM_IMG =
  "https://lh3.googleusercontent.com/aida/AEtjO1UQTmwHH99-bCmAroXjruLAKOvHDoAieBv7W8Db8PpI5i6fxdtPvhcP49SyCz0MeCZvA4CBgKVSO04MrNtA5dyzIHYlL283NYFzp7vNm4f_SkNXW56xP_zz9l7-5dNqk2v5Xdwyv0JUXlpwrUVZG-YxxRe1gu9ujA2XWIIxbmQ07NIeSuoICm8eYetgzKNQaU_wqby_U-37urwp4lItilHTc6F2a1Z_oIDUrj96D-j277mufVRn-1ZYDAc0";

export const HERO_PORTRAIT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJXRAXrZ_FMQx3a09R7rWc0l5bqWgymmdSA9z31sJLP8cAJbRVsMlCu3_DWZ6eGxmTMs8nRUE5UAxUw1AuF0t05e1cvEMIET9iFsHp_hJPlUSxE8uE6HcgHP20VKe4prZSanhAILgWA-5BwrlSkdztAESIz2p_sCnafIOn176FtHNRkfqt0Zvzp_ZZvL0vvHBo67OX369yiIFmdGJRdlePKB1JtiriGu2hoELcxCXjQLDuPCzZY7Ua4TM3rN0h7GvYxks";

export const ABOUT_PORTRAIT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBT7rmn6noF5mpl9AbbHiIHbPz2tMvlExLRMn3uB7DBsLmmE6D0GZF0UCdV4_Yt6wJ8a0mcH4_SHGSFmx3LAJHHEB7gnTbHRtkE_yiaD-XwlKTWSl5mdTmgQLAtMs6W8t6Kyb0W7Kvwl6LTHcQnsc9X1mLJdS5RgoatZAjy0vHy8HzNosQaR4deBsrnjhNVRlKHe_HUGt2axYHYeY4ju3PB1OkLDnDf1ns8S7M7FHpglJfLhdWy4Xev-fIZs8xG7RQ_3o4";

export const PILLARS: PillarItem[] = [
  {
    category: "Decision Clarity",
    title: "Strategy",
    subtitle: "Informed, high-conviction roadmap",
    iconName: "psychology",
    glowColor: "secondary",
  },
  {
    category: "Tech Perspective",
    title: "Computer Sci.",
    subtitle: "Systemic technical intuition",
    iconName: "code",
    glowColor: "sky",
  },
  {
    category: "Growth Engine",
    title: "Scale & Ops",
    subtitle: "Sustainable monetization & reach",
    iconName: "trending_up",
    glowColor: "indigo",
  },
  {
    category: "Value Framing",
    title: "Communication",
    subtitle: "Compelling narrative & brand trust",
    iconName: "campaign",
    glowColor: "secondary",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-strategy",
    number: "01",
    title: "Business Strategy",
    description:
      "Helping businesses make better decisions through clear strategies that drive sustainable growth.",
    tags: ["Strategic Roadmapping", "Problem Resolution"],
    iconName: "balance",
    colorTheme: "secondary",
    details: {
      overview:
        "Comprehensive strategic assessments and directional roadmapping designed to identify leverage points, de-risk pivotal decisions, and craft defensive competitive moats.",
      deliverables: [
        "Business growth strategy",
        "Market positioning",
        "Strategic planning",
        "Opportunity identification",
      ],
      outcomes: [
        "Elimination of organizational ambiguity and misaligned initiatives",
        "Measurable acceleration in key executive milestones and operational clarity",
        "Capital-efficient strategic moves tailored to changing market dynamics",
      ],
    },
  },
  {
    id: "business-development",
    number: "02",
    title: "Business Development",
    description:
      "Helping businesses identify opportunities, build relationships, and create pathways for long-term growth.",
    tags: ["Partnerships", "Expansion", "Sustainable Scale"],
    iconName: "rocket_launch",
    colorTheme: "sky",
    details: {
      overview:
        "Designing and executing high-leverage commercial expansion pipelines, strategic alliances, and commercial distribution channels that compound growth.",
      deliverables: [
        "Partnership strategy",
        "Client acquisition",
        "Market expansion",
        "Opportunity development",
      ],
      outcomes: [
        "Diversification of revenue streams through enterprise partnerships",
        "Shortened sales and partnership gestation cycles",
        "Scalable go-to-market motions with repeatable unit economics",
      ],
    },
  },
  {
    id: "marketing-strategy",
    number: "03",
    title: "Marketing Strategy",
    description:
      "Developing marketing strategies that help businesses reach the right audience and communicate their value effectively.",
    tags: ["Value Framing", "Audience Engagement"],
    iconName: "campaign",
    colorTheme: "indigo",
    details: {
      overview:
        "Transforming technical or complex offerings into crystal-clear value propositions that resonate with decision-makers and accelerate customer acquisition.",
      deliverables: [
        "Go-to-market strategy",
        "Customer positioning",
        "Marketing planning",
        "Value proposition",
      ],
      outcomes: [
        "Substantial lift in customer trust and perceived commercial value",
        "Reduced customer acquisition friction and higher contract velocity",
        "Consistent, authoritative market positioning across touchpoints",
      ],
    },
  },
  {
    id: "brand-strategy",
    number: "04",
    title: "Brand Strategy",
    description:
      "Building brands that earn trust, communicate clearly, and stand out in competitive markets.",
    tags: ["Brand Equity", "Authority", "Market Influence"],
    iconName: "auto_awesome",
    colorTheme: "amber",
    details: {
      overview:
        "Constructing institutional credibility and category leadership through deliberate brand positioning, thought-leadership architecture, and market presence.",
      deliverables: [
        "Brand positioning",
        "Brand messaging",
        "Brand identity direction",
        "Brand development",
      ],
      outcomes: [
        "Pricing power and elevated willingness-to-pay from clients",
        "Distinctive category association that outlasts ad campaigns",
        "Elevated investor and stakeholder confidence",
      ],
    },
  },
  {
    id: "public-speaking",
    number: "05",
    title: "Public Speaking",
    description:
      "Speaking on business strategy, marketing, innovation, entrepreneurship, and business growth to inspire better thinking and practical action.",
    tags: [
      "Business Strategy",
      "Entrepreneurship",
      "Innovation",
      "Leadership & Growth",
    ],
    iconName: "podium",
    colorTheme: "emerald",
    details: {
      overview:
        "High-impact keynotes, executive workshops, and fireside sessions tailored for corporate offsites, industry summits, and founder retreats.",
      deliverables: [
        "Customized Keynote Addresses & Moderated Panels",
        "Interactive Executive Strategy War-Rooms & Masterclasses",
        "Follow-Up Actionable Takeaway Briefs for Attendees",
      ],
      outcomes: [
        "Inspired, unified teams with common strategic vocabulary",
        "Actionable frameworks founders and leaders can apply immediately",
        "High-conviction alignment on innovation priorities",
      ],
    },
  },
  {
    id: "technology-strategy",
    number: "06",
    title: "Technology Strategy",
    description:
      "Helping organizations align technology with business objectives to improve efficiency, innovation, and long-term value.",
    tags: [
      "Digital Transformation",
      "Technology Consulting",
      "Business Innovation",
      "Operational Efficiency",
    ],
    iconName: "memory",
    colorTheme: "blue",
    details: {
      overview:
        "Strategic technology advisory sessions, digital transformation planning, and technology roadmaps designed to help businesses make informed decisions, streamline operations, and build sustainable competitive advantages.",
      deliverables: [
        "Technology Assessments & Digital Transformation Roadmaps",
        "Business-Aligned Technology Recommendations & Implementation Plans",
        "Process Optimization Strategies & Technology Investment Priorities",
      ],
      outcomes: [
        "Better alignment between technology investments and business goals",
        "Improved operational efficiency through smarter technology adoption",
        "A scalable technology foundation for innovation and long-term growth",
      ],
    },
  },
];

export const SPEAKING: SpeakingItem[] = [
  {
    id: "biz-strat",
    name: "Business Strategy",
    iconName: "chess",
    colorTheme: "secondary",
    description:
      "Helping organizations make better decisions through clear strategy and long-term thinking.",
  },
  {
    id: "biz-growth",
    name: "Business Growth",
    iconName: "storefront",
    colorTheme: "sky",
    description:
      "Building businesses that grow sustainably through intentional decisions and value creation.",
  },
  {
    id: "marketing",
    name: "Marketing Strategy",
    iconName: "insights",
    colorTheme: "amber",
    description:
      "Communicating value, reaching the right audience, and creating meaningful customer connections.",
  },
  {
    id: "branding",
    name: "Branding",
    iconName: "loyalty",
    colorTheme: "indigo",
    description:
      "Building brands that inspire trust, stand out, and create lasting impact.",
  },
  {
    id: "innovation",
    name: "Innovation",
    iconName: "cyclone",
    colorTheme: "emerald",
    description:
      "Using innovation and strategic thinking to solve business challenges and uncover new opportunities.",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    iconName: "lightbulb",
    colorTheme: "sky",
    description:
      "Lessons on starting, growing, and sustaining businesses in an ever-changing world.",
  },
  {
    id: "leadership",
    name: "Leadership & Communication",
    iconName: "diversity_3",
    colorTheme: "secondary",
    description:
      "Leading with clarity, influencing people, and communicating ideas that inspire action.",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "1",
    number: "01",
    title: "Scaling a Growing Retail Business",
    img_url: ABOUT_PORTRAIT_IMG,
    description:
      "Helping a growing retailer streamline operations, manage rising demand, and build a sustainable growth strategy.",
    iconName: "chess",
    colorTheme: "secondary",
    details: {
      challenge:
        "A retail business struggled to manage rising demand, inconsistent sales, and increasing operating costs.",
      approach:
        "Analyzed sales performance, customer behavior, inventory processes, and operational expenses to identify growth opportunities.",
      solution:
        "Developed a scalable growth strategy, improved inventory management, and introduced data-driven sales planning.",
      impact:
        "Established a clearer growth roadmap, improved operational efficiency, and created a foundation for sustainable expansion.",
    },
  },
  {
    id: "2",
    number: "02",
    title: "Improving Operational Efficiency",
    img_url: ABOUT_PORTRAIT_IMG,
    description:
      "Optimizing workflows and team coordination to reduce inefficiencies and improve service delivery.",
    iconName: "settings",
    colorTheme: "sky",
    details: {
      challenge:
        "A service-based company experienced project delays, duplicated tasks, and poor coordination across departments.",
      approach:
        "Mapped existing workflows, identified bottlenecks, and evaluated team responsibilities and resource allocation.",
      solution:
        "Redesigned key workflows, clarified team responsibilities, and recommended automation for repetitive administrative tasks.",
      impact:
        "Reduced process inefficiencies, strengthened team accountability, and improved overall service delivery.",
    },
  },
  {
    id: "3",
    number: "03",
    title: "Building a Stronger Market Position",
    img_url: ABOUT_PORTRAIT_IMG,
    description:
      "Helping an emerging brand stand out, reach the right audience, and communicate its unique value.",
    iconName: "target",
    colorTheme: "indigo",
    details: {
      challenge:
        "An emerging brand struggled to differentiate itself in a competitive market and attract its ideal customers.",
      approach:
        "Conducted market research, competitor analysis, customer segmentation, and brand positioning assessments.",
      solution:
        "Created a targeted positioning strategy, refined the value proposition, and developed a customer-focused marketing plan.",
      impact:
        "Improved brand clarity, strengthened audience targeting, and established a more focused path to market growth.",
    },
  },
  {
    id: "4",
    number: "04",
    title: "Transforming Customer Experience",
    img_url: ABOUT_PORTRAIT_IMG,
    description:
      "Creating better customer journeys through responsive support, consistent processes, and actionable feedback.",
    iconName: "groups",
    colorTheme: "amber",
    details: {
      challenge:
        "A growing business faced declining customer satisfaction due to slow responses, inconsistent support, and limited feedback systems.",
      approach:
        "Reviewed customer journeys, support processes, complaint patterns, and communication channels to identify service gaps.",
      solution:
        "Designed a customer experience improvement plan with standardized support processes, feedback collection, and response guidelines.",
      impact:
        "Created a more consistent customer experience, improved support accountability, and strengthened customer retention strategies.",
    },
  },
  {
    id: "5",
    number: "05",
    title: "Developing a Sustainable Business Model",
    img_url: ABOUT_PORTRAIT_IMG,
    description:
      "Building a practical financial and operational framework to support long-term business sustainability.",
    iconName: "query_stats",
    colorTheme: "emerald",
    details: {
      challenge:
        "A startup had a promising product but lacked a clear revenue model, reliable cost structure, and long-term financial direction.",
      approach:
        "Evaluated the target market, revenue opportunities, operating costs, pricing assumptions, and business risks.",
      solution:
        "Refined the business model, recommended pricing adjustments, and established financial projections and measurable milestones.",
      impact:
        "Provided a clearer path to profitability, stronger financial planning, and a practical framework for sustainable growth.",
    },
  },
  {
    id: "6",
    number: "06",
    title: "Leading a Digital Transformation",
    img_url: ABOUT_PORTRAIT_IMG,
    description:
      "Modernizing business processes with digital tools and automation to improve productivity and scalability.",
    iconName: "monitor",
    colorTheme: "blue",
    details: {
      challenge:
        "A traditional business relied on manual processes that limited productivity, visibility, and its ability to serve more customers.",
      approach:
        "Assessed existing systems, employee workflows, technology gaps, and opportunities for digital adoption.",
      solution:
        "Developed a phased digital transformation roadmap covering process automation, modern business tools, and employee training.",
      impact:
        "Improved digital readiness, streamlined routine operations, and positioned the business to scale more effectively.",
    },
  },
];

export const PHILOSOPHY_QUOTE = {
  quote:
    "“I believe great talks don't just inspire, they equip. Every audience should leave with practical ideas, clearer thinking, and the confidence to take meaningful action.”",
  author: "Prince Chinedum",
  role: "Business Strategist",
};

export const CONTACT_INFO = {
  email: "princechinedum001@gmail.com",
  linkedin: "https://linkedin.com/in/princechinedum",
  linkedinHandle: "/in/princechinedum",
  twitter: "https://x.com/princechinedum_",
  twitterHandle: "@princechinedum_",
  instagram: "https://instagram.com/princechinedum_",
  facebook: "https://facebook.com/princechinedum01",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "He took a problem we had been circling for a year and reduced it to three decisions. Within a quarter we had a plan the whole leadership team could get behind and actually execute.",
    name: "Amaka Obi",
    role: "Chief Operating Officer",
    company: "Northgate Logistics",
    accent: "gold",
    outcome: "Cut delivery costs by 18% in two quarters",
  },
  {
    id: "t2",
    quote:
      "Clear thinking, no jargon. Every workshop ended with owners and deadlines, not a slide deck nobody would open again.",
    name: "Tunde Adeyemi",
    role: "Managing Director",
    company: "Brightfield Energy",
    accent: "blue",
  },
  {
    id: "t3",
    quote:
      "He challenged our assumptions without making the team defensive. That is a rare skill, and it changed how we plan.",
    name: "Grace Eze",
    role: "Head of Strategy",
    company: "Meridian Bank",
    accent: "green",
  },
  {
    id: "t4",
    quote:
      "We launched the new service line six weeks ahead of schedule because the roadmap he built left no room for ambiguity.",
    name: "Daniel Okafor",
    role: "Founder & CEO",
    company: "Kora Digital",
    accent: "gold",
  },
];
