"use client";

import { ThemeProvider as NextThemesProvidor } from "next-themes";
import { ThemeProviderProps } from 'next-themes';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvidor {...props}>{children}</NextThemesProvidor>
};
