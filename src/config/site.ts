export const site = {
  name: "ClearFlow Septic Solutions",
  tagline: "Clean Tanks. Clear Systems. Trusted Service.",
  description: "A premium septic services website template built for home service companies. Features clear service paths, strong trust signals, mobile-first CTAs, and an easy estimate experience for homeowners who need septic help now.",
  url: "https://septic-template.pages.dev",
  phone: "(555) 123-4567", phonePlain: "5551234567", email: "service@clearflowseptic.com",
  address: { street: "123 Main Street", city: "Charleston", state: "SC", zip: "29401", full: "Charleston, SC" },
  serviceArea: ["Charleston", "Mount Pleasant", "North Charleston", "Summerville", "Goose Creek", "Hanahan", "James Island", "Johns Island", "West Ashley", "Daniel Island"],
  founded: 2008,
  systemsServiced: 3847,
  rating: 4.9,
  reviewCount: 186,
  license: "Licensed & Insured",
  warranty: "Satisfaction Guaranteed",
  emergency: true,
  financing: {
    eyebrow: "Flexible Payment Options",
    title: "Make septic service easier to say yes to.",
    body: "This template puts inspection requests, financing language, emergency support, and warranty proof into a clearer path for homeowners comparing local septic companies.",
    highlights: ["Simple inspection CTA", "Emergency response language", "Clear estimate request flow"]
  },
  warrantyDetails: {
    summary: "Clear workmanship language, cleanup standards, documentation, and warranty proof placed where homeowners can see it before they request an estimate."
  },
  materials: [
    { name: "Septic Tank Pumping", description: "Professional pumping and cleaning to restore flow, prevent backups, and extend system life.", proof: ["Tank-level inspection included", "Proper disposal documentation", "Recommended frequency guidance"] },
    { name: "System Installation", description: "Complete septic system design and installation for new construction, replacements, and upgrades.", proof: ["Soil evaluation & perc testing", "Code-compliant design", "Long-term maintenance plan"] },
    { name: "Repairs & Troubleshooting", description: "Fast diagnosis and repair of backups, leaks, drain field issues, and component failures.", proof: ["Camera inspection available", "Same-day emergency response", "Written repair estimates"] },
    { name: "Inspections & Certifications", description: "Real estate, routine, and compliance inspections with full documentation.", proof: ["Certified inspector on staff", "Digital report delivery", "County compliance support"] },
  ],
  projectSpotlight: {
    title: "Emergency Backup Turned Into A Clean System",
    location: "Charleston, SC",
    summary: "A homeowner faced a weekend septic backup. The improved website concept makes emergency, inspection, pumping, and repair paths easier to find and act on.",
    image: "/images/septic/septic-service-truck.jpg",
    alt: "Professional septic service truck at residential property",
    tags: ["Emergency", "Pumping", "Repair Path"],
    metrics: [
      { value: "24hr", label: "Emergency Response" },
      { value: "100%", label: "Satisfaction Rate" },
      { value: "0", label: "Hidden Fees" },
      { value: "5★", label: "Trust Proof" }
    ],
    scope: [
      "Clear emergency contact above the fold",
      "Pumping, repair, and installation paths separated",
      "Inspection and certification proof made easier to find",
      "Warranty and satisfaction standards brought forward"
    ]
  },
  web3formsKey: import.meta.env.WEB3FORMS_KEY ?? "",
  ogImage: "/og-image.jpg",
  social: { facebook: "", google: "", instagram: "" },
  colors: { primary: "#CC1720", secondary: "#0A2447" },
  preview: {
    eyebrow: "Charleston Septic · Built Around Trust, Proof & Fast Response",
    heroLine1: "Built for",
    heroLine2: "ClearFlow Septic Solutions",
    heroLine3: "to Win More Septic Jobs.",
    heroSub: "A sharper Charleston septic website concept for ClearFlow Septic Solutions: clearer service paths, stronger proof, better mobile CTAs, and trust signals built for homeowners who need septic help now.",
    stat2: "24hr",
    stat2Label: "Emergency Response",
    stat3: "$0",
    stat3Label: "Estimate CTA",
    stat4: "Satisfaction",
    stat4Label: "Guaranteed"
  }
};

export const services = [
  { slug: "septic-pumping", title: "Septic Tank Pumping", short: "Professional pumping and cleaning to prevent backups and extend system life.", long: "A clear pumping page helps homeowners understand frequency, process, and what to expect before they schedule service.", icon: "droplet" },
  { slug: "septic-installation", title: "Septic Installation", short: "Complete system design and installation for new construction and replacements.", long: "Installation messaging should make it easy for homeowners and builders to understand the process, timeline, and compliance requirements.", icon: "home" },
  { slug: "septic-repair", title: "Septic Repair", short: "Fast diagnosis and repair of backups, leaks, drain field failures, and component issues.", long: "Repair copy should reduce panic and give homeowners a clear next step — from emergency contact to inspection scheduling.", icon: "wrench" },
  { slug: "drain-field", title: "Drain Field Services", short: "Leach field repair, rejuvenation, and replacement to restore proper drainage.", long: "Drain field pages should explain symptoms, solutions, and the difference between repair and full replacement.", icon: "water" },
  { slug: "septic-inspection", title: "Septic Inspections", short: "Real estate, routine, and compliance inspections with full documentation.", long: "Inspection copy should reduce uncertainty and tell homeowners exactly what happens after they submit a request.", icon: "search" },
  { slug: "emergency-services", title: "Emergency Services", short: "24/7 emergency response for backups, overflows, and urgent septic failures.", long: "Emergency pages need urgency without panic — clear contact, response time, and what the homeowner should do while waiting.", icon: "bolt" },
];

export const faqs = [
  { q: "How often should a septic tank be pumped?", a: "Most residential tanks need pumping every 3–5 years depending on household size, tank capacity, and usage. Regular pumping prevents backups, extends system life, and protects your drain field." },
  { q: "What are the warning signs of septic system failure?", a: "Slow drains, gurgling pipes, sewage odors, wet spots in the yard, and backups in toilets or sinks are all warning signs. Call a professional immediately to prevent costly damage." },
  { q: "How much does septic tank pumping cost?", a: "Costs vary by tank size, accessibility, and location. Most residential pumping jobs range from $300–$600. We provide upfront, written estimates with no hidden fees." },
  { q: "Can you help with real estate septic inspections?", a: "Yes. We provide certified septic inspections for home buyers, sellers, and lenders. You'll receive a detailed digital report suitable for closing and county compliance." },
  { q: "Do you offer emergency septic services?", a: "Absolutely. We offer 24/7 emergency response for backups, overflows, and urgent failures. Call our emergency line any time — day, night, or weekend." },
  { q: "What areas do you service?", a: "We proudly serve Charleston and surrounding communities including Mount Pleasant, North Charleston, Summerville, Goose Creek, Hanahan, James Island, and Johns Island." },
];
