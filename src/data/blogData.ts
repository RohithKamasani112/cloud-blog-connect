import { Author, BlogPost, Category } from "@/types/blog";

export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150",
    bio: "Frontend Architect with 8+ years building scalable web applications",
    specialties: ["Angular", "TypeScript", "React", "Performance"],
    postCount: 12,
    joinDate: "2022-01-15"
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    bio: "Full-stack Developer specializing in enterprise solutions",
    specialties: ["TypeScript", "Node.js", "Enterprise", "Architecture"],
    postCount: 8,
    joinDate: "2022-03-20"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    bio: "UI/UX Developer passionate about beautiful, accessible interfaces",
    specialties: ["CSS", "Design Systems", "Accessibility", "UI/UX"],
    postCount: 10,
    joinDate: "2022-02-10"
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    bio: "DevOps Engineer focused on scalable cloud infrastructure",
    specialties: ["Docker", "Kubernetes", "DevOps", "Cloud"],
    postCount: 6,
    joinDate: "2022-04-05"
  },
  {
    id: "5",
    name: "Jessica Wu",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    bio: "React Specialist with expertise in performance optimization",
    specialties: ["React", "Performance", "Hooks", "Testing"],
    postCount: 9,
    joinDate: "2022-01-30"
  },
  {
    id: "6",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    bio: "API Architect designing robust backend systems",
    specialties: ["GraphQL", "REST", "API Design", "Backend"],
    postCount: 7,
    joinDate: "2022-05-12"
  },
  {
    id: "7",
    name: "Robert Martinez",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    bio: "Security Engineer keeping applications safe and secure",
    specialties: ["Security", "Authentication", "Cybersecurity", "Best Practices"],
    postCount: 5,
    joinDate: "2022-03-15"
  },
  {
    id: "8",
    name: "Lisa Park",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    bio: "Mobile Developer creating progressive web experiences",
    specialties: ["PWA", "Mobile", "React Native", "Performance"],
    postCount: 8,
    joinDate: "2022-06-01"
  }
];

export const categories: Category[] = [
  { id: "1", name: "Angular", description: "Modern Angular development", icon: "🅰️", postCount: 15, color: "text-red-600" },
  { id: "2", name: "React", description: "React ecosystem and best practices", icon: "⚛️", postCount: 18, color: "text-blue-600" },
  { id: "3", name: "TypeScript", description: "Type-safe JavaScript development", icon: "🔷", postCount: 22, color: "text-blue-800" },
  { id: "4", name: "CSS", description: "Modern styling and layouts", icon: "🎨", postCount: 12, color: "text-pink-600" },
  { id: "5", name: "Node.js", description: "Server-side JavaScript", icon: "🟢", postCount: 14, color: "text-green-600" },
  { id: "6", name: "DevOps", description: "Deployment and infrastructure", icon: "🚀", postCount: 10, color: "text-purple-600" },
  { id: "7", name: "Security", description: "Web application security", icon: "🔒", postCount: 8, color: "text-gray-600" },
  { id: "8", name: "Performance", description: "Optimization and speed", icon: "⚡", postCount: 11, color: "text-yellow-600" }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Angular 15: The Complete Developer's Guide",
    excerpt: "Explore the latest features in Angular 15, including standalone components, optional injectors, and improved developer experience.",
    content: "Angular 15 brings exciting new features...",
    author: authors[0],
    publishDate: "2024-01-15",
    readTime: 12,
    tags: ["Angular", "TypeScript", "Frontend"],
    category: "Angular",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    featured: true,
    likes: 245,
    views: 1840
  },
  {
    id: "2",
    title: "TypeScript Best Practices for Enterprise Development",
    excerpt: "Learn essential TypeScript patterns and practices for building maintainable, scalable enterprise applications.",
    content: "TypeScript has become the standard...",
    author: authors[1],
    publishDate: "2024-01-12",
    readTime: 15,
    tags: ["TypeScript", "Enterprise", "Best Practices"],
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    featured: true,
    likes: 189,
    views: 1520
  },
  {
    id: "3",
    title: "Modern CSS Grid Layouts: Beyond the Basics",
    excerpt: "Master advanced CSS Grid techniques for creating complex, responsive layouts with ease and precision.",
    content: "CSS Grid has revolutionized...",
    author: authors[2],
    publishDate: "2024-01-10",
    readTime: 8,
    tags: ["CSS", "Grid", "Responsive Design"],
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    featured: false,
    likes: 156,
    views: 980
  },
  {
    id: "4",
    title: "Building Scalable Node.js Microservices",
    excerpt: "Design and implement robust microservices architecture using Node.js, Docker, and modern deployment strategies.",
    content: "Microservices architecture...",
    author: authors[3],
    publishDate: "2024-01-08",
    readTime: 18,
    tags: ["Node.js", "Microservices", "Docker"],
    category: "Node.js",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    featured: true,
    likes: 203,
    views: 1650
  },
  {
    id: "5",
    title: "React Hooks: Advanced Patterns and Performance",
    excerpt: "Dive deep into React Hooks with advanced patterns, custom hooks, and performance optimization techniques.",
    content: "React Hooks have transformed...",
    author: authors[4],
    publishDate: "2024-01-05",
    readTime: 14,
    tags: ["React", "Hooks", "Performance"],
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    featured: false,
    likes: 178,
    views: 1340
  },
  {
    id: "6",
    title: "GraphQL vs REST: Choosing the Right API Strategy",
    excerpt: "Compare GraphQL and REST APIs, exploring when to use each approach for optimal application architecture.",
    content: "API design is crucial...",
    author: authors[5],
    publishDate: "2024-01-03",
    readTime: 11,
    tags: ["GraphQL", "REST", "API Design"],
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    featured: false,
    likes: 134,
    views: 890
  },
  {
    id: "7",
    title: "Web Security Essentials for Modern Developers",
    excerpt: "Essential security practices every developer should know to protect applications from common vulnerabilities.",
    content: "Security should never be an afterthought...",
    author: authors[6],
    publishDate: "2024-01-01",
    readTime: 16,
    tags: ["Security", "Authentication", "Best Practices"],
    category: "Security",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    featured: true,
    likes: 267,
    views: 2100
  },
  {
    id: "8",
    title: "Progressive Web Apps: The Future of Mobile Web",
    excerpt: "Build engaging, app-like experiences on the web with Progressive Web App technologies and best practices.",
    content: "Progressive Web Apps combine...",
    author: authors[7],
    publishDate: "2023-12-28",
    readTime: 13,
    tags: ["PWA", "Mobile", "Performance"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    featured: false,
    likes: 145,
    views: 1120
  }
];