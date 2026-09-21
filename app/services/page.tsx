import type { Metadata } from "next";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services – ERP Software, POS Systems & App Development in Sri Lanka",
  description:
    "Swiftcode services in Sri Lanka: ERP software development, POS systems for retail & restaurants, custom web applications and iOS/Android mobile app development.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

const faqs = [
  {
    question: "What services does Swiftcode offer in Sri Lanka?",
    answer:
      "Swiftcode offers ERP software development, POS systems for retail and restaurants, custom web application development, and iOS & Android mobile app development for businesses across Sri Lanka.",
  },
  {
    question: "Do you provide ERP software for businesses in Sri Lanka?",
    answer:
      "Yes. We build end-to-end ERP systems covering finance, HR, inventory, and multi-branch operations, tailored to Sri Lankan businesses and deployed with training and support.",
  },
  {
    question: "Can you develop a POS system for my retail shop or restaurant?",
    answer:
      "Yes. Our POS systems support multi-payment gateways, inventory sync, loyalty programs, offline mode, and real-time sales reporting for retail, restaurant, and service businesses.",
  },
  {
    question: "How much does custom software development cost in Sri Lanka?",
    answer:
      "Cost depends on scope, features, and integrations. Share your requirements through our contact form and we will send you a free, no-obligation quote within 24 hours.",
  },
  {
    question: "Do you provide support after the software is launched?",
    answer:
      "Yes. Every project includes post-launch support, updates, and performance monitoring, with ongoing maintenance plans available to keep your systems running smoothly.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const services = [
  {
    id: "erp-system",
    title: "ERP System",
    tagline: "Enterprise Resource Planning",
    description:
      "End-to-end ERP solutions that integrate your core business processes — from finance and HR to supply chain and operations — into a single, unified platform.",
    features: [
      "Finance & Accounting Module",
      "Human Resources Management",
      "Supply Chain & Inventory",
      "Real-time Analytics Dashboard",
      "Multi-branch Support",
      "Role-based Access Control",
    ],
    projects: [
      {
        title: "Manufacturing ERP Rollout",
        description: "Full ERP deployment for a 300-employee manufacturing company, cutting operational costs by 28%.",
        tags: ["ERP", "Manufacturing"],
      },
      {
        title: "Retail Chain Integration",
        description: "Unified ERP system connecting 12 retail branches with real-time inventory and POS sync.",
        tags: ["ERP", "Retail"],
      },
    ],
  },
  {
    id: "pos",
    title: "POS",
    tagline: "Point of Sale Solutions",
    description:
      "Fast, reliable, and intuitive POS systems for retail, restaurants, and service businesses. Cloud-synced with real-time reporting and multi-payment support.",
    features: [
      "Touch-optimized Interface",
      "Multi-payment Gateway Support",
      "Inventory Sync & Alerts",
      "Daily Sales Reports",
      "Customer Loyalty Programs",
      "Offline Mode Capability",
    ],
    projects: [
      {
        title: "Restaurant POS Network",
        description: "POS system deployed across 8 restaurant locations with kitchen display integration.",
        tags: ["POS", "F&B"],
      },
      {
        title: "Boutique Retail POS",
        description: "Custom POS with loyalty points and WhatsApp receipt delivery for a fashion boutique.",
        tags: ["POS", "Retail"],
      },
    ],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    tagline: "Custom Web Development",
    description:
      "Scalable, performant web applications built with modern frameworks. From customer portals to internal tools, we deliver solutions that grow with your business.",
    features: [
      "Full-Stack Development",
      "REST & GraphQL APIs",
      "Cloud Deployment (AWS/GCP)",
      "CI/CD Pipeline Setup",
      "SEO & Performance Optimized",
    ],
    projects: [
      {
        title: "Customer Self-Service Portal",
        description: "Web app allowing customers to track orders, raise tickets, and manage subscriptions independently.",
        tags: ["Web", "Portal"],
      },
      {
        title: "B2B Procurement Platform",
        description: "Multi-vendor procurement platform with approval workflows and spend analytics.",
        tags: ["Web", "B2B"],
      },
    ],
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    tagline: "iOS & Android Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences. We build apps for iOS, Android, and both using React Native and Flutter.",
    features: [
      "Native iOS & Android",
      "Push Notifications",
      "Offline-first Architecture",
      "App Store Submission",
      "Crash Analytics & Monitoring",
    ],
    projects: [
      {
        title: "Field Service Mobile App",
        description: "Cross-platform app for field technicians with job scheduling, GPS tracking, and offline sync.",
        tags: ["Mobile", "Field Service"],
      },
      {
        title: "E-commerce Mobile App",
        description: "High-performance shopping app with AR product preview, integrated payments, and order tracking.",
        tags: ["Mobile", "E-commerce"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#0d2535] pt-32 pb-16 relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-72 h-72 text-orange-500 opacity-10" viewBox="0 0 288 288">
          <circle cx="288" cy="0" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="288" cy="0" r="160" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <p className="text-(--theme-color) text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-4 max-w-2xl">
            Software Services & Projects in Sri Lanka
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            From enterprise ERP software to POS systems and mobile apps — we build software that drives real business results for Sri Lankan companies.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-white/50 hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-orange-500">Projects & Services</span>
          </div>
          {/* Quick jump buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={"#" + s.id}
                className="text-xs font-bold tracking-widest uppercase text-white/50 hover:text-(--theme-color) border border-white/10 hover:border-orange-500/50 px-4 py-2 transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Each service section with anchor id */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={"py-20 lg:py-28 scroll-mt-20 " + (idx % 2 === 0 ? "bg-white" : "bg-gray-50")}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">{service.tagline}</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0d2535] mb-4">{service.title}</h2>
                <p className="text-gray-500 text-base leading-relaxed max-w-2xl">{service.description}</p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-(--theme-color) hover:bg-orange-600 text-white font-semibold px-6 py-3 text-sm transition-all duration-200"
              >
                Get a Quote
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid lg:grid-cols-5 gap-10">
              {/* Features */}
              <div className="lg:col-span-2">
                <div className={"p-8 rounded-sm " + (idx % 2 === 0 ? "bg-gray-50" : "bg-white border border-gray-100")}>
                  <h3 className="font-serif text-lg font-bold text-[#0d2535] mb-5">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 16 16" className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l3.5 3.5L13 4" />
                          </svg>
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project cards */}
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5 content-start">
                {service.projects.map((project) => (
                  <div
                    key={project.title}
                    className="group bg-white border border-gray-100 hover:border-orange-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-[#0d2535] to-orange-500" />
                    <div className="p-6">
                      <h4 className="font-serif text-base font-bold text-[#0d2535] mb-2 group-hover:text-(--theme-color) transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">FAQ</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0d2535]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-gray-100 hover:border-orange-200 rounded-sm transition-colors duration-200"
              >
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-[#0d2535] text-sm sm:text-base">
                  {faq.question}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-lg leading-none group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-(--theme-color) relative overflow-hidden">
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#0d2535] rounded-full opacity-30" />
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-56 h-56 bg-[#0d2535] rounded-full opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/80 text-sm font-bold tracking-widest uppercase mb-2">Let Swiftcode</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">Transform your ideas into powerful software.</h2>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white hover:bg-gray-100 text-(--theme-color) font-bold px-8 py-4 transition-all duration-200 hover:shadow-lg text-sm whitespace-nowrap">
            Get In Touch →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}