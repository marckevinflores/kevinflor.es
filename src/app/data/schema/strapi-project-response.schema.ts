export interface StrapiProjectResponse {
  data: Data[]
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  formats: Formats
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  featured?: boolean
  tools: Tools
  images: Images
  links: Links
  picture: Picture
}

export interface Tools {
  data: Data2[]
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Images {
  data?: Data3[]
}

export interface Data3 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
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

export interface Formats {
  thumbnail: Thumbnail
  small: Small
  medium: Medium
  large: Large
}

export interface Thumbnail {
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

export interface Small {
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

export interface Medium {
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

export interface Large {
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

export interface Links {
  id: number
  website?: string
  playstore?: string
  github?: string
  appstore?: string
}

export interface Picture {
  data: Data4
}

export interface Data4 {
  id: number
  attributes: Attributes4
}

export interface Attributes4 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats2
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

export interface Formats2 {
  thumbnail: Thumbnail2
}

export interface Thumbnail2 {
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

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
