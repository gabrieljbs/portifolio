export interface ApiResponse<T> {
  status: string;
  message?: string;
  data: T;
}

export interface PaginatedMeta {
  page: number;
  limit: number;
  total: number;
  lastPage: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginatedMeta;
}

export interface ProfileData {
  id: string;
  title: string;
  description: string;
  photoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Technology {
  id: string;
  name: string;
  logo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PostTag {
  id: string;
  name: string;
  slug: string;
}

export interface PostAuthor {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  image?: string;
  status: string;
  metaTitle?: string;
  metaDescription?: string;
  isFeatured: boolean;
  readingTime: number;
  viewCount: number;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  author?: PostAuthor;
  tags: PostTag[];
}
