export interface BlogSchema {
  id: number;
  content: string;
  title: string;
  summary: string;
  image: string;
  smallImage: string;
  keywords?: string;
  slug?: string;
}
