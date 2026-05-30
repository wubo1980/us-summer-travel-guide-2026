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
      "Spirit Airlines collapsed, jet fuel prices doubled, and airlines are cutting capacity. Here's what actually happened to summer 2026 airfare and how budget travelers can still find deals.",
    readTime: "10 min read",
    updatedAt: "May 30, 2026",
    featured: false,
    tags: ["summer travel 2026", "cheap flights 2026", "travel trends"],
    placeholderSections: [
      {
        heading: "The Spirit Airlines Collapse Removed a Key Price Ceiling",
        body: "On May 2, 2026, Spirit Airlines ceased operations entirely — the first shutdown of a major U.S. airline in 25 years. Spirit wasn't just another carrier; it functioned as the industry's pricing floor. Its bare-bones model forced United, Delta, and American to keep basic economy fares competitive on overlapping routes. When Spirit pulled out of Minneapolis-St. Paul (MSP) in late 2025, average fares on its routes doubled. After the full shutdown, route-level data showed immediate spikes: Fort Lauderdale to Dallas jumped from $39 to $124 within 48 hours, and routes Frontier didn't backfill are still running 20% higher two weeks later. Cirium data confirms Spirit's U.S. market share had already shrunk nearly 25% year-over-year before the shutdown, so the worst impact is concentrated in former Spirit hubs like Newark (EWR), Detroit (DTW), Baltimore (BWI), and Fort Lauderdale (FLL).",
      },
      {
        heading: "Jet Fuel Prices Doubled — and Airlines Are Passing It On",
        body: "Since the Iran war began in late February 2026, jet fuel has surged from roughly $2.50 per gallon to nearly $5 by mid-April — the steepest cost jump U.S. carriers have absorbed in decades. Every major airline has responded: United raised fares five times since March, announced a 5% capacity cut, and joined Delta (3.5% cut) and international carriers like KLM, Lufthansa, and Cathay Pacific in pulling unprofitable routes. Airlines are recovering about half of their fuel cost increases through fares, according to industry analysts. The impact isn't uniform: transatlantic routes burn the most fuel per seat and are getting hit hardest, while short-haul domestic and Caribbean routes are holding up better.",
      },
      {
        heading: "KAYAK's Summer 2026 Report: The Data Behind the Crisis",
        body: "KAYAK's Summer 2026 Travel Report reveals the full picture. Overall flight interest is still up 4% year-over-year, with domestic searches climbing 7%. But the good news: nearly half of the most-searched flight destinations for U.S. travelers this summer are trending under $500 roundtrip. Hot trending destinations under that threshold include Valparaiso, Florida (+27% search growth, fares under $500), Asheville, North Carolina (+24%, under $500), Kansas City (+25% as a World Cup host city, under $500), and San Francisco (+23%, under $500). KAYAK's travel trends expert Kayla DeLoache confirms: 'Airfares are especially unpredictable this summer, which can make planning trickier, but with some flexibility and the right tools to compare options, travelers can still find affordable ways to get away.'",
      },
      {
        heading: "Dollar Flight Club Confirms an Uneven Market",
        body: "Dollar Flight Club analyzed 500,000+ airfare data points across 65+ U.S. airports and found fares up 10–15% domestically and roughly 20% to Western Europe. But the data reveals where deals survive. Mexico and Puerto Rico stand out: Puerto Vallarta and San Juan offer sub-$300 roundtrip fares — 30–40% lower than Hawaii. Top affordable international destinations include Leon, Mexico ($185–$288), San Juan, Puerto Rico ($196–$300), and Puerto Vallarta ($228–$355). For Europe, Reykjavik, Dublin, and Stockholm show consistent deal volume with low-end fares from $350–$500 for early-season travel. Founder Jesse Neugarten warns: 'Between Spirit's historic shutdown and fuel prices doubling, this is the most volatile summer travel market in decades. But the deals haven't disappeared — they've just moved.'",
      },
      {
        heading: "The 'Uneven Market' Explained",
        body: "The 2026 summer travel market has created a two-tier reality that industry experts are calling the 'uneven market.' High-income households continue booking summer vacations at record levels — United reported 'the 10 biggest booking weeks in company history' in March, and Delta confirmed healthy demand in its Q1 earnings call. Meanwhile, budget travelers face a triple hit: Spirit's collapse raised the price floor, jet fuel surcharges drove up baseline fares, and airlines are leaning harder on AI-driven dynamic pricing that adjusts fares in real-time throughout the day. Frontier's CEO cited 'durable demand' even as the airline confirmed five fare increases. The result: airlines have little incentive to discount. Budget travelers who can't flex their dates or destination are feeling the most pressure.",
      },
      {
        heading: "What Budget Travelers Can Actually Do",
        body: "Despite the grim backdrop, real strategies still work. (1) Fly mid-August to early September: KAYAK data shows this saves up to 9% on domestic and approximately 42% on international flights versus peak July travel. (2) Go short-haul: Caribbean, Mexico, and Central America routes are burning less fuel per seat and dominated by price-competitive carriers. (3) Use fare alerts: with AI-driven pricing moving fares multiple times daily, KAYAK's Price Alerts and Dollar Flight Club notifications let travelers act on dips. (4) Compare flying vs. driving: KAYAK's Trip Calculator uses real-time gas and airfare data to help decide. (5) Book now: capacity is shrinking weekly, and Dollar Flight Club's Neugarten says unequivocally, 'If you see a deal, book it. Fares aren't going to get cheaper.'",
      },
    ],
  },
  {
    slug: "10-cheapest-us-destinations-for-summer-2026",
    title: "10 Cheapest US Destinations for Summer 2026",
    category: "Destinations",
    excerpt:
      "Asheville, Kansas City, St. George, Bradenton and more — the most affordable US destinations for summer 2026, ranked by KAYAK, Expedia, and Dollar Flight Club data.",
    readTime: "12 min read",
    updatedAt: "May 30, 2026",
    featured: true,
    tags: ["budget summer vacation", "cheapest us destinations 2026", "family travel"],
    placeholderSections: [
      {
        heading: "The Methodology: What Makes a Destination 'Cheap' in 2026?",
        body: "We combined data from three authoritative sources to build this list. KAYAK's Summer 2026 Travel Report identified nearly half of the most-searched destinations as trending under $500 roundtrip. Expedia's Unpack '26 Summer report (released May 21, 2026) ranked domestic destinations by year-over-year accommodation search growth, with beach towns and outdoor hubs dominating. Dollar Flight Club analyzed 500,000+ airfare data points to find the most consistent deal volume. Our 'cheap' threshold: roundtrip airfare under $500, available lodging under $150/night in peak season, and a high density of free or low-cost activities. Every destination on this list meets at least two of those three criteria.",
      },
      {
        heading: "1. Asheville, North Carolina — Mountains + Breweries Under $500",
        body: "Asheville is the standout budget destination of Summer 2026. KAYAK reports it as a top trending domestic destination with +24% search growth and average airfare under $500 roundtrip. Expedia puts it third on its Destinations of the Summer list with +80% accommodation search growth. The Blue Ridge Parkway offers free scenic driving, hundreds of hiking trails require no entry fee, and the city's famous brewery scene costs a fraction of what you'd pay in Portland or Denver. Budget tip: stay in a cabin rental outside the city center (available for $100–$130/night on Vrbo) instead of downtown hotels that run $180+. Asheville is also a strong candidate for a road trip — it's accessible from Charlotte, Atlanta, and Knoxville within easy driving distance.",
      },
      {
        heading: "2. Kansas City, Missouri — World Cup Value Play",
        body: "Kansas City is one of 11 FIFA World Cup 2026 host cities, and KAYAK data shows search interest up +25% year-over-year with fares consistently under $500 roundtrip. Unlike other host cities (New York, Los Angeles, Miami) where lodging prices have spiked dramatically, Kansas City's hotel rates remain accessible — averaging $120–$160/night in summer. The city's famous barbecue scene means food costs stay low, and free attractions include the Nelson-Atkins Museum of Art, the National WWI Museum (small fee), and miles of urban trails. For budget travelers who want a piece of World Cup energy without the $400+/night hotel prices, Kansas City is the smart play.",
      },
      {
        heading: "3. San Antonio, Texas — Rich History, Low Prices",
        body: "San Antonio consistently ranks among the most affordable major U.S. cities for summer travel. The River Walk is free to explore, the Alamo costs nothing, and the city's UNESCO World Heritage Missions are all accessible without a ticket. Hotel prices in summer average $110–$150/night — significantly below comparable warm-weather cities like Austin or Nashville. Dollar Flight Club data confirms Houston and Dallas (both under $200 roundtrip from most U.S. cities) as affordably connected hubs, and San Antonio is an easy add-on via the $1–$2 bus routes between Texas cities. Food costs are among the lowest of any major U.S. destination, with legendary tacos and Tex-Mex available for under $10 per meal.",
      },
      {
        heading: "4. Bradenton / Siesta Key, Florida — Affordable Beach Alternative",
        body: "Expedia's Destinations of the Summer list features two Florida beach entries: Bradenton (+75% search growth) and Siesta Key (+50% search growth). Siesta Key's beach was voted #1 in the U.S. for its powder-white quartz sand — and it's free. What makes these destinations budget-friendly vs. Miami or Fort Lauderdale: lodging averages $130–$170/night in summer (compared to $250+ in South Beach), parking is widely available and mostly free, and dining costs are 30–40% lower than in South Florida tourist zones. Anna Maria Island, accessible from Bradenton, offers free beach access and bike rentals for under $20/day. The trade-off: fewer nightlife options, but for families and budget-minded beachgoers, this is the best Florida beach value in 2026.",
      },
      {
        heading: "5. St. George, Utah — Red Rocks Without Moab Prices",
        body: "St. George topped Expedia's Destinations of the Summer list with a staggering +125% year-over-year search growth. It's the gateway to Zion National Park (45 minutes away), Snow Canyon State Park, and endless red-rock hiking — all accessible for the cost of a National Parks pass ($80/year for all parks). Lodging in St. George itself averages $100–$140/night in summer, roughly half of what you'd pay for a comparable room in Moab or Springdale (Zion's gateway town). The catch: it gets hot — summer afternoons regularly hit 100°F+, so plan hikes for early morning or evening. Fly into Las Vegas (about 2 hours away) for lower airfare, then rent a car for the drive.",
      },
      {
        heading: "6. Tacoma, Washington — Two National Parks, One Budget",
        body: "Tacoma (+120% search growth per Expedia) is the surprise budget destination of the summer. It's the basecamp for both Mount Rainier National Park (2 hours) and Olympic National Park (2.5 hours) — two of the most spectacular national parks in the country, accessible with a single $80 pass. Hotels in Tacoma average $110–$150/night, dramatically cheaper than Seattle's $200+ average. The city itself offers the Museum of Glass ($16 admission), the Washington State History Museum, and the Point Defiance Zoo. Tacoma also made Expedia's Smart Travel Health Check list, meaning the city is investing in sustainable tourism management. Budget move: fly into Sea-Tac (cheaper than Seattle's smaller alternatives), take the light rail, and use Tacoma's free downtown shuttle.",
      },
      {
        heading: "7. New Orleans, Louisiana — Off-Peak Summer Pricing",
        body: "New Orleans is one of Dollar Flight Club's top affordable domestic destinations, with roundtrip fares frequently under $200 from East Coast and Midwest airports. Summer is New Orleans' off-peak season (hot and humid), which means hotel rates drop to $90–$140/night — a fraction of the $250+ spring season prices. The trade-off is weather, but the city's indoor attractions (Mardi Gras World, National WWII Museum, endless live music in air-conditioned venues) make it workable. Free or cheap activities include walking the French Quarter, visiting City Park (50 cents for the streetcar), and free live music on Frenchmen Street. Word of caution: the humidity is real. Plan indoor afternoons and outdoor evenings.",
      },
      {
        heading: "8. Santa Cruz, California — Beach + Boardwalk on a California Budget",
        body: "Santa Cruz (+65% per Expedia, meeting Smart Travel Health Check criteria) is the most affordable beach town on the California coast. The Santa Cruz Beach Boardwalk is free to enter (pay-per-ride at $3–$5), the famous surfing break at Steamer Lane is free to watch, and Henry Cowell Redwoods State Park offers $10 entry for old-growth redwood hikes. While California isn't cheap overall, Santa Cruz wins on free activity density: the coastal bluffs, beaches, and downtown are all walkable without spending. Hotels average $150–$190/night — not cheap, but significantly below Monterey ($220+) or Santa Barbara ($280+). Budget tip: stay in neighboring Capitola or Scotts Valley for $30–$50/night less.",
      },
      {
        heading: "9. Chattanooga, Tennessee — The Most Underrated Budget City",
        body: "Chattanooga doesn't make the national headlines, but it's a sleeper hit for 2026 budget travel. The city has invested heavily in free public amenities: the Tennessee Aquarium is one of the best in the U.S. (reasonable $25 ticket), the Walnut Street Bridge is free to walk, Chattanooga's riverside parks are free and beautifully maintained, and Lookout Mountain offers hiking and Rock City ($20) minutes from downtown. Hotel rates average $90–$130/night — among the lowest on this list. The food scene is excellent and affordable, with most restaurants under $15 per entrée. Accessible from Atlanta (2 hours), Nashville (2 hours) by Interstate, and Chattanooga Airport itself offers under-$300 roundtrip fares from most East Coast cities.",
      },
      {
        heading: "10. Providence, Rhode Island — Compact, Walkable, and Smart",
        body: "Providence (+25% per Expedia, meeting Smart Travel Health Check criteria) rounds out the list as a New England budget alternative to Boston. WaterFire Providence (free seasonal art installation on the rivers) is a major attraction, the RISD Museum is $18, and the city's Federal Hill neighborhood offers excellent Italian food at half Boston's prices. Hotels average $120–$160/night compared to Boston's $250+. The city is compact and walkable, eliminating transportation costs within the city. Bonus: Providence is a 45-minute train ride ($12) from Boston, making it a great budget basecamp for a longer New England trip. Fly into TF Green Airport (PVD) directly for the best rates, or take Amtrak from New York (3.5 hours, from $35).",
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
