export const siteConfig = {
  name: "Abraham Nunez-Chavez",
  title: "Insurance Agent/Broker",
  license: "4357305",
  agency: "Farmers Insurance – Office of Abel Duran",
  phone: "951-653-8888",
  directPhone: "714-388-9533",
  phoneHref: "tel:+17143889533",
  email: "Abraham.aduran@farmersagency.com",
  address: "13800 Heacock St., Suite C120, Moreno Valley, CA 92553",
  secondLocation: "Yorba Linda, California",
  hours: "Monday–Friday, 9:00 AM–5:00 PM",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://abraham-insurance-website-nextjs.vercel.app",
};

export const navigation = [
  ["Personal", "/personal-insurance"],
  ["Business", "/business-insurance"],
  ["Carriers", "/carriers"],
  ["Wildfire", "/wildfire-insurance"],
  ["Referral Partners", "/referral-partners"],
  ["Education", "/education"],
  ["About", "/about"],
] as const;
