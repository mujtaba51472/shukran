import { details } from "./details";

export const footerTitles = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our offerings", href: "/offerings" },
      { name: "Newsroom", href: "/newsroom" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Top Clients",
    links: [
      { name: "New York" },
      { name: "London" },
      { name: "Berlin" },
      { name: "Los Angeles" },
    ],
  },
  {
    title: "Exlore",
    links: [
      { name: "Intercity rides", href: "/intercity/rides" },
      { name: "Social Outings", href: "/social/outings" },
      { name: "Medical Appointments", href: "/medical/appointments" },
      { name: "Private bus service", href: "/private_bus_service" },
      { name: "Ground transportation", href: "ground_transportation" },
      { name: "Ground transportation", href: "ground_transportation" },
      { name: "Airport transfers", href: "/airport_transfers" },
    ],
  },
  {
    title: "Classes",
    links: [
      { name: "Business" },
      { name: "First" },
      { name: "XL" },
      { name: "Assistant" },
    ],
  },
];

export const  social_data =[
    {
        href: details.facebook,
        icon: details.facebookIcon, 
        },
        {
        href: details.twitter,
        icon: details.twitterIcon,
        },
        {
        href: details.instagram,
        icon: details.instagramIcon, 
        },
        {
        href: details.linkedIn,
        icon: details.linkedInIcon, 
    }
]
