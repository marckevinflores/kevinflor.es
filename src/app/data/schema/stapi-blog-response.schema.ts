export interface StrapiBlogResponse {
  data: StrapiData[]
  meta: Meta
}

export interface StrapiData {
  id: number
  attributes: Attributes
}

interface Attributes {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  slug: string
  content: string
  summary: string
  picture: Picture
  seo: Seo
}

interface Picture {
  data: PictureData
}

interface PictureData {
  id: number
  attributes: Attributes2
}

interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

interface Formats {
  thumbnail: Thumbnail
  small: Small
  medium: Medium
  large: Large
}

interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
  keywords: string
}

interface Meta {
  pagination: Pagination
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
