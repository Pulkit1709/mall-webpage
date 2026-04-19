export const STATS = [
  { id: 'visitors', target: 105, suffix: 'M+', label: 'Annual Visitors', sub: 'The highest concentrated footfall in global retail' },
  { id: 'gla', display: '5.4M sqft', label: 'Total GLA', sub: 'A city within a city. Engineered for scale.' },
  { id: 'retail', target: 1200, suffix: '+', label: 'Retail Partners', sub: 'The definitive ecosystem for market leaders' },
  { id: 'dining', target: 200, suffix: '+', label: 'Culinary Experiences', sub: 'Michelin-starred concepts to global phenomenons' }
]

export const RETAIL_METRICS = [
  { value: '97%', label: 'Occupancy Rate' },
  { value: '3x', label: 'Market Average Sales per sqft' },
  { value: '180+', label: 'Nationalities in Visitor Base' }
]

export const BRANDS = [
  'Louis Vuitton', 'Chanel', 'Hermès', 'Rolex', 'Cartier', 'Gucci', 'Prada', 'Dior', 'Balenciaga', 'Burberry', 'Saint Laurent', 'Apple', 'Tesla', 'Sephora', 'Bottega Veneta', 'Valentino'
]

export const ROI_FUNNEL = [
  { metric: '105M+', label: 'Verified Footfall', desc: 'Guaranteed volume at the top of the funnel.' },
  { metric: '180+', label: 'Nationalities', desc: 'A truly global audience in a single physical location.' },
  { metric: 'Top 1%', label: 'Spend Per Head', desc: 'Industry-leading conversion rates across all luxury and retail categories.' }
]

export const MEDIA_CANVAS = [
  { title: 'The Atrium Swarm', specs: '360° LED · 4K Resolution', desc: 'Dominate the main artery. 150,000 daily impressions.' },
  { title: 'Ice Rink LED', specs: '60m width · High-Impact', desc: 'Captive audience. Perfect for high-energy video campaigns.' },
  { title: 'Fashion Avenue Digital', specs: 'Vertical format · Ultra-HD', desc: 'Targeting ultra-high-net-worth individuals at the point of sale.' }
]

export const LUXURY_PANELS = [
  { tag: 'Fashion Avenue', title: 'The Epicenter of Global Luxury', body: '70+ flagship boutiques · 600,000 sqft of curated grandeur.', size: 'large' },
  { tag: 'Performance', title: 'Highest Grossing Boutiques', body: 'Home to the #1 performing global stores for 12 major luxury houses.', size: 'small' },
  { tag: 'Access', title: 'Private VIP Suites', body: 'Invitation-only access for ultra-high-net-worth clientele.', size: 'small' }
]

export const DINING_CARDS = [
  { category: 'Fine Dining', name: 'Michelin-Star Calibre', desc: 'Destination dining from Nobu, Zuma, and Nusr-Et.' },
  { category: 'Waterfront', name: 'Fountain Spectacle', desc: 'Dine against the world\'s largest choreographed fountain.' },
  { category: 'Scale', name: '200+ Culinary Destinations', desc: 'Every cuisine, optimized for maximum volume and turnover.' }
]

export const ENTERTAINMENT = {
  hero: { title: 'Dubai Aquarium & Underwater Zoo', sub: '10 million litre tank · 33,000 aquatic animals · World\'s largest acrylic panel' },
  attractions: [
    { icon: '🌊', title: 'Dubai Aquarium', sub: 'World record holding attraction drawing 7M+ visitors annually' },
    { icon: '⛸', title: 'Olympic Ice Rink', sub: 'Full Olympic-size ice with live shows and skating experiences' },
    { icon: '🎮', title: 'SEGA Republic', sub: '76,000 sqft of immersive gaming and thrill attractions' },
    { icon: '🎬', title: 'Reel Cinemas IMAX', sub: '22 screens · 4DX · IMAX · Platinum suites' }
  ]
}

export const EVENTS = [
  {
    id: 'concert', category: 'Concerts & Live Performances',
    title: 'World-Class Live Events', meta: 'Dubai Fountain Stage · Atrium Arena · Outdoor Terraces',
    description: 'The Dubai Mall has hosted Elton John, Coldplay, Jennifer Lopez. Outdoor terraces reach audiences of 150,000+ for major activations.',
    stats: [{ val: '150K+', label: 'Max Audience Reach' }, { val: '50+', label: 'Live Shows / Year' }, { val: '180+', label: 'Countries Represented' }]
  },
  {
    id: 'brand', category: 'Brand Activations',
    title: 'Immersive Brand Experiences', meta: 'Custom builds · Pop-up concepts · Product launches',
    description: 'Custom-built brand worlds stop 100,000+ daily visitors. Product launches here generate global media coverage and viral social amplification.',
    stats: [{ val: '100K+', label: 'Daily Footfall' }, { val: '7–30 days', label: 'Avg Activation Period' }, { val: '500M+', label: 'Avg Media Impressions' }]
  },
  {
    id: 'fashion', category: 'Fashion & Culture',
    title: 'Fashion Weeks & Art Fairs', meta: 'Dubai Fashion Week · Art Dubai · Cultural showcases',
    description: 'Home of Dubai Fashion Week. Fashion Avenue transforms into a runway of unmatched grandeur — aligning your brand with the cultural pulse of the Middle East.',
    stats: [{ val: '70+', label: 'Luxury Brand Partners' }, { val: '12', label: 'Fashion Events / Year' }, { val: 'AED 2B+', label: 'Fashion Sector Value' }]
  },
  {
    id: 'corporate', category: 'Corporate & Convention',
    title: 'Exhibition & Convention Space', meta: '250,000 sqft · Full AV · 5,000+ capacity',
    description: '250,000 sqft of flexible, fully serviced convention space. Complete AV, catering, and concierge infrastructure for any scale of event.',
    stats: [{ val: '250K sqft', label: 'Flexible Space' }, { val: '5,000+', label: 'Event Capacity' }, { val: 'Full AV', label: 'Catering Included' }]
  },
  {
    id: 'celeb', category: 'Celebrity & Influencer',
    title: 'Global Talent & Appearances', meta: 'VIP hosting · Red carpet · Media facilities',
    description: 'Red carpet infrastructure, press facilities, VIP hosting suites, and guaranteed global media presence. Default choice for celebrity appearances with viral reach.',
    stats: [{ val: '500M+', label: 'Social Reach / Event' }, { val: '8', label: 'VIP Hosting Suites' }, { val: '180+', label: 'Media Accreditations' }]
  }
]

export const SPONSORSHIP_TIERS = [
  { tier: 'Platinum', border: 'gold', benefits: ['Naming rights available', 'Dedicated activation zone', 'Bespoke digital integration across 2,000+ screens', 'Custom built brand environments', 'Priority event co-branding'], audience: '105M annual visitors · 100K+ daily footfall · 180+ nationalities' },
  { tier: 'Gold', benefits: ['Category sponsorship', 'Co-branded events', 'Social media amplification', 'Seasonal campaign rights'] },
  { tier: 'Silver', benefits: ['Pop-up activation space', 'Product sampling programs', 'Event co-branding opportunities'] }
]

export const LEASING_PATHS = [
  { type: 'Luxury Flagship', tagline: 'For brands that define the category', units: '500–5,000+ sqft', location: 'Fashion Avenue', support: 'White-glove fit-out support included' },
  { type: 'Mid-Tier & Fashion', tagline: 'Scale meets prestige', units: '150–800 sqft', location: 'High-traffic anchor positions', support: 'Proven category co-tenancy data' },
  { type: 'F&B Concepts', tagline: 'Feed 100,000 daily visitors', units: '80–2,000 sqft', location: 'Promenade + waterfront options', support: 'Kitchen infrastructure available' },
  { type: 'Pop-Up & Temporary', tagline: 'Test. Launch. Activate.', units: '7-day to 6-month terms', location: 'Fully fitted kiosks', support: 'Peak season priority access' }
]
