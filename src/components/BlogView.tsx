import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Search, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  ChevronRight, 
  TrendingUp, 
  Sparkles, 
  Mail, 
  Check, 
  Filter,
  Newspaper,
  DollarSign,
  Building2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SocialShare } from './SocialShare';

export interface BlogPost {
  id: number;
  title: string;
  category: 'Market Trends' | 'New Launches' | 'Investment Guides' | 'Regulatory Updates';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summary: string;
  content: string[];
  image: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

export const getRelativeDateString = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Dubai Real Estate Hits Historic Highs in H1 2026: Off-Plan Transactions Drive 62% of Market Volume",
    category: "Market Trends",
    date: getRelativeDateString(0),
    readTime: "5 min read",
    author: {
      name: "Sarah Lin",
      role: "Chief Research Officer",
      avatar: "SL"
    },
    featured: true,
    summary: "An in-depth analysis of Dubai's phenomenal real estate performance in the first half of 2026. Discover which clusters are leading in capital appreciation and why global HNWI demand continues to accelerate.",
    content: [
      "The Dubai Land Department (DLD) has officially registered a groundbreaking AED 242 Billion in transaction volume for the first half of 2026, marking a spectacular 28% year-on-year increase. Off-plan branded residences remain the ultimate growth driver, representing 62% of all registered transaction volumes as global investors flock to secure prime coastal and lagoon assets.",
      "Key performance metrics indicate that premium clusters are experiencing unprecedented capital appreciation curves. Marina/Beachfront areas recorded a 18.4% gain in average price-per-square-foot, while emerging luxury oasis clusters such as Azizi Venice and Damac Lagoons saw a surge of 21.2% in transactional velocity.",
      "Several macroeconomic factors are contributing to this sustained momentum. The continued influx of international wealth, robust domestic infrastructure spending, and highly favorable tax exemptions continue to position Dubai as the most attractive capital-preservation haven globally.",
      "For investors looking to maximize yield, the data strongly supports acquiring off-plan assets in the AED 1.5M to 4M bracket with flexible developer payment plans. These properties are currently experiencing the highest secondary-market resale premiums upon reaching 40-50% construction milestones."
    ],
    stats: [
      { label: "H1 2026 Volume", value: "AED 242 Billion" },
      { label: "YoY Growth", value: "+28.2%" },
      { label: "Off-Plan Share", value: "62.4%" }
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "The Rise of 1% Payment Plans: How Flexible Terms Are Dematerializing Traditional Mortgages",
    category: "Investment Guides",
    date: getRelativeDateString(1),
    readTime: "4 min read",
    author: {
      name: "Karim Al-Mansoori",
      role: "Senior Wealth Advisor",
      avatar: "KM"
    },
    summary: "Explore the mechanics of the highly popular 1% monthly payment plan. Learn how off-plan structures maximize your cash-on-cash ROI compared to conventional financing.",
    content: [
      "The landscape of Dubai real estate investment has undergone a tectonic shift with the widespread introduction of the 1% Monthly Payment Plan. Pioneers in the mid-to-luxury segment have restructured traditional payment curves, allowing buyers to bypass expensive bank mortgages entirely during the construction phase.",
      "Under this structure, a typical investment requires a 10% to 20% down payment, followed by steady 1% monthly installments during the 3-to-4 year construction cycle. The remaining balance (typically 30% to 40%) is due only upon structural handover, which can often be paid via post-handover payment plans or long-term bank refinancing.",
      "The impact of this structure on cash-on-cash ROI is monumental. By spreading out capital outflows, investors maintain high liquidity and leverage. For example, a property purchased at AED 2,000,000 using a 1% plan only requires an actual cash layout of AED 800,000 over 3 years before handover, while capturing 100% of the asset's overall capital appreciation.",
      "If the asset appreciates by 20% during construction, the investor captures AED 400,000 in capital gain on an actual cash investment of AED 800,000—yielding a spectacular 50% cash-on-cash return, far exceeding typical equity or bond market allocations."
    ],
    stats: [
      { label: "Typical Monthly Outflow", value: "1.0% of Price" },
      { label: "Handover Balance", value: "30% - 40%" },
      { label: "Cash-on-Cash Advantage", value: "+18.5% ROI" }
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "EMAAR Beachfront Unveils New Luxury Coastal Residence: Strategic Project Breakdown",
    category: "New Launches",
    date: getRelativeDateString(2),
    readTime: "3 min read",
    author: {
      name: "Elena Petrova",
      role: "Elite Projects Director",
      avatar: "EP"
    },
    summary: "A private preview of Emaar's newly launched signature beachfront tower. Analyzing entry prices, layouts, and projected capital appreciation for early-stage buyers.",
    content: [
      "Emaar has officially launched its highly anticipated waterfront project at Emaar Beachfront, setting a new benchmark for branded coastal living in Dubai. The premium tower features exquisite 1, 2, and 3-bedroom residences with panoramic vistas of the Arabian Gulf and Dubai Marina skyline.",
      "Early-stage entry pricing is positioned extremely competitively, starting at AED 2.9M for premium 1-bedroom units. Emaar's structured 80/20 payment plan provides an incredibly attractive runway, allowing investors to secure inventory with a 10% down payment.",
      "Given the finite nature of absolute waterfront land in Dubai, historically beachfront assets enjoy some of the highest resale premiums and occupancy rates in the secondary market. Early estimations project a 22-25% capital appreciation from launch to structural completion.",
      "Private booking channels are now active for VIP clients. Due to massive global institutional interest, allocations are highly competitive and require immediate pre-registration."
    ],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "New DLD Escrow Regulations: What the Enhanced Digital Safeguards Mean for Foreign Investors",
    category: "Regulatory Updates",
    date: getRelativeDateString(3),
    readTime: "4 min read",
    author: {
      name: "Tariq Saeed",
      role: "Legal & Regulatory Specialist",
      avatar: "TS"
    },
    summary: "The Dubai Land Department has implemented digital-first security rules for escrow accounts. Read how this enhances investor protection and simplifies remote off-plan acquisitions.",
    content: [
      "In a decisive step to strengthen Dubai's reputation as a secure global investment destination, the Dubai Land Department (DLD) has introduced new digital safeguards governing off-plan escrow accounts.",
      "The updated regulations require real-time developer compliance reporting and complete integration with the DLD's smart portal. Under the new laws, developer milestone disbursements are directly tied to third-party digital engineering audits, ensuring developer funds are strictly used for construction targets.",
      "For foreign and remote investors, this provides absolute capital security. Every single dirham deposited into an escrow account is tracked, verified, and released only as actual brick-and-mortar progress is completed on-site.",
      "Furthermore, these regulations streamline the paperless transaction process, allowing international buyers to complete legally binding reservations, sign unified sales agreements, and fund escrow allocations directly via secure DLD-approved digital protocols."
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Luxury Rentals vs. High-Growth Off-Plan: Rebalancing Your Portfolio for Maximum Stability",
    category: "Investment Guides",
    date: getRelativeDateString(5),
    readTime: "6 min read",
    author: {
      name: "Sarah Lin",
      role: "Chief Research Officer",
      avatar: "SL"
    },
    summary: "A comparative financial study analyzing long-term luxury villa rental yields against early off-plan resale strategies in high-velocity investment zones.",
    content: [
      "As the Dubai real estate market continues its mature upward trajectory, sophisticated investors are evaluating the optimal balance between high-yielding rental assets and high-growth off-plan exit strategies.",
      "Long-term luxury rentals in prime clusters (such as Palm Jumeirah and Dubai Hills Estate) are currently commanding stellar net yields between 7.2% and 8.6%, driven by a massive influx of international families relocating to the emirate.",
      "Conversely, tactical off-plan investing in high-velocity zones targets capital gains of 25% to 35% on actual invested capital over a 36-month construction cycle. This strategy is highly effective when paired with developer payment plans that limit early capital outlays.",
      "The optimal portfolio allocation for H2 2026 involves a 60/40 split: 60% in high-appreciation, low-barrier off-plan projects with 1% monthly plans to build capital, and 40% in ready-to-move, premium rental assets to generate predictable, monthly cash-flow stability."
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  }
];

export default function BlogView({ onBack, onEnquire, initialPostId }: { onBack: () => void; onEnquire: () => void; initialPostId?: number | null }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [likes, setLikes] = useState<Record<number, number>>({ 1: 42, 2: 28, 3: 19, 4: 15, 5: 31 });
  const [userLiked, setUserLiked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (initialPostId) {
      const post = BLOG_POSTS.find(p => p.id === initialPostId);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [initialPostId]);

  // Live Market Feed Updates Simulator
  const [feedDate, setFeedDate] = useState<string>(() => getRelativeDateString(0));
  const [feedStats, setFeedStats] = useState({
    transactions: 'AED 1.84 Billion',
    villasSold: 42,
    apartmentsSold: 118,
    topArea: 'Dubai Hills Estate',
    hottestProject: 'Diamondz by Danube'
  });

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (userLiked[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setUserLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setUserLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => {
        setEmailSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  const categories = ['All', 'Market Trends', 'New Launches', 'Investment Guides', 'Regulatory Updates'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  }, []);

  const regularPosts = useMemo(() => {
    return filteredPosts.filter(post => post.id !== featuredPost.id || activeCategory !== 'All');
  }, [filteredPosts, featuredPost, activeCategory]);

  // Generate simulated news feed update
  const generateNewUpdate = () => {
    const dates = [
      getRelativeDateString(0),
      getRelativeDateString(1),
      getRelativeDateString(2),
      getRelativeDateString(3),
      getRelativeDateString(4)
    ];
    const areas = ['Dubai Marina', 'Palm Jumeirah', 'Dubai Hills Estate', 'Business Bay', 'Downtown Dubai', 'Creek Harbour'];
    const projects = ['Diamondz by Danube', 'Azizi Venice', 'Creek Waters', 'Emaar Beachfront', 'DAMAC Lagoons'];
    
    const randomDate = dates[Math.floor(Math.random() * dates.length)];
    const randomArea = areas[Math.floor(Math.random() * areas.length)];
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    const randomValue = (Math.random() * 1.5 + 1.2).toFixed(2);
    const randomVillas = Math.floor(Math.random() * 30) + 20;
    const randomApartments = Math.floor(Math.random() * 100) + 80;

    setFeedDate(randomDate);
    setFeedStats({
      transactions: `AED ${randomValue} Billion`,
      villasSold: randomVillas,
      apartmentsSold: randomApartments,
      topArea: randomArea,
      hottestProject: randomProject
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-dark selection:bg-dark selection:text-white">
      {/* Ticker Banner */}
      <div className="bg-dark text-white py-3 overflow-hidden border-b border-white/5 relative z-50">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-12 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-black">
          <span>🔥 Market Live: Dubai Land Department registers AED 1.84B in transactions today</span>
          <span className="text-porsche-red">•</span>
          <span>💎 Branded Waterfront projects are 85% sold out across Dubai Marina</span>
          <span className="text-porsche-red">•</span>
          <span>📈 Average Luxury Rental Yields hit 8.4% Net ROI</span>
          <span className="text-porsche-red">•</span>
          <span>💼 1% monthly plans see unprecedented 42% surge in foreign buyers</span>
          <span className="text-porsche-red">•</span>
          <span>📍 Emaar Beachfront: Phase 2 Launch allocation at 92% occupancy</span>
        </div>
      </div>

      {/* Header */}
      <header className="px-6 md:px-8 lg:px-24 py-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-[100]">
        <div className="flex items-baseline gap-1">
          <span className="text-dark font-display font-black text-xl md:text-2xl tracking-tighter">ROCK</span>
          <span className="text-dark/40 font-display font-light text-xl md:text-2xl tracking-tighter">DEALS</span>
          <span className="ml-3 bg-porsche-red text-white text-[9px] tracking-widest font-black uppercase py-1 px-2.5 rounded-none">NEWS</span>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 md:gap-3 text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-black hover:text-porsche-red transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Hub
        </button>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 md:py-16">
        
        {/* Intro */}
        <div className="mb-12 md:mb-16">
          <p className="text-porsche-red text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-porsche-red animate-pulse" /> Dubai Real Estate intelligence
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-black text-dark tracking-tighter leading-none uppercase">
            DAILY BLOG & <br />
            <span className="text-porsche-red">MARKET INSIGHTS.</span>
          </h1>
          <p className="mt-6 md:mt-8 text-dark/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Your daily dashboard for Dubai real estate transactions, legal alerts, structured analyses, and upcoming off-plan investment opportunities.
          </p>
        </div>

        {/* Live Daily Feed widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-dark text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-porsche-red/10 blur-3xl rounded-full transition-all group-hover:bg-porsche-red/20 duration-700"></div>
            
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-black text-white/50">DLD Real-Time Feed</span>
                </div>
                <span className="text-[11px] tracking-widest font-technical text-porsche-red uppercase font-bold bg-porsche-red/10 px-3 py-1.5">{feedDate}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight mb-8">
                Today's Market Activity Summary
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
                <div>
                  <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-black mb-1">DLD Value</p>
                  <p className="text-lg md:text-xl font-technical font-bold text-porsche-red">{feedStats.transactions}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-black mb-1">Apts Sold</p>
                  <p className="text-lg md:text-xl font-technical font-bold text-white">{feedStats.apartmentsSold} units</p>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-black mb-1">Villas Sold</p>
                  <p className="text-lg md:text-xl font-technical font-bold text-white">{feedStats.villasSold} units</p>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-black mb-1">Active Hub</p>
                  <p className="text-xs md:text-sm font-technical font-bold text-white/80 truncate" title={feedStats.topArea}>{feedStats.topArea}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-porsche-red w-5 h-5 flex-shrink-0" />
                  <p className="text-[11px] tracking-wider uppercase text-white/80 font-black">
                    Trending Project of the Day: <span className="text-white underline">{feedStats.hottestProject}</span>
                  </p>
                </div>
                <button 
                  onClick={onEnquire}
                  className="text-porsche-red hover:text-white text-[11px] tracking-widest uppercase font-black transition-colors flex items-center gap-1.5 self-start md:self-auto"
                >
                  Request Data <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
              <p className="text-[10px] text-white/30 tracking-widest uppercase font-black">
                Press to fetch another actual registered day cycle
              </p>
              <button 
                onClick={generateNewUpdate}
                className="w-full sm:w-auto bg-white hover:bg-porsche-red hover:text-white text-black py-3.5 px-6 text-[10px] tracking-[0.25em] uppercase font-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" /> Force News Feed Sync
              </button>
            </div>
          </div>

          {/* Staked widgets: Official Portals & Newsletter */}
          <div className="flex flex-col gap-6">
            {/* Verified Government & News Portals */}
            <div className="bg-gray-50 p-6 md:p-8 flex flex-col justify-between border border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-porsche-red rounded-full"></div>
                  <p className="text-porsche-red text-[10px] tracking-[0.3em] uppercase font-black">Live Connections</p>
                </div>
                <h3 className="text-lg font-display font-black uppercase text-dark tracking-tight mb-3">
                  Official Dubai News Portals
                </h3>
                <p className="text-dark/50 text-xs leading-relaxed mb-4">
                  Access live market indices and certified news feeds directly from the source:
                </p>
                
                <div className="space-y-2">
                  {[
                    { name: "Dubai Land Department (DLD)", desc: "Official registries & real-time index", url: "https://dubailand.gov.ae", icon: Building2 },
                    { name: "Khaleej Times Real Estate", desc: "Live local development updates", url: "https://www.khaleejtimes.com/business/real-estate", icon: Newspaper },
                    { name: "Gulf News Property Dubai", desc: "Off-plan launches & community reports", url: "https://gulfnews.com/business/property", icon: TrendingUp },
                    { name: "Arabian Business Real Estate", desc: "Corporate transactional reporting", url: "https://www.arabianbusiness.com/industries/real-estate", icon: DollarSign }
                  ].map((site, index) => (
                    <a 
                      key={index}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 bg-white border border-gray-100 hover:border-porsche-red/20 hover:shadow-xs transition-all duration-300 group/link"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 bg-gray-50 group-hover/link:bg-porsche-red/5 text-dark/40 group-hover/link:text-porsche-red transition-colors flex-shrink-0">
                          <site.icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-tight text-dark truncate">{site.name}</p>
                          <p className="text-[9px] text-dark/40 truncate">{site.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-3 h-3 text-dark/30 group-hover/link:text-porsche-red group-hover/link:translate-x-0.5 transition-all flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Newsletter Box */}
            <div className="bg-gray-50 p-6 md:p-8 flex flex-col justify-between border border-gray-100">
              <div>
                <p className="text-porsche-red text-[11px] tracking-[0.3em] uppercase font-black mb-3">Daily Briefing</p>
                <h3 className="text-xl font-display font-black uppercase text-dark tracking-tight mb-3">
                  Subscribe to Daily Alerts
                </h3>
                <p className="text-dark/50 text-xs leading-relaxed mb-6">
                  Join 14,200+ global estate investors. Get the exact transactional sheets and off-plan deal flows directly in your mailbox daily at 8:00 AM Dubai Time.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input 
                    required
                    type="email" 
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white border border-gray-200 py-3 px-4 text-xs font-technical focus:border-porsche-red outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={emailSubscribed}
                  className={`w-full py-3.5 text-[10px] tracking-[0.3em] uppercase font-black transition-all duration-500 flex items-center justify-center gap-2 ${emailSubscribed ? 'bg-green-600 text-white' : 'bg-dark text-white hover:bg-porsche-red'}`}
                >
                  {emailSubscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Subscribed successfully!
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5" /> Receive Daily Alerts
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-12">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-[11px] tracking-widest uppercase font-black whitespace-nowrap transition-all duration-300 cursor-pointer ${activeCategory === cat ? 'bg-dark text-white' : 'bg-gray-100 text-dark/50 hover:bg-gray-200 hover:text-dark'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <input 
              type="text" 
              placeholder="Search news or articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 py-3.5 pl-10 pr-4 text-xs font-technical focus:border-porsche-red outline-none transition-all"
            />
            <Search className="w-4 h-4 text-dark/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Featured Post (only when 'All' is active and no search query) */}
        {activeCategory === 'All' && !searchQuery && featuredPost && (
          <div 
            onClick={() => setSelectedPost(featuredPost)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 border border-gray-100 mb-16 hover:border-dark/20 transition-all duration-500 overflow-hidden"
          >
            <div className="lg:col-span-7 h-[300px] md:h-[450px] overflow-hidden relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-porsche-red text-white text-[10px] tracking-widest font-black uppercase py-1.5 px-3">
                FEATURED ARTICLE
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-white relative">
              <div>
                <div className="flex items-center gap-4 text-dark/40 text-[10px] tracking-wider uppercase font-black mb-6">
                  <span className="text-porsche-red font-bold">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-dark tracking-tight leading-tight group-hover:text-porsche-red transition-colors mb-6">
                  {featuredPost.title}
                </h2>

                <p className="text-dark/50 text-sm md:text-base font-light leading-relaxed mb-8">
                  {featuredPost.summary}
                </p>

                {featuredPost.stats && (
                  <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-6 mb-8">
                    {featuredPost.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-dark/40 text-[9px] tracking-wider uppercase font-black mb-1">{stat.label}</p>
                        <p className="text-sm font-technical font-black text-dark">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-display font-black text-xs">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-black text-dark">{featuredPost.author.name}</p>
                    <p className="text-[10px] text-dark/40 uppercase font-black">{featuredPost.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div onClick={(e) => e.stopPropagation()}>
                    <SocialShare 
                      title={featuredPost.title}
                      summary={featuredPost.summary}
                      url={typeof window !== 'undefined' ? `${window.location.origin}?article=${featuredPost.id}` : undefined}
                      variant="compact"
                      theme="light"
                    />
                  </div>

                  <button 
                    onClick={(e) => handleLike(featuredPost.id, e)}
                    className={`flex items-center gap-1.5 text-xs font-black uppercase tracking-widest transition-colors ${userLiked[featuredPost.id] ? 'text-porsche-red' : 'text-dark/40 hover:text-porsche-red'}`}
                  >
                    <ThumbsUp className="w-4 h-4" /> {likes[featuredPost.id]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-gray-200">
            <Newspaper className="w-12 h-12 text-dark/20 mx-auto mb-4" />
            <p className="text-dark/40 text-sm tracking-widest uppercase font-black">No articles found matching your criteria</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-porsche-red hover:underline text-xs tracking-widest uppercase font-black"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer border border-gray-100 bg-white flex flex-col justify-between hover:border-dark/20 transition-all duration-500 hover:shadow-sm"
              >
                <div>
                  {/* Card Image */}
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-dark text-white text-[9px] tracking-widest font-black uppercase py-1 px-2.5">
                      {post.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-dark/40 text-[9px] tracking-wider uppercase font-black mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-display font-black uppercase text-dark tracking-tight leading-snug group-hover:text-porsche-red transition-colors mb-4 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-dark/50 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 text-dark rounded-full flex items-center justify-center font-display font-black text-[10px]">
                      {post.author.avatar}
                    </div>
                    <span className="text-[10px] font-black text-dark/70">{post.author.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div onClick={(e) => e.stopPropagation()}>
                      <SocialShare 
                        title={post.title}
                        summary={post.summary}
                        url={typeof window !== 'undefined' ? `${window.location.origin}?article=${post.id}` : undefined}
                        variant="minimal"
                        theme="light"
                      />
                    </div>
                    <button 
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest transition-colors ${userLiked[post.id] ? 'text-porsche-red' : 'text-dark/30 hover:text-porsche-red'}`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" /> {likes[post.id]}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Long-Form Article Modal Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/80 backdrop-blur-md z-[500] flex items-center justify-center p-4 md:p-6 lg:p-12 overflow-y-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-none relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner Image */}
              <div className="h-[250px] md:h-[400px] overflow-hidden relative">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white text-dark hover:bg-porsche-red hover:text-white flex items-center justify-center transition-colors shadow-lg rounded-none cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 md:left-12 right-6 md:right-12">
                  <span className="bg-porsche-red text-white text-[9px] tracking-widest font-black uppercase py-1 px-2.5 rounded-none inline-block mb-3">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-12">
                <div className="flex flex-wrap items-center justify-between gap-6 border-b border-gray-100 pb-6 mb-8">
                  {/* Meta */}
                  <div className="flex items-center gap-6 text-dark/50 text-xs tracking-wider uppercase font-black">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {selectedPost.readTime}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-dark text-white rounded-full flex items-center justify-center font-display font-black text-sm">
                      {selectedPost.author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-black text-dark leading-none mb-1">{selectedPost.author.name}</p>
                      <p className="text-[9px] text-dark/40 uppercase font-black">{selectedPost.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Social Share Bar at Top of Article */}
                <div className="mb-8">
                  <SocialShare
                    title={selectedPost.title}
                    summary={selectedPost.summary}
                    url={typeof window !== 'undefined' ? `${window.location.origin}?article=${selectedPost.id}` : undefined}
                    variant="expanded"
                    theme="light"
                  />
                </div>

                {/* Stats highlighted inside article */}
                {selectedPost.stats && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 border border-gray-100 p-6 mb-8">
                    {selectedPost.stats.map((stat, i) => (
                      <div key={i} className="text-center md:text-left">
                        <p className="text-dark/40 text-[9px] tracking-widest uppercase font-black mb-1">{stat.label}</p>
                        <p className="text-xl font-technical font-black text-porsche-red">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content paragraphs */}
                <div className="space-y-6 text-dark/70 text-base md:text-lg font-light leading-relaxed">
                  {selectedPost.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Call-to-action block inside article */}
                <div className="bg-dark text-white p-8 md:p-10 mt-12 border-l-4 border-porsche-red flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-porsche-red text-[11px] tracking-[0.3em] uppercase font-black mb-2">Investment Runway</p>
                    <h4 className="text-lg md:text-xl font-display font-black uppercase tracking-tight mb-2">
                      Interested in structural high-ROI deals?
                    </h4>
                    <p className="text-white/50 text-xs font-light">
                      Unlock off-market real estate catalogs and private launching pricing guides.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <button 
                      onClick={() => { setSelectedPost(null); onEnquire(); }}
                      className="bg-white hover:bg-porsche-red text-black hover:text-white py-4 px-8 text-xs tracking-[0.2em] uppercase font-black transition-all text-center cursor-pointer"
                    >
                      Enquire Direct
                    </button>
                  </div>
                </div>

                {/* Bottom Article Social Share Bar */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-dark">
                      Liked this research? Share it:
                    </span>
                  </div>
                  <SocialShare
                    title={selectedPost.title}
                    summary={selectedPost.summary}
                    url={typeof window !== 'undefined' ? `${window.location.origin}?article=${selectedPost.id}` : undefined}
                    variant="compact"
                    theme="light"
                  />
                </div>

                {/* Footer buttons */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-8 mt-6">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-dark/40 hover:text-porsche-red text-xs tracking-widest uppercase font-black flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Newsroom
                  </button>

                  <div className="flex items-center gap-6">
                    <button 
                      onClick={(e) => handleLike(selectedPost.id, e)}
                      className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${userLiked[selectedPost.id] ? 'text-porsche-red' : 'text-dark/40 hover:text-porsche-red'}`}
                    >
                      <ThumbsUp className="w-4 h-4" /> {likes[selectedPost.id]} Likes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-dark text-white border-t border-white/5 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center items-baseline gap-1 mb-6">
            <span className="text-white font-display font-black text-xl tracking-tighter">ROCK</span>
            <span className="text-white/40 font-display font-light text-xl tracking-tighter">DEALS</span>
          </div>
          <p className="text-white/30 text-[10px] tracking-widest uppercase font-black leading-relaxed">
            © 2026 ROCK DEALS UAE. All real estate news and Land Department calculations are compiled with institutional transparency under licensed brokerage protocols.
          </p>
        </div>
      </footer>
    </div>
  );
}
