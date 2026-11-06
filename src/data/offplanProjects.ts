export interface OffPlanUnitType {
  type: string;
  size: string;
  price: string;
}

export interface OffPlanPaymentMilestone {
  milestone: string;
  percentage: string;
}

export interface OffPlanProject {
  id: number;
  slug: string;
  name: string;
  developer: string;
  developerLogo: string | null;
  location: string;
  fullAddress: string;
  city: string;
  type: 'Apartment' | 'Villa' | 'Townhouse' | 'Penthouse';
  startingPrice: number;
  priceFormatted: string;
  handover: string;
  handoverYear: string | number;
  paymentPlan: string;
  paymentPlanBreakdown: OffPlanPaymentMilestone[];
  description: string;
  heroImage: string;
  gallery: string[];
  unitTypes: OffPlanUnitType[];
  amenities: string[];
  highlights: string[];
  latitude?: number | null;
  longitude?: number | null;
}

export const OFFPLAN_PROJECTS: OffPlanProject[] = [
  {
    "id": 101,
    "slug": "almaan-1016a7c12c5f420b",
    "name": "Almaan 101",
    "developer": "MN Vision Real Estate Development",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1345/thumbnail_logo_alnair_7c5324d72f95.png",
    "location": "Hyati Avenue",
    "fullAddress": "Hyati Avenue, JVC District 14, Jumeirah Village Circle (JVC), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 799000,
    "priceFormatted": "AED 799,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "30/70 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "70%"
      }
    ],
    "description": "Almaan 101 is a residential development by MN Vision Real Estate Development in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-afeeb1c57c58c004.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-afeeb1c57c58c004.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-e059d57f2feb7088.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-82fc97f3b757b37a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-aa3d5ff8936f194d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/almaan-101/images/almaan-101-image-ed6c4d1438bd4fe7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5708/Screenshot_2026-09-17_113220.png6aab8983edbc0.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5708/Screenshot_2026-09-17_113205.png6aab8986241ef.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5708/Screenshot_2026-09-17_113141.png6aab89870bc4b.png"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom Residence",
        "size": "750 - 920 sq ft",
        "price": "AED 799,000"
      },
      {
        "type": "2 Bedroom Residence",
        "size": "1,200 - 1,450 sq ft",
        "price": "AED 1,238,450"
      },
      {
        "type": "3 Bedroom Residence / Penthouse",
        "size": "1,950 - 2,800 sq ft",
        "price": "AED 1,837,700"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "30/70 Payment Plan"
    ],
    "latitude": 25.053680544956,
    "longitude": 55.210181
  },
  {
    "id": 102,
    "slug": "palladium-development-amazonia-residence-apartment6a8202880ea54",
    "name": "Amazonia Residence",
    "developer": "Palladium Development",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1326/thumbnail_logo_alnair_dd76b4736934.png",
    "location": "Al Jaddaf",
    "fullAddress": "Al Jaddaf, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 940000,
    "priceFormatted": "AED 940,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "50%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "Palladium Development - Amazonia Residence - Apartment is a residential development by Palladium Development in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-7874b31b39f0ea29.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-7874b31b39f0ea29.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-7e8729029d43b356.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-a03380b602870b91.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-a76080f755e8b23d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-e373b439a366a44c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/amazonia-residence/images/amazonia-residence-image-c3f9ad250a906bc2.jpg"
    ],
    "unitTypes": [
      {
        "type": "Studio In Amazonia Residence",
        "size": "376.74 - 464.31 sq ft",
        "price": "AED 980,000"
      },
      {
        "type": "1 Bedroom In Amazonia Residence",
        "size": "559.73 - 1086.71 sq ft",
        "price": "AED 940,000"
      },
      {
        "type": "2 Bedrooms In Amazonia Residence",
        "size": "1062.67 - 1342.95 sq ft",
        "price": "AED 950,000"
      },
      {
        "type": "3 Bedrooms In Amazonia Residence",
        "size": "2152.78 sq ft",
        "price": "AED 4,000,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": 25.225130006947,
    "longitude": 55.338321786601
  },
  {
    "id": 103,
    "slug": "avenue-residence-66a7c103da83d1",
    "name": "Avenue Residence 6",
    "developer": "Al Jaziri Brothers",
    "developerLogo": null,
    "location": "Avenue Residence",
    "fullAddress": "Avenue Residence, Al Raffa, Bur Dubai, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1170000,
    "priceFormatted": "AED 1,170,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "40/60 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "15%"
      },
      {
        "milestone": "During Construction",
        "percentage": "25%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "60%"
      }
    ],
    "description": "The epitome of luxury living starts with the launch of Avenue Residence 6 at Al Furjan, a residential development with 1, 2 & 3-bedroom apartments by Nabni Developments. This luxurious residential masterpiece, nestled steps away from the Discovery Gardens Metro Station, presents an unparalleled living experience. With a limited collection of 96 unique residences, it caters to individuals with a discerning eye for the extraordinary. This 12-storey luxury building stands proudly at the heart of Al Furjan, featuring a contemporary classic design that seamlessly merges with urban sophistication. The project ensures a secure and luxurious lifestyle with G + 1 podium parking, 10 residential floors, and 24/7 security. Residents can indulge in daily experiences marked by bespoke hospitality, fine dining, and unique residences. The interiors are a testament to refined living, with Italian manufactured brands, floor-to-ceiling 3.2-meter and double-height reception areas, and built-in Siemens kitchen appliances. The inclusion of branded Tooy chandeliers, golden finish accessories, and smart home automation further elevate the sense of sophistication.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-2cb02e6faed46a88.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-77e6fa43a6d876cf.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-2cb02e6faed46a88.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-408da7168c9c3a7b.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-963f77736454580c.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-18f1e68a2a9890db.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-768b09d950e85fe0.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-b370b6273f2b490e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-7696c8227d55c83a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-1b1a1ce1b3329b30.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avenue-residence-6/images/avenue-residence-6-image-8d444f6b620159cb.jpg"
    ],
    "unitTypes": [
      {
        "type": "1BR",
        "size": "818.38 sq ft",
        "price": "AED 1,125,272"
      },
      {
        "type": "2BR",
        "size": "1239 sq ft",
        "price": "AED 1,651,849"
      },
      {
        "type": "3BR",
        "size": "1978 sq ft",
        "price": "AED 2,577,274"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "40/60 Payment Plan"
    ],
    "latitude": 25.033913,
    "longitude": 55.146608
  },
  {
    "id": 104,
    "slug": "bling-avenue-16a7c12a2eac7b",
    "name": "Bling Avenue 1",
    "developer": "Bling Development",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1348/thumbnail_logo_alnair_68a8225e4d95.png",
    "location": "Dubai South",
    "fullAddress": "Dubai South, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1151628,
    "priceFormatted": "AED 1,151,628",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "50%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "Welcome to Bling Avenue 1, a premier residential project located in the heart of Dubai South. This exclusive development offers 40 thoughtfully designed residential units, including 1 bedroom and 2 bedroom apartments. With world class amenities and prime location, it is designed for those seeking comfort and convenience.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-dc0c37458639bfc1.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-29378a74ee0b4995.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-dc0c37458639bfc1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-ac634114d1052366.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-f66dd385580dd924.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-0b8ddef65c3cd700.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-2fb5d194507a31ae.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-bcdef67474d26132.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-e2a08cc098ffdcaf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-b14790c29647cea7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bling-avenue-1/images/bling-avenue-1-image-914143db1cf1559b.jpg"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom In Bling Avenue 1",
        "size": "831.5 - 854.47 sq ft",
        "price": "AED 1,080,994"
      },
      {
        "type": "2 Bedrooms In Bling Avenue 1",
        "size": "1143.82 - 1306.51 sq ft",
        "price": "AED 1,544,151"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": 24.950629343375,
    "longitude": 55.225923210382
  },
  {
    "id": 105,
    "slug": "estrella-by-nexus6a7c12cbd682c",
    "name": "Estrella By Nexus",
    "developer": "Nexus",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1720/thumbnail_logo_alnair_d3cab53620e4.png",
    "location": "Majan",
    "fullAddress": "Majan, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1356750,
    "priceFormatted": "AED 1,356,750",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "30/70 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "70%"
      }
    ],
    "description": "Estrella By Nexus is a residential development by Nexus in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-4d3e278f53b787f1.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-76f0a37025570040.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-4d3e278f53b787f1.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-a3f79e1a812627c2.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-c1182049022473f7.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-6109d1d5b0adf832.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-8ce15e35df00049c.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-6761e0fea8456205.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-592cbd5a32f12f11.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-09a3467ddfa0fdff.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/estrella-by-nexus/images/estrella-by-nexus-image-149bae98cfd78d9e.png"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom In Estrella",
        "size": "775 - 1125 sq ft",
        "price": "AED 1,135,134"
      },
      {
        "type": "2 Bedrooms In Estrella",
        "size": "760 - 2094 sq ft",
        "price": "AED 1,642,656"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "30/70 Payment Plan"
    ],
    "latitude": 25.09465300125,
    "longitude": 55.316985202665
  },
  {
    "id": 106,
    "slug": "ever-glory-developments-firoza-apartment6a7c14648cdca",
    "name": "Firoza",
    "developer": "Ever Glory Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/322/thumbnail_logo_322.png",
    "location": "Dubai Islands",
    "fullAddress": "Dubai Islands, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1724526,
    "priceFormatted": "AED 1,724,526",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "50/50 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "30%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "50%"
      }
    ],
    "description": "Ever Glory Developments' ground-breaking residential development Firoza is set to revolutionize luxury living on the Dubai Islands. Firoza is positioned to provide an unmatched lifestyle by fusing cutting-edge technology, luxurious finishing, and contemporary architecture. This outstanding property, which prioritizes comfort, style, and convenience, offers stunning views, first-rate amenities, and a distinguished address that guarantees its position as one of Dubai's most sought-after apartments.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ever-glory-developments-firoza-apartment/images/ever-glory-developments-firoza-apartment-image-3cfe3b0c1694123b.jpeg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ever-glory-developments-firoza-apartment/images/ever-glory-developments-firoza-apartment-image-f730dfb138dd048b.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/firoza/images/firoza-image-ae776f7f6a505022.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ever-glory-developments-firoza-apartment/images/ever-glory-developments-firoza-apartment-image-dbf3b08f045f6fbe.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ever-glory-developments-firoza-apartment/images/ever-glory-developments-firoza-apartment-image-3cfe3b0c1694123b.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/firoza/images/firoza-image-5928c6ffe1984d33.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/firoza/images/firoza-image-82e84575d83cfd6d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/firoza/images/firoza-image-3746316b659a7ae2.jpg"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom In Firoza",
        "size": "822 - 1456 sq ft",
        "price": "AED 1,708,938"
      },
      {
        "type": "2 Bedrooms In Firoza",
        "size": "1186 - 2927 sq ft",
        "price": "AED 2,328,711"
      },
      {
        "type": "3 Bedrooms In Firoza",
        "size": "2040 - 3549 sq ft",
        "price": "AED 3,692,367"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "50/50 Payment Plan"
    ],
    "latitude": 25.3013125,
    "longitude": 55.2993125
  },
  {
    "id": 107,
    "slug": "mackerel-tower6a7c12e29f8fe",
    "name": "Mackerel Tower",
    "developer": "Tarrad Development",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1337/thumbnail_logo_alnair_d96fdff0e6a1.png",
    "location": "Dubai Islands",
    "fullAddress": "Dubai Islands, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2823031,
    "priceFormatted": "AED 2,823,031",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "15%"
      },
      {
        "milestone": "During Construction",
        "percentage": "45%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "Mackerel Tower by Saeed Tarrad Development introduces fully-furnished 1 and 2-bedroom apartments, and 4-bedroom penthouses, offering refined coastal living. This residential building by Saeed Tarrad Real Estate Development ensures luxurious interiors, breathtaking Gulf views, and thoughtfully designed layouts. Located in the heart of Dubai Islands, Mackerel Tower boasts exceptional amenities, including swimming pools, a rooftop garden, and a yoga lounge. Experience a lifestyle where elegance meets tranquility.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-9b88f39df06444e4.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-94d5b259d6b792dc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-9b88f39df06444e4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-9e3810192b8a7e7a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-4a8508a888e0524c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-57b48e4a090a3473.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-88617c1969abb72e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-af5e40c7cc5a6ef5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-24a768720600ea6f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/mackerel-tower/images/mackerel-tower-image-78a338f8d36d2d1e.jpg"
    ],
    "unitTypes": [
      {
        "type": "1BR",
        "size": "1002 sq ft",
        "price": "AED 2,262,060"
      },
      {
        "type": "2 Bedrooms In Mackerel Tower",
        "size": "1206.1 - 1591.44 sq ft",
        "price": "AED 2,279,000"
      },
      {
        "type": "2BR",
        "size": "1202 sq ft",
        "price": "AED 2,609,771"
      },
      {
        "type": "4 Bedrooms In Mackerel Tower",
        "size": "3764.83 sq ft",
        "price": "AED 8,945,236"
      },
      {
        "type": "4BR Ph",
        "size": "3765 sq ft",
        "price": "AED 8,945,236"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": 25.296752538768,
    "longitude": 55.31507179141
  },
  {
    "id": 108,
    "slug": "octa-properties-moonstone-interiors-by-missoni-apartment6a820d2eb677a",
    "name": "Moonstone Interiors by Missoni",
    "developer": "OCTA Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1394/thumbnail_logo_alnair_744a2053a61f.png",
    "location": "Al Marjan Island",
    "fullAddress": "Al Marjan Island, Ras Al Khaimah, UAE",
    "city": "Ras Al Khaimah",
    "type": "Apartment",
    "startingPrice": 3216777,
    "priceFormatted": "AED 3,216,777",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "30/70 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "10%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "70%"
      }
    ],
    "description": "OCTA Properties - Moonstone Interiors by Missoni - Apartment is a residential development by OCTA Properties in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-fa154d494200d610.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-fa154d494200d610.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-73d78630189a28d2.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-7f1d00f4050d932c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-91fbb92e44ac7863.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/moonstone-interiors-by-missoni/images/moonstone-interiors-by-missoni-image-6229707cc866b1ea.png"
    ],
    "unitTypes": [
      {
        "type": "Studio",
        "size": "507 sq ft",
        "price": "AED 1,288,888"
      },
      {
        "type": "1 Bedroom In Moonstone Interiors By Missoni",
        "size": "967.57 - 1927.6 sq ft",
        "price": "AED 2,434,777"
      },
      {
        "type": "1BR",
        "size": "840 sq ft",
        "price": "AED 1,988,888"
      },
      {
        "type": "2BR",
        "size": "1287 sq ft",
        "price": "AED 2,725,777"
      },
      {
        "type": "3 Bedrooms In Moonstone Interiors By Missoni",
        "size": "2018.56 sq ft",
        "price": "AED 4,997,777"
      },
      {
        "type": "3BR",
        "size": "1779 sq ft",
        "price": "AED 4,103,777"
      },
      {
        "type": "4BR",
        "size": "Contact for sizes",
        "price": "Price on request"
      },
      {
        "type": "5BR",
        "size": "Contact for sizes",
        "price": "Price on request"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "30/70 Payment Plan"
    ],
    "latitude": 25.676760194395,
    "longitude": 55.738379365601
  },
  {
    "id": 109,
    "slug": "seascape6aab74411d852",
    "name": "Seascape",
    "developer": "Emaar",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/hetzner_new_crm/upload/developers/thumbnail_Emaar-Properties-Logo-1.png6ad9f962c5808.png",
    "location": "Mina Rashid",
    "fullAddress": "Mina Rashid, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1725000,
    "priceFormatted": "AED 1,725,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "80/20 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "70%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "20%"
      }
    ],
    "description": "Immerse yourself in Seascape's unrivalled elegance, a brand-new project being developed by the renowned Emaar Properties. Nestled in the heart of Dubai , Seascape provides a distinctive fusion of seaside luxury and a world-class urban lifestyle. Seascape Prime Location Seascape boasts an enviable location with stunning views of the Marina and the Arabian Gulf's blue horizon. Just minutes from Dubai's numerous attractions, residents can enjoy easy access to international amenities, pristine sandy beaches, and modern architecture. Its proximity to the quay and promenade further enhances the appeal of this exquisite project. Unit Types Emaar Seascape offers a splendid selection of 1, 2, and 3-bedroom homes that cater to various needs and preferences. With unit sizes ranging from 782 sqft for 1-bedroom apartments to 2982 sqft for 3-bedroom townhouses , residents can find their perfect match. Some of the unit types available include: 1 Bedroom Apartment: 782 - 954 sqft 2 Bedroom Apartment: 1307 - 1469 sqft 3 Bedroom Apartment: 1738 - 1759 sqft 3 Bedroom Townhouse: 2641 - 2982 sqft Amenities Seascape is designed to provide residents with a serene environment that goes hand-in-hand with state-of-the-art amenities. The development features: The canal Pool Community Park Gym Swimming Pool Boardwalk Promenade Recreational Courts Retail &amp; Dining Options 300 Covered Parking Spaces The Seascape project's magnificent swimmable canal pool, which is the longest in Dubai, is one of its most distinctive characteristics. Residents can relax in the peaceful surroundings, take a stroll down the promenade, or have a refreshing swim. Delivery Date Delivery Date: Q4 2026. As a project by the esteemed Emaar Properties, residents can expect exceptional quality and timely delivery. Discover the allure of Seascape, a stylish residential hideaway that provides both a tranquil escape and limitless activities. With its amazing location, various house options, and exceptional amenities, Seascape epitomizes coastal elegant living in Dubai.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-78a4e28fc555b514.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-78a4e28fc555b514.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-b30c5464560d29b9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-fba21fa4a3f5af7b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-4994d417bb1eccc1.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-46055888f5744406.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-1f356e1c8704059f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-21ac35e29648c437.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/seascape/images/seascape-image-24b9162bcc913036.mp4"
    ],
    "unitTypes": [
      {
        "type": "B1-Type 1A, Level 01, Unit 02",
        "size": "1393 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1A, Level 02-12, Unit 02",
        "size": "1390 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1A, Level 02-12, Unit 07",
        "size": "1389 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1A, Level 13-18, Unit 05",
        "size": "1756 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1A, Level GF, Unit 03",
        "size": "2982 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1B, Level 13-18, Unit 02",
        "size": "1756 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1B, Level 13-18, Unit 06",
        "size": "1759 sq ft",
        "price": "Price on request"
      },
      {
        "type": "B1-Type 1C, Level 01, Unit 03",
        "size": "1389 sq ft",
        "price": "Price on request"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "80/20 Payment Plan"
    ],
    "latitude": 25.25747554,
    "longitude": 55.27744959
  },
  {
    "id": 110,
    "slug": "v1v1d-residence6a821b067f21c",
    "name": "V1V1D Residence",
    "developer": "Object One",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1706/thumbnail_logo_alnair_94225fdb5367.png",
    "location": "Jumeirah Village Triangle (JVT)",
    "fullAddress": "Jumeirah Village Triangle (JVT), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1616451,
    "priceFormatted": "AED 1,616,451",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "160/-60 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "100%"
      },
      {
        "milestone": "During Construction",
        "percentage": "60%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "-60%"
      }
    ],
    "description": "V1V1D Residence is a residential development by Object One in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/v1v1d-residence/images/v1v1d-residence-image-f6370e53f00a758b.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/v1v1d-residence/images/v1v1d-residence-image-f6370e53f00a758b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/v1v1d-residence/images/v1v1d-residence-image-bec16aea41c74b82.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6699/V1V1D_1.png6ab0c93568e79.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6699/V1V1D_2.png6ab0c93703550.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6699/V1V1D_3.png6ab0c937d66d8.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6699/OIP_1_.jpeg6ab0ca3fb3f09.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6699/OIP_2_.jpeg6ab0ca40f02e4.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6699/OIP.jpeg6ab0ca41725a7.jpeg"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom Residence",
        "size": "750 - 920 sq ft",
        "price": "AED 1,616,451"
      },
      {
        "type": "2 Bedroom Residence",
        "size": "1,200 - 1,450 sq ft",
        "price": "AED 2,505,499.05"
      },
      {
        "type": "3 Bedroom Residence / Penthouse",
        "size": "1,950 - 2,800 sq ft",
        "price": "AED 3,717,837.3"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "160/-60 Payment Plan"
    ],
    "latitude": 25.03574499,
    "longitude": 55.17605826
  },
  {
    "id": 111,
    "slug": "avant-garde6a7c11c9b495f",
    "name": "Avant Garde",
    "developer": "Skyline Builders Real Estate LLC",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1655/thumbnail_logo_alnair_1a908ecb6c09.png",
    "location": "JVC District 17",
    "fullAddress": "JVC District 17, Jumeirah Village Circle (JVC), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 650000,
    "priceFormatted": "AED 650,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "50/50 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "40%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "50%"
      }
    ],
    "description": "Avant Garde Residences is Skyline Builders' first Dubai project — a 24-storey tower in JVC, District 17. It offers studios, 1 & 2-bedroom apartments up to 20% larger than the JVC average, with floor-to-ceiling windows, balconies or terraces and European interiors. Fully fitted kitchens, 22+ amenities including a 20m infinity pool, silent rooftop cinema and gardens. Handover Q4 2026 with a flexible 50/50, 1% monthly payment plan.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-c4a75c17066ec7a7.webp",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-c4a75c17066ec7a7.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-5a3c31966ecd4a90.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-5e691515f6aaffd9.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-66dad9cd76692be5.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5424/OIP.a-OewZoVum57jm9172p6LAHaE7.jpeg6a804afdb733d.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-b520304b62d4871d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-d9c82c6027e7d586.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5424/OIP.j3TIPAB1X_v8cS5S5O4s-AHaE8.jpeg6a804afee1701.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-879d7df3d5cff2fd.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/avant-garde/images/avant-garde-image-9bbf10361f04d746.jpeg"
    ],
    "unitTypes": [
      {
        "type": "Studio",
        "size": "469 sq ft",
        "price": "AED 650,000"
      },
      {
        "type": "1 Bedroom In Avant Garde Residences 2",
        "size": "726.89 - 874.57 sq ft",
        "price": "AED 1,050,457"
      },
      {
        "type": "1.5 Bedrooms In Avant Garde Residences 2",
        "size": "817 - 817.19 sq ft",
        "price": "AED 1,354,651"
      },
      {
        "type": "1BR Apartment",
        "size": "1221 sq ft",
        "price": "AED 950,000"
      },
      {
        "type": "2 Bedrooms In Avant Garde Residences 2",
        "size": "1295.87 - 1462.07 sq ft",
        "price": "AED 1,938,451"
      },
      {
        "type": "2BR Apartment",
        "size": "1353 sq ft",
        "price": "AED 1,500,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "50/50 Payment Plan"
    ],
    "latitude": 25.05729,
    "longitude": 55.21559
  },
  {
    "id": 112,
    "slug": "cape-hayat6a7c11d016130",
    "name": "Cape Hayat",
    "developer": "RAK Properties",
    "developerLogo": null,
    "location": "Cape Hayat",
    "fullAddress": "Cape Hayat, Hayat Island, Mina Al Arab, Ras Al Khaimah, UAE",
    "city": "Ras Al Khaimah",
    "type": "Apartment",
    "startingPrice": 700000,
    "priceFormatted": "AED 700,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "10/30/50 Post-Handover",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "30%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "10%"
      },
      {
        "milestone": "Post-Handover (24 Months)",
        "percentage": "50%"
      }
    ],
    "description": "Cape Hayat is a beachfront collection by RAK Properties on Hayat Island, Mina Al Arab. Four towers — two of 20 storeys and two of 9 — hold 668 studios, 1 & 2-bedroom apartments and 4-bedroom penthouses, sized 466 to 6,889 sq ft. Every home opens to sea, canal or mangrove views through full-height windows. Residents enjoy a private beach, pool, gym and ground-floor retail, all within a protected natural reserve framed by InterContinental and Anantara resorts.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-27ae7ad98e23423a.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-27ae7ad98e23423a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-0563146e88838bad.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-70048db06caf2097.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-f61ee45f0edaae06.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-3d11f29b9648d427.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-0174df16b8c2afcc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-ebcd0eb4888e88f3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-3eb06dd6d80f46ea.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-ee1639e5789189a0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cape-hayat/images/cape-hayat-image-15468163c472c7d3.jpg"
    ],
    "unitTypes": [
      {
        "type": "Studio",
        "size": "465.97 sq ft",
        "price": "AED 700,000"
      },
      {
        "type": "Studio Type 1",
        "size": "465.97 sq ft",
        "price": "Price on request"
      },
      {
        "type": "1 Bedroom Type 2",
        "size": "963.91 sq ft",
        "price": "AED 1,680,000"
      },
      {
        "type": "1 Bedroom Type 3 (Corner)",
        "size": "1175.53 sq ft",
        "price": "AED 1,680,000"
      },
      {
        "type": "1BR Type 1",
        "size": "1175.63 - 1671.97 sq ft",
        "price": "AED 1,722,000"
      },
      {
        "type": "1BR Type 3",
        "size": "1058.1 - 1715.12 sq ft",
        "price": "AED 1,820,000"
      },
      {
        "type": "1BR Type 4",
        "size": "1008.69 - 1170.47 sq ft",
        "price": "AED 1,779,000"
      },
      {
        "type": "1BR Type 5",
        "size": "977.8 sq ft",
        "price": "AED 1,718,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "10/30/50 Post-Handover"
    ],
    "latitude": 25.722695,
    "longitude": 55.84097
  },
  {
    "id": 113,
    "slug": "crystal-tower6a7c124da54e4",
    "name": "Crystal Tower",
    "developer": "VHS Real Estate Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1373/thumbnail_logo_alnair_9d1911f50b25.png",
    "location": "International City",
    "fullAddress": "International City, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 694999,
    "priceFormatted": "AED 694,999",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "50/50 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "40%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "50%"
      }
    ],
    "description": "Crystal Tower is a contemporary residential development by VHS Real Estate Developments in International City, Dubai. The project is designed around practical urban living, with a modern architectural identity, clean functional lines, and apartment layouts planned to make efficient use of space and natural light. Set within the established International City district, Crystal Tower offers residents convenient access to everyday services, major road connections, and the wider amenities of the surrounding community. Its studio, one-bedroom, two-bedroom, and larger apartment formats provide options for residents and investors seeking a connected Dubai address.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-9dcdc1301957d969.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-9dcdc1301957d969.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-7143c3a71e3f4444.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-08cf08c9213192e5.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-ad2d3e952e0a54ec.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-3de5d546d7b90002.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-8714154ab8ad509f.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-786b4c7d1b66caec.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/crystal-tower/images/crystal-tower-image-0d563dd667de1808.webp"
    ],
    "unitTypes": [
      {
        "type": "Studio In Crystal Tower By VHS",
        "size": "498.15 - 500.86 sq ft",
        "price": "AED 671,999"
      },
      {
        "type": "1 Bedroom In Crystal Tower By VHS",
        "size": "514.41 - 886.85 sq ft",
        "price": "AED 694,999"
      },
      {
        "type": "2 Bedrooms In Crystal Tower By VHS",
        "size": "1034.85 sq ft",
        "price": "AED 1,240,999"
      },
      {
        "type": "3 Bedrooms In Crystal Tower By VHS",
        "size": "2336.21 - 2829.74 sq ft",
        "price": "AED 2,499,999"
      },
      {
        "type": "In Crystal Tower By VHS",
        "size": "2336.22 - 2829.75 sq ft",
        "price": "AED 2,499,999"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "50/50 Payment Plan"
    ],
    "latitude": 25.176907009316,
    "longitude": 55.402460207568
  },
  {
    "id": 114,
    "slug": "aeternitas6a7c1312a7cbe",
    "name": "Franck Muller Aeternitas",
    "developer": "London Gate",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1258/thumbnail_logo_alnair_9b6532e61e61.png",
    "location": "Al Majara 4",
    "fullAddress": "Al Majara 4, Al Majara, Dubai Marina, Dubai, UAE",
    "city": "Dubai",
    "type": "Penthouse",
    "startingPrice": 3480000,
    "priceFormatted": "AED 3,480,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "40/60 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "30%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "60%"
      }
    ],
    "description": "Franck Muller Aeternitas by London Gate rises 450 m above Dubai Marina as the world's tallest branded residential clock tower. Its 106 floors hold 649 residences — from 1–3 bedroom apartments to Franck Muller Sky Villas, Mansions and a single penthouse. Interiors combine European marble, Swarovski lighting, noble-wood joinery and Bosch appliances. Views sweep the Marina, Palm Jumeirah, the Arabian Gulf and Emirates Golf Club. Handover Q2 2027; the tower is already 49% built.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-528609dec4656d8d.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-2f26e0a9e62774a4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-528609dec4656d8d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-ffcbd7493bb8b25e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-a21998f6094cb5fe.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-340363b1db6de27a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-e8f7ecd5c532806c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-26ef805a1fe76a43.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-4c0fdc4d608b2d1f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-252eb43d18033f87.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/franck-muller-aeternitas/images/franck-muller-aeternitas-image-601921178a9f2218.jpg"
    ],
    "unitTypes": [
      {
        "type": "0% Commission | Multiple Units Available | Prime Location",
        "size": "5435 sq ft",
        "price": "AED 16,100,000"
      },
      {
        "type": "0% Commission 💥 High Returns 💥 Last Remaining Unit",
        "size": "1661 sq ft",
        "price": "AED 3,140,000"
      },
      {
        "type": "1BR",
        "size": "871 sq ft",
        "price": "AED 1,700,000"
      },
      {
        "type": "1BR Apartment",
        "size": "871 sq ft",
        "price": "AED 1,890,000"
      },
      {
        "type": "2BR",
        "size": "1433 sq ft",
        "price": "AED 2,890,000"
      },
      {
        "type": "2BR Apartment",
        "size": "1065 sq ft",
        "price": "AED 2,190,000"
      },
      {
        "type": "3BR",
        "size": "2257 sq ft",
        "price": "AED 4,500,000"
      },
      {
        "type": "3BR Apartment",
        "size": "2257 sq ft",
        "price": "AED 5,700,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "40/60 Payment Plan"
    ],
    "latitude": 25.088364521843,
    "longitude": 55.149430632591
  },
  {
    "id": 115,
    "slug": "one-beverly6a7c12ecb5e2f",
    "name": "One Beverly",
    "developer": "HMB Homes",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1230/thumbnail_logo_alnair_ff6a22a779a0.png",
    "location": "Al Barsha",
    "fullAddress": "Al Barsha, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 750000,
    "priceFormatted": "AED 750,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "40%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "One Beverly at Arjan by HMB Homes Real Estate DevelopmentHMB Homes Real Estate and Developments is proud to present its latest masterpiece, set to redefine Dubai’s skyline. With a legacy of excellence and innovation, HMB Homes Real Estate and Developments brings you a unique opportunity to experience unparalleled living in the city’s heartDiscover the allure of One Beverly, strategically located in the prestigious Arjan area of Dubai. This prime location offers the perfect blend of convenience and luxury living.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-f70b8160cd773ffe.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-f70b8160cd773ffe.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-7f252449da669f38.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-e2af402e18b78c48.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-2857863f7baa5224.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-8f97eb0248e59b95.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-053f8d8cc898893c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-1f356e1c8704059f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-998e6c4acde22e84.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-c99e34e5119dc0bb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/one-beverly/images/one-beverly-image-db639ccf41855f95.jpg"
    ],
    "unitTypes": [
      {
        "type": "Studio In One Beverly",
        "size": "388.04 - 391.48 sq ft",
        "price": "AED 730,000"
      },
      {
        "type": "1 Bedroom In One Beverly",
        "size": "606.87 - 709.34 sq ft",
        "price": "AED 1,050,000"
      },
      {
        "type": "1BR",
        "size": "371 sq ft",
        "price": "AED 700,000"
      },
      {
        "type": "2 Bedrooms In One Beverly",
        "size": "1089.52 - 1150.45 sq ft",
        "price": "AED 1,386,534"
      },
      {
        "type": "2BR",
        "size": "607 sq ft",
        "price": "AED 1,000,000"
      },
      {
        "type": "3BR",
        "size": "1090 sq ft",
        "price": "AED 1,500,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": 25.06711849,
    "longitude": 55.23320675
  },
  {
    "id": 116,
    "slug": "omniyat-orla-dorchester-apartment6a7c13aab4b4e",
    "name": "Orla Dorchester",
    "developer": "Omniyat",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1266/thumbnail_logo_alnair_9cc448c881cf.png",
    "location": "Palm Jumeirah",
    "fullAddress": "Palm Jumeirah, Dubai, UAE",
    "city": "Dubai",
    "type": "Penthouse",
    "startingPrice": 57230250,
    "priceFormatted": "AED 57,230,250",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "50/50 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "5%"
      },
      {
        "milestone": "During Construction",
        "percentage": "45%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "50%"
      }
    ],
    "description": "ORLA, Dorchester Collection is an ultra-luxury residential development by OMNIYAT on the West Crescent of Palm Jumeirah, Dubai. Designed by Foster + Partners and managed by Dorchester Collection, the project offers a limited collection of two- to five-bedroom residences, sky palaces and signature homes with expansive terraces and sea views.\\n\\nThe development is planned around resident-only experiences, including a private beach club, dining venues, private cinema, relaxation spaces and landscaped outdoor areas. With 150 metres of Palm Jumeirah beach and uninterrupted views across the Arabian Gulf and Dubai skyline, ORLA is conceived as a private waterfront sanctuary.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-0d728347c6b28328.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-0d728347c6b28328.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-53203bcbd3b55295.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-6b108d21d5a0cc09.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-cd185c7a2f2bee04.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-0c0f38bfc2ed0bc6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-2efca7d7bd7932c4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-41a7aa402ea0fa5f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-7aa4cbc97539cdc6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-d81e153e9d4d59ac.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/orla-dorchester/images/orla-dorchester-image-2d21477731a087cf.jpg"
    ],
    "unitTypes": [
      {
        "type": "4 Bedroom Duplex Type 1",
        "size": "8837 sq ft",
        "price": "AED 61,815,600"
      },
      {
        "type": "4 Bedroom Duplex Type 3",
        "size": "7300 sq ft",
        "price": "AED 51,000,000"
      },
      {
        "type": "4 Bedroom Simplex Type 1",
        "size": "7782 sq ft",
        "price": "AED 56,035,350"
      },
      {
        "type": "4 Bedroom Simplex Type 2",
        "size": "7310.05 sq ft",
        "price": "AED 51,059,400"
      },
      {
        "type": "4 Bedroom Simplex Type 3",
        "size": "7352 sq ft",
        "price": "AED 57,230,250"
      },
      {
        "type": "1008",
        "size": "6531.6 sq ft",
        "price": "AED 52,223,850"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "50/50 Payment Plan"
    ],
    "latitude": 25.1230625,
    "longitude": 55.1129375
  },
  {
    "id": 117,
    "slug": "bliss-tower6aa278cd95e1a",
    "name": "Bliss Tower",
    "developer": "Private Developer",
    "developerLogo": null,
    "location": "Dubailand",
    "fullAddress": "Dubailand, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1168459,
    "priceFormatted": "AED 1,168,459",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "80/80 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "60%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "80%"
      }
    ],
    "description": "Bliss Tower by Private Developer is a landmark off-plan development in Dubailand, Dubai. Designed with contemporary architecture, panoramic views, and signature lifestyle amenities.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bliss-tower/images/bliss-tower-image-8ca085dabe18f822.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bliss-tower/images/bliss-tower-image-8ca085dabe18f822.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/bliss-tower/images/bliss-tower-image-4ceded3bd9ecce96.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/7380/Screenshot_2026-09-24_164353.png6ab50d0deb29f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/7380/Screenshot_2026-09-24_164306.png6ab50d10a37ae.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/7380/Screenshot_2026-09-24_164241.png6ab50d1205b07.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/7380/Screenshot_2026-09-24_164515.png6ab50d5a6015f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/7380/Screenshot_2026-09-24_164459.png6ab50d5c79e98.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/7380/Screenshot_2026-09-24_164444.png6ab50d5d48788.png"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom Residence",
        "size": "750 - 920 sq ft",
        "price": "AED 1,168,459"
      },
      {
        "type": "2 Bedroom Residence",
        "size": "1,200 - 1,450 sq ft",
        "price": "AED 1,811,111.45"
      },
      {
        "type": "3 Bedroom Residence / Penthouse",
        "size": "1,950 - 2,800 sq ft",
        "price": "AED 2,687,455.7"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "80/80 Payment Plan"
    ],
    "latitude": 25.097268267964,
    "longitude": 55.370743192791
  },
  {
    "id": 118,
    "slug": "wellington-ocean6ab4c3a4490f3",
    "name": "Wellington Ocean",
    "developer": "Wellington Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1355/thumbnail_logo_alnair_58acd2c56eeb.png",
    "location": "Dubai Islands",
    "fullAddress": "Dubai Islands, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1904870,
    "priceFormatted": "AED 1,904,870",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "10/40/45 Post-Handover",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "40%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "5%"
      },
      {
        "milestone": "Post-Handover (24 Months)",
        "percentage": "45%"
      }
    ],
    "description": "Wellington Ocean Walk by Wellington Developments is a new Dubai Islands launch offering fully furnished 1–3 bedroom residences in a prime waterfront community. Designed for effortless coastal living, the project pairs sea-view homes with a lifestyle-focused amenity mix. EOIs are now being collected, with a post-handover structure that allows you to pay just 1% per month.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-7c119f39889ed485.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-7c119f39889ed485.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-88603bc3d33be7f6.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-90dd99dee02929d9.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-d6fe58c96914122d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-1dfcb9bfab28d09d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-5d745e5e43633cd0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-264d57e4903f8b29.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-d92d0c5b4db77af9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-28f4b1b403ca282a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/wellington-ocean/images/wellington-ocean-image-6e96e2f0d1c7acbd.jpg"
    ],
    "unitTypes": [
      {
        "type": "1-BEDROOM",
        "size": "906 sq ft",
        "price": "AED 2,300,000"
      },
      {
        "type": "2 Bedrooms In Wellington Ocean",
        "size": "1639.02 - 2724.67 sq ft",
        "price": "AED 3,326,683"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "10/40/45 Post-Handover"
    ],
    "latitude": 25.290351501849,
    "longitude": 55.303234647472
  },
  {
    "id": 119,
    "slug": "karma-developers-olivia-residences-apartment6a7c13a4d27bc",
    "name": "Olivia Residences",
    "developer": "Karma Developers",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1306/thumbnail_logo_alnair_e8dc9af4202a.png",
    "location": "Green Community West",
    "fullAddress": "Green Community West, Green Community, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1410288,
    "priceFormatted": "AED 1,410,288",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "10/30/59 Post-Handover",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "30%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "1%"
      },
      {
        "milestone": "Post-Handover (24 Months)",
        "percentage": "59%"
      }
    ],
    "description": "In the heart of Dubai Investment Park, a thriving hub of growth and innovation, Olivia Residences by Karma Developers stands as a testament to the future of luxurious living in the dazzling city of Dubai. This exceptional residential project redefines the art of modern living, offering residents an unparalleled experience of comfort, style, and convenience.At Olivia Residences, every square foot is a canvas of thoughtful design and meticulous craftsmanship. The apartments are a harmonious blend of form and function, with contemporary architecture and elegant interiors. Each unit is a sanctuary of tranquility, flooded with natural light and adorned with high-end finishes. From spacious living areas to well-appointed bedrooms, every detail has been considered to ensure residents’ utmost comfort.Olivia Residences is more than just a place to live; it’s a lifestyle. The development boasts a wealth of luxury amenities, including a state-of-the-art fitness center, a serene swimming pool, landscaped gardens, and dedicated spaces for relaxation and recreation. Whether you seek an invigorating workout, a peaceful afternoon by the pool, or a leisurely stroll in lush surroundings, Olivia Residences offers it all within your reach.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-e731ef93732176d4.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-43f9a7110fb9a8f9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-a9b884a7713a3958.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-41db00197f535c9d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-895fb851472f46a5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-61138093723fe1ab.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/olivia-residences/images/olivia-residences-image-5e72f46f2c5235c2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/karma-developers-olivia-residences-apartment/images/karma-developers-olivia-residences-apartment-image-e731ef93732176d4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/olivia-residences/images/olivia-residences-image-e1a3d5098bb018db.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/olivia-residences/images/olivia-residences-image-5de000282b60ba11.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/olivia-residences/images/olivia-residences-image-7331a57feb346c09.jpg"
    ],
    "unitTypes": [
      {
        "type": "0% Commission 💥 Multiple Units Available 💥 Prime Location",
        "size": "1410 sq ft",
        "price": "AED 1,410,000"
      },
      {
        "type": "1",
        "size": "742.5 sq ft",
        "price": "AED 757,344"
      },
      {
        "type": "1 Bedroom In Olivia Residences",
        "size": "1410.29 - 1415.99 sq ft",
        "price": "AED 1,410,288"
      },
      {
        "type": "1BR",
        "size": "742.39 - 747.88 sq ft",
        "price": "AED 757,235"
      },
      {
        "type": "2",
        "size": "1209.01 sq ft",
        "price": "AED 1,233,182"
      },
      {
        "type": "2BR",
        "size": "1101.37 - 1226.67 sq ft",
        "price": "AED 1,112,377"
      },
      {
        "type": "3 Bedrooms In Olivia Residences",
        "size": "15300.36 sq ft",
        "price": "AED 86,967,000"
      },
      {
        "type": "3BR",
        "size": "1472.41 sq ft",
        "price": "AED 1,487,119"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "10/30/59 Post-Handover"
    ],
    "latitude": 24.9979875,
    "longitude": 55.1694531
  },
  {
    "id": 120,
    "slug": "cove-edition-iii6a7c12d1bda62",
    "name": "Cove Edition III",
    "developer": "Imtiaz",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/453/thumbnail_logo_alnair_45ffef05ba23.png",
    "location": "Dubailand",
    "fullAddress": "Dubailand, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 680000,
    "priceFormatted": "AED 680,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "50/50 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "30%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "50%"
      }
    ],
    "description": "Cove Edition III by Imtiaz is a fully furnished residential tower in Dubailand (DLRC), moments from the future Blue Line Metro Station. Studios, 1- and 2-bedroom apartments feature 3.2m ceilings, smart-home systems, Bosch appliances and designer finishes. Residents enjoy a rooftop infinity pool, gym, clubhouse, landscaped podium gardens and kids' zones. With Dubai Outlet Mall, Academic City and Global Village minutes away, it blends serene living with citywide connectivity.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-d75b14afe2784bc2.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-d75b14afe2784bc2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-c538e236262eac01.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-c01a37a4e02894f8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-669e680dcd9873e3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-33001e439c0fc7c0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-cbc58dd39882c2e2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-e1b7ccf00b2a6407.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-6acb587e28ded2df.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-5a96111b7b51fbf5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/cove-edition-iii/images/cove-edition-iii-image-22894813d4352a84.jpg"
    ],
    "unitTypes": [
      {
        "type": "Studio",
        "size": "380 sq ft",
        "price": "AED 610,000"
      },
      {
        "type": "1BR Apartment",
        "size": "754 sq ft",
        "price": "AED 905,000"
      },
      {
        "type": "2BR Apartment",
        "size": "1313 sq ft",
        "price": "AED 1,300,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "50/50 Payment Plan"
    ],
    "latitude": 25.09836859124,
    "longitude": 55.374001264572
  },
  {
    "id": 121,
    "slug": "zenith-j16a7c12c376fa2",
    "name": "Zenith J1",
    "developer": "Zenith Ventures Real Estate Development",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1715/thumbnail_logo_alnair_3ebea31ee9c9.png",
    "location": "Hyati Avenue",
    "fullAddress": "Hyati Avenue, JVC District 14, Jumeirah Village Circle (JVC), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2186638,
    "priceFormatted": "AED 2,186,638",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "15/20/60 Post-Handover",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "15%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "5%"
      },
      {
        "milestone": "Post-Handover (60 Months)",
        "percentage": "60%"
      }
    ],
    "description": "Situated in the heart of JVC, Zenith J1 Tower enjoys excellent connectivity to Dubai’s major destinations. The location provides quick access to Al Khail Road, ensuring smooth travel to business hubs, leisure attractions, and retail centers. Residents can reach Dubai Marina, JBR Beach, and Downtown Dubai within minutes. With nearby schools, healthcare centers, and entertainment venues, JVC remains a highly desirable community for residents and investors.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-c0ae92302c90936e.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-a4de9b09660aebb2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-c0ae92302c90936e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-b7c284c87945feab.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-e570d3b9e3f2f7e9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-61bab59013a9439d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-23a333ccce72dd6f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-a5d1e7b612a610ff.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-85bb3b3acb916990.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-937bfe797bedfed1.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/zenith-j1/images/zenith-j1-image-04752e48f53ed1ad.png"
    ],
    "unitTypes": [
      {
        "type": "Studio In Zenith J1",
        "size": "676.86 - 773.5 sq ft",
        "price": "AED 1,286,034"
      },
      {
        "type": "1 Bedroom In Zenith J1",
        "size": "856.57 - 1219.55 sq ft",
        "price": "AED 1,583,372"
      },
      {
        "type": "2 Bedrooms In Zenith J1",
        "size": "1583.38 - 2045.14 sq ft",
        "price": "AED 2,976,754"
      },
      {
        "type": "3 Bedrooms In Zenith J1",
        "size": "2285.17 - 2380.33 sq ft",
        "price": "AED 4,010,473"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "15/20/60 Post-Handover"
    ],
    "latitude": 25.061875356053,
    "longitude": 55.201996564865
  },
  {
    "id": 122,
    "slug": "district-one-west-phase-16a98a37238206",
    "name": "District One West - Phase 1",
    "developer": "Nakheel",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1228/thumbnail_logo_alnair_54c092241f6f.png",
    "location": "District One",
    "fullAddress": "District One, Mohammed Bin Rashid City (MBR City), Dubai, UAE",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 7960000,
    "priceFormatted": "AED 7,960,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "80/20 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "60%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "20%"
      }
    ],
    "description": "District One West Phase I is an exclusive gated community of 179 luxury villas and mansions in MBR City, just 10 minutes from Downtown Dubai. Set around a dazzling Crystal Lagoon, the residences range from 4BR to 7BR with private pools, gardens, and elevators. World-class amenities include a clubhouse, sandy beaches, sports courts, and lush green spaces covering 60% of the community. A rare opportunity for waterfront living at the heart of Dubai.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-96bb716cc9db1c45.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-96bb716cc9db1c45.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-4b6cbd21fd6b58fc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-205f2df0ec5f2f79.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-0c87ddc641ddd8c5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-3e0217c14e09d766.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-812e028c82011aeb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-ddab8891d351119a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-b9ebe0350c9c0aa4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-8e8485cbc660344e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/district-one-west-phase-1/images/district-one-west-phase-1-image-76d3c571af963879.jpg"
    ],
    "unitTypes": [
      {
        "type": "4BR GARDEN VILLA",
        "size": "6394.73 sq ft",
        "price": "AED 7,960,000"
      },
      {
        "type": "5BR GARDEN VILLA",
        "size": "9394.73 sq ft",
        "price": "AED 14,200,000"
      },
      {
        "type": "6BR MANSION",
        "size": "11236.87 sq ft",
        "price": "AED 29,470,000"
      },
      {
        "type": "7BR MANSION THE ISLAND",
        "size": "22969.11 sq ft",
        "price": "AED 60,180,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "80/20 Payment Plan"
    ],
    "latitude": 25.166658,
    "longitude": 55.278315
  },
  {
    "id": 123,
    "slug": "riviera-residences6a7c107db474d",
    "name": "Riviera Residences",
    "developer": "Muriya",
    "developerLogo": null,
    "location": "Hydra Premier Tower",
    "fullAddress": "Hydra Premier Tower, Al Reem Island, Abu Dhabi, UAE",
    "city": "Abu Dhabi",
    "type": "Apartment",
    "startingPrice": 624325,
    "priceFormatted": "AED 624,325",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "73/27 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "63%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "27%"
      }
    ],
    "description": "Riviera Residences is a boutique community in Hawana Salalah, just a short walk from the beach. Modern 1BR apartments feature unobstructed sea views, with ground-floor homes offering private gardens and pool steps, and first-floor residences featuring panoramic balconies. Designed as an investment-driven product with access to Hawana’s resort amenities and ROI potential up to 10%.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-a2ea58ef37828a71.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-a2ea58ef37828a71.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-71aba068a784c395.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-9f98c350e16b9ed7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-202304bdf2663b8e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-fb200e22371526aa.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-4156a6ef1c4f8218.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-80e4bb7953f3a6ed.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-1dfbf2cee34ff52f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-30b9e5670ac76960.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/riviera-residences/images/riviera-residences-image-e0ae7ee48f6ca3ab.png"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom In Riviera Residences",
        "size": "916.55 - 1062.5 sq ft",
        "price": "AED 2,700,000"
      },
      {
        "type": "1BR Modern Apartment",
        "size": "Contact for sizes",
        "price": "AED 170,000"
      },
      {
        "type": "2 Bedrooms In Riviera Residences",
        "size": "1188.01 - 2301.64 sq ft",
        "price": "AED 3,200,000"
      },
      {
        "type": "3 Bedrooms In Riviera Residences",
        "size": "2358.91 - 2472.14 sq ft",
        "price": "AED 4,900,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "73/27 Payment Plan"
    ],
    "latitude": 17.00576,
    "longitude": 54.074075
  },
  {
    "id": 124,
    "slug": "rivana6a7c10d4e44d1",
    "name": "Rivana",
    "developer": "Emaar",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/hetzner_new_crm/upload/developers/thumbnail_Emaar-Properties-Logo-1.png6ad9f962c5808.png",
    "location": "The Valley by Emaar",
    "fullAddress": "The Valley by Emaar, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 3150000,
    "priceFormatted": "AED 3,150,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "90/10 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "80%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "10%"
      }
    ],
    "description": "Rivana is Emaar's first twin-villa release inside The Valley, a gated enclave of 486 semi-detached homes wrapped around open ponds, a river island and verdant pocket parks. Three, four and five-bedroom villas come in two architectural identities — Clara, modernist and sculptural, and Kai, softly curved in warm tones. Floor-to-ceiling glazing, roof terraces, maid's rooms and private L-shaped gardens define daily life, moments from Golden Beach and the Sports Village.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-edb953ffc5449fa9.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-edb953ffc5449fa9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-25a7d28110f231d8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-96f818dbf61bcd4c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5115/lOIBsMP6-z9twZRAPGoLz-IAsfyt1IqtaoW6glcHu7wrLrjjUiydldzCF6cqYHgjLPR8bHtZQUkhWr309HbPxBujVgOXafJDNR4QHP_vRdrXsJa1clzHNLp-rzOEVEJGUwHmGWyTYg7j3KnsxtYg0dyRFNpInK25YWsKqGbU3oDB5-xHA9fl8nLt0Ootd_VP.jpeg6a8d6c058d56c.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5115/IVfQyigR8iXA7riP4slD64L4DcmtHOy1VaQZCtg3nBdMW7FHy1Z1UAHP9PU9TuezphoNvQ840OGN0RkQtGzClig8UKsbl0aDTjpTLH0U7pMqiZrgVlD7FvSUUCSdxMkOVwnM-tELZSQLBFQW-iRgwiiLwS-ETeac5ffk0XmZSXYaTYXgjnFUEcWNRZ67O1_b.jpeg6a8d6c06e087d.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-c68db76a1681c01e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-084e3dde1266902f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-871a48d4d5dd4782.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-89c2aada42a61775.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/rivana/images/rivana-image-92f428d9fec74665.jpg"
    ],
    "unitTypes": [
      {
        "type": "3BR Twin Villa",
        "size": "3152 sq ft",
        "price": "AED 3,150,000"
      },
      {
        "type": "4BR Twin Villa",
        "size": "3430 sq ft",
        "price": "AED 3,940,000"
      },
      {
        "type": "5BR Twin Villa",
        "size": "4487 sq ft",
        "price": "Price on request"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "90/10 Payment Plan"
    ],
    "latitude": 25.008005,
    "longitude": 55.45516
  },
  {
    "id": 125,
    "slug": "madain-tower6a7c0e0e14d27",
    "name": "Mada'in Tower",
    "developer": "Marina Arcade Real Estate",
    "developerLogo": null,
    "location": "Dubai Marina",
    "fullAddress": "Dubai Marina, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2086282,
    "priceFormatted": "AED 2,086,282",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "50%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "Mada’in Tower is a luxury residential landmark in Dubai Marina offering panoramic sea and Palm Jumeirah views. The project features smart apartments, premium finishes, and world-class amenities including a pool and concierge services. The tower provides direct access to Sheikh Zayed Road, beaches, marina lifestyle, and yacht clubs.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-b688f3b7bf4a58eb.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-b688f3b7bf4a58eb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-8197e25148d64526.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-e148bd26cfa5446e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-2970e0131240efe6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-46b5347f48eb27d1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-d658a09dde0d465a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-1b16eb17e347948f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-5996613441520e3a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-579fd6ce3b01b4b8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/madain-tower/images/madain-tower-image-fab342a29cec02b1.jpg"
    ],
    "unitTypes": [
      {
        "type": "1BR Apartment Type A1",
        "size": "905 sq ft",
        "price": "Price on request"
      },
      {
        "type": "1BR Apartment Type A2",
        "size": "862 sq ft",
        "price": "Price on request"
      },
      {
        "type": "2BR Apartment Type A2",
        "size": "1491 sq ft",
        "price": "Price on request"
      },
      {
        "type": "2BR Apartment Type C4",
        "size": "1962 sq ft",
        "price": "Price on request"
      },
      {
        "type": "Sky Mansion Type B2",
        "size": "4540 sq ft",
        "price": "Price on request"
      },
      {
        "type": "3BR Duplex Type A2",
        "size": "1549 sq ft",
        "price": "Price on request"
      },
      {
        "type": "4BR Duplex Type A1",
        "size": "2465 sq ft",
        "price": "Price on request"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": 25.089979,
    "longitude": 55.149065
  },
  {
    "id": 126,
    "slug": "tasmeer-indigo-properties-squarex-residence-apartment6a8209edf1532",
    "name": "SquareX Residence",
    "developer": "Tasmeer Indigo Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1718/thumbnail_logo_alnair_a52be508dc67.png",
    "location": "Legado by Prescott",
    "fullAddress": "Legado by Prescott, JVC District 14, Jumeirah Village Circle (JVC), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1279157,
    "priceFormatted": "AED 1,279,157",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "10/53/30 Post-Handover",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "53%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "7%"
      },
      {
        "milestone": "Post-Handover (24 Months)",
        "percentage": "30%"
      }
    ],
    "description": "SquareX Residence is a residential development by Tasmeer Indigo Properties in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-824eef327fc4ac6d.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-824eef327fc4ac6d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-ea1b5c4ca23a6462.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-7363c5f7a84b5bf4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-b7c129cdf2839d71.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-c709c3b8156c21a7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-499b599e40cbff98.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-3476c5ebdb865e9e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-fcdaf2ddce795cfa.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-94e66ea96370a45c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/squarex-residence/images/squarex-residence-image-d9fb20618f735624.jpg"
    ],
    "unitTypes": [
      {
        "type": "Studio In SquareX Residence",
        "size": "426.68 sq ft",
        "price": "AED 775,791"
      },
      {
        "type": "1 Bedroom In SquareX Residence",
        "size": "757.56 - 831.62 sq ft",
        "price": "AED 1,123,274"
      },
      {
        "type": "2 Bedrooms In SquareX Residence",
        "size": "1219.23 - 1413.84 sq ft",
        "price": "AED 1,706,338"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "10/53/30 Post-Handover"
    ],
    "latitude": 25.0599844,
    "longitude": 55.2043518
  },
  {
    "id": 127,
    "slug": "al-haseen-residences-46a7c12cc1956c",
    "name": "Al Haseen Residences 4",
    "developer": "Dugasta Properties Development",
    "developerLogo": null,
    "location": "Dubai Industrial City",
    "fullAddress": "Dubai Industrial City, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 731348,
    "priceFormatted": "AED 731,348",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "30/70 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "70%"
      }
    ],
    "description": "Al Haseen Residences 4, developed by Dugasta Properties, epitomizes modern living in the vibrant hub of Dubai Industrial City. Situated strategically in a sought-after area, residents of this prestigious project enjoy unrivaled convenience with easy access to major transportation links, business hubs, schools, medical facilities, and shopping centers. The close proximity to Dubai International Airport ensures seamless travel experiences for the residents.Boasting contemporary design and superior construction quality, Al Haseen Residences 4 offers a sophisticated living environment for its residents. The property features lush green landscapes, including parks and gardens, creating serene spaces for relaxation and recreation. State-of-the-art amenities such as a well-equipped gym, a sparkling swimming pool, and sports courts cater to the diverse lifestyle needs of the residents.The project offers a variety of housing options, including studio apartments of various sizes, ensuring there’s a suitable living space for every individual. Safety and well-being are paramount at Al Haseen Residences 4, with features like CCTV surveillance, 24/7 security personnel, ample parking space, jogging tracks, children’s play areas, and on-site retail outlets enhancing the overall living experience.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-9af527a6227a39fc.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-97de4ac87fca4fb5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-9af527a6227a39fc.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-72e503d0466a5a02.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-f4c27a700c59f608.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-670469715db95a03.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-68cf0292c2ec1e8f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-6ce5239d2dddc156.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/al-haseen-residences-4/images/al-haseen-residences-4-image-061f9b94f567cb15.png"
    ],
    "unitTypes": [
      {
        "type": "Studio In Al Haseen Residences 4",
        "size": "379 - 486 sq ft",
        "price": "AED 606,400"
      },
      {
        "type": "1 Bedroom In Al Haseen Residences 4",
        "size": "1057.77 sq ft",
        "price": "AED 1,692,432"
      },
      {
        "type": "2 Bedrooms In Al Haseen Residences 4",
        "size": "1152.81 sq ft",
        "price": "AED 1,844,496"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "30/70 Payment Plan"
    ],
    "latitude": 24.871138971022,
    "longitude": 55.036442792555
  },
  {
    "id": 128,
    "slug": "green-group-autograph-s-series-residence-apartment6a8207e3730c5",
    "name": "Autograph S Series Residence",
    "developer": "Green Group",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1269/thumbnail_logo_alnair_2b8197fd97ea.png",
    "location": "Jumeirah Village Circle (JVC)",
    "fullAddress": "Jumeirah Village Circle (JVC), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 3250850,
    "priceFormatted": "AED 3,250,850",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "110/-10 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "100%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "-10%"
      }
    ],
    "description": "Green Group - Autograph S Series Residence - Apartment is a residential development by Green Group in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-14ec7f7bbda7a468.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-14ec7f7bbda7a468.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-eb14a887e6ecb4da.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-ecebbff0be7ad56e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-17ddcafd6482c866.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-d870941ef4c4e0cb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-0e9e5dd767bd5751.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-6290e92d4ec35746.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-95d0b3d6109332b2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/autograph-s-series-residence/images/autograph-s-series-residence-image-af424cdd9e0ab194.jpg"
    ],
    "unitTypes": [
      {
        "type": "1BR",
        "size": "1034 sq ft",
        "price": "AED 1,412,850"
      },
      {
        "type": "1BR Ph",
        "size": "836 sq ft",
        "price": "AED 1,340,850"
      },
      {
        "type": "1BR Th",
        "size": "1550 sq ft",
        "price": "AED 1,666,850"
      },
      {
        "type": "2 Bedrooms In Autograph S Series Residence",
        "size": "1980.77 - 2061.07 sq ft",
        "price": "AED 3,250,850"
      },
      {
        "type": "2BR Dp",
        "size": "1824 sq ft",
        "price": "AED 2,649,850"
      },
      {
        "type": "2BR Ph",
        "size": "1073 sq ft",
        "price": "AED 1,850,850"
      },
      {
        "type": "Suite",
        "size": "463 sq ft",
        "price": "AED 754,850"
      },
      {
        "type": "Suite+Pool",
        "size": "656 sq ft",
        "price": "AED 902,850"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "110/-10 Payment Plan"
    ],
    "latitude": 25.0553375,
    "longitude": 55.2017969
  },
  {
    "id": 129,
    "slug": "beachfront-gates-26a8224fa430c7",
    "name": "Beachfront Gates 2",
    "developer": "Dubai South",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1234/thumbnail_logo_alnair_b900af4e154a.png",
    "location": "Dubai South",
    "fullAddress": "Dubai South, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 0,
    "priceFormatted": "Price On Request",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "50%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "Beachfront Gates 2 is a residential development by Dubai South in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145800.png6ab4f444a04fb.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145800.png6ab4f444a04fb.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145747.png6ab4f4471e552.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145733.png6ab4f44857982.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145722.png6ab4f4496166d.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145709.png6ab4f44a6b82b.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145654.png6ab4f44bb5bd1.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145630.png6ab4f44d111c3.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145950.png6ab4f4a631d4c.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/z.png6ab4f4a7c90c4.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/6793/Screenshot_2026-09-24_145908.png6ab4f4a88348c.png"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom Residence",
        "size": "750 - 920 sq ft",
        "price": "Price On Request"
      },
      {
        "type": "2 Bedroom Residence",
        "size": "1,200 - 1,450 sq ft",
        "price": "Price On Request"
      },
      {
        "type": "3 Bedroom Residence / Penthouse",
        "size": "1,950 - 2,800 sq ft",
        "price": "Price On Request"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": null,
    "longitude": null
  },
  {
    "id": 130,
    "slug": "capital-horizon-terraces6a7c12c62eb8f",
    "name": "Capital Horizon Terraces",
    "developer": "Cirrera Development",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1717/thumbnail_logo_alnair_186bf5df5f27.png",
    "location": "Capital Horizon Terraces",
    "fullAddress": "Capital Horizon Terraces, Central Island (A), Dubai Islands, Dubai, UAE",
    "city": "Dubai",
    "type": "Townhouse",
    "startingPrice": 2736595,
    "priceFormatted": "AED 2,736,595",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "54/46 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "44%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "46%"
      }
    ],
    "description": "Capital Horizon Terraces is a premier residential development in the heart of Dubai, offering 1, 2, and 3-bedroom apartments that blend luxury, comfort, and innovation. Situated on Dubai Islands, it boasts sweeping views of the Arabian Gulf while providing a peaceful retreat from the city's hustle. The modern architecture features clean lines and practical elegance, perfectly complementing its stunning surroundings. With 63 exclusive units, this project offers a refined living experience, combining contemporary amenities with timeless design for ultimate comfort and tranquility.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/capital-horizon-terraces/images/capital-horizon-terraces-image-f1651d76a9c9c6b1.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/capital-horizon-terraces/images/capital-horizon-terraces-image-f1651d76a9c9c6b1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/capital-horizon-terraces/images/capital-horizon-terraces-image-f8cf5fcd597ea0d8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/capital-horizon-terraces/images/capital-horizon-terraces-image-18287580f029aa48.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/capital-horizon-terraces/images/capital-horizon-terraces-image-89e344b7dbf7b126.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/capital-horizon-terraces/images/capital-horizon-terraces-image-486542f5aa6d2fea.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5709/Screenshot_2026-09-25_021523.png6ab59301eeaf0.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5709/Screenshot_2026-09-25_021507.png6ab59303c9be3.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/upload/projects/5709/Screenshot_2026-09-25_021443.png6ab5930494794.png"
    ],
    "unitTypes": [
      {
        "type": "1 Bedroom Residence",
        "size": "750 - 920 sq ft",
        "price": "AED 2,736,595"
      },
      {
        "type": "2 Bedroom Residence",
        "size": "1,200 - 1,450 sq ft",
        "price": "AED 4,241,722.25"
      },
      {
        "type": "3 Bedroom Residence / Penthouse",
        "size": "1,950 - 2,800 sq ft",
        "price": "AED 6,294,168.5"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "54/46 Payment Plan"
    ],
    "latitude": 25.298985946291,
    "longitude": 55.316396802664
  },
  {
    "id": 131,
    "slug": "shoumous-properties-garden-city-villa6a7c1421c29af",
    "name": "Garden City",
    "developer": "Shoumous Properties",
    "developerLogo": null,
    "location": "Sharjah Garden City",
    "fullAddress": "Sharjah Garden City, Sharjah, UAE",
    "city": "Sharjah",
    "type": "Apartment",
    "startingPrice": 2985000,
    "priceFormatted": "AED 2,985,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "30/70 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "70%"
      }
    ],
    "description": "Garden City is a villa community by Shoumous Properties in Sharjah Garden City. The development forms part of a large master community planned around open spaces, landscaped surroundings, refined family living, and a connected neighbourhood environment in Sharjah. The project offers spacious three- to five-bedroom villas with functional layouts suited to families who want privacy and room to grow. Its location provides access to parks, community services, schools, retail, Sharjah International Airport, and the road network linking Sharjah with Dubai and the northern emirates.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-773939db686d78e1.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-773939db686d78e1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-ec49dfbc3ba29f6e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-58f8c93e8ef94e84.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-627b7057b8734ae9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-943dc582009ac753.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-9b15296c5b376a5f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-f66abe3d54c22a51.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/garden-city/images/garden-city-image-19b67dbe1cd2205f.jpg"
    ],
    "unitTypes": [
      {
        "type": "3 Bedrooms In Garden City",
        "size": "3173 sq ft",
        "price": "AED 2,985,000"
      },
      {
        "type": "3BR",
        "size": "3173 sq ft",
        "price": "AED 2,850,000"
      },
      {
        "type": "4 Bedrooms In Garden City",
        "size": "4095 sq ft",
        "price": "AED 3,950,000"
      },
      {
        "type": "4BR",
        "size": "4095 sq ft",
        "price": "AED 3,950,000"
      },
      {
        "type": "5 Bedrooms In Garden City",
        "size": "5704 sq ft",
        "price": "AED 5,500,000"
      },
      {
        "type": "5BR",
        "size": "5704 sq ft",
        "price": "AED 5,250,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "30/70 Payment Plan"
    ],
    "latitude": 25.196386630411,
    "longitude": 55.635044637719
  },
  {
    "id": 132,
    "slug": "liv-lux6a7c133363535",
    "name": "LIV LUX",
    "developer": "LIV",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1414/thumbnail_logo_alnair_d1e6459b56d6.png",
    "location": "Jumeirah Beach Residence (JBR)",
    "fullAddress": "Jumeirah Beach Residence (JBR), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2600000,
    "priceFormatted": "AED 2,600,000",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "40/60 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction",
        "percentage": "30%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "60%"
      }
    ],
    "description": "LIV LUX is a luxury design residential façade at Dubai Marina, rising 47-storey high in the sky by LIV Developers offering a choice of 1 to 4 bedroom apartments and penthouses. Enjoy some of life's finest pleasures while experiencing the refined luxury and iconic views of the Cityscape, Palm Jumeirah from open balconies.Full-height windows and spacious open-air balconies offer spectacular views of the surrounding landscape, including cityscapes, the sea, water features, parks, and verdant vegetation. The most breathtaking views of the Arabian Gulf can be found from your balconies, and your homes come equipped with some truly magnificent components and fittings.The development presents luxury class apartments, duplex and superlux signature class residences available with high-end fittings and fixtures. Explore more with its impressive design signature collection that elevates the luxury into the next level with custom made elevated ceiling and immaculate lighting.Discover the most purposeful life here which is established beyond your imagination and your expectations. Simplifying the most standard way of life while still maintaining a level of luxury incredible enough to offer the most elevating and brilliantly designed home interiors and a sophisticated exterior. Combining the way of life through modernity and natural surroundings.Residing here at this luxury development is further loaded with a variety of amenities and services such as rejuvenating pools, parks, gardens, lounge areas, private yoga rooms, or retreat into the dedicated spa with sauna and steam rooms, and other kinds of pleasurable activities. Plunge into this flawless host of the place that brings you a variety of premium locations in close proximity to Dubai Marina.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-3876a3f681019f0a.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-384ab160731edd54.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-3876a3f681019f0a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-a45b7a138f893668.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-daa9fd51a57cf83d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-8213af053d8a870a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-ef046debc9ff625f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-e9cb4e6a0f7487a5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-3b5cd2d6603100e4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-8131e9e40ca5fa39.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/liv-lux/images/liv-lux-image-d4bb3fbbe5e72dcd.jpg"
    ],
    "unitTypes": [
      {
        "type": "0% Commission 💥 Last Remaining Unit 💥 Post Handover Plan",
        "size": "15270 sq ft",
        "price": "AED 67,999,548"
      },
      {
        "type": "0% Commission 💥 Last Remaining Unit 💥 Prime Location",
        "size": "7270 sq ft",
        "price": "AED 23,999,548"
      },
      {
        "type": "1 Bedroom In LIV Lux",
        "size": "901 sq ft",
        "price": "AED 3,249,548"
      },
      {
        "type": "1 Bedroom In Lux",
        "size": "901 sq ft",
        "price": "AED 3,229,548"
      },
      {
        "type": "1BR",
        "size": "748 sq ft",
        "price": "AED 2,499,548"
      },
      {
        "type": "2 Bedroom",
        "size": "1545 sq ft",
        "price": "AED 3,849,548"
      },
      {
        "type": "3BR",
        "size": "2530 sq ft",
        "price": "AED 8,999,548"
      },
      {
        "type": "4 Bedrooms In LIV Lux",
        "size": "7270 sq ft",
        "price": "AED 26,749,548"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "40/60 Payment Plan"
    ],
    "latitude": 25.08330514,
    "longitude": 55.14167716
  },
  {
    "id": 133,
    "slug": "samana-ocean-pearl-apartment6a8207bd5d01a",
    "name": "Ocean Pearl",
    "developer": "Samana",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/452/thumbnail_logo_alnair_35ccdac739eb.png",
    "location": "Beach Residences Dubai Islands",
    "fullAddress": "Beach Residences Dubai Islands, Rixos Dubai Islands Hotel & Residences, Shore Island (B), Dubai Islands, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 3940444,
    "priceFormatted": "AED 3,940,444",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "100/0 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "15%"
      },
      {
        "milestone": "During Construction",
        "percentage": "85%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "0%"
      }
    ],
    "description": "Ocean Pearl is a residential development by Samana in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-dc8957c44b7c36f8.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-dc8957c44b7c36f8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-3308cf540066542b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-c0ffe2d9fedbc890.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-d69c200eea56c07d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-55b8cb7fb77205f4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-0eae106233b6a614.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-1ac3bbe1a2a59a92.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-1e9466036433b1c0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-b73144dc1daabc1b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl/images/ocean-pearl-image-d8349fd0b4fcd4ed.jpg"
    ],
    "unitTypes": [
      {
        "type": "1BR + Pool",
        "size": "897.06 sq ft",
        "price": "AED 2,433,596.97"
      },
      {
        "type": "2 Bedrooms In Ocean Pearl",
        "size": "1357.54 - 1534.5 sq ft",
        "price": "AED 3,940,444"
      },
      {
        "type": "2BR + Pool",
        "size": "891.79 sq ft",
        "price": "AED 2,433,596.97"
      },
      {
        "type": "3 Bedrooms In Ocean Pearl",
        "size": "1559.48 - 1843.32 sq ft",
        "price": "AED 4,278,811"
      },
      {
        "type": "3 Bedrooms In Samana - Ocean Pearl - Apartment",
        "size": "1670 sq ft",
        "price": "AED 3,924,000"
      },
      {
        "type": "3BR + Pool",
        "size": "890.71 sq ft",
        "price": "AED 2,463,289.25"
      },
      {
        "type": "4 Bedrooms In Ocean Pearl",
        "size": "1972.49 - 1974.21 sq ft",
        "price": "AED 5,051,588"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "100/0 Payment Plan"
    ],
    "latitude": 25.299977373602,
    "longitude": 55.315627886903
  },
  {
    "id": 134,
    "slug": "samana-ocean-pearl-2-apartment6a82047e66495",
    "name": "Ocean Pearl 2",
    "developer": "Samana",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/452/thumbnail_logo_alnair_35ccdac739eb.png",
    "location": "Beach Residences Dubai Islands",
    "fullAddress": "Beach Residences Dubai Islands, Rixos Dubai Islands Hotel & Residences, Shore Island (B), Dubai Islands, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 4278811,
    "priceFormatted": "AED 4,278,811",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "20/20/60 Post-Handover",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "60%"
      },
      {
        "milestone": "Post-Handover (24 Months)",
        "percentage": "60%"
      }
    ],
    "description": "Ocean Pearl 2 is a residential development by Samana in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-d46087ca975e62b9.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-d46087ca975e62b9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-43692c19d854ec45.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-7200b6766344c712.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-c01a37a4e02894f8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-669e680dcd9873e3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-edecf1e6dc5c5a76.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-21e9708e82b59e18.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-6acb587e28ded2df.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-a9f5a59ed210576d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/ocean-pearl-2/images/ocean-pearl-2-image-0a834fa63cbae1f6.jpg"
    ],
    "unitTypes": [
      {
        "type": "1  Bedrooms In Ocean Pearl 2",
        "size": "899.22 sq ft",
        "price": "AED 2,253,900"
      },
      {
        "type": "1 Bedroom In Ocean Pearl 2",
        "size": "899.97 sq ft",
        "price": "AED 2,504,333"
      },
      {
        "type": "2 Bedrooms",
        "size": "1298 sq ft",
        "price": "AED 3,593,333"
      },
      {
        "type": "2 Bedrooms In Ocean Pearl 2",
        "size": "1159.38 - 1582.4 sq ft",
        "price": "AED 3,387,777.78"
      },
      {
        "type": "3 Bedrooms",
        "size": "1559 sq ft",
        "price": "AED 3,998,889"
      },
      {
        "type": "3 Bedrooms In Ocean Pearl 2",
        "size": "1439.35 - 1843.32 sq ft",
        "price": "AED 4,278,811"
      },
      {
        "type": "4 Bedrooms",
        "size": "1972 sq ft",
        "price": "AED 4,776,667"
      },
      {
        "type": "4 Bedrooms In Ocean Pearl 2",
        "size": "1972.49 - 1977.44 sq ft",
        "price": "AED 5,051,588"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "20/20/60 Post-Handover"
    ],
    "latitude": 25.298766174718,
    "longitude": 55.320830716285
  },
  {
    "id": 135,
    "slug": "reef-10006a7c12e7e149f",
    "name": "Reef 1000",
    "developer": "Reef Luxury Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1689/thumbnail_logo_alnair_f517af976210.png",
    "location": "Cove Boulevard by Imtiaz",
    "fullAddress": "Cove Boulevard by Imtiaz, Dubai Land Residence Complex (DLRC), Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1463280,
    "priceFormatted": "AED 1,463,280",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "60/40 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "40%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "40%"
      }
    ],
    "description": "Reef 1000 defines the next level residential development, developed by the emerging Reef Developments, lined with exclusive arranged studios, 1 and 2 bedroom apartments. The premier project reflect innovation, luxury and harmony with nature through its unique design and thoughtful architecture elements. The innovative sunken garden concept within the architecture creates a climate-controlled environment inspired by the natural world. This remarkable feature allows the transformation of living experience, providing residents to enjoy the beauty and tranquillity of the serene environment. The façade goes beyond the traditional concepts offering nature and modern living together, providing an oasis of peace and serenity in the vibrant urban setting.The prime location at Dubai Residence Complex marks a pristine setting to enjoy the convenience and smooth connectivity. Enjoy the best of Dubai’s vibrant lifestyle as situated near the major highways including swift connectivity to Downtown Dubai, Dubai International Airport and its popular shopping and entertainment hubs. The location combines the tranquillity of suburban living with the convenience of urban amenities, ensuring that residents can enjoy the best of both worlds. The rapid growing community is known for its family-friendly atmosphere, lined with every amenity as schools and parks, retail centres and dining venues nearby.The architectural brilliance is designed with high-end design element and fully furnished, curated to enhance the living experience for its residents. The interior design draws inspiration form the design that draws the inspiration from the intricate beauty of coral reefs, blending nature and luxury. This design philosophy, which celebrates the natural world, transforming living space into a lively space for relaxation and inspiration. Each element, form the fixtures to the layout, has been selected with attention to detail, resulting in space that radiate premium finishes that turn daily routine into moments of indulgence.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-116505f6382e1c02.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-116505f6382e1c02.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-c60eacf5456706bc.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-1b8cd66a0e256742.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-efd999ebded5d45d.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-8ee61bdc06d5f119.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-2b8497cd2e339924.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-92baedf4dfcc685a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-49e7951ebcdbc3ac.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-750576588801c3e6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/reef-1000/images/reef-1000-image-701a4904e402908a.png"
    ],
    "unitTypes": [
      {
        "type": "Studio",
        "size": "477 sq ft",
        "price": "AED 772,423"
      },
      {
        "type": "1 Bedroom In Reef 1000",
        "size": "857.99 - 1289.95 sq ft",
        "price": "AED 1,369,351"
      },
      {
        "type": "1BR",
        "size": "764 sq ft",
        "price": "AED 1,093,589"
      },
      {
        "type": "2 Bedrooms In Reef 1000",
        "size": "1092.43 - 1822.65 sq ft",
        "price": "AED 1,560,201"
      },
      {
        "type": "2BR",
        "size": "1092 sq ft",
        "price": "AED 1,563,213"
      },
      {
        "type": "2BR Th",
        "size": "1823 sq ft",
        "price": "AED 2,837,046"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "60/40 Payment Plan"
    ],
    "latitude": 25.086160042998,
    "longitude": 55.379899442196
  },
  {
    "id": 136,
    "slug": "samana-samana-barari-views-2-apartment6a820b979ecdd",
    "name": "Samana Barari Views 2",
    "developer": "Samana",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/452/thumbnail_logo_alnair_35ccdac739eb.png",
    "location": "Majan",
    "fullAddress": "Majan, Dubai, UAE",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1111698,
    "priceFormatted": "AED 1,111,698",
    "handover": "Q4 2026",
    "handoverYear": 2026,
    "paymentPlan": "100/0 Payment Plan",
    "paymentPlanBreakdown": [
      {
        "milestone": "Down Payment (On Booking)",
        "percentage": "15%"
      },
      {
        "milestone": "During Construction",
        "percentage": "85%"
      },
      {
        "milestone": "On Completion / Handover",
        "percentage": "0%"
      }
    ],
    "description": "Samana - Samana Barari Views 2 - Apartment is a residential development by Samana in Dubai, offering contemporary homes with practical layouts, open views and access to nearby retail and leisure destinations. The project combines modern architecture, shared amenities and a connected community setting. Residents benefit from convenient links to Dubai’s major roads, established lifestyle destinations and everyday services. Its practical location supports comfortable end-user living while providing a foundation for rental and investment demand.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-07dd918d79366a6f.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-07dd918d79366a6f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-c4af7f0f23216891.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-e033443eba283c8d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-263b1e9453a31117.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-fc2c535e31325e9c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-aa210357747ee59d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-07a315bdfb9b50d2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/projects/samana-barari-views-2/images/samana-barari-views-2-image-83581c9e47904fd6.jpg"
    ],
    "unitTypes": [
      {
        "type": "Studio + Pool",
        "size": "420.65 sq ft",
        "price": "AED 711,000"
      },
      {
        "type": "Studio In Samana Barari Views 2",
        "size": "438.62 - 460.48 sq ft",
        "price": "AED 1,023,097"
      },
      {
        "type": "1 Bedroom In Samana Barari Views 2",
        "size": "848.94 sq ft",
        "price": "AED 1,663,255"
      },
      {
        "type": "1BR + Pool",
        "size": "742.3 sq ft",
        "price": "AED 1,092,690"
      },
      {
        "type": "One Bedroom Apartment With Private Pool At Samana Barari Views 2",
        "size": "741 sq ft",
        "price": "AED 816,480"
      },
      {
        "type": "101",
        "size": "1044.11 sq ft",
        "price": "AED 2,041,200"
      },
      {
        "type": "610",
        "size": "1079.09 sq ft",
        "price": "AED 1,630,800"
      },
      {
        "type": "1304",
        "size": "1011.28 sq ft",
        "price": "AED 1,647,000"
      }
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Gardens & Parks",
      "Children's Play Sanctuary",
      "24/7 Security & Concierge",
      "Retail & Dining Promenade"
    ],
    "highlights": [
      "Authentic Master-Planned Off-Plan Development",
      "Direct Developer Launch Rates & Zero Agency Fee",
      "Handover: Q4 2026",
      "100/0 Payment Plan"
    ],
    "latitude": 25.09701044272,
    "longitude": 55.314170391651
  }
];
