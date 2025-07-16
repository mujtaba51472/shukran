import { details } from "./app/components/config/details";

const { name, seotitle, seodescription, website, logo_url } = details;

export const NEXT_SEO_DEFAULT = {
  title: seotitle,
  description: seodescription,
  openGraph: {
    type: "website",
    locale: "en-GB",
    url: website,
    siteName: name,
    title: seotitle,
    description: seodescription,
    images: [
      {
        url: logo_url,
        width: 1200,
        height: 630,
        alt: name,
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
