import type { ComponentType, ReactNode } from "react";

export type RouteType = {
  path: string;
  view: ComponentType;
  layout?: ComponentType<{ children: ReactNode }>;
};

export type Parameter = {
  [key: string]: string;
}