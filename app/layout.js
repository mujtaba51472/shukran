import "./globals.css";
import Layout from "./components/common/layout/Layout";
import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

export const metadata = {
  ...NEXT_SEO_DEFAULT,
  title: {
    default: "Ride Mobility",
    template: "%s | Ride Mobility",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body >

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
