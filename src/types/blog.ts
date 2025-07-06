export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  specialties: string[];
  postCount: number;
  joinDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishDate: string;
  readTime: number;
  tags: string[];
  category: string;
  image: string;
  featured: boolean;
  likes: number;
  views: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  postCount: number;
  color: string;
}