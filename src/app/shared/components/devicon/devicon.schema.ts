import { TechToolName } from "@data/schema/tech-tool-name.schema";
export interface ThemeColor {
  dark: string;
  light: string;
}
interface GradientStop extends ThemeColor {
  stopColor: string;
  offset?: number;
  stopOpacity?: number;
}
interface LinearGradient {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  gradientUnits: string;
  stop: GradientStop[];
}
interface Circle extends ThemeColor {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}
interface Polygon extends ThemeColor {
  points: string;
  fill: string;
}
interface Path extends ThemeColor {
  data: string;
  fill: string;
}
interface DevIcon {
  viewBox: string;
  linearGradient?: LinearGradient[];
  path?: Path[];
  ellipse?: Ellipse[];
  circle?: Circle[];
  polygon?: Polygon[];
}
interface Ellipse extends ThemeColor {
  fill: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}
export type DevIconSchema = {
  [key in TechToolName]: DevIcon;
}
