export type PlaceholderSection = {
  heading: string;
  body: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  updatedAt: string;
  featured: boolean;
  tags: string[];
  placeholderSections: PlaceholderSection[];
};

export type FeatureCard = {
  title: string;
  description: string;
  href: string;
};

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Flight Deals", href: "/#feature-cards" },
  { label: "Destinations", href: "/#article-index" },
  { label: "Road Trips", href: "/#feature-cards" },
  { label: "Tips & Hacks", href: "/#latest-articles" },
  { label: "About", href: "/#about" },
] as const;

export const featureCards: FeatureCard[] = [
  {
    title: "Flight Hacks",
    description:
      "Practical ways to search smarter, time price drops, and avoid hidden airline fees in a high-fare summer.",
    href: "/articles/how-to-find-cheap-flights-in-2026",
  },
  {
    title: "Cheapest Destinations",
    description:
      "Find cities, parks, and beach escapes that still feel like a vacation without crushing a family budget.",
    href: "/articles/10-cheapest-us-destinations-for-summer-2026",
  },
  {
    title: "Road Trip Tips",
    description:
      "Stretch every gas stop, campsite, motel night, and national park pass with a smarter summer route.",
    href: "/articles/budget-road-trip-planning-guide",
  },
  {
    title: "Travel Credit Cards",
    description:
      "Compare cashback and points options that can actually offset summer travel costs for real-world trips.",
    href: "/articles/best-travel-credit-cards-2026",
  },
];

export const articles: Article[] = [
  {
    slug: "2026-summer-travel-crisis-explained",
    title: "2026 Summer Travel Crisis Explained",
    category: "Flight Deals",
    excerpt:
      "A quick breakdown of why airfare is surging in 2026, from airline shakeups to fuel pressure and aggressive pricing.",
    readTime: "6 min read",
    updatedAt: "May 2026",
    featured: false,
    tags: ["summer travel 2026", "cheap flights 2026", "travel trends"],
    placeholderSections: [
      {
        heading: "Why This Summer Feels Different",
        body: "This placeholder article introduces the forces pushing summer travel costs higher in 2026. The final version will explain how airline bankruptcies, capacity shifts, fuel volatility, and stronger seasonal demand are combining to raise prices faster than many travelers expected.",
      },
      {
        heading: "What Budget Travelers Should Watch",
        body: "The completed guide will show readers how to track route-level price changes, spot the difference between dynamic pricing and normal seasonal increases, and decide when to swap flights for road trips or shorter stays.",
      },
      {
        heading: "How This Site Helps",
        body: "This page is currently a structured placeholder. It will expand into a full editorial guide with airline context, fare examples, budget-saving alternatives, and links to related articles across flights, road trips, and destination planning.",
      },
    ],
  },
  {
    slug: "10-cheapest-us-destinations-for-summer-2026",
    title: "10 Cheapest US Destinations for Summer 2026",
    category: "Destinations",
    excerpt:
      "Explore affordable cities and low-cost getaways where hotel rates, food, and local activities still make sense in 2026.",
    readTime: "8 min read",
    updatedAt: "May 2026",
    featured: true,
    tags: ["budget summer vacation", "cheapest us destinations 2026", "family travel"],
    placeholderSections: [
      {
        heading: "How We Define Cheap",
        body: "The final article will rank destination value using a budget-focused lens: transportation cost, lodging flexibility, free activity density, and how easily a family or student traveler can keep daily expenses under control.",
      },
      {
        heading: "The Mix of Cities and Nature",
        body: "Expect a balanced list of beach towns, mountain escapes, secondary cities, and national-park gateways. Each entry will highlight what makes it affordable and where travelers are most likely to overspend.",
      },
      {
        heading: "What Comes Next",
        body: "This placeholder will become a fully formatted destination roundup with mini profiles, seasonal pricing notes, and follow-up planning links so readers can move from inspiration to action quickly.",
      },
    ],
  },
  {
    slug: "budget-road-trip-planning-guide",
    title: "Budget Road Trip Planning Guide",
    category: "Road Trips",
    excerpt:
      "A starter framework for saving on gas, lodging, food, and park access without turning your road trip into hard work.",
    readTime: "7 min read",
    updatedAt: "May 2026",
    featured: true,
    tags: ["summer road trip tips", "road trip budget", "national parks"],
    placeholderSections: [
      {
        heading: "Build a Lower-Cost Route",
        body: "The full version will cover how to choose realistic drive windows, cluster high-value stops, and reduce expensive detours that quietly increase fuel and lodging costs during summer peak season.",
      },
      {
        heading: "Sleep Smarter, Not Rougher",
        body: "Readers will get side-by-side guidance for camping, basic motels, cabin rentals, and mixed lodging strategies so they can balance comfort, kids, weather, and cost without overpaying.",
      },
      {
        heading: "Where This Guide Will Expand",
        body: "This placeholder page will later include printable-style planning checklists, packing reminders, and sample trip structures for families, couples, and backpackers.",
      },
    ],
  },
  {
    slug: "best-travel-credit-cards-2026",
    title: "Best Travel Credit Cards 2026",
    category: "Tips & Hacks",
    excerpt:
      "A plain-English placeholder for comparing travel cards by annual fee, reward style, and real usefulness for summer trips.",
    readTime: "9 min read",
    updatedAt: "May 2026",
    featured: false,
    tags: ["best travel credit cards 2026", "affiliate", "cashback"],
    placeholderSections: [
      {
        heading: "What Real Travelers Need",
        body: "The completed article will focus on practical value instead of hype, comparing cashback cards, flexible points cards, and premium options based on how real summer travelers actually spend on flights, hotels, rental cars, and baggage fees.",
      },
      {
        heading: "Comparisons That Matter",
        body: "Rather than listing benefits without context, the full page will explain annual-fee tradeoffs, transfer partner value, travel protections, and which cards fit families versus solo travelers.",
      },
      {
        heading: "Transparency First",
        body: "This placeholder signals future affiliate-aware content that stays editorially independent. The final version will clearly separate sponsored relationships from independent comparisons.",
      },
    ],
  },
  {
    slug: "how-to-find-cheap-flights-in-2026",
    title: "How to Find Cheap Flights in 2026",
    category: "Flight Deals",
    excerpt:
      "Learn the search habits, price alerts, and booking timing patterns that still work even when average fares stay high.",
    readTime: "6 min read",
    updatedAt: "May 2026",
    featured: true,
    tags: ["cheap flights 2026", "kayak", "google flights"],
    placeholderSections: [
      {
        heading: "The Search Stack",
        body: "The full article will outline how to combine tools like Google Flights, KAYAK, and Skyscanner for stronger fare visibility instead of relying on a single app or one-time search.",
      },
      {
        heading: "Timing and Flexibility",
        body: "Readers will see how flexibility in airport choice, trip length, and midweek departures can matter more than chasing mythical universal booking windows.",
      },
      {
        heading: "Future Expansion",
        body: "This placeholder will later include screenshot-ready workflows, alert strategies, and fee-awareness checklists for carry-on, seat selection, and change costs.",
      },
    ],
  },
  {
    slug: "fifa-world-cup-2026-cities-guide",
    title: "FIFA World Cup 2026 Cities Guide",
    category: "Destinations",
    excerpt:
      "A placeholder guide to which host cities may be worth the splurge and which ones could punish a tight budget the hardest.",
    readTime: "7 min read",
    updatedAt: "May 2026",
    featured: false,
    tags: ["fifa world cup 2026 us cities", "city guide", "travel costs"],
    placeholderSections: [
      {
        heading: "Value vs. Hype",
        body: "The final article will compare host cities by lodging pressure, transit convenience, local attractions, and whether travelers can turn a match trip into a broader budget-friendly vacation.",
      },
      {
        heading: "Where Costs Spike Fast",
        body: "This section will eventually outline how event demand changes hotel pricing, short-term rentals, and airport congestion, helping readers avoid cities where prices rise faster than the experience justifies.",
      },
      {
        heading: "What Readers Will Get Later",
        body: "This placeholder will expand into a planning guide with city tiers, spending warnings, and side-trip suggestions for travelers considering a World Cup add-on itinerary.",
      },
    ],
  },
  {
    slug: "250th-anniversary-free-events",
    title: "250th Anniversary Free Events",
    category: "Tips & Hacks",
    excerpt:
      "A placeholder roundup for free or low-cost America 250 events that can anchor a memorable summer without major ticket spend.",
    readTime: "5 min read",
    updatedAt: "May 2026",
    featured: false,
    tags: ["250th anniversary free events", "free things to do", "summer 2026"],
    placeholderSections: [
      {
        heading: "Why Free Events Matter in 2026",
        body: "For travelers facing higher transportation costs, free public events can create the backbone of a trip budget. The finished article will organize celebrations by region, family friendliness, and planning complexity.",
      },
      {
        heading: "What the Final List Will Include",
        body: "Readers can expect event categories, date windows, crowd-level expectations, and ideas for combining free celebrations with low-cost overnight stays or road trip routes.",
      },
      {
        heading: "Current State of the Page",
        body: "This is a content placeholder intended to become a practical calendar-style resource once confirmed event schedules and city programs are finalized.",
      },
    ],
  },
  {
    slug: "packing-hacks-to-save-on-baggage-fees",
    title: "Packing Hacks to Save on Baggage Fees",
    category: "Tips & Hacks",
    excerpt:
      "A placeholder for carry-on strategy, family packing logic, and small decisions that prevent baggage charges from eating your budget.",
    readTime: "4 min read",
    updatedAt: "May 2026",
    featured: false,
    tags: ["packing hacks", "baggage fees", "budget travel"],
    placeholderSections: [
      {
        heading: "The Hidden Cost Problem",
        body: "Budget travelers often focus on base fares but lose money to checked bags, overweight fees, and poorly planned family packing. The full article will show how to reduce those charges before checkout and at the airport.",
      },
      {
        heading: "Smarter Packing Systems",
        body: "The final guide will compare packing cubes, personal-item strategies, shared family toiletries, and warm-weather clothing planning to help readers travel lighter without stress.",
      },
      {
        heading: "Next Version of This Page",
        body: "This placeholder will grow into a more tactical packing guide with airline-fee awareness, product recommendations, and scenario-based tips for short breaks and longer summer trips.",
      },
    ],
  },
];

/**
 * 返回首页最新展示的文章列表。
 */
export function getLatestArticles(): Article[] {
  return articles.slice(0, 3);
}

/**
 * 根据 slug 返回对应的文章占位内容。
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/**
 * 返回所有可用于静态生成的文章路径参数。
 */
export function getArticleParams(): Array<{ slug: string }> {
  return articles.map((article) => ({ slug: article.slug }));
}

/**
 * 返回除当前文章外的推荐阅读列表。
 */
export function getRelatedArticles(slug: string): Article[] {
  return articles.filter((article) => article.slug !== slug).slice(0, 3);
}
