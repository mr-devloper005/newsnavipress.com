export type PressRelease = {
  id: number
  slug: string
  title: string
  subtitle: string
  featuredImage: string
  author: string
  authorRole: string
  date: string
  readTime: string
  category: string
  location: string
  content: string
  tags: string[]
  relatedArticles: { id: number; slug: string; title: string; excerpt: string }[]
}

export const pressReleasesData: Record<string, PressRelease> = {
  "techcorp-launches-revolutionary-ai-platform": {
    id: 1,
    slug: "techcorp-launches-revolutionary-ai-platform",
    title: "TechCorp Launches Revolutionary AI Platform for Enterprise Solutions",
    subtitle: "Groundbreaking artificial intelligence solution transforms business operations across multiple industries",
    featuredImage: "/placeholder-tech-ai.jpg",
    author: "Sarah Johnson",
    authorRole: "CEO, TechCorp",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    location: "San Francisco, CA",
    content: `<p>San Francisco, CA — TechCorp, a leading technology company specializing in artificial intelligence solutions, today announced the launch of its revolutionary AI platform designed specifically for enterprise operations.</p>
<h3>Transforming Enterprise Operations</h3>
<p>The new AI platform offers businesses unprecedented capabilities in data analysis, process automation, and decision-making support. Built on cutting-edge machine learning algorithms, the platform can process vast amounts of data in real-time.</p>
<blockquote>"This represents a paradigm shift in how enterprises can leverage artificial intelligence," said Sarah Johnson, CEO of TechCorp.</blockquote>
<h3>Key Features</h3>
<ul>
  <li><strong>Real-time Data Processing:</strong> Processes millions of data points per second with 99.9% accuracy</li>
  <li><strong>Predictive Analytics:</strong> Forecasts business trends and identifies opportunities</li>
  <li><strong>Automated Workflow Integration:</strong> Seamlessly integrates with existing enterprise systems</li>
  <li><strong>Advanced Security:</strong> Enterprise-grade security with end-to-end encryption</li>
</ul>
<h3>About TechCorp</h3>
<p>TechCorp is a leading technology company specializing in AI and machine learning solutions for enterprise clients. Founded in 2018, the company serves over 500 enterprise clients worldwide.</p>
<h3>Media Contact</h3>
<p>Sarah Johnson, CEO, TechCorp<br/>Email: press@techcorp.com | Phone: (555) 123-4567</p>`,
    tags: ["Artificial Intelligence", "Enterprise Software", "Technology", "Machine Learning", "Innovation"],
    relatedArticles: [
      { id: 2, slug: "globalhealth-expands-to-european-markets", title: "GlobalHealth Expands to European Markets", excerpt: "Healthcare provider announces strategic expansion into five European countries..." },
      { id: 3, slug: "ecotech-secures-50m-series-b-funding", title: "EcoTech Secures $50M Series B Funding", excerpt: "Sustainable technology company raises major investment round..." }
    ]
  },
  "globalhealth-expands-to-european-markets": {
    id: 2,
    slug: "globalhealth-expands-to-european-markets",
    title: "GlobalHealth Expands to European Markets with Telemedicine Services",
    subtitle: "Healthcare provider announces strategic expansion into five European countries, bringing innovative telemedicine solutions to millions of new patients",
    featuredImage: "/placeholder-health-europe.jpg",
    author: "Michael Chen",
    authorRole: "CEO, GlobalHealth",
    date: "March 14, 2024",
    readTime: "6 min read",
    category: "Healthcare",
    location: "London, UK",
    content: `<p>London, UK — GlobalHealth, a leading telemedicine provider, today announced its strategic expansion into five European markets including the United Kingdom, Germany, France, Spain, and Italy.</p>
<h3>European Market Entry</h3>
<p>The expansion represents GlobalHealth's commitment to addressing the growing demand for accessible healthcare services across Europe. The company will launch its comprehensive telemedicine platform in each market.</p>
<blockquote>"We're excited to bring our proven telemedicine solutions to European patients," said Michael Chen, CEO of GlobalHealth.</blockquote>
<h3>Service Offerings</h3>
<ul>
  <li><strong>Virtual Consultations:</strong> 24/7 access to certified healthcare professionals</li>
  <li><strong>Remote Monitoring:</strong> Advanced wearable integration for chronic disease management</li>
  <li><strong>Prescription Services:</strong> Digital prescription management and home delivery</li>
  <li><strong>Multi-language Support:</strong> Services available in 12 European languages</li>
</ul>
<h3>About GlobalHealth</h3>
<p>GlobalHealth is a pioneering telemedicine company dedicated to transforming healthcare delivery through technology. Founded in 2019, the company has served over 2 million patients across North America.</p>
<h3>Media Contact</h3>
<p>Michael Chen, CEO, GlobalHealth<br/>Email: media@globalhealth.com | Phone: +44 20 1234 5678</p>`,
    tags: ["Healthcare", "Telemedicine", "European Expansion", "Digital Health", "Innovation"],
    relatedArticles: [
      { id: 1, slug: "techcorp-launches-revolutionary-ai-platform", title: "TechCorp Launches Revolutionary AI Platform", excerpt: "Leading technology company announces groundbreaking artificial intelligence solution..." },
      { id: 3, slug: "ecotech-secures-50m-series-b-funding", title: "EcoTech Secures $50M Series B Funding", excerpt: "Sustainable technology company raises major investment round..." }
    ]
  },
  "ecotech-secures-50m-series-b-funding": {
    id: 3,
    slug: "ecotech-secures-50m-series-b-funding",
    title: "EcoTech Secures $50M Series B Funding for Green Energy Solutions",
    subtitle: "Sustainable technology company raises major investment round to accelerate development of revolutionary green energy solutions",
    featuredImage: "/placeholder-green-energy.jpg",
    author: "Emily Rodriguez",
    authorRole: "Founder & CEO, EcoTech",
    date: "March 13, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    location: "New York, NY",
    content: `<p>New York, NY — EcoTech today announced the successful closure of a $50 million Series B funding round led by Green Ventures Partners.</p>
<h3>Revolutionary Green Energy Technology</h3>
<p>EcoTech's platform combines advanced materials science with AI to create highly efficient, cost-effective renewable energy solutions including next-generation solar panels and smart energy storage systems.</p>
<blockquote>"This funding round represents a significant vote of confidence in our vision to democratize clean energy," said Emily Rodriguez, Founder & CEO of EcoTech.</blockquote>
<h3>Technology Highlights</h3>
<ul>
  <li><strong>Ultra-Efficient Solar Panels:</strong> 30% higher efficiency than conventional panels</li>
  <li><strong>Smart Storage Systems:</strong> AI-optimized battery management with 50% longer lifespan</li>
  <li><strong>Carbon Capture Technology:</strong> Innovative solutions for industrial applications</li>
</ul>
<h3>About EcoTech</h3>
<p>EcoTech is a sustainable technology company dedicated to developing innovative solutions for the global energy transition. Founded in 2020.</p>
<h3>Media Contact</h3>
<p>Emily Rodriguez, Founder & CEO, EcoTech<br/>Email: press@ecotech.com | Phone: (212) 555-0123</p>`,
    tags: ["Sustainability", "Green Energy", "Series B Funding", "Climate Technology", "Renewable Energy"],
    relatedArticles: [
      { id: 1, slug: "techcorp-launches-revolutionary-ai-platform", title: "TechCorp Launches Revolutionary AI Platform", excerpt: "Leading technology company announces groundbreaking artificial intelligence solution..." },
      { id: 2, slug: "globalhealth-expands-to-european-markets", title: "GlobalHealth Expands to European Markets", excerpt: "Healthcare provider announces strategic expansion into five European countries..." }
    ]
  },
  "financehub-introduces-digital-banking-platform": {
    id: 4,
    slug: "financehub-introduces-digital-banking-platform",
    title: "FinanceHub Introduces Digital Banking Platform for SMBs",
    subtitle: "Financial technology company launches comprehensive digital banking solution for small and medium businesses",
    featuredImage: "/placeholder-banking.jpg",
    author: "David Kim",
    authorRole: "CEO, FinanceHub",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Finance",
    location: "New York, NY",
    content: `<p>New York, NY — FinanceHub today announced the launch of its comprehensive digital banking platform designed specifically for small and medium businesses.</p>
<h3>Platform Features</h3>
<p>The platform offers instant business account opening, integrated payment processing, automated bookkeeping, and AI-powered cash flow forecasting. It integrates with over 200 popular business tools.</p>
<blockquote>"Small businesses deserve the same quality of financial tools as large enterprises," said David Kim, CEO of FinanceHub.</blockquote>
<h3>About FinanceHub</h3>
<p>FinanceHub is a fintech company dedicated to democratizing financial services for businesses of all sizes. Founded in 2021, serving over 50,000 businesses across North America.</p>
<h3>Media Contact</h3>
<p>David Kim, CEO, FinanceHub<br/>Email: press@financehub.com | Phone: (212) 555-0456</p>`,
    tags: ["Finance", "Digital Banking", "SMB", "Fintech", "Banking"],
    relatedArticles: [
      { id: 1, slug: "techcorp-launches-revolutionary-ai-platform", title: "TechCorp Launches Revolutionary AI Platform", excerpt: "Leading technology company announces groundbreaking artificial intelligence solution..." },
      { id: 3, slug: "ecotech-secures-50m-series-b-funding", title: "EcoTech Secures $50M Series B Funding", excerpt: "Sustainable technology company raises major investment round..." }
    ]
  },
  "retailmax-partners-with-ecommerce-platforms": {
    id: 5,
    slug: "retailmax-partners-with-ecommerce-platforms",
    title: "RetailMax Partners with Leading E-commerce Platforms for Inventory Sync",
    subtitle: "Major retail technology company announces strategic partnerships with top e-commerce platforms",
    featuredImage: "/placeholder-retail.jpg",
    author: "Lisa Anderson",
    authorRole: "CEO, RetailMax",
    date: "March 11, 2024",
    readTime: "4 min read",
    category: "Retail",
    location: "Chicago, IL",
    content: `<p>Chicago, IL — RetailMax today announced strategic partnerships with Shopify, WooCommerce, and Amazon Seller Central to provide seamless inventory synchronization across all major e-commerce platforms.</p>
<h3>Partnership Details</h3>
<p>The integrations allow retailers to manage inventory, pricing, and product listings from a single dashboard, automatically syncing changes across all connected platforms in real time.</p>
<blockquote>"Retailers shouldn't have to manage inventory in five different places," said Lisa Anderson, CEO of RetailMax.</blockquote>
<h3>About RetailMax</h3>
<p>RetailMax provides inventory and operations management software for retailers of all sizes, serving over 15,000 merchants across 30 countries.</p>
<h3>Media Contact</h3>
<p>Lisa Anderson, CEO, RetailMax<br/>Email: press@retailmax.com | Phone: (312) 555-0789</p>`,
    tags: ["Retail", "E-commerce", "Inventory Management", "Technology", "Partnership"],
    relatedArticles: [
      { id: 1, slug: "techcorp-launches-revolutionary-ai-platform", title: "TechCorp Launches Revolutionary AI Platform", excerpt: "Leading technology company announces groundbreaking artificial intelligence solution..." },
      { id: 2, slug: "globalhealth-expands-to-european-markets", title: "GlobalHealth Expands to European Markets", excerpt: "Healthcare provider announces strategic expansion into five European countries..." }
    ]
  }
}

export function getPressRelease(slug: string): PressRelease | null {
  // Try direct lookup first
  if (pressReleasesData[slug]) return pressReleasesData[slug]
  // Try trimming whitespace/slashes
  const clean = slug.trim().replace(/^\/+|\/+$/g, '')
  return pressReleasesData[clean] ?? null
}
