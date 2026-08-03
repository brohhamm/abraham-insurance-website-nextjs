export type ServiceLocation = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  intro: string;
  localNeeds: string[];
  officeNote: string;
};

export const serviceLocations: ServiceLocation[] = [
 {slug:"moreno-valley",name:"Moreno Valley",eyebrow:"Moreno Valley insurance agent and broker",summary:"Personal, commercial, wildfire, life, and escrow insurance support from the Heacock Street office.",intro:"Abraham serves Moreno Valley households, property owners, businesses, Realtors, and lenders from the Farmers Insurance – Office of Abel Duran at 13800 Heacock Street, Suite C120. Clients can meet in the office or work by phone, text, and email.",localNeeds:["Home and auto coverage reviews for growing households","Commercial insurance for contractors, restaurants, salons, offices, and local service businesses","Wildfire, FAIR Plan, DIC, and earthquake guidance","Fast evidence and invoice support for escrow"],officeNote:"Primary office: 13800 Heacock St., Suite C120, Moreno Valley, CA 92553."},
 {slug:"yorba-linda",name:"Yorba Linda",eyebrow:"Yorba Linda insurance agent and broker",summary:"Personal, business, property, life, and wildfire insurance support for Yorba Linda and North Orange County.",intro:"Abraham serves Yorba Linda and surrounding Orange County communities with coverage reviews focused on home values, reconstruction, umbrella protection, business risks, wildfire exposure, and earthquake planning.",localNeeds:["High-value home reconstruction and liability reviews","Auto, umbrella, and youthful-driver protection","Wildfire mitigation, specialty property, and earthquake options","Coverage and documentation support for buyers, Realtors, and lenders"],officeNote:"Additional Yorba Linda meeting location; appointments should be confirmed directly with Abraham."},
 {slug:"riverside-county",name:"Riverside County",eyebrow:"Riverside County insurance broker",summary:"Multi-carrier personal and commercial insurance support throughout Riverside County.",intro:"Riverside County combines fast-growing communities, wildfire-exposed properties, long commutes, contractors, rental housing, and diverse small businesses. Coverage should reflect the actual property, vehicles, operations, contracts, and catastrophe exposure.",localNeeds:["Homeowners, landlord, and difficult-to-insure property placement","Commercial auto, general liability, workers’ compensation, and BOP coverage","FAIR Plan and DIC coordination where traditional property coverage is unavailable","Escrow support before insurance becomes a closing issue"],officeNote:"Service is available from the Moreno Valley office and remotely throughout Riverside County."},
 {slug:"orange-county",name:"Orange County",eyebrow:"Orange County insurance broker",summary:"Personal, commercial, life, and real-estate insurance support throughout Orange County.",intro:"Orange County clients often need careful reconstruction estimates, higher liability limits, umbrella coordination, rental-property protection, professional liability, and responsive escrow documentation.",localNeeds:["Home, condo, landlord, auto, umbrella, and life coverage","Commercial insurance for professional services, contractors, property owners, and small businesses","Earthquake and wildfire readiness reviews","Responsive buyer, lender, Realtor, and property-manager support"],officeNote:"Service is available through the Yorba Linda meeting location, Moreno Valley office, and remote appointments."}
];

export function getServiceLocation(slug: string) {
 return serviceLocations.find((location) => location.slug === slug);
}
