export const siteConfig = {
  name: "Abraham Nunez-Chavez",
  title: "Insurance Agent/Broker",
  license: "4357305",
  agency: "Farmers Insurance – Office of Abel Duran",
  phone: "951-653-8888",
  directPhone: "714-388-9533",
  phoneHref: "tel:+17143889533",
  email: "Abraham.aduran@farmersagency.com",
  linkedin: "https://www.linkedin.com/in/abraham-nunez-chavez-5b1212187/",
  address: "13800 Heacock St., Suite C120, Moreno Valley, CA 92553",
  secondLocation: "Yorba Linda, California",
  morenoValleyOffice: "13800 Heacock St., Suite C120, Moreno Valley, CA 92553",
  yorbaLindaOffice: "23621 La Palma Ave., Suite A, Yorba Linda, CA 92887",
  hours: "Monday–Friday, 9:00 AM–5:00 PM",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.abrahamvalleyinsurance.com",
};

export const navigation = [
  ["Personal", "/personal-insurance"],
  ["Business", "/business-insurance"],
  ["Carriers", "/carriers"],
  ["Wildfire", "/wildfire-insurance"],
  ["Education", "/education"],
  ["Our Agency", "/about"],
  ["About Abel", "/abel-duran"],
  ["Moreno Valley", "/moreno-valley-office"],
  ["Yorba Linda", "/yorba-linda-office"],
  ["Customer Service", "/customer-service"],
  ["Referral Partners", "/referral-partners"],
] as const;

export const agents = {
  abraham: { name: "Abraham Nunez-Chavez", email: "Abraham.aduran@farmersagency.com", phone: "714-388-9533", phoneHref: "tel:+17143889533", textHref: "sms:+17143889533", office: "Moreno Valley" },
  abel: { name: "Abel Duran", email: "Aduran@farmersagent.com", phone: "951-653-8888", phoneHref: "tel:+19516538888", textHref: "sms:+19516538888", office: "Moreno Valley" },
  devan: { name: "Devan Wright", email: "devan.aduran@farmersagency.com", phone: "714-701-6412", phoneHref: "tel:+17147016412", textHref: "sms:+17147016412", office: "Yorba Linda" },
  rosalia: { name: "Rosalia Elizabeth Gomez", email: "Abraham.aduran@farmersagency.com", phone: "951-653-8888", phoneHref: "tel:+19516538888", textHref: "sms:+19516538888", office: "Moreno Valley" },
} as const;
