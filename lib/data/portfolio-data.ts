import type { PortfolioProject, PortfolioCategory } from "@/types/portfolio"

export const portfolioCategories: PortfolioCategory[] = [
  { id: "1", name: "Luxury Website", slug: "luxury-website", icon: "Globe", description: "Premium web experiences" },
  { id: "2", name: "AI-Based ERP", slug: "ai-erp", icon: "Brain", description: "Intelligent enterprise solutions" },
  {
    id: "3",
    name: "Custom Software",
    slug: "custom-software",
    icon: "Code",
    description: "Tailored software solutions",
  },
  {
    id: "4",
    name: "Business Automation",
    slug: "automation",
    icon: "Wrench",
    description: "Process automation solutions",
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Elite Fashion Hub",
    description:
      "A luxurious, responsive website with sleek animations for a high-end fashion brand that captivates audiences and drives conversions.",
    excerpt: "A luxurious, responsive website with sleek animations for a high-end fashion brand.",
    content: `
Elite Fashion Hub needed a complete digital transformation to match their luxury brand positioning. We created a stunning, responsive website that showcases their premium collections with sophisticated animations and seamless user experience.

The client required a website that would reflect their luxury brand positioning, showcase premium collections effectively, provide seamless user experience across all devices, and drive conversions and engagement.

## Our Approach

We focused on creating a minimalist yet luxurious design that puts the products at the center. Every element was carefully crafted to enhance the user experience without overwhelming the content.

The design philosophy centered around elegance and sophistication, ensuring that each interaction felt premium and intentional. We conducted extensive user research to understand the target audience's expectations and preferences.

## Technical Implementation

Our technical approach prioritized performance without compromising visual quality:

• Responsive Design with mobile-first approach ensuring perfect display on all devices
• Performance Optimization for fast loading times without compromising visual quality  
• SEO Optimization with comprehensive strategy for better search visibility
• Analytics Integration with detailed tracking for business insights
• Advanced caching mechanisms for optimal performance
• Progressive image loading for enhanced user experience

## Key Features Implemented

The website includes several sophisticated features designed to enhance the luxury shopping experience:

• Interactive product galleries with zoom functionality and 360-degree views
• Smooth scroll animations that enhance user experience and guide attention
• Custom content management system for easy product and content updates
• Seamless social media integration for enhanced brand presence
• Advanced search and filtering capabilities
• Personalized user accounts and wishlist functionality
• Secure payment processing with multiple payment options

The new website delivered exceptional results with a 300% increase in online engagement, 250% boost in conversion rates, and 95% client satisfaction rating, along with significant enhancement in brand perception among their target luxury market.
    `,
    category: "Luxury Website",
    categorySlug: "luxury-website",
    slug: "elite-fashion-hub",
    duration: "6 Months",
    industry: "Fashion Industry",
    image: "/portfolio/elite-banner.jpg",
    results: "300% ROI Increase",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity CMS",
      "Vercel",
      "Google Analytics",
      "Stripe",
    ],
    features: [
      "Responsive Luxury Design",
      "Advanced Product Showcase",
      "Smooth Scroll Animations",
      "Mobile-First Approach",
      "SEO Optimization",
      "Performance Optimization",
      "Custom CMS Integration",
      "Social Media Integration",
      "Analytics Dashboard",
    ],
    metrics: [
      { label: "Engagement Increase", value: "300%", description: "Significant boost in user engagement" },
      { label: "Conversion Boost", value: "250%", description: "Improved conversion rates" },
      { label: "Client Satisfaction", value: "95%", description: "Exceptional client satisfaction rating" },
    ],
    liveUrl: "https://elitefashionhub.com",
    featured: true,
    seo: {
      metaTitle: "Elite Fashion Hub - Luxury Fashion Website | Vyllion Portfolio",
      metaDescription:
        "Discover how we created a stunning luxury website for Elite Fashion Hub with 300% engagement increase.",
      keywords: ["luxury website", "fashion website", "responsive design", "luxury brand"],
    },
  },
  {
    id: "2",
    title: "Luxe ERP System",
    description:
      "AI-driven ERP with intuitive dashboards for a premium retailer, revolutionizing operations with intelligent automation and sophisticated analytics.",
    excerpt: "AI-driven ERP with intuitive dashboards for a premium retailer.",
    content: `
Luxe Enterprises required a comprehensive ERP solution that could handle their complex retail operations while providing AI-powered insights for strategic decision-making. We developed a sophisticated system with machine learning capabilities.

The client faced several operational challenges including complex multi-location inventory management, manual processes causing inefficiencies, lack of real-time business intelligence, and difficulty in demand forecasting.

## Our Solution

We developed a comprehensive AI-powered ERP system that addresses all operational needs while providing intelligent insights for strategic decision-making.

The solution was built with scalability in mind, ensuring it could grow with the business while maintaining performance and reliability. We implemented a modular architecture that allows for easy customization and future enhancements.

## AI-Powered Features

Our implementation includes cutting-edge artificial intelligence capabilities:

• Predictive Analytics using machine learning algorithms to analyze historical data and predict demand
• Inventory Optimization with AI-driven management that automatically adjusts stock levels
• Smart Reporting with automated report generation and intelligent insights
• Real-time Dashboards providing immediate visibility into all business operations
• Automated workflow management reducing manual intervention
• Machine learning insights for strategic decision making

## Technical Architecture

The system was built using modern, scalable technologies:

• Microservices Architecture for scalable and maintainable system design
• API-First Approach ensuring seamless integration capabilities
• Cloud-Native infrastructure built for scalability and reliability
• Advanced security measures protecting sensitive business data
• Real-time data processing for immediate insights and recommendations
• Comprehensive backup and disaster recovery systems

The implementation delivered exceptional results with a 400% increase in operational efficiency, 60% reduction in manual processes, 98% accuracy in demand forecasting, and real-time business intelligence capabilities that transformed their decision-making process.
    `,
    category: "AI-Based ERP",
    categorySlug: "ai-erp",
    slug: "luxe-erp-system",
    duration: "8 Months",
    industry: "Retail Enterprise",
    results: "400% Efficiency Gain",
    image: "/portfolio/luxe.jpg",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    features: [
      "Predictive Analytics",
      "Inventory Optimization",
      "Smart Reporting",
      "Real-time Dashboards",
      "Automated Workflows",
      "Machine Learning Insights",
      "Multi-location Management",
      "Advanced Security",
      "API Integrations",
    ],
    metrics: [
      { label: "Efficiency Increase", value: "400%", description: "Dramatic improvement in operational efficiency" },
      { label: "Process Reduction", value: "60%", description: "Significant reduction in manual processes" },
      { label: "Accuracy Rate", value: "98%", description: "High accuracy in predictions and analytics" },
    ],
    demoUrl: "https://demo.luxeerp.com",
    featured: true,
    seo: {
      metaTitle: "Luxe ERP System - AI-Powered Enterprise Solution | Vyllion Portfolio",
      metaDescription:
        "Discover our AI-driven ERP system that increased operational efficiency by 400% for Luxe Enterprises.",
      keywords: ["AI ERP", "enterprise software", "business automation", "machine learning"],
    },
  },
  {
    id: "3",
    title: "Elegant CRM Tool",
    description:
      "Custom software tailored for a luxury car dealership's unique needs, streamlining customer relationships and sales processes with sophisticated elegance.",
    excerpt: "Custom software tailored for a luxury car dealership's unique needs.",
    content: `
A prestigious luxury car dealership needed a sophisticated CRM system that could handle high-value customer relationships while maintaining the elegance expected in the luxury automotive industry.

The client faced several operational challenges including complex customer relationship management, manual sales processes, lack of integrated communication tools, and difficulty tracking high-value transactions.

## Our Solution

We developed a comprehensive custom CRM system specifically designed for the luxury automotive industry, combining sophisticated functionality with elegant user experience.

The solution was tailored to meet the unique requirements of luxury car sales, where relationship building and personalized service are paramount. Every feature was designed with the luxury customer experience in mind.

## Key Features Implemented

The CRM system includes specialized features for luxury automotive sales:

• Customer Lifecycle Management with complete journey tracking from initial inquiry to post-sale service
• Sales Pipeline Tracking with visual pipeline management and automated follow-ups
• Luxury Vehicle Inventory with sophisticated management system for detailed specifications
• Appointment Scheduling for test drives, consultations, and service appointments
• Commission Tracking with automated calculations and reporting
• Advanced Analytics providing insights into sales performance and customer behavior

## Technical Implementation

The system architecture prioritizes reliability and user experience:

• Microservices Design ensuring scalable and maintainable system architecture
• Real-time Updates with instant synchronization across all user interfaces
• Mobile Responsive design providing full functionality on all devices
• Integration Capabilities with seamless third-party API connections
• Document Management with automated contract and document handling
• Communication Tools including integrated email and SMS capabilities

The implementation delivered exceptional results with a 350% increase in sales efficiency, 85% improvement in customer satisfaction, 70% reduction in administrative time, and streamlined sales processes across all locations.
    `,
    category: "Custom Software",
    categorySlug: "custom-software",
    slug: "elegant-crm-tool",
    duration: "5 Months",
    industry: "Automotive Luxury",
    results: "350% Sales Boost",
    image: "/portfolio/crm.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT", "Stripe", "AWS S3"],
    features: [
      "Customer Lifecycle Management",
      "Sales Pipeline Tracking",
      "Luxury Vehicle Inventory",
      "Appointment Scheduling",
      "Commission Tracking",
      "Advanced Analytics",
      "Mobile Responsive",
      "Document Management",
      "Integration Capabilities",
    ],
    metrics: [
      { label: "Sales Increase", value: "350%", description: "Dramatic improvement in sales efficiency" },
      { label: "Customer Satisfaction", value: "85%", description: "Significant boost in customer satisfaction" },
      { label: "Time Savings", value: "70%", description: "Reduction in administrative tasks" },
    ],
    demoUrl: "https://demo.elegantcrm.com",
    featured: false,
    seo: {
      metaTitle: "Elegant CRM Tool - Custom Software Solution | Vyllion Portfolio",
      metaDescription:
        "Discover our custom CRM system that increased sales efficiency by 350% for a luxury car dealership.",
      keywords: ["custom CRM", "luxury automotive", "sales management", "customer relationship"],
    },
  },
  {
    id: "4",
    title: "AutoFlow Suite",
    description:
      "Advanced automation for a top-tier hospitality chain, boosting efficiency through intelligent workflow automation and seamless system integration.",
    excerpt: "Advanced automation for a top-tier hospitality chain, boosting efficiency.",
    content: `
A premier hospitality chain with multiple luxury properties needed comprehensive automation to streamline operations across all locations while maintaining their high service standards and operational excellence.

The client operated multiple luxury properties and faced challenges with manual booking and reservation processes, inconsistent service delivery across locations, complex staff scheduling and management, and inefficient inventory and maintenance workflows.

## Our Automation Solution

We developed AutoFlow Suite, a comprehensive automation platform that revolutionized their operations through intelligent workflow automation and seamless system integration.

The solution was designed to maintain the personal touch that luxury hospitality requires while automating repetitive tasks and ensuring consistency across all properties.

## Core Automation Features

The platform includes sophisticated automation capabilities:

• Booking Automation with intelligent reservation management and room assignments
• Staff Scheduling using AI-powered optimization based on occupancy and historical data
• Inventory Management with automated tracking and reordering systems
• Guest Communication through automated workflows for all guest interactions
• Revenue Optimization with dynamic pricing and yield management
• Maintenance Workflows ensuring proactive property maintenance

## Technical Architecture

The system was built for scalability and reliability:

• Automation Engine using Python/Django for core workflow management
• Distributed Processing with Celery for background operations
• High-Performance Caching using Redis for message brokering
• Robust Data Storage with PostgreSQL for complex relationship handling
• API Gateway providing centralized integration for external systems
• Real-time Processing through webhook management and notifications

The AutoFlow Suite delivered exceptional results with a 500% increase in operational efficiency, 80% reduction in manual tasks, 92% improvement in guest satisfaction, and consistent service delivery across all properties.
    `,
    category: "Business Automation",
    categorySlug: "automation",
    slug: "autoflow-suite",
    duration: "7 Months",
    industry: "Hospitality Chain",
    results: "500% Efficiency Gain",
    image: "/portfolio/autoflow.jpg",
    technologies: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Zapier"],
    features: [
      "Booking Automation",
      "Staff Scheduling",
      "Inventory Management",
      "Guest Communication",
      "Revenue Optimization",
      "Maintenance Workflows",
      "Reporting Automation",
      "Multi-property Sync",
      "API Integrations",
    ],
    metrics: [
      { label: "Efficiency Increase", value: "500%", description: "Dramatic improvement in operational efficiency" },
      { label: "Task Reduction", value: "80%", description: "Significant reduction in manual tasks" },
      { label: "Guest Satisfaction", value: "92%", description: "Outstanding guest satisfaction scores" },
    ],
    demoUrl: "https://demo.autoflowsuite.com",
    featured: false,
    seo: {
      metaTitle: "AutoFlow Suite - Business Automation Solution | Vyllion Portfolio",
      metaDescription:
        "Discover our automation suite that increased operational efficiency by 500% for a luxury hospitality chain.",
      keywords: ["business automation", "hospitality automation", "workflow optimization", "process automation"],
    },
  },
]

// Utility functions for data access
export const getPortfolioProjects = (): PortfolioProject[] => {
  return portfolioProjects
}

export const getFeaturedPortfolioProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.featured)
}

export const getPortfolioProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return portfolioProjects.find((project) => project.slug === slug)
}

export const getPortfolioProjectsByCategory = (category: string): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.categorySlug === category)
}

export const getPortfolioCategories = (): PortfolioCategory[] => {
  return portfolioCategories
}
