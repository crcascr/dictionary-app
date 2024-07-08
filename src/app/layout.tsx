import { Providers } from "@/providers/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Dictionary App",
  description: "A simple dictionary app build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
