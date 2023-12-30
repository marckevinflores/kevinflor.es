export interface ProjectSchema {
  id:       number;
  body:     string;
  date:     string;
  desc:     string;
  image:    string;
  slug:     string;
  title:    string;
  platform: Platform[];
  tool:     string[];
}

export interface Platform {
  name: string;
}
