import { ThemeProvider } from "./theme-provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
