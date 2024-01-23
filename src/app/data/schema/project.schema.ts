import { TechToolName } from "./tech-tool-name.schema";

export interface ProjectSchema {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  links: ProjectLinks;
  tools: TechToolName[];
  featured: boolean;
  image: string;
  toRight?: boolean
}

export interface ProjectLinks {
  website: string;
  playstore: string;
  appstore: string;
  github: string;
  [key: string]: string;
}
