import {
  Code, Smartphone, ShoppingCart, Search,
  Zap, Shield, Brain, Bot, Share2, Cloud, Settings,
  Palette, Database, Globe, AlertTriangle,
} from 'lucide-react';

/** Convert “Custom Web Development” → “custom-web-development” */
export const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    shortDescription: 'Tailored apps built with React, Next.js, and Node.js.',
    extendedDescription:
      'We craft bespoke web applications designed to meet your unique business needs. Using modern frameworks like React, Next.js, and Node.js, we deliver scalable, high‑performance solutions that drive engagement and growth. Our process includes agile development, CI/CD pipelines, and thorough testing to ensure reliability. From concept to deployment, we collaborate closely with you to iterate on designs, integrate real-time features like WebSockets for live updates, and optimize for accessibility (WCAG standards). Whether it\'s a SaaS dashboard with user authentication via Auth0 or a dynamic portfolio site with CMS integration, our web apps are built to evolve with your business, supporting future expansions like PWA conversions or serverless migrations.',
    features: [
      'Custom UI/UX design tailored to your brand with Figma & Adobe XD',
      'Server‑side rendering (SSR) and static site generation (SSG) using Next.js 14+',
      'Integration with APIs and third‑party services like Stripe & Twilio',
      'Scalable backend with Node.js, Express.js, and databases like MongoDB or PostgreSQL',
      'Progressive Web App (PWA) support for offline functionality',
    ],
    benefits:
      'Launch a fast, responsive, and feature‑rich website that enhances user experience and supports your business goals with seamless scalability. By leveraging cutting-edge technologies, you\'ll see improved SEO rankings, reduced bounce rates, and higher conversion funnels, translating to measurable ROI within months. Our custom solutions empower your team to manage content effortlessly, adapt to market changes without downtime, and scale globally—turning your digital presence into a powerful growth engine that outpaces competitors.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDescription: 'Robust native & cross‑platform apps.',
    extendedDescription:
      'Our mobile app development services deliver seamless, high-quality applications for iOS and Android. Whether you need a native app with Swift/Kotlin or a cross‑platform solution using React Native or Flutter, we ensure performance, security, and usability across devices. We start with user research to define personas and journeys, then prototype interactive flows in tools like Proto.io before coding. Our apps incorporate biometric auth (Face ID/Touch ID), geolocation via Google Maps API, and offline sync with Realm or SQLite. Post-launch, we provide analytics via Firebase Crashlytics for crash reporting and App Center for distribution, ensuring your app stays robust and user-loved through regular updates and A/B testing.',
    features: [
      'Native and cross‑platform development with React Native, Flutter, or Swift/Kotlin',
      'Custom animations and intuitive interfaces using Lottie & Framer Motion',
      'Integration with Firebase, push notifications via OneSignal, and APIs like REST/GraphQL',
      'App Store and Play Store deployment support with ASO optimization',
      'Offline-first architecture with SQLite & Redux Persist',
    ],
    benefits:
      'Reach your audience on mobile with apps that are fast, reliable, and tailored to your business, boosting retention and conversions. Our development approach minimizes time-to-market while maximizing app store visibility through optimized ASO, leading to organic downloads and viral growth. With built-in analytics and iterative updates, you\'ll gain deep insights into user behavior, enabling data-driven enhancements that increase lifetime value (LTV) and foster long-term loyalty among your mobile-first customers.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    shortDescription: 'Online stores with payments, analytics, CMS.',
    extendedDescription:
      'We build robust e‑commerce platforms that empower businesses to sell online efficiently. From product catalogs to secure payment gateways, our solutions include everything you need for a successful online store, integrated with headless CMS and advanced personalization. Our approach involves market analysis to define your funnel, then custom builds with Shopify Headless or Medusa for flexibility. We handle multi-currency support via Wise, abandoned cart recovery emails with Klaviyo, and SEO-optimized product pages with dynamic pricing. Analytics dashboards track KPIs like AOV and CLV using Segment, while inventory syncs with ERP like SAP prevent stockouts—turning your store into a revenue powerhouse.',
    features: [
      'Custom storefronts with Shopify, WooCommerce, or Next.js Commerce & Medusa.js',
      'Secure payment gateways (Stripe, PayPal, Razorpay) with fraud detection',
      'Advanced analytics and customer insights using Google Analytics 4 & Mixpanel',
      'CMS for easy product and content management with Strapi or Sanity',
      'Multi-vendor marketplace support with inventory sync via ERP systems',
    ],
    benefits:
      'Increase sales with a user‑friendly, secure, and scalable e‑commerce platform tailored to your brand, complete with omnichannel capabilities. Our solutions reduce cart abandonment by up to 30% through personalized recommendations and seamless checkouts, while integrated analytics provide actionable insights to refine inventory and marketing. This not only accelerates revenue growth but also builds customer trust with PCI-compliant security and mobile-optimized experiences, positioning your online store as a competitive leader in the digital marketplace.',
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    shortDescription: 'Rank high with SEO, SEM & performance audits.',
    extendedDescription:
      'Our SEO and digital marketing services help your business stand out online. We optimize your website, run targeted ad campaigns, and perform audits to boost visibility and conversions, leveraging AI tools for predictive insights. We begin with a comprehensive audit using Screaming Frog to uncover technical issues, then craft a 6-month roadmap blending on-page tweaks (meta tags, schema) with off-page link-building via HARO. For SEM, we manage PPC bids with automated rules in Google Ads, A/B testing creatives for CTR lift. Content marketing includes pillar pages and cluster models, while social amplification uses Buffer for scheduling—driving qualified leads and measurable ROI through tools like Hotjar for heatmaps.',
    features: [
      'On‑page and technical SEO optimization with Ahrefs & SEMrush',
      'Keyword research and content strategy using Google Keyword Planner & SurferSEO',
      'Google Ads, Meta Ads, and social media ad campaigns with A/B testing',
      'Performance audits for Core Web Vitals using Lighthouse & PageSpeed Insights',
      'Voice search optimization and schema markup for rich snippets',
    ],
    benefits:
      'Drive organic traffic and conversions with data‑driven strategies that improve your search rankings and ROI on marketing spend. Our holistic approach can lift organic traffic by 200% in the first year, combining evergreen content with paid amplification to capture high-intent leads. By focusing on user signals and E-E-A-T guidelines, we not only enhance visibility but also build long-term authority, reducing reliance on paid ads and creating a sustainable funnel that scales with your business ambitions.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    shortDescription: 'Speed, caching & Core Web Vitals optimization.',
    extendedDescription:
      'We enhance your website’s performance to deliver lightning‑fast load times and a superior user experience, focusing on edge computing and real-user monitoring. Our optimization starts with a full audit via GTmetrix, targeting 90+ PageSpeed scores through critical CSS inlining and font preloading. We implement AMP for mobile news sites, edge-side includes (ESI) for dynamic content, and database query tuning with EXPLAIN ANALYZE. For e-commerce, we add AMP Cart and PWAs for instant checkouts. Continuous monitoring with Pingdom alerts on slowdowns, ensuring your site scales under traffic spikes without compromising UX.',
    features: [
      'Image optimization and lazy loading with WebP & Cloudinary',
      'Advanced caching strategies (CDN via Vercel/Cloudflare, browser caching with Workbox)',
      'Code splitting and bundle optimization using Webpack & Vite',
      'Core Web Vitals improvements (LCP, FID, CLS) with performance budgets',
      'Real-user monitoring (RUM) integration with Sentry & New Relic',
    ],
    benefits:
      'Keep users engaged with a fast, smooth website that ranks higher, reduces bounce rates, and converts better across all devices. Optimized sites can improve conversion rates by 20-30%, as faster loads directly correlate with higher trust and lower abandonment. Our proactive tuning ensures future-proof performance, handling traffic surges without extra costs, while boosting SEO through better mobile scores—ultimately driving more revenue with less technical debt.',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    shortDescription: 'Regular updates, audits & uptime monitoring.',
    extendedDescription:
      'Protect your digital assets with our comprehensive security and maintenance services, including proactive threat detection and compliance audits. We conduct bi-weekly scans with Nessus to patch vulnerabilities, implement zero-trust models with Okta for auth, and set up WAF rules via Cloudflare. Maintenance includes automated OS/package updates via Ansible, log aggregation in ELK Stack for anomaly detection, and quarterly penetration tests. For compliance, we map controls to frameworks like SOC 2 with Vanta, ensuring your operations remain audit-ready and resilient against evolving threats like ransomware.',
    features: [
      'SSL/TLS setup and HTTPS enforcement with Let’s Encrypt & AWS Certificate Manager',
      'Regular security audits and vulnerability scans using OWASP ZAP & Snyk',
      'Automated backups and disaster recovery with AWS Backup & GitHub Actions',
      '24/7 uptime monitoring and support via PagerDuty & Datadog',
      'Compliance support for GDPR, HIPAA, and PCI-DSS standards',
    ],
    benefits:
      'Gain peace of mind with a secure, reliable platform that’s always up‑to‑date, protected from threats, and compliant with regulations. Proactive measures reduce breach risks by 70%, minimizing downtime costs and legal liabilities. Our ongoing support frees your team to focus on innovation, with 99.99% uptime guarantees that build customer confidence and safeguard your reputation in an increasingly digital world.',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    shortDescription: 'Add smart automation & AI‑driven features.',
    extendedDescription:
      'Incorporate artificial intelligence into your applications to automate processes and enhance user experiences, from chatbots to predictive analytics. We assess your use case to select models like BERT for NLP or YOLO for CV, then integrate via APIs with fine-tuning on your data using Hugging Face. For e-commerce, we deploy collaborative filtering for recs; in HR, sentiment analysis on feedback. We handle ethical aspects with explainable AI via SHAP, and deploy on scalable infra like SageMaker, monitoring drift with Evidently AI to keep models performant over time.',
    features: [
      'Integration with AI APIs (OpenAI GPT-4, Google Vertex AI, Hugging Face Transformers)',
      'Personalized recommendation systems using TensorFlow & scikit-learn',
      'Predictive analytics and data insights with MLflow & Kubeflow',
      'Custom AI model development and fine-tuning with PyTorch & Keras',
      'Ethical AI implementation with bias detection tools like Fairlearn',
    ],
    benefits:
      'Leverage AI to automate tasks, personalize experiences, and gain a competitive edge with intelligent, scalable solutions. AI integrations can cut operational costs by 40% through automation, while boosting user satisfaction with tailored interactions that feel human-like. As your data grows, our models adapt in real-time, unlocking new revenue streams like upselling via smart recs and providing actionable foresight for strategic decisions.',
  },
  {
    icon: Bot,
    title: 'Chatbot Development',
    shortDescription: 'Customer support bots powered by GPT & NLP.',
    extendedDescription:
      'Our chatbot solutions provide 24/7 customer support, lead generation, and user engagement, powered by advanced NLP and multi-channel integration. We design conversation trees with tools like Botmock, train on your FAQs using RAG for accuracy, and integrate handoffs to human agents via Intercom. For e-commerce, bots handle order tracking and upsells; in support, they triage tickets with intent classification. We A/B test flows for conversion lift and analyze sessions with Botium for UX improvements, ensuring bots evolve from scripted to truly conversational.',
    features: [
      'Conversational AI with natural language processing using Dialogflow & Rasa',
      'Integration with websites, apps, and messaging platforms (WhatsApp, Telegram via Twilio)',
      'Custom workflows for support and sales with state management in LangChain',
      'Analytics for user interaction insights using Google Analytics & Amplitude',
      'Multilingual support with translation APIs like DeepL & Google Translate',
    ],
    benefits:
      'Improve customer satisfaction and reduce support costs with intelligent, responsive chatbots that scale with your business. Bots can handle 80% of routine queries, slashing response times from hours to seconds and freeing agents for complex issues. Over time, they learn from interactions to refine responses, increasing CSAT scores and enabling 24/7 global coverage without proportional staffing increases.',
  },
  {
    icon: Share2,
    title: 'Social Media Automations',
    shortDescription: 'Automated posting, scheduling, and engagement.',
    extendedDescription:
      'Streamline your social media presence with automated tools for posting, scheduling, and analytics, integrated with CRM systems for unified workflows. We set up rules-based automation in Zapier for cross-posting, use AI for optimal timing via Later, and monitor mentions with Brand24. For campaigns, we create evergreen content calendars with Notion sync, track ROI with UTM parameters in Google Analytics, and automate replies with sentiment-aware bots. This frees your team for strategy while ensuring consistent, data-backed engagement across platforms.',
    features: [
      'Automated post scheduling for Instagram, LinkedIn, Twitter via Buffer & Hootsuite APIs',
      'AI‑generated captions and content suggestions using Jasper & Copy.ai',
      'Engagement tracking and analytics dashboards with Sprout Social & Brandwatch',
      'Integration with social media APIs and CRM (HubSpot, Salesforce)',
      'Sentiment analysis and auto-responses with MonkeyLearn & IBM Watson',
    ],
    benefits:
      'Save time and boost engagement with automated, data‑driven social media strategies that amplify your brand reach. Automations can double your posting frequency without extra effort, leading to 50% more interactions and faster audience growth. Integrated analytics reveal top-performing content, optimizing future campaigns for higher ROI and turning social into a key driver of leads and loyalty.',
  },
  {
    icon: Cloud,
    title: 'Cloud Services & DevOps',
    shortDescription: 'Scalable infrastructure with AWS, Azure, & CI/CD pipelines.',
    extendedDescription:
      'We design and manage cloud architectures that scale effortlessly, incorporating DevOps practices for automated deployments and monitoring. From assessing your on-prem migration to AWS with DMS, we build multi-cloud strategies using Terraform for IaC, ensuring high availability with auto-scaling groups and load balancers. CI/CD flows via GitHub Actions include security gates with SAST scans, and we optimize costs with AWS Cost Explorer. For monitoring, we set up dashboards in Grafana with alerts on Prometheus metrics, empowering your team with self-service portals via AWS Service Catalog.',
    features: [
      'Cloud migration and management on AWS, Azure, or Google Cloud Platform (GCP)',
      'Infrastructure as Code (IaC) with Terraform & AWS CDK',
      'CI/CD pipelines using GitHub Actions, Jenkins, or GitLab CI',
      'Containerization and orchestration with Docker & Kubernetes',
      'Cost optimization and auto-scaling with CloudWatch & Prometheus',
    ],
    benefits:
      'Achieve reliable, cost-effective scalability with automated DevOps workflows that accelerate your development cycle. Cloud setups can cut infrastructure costs by 30-50% through rightsizing and reserved instances, while CI/CD reduces release times from weeks to hours. This agility lets you respond to market demands faster, with 99.99% uptime ensuring uninterrupted service and a foundation for innovation without operational headaches.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    shortDescription: 'User-centered design with Figma, Adobe XD, & prototyping.',
    extendedDescription:
      'Our UI/UX design services create intuitive, beautiful interfaces that delight users and drive conversions, from wireframing to high-fidelity prototypes. We conduct usability testing with Maze to validate flows, build design tokens in Figma for consistency, and collaborate via Zeplin for dev handoff. For complex apps, we create journey maps in Miro, ensuring inclusivity with color contrast checks via Stark. Motion guidelines with Principle add delight, while accessibility audits confirm AA compliance—resulting in designs that not only look stunning but perform across diverse user needs.',
    features: [
      'User research and persona development with tools like Hotjar & UserTesting',
      'Wireframing and prototyping in Figma, Adobe XD, or Sketch',
      'Design systems and component libraries with Storybook & Zeroheight',
      'Accessibility audits (WCAG 2.1) using WAVE & axe-core',
      'Motion design and micro-interactions with After Effects & Lottie',
    ],
    benefits:
      'Craft compelling user experiences that increase engagement, reduce churn, and align perfectly with your brand identity. Well-designed interfaces can lift conversion rates by 25-40%, as intuitive navigation and visual appeal guide users effortlessly to actions. Our iterative process, backed by data from prototypes, ensures designs resonate culturally and technically, fostering loyalty and positioning your product as a market leader in usability.',
  },
  {
    icon: Database,
    title: 'Database & Backend Engineering',
    shortDescription: 'Robust data solutions with SQL/NoSQL & microservices.',
    extendedDescription:
      'We engineer scalable backend systems and databases that handle high loads, ensuring data integrity and fast query performance. Starting with schema design in Prisma, we choose between ACID-compliant Postgres for transactions or NoSQL DynamoDB for flexibility. Microservices communicate via Kafka for async events, with GraphQL federation for unified APIs. We implement caching layers with Memcached, sharding for scale, and ETL jobs in Apache Beam for data lakes. Security includes row-level policies and encryption at rest, with monitoring via pgBadger for Postgres bottlenecks.',
    features: [
      'Database design and optimization with PostgreSQL, MySQL, or MongoDB Atlas',
      'Microservices architecture using gRPC & Kafka for event streaming',
      'API development with GraphQL (Apollo) or RESTful endpoints',
      'Data warehousing and ETL pipelines with Apache Airflow & dbt',
      'Real-time data processing with Redis & Apache Spark',
    ],
    benefits:
      'Build a solid foundation for your app with secure, efficient data handling that supports growth and real-time operations. Optimized backends can process 10x more queries without added servers, cutting latency and costs while enabling features like real-time dashboards. This reliability scales with your user base, preventing bottlenecks and ensuring seamless experiences that retain customers and handle peak demands effortlessly.',
  },
  {
    icon: Globe,
    title: 'Internationalization & Localization',
    shortDescription: 'Global apps with i18n, RTL support, & cultural adaptation.',
    extendedDescription:
      'Expand your reach worldwide with apps that adapt to multiple languages, currencies, and cultural nuances seamlessly. We implement i18n from day one with ICU message formats, supporting 100+ locales via Polyglot.js. For RTL markets, we use flexbox logicals and test with Arabic/Hebrew datasets. Currency handling includes real-time rates from OpenExchangeRates, with region-specific formats (e.g., EU VAT calc). Localization workflows in Crowdin ensure cultural accuracy, while performance tests confirm no load hits from translations—enabling true global scalability.',
    features: [
      'Internationalization (i18n) with react-i18next or next-intl',
      'Right-to-left (RTL) support for Arabic/Hebrew with CSS logical properties',
      'Currency & date formatting using Intl API & date-fns',
      'Cultural adaptation and localization testing with Transifex & Lokalise',
      'Multi-region deployment with Vercel Edge & AWS Global Accelerator',
    ],
    benefits:
      'Go global effortlessly, engaging diverse audiences with localized experiences that feel native and boost international sales. i18n-ready apps can expand markets by 50% without redevelopment, as modular translations speed launches in new regions. This cultural sensitivity builds trust, reduces support tickets, and unlocks revenue from emerging economies, turning localization into a strategic asset for worldwide dominance.',
  },
  {
    icon: AlertTriangle,
    title: 'Cybersecurity Consulting',
    shortDescription: 'Threat assessments, penetration testing, & compliance.',
    extendedDescription:
      'Safeguard your business from cyber threats with expert consulting, including ethical hacking and regulatory compliance guidance. We perform red-team exercises simulating attacks with Cobalt Strike, then blueprint defenses like MFA with Duo and SIEM with Splunk. For compliance, we gap analyses against CIS benchmarks, automate evidence collection with Drata, and train teams via KnowBe4 simulations. Incident response playbooks include tabletop exercises, ensuring quick recovery with RTO/RPO targets met through geo-redundant backups.',
    features: [
      'Penetration testing and vulnerability assessments with Burp Suite & Metasploit',
      'Threat modeling and risk analysis using STRIDE & OWASP methodology',
      'Compliance consulting for ISO 27001, SOC 2, and NIST frameworks',
      'Incident response planning with tools like Splunk & ELK Stack',
      'Employee training and phishing simulations via KnowBe4',
    ],
    benefits:
      'Minimize risks and build trust with robust cybersecurity measures that protect your data and reputation. Comprehensive audits can prevent 90% of common breaches, saving millions in potential fines and recovery. Our consulting not only secures your assets but also enhances operational resilience, enabling confident innovation while meeting stakeholder demands for ethical, compliant practices in a threat-filled digital landscape.',
  },
] as const;