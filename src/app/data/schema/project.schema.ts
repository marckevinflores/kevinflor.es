import { TechToolName } from "./tech-tool-name.schema";

export interface ProjectSchema {
  id:       number;
  body:     string;
  date:     string;
  desc:     string;
  image:    string;
  slug:     string;
  title:    string;
  platform: Platform[];
  tool:     TechToolName[];
}

export interface Platform {
  name: string;
}
