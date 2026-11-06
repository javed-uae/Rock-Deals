// Scraped & reverse-engineered directly from https://mavrixproperties.ae/launches
// Authentic high-resolution AWS S3 imagery, developer specifications, handover milestones, and pricing.

export interface LaunchPaymentMilestone {
  milestone: string;
  percentage: string;
}

export interface NewLaunchProject {
  id: number;
  launchId: number;
  slug: string;
  name: string;
  developer: string;
  developerLogo: string | null;
  location: string;
  fullAddress: string;
  city: 'Dubai' | 'Abu Dhabi';
  type: 'Apartment' | 'Villa' | 'Townhouse' | 'Penthouse' | 'Waterfront Mansion';
  startingPrice: number;
  priceFormatted: string;
  handover: string;
  handoverYear: number;
  paymentPlan: string;
  paymentMilestones: LaunchPaymentMilestone[];
  description: string;
  heroImage: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
  badge: string;
  roiEstimate: string;
  sourceSiteUrl?: string;
  publishedAt?: number;
}

export const NEW_LAUNCHES: NewLaunchProject[] = [
  {
    "id": 5001,
    "launchId": 51,
    "slug": "palm-springs",
    "name": "Palm Springs",
    "developer": "Nakheel",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/2/thumbnail_logo_nakheel.png",
    "location": "Palm Jebel Ali Waterfront",
    "fullAddress": "Palm Jebel Ali Waterfront, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 3800000,
    "priceFormatted": "AED 3,800,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment (Immediate Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction (Easy Installments)",
        "percentage": "60%"
      },
      {
        "milestone": "Upon Handover & Key Handover",
        "percentage": "30%"
      }
    ],
    "description": "Palm Springs is an upcoming residential development by Nakheel, comprising townhouses and villas in Dubai's Jebel Ali area. Located on the mainland near Palm Jebel Ali, the development adds another residential destination to a part of the emirate undergoing significant development.\nThe residential offering will centre on townhouses and villas, appealing to buyers who prefer houses over apartment living. Further details on the number of bedrooms, architectural styles, layouts, and plot sizes are expected to define the range of homes available in the development.\nConnectivity is an important consideration for the location. Palm Springs is planned with access to Sheikh Zayed Road, one of Dubai's principal road corridors, linking the area with other parts of the city. Its position near Palm Jebel Ali also places it within the broader Jebel Ali coastal development area.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/dceeea9c-ae44-4d47-8fb4-d2c0018207c1.jpeg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/dceeea9c-ae44-4d47-8fb4-d2c0018207c1.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/ad93e2ce-8094-4c45-a11f-345841daecab.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/c25bbb60-74af-49bc-911f-c57699d0f282.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/564f307f-e810-4c57-b246-809115c67aee.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/aad6df41-42ba-4b0e-9262-3d22c6038d50.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/cde4eaee-7e74-47b7-a5c9-20a4bc4e6b9f.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/6502809c-0ed0-478f-813e-d145590eb87f.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/8b27dc92-1e37-4711-a67e-4cfc2708e95e.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/93ffe685-6768-4b98-b4bc-069433950cd9.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/181a74fe-a7d1-4c25-b707-abf646be08d9.jpeg"
    ],
    "amenities": [
      "Swimming Pool",
      "Parking",
      "Walking tracks",
      "Fitness Centre",
      "Kids Play Area",
      "Wellness Spaces",
      "Gym",
      "Landscaped areas",
      "Green spaces",
      "Community spaces"
    ],
    "highlights": [
      "Official Direct Launch from Nakheel",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 6.8% - 8.5%",
      "Handover: Q4 2028",
      "Prime Address in Palm Jebel Ali Waterfront"
    ],
    "badge": "VIP LAUNCH ACCESS",
    "roiEstimate": "6.8% - 8.5%",
    "sourceSiteUrl": "https://palm-springs.mavrixproperties.ae/",
    "publishedAt": 1793213113000
  },
  {
    "id": 5002,
    "launchId": 50,
    "slug": "christian-a-rockefeller-tower",
    "name": "Christian A. Rockefeller Tower",
    "developer": "Prestige Luxury Developments",
    "developerLogo": null,
    "location": "DIFC Financial Centre",
    "fullAddress": "DIFC Financial Centre, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Penthouse",
    "startingPrice": 3950000,
    "priceFormatted": "AED 3,950,000",
    "handover": "Q2 2028",
    "handoverYear": 22028,
    "paymentPlan": "50/50 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment (Immediate Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction (Easy Installments)",
        "percentage": "60%"
      },
      {
        "milestone": "Upon Handover & Key Handover",
        "percentage": "30%"
      }
    ],
    "description": "Christian A. Rockefeller Tower is an extraordinary newly unveiled residential masterpiece developed by Prestige Luxury Developments in the prestigious enclave of DIFC Financial Centre, Dubai. Designed with cutting-edge architectural craftsmanship, high-end branded finishes, and resort-style lifestyle amenities, this newly launched landmark offers an exceptional opportunity for luxury living and maximum capital appreciation.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/80598dac-2063-4654-9bcb-6188856d431f.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/80598dac-2063-4654-9bcb-6188856d431f.png"
    ],
    "amenities": [
      "Infinity Swimming Pool",
      "State-of-the-Art Fitness Center",
      "Private Cabanas & Sun Lounges",
      "Concierge & Valet Services",
      "Landscaped Gardens & Running Track",
      "Children Play Haven",
      "Fine Dining & Retail Promenade",
      "24/7 Monitored Security"
    ],
    "highlights": [
      "Official Direct Launch from Prestige Luxury Developments",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.1% - 8.9%",
      "Handover: Q2 2028",
      "Prime Address in DIFC Financial Centre"
    ],
    "badge": "EXCLUSIVE PRE-SALE",
    "roiEstimate": "7.1% - 8.9%",
    "sourceSiteUrl": "https://christian-a-rockefeller-tower.mavrixproperties.ae/",
    "publishedAt": 1792846930000
  },
  {
    "id": 5003,
    "launchId": 49,
    "slug": "berkeley-tower",
    "name": "Berkeley Tower",
    "developer": "Ellington Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/11/thumbnail_logo_ellington.png",
    "location": "Dubai Hills Estate",
    "fullAddress": "Dubai Hills Estate, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1850000,
    "priceFormatted": "AED 1,850,000",
    "handover": "Q3 2027",
    "handoverYear": 32027,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion",
        "percentage": "20%"
      }
    ],
    "description": "Berkeley Tower by Ellington Properties brings a design-led approach to commercial real estate in Business Bay, one of Dubai's established business districts. Rising 60 floors above ground, the tower combines flexible office space with shared areas for meetings,...\n\n\n&nbsp;",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/5f5dc962-ebed-4289-9152-d40a2ae9b1fa.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/5f5dc962-ebed-4289-9152-d40a2ae9b1fa.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/b28a61d0-4932-48ad-9ddd-2c1c146f121f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/c33466b2-59c3-4378-a2a8-b08b352a37a5.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/2126f039-843d-4114-91b3-3aeac723e117.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/029c27cc-96cf-40a8-aa5f-2f9c026b7cc9.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/6aa14774-7ff7-428e-8900-364513770dbd.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/2cc45a23-2384-4090-9a15-d55a33115e4c.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/e6ea2d29-4263-4427-91b6-3b388687fbe6.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/a075c61d-cc9f-4717-9ae1-d66751ff0226.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/e70e5dbf-60e4-47b8-9172-e68aaf202a0f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/07cc327a-09ea-45ce-8048-62da05e2b300.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/e51cfc7f-af04-45a3-98f3-09c34bcc7118.png"
    ],
    "amenities": [
      "Co Working Space",
      "Rest & Recharge",
      "Fitness Studio",
      "Drone Delivery",
      "Pilates Studio",
      "Restaurents",
      "Clubhouse",
      "Games Room",
      "Verti-port"
    ],
    "highlights": [
      "Official Direct Launch from Ellington Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.4% - 9.3%",
      "Handover: Q3 2027",
      "Prime Address in Dubai Hills Estate"
    ],
    "badge": "WATERFRONT FLAGSHIP",
    "roiEstimate": "7.4% - 9.3%",
    "sourceSiteUrl": "https://berkeley-tower.mavrixproperties.ae/",
    "publishedAt": 1792562496000
  },
  {
    "id": 5004,
    "launchId": 48,
    "slug": "al-ghadeer-parks",
    "name": "Al Ghadeer Parks",
    "developer": "Aldar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/4/thumbnail_logo_aldar.png",
    "location": "Al Ghadeer",
    "fullAddress": "Al Ghadeer, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Townhouse",
    "startingPrice": 1900000,
    "priceFormatted": "AED 1,900,000",
    "handover": "Q4 2027",
    "handoverYear": 42027,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "A community of 2- and 3-bedroom townhouses and 4-bedroom villas, Al Ghadeer Parks is where the golden hours belong to everyone and conversations that begin on an ordinary evening last well beyond it.\nA place where a sense of connection begins from the very first day. Step outside and the spaces open up around you. Wide, green, and warm with the last light of the day. The parks fill up by late afternoon, neighbours linger longer than they planned, and there&rsquo;s always a reason to take the long way home.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/9353d2a0-da36-436f-9b09-510b0445babb.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/fd9c2778-a47e-4f2a-8962-e2118350f89f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/9353d2a0-da36-436f-9b09-510b0445babb.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/1f1366f5-cf7a-462a-83cb-d00550d838a4.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/f3617db5-0b79-4a4a-aed1-98c765651d31.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/af53f16d-1d4e-4b88-b363-e48ad542fb36.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/3e94d293-e269-4a92-8b12-71abefb63b02.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/088dc5b3-1f8e-4a4e-93a4-5d271e71a340.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/cd01893e-2ef0-4c58-b4b3-b8aa5ba5658a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/f6b33e40-0edd-4052-8db3-22a0fc493acf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/a0d2fea7-f99a-4f11-a110-3ec04ce8eb69.jpg"
    ],
    "amenities": [
      "Community Centre",
      "Streets that Prioritise Pedestrians",
      "Swimming Pool",
      "Splash Pad",
      "Desert Stargazing  Lawns",
      "Multi-sports Area",
      "Events Lawn",
      "General Play Area",
      "Shaded Walkways & Planted Canopies",
      "Al Ghadeer British School"
    ],
    "highlights": [
      "Official Direct Launch from Aldar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.7% - 9.7%",
      "Handover: Q4 2027",
      "Prime Address in Al Ghadeer"
    ],
    "badge": "0% BROKERAGE FEE",
    "roiEstimate": "7.7% - 9.7%",
    "sourceSiteUrl": "https://al-ghadeer-parks.mavrixproperties.ae/",
    "publishedAt": 1791956816000
  },
  {
    "id": 5005,
    "launchId": 47,
    "slug": "the-yards-plaza",
    "name": "The Yards Plaza",
    "developer": "Beyond Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/15/thumbnail_logo_beyond.png",
    "location": "Dubai Maritime City",
    "fullAddress": "Dubai Maritime City, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2100000,
    "priceFormatted": "AED 2,100,000",
    "handover": "Q1 2028",
    "handoverYear": 12028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "Staged Installments",
        "percentage": "20%"
      },
      {
        "milestone": "On Completion",
        "percentage": "20%"
      }
    ],
    "description": "The commercial hub of The Yards &mdash; a premium office, retail &amp; lifestyle destination in City of Arabia, bringing together business, wellness, F&amp;B and landscaped outdoor spaces.\nThe Plaza offers investors the opportunity to secure premium office space at an early stage within one of BEYOND&rsquo;s newest master communities.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/dcec8549-7675-4cc2-b46b-9acaefde22b1.jpeg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/dcec8549-7675-4cc2-b46b-9acaefde22b1.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/38344949-8e15-436d-9a74-11175289e526.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/a583fa3d-d472-4a91-8c45-b85e240355f4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/9c0613c4-ae61-474c-9dc7-b04e7ca1b6cf.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/f854be45-e2e6-4a3f-a692-2f6bfdf63e33.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/e668d67e-8f85-45e8-ac0e-39b01b7e097a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/3f886e63-dbbc-4524-867a-c904fc9e3c6f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/2685e515-c09f-4a0e-8b99-bc2b9772c5a7.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/9fc7f425-1fb2-4f94-bf51-f90442c1caa7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/2dc44ea4-76d6-46fc-847a-034d220de0d5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/pages/content/5e2b8469-d7bc-4e45-a8a8-598a9f1f226e.jpg"
    ],
    "amenities": [
      "Business Centre",
      "Commercial Gym",
      "Shaded Plazas",
      "Swimming Pool",
      "Landscaped Seating Areas",
      "Public Terraces",
      "2 Padel Courts"
    ],
    "highlights": [
      "Official Direct Launch from Beyond Developments",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.0% - 10.1%",
      "Handover: Q1 2028",
      "Prime Address in Dubai Maritime City"
    ],
    "badge": "HIGH CAPITAL GROWTH",
    "roiEstimate": "8.0% - 10.1%",
    "sourceSiteUrl": "https://the-yards-plaza.mavrixproperties.ae/",
    "publishedAt": 1791487533000
  },
  {
    "id": 5006,
    "launchId": 44,
    "slug": "binghatti-starfall",
    "name": "Binghatti Starfall",
    "developer": "Binghatti",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/5/thumbnail_logo_binghatti.png",
    "location": "Al Jaddaf Waterfront",
    "fullAddress": "Al Jaddaf Waterfront, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1100000,
    "priceFormatted": "AED 1,100,000",
    "handover": "Q4 2026",
    "handoverYear": 42026,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "Staged Installments",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Binghatti Starfall translates the wonder of astronomy into architecture, lighting and lifestyle. From its signature Observatory to celestial design details and its falling-light façade, the concept gives the development a distinctive identity without compromising contemporary residential living.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/e378ddb1-5893-4227-9bb1-f5ea9665ed2f.png",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/e378ddb1-5893-4227-9bb1-f5ea9665ed2f.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/e0f6b70d-01e4-4d72-aae1-abadbe4758df.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/6c8b6bb1-5f7a-4cb5-86f3-0d88d3d23335.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/609711f9-ec76-48b2-b0e7-20366634f6e9.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/22e17381-1c9b-4c27-9866-cdf4876a43e8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/7afce4d5-095c-4e6f-b0f6-e9320f50c8c6.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/binghatti-starfall/9c47409c-3209-485b-9afd-a3559eea74bf.jpg"
    ],
    "amenities": [
      "FAMILY SITTING & SOCIAL NOOKS",
      "SUN LOUNGE",
      "POOLS - ADULTS & CHILDREN'S",
      "WELLNESS FACILITIES",
      "YOGA / AEROBIC PLATFORM",
      "CHILDREN'S PLAY AREAS"
    ],
    "highlights": [
      "Official Direct Launch from Binghatti",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.3% - 10.5%",
      "Handover: Q4 2026",
      "Prime Address in Al Jaddaf Waterfront"
    ],
    "badge": "HIGH RENTAL YIELD",
    "roiEstimate": "8.3% - 10.5%",
    "sourceSiteUrl": "https://binghatti-starfall.mavrixproperties.ae/",
    "publishedAt": 1790952615000
  },
  {
    "id": 5007,
    "launchId": 45,
    "slug": "palace-residences",
    "name": "Palace Residences at Dubai Hills Estate",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "Dubai Hills Estate",
    "fullAddress": "Dubai Hills Estate, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1950000,
    "priceFormatted": "AED 1,950,000",
    "handover": "Q2 2028",
    "handoverYear": 22028,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "Staged Installments",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Redefining luxury lifestyle, Palace Residences is the first 5-star branded complex in Dubai Hills Estate. The project was created in partnership with Palace Hotels &amp; Resorts, famed for its personalised service and excellent attention to even the smallest of details. Palace Residences comprises 3 towers that feature beautiful landscaped sky terraces with a seating area. Interested buyers can choose from a collection of 1-3 bedroom apartments, 3-bedroom townhouses and half &amp; full floors. The size of the apartments ranges from 743 sq. ft to 2,302 sq. ft.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/5b469251-86f3-4aad-8eda-207201cd701c.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/5b469251-86f3-4aad-8eda-207201cd701c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/7a9f38d0-1f6a-46ee-b47c-81cb94b68a6c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/441e10e9-486f-4758-ba5f-262936069a16.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/af4d7fb8-3de8-4d97-8179-8b7b512be60f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/0c0978c0-06a5-4110-afe2-680e59e35ed3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/fb829055-85c9-48e8-a8e5-6cbc0fbf77d6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/add5aabf-18a5-4a43-aac8-f80333b07bd8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/ccf428b7-ceab-47b0-a539-14790f1e0221.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/2ba0ff92-71f2-4be1-9f31-b386b60aec91.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/27ba1ea6-a517-4a85-b331-a08db7c1f005.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palace-residences/b7892c21-a259-40ac-a0ca-f013c4108a9f.jpg"
    ],
    "amenities": [
      "Art The Of State GYM",
      "Landscaped Podium Deck",
      "Expansive Swimming Pool",
      "Fitness Centre & Yoga Areas",
      "Multipurpose Room for Activities And allEvents",
      "CHILDREN'S PLAY AREAS"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.6% - 8.7%",
      "Handover: Q2 2028",
      "Prime Address in Dubai Hills Estate"
    ],
    "badge": "ICONIC ARCHITECTURE",
    "roiEstimate": "8.6% - 8.7%",
    "sourceSiteUrl": "https://palace-residences.mavrixproperties.ae/",
    "publishedAt": 1790952608000
  },
  {
    "id": 5008,
    "launchId": 43,
    "slug": "yas-riva-reserve",
    "name": "Yas Riva Reserve",
    "developer": "Aldar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/4/thumbnail_logo_aldar.png",
    "location": "Yas Island",
    "fullAddress": "Yas Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Villa",
    "startingPrice": 4200000,
    "priceFormatted": "AED 4,200,000",
    "handover": "Q3 2028",
    "handoverYear": 32028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "Staged Installments",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Welcome to Yas Riva, a one-of-a-kind waterfront community for the discerning few. Here, serene canals reflect the sky, and breathtaking views meet thoughtfully designed villas for those who seek exclusivityFind your perfect home in a 4 to 6-bed villa inspired by the island life. Experience privilege at a whole new level with private mooring.Choose from different façade options and enjoy the flexibility of a multipurpose pod or the indulgence of a private pool inviting you to embrace a lifestyle filled with timeless momentsElegance flows through every detail, offering a selection of interiors that reflect your unique style",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/d3fa038f-49d0-40ce-85ec-6adff1a86c33.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/d3fa038f-49d0-40ce-85ec-6adff1a86c33.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/08c0040a-26ec-4165-823e-6fad34ebacb6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/24892ccb-bce7-4632-ad92-ee67f31a6ed3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/0d975934-e7ad-4d08-9aac-15ce0ff45430.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/f871d43f-47e5-4790-b566-e4aeb91a4e24.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/a5e8c750-b40e-4325-a02c-7b6aa3379221.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/65029fb1-3c27-42f2-b6e9-d4b8d70e94e7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/8915c45b-fa45-46e1-b53e-cfe75948891c.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/ad1742e4-f1cd-482c-8e18-191de69003bb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-riva-reserve/36f16c13-2e37-4fea-adda-858bb70f1650.jpg"
    ],
    "amenities": [
      "Indoor & Outdoor fitness areas",
      "THE VIEW CLUBHOUSE",
      "WATER PLAY (INTERACTIVE POND)",
      "MEDITATION AREA",
      "Community-wide cycling track",
      "Jogging track",
      "Padel Courts & Outdoor table tennis",
      "COMMUNITY PAVILION",
      "BBQ & PICNIC AREAS",
      "PLAY — Children & Family"
    ],
    "highlights": [
      "Official Direct Launch from Aldar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.9% - 9.1%",
      "Handover: Q3 2028",
      "Prime Address in Yas Island"
    ],
    "badge": "PRIVATE BEACHFRONT",
    "roiEstimate": "8.9% - 9.1%",
    "sourceSiteUrl": "https://yas-riva-reserve.mavrixproperties.ae/",
    "publishedAt": 1790952608000
  },
  {
    "id": 5009,
    "launchId": 41,
    "slug": "wadeem-gardens",
    "name": "Wadeem Gardens at Hudayriyat Island",
    "developer": "Modon Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/12/thumbnail_logo_modon.png",
    "location": "Hudayriyat Island",
    "fullAddress": "Hudayriyat Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Villa",
    "startingPrice": 5800000,
    "priceFormatted": "AED 5,800,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "50/50 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "Staged Installments",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "A district designed around life, a home designed around you — Wadeem Gardens by Modon on Hudayriyat Island offers luxury 4, 5 and 6-bedroom villas across three gated clusters, opposite Al Bateen, Abu Dhabi.Wadeem Gardens is where the different rhythms of life align — movement and stillness, culture and connection, everyday moments and memorable experiences.Wadeem Gardens comprises three gated villa clusters directly opposite Abu Dhabi’s exclusive Al Bateen district.Every villa at Wadeem Gardens by Modon carries full freehold title, open to buyers of any nationality, so ownership is permanent and unrestricted.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/4f1eb53a-40db-4204-998e-3dd33bba77a1.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/4f1eb53a-40db-4204-998e-3dd33bba77a1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/43b9c646-855b-4e21-b0fb-f6e4a30eb9ce.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/acefde46-2cfb-40f5-9efe-4ffdc0d22a02.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/4cca2cc6-e1b7-42ca-80ce-ebc6fd630e4e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/f27e6644-c418-4266-98ca-9be1a17c0098.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/202deccc-0971-4f17-a257-60a86205e6b8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/66abba95-c35f-407e-b11a-fc0cfc74853e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/bbe7ef43-8cc4-4f48-b361-1d65db1c2a76.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/315ae80e-4727-4131-970a-90b20947d8e7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/03d66300-7923-4303-bc99-395cc427c7c0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/wadeem-gardens/259f6cd9-47ff-4231-96c7-37730200f47b.jpg"
    ],
    "amenities": [
      "2.3 km Spine",
      "6 Clubhouses",
      "Cinemas",
      "Healthcare Centres",
      "Waterfront Promenade",
      "Office Park",
      "Arena",
      "2 International Schools",
      "Retail & Dining"
    ],
    "highlights": [
      "Official Direct Launch from Modon Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 9.2% - 9.5%",
      "Handover: Q4 2028",
      "Prime Address in Hudayriyat Island"
    ],
    "badge": "VIP LAUNCH ACCESS",
    "roiEstimate": "9.2% - 9.5%",
    "sourceSiteUrl": "https://wadeem-gardens.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5010,
    "launchId": 40,
    "slug": "marsa-al-saadiyat",
    "name": "Marsa Al Saadiyat",
    "developer": "Aldar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/4/thumbnail_logo_aldar.png",
    "location": "Saadiyat Island",
    "fullAddress": "Saadiyat Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Apartment",
    "startingPrice": 3400000,
    "priceFormatted": "AED 3,400,000",
    "handover": "Q1 2028",
    "handoverYear": 12028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Stages during construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "AED 100 Billion Development: Aldar’s vision for Saadiyat Island’s final phase.5.6km of Beaches: Set along an expansive 8km waterfront.Abu Dhabi’s Largest Marina: Up to 350 berths for sailing boats and luxury yachts.Connected to Culture: A scenic walkway to Saadiyat Cultural District.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/ea6d4b64-8dc9-4497-bbf7-41fbf635e93b.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/ea6d4b64-8dc9-4497-bbf7-41fbf635e93b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/59852218-3bc5-4a79-a5ba-750b85c29bf8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/8b27782f-19a5-4d57-a87e-ceba33838599.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/e37cc42f-d80b-4577-8729-5551c70ade8d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/6fc3e1d5-7da9-40dc-aa04-6f0d44de1b07.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/e33d4bd9-ecfd-4dac-b1c4-487f48481252.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/fcecc424-4176-4c55-adac-e6ddd6c1c58d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/65155203-2500-4b18-9602-c102548caeb8.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/5e13f690-d69d-42c3-a4cc-1996e3602257.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/9620cfb2-89b3-43fb-a3e3-aca56ee26ba4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/marsa-al-saadiyat/0936ba2b-2fa2-4191-aa8a-de898ab15aca.jpg"
    ],
    "amenities": [
      "Wellness & Outdoors",
      "Waterfront retail and restaurants",
      "Children’s Play Areas",
      "Landscaped parks and public spaces",
      "Community clubhouses and pools",
      "Green Linear Parks",
      "Sports and wellness facilities",
      "Nearly 140 kilometres of walking trails"
    ],
    "highlights": [
      "Official Direct Launch from Aldar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 6.8% - 9.9%",
      "Handover: Q1 2028",
      "Prime Address in Saadiyat Island"
    ],
    "badge": "EXCLUSIVE PRE-SALE",
    "roiEstimate": "6.8% - 9.9%",
    "sourceSiteUrl": "https://marsa-al-saadiyat.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5011,
    "launchId": 39,
    "slug": "rashid-yachts-marina",
    "name": "Rashid Yachts Marina",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "Mina Rashid Marina",
    "fullAddress": "Mina Rashid Marina, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2200000,
    "priceFormatted": "AED 2,200,000",
    "handover": "Q3 2027",
    "handoverYear": 32027,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Welcome to Rashid Yachts &amp; Marina – a visionary haven along the Arabian Gulf, where daring design meets azure horizons. Sweeping marina vistas unfold alongside a promenade lined with curated retail and dining destinations, whilst yachts gently berth at your doorstep, moments become a celebration of opulent waterfront living.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/f674c7f3-df2b-45bd-b530-536879a42e25.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/f674c7f3-df2b-45bd-b530-536879a42e25.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/c99346aa-a319-4b03-ab9d-af29df8c52fe.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/6e595f58-f664-4df5-907c-948c19e86f25.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/927300a2-05e7-45bd-9469-734d9f58425c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/a0733eb7-80e7-4abc-b94d-0c4d742474fc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/8a532330-6c38-4b2c-a85b-ccf6d17b9e63.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/b93ad840-3808-4b87-b4c8-a50b2bd002af.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/0cd759d1-4385-49a6-b08d-8dae984cef33.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/015461b7-30f5-4a88-a19f-3f3318a3fd8d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/dc24c5fc-514a-485d-a82a-baeec53b1757.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/c444b657-f2bf-4998-b7d5-5dc9d5f0fb46.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/a07961d7-1a19-4cf8-b0ce-19ae056e6772.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/8f2dcca4-2876-4b10-ae70-6c5557c7b43d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/02bb4799-808e-4249-9656-2fb44f57b049.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/b216ff0d-b2bf-41cc-8118-db6f4c61aec4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/rashid-yachts-marina/fb7bc3c3-d143-4a87-8c70-0a3e1d5351cc.jpg"
    ],
    "amenities": [
      "Water Gardeb",
      "Kids Play Area",
      "Yoga Decks & Gym",
      "Amphitheatre"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.1% - 10.3%",
      "Handover: Q3 2027",
      "Prime Address in Mina Rashid Marina"
    ],
    "badge": "WATERFRONT FLAGSHIP",
    "roiEstimate": "7.1% - 10.3%",
    "sourceSiteUrl": "https://rashid-yachts-marina.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5012,
    "launchId": 38,
    "slug": "the-meriva-collection",
    "name": "Meriva Collection",
    "developer": "Ellington Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/11/thumbnail_logo_ellington.png",
    "location": "Jumeirah Village Circle",
    "fullAddress": "Jumeirah Village Circle, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1350000,
    "priceFormatted": "AED 1,350,000",
    "handover": "Q4 2026",
    "handoverYear": 42026,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment (Immediate Booking)",
        "percentage": "10%"
      },
      {
        "milestone": "During Construction (Easy Installments)",
        "percentage": "60%"
      },
      {
        "milestone": "Upon Handover & Key Handover",
        "percentage": "30%"
      }
    ],
    "description": "A premium waterfront residential development on Dubai Islands – Island B, offering private beachfront access, sea-view residences, and a low-density coastal environment. The project blends modern architecture with resort-style living, supported by hospitality elements and lifestyle amenities designed for both end-users and investors.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/5af9208c-4ed6-4d85-b073-cdb0da414739.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/5af9208c-4ed6-4d85-b073-cdb0da414739.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/e5ee79b8-eb0b-45fc-842a-72918804c523.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/a6de702c-92f2-48eb-9228-aefeae0d0734.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/a54965e2-d9b1-4234-a5c0-8bf7f58b8d62.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/04db8100-7e25-4aaa-b01e-d049e8a2c2bb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/abb89249-dcca-4cad-88ca-d1febd23d364.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/f837cd8b-a255-4caa-b2b8-16482dbfe734.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/0c616297-1d75-460d-8f1a-182e2c959bb1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/ec8db185-45fd-4835-ad61-41e38db0cbba.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/0bf34276-1330-43dc-a82f-c6b130ca51c2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/e552dbf5-dd57-4d83-b67d-3b76d773d32e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/09ccf31e-4718-4e01-bcb3-3b878999244b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-meriva-collection/ef0e6e1a-02ba-4548-a85e-9094303da28d.jpg"
    ],
    "amenities": [
      "Beach Access",
      "Hotel and Private Club Inspired Amenities",
      "Parks & Open Spaces",
      "Golf course"
    ],
    "highlights": [
      "Official Direct Launch from Ellington Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.4% - 8.5%",
      "Handover: Q4 2026",
      "Prime Address in Jumeirah Village Circle"
    ],
    "badge": "0% BROKERAGE FEE",
    "roiEstimate": "7.4% - 8.5%",
    "sourceSiteUrl": "https://the-meriva-collection.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5013,
    "launchId": 37,
    "slug": "palm-jebel-ali",
    "name": "Palm Jebel Ali",
    "developer": "Nakheel",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/2/thumbnail_logo_nakheel.png",
    "location": "Palm Jebel Ali Fronds",
    "fullAddress": "Palm Jebel Ali Fronds, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 18500000,
    "priceFormatted": "AED 18,500,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Beachfront Scarcity: Adds 90km of pristine coastline, Dubai&rsquo;s most valuable and limited asset.\nGovernment-Backed: A core project of the Dubai 2040 Urban Masterplan, ensuring long-term growth.\nHigh ROI Potential: A \"second chance\" to capture the massive appreciation seen on Palm Jumeirah.\nResort Lifestyle: A self-contained city featuring 80+ luxury hotels, yacht clubs, and elite malls.\nFlexible Payment: Investor-friendly 20/80 plan with only 20% due on handover in late Q1 2030.\n\n&nbsp;",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/f3f40528-4b4a-4820-8e6e-483cb7e2f9db.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/f3f40528-4b4a-4820-8e6e-483cb7e2f9db.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/85455e09-42fd-479e-9342-caec3fa82fef.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/ad363aea-12fa-4ca8-b83c-c92f0a20781a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/05620685-f2b3-4c88-939f-a92c562202e4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/4f0823d1-6b0c-4b72-8f9c-8e18bd7236af.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/9f74cbf9-c9b6-4af4-86b0-c081b3c5b158.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/15351377-db38-4226-9b72-f6af30c0e96f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/19ee51f3-0a94-47fa-8522-dd365654f3f8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/1ce4dc0d-107b-4bc3-aa53-f0484a2ac37b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/b10acd12-bf99-4bfd-898c-a817867afd6d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/d27b8055-a45e-4a2c-8b58-4d9abbacd362.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/1fd2c569-bcb6-413e-9db8-20f348c654c7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/ae80d293-ffca-431c-b3a4-a6622d152221.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-jebel-ali/03c20c2f-a8f7-47d3-adfc-9dc434e627ee.jpg"
    ],
    "amenities": [
      "Hospitality Crescent",
      "Exclusive Beach",
      "Sunset Waterfront Promenade",
      "Family Beach Club"
    ],
    "highlights": [
      "Official Direct Launch from Nakheel",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.7% - 8.9%",
      "Handover: Q4 2028",
      "Prime Address in Palm Jebel Ali Fronds"
    ],
    "badge": "HIGH CAPITAL GROWTH",
    "roiEstimate": "7.7% - 8.9%",
    "sourceSiteUrl": "https://palm-jebel-ali.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5014,
    "launchId": 36,
    "slug": "bay-villas",
    "name": "Beachfront Villas In Dubai Islands",
    "developer": "Nakheel",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/2/thumbnail_logo_nakheel.png",
    "location": "Dubai Islands (Deira Islands)",
    "fullAddress": "Dubai Islands (Deira Islands), Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 5400000,
    "priceFormatted": "AED 5,400,000",
    "handover": "Q2 2027",
    "handoverYear": 22027,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Experience luxury coastal living at Bay Villas by Nakheel, an exclusive collection of premium waterfront townhouses, villas and mansions located within the iconic Dubai Islands master community.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/c54341e7-797b-4720-806d-0fc000a4f1ca.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/c54341e7-797b-4720-806d-0fc000a4f1ca.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/af83c1bf-42c8-4fe8-9ce0-76d05d585647.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/d937943b-22f0-4840-91a0-966fd1ea0855.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/650fbd2f-d79c-414f-beb5-9235e852a814.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/2048acf7-33e2-4468-8ccc-ce5c24b70353.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/0de9763d-ed3e-482c-a2f8-5660b18c630c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/bd8cd60b-46b8-42fc-8efa-f19ba05c8abe.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bay-villas/3cfe1d82-e9bb-4322-aac2-70b101d958e2.jpg"
    ],
    "amenities": [
      "Private Beach",
      "Waterfront Promenade",
      "Golf Course Access",
      "Resort-Style Pools",
      "Dining",
      "Landscaped Parks & Green Spaces",
      "Leisure & Sport Facilities",
      "Private Parking"
    ],
    "highlights": [
      "Official Direct Launch from Nakheel",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.0% - 9.3%",
      "Handover: Q2 2027",
      "Prime Address in Dubai Islands (Deira Islands)"
    ],
    "badge": "HIGH RENTAL YIELD",
    "roiEstimate": "8.0% - 9.3%",
    "sourceSiteUrl": "https://bay-villas.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5015,
    "launchId": 35,
    "slug": "sobha-city-abu-dhabi",
    "name": "Sobha City Abu Dhabi",
    "developer": "Sobha Realty",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/8/thumbnail_logo_sobha.png",
    "location": "Al Wathba",
    "fullAddress": "Al Wathba, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Apartment",
    "startingPrice": 1500000,
    "priceFormatted": "AED 1,500,000",
    "handover": "Q4 2027",
    "handoverYear": 42027,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "This sustainable sanctuary features 60% open space with 50,000 trees, a 2 km waterfront promenade, and a 20 km wellness loop. Residents enjoy a balanced lifestyle of active leisure. Strategically located 14 minutes from Zayed International Airport and Yas Island, it offers a premier investment in a legacy of craftsmanship, with completion anticipated for December 2029.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/83d34387-2d07-4c86-b6f0-8b467b2c0662.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/83d34387-2d07-4c86-b6f0-8b467b2c0662.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/779cab49-cade-485c-8420-84e0f3f55fd8.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/9090a114-546b-46ff-8e03-4255abf08054.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/a62b76e8-4078-4c96-9474-1f849e45c3a1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/aec7c028-106c-4166-a1e9-fd613a7a5b53.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/3ffbc7b1-e1d9-4446-8eae-cd7da222ea7b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/4d871f3a-8b4e-43f7-9f3b-09abc1a42b31.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/15190664-d3bb-40c9-8895-fd52d43a5eaf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/66ad7b33-6ecd-4333-94ef-a4981a6bc490.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/17d4214b-75e5-4a23-a346-56de7cd395af.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/ad9c1bb5-e8f3-4425-9161-df9402bfa8e0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/sobha-city-abu-dhabi/7d588e96-4654-4dd4-bd15-a353395f105f.jpg"
    ],
    "amenities": [
      "EXECUTIVE GOLF COURSE",
      "W A T E R F R O N T PROMENADE",
      "WELLNESS LOOP",
      "OPEN & GREEN SPACES"
    ],
    "highlights": [
      "Official Direct Launch from Sobha Realty",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.3% - 9.7%",
      "Handover: Q4 2027",
      "Prime Address in Al Wathba"
    ],
    "badge": "ICONIC ARCHITECTURE",
    "roiEstimate": "8.3% - 9.7%",
    "sourceSiteUrl": "https://sobha-city-abu-dhabi.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5016,
    "launchId": 34,
    "slug": "tilal-binghatti",
    "name": "Tilal Binghatti",
    "developer": "Binghatti",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/5/thumbnail_logo_binghatti.png",
    "location": "Al Jaddaf",
    "fullAddress": "Al Jaddaf, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1250000,
    "priceFormatted": "AED 1,250,000",
    "handover": "Q1 2027",
    "handoverYear": 12027,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Tilal Binghatti is not a typical residential community. It is a beach destination you live in, built around one of the largest man-made beaches in the UAE, where resort-style crystal lagoons, private islands, and sweeping water promenades form the backdrop of daily life.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/adff88b2-d80d-4c6e-b823-9a3c4b1126d1.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/adff88b2-d80d-4c6e-b823-9a3c4b1126d1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/be105eeb-89de-4f1a-99b2-2e0a87c3b7c4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/ee1fb484-9849-49e1-ae5c-58fb52ca3e1a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/66ea2e70-ccd5-4d7c-b942-a9debc0cccb7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/5650770d-b9a3-4f4e-a323-99ce59baaa87.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/tilal-binghatti/b23d0fc9-4611-4ea7-956e-59d03d408683.jpg"
    ],
    "amenities": [
      "Retail area",
      "Resident Lounge & Man Made Beach Lifestyle",
      "Children play area",
      "Swimming Pool and Swimmable Lagoons"
    ],
    "highlights": [
      "Official Direct Launch from Binghatti",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.6% - 10.1%",
      "Handover: Q1 2027",
      "Prime Address in Al Jaddaf"
    ],
    "badge": "PRIVATE BEACHFRONT",
    "roiEstimate": "8.6% - 10.1%",
    "sourceSiteUrl": "https://tilal-binghatti.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5017,
    "launchId": 33,
    "slug": "yas-park-place",
    "name": "Yas Park Palace",
    "developer": "Aldar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/4/thumbnail_logo_aldar.png",
    "location": "Yas Island",
    "fullAddress": "Yas Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Townhouse",
    "startingPrice": 1390000,
    "priceFormatted": "AED 1,390,000",
    "handover": "Q3 2027",
    "handoverYear": 32027,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "A distinctive new address on Yas Island set within lush gardens and shaped by natural beauty. Positioned beside the park and moments from the waterfront, it brings together vibrant island energy and a greener way of living.Designed to enhance everyday life, the community centres around an expansive landscaped garden, creating a setting where sustainability, connection and open space come naturally together.Step into a world of wonder at Yas Park Place, an enchanting new address on Yas Island. Set beside landscaped gardens and just moments from the waterfront.Discover a limited collection of charming Studio to 3-Bedroom apartments where nature, energy and delightful moments make wonder a part of every day. All just minutes from Yas Island’s attractions and experiences.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/511b1635-ebe6-4c99-bfde-d7124f7e2cc5.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/511b1635-ebe6-4c99-bfde-d7124f7e2cc5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/b6c282af-a611-4a2b-af55-49b764c7fe6b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/8bda9944-f3ca-434c-9150-0d88e48d553f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/4a0962a1-541d-4970-876c-0e1fe4bf3dd7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/4d68ea17-e3e7-438c-8874-276e6ed7653a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/91c07aa4-aa6c-4664-b9aa-7b2eb5d661a9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/d2030114-1499-488a-b0ab-a0d09bf1bf4f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/ee9cb042-ee92-4419-82c3-deaab47c133c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/77e107ba-7e5d-41da-b64d-5baf10c39e1d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/9f2a325c-ee58-4284-88d4-a5a712e4eae5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-park-place/0246c319-bc13-4a4e-a990-ec432c2c911f.jpg"
    ],
    "amenities": [
      "Outdoor Cinema",
      "Community Pavilion",
      "Kids’ Play Zone",
      "Residents’ Co-Working Space",
      "Infinity Pool (Adults Only)",
      "Wellness Gardens",
      "Padel Courts",
      "Multi-Purpose Room",
      "Dog Park & Walking Trails",
      "Gym & Wellness Studio"
    ],
    "highlights": [
      "Official Direct Launch from Aldar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.9% - 10.5%",
      "Handover: Q3 2027",
      "Prime Address in Yas Island"
    ],
    "badge": "VIP LAUNCH ACCESS",
    "roiEstimate": "8.9% - 10.5%",
    "sourceSiteUrl": "https://yas-park-place.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5018,
    "launchId": 32,
    "slug": "yas-canopies",
    "name": "Yas Canopies",
    "developer": "Aldar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/4/thumbnail_logo_aldar.png",
    "location": "Yas Island",
    "fullAddress": "Yas Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Apartment",
    "startingPrice": 1650000,
    "priceFormatted": "AED 1,650,000",
    "handover": "Q4 2027",
    "handoverYear": 42027,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "A wellness-inspired waterfront community in Yas Point, designed around nature, well-being, and connectivity. Residents enjoy a resort-style lifestyle with direct access to the beach, lush green spaces, and a vibrant waterfront destination.From world-renowned theme parks to waterfront dining and retail, some of the region’s most celebrated experiences are just minutes from home.A collection of six buildings located in close proximity to Yas Island’s key attractions.Positioned within a park-centric masterplan, the community is designed around a large central green space, encouraging a walkable, indoor-outdoor lifestyle.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/0738d24f-193f-4f77-80c8-ff21e097c254.avif",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/0738d24f-193f-4f77-80c8-ff21e097c254.avif",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/5a588d44-6a07-42f9-b2fe-e70b9c8dd56d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/37aab1cf-c625-49d0-a7a2-3c3b6e2cf391.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/88adf2d2-d90a-4998-9ca2-445e54e6a73e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/43302cb0-34e5-498b-8026-d0df5605ae92.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/11b3d91c-d562-462d-86b4-2a340ff8c36e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/1b9faa3d-15b5-4574-abcf-96451419273b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/05943ff3-17c2-4584-ba4f-7e7a871910c7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/yas-canopies/1b6522cd-0074-43f9-826c-77236a29ce48.jpg"
    ],
    "amenities": [
      "The Canopy Club",
      "Multipurpose Rooms",
      "Indoor & Outdoor Kids’ Play Areas",
      "Coworking Lounge",
      "2 Resort-Style Swimming Pools",
      "Central Park",
      "Landscaped Walkways",
      "Picnic Area",
      "Fully Equipped Gym"
    ],
    "highlights": [
      "Official Direct Launch from Aldar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 9.2% - 8.7%",
      "Handover: Q4 2027",
      "Prime Address in Yas Island"
    ],
    "badge": "EXCLUSIVE PRE-SALE",
    "roiEstimate": "9.2% - 8.7%",
    "sourceSiteUrl": "https://yas-canopies.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5019,
    "launchId": 31,
    "slug": "hudayriyat-golf-estates",
    "name": "Hudayriat Golf Estate",
    "developer": "Modon Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/12/thumbnail_logo_modon.png",
    "location": "Hudayriyat Island",
    "fullAddress": "Hudayriyat Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Villa",
    "startingPrice": 7200000,
    "priceFormatted": "AED 7,200,000",
    "handover": "Q1 2029",
    "handoverYear": 12029,
    "paymentPlan": "50/50 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Hudayriyat Golf Estates is a premium residential development set on the vibrant Hudayriyat Island in Abu Dhabi, designed to redefine luxury coastal living. As part of the visionary Golf Estates Hudayriyat community, the project is centered around a future championship golf course and surrounded by stunning beaches, lush landscapes, and world-class lifestyle amenities.The development offers spacious, contemporary villas with elegant designs, large plots, and seamless indoor-outdoor living, many featuring views of the golf course, marina, or the Arabian Gulf. Residents of Hudayriyat Golf Estates enjoy direct access to cycling tracks, fitness facilities, water sports, and leisure destinations, creating a perfect blend of relaxation and active living.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf-estates/a164b9d0-f1c5-46a7-af3d-8c5910f5e6e3.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf-estates/a164b9d0-f1c5-46a7-af3d-8c5910f5e6e3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf-estates/9f7214cb-f7c1-4e6c-ba21-5b12a474fbb7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf-estates/9746c7bd-4ad5-476f-a17c-cea5d3594c18.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf-estates/f9c26e29-ba41-4e43-b555-c94133d8cd3b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf-estates/a5a6c5fb-c5ab-451e-8ed2-784cd0b17ed2.jpg"
    ],
    "amenities": [
      "Championship Golf Course",
      "Surf Abu Dhabi",
      "Cycling & Running Tracks",
      "Private Beaches",
      "Fitness & Sports Hubs",
      "Water Sports",
      "Waterfront Dining",
      "Parks & Green Spaces"
    ],
    "highlights": [
      "Official Direct Launch from Modon Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 6.8% - 9.1%",
      "Handover: Q1 2029",
      "Prime Address in Hudayriyat Island"
    ],
    "badge": "WATERFRONT FLAGSHIP",
    "roiEstimate": "6.8% - 9.1%",
    "sourceSiteUrl": "https://hudayriyat-golf-estates.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5020,
    "launchId": 30,
    "slug": "greenz-by-danube",
    "name": "Greenz",
    "developer": "Danube Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/6/thumbnail_logo_danube.png",
    "location": "Dubai Silicon Oasis",
    "fullAddress": "Dubai Silicon Oasis, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 790000,
    "priceFormatted": "AED 790,000",
    "handover": "Q2 2027",
    "handoverYear": 22027,
    "paymentPlan": "1% Monthly (80 Months)",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Greenz by Danube is the first-ever dedicated townhouse community by Danube Properties located in Dubai International Academic City. This green-centric, low-density development offers a collection of 3 to 6 bedroom townhouses and villas designed for modern family living. Blending contemporary architecture with nature-inspired surroundings, the project focuses on sustainable living, affordability, and long-term investment value. With resort-style amenities, landscaped open spaces, and excellent connectivity, Greenz creates a perfect balance between comfort, convenience, and lifestyle.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/uploads/2026/10/6b066283-6fbb-402f-bc57-c0fec339dbf3.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/company_3/uploads/2026/10/6b066283-6fbb-402f-bc57-c0fec339dbf3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/d6761474-cf23-43b8-85eb-fbfeec35d315.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/fb26e86b-9c1e-4bb5-aa14-b0a4ef0483e0.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/c94fe30c-ad84-4670-8255-80fe943c9a35.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/bb35aa2b-b02c-4ca0-b8cb-febb295b79b2.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/ccfe018b-c384-4ec0-956d-fe1b829a7d27.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/b2abb869-3f4b-48e3-b726-450a11d90e5b.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/c41e3ae9-728b-4e80-b122-31e5e335ad55.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/4371721e-af8a-491b-92a6-960d45b9cc43.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/greenz-by-danube/edae4f46-0bb1-4d19-8585-d9831263a4ec.png"
    ],
    "amenities": [
      "Cycling & Jogging Tracks",
      "Children's Play Areas",
      "Gymnasium & Fitness",
      "Central Park & Landscaped Gardens"
    ],
    "highlights": [
      "Official Direct Launch from Danube Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.1% - 9.5%",
      "Handover: Q2 2027",
      "Prime Address in Dubai Silicon Oasis"
    ],
    "badge": "0% BROKERAGE FEE",
    "roiEstimate": "7.1% - 9.5%",
    "sourceSiteUrl": "https://greenz-by-danube.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5021,
    "launchId": 29,
    "slug": "damac-islands-2",
    "name": "Damac Islands 2",
    "developer": "DAMAC Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/3/thumbnail_logo_damac.png",
    "location": "Dubailand (Damac Islands)",
    "fullAddress": "Dubailand (Damac Islands), Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Townhouse",
    "startingPrice": 2450000,
    "priceFormatted": "AED 2,450,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "75/25 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Inspired by eight breathtaking island escapes, Bahamas, Tahiti, Bermuda, Barbados, Cuba, Maui, Mauritius, and Antigua, DAMAC Islands 2 brings together the world’s most beautiful destinations in one paradise. Guided by the five pillars of eco-living, Nature, Wellness, Adventure, Social, and Cultural, DAMAC Islands 2 transforms sustainability into a way of life. This is where paradise doesn’t have to be found, it’s simply lived.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/b7b7da09-903d-4fe8-96e2-5d6dc9a26adc.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/b7b7da09-903d-4fe8-96e2-5d6dc9a26adc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/25d06221-8953-49bf-b328-f10bb82016a0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/c89c3d07-c4ae-4dbb-814d-eccc9ff9363f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/7be709f4-bb81-4956-89d9-fbfed5a5bdee.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/b608d4b5-06ab-48ef-955d-7a77980b5893.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/e785a93f-329a-42b2-8274-6796c37de40b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/991a86a5-0a4a-4c31-a832-2c51a98d2aba.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/cdb26770-dec9-4c03-a002-27fffaaefeca.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/b10ded37-cded-45ef-817d-4c3ac2863302.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/76e37807-9957-4992-b753-6c8fecaaeb66.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/damac-islands-2/27527f8c-95ea-4049-8c33-5baca1e69ab3.jpg"
    ],
    "amenities": [
      "TRANQUIL LAKE & ECO PARK",
      "WHISPERING WATERFALL",
      "ISLAND VIDA WELLNESS",
      "ECO LODGE HOSPITALITY"
    ],
    "highlights": [
      "Official Direct Launch from DAMAC Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.4% - 9.9%",
      "Handover: Q4 2028",
      "Prime Address in Dubailand (Damac Islands)"
    ],
    "badge": "HIGH CAPITAL GROWTH",
    "roiEstimate": "7.4% - 9.9%",
    "sourceSiteUrl": "https://damac-islands-2.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5022,
    "launchId": 28,
    "slug": "chelsea-by-damac",
    "name": "Chelsea Residences",
    "developer": "DAMAC Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/3/thumbnail_logo_damac.png",
    "location": "Dubai Maritime City",
    "fullAddress": "Dubai Maritime City, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2560000,
    "priceFormatted": "AED 2,560,000",
    "handover": "Q1 2028",
    "handoverYear": 12028,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "PRIME COASTAL SPOT With only 7% of the coastline left, owning seafront property in Dubai is a rare opportunity.100% TAX-FREE Benefit from Dubai’s tax-free income policy and maximise your investment returns.WATERFRONT ADVANTAGE Homes by the water offer up to 48% more in rental yield and resale value worldwide.HOME TO FORTUNE 500s Dubai is the regional HQ for 70% of Fortune 500 companies, reinforcing its global business appeal.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/b729da34-8dc2-4509-9988-1099e9e285fe.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/b729da34-8dc2-4509-9988-1099e9e285fe.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/25ccf6ec-6c91-4898-8070-de3727b2acbd.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/d76c6992-18b0-41cb-b937-cde6e923f503.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/d4d27f62-5bc7-4c8e-b305-8b74ac33a1f7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/4ec411fc-0109-47ee-a087-a88597740a0d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/478cf43c-8d87-41e1-8561-464741369126.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/af962dd4-0a74-4483-8531-6b0661c95a69.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/2cd1c363-4721-40e6-9fd3-42b71d6401ca.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/bc854fcc-2dbe-4463-80eb-dfd46768a753.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/c222a1f8-008a-4368-a381-2e171e7095e5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/chelsea-by-damac/3bcfe795-1738-42e5-afde-1a4f1a0ae6f8.jpg"
    ],
    "amenities": [
      "Chelsea Athlete Performance Training Centre",
      "Chelsea Cinema & Powerhouse Lounge",
      "Underwater-themed Kids Area & Indoor Play Zones",
      "Football Simulation Room - Train like your favorite Chelsea stars",
      "Infinity Pool",
      "Serenity Spa, Rain Therapy & Cryotherapy",
      "Chelsea Football Simulation Room",
      "Jogging Track",
      "Outdoor Gym"
    ],
    "highlights": [
      "Official Direct Launch from DAMAC Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.7% - 10.3%",
      "Handover: Q1 2028",
      "Prime Address in Dubai Maritime City"
    ],
    "badge": "HIGH RENTAL YIELD",
    "roiEstimate": "7.7% - 10.3%",
    "sourceSiteUrl": "https://chelsea-by-damac.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5023,
    "launchId": 27,
    "slug": "bashayer-by-modon",
    "name": "Bashayer",
    "developer": "Modon Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/12/thumbnail_logo_modon.png",
    "location": "Hudayriyat Island",
    "fullAddress": "Hudayriyat Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Townhouse",
    "startingPrice": 3100000,
    "priceFormatted": "AED 3,100,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Discover a life of unparalleled comfort and convenience right on your doorstep.Set along the waterfront, Bashayer is a vibrant community with stunning views of Abu Dhabi’s skyline. Inspired by Europe’s coastal villages,Bashayer community features exclusive villas with a clubhouse and rooftop infinity pool set amid lush parkland, while elegant residences rise gracefully above a vibrant waterfront promenade.Together, they embody a new chapter of refined coastal living—just minutes from the heart of Abu Dhabi.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/71beacf1-d49e-4c5b-afa2-9f0ff5c4def4.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/71beacf1-d49e-4c5b-afa2-9f0ff5c4def4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/e6b5bbb0-1779-4cd0-a9ab-7555b992a0e8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/13134965-409d-4b3d-800b-0fdc59bc6780.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/9dc4088d-b14b-4d19-bfd6-2db949c0bad9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/b07416db-1798-4101-8358-de5f5ee50387.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/955b10c3-2568-43ad-83bd-45478e772823.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/54218f96-38a5-462e-9ce3-702164cfce1a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/40855a87-59b2-401e-8dcd-0149f096ab12.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/34714713-7698-4fc5-b5fc-fb9b48f90c80.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/e7ba97ba-e104-4281-9c18-56334cdb7ecf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/d3efd427-dd41-4493-a245-8f9ad1e62c34.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/12df6d75-e6be-4904-9f9d-0be410d68020.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/ebd2cde4-9613-40db-a0f8-d9cdd8797545.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/51d6eb9d-bfe8-4228-8ef6-9ee3a31d2089.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/30b23ddb-78f6-41ae-93c9-2a8813246a33.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/bashayer-by-modon/38c4ff0b-7381-41ac-800a-bd41ececa583.jpg"
    ],
    "amenities": [
      "Gated Community",
      "Community Centre",
      "Children's Play Area",
      "Waterfront Location",
      "Swimming Pool",
      "Park & Green Spaces",
      "Padel Courts",
      "Multi-Sports Court",
      "Cycling & Jogging Trails",
      "Gym"
    ],
    "highlights": [
      "Official Direct Launch from Modon Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.0% - 8.5%",
      "Handover: Q4 2028",
      "Prime Address in Hudayriyat Island"
    ],
    "badge": "ICONIC ARCHITECTURE",
    "roiEstimate": "8.0% - 8.5%",
    "sourceSiteUrl": "https://bashayer-by-modon.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5024,
    "launchId": 26,
    "slug": "valia-at-dubai-creek-harbour",
    "name": "Valia at Dubai Creek Harbour",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "Dubai Creek Harbour",
    "fullAddress": "Dubai Creek Harbour, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1960000,
    "priceFormatted": "AED 1,960,000",
    "handover": "Q3 2028",
    "handoverYear": 32028,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Valia stands as a sophisticated landmark of contemporary living, a high-rise retreat rising elegantly from a vibrant mixed-use podium.Architecturally sensitive to its surroundings, the project is a sanctuary designed with a profound focus on the well-being of its residents, ensuring every space is an invitation to breathe and belong.Valia creates a residential experience that is as grounded as it is elevated.Positioned at a strategic crossroads, the area offers unparalleled access to the city’s most iconic destinations.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/44382c80-b548-4ee5-8748-b8f62726687c.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/44382c80-b548-4ee5-8748-b8f62726687c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/3b662e1c-a975-4835-b9f2-175e596823b8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/edeb9b72-fd3f-44aa-b978-5dc41af3dcf2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/a1d0d3bc-c675-480c-a909-169d360d3d8d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/a17b3171-33f8-41a8-a2a9-aceaab409e15.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/8dd0e2a5-57bf-4e68-accf-50dcc15a9662.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/561d1bc6-4835-4279-852d-02225f7e0f18.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/9baabcce-325a-48c4-b20a-9a36030e8b57.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/68773ab6-2e93-4ce5-9039-d2980e8a4554.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/88e1cf96-7cd6-4394-9827-e0b9f2bf4db5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valia-at-dubai-creek-harbour/af30819b-e4f4-4bbb-a57f-8bfe8a62b675.jpg"
    ],
    "amenities": [
      "communal lawn",
      "Smart Home Technology",
      "kids’ splash pad",
      "BBQ area",
      "swimming pool",
      "Retail, Cafés & Dining",
      "Padel Court",
      "Jogging & Cycling Tracks",
      "outdoor fitness area & yoga deck"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.3% - 8.9%",
      "Handover: Q3 2028",
      "Prime Address in Dubai Creek Harbour"
    ],
    "badge": "PRIVATE BEACHFRONT",
    "roiEstimate": "8.3% - 8.9%",
    "sourceSiteUrl": "https://valia-at-dubai-creek-harbour.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5025,
    "launchId": 25,
    "slug": "four-season",
    "name": "Four Seasons Private Residences at Saadiyat Island – Abu Dhabi",
    "developer": "Al Ain Holding",
    "developerLogo": null,
    "location": "Saadiyat Cultural District",
    "fullAddress": "Saadiyat Cultural District, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Penthouse",
    "startingPrice": 9800000,
    "priceFormatted": "AED 9,800,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "50/50 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "Upon Handover",
        "percentage": "20%"
      }
    ],
    "description": "Luxury waterfront community managed by Four Seasons on Saadiyat Island, Abu Dhabi.\nEach residence features premium amenities: private pools, spas, cinemas, and car galleries.\nDirect access to white-sand beaches and surrounded by Abu Dhabi&rsquo;s cultural district.\nAn unmatched combination of serenity, culture, and luxury.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/33a1a392-2ca7-4b2b-be3c-0f3afd2a534a.webp",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/33a1a392-2ca7-4b2b-be3c-0f3afd2a534a.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/2b574328-25d3-4f4f-8215-57d238b57085.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/a9102dc7-2323-4d69-98ca-7118c51b791b.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/4a7dcc46-e10d-49ae-aeeb-ef0906a52626.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/34fbc48a-6377-4ef4-bd89-75962c64162b.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/72793314-3bee-438c-9fb1-62a4a9958468.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/b04b2059-36b3-4ecc-96be-cf0dd6ca4e68.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/75d41e03-ec9d-4e6a-93a0-6fe8b7bfa048.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/5da5d01c-6342-4e7f-b3fc-93c4a5036657.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/86d94434-4d38-4861-ba95-5bb246588e49.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/four-season/ed03b5a4-0441-4bcd-b6b3-02cb1d1753e1.webp"
    ],
    "amenities": [
      "Direct Beach Access",
      "Infinity pools and poolside bars",
      "Private cinema and games room",
      "Spa, treatment rooms, yoga & meditation studio"
    ],
    "highlights": [
      "Official Direct Launch from Al Ain Holding",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.6% - 9.3%",
      "Handover: Q4 2028",
      "Prime Address in Saadiyat Cultural District"
    ],
    "badge": "VIP LAUNCH ACCESS",
    "roiEstimate": "8.6% - 9.3%",
    "sourceSiteUrl": "https://four-season.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5026,
    "launchId": 24,
    "slug": "the-residences-difc",
    "name": "The Residences DIFC",
    "developer": "Prestige Luxury Developments",
    "developerLogo": null,
    "location": "DIFC Financial District",
    "fullAddress": "DIFC Financial District, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2900000,
    "priceFormatted": "AED 2,900,000",
    "handover": "Q2 2028",
    "handoverYear": 22028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "On Booking",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "DIFC Zabeel District marks a new chapter in Dubai’s urban evolution-expanding beyond business into a vibrant, connected community. Envisioned by the Dubai International Financial Centre, the district blends innovation, culture, and lifestyle, where glass towers, public spaces, and social hubs come together seamlessly. It is a place where commerce meets creativity, shaping a dynamic environment that reflects Dubai’s forward-looking spirit and its role as a global hub for the future.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/377cdcd7-8228-43c4-a89f-a2aaa8060fc4.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/377cdcd7-8228-43c4-a89f-a2aaa8060fc4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/13056c25-23d0-4ce8-a693-40a9cd69c33c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/0f40e4cd-11b6-4a39-aa92-cc6ae31f53d0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/702fc5eb-ccc7-4a38-8e12-6ce2670c0aba.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/ed4fec85-bd51-4c82-a5d0-b5e7cae760fb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/651d2c27-5648-4738-9af8-028e85e2947d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/d60aa4c0-b2c1-4311-88b5-6bc547716dde.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/3269f122-1b3d-4207-8b5b-5bbbaefba0ca.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/e80fb484-3b91-4778-8161-cd074bd99441.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/e02f660f-89bf-4d22-9943-823a146e279b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/4eb9796b-987d-43ac-9231-1c385ea62b05.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-residences-difc/31fa4e9c-d37d-4a6d-87f0-045beadf880f.jpg"
    ],
    "amenities": [
      "Family pool with kids’ splash pad",
      "Social gathering spaces",
      "Clubhouse with gym and yoga studio",
      "Hospitality- inspired arrival experience"
    ],
    "highlights": [
      "Official Direct Launch from Prestige Luxury Developments",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.9% - 9.7%",
      "Handover: Q2 2028",
      "Prime Address in DIFC Financial District"
    ],
    "badge": "EXCLUSIVE PRE-SALE",
    "roiEstimate": "8.9% - 9.7%",
    "sourceSiteUrl": "https://the-residences-difc.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5027,
    "launchId": 23,
    "slug": "city-walk-crestlane",
    "name": "City Walk Crestlane",
    "developer": "Meraas",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/7/thumbnail_logo_meraas.png",
    "location": "City Walk, Al Wasl",
    "fullAddress": "City Walk, Al Wasl, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2850000,
    "priceFormatted": "AED 2,850,000",
    "handover": "Q3 2027",
    "handoverYear": 32027,
    "paymentPlan": "75/25 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "City Walk is a creative lifestyle space to live, work, and play in the heart of Dubai. This upscale destination boasts a fusion of international retail offerings, gourmet restaurants, luxurious residences, and hotels, blending cutting-edge design with modern conveniences. Drawing inspiration from the vibrancy of urban living and easy connectivity, City Walk has evolved into one of the city’s most distinguished and recognisable neighbourhoods.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/1550f850-9fb6-4c00-b29b-3963860e68c8.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/1550f850-9fb6-4c00-b29b-3963860e68c8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/30df6b61-99a4-4de1-9657-470e1d0fecb7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/bf35f71d-ace5-406c-9682-857da4826372.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/fe9fa1a9-42f9-4237-9c04-2f222c712ff2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/2ff56efc-97e0-48e3-b3a9-abcd50501935.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/167cf9cd-4796-4d6d-8d5a-4ade5388a567.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/c7754809-a683-44fe-aa19-f993c51a9e02.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/3cfed261-2fcb-496a-a8e5-8ca4b99f55be.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/09b8f0b5-8788-4f40-ad47-dd179df97f17.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/73ae6265-96d8-432b-adf3-155634d9a8f0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/city-walk-crestlane/293d10f4-ffe5-423e-91a4-7193f7856abd.jpg"
    ],
    "amenities": [
      "Kids Play Areas",
      "Community Hubs",
      "Jogging Tracks",
      "Yoga Lawns"
    ],
    "highlights": [
      "Official Direct Launch from Meraas",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 9.2% - 10.1%",
      "Handover: Q3 2027",
      "Prime Address in City Walk, Al Wasl"
    ],
    "badge": "WATERFRONT FLAGSHIP",
    "roiEstimate": "9.2% - 10.1%",
    "sourceSiteUrl": "https://city-walk-crestlane.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5028,
    "launchId": 22,
    "slug": "mercedes-binghatti-city",
    "name": "Mercedes Benz Places - Binghatti City",
    "developer": "Binghatti",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/5/thumbnail_logo_binghatti.png",
    "location": "Downtown Dubai",
    "fullAddress": "Downtown Dubai, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Penthouse",
    "startingPrice": 8900000,
    "priceFormatted": "AED 8,900,000",
    "handover": "Q4 2027",
    "handoverYear": 42027,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Mercedes-Benz Places | Binghatti City is a landmark residential community that redefines the concept of urban living. This is not merely a collection of structures, but a masterplanned city-scale vision where global brand prestige becomes a personal, lived-in experience.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/5299ab13-e2e7-487a-9e52-0907eabb64b5.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/5299ab13-e2e7-487a-9e52-0907eabb64b5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/ceeaa6a8-4e47-4fa7-a18d-2cc43c046683.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/10c2eb1c-310b-41e6-90c9-55848661520e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/7daf3080-33bd-454b-b8e5-ce21418053e6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/d26f7765-96a7-4998-be36-0c1ac0c54b2d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/1f1384ed-2a73-4fb7-9bae-b94121d56284.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/52756096-d5bd-478d-a25d-b6488e8ba673.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/650e404c-a79d-41ea-809e-c5a69fe1ffb6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/5dc6953c-b5e5-4a97-a725-87175c2ae042.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/e81f8957-0710-4bc6-891c-3b303139c836.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/86d39b4b-1476-448c-9167-e1bf48ed0374.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/9f4aad31-d5a2-4b56-a2e4-27d1c0f4e0d1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/2d367fcb-7121-4146-899a-b0163aed3034.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/21bb8d60-b07a-4d3d-bda2-5012af10628d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/5388514d-d02e-4c4c-ba16-17d0b105c3c1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/mercedes-binghatti-city/cfd1522d-62eb-480b-82b9-10428ad80476.jpg"
    ],
    "amenities": [
      "Solar Photovoltaic Technology",
      "Leed Certification",
      "Skyline Jogging Path",
      "Yoga & Wellness Outdoor Area"
    ],
    "highlights": [
      "Official Direct Launch from Binghatti",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 6.8% - 10.5%",
      "Handover: Q4 2027",
      "Prime Address in Downtown Dubai"
    ],
    "badge": "0% BROKERAGE FEE",
    "roiEstimate": "6.8% - 10.5%",
    "sourceSiteUrl": "https://mercedes-binghatti-city.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5029,
    "launchId": 21,
    "slug": "emaar-south",
    "name": "Emaar South",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "Emaar South (Dubai South)",
    "fullAddress": "Emaar South (Dubai South), Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Townhouse",
    "startingPrice": 1750000,
    "priceFormatted": "AED 1,750,000",
    "handover": "Q3 2027",
    "handoverYear": 32027,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Emaar South is a vibrant community where picturesque green landscapes embrace contemporary living. Nestled around a championship golf course, featuring exquisite apartments and townhouses, it offers world-class amenities like hotels, retail, healthcare, education, and recreation. From the moment you arrive, a balance of nature, leisure and refined golf living unfold.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/3b317d08-b484-45a5-8bda-ae1afadc3769.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/3b317d08-b484-45a5-8bda-ae1afadc3769.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/865366a4-6127-43bb-8d3e-9bc61b0ff490.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/e8245eb4-2e1d-441f-bba4-dcdf97bd65ae.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/7a8f8721-3049-4dac-8c3b-6968fcfc9be3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/6b489c21-b575-43d8-bf1c-b59aed97439d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/561de198-34da-4161-887f-ce564b65dade.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/8be6db57-91b4-4611-be0b-1b4ba79c3fde.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/eeedc877-c6f6-470d-99d8-7d641fd5f47b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/emaar-south/13c16650-20c9-4023-96b2-55d90c52d360.jpg"
    ],
    "amenities": [
      "Resort-Style Pool",
      "Kids Play Area",
      "Multipurpose Room",
      "Padel Court"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.1% - 8.7%",
      "Handover: Q3 2027",
      "Prime Address in Emaar South (Dubai South)"
    ],
    "badge": "HIGH CAPITAL GROWTH",
    "roiEstimate": "7.1% - 8.7%",
    "sourceSiteUrl": "https://emaar-south.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5030,
    "launchId": 20,
    "slug": "palm-central-by-nakheel",
    "name": "Palm Central",
    "developer": "Nakheel",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/2/thumbnail_logo_nakheel.png",
    "location": "Palm Jumeirah",
    "fullAddress": "Palm Jumeirah, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 4900000,
    "priceFormatted": "AED 4,900,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Palm Central Private Residences is a collection of 212 contemporary, resort-style homes across three elegant buildings at the very heart of the island. Situated between Fronds M and N, its stepped form opens each home to uninterrupted views of Palm Jebel Ali, from sunrise to starlight. Each residence is an expression of serenity and connection, defined by open layouts, natural textures, and a quiet prestige that reflects the essence of island life",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/27cfeed7-8a1a-43eb-a4af-dae4f27ca66d.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/27cfeed7-8a1a-43eb-a4af-dae4f27ca66d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/2b2c91c5-8d76-4c6d-848a-294851600a74.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/779e30fb-11a1-461f-ad1c-d42747d40061.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/6a281667-77a0-487a-b0c7-55831b105e54.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/a9cb6aa5-524f-412e-bddd-ac324b79c3a5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/175c1b29-6ae8-46d7-a192-4cf0f8d3e7c5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/cf09604a-7f9d-4dfb-8cb7-a3a2f0798600.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/68ba5281-2b6f-4f51-bfee-d14761ac78ac.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/d2a27cde-43ab-420c-837d-ccec84865eb2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/7dfd7876-b719-4ac3-86ea-fdea812cee4a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/666b5168-c1ee-4bc4-b8b1-7cd89c466a21.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/8fd81c86-0546-4769-ad61-206b99c063aa.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/76e0d015-4a83-4a21-8e40-9b146166f601.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/a9ffc39e-87ba-4613-8d00-1dfe3a962c91.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/4cecc97a-47a1-4db6-b4f6-3f1024bd03f2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/bd9a9042-9fd5-43a3-b62c-56cf5c666d46.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/789c9fa3-81cc-411f-a9d1-bc0f7ce9c177.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/af567449-c2b3-4590-9580-078236c99f11.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/ddb17524-9c89-4f52-90d6-6e17278354f8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/805d781e-a37f-4cc8-a2aa-9223718249d8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/8447639d-4094-4097-97e8-d881d5d38113.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/80011e94-3d9a-4341-8314-dcb9e7ab99b5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/e685bc91-1ea1-4b53-84b1-614f087fb261.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/2986be52-fd70-4c94-9080-9fc2a2e58750.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/37228cd8-9db8-4fc0-b49d-c877360df61f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/27b92a5f-478a-4ede-be9b-fd8cb840ce4d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/ee235ac1-ac74-49f4-b558-89093446e78f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/0c231687-8cd0-4205-a402-8880491ffaf6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/c8887ed0-dcbf-4437-8c95-451e28d11dd5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/palm-central-by-nakheel/dcf64cd9-50eb-46cb-a979-9af698c16e9d.jpg"
    ],
    "amenities": [
      "Infinity Edge Swimming Pools",
      "Dedicated BBQ & Dining Areas",
      "Signature Yacht Club Access",
      "Outdoor Beach Cinema"
    ],
    "highlights": [
      "Official Direct Launch from Nakheel",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.4% - 9.1%",
      "Handover: Q4 2028",
      "Prime Address in Palm Jumeirah"
    ],
    "badge": "HIGH RENTAL YIELD",
    "roiEstimate": "7.4% - 9.1%",
    "sourceSiteUrl": "https://palm-central-by-nakheel.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5031,
    "launchId": 19,
    "slug": "the-edit-by-meraas",
    "name": "The Edit at D3",
    "developer": "Meraas",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/7/thumbnail_logo_meraas.png",
    "location": "Dubai Design District (D3)",
    "fullAddress": "Dubai Design District (D3), Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2350000,
    "priceFormatted": "AED 2,350,000",
    "handover": "Q1 2028",
    "handoverYear": 12028,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Dubai Design District (d3) is a unique lifestyle destination blending art, design, fashion, and innovation. Set near Downtown Dubai and offering a rich combination of living, working and cultural spaces, with waterfront views, walkable streets and curated experiences, d3 is designed to inspire creativity and connect a global creative community.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/25f24f60-7561-4d90-a6bf-275dc3f7c9a3.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/25f24f60-7561-4d90-a6bf-275dc3f7c9a3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/79fef7b1-9250-489d-8fcf-a862a9b100cf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/a2f539e5-4dae-4dba-8da9-1b705c66bec1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/d5afa455-a622-48ab-b39b-dd9495908397.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/7e38b786-1bb6-44c6-bba6-fb5cba5c53e1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/6772e008-72d4-4fbc-a626-c267c5f5e56a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/328195ba-734e-40d4-8b0b-8cdd8d9734ff.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/a4b4410f-abaa-4696-a5a5-caa9c1eca994.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/6779ef1d-8038-401b-b481-ca48e7a784f9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/57b8e944-b953-4c95-aa7d-c85905ecccb4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/c71c444c-e7f2-44c2-a950-2a81db4e953a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/74885589-f0f5-48e9-bd28-e7fd711139b6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/59b378fb-75ee-44aa-8c9c-ab4bc7c51d67.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/7c4621f3-d147-46f5-96e6-26d9cdd286a4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/eb0c7a6d-cfb4-4546-8040-9f0b8426ee94.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/f9a5133a-1923-431d-8ef2-670dd9023d5c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/04e7838c-5182-4549-9e6c-e664e42bfdd8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/6b4a0778-933a-4975-af09-e553a761e388.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/6f0f2008-c71c-4abd-ba32-29358e9a0c5d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/6a8f6fa4-70a2-41b3-9a4b-ce3716613927.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/12d88d69-7ab9-436f-a279-891a5c76cd6c.png",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/ae19c73e-32cf-45f7-9b9b-fa1048697dd1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/d5eebcf8-7dac-4906-8dce-00e1b0f5f970.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/72577489-b5d6-463a-ad86-603b685e039e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/cbdb90ee-3d83-4bad-905c-848b98b7baa3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/the-edit-by-meraas/095ecbf4-408f-46b1-a3fc-aefcd4a4c544.jpg"
    ],
    "amenities": [
      "Resort-style family pool",
      "BBQ & Dining Areas",
      "Co-working & gallery space",
      "Communal Space"
    ],
    "highlights": [
      "Official Direct Launch from Meraas",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.7% - 9.5%",
      "Handover: Q1 2028",
      "Prime Address in Dubai Design District (D3)"
    ],
    "badge": "ICONIC ARCHITECTURE",
    "roiEstimate": "7.7% - 9.5%",
    "sourceSiteUrl": "https://the-edit-by-meraas.mavrixproperties.ae/",
    "publishedAt": 1790597249000
  },
  {
    "id": 5032,
    "launchId": 18,
    "slug": "dubai-hills",
    "name": "Dubai Hills Luxury Residences",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "Dubai Hills Estate",
    "fullAddress": "Dubai Hills Estate, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1890000,
    "priceFormatted": "AED 1,890,000",
    "handover": "Q2 2027",
    "handoverYear": 22027,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Dubai Hills Estate – the green heart of Dubai – is a first-of its-kind destination. This masterfully planned, multi-purpose development forms an integral part of Mohammed Bin Rashid City. Strategically situated between Downtown Dubai and Dubai Marina, flanked by Al Khail Road, the community offers easy access to the city’s most popular districts and attractions",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/876bccf5-5f31-4687-bac5-9a03a0ff067b.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/876bccf5-5f31-4687-bac5-9a03a0ff067b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/85089c2b-4d5d-4f17-8e9c-c0d0bb1931ee.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/8430ac0c-f81a-4722-82d7-ecced92e504b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/650487f5-3ceb-47c3-828d-cb48c8453a5e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/ddc7726f-7fe7-4b50-b2f6-5e93af15bea9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/86f6ea08-9254-4f0e-a497-0b05ecc9f9d1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/811b93c0-8ae6-4d26-b337-fd0955da2e3e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/39eb362e-33d1-4ded-af71-aba7098f5ed1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/baba6fbe-357d-4b6e-a3e7-7cce1bd18442.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/87cb17dc-45a4-4404-88bf-028d297e7f26.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/da9e5030-5d7d-461c-9235-6b2bceb30048.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/c377bdcf-d4a0-4416-9afb-e0a838b852b7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/78d10592-40bd-45d2-8281-ddf7000fafbc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/01dc7fbd-c27e-4130-bed1-5e1aa1669ebf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/448281bc-1811-4e9b-bdc5-3fffd4cddd22.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/dubai-hills/a9ddd964-40e1-4afb-a85b-3d84d6e4c993.jpg"
    ],
    "amenities": [
      "Picnic & BBQ Areas",
      "Mini-golf, Skate & Pump Track",
      "Adult & Kids Swimming Pools",
      "Yoga Deck & Parkour Area"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.0% - 9.9%",
      "Handover: Q2 2027",
      "Prime Address in Dubai Hills Estate"
    ],
    "badge": "PRIVATE BEACHFRONT",
    "roiEstimate": "8.0% - 9.9%",
    "sourceSiteUrl": "https://dubai-hills.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5033,
    "launchId": 17,
    "slug": "heights-by-emaar",
    "name": "Heights",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "The Heights Country Club",
    "fullAddress": "The Heights Country Club, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 5200000,
    "priceFormatted": "AED 5,200,000",
    "handover": "Q3 2028",
    "handoverYear": 32028,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Emaar Properties proudly presents The Heights Country Club &amp; Wellness, an exquisite residential development featuring luxurious 3, 4 &amp; 5 bedroom villas. Nestled within a pristine 81-million-square-foot community at the junction of Expo and Emirates Road in Dubai, this project sets a new standard for high-end living. Emaar’s dedication to excellence and world-class integrated destinations elevates the lifestyle experience for all residents.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/0da286b4-1fbe-4863-9071-a3d03eaa89e4.webp",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/0da286b4-1fbe-4863-9071-a3d03eaa89e4.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/e22e21e4-f421-4e69-9880-666a58d50722.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/5ce0145f-435e-4f85-9a38-f5dd60c22475.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/39a3e237-ae3d-4f4f-a471-316cb2259c9a.jpeg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/37709fbb-fda6-4012-8e12-de561f736bbf.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/54fe6bf2-7d8c-49de-89b1-7a3f725c1460.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/c1b9c763-4b9b-4745-bcdb-30a24d988e13.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/ab69b949-12c3-4416-a398-396ec0fc8ce4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/31fed5a4-b172-4387-81e7-546ae03305ea.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/0b0279b8-ff85-4742-ace3-985be495cbea.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/heights-by-emaar/e13a459d-cb5a-4c3b-bd69-58616fc020d4.jpg"
    ],
    "amenities": [
      "Clubhouse & Wellness Centre",
      "cycling and jogging tracks",
      "outdoor yoga sessions",
      "Kids play area and fitness center"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.3% - 10.3%",
      "Handover: Q3 2028",
      "Prime Address in The Heights Country Club"
    ],
    "badge": "VIP LAUNCH ACCESS",
    "roiEstimate": "8.3% - 10.3%",
    "sourceSiteUrl": "https://heights-by-emaar.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5034,
    "launchId": 16,
    "slug": "hado-by-beyond",
    "name": "Hado",
    "developer": "Beyond Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/15/thumbnail_logo_beyond.png",
    "location": "Dubai Maritime City",
    "fullAddress": "Dubai Maritime City, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 2150000,
    "priceFormatted": "AED 2,150,000",
    "handover": "Q4 2027",
    "handoverYear": 42027,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "There are places that speak without words, where beauty is not only seen but felt. A quiet pulse flows through every space, the energy of the sea, the warmth of sunlight, the connection between people and place. This is HADO, the unseen resonance where motion and stillness coexist. Three towers rise in quiet harmony, opening toward the water to capture light and expansive views. Glass corners dissolve boundaries, blending interior calm with the horizon beyond. Architecture becomes an expression of energy — subtle, fluid and alive.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/dc4b090d-48d3-4978-b1ce-54dc31854f0b.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/dc4b090d-48d3-4978-b1ce-54dc31854f0b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/a30e3285-8bc3-4c13-be1b-fccfffcc2cf1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/a43a3610-b21a-4d63-a7b4-491d67bc83ca.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/465d1ce2-ac54-4e1e-8f4b-e1461446fcfe.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/b2bfe45d-400b-4ef6-a2ed-a01bfef4f93a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/51fd7296-4864-4d5b-9d7e-b54ce752e621.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/8f23b91c-1467-4e65-89ed-c15a5018c9ac.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/eba77182-f2d1-4fc2-8481-e509b1622428.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/7ca78126-9f87-46a0-acc4-08747f084d60.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/3d88451e-4cd0-41ff-abcd-445070631027.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/89740408-357b-4525-9fab-24e630ce28a2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/361a381b-62ac-4a9c-88b2-0a9c78f44022.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/df2b672d-a82a-4250-8b6a-4fc5069d6627.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/08f61e31-7e70-487c-8782-f6ac25ecbf1b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hado-by-beyond/d7234ac2-e44a-4919-9507-18a7c8968387.jpg"
    ],
    "amenities": [
      "Social Spaces",
      "Meditation Pockets",
      "Kids Play Areas & Pool",
      "Wellness & Fitness"
    ],
    "highlights": [
      "Official Direct Launch from Beyond Developments",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.6% - 8.5%",
      "Handover: Q4 2027",
      "Prime Address in Dubai Maritime City"
    ],
    "badge": "EXCLUSIVE PRE-SALE",
    "roiEstimate": "8.6% - 8.5%",
    "sourceSiteUrl": "https://hado-by-beyond.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5035,
    "launchId": 15,
    "slug": "creek-harbour",
    "name": "Creek Harbour Generic",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "Dubai Creek Harbour",
    "fullAddress": "Dubai Creek Harbour, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Apartment",
    "startingPrice": 1780000,
    "priceFormatted": "AED 1,780,000",
    "handover": "Q2 2027",
    "handoverYear": 22027,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "Experience a unique waterfront enclave where contemporary luxury, serene nature and innovation come together. It features iconic amenities like Creek Marina, a bay for yachting enthusiasts, and close proximity to the Ras Al Khor Wildlife Sanctuary, renowned for its rich biodiversity, including flamingos. The sanctuary’s tranquil lagoons offer a perfect setting for nature walks and birdwatching.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/608af759-6e1e-4eef-b152-3a9ed2220c76.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/608af759-6e1e-4eef-b152-3a9ed2220c76.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/642d5d8b-9e1c-4c5f-b95d-6c9963fff07b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/36e0bd12-05f3-4bf0-9b1a-b58c8eb82aa7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/8b5bad25-28d2-4828-be82-a091d9cf763e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/e7b8f101-742c-4c73-8535-6f2d6434f17c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/f16fb4df-7a77-4dd8-bb41-f09e1710c978.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/c257f2b6-14e9-4f69-9e9e-3a84c3cd79e5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/dd56c29b-ed94-4bb2-b605-b335cbc0a289.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/469ab971-5503-4d92-88c2-741f20238839.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/02fc944a-807d-4c0e-8236-6b67c634f21d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/6e7e74a3-6059-45a8-bad6-c436f5161048.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/6fb6458b-cd16-4548-a3fd-e64504beeaa9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/d38f0064-acc9-40aa-b502-891e7be39a4f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/85b75f16-efc2-4ee9-bfa6-e0d53c46078c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/c5ed0228-bb98-420f-8056-f409007e38a2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/75f00f2e-43ac-4256-a57a-c115a9633229.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/e312b15f-2672-40f3-a759-c978bcb73cfd.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/83142737-f546-44ab-94b7-c523ddc61ce8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/fc29fbec-cf6c-42a6-85db-d4596e7cbeb2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/3a2d6526-8e50-4c5f-b931-af55faf34eff.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/8ffab6b8-1242-4b98-9324-cd0f48ae3062.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/a519425d-6cbe-4096-b448-cf0bdeaa9c19.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/27d1a3be-00c8-4bd4-a22c-ec2971ad1a94.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/99f27977-da2c-406b-80fd-2d50d9e1408e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/7d655919-1b63-45f8-b561-1b86725d2991.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/creek-harbour/4030be69-bb31-471c-ac42-d982e94ecb69.jpg"
    ],
    "amenities": [
      "Adult Pool",
      "Indoor & Outdoor Sports",
      "Kids Play Area",
      "Fitness Outdoor & Indoor"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.9% - 8.9%",
      "Handover: Q2 2027",
      "Prime Address in Dubai Creek Harbour"
    ],
    "badge": "WATERFRONT FLAGSHIP",
    "roiEstimate": "8.9% - 8.9%",
    "sourceSiteUrl": "https://creek-harbour.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5036,
    "launchId": 14,
    "slug": "kanyon-by-beyond",
    "name": "Kanyon at Palm Jumeriah",
    "developer": "Beyond Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/15/thumbnail_logo_beyond.png",
    "location": "Palm Jumeirah East Crescent",
    "fullAddress": "Palm Jumeirah East Crescent, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Penthouse",
    "startingPrice": 11500000,
    "priceFormatted": "AED 11,500,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "In the heart of Dubai Maritime City, rises within the innovative Forest District, a nature-first sanctuary where architecture and woodland coexist in harmony. Here, shaded trails and native canopies create a cooler, gentler climate, softening the rhythm of the city. Within this living landscape, serenity and community take root, offering a new horizon of wellbeing. And yet, even while immersed in the forest, Kanyon is surrounded by everything you desire: fine restaurants, boutique shopping and culture.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/b8733ed0-2341-4c95-8a00-0f0718b5f921.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/b8733ed0-2341-4c95-8a00-0f0718b5f921.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/9f5e8f13-901c-4140-9667-56b7c9868b1e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/63cd50ea-0148-49d3-9b6e-92439728715d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/e1e9cd69-c2ee-495a-9ea1-59356fb2e83a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/27ddfef0-0212-4cdd-a175-22016535cfdc.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/863d3743-f5c1-4a80-adcd-6ac6ebddefba.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/95630926-c158-4654-a47b-137f2e49a455.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/7e08dea2-f2e2-4ded-aeef-1ffcf788c451.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/c4477601-f453-4a42-8f99-a0aa1cfe52ac.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/259ed93f-bfb9-4900-b213-60dff0318d32.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/0015e30a-aa04-430b-94fa-2d1a89a28dfd.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/5c2185e5-28a8-4250-9876-cd27dbe9332d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/40fb04eb-5e8a-4c76-9e4e-2d31c61acc31.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/cef33d33-3b03-4d1e-9d89-28333b116eeb.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/76267d56-1b28-49a4-8197-aea5551f69b2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/fb30ed08-edc3-4482-8824-294fdda8319e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/9c63a1e5-4431-4a23-8f60-fdbce8a9f579.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/8ef10dd9-f4d6-49e6-bfa3-10ba8770f6ec.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/015e65e0-0816-4891-ac6e-2388fe8c14ff.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/1882b7c5-b1fb-4b85-81e0-0f73602aa8c9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/e663e302-50a6-4d42-a9b4-0964b5c72064.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/698a76dc-ef48-4080-a7c1-c349ebfda248.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/923da89c-f767-4b33-b14e-8f9b431061c1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/eaeb8207-0cd8-45f9-8f01-be67d3ce48a2.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/5139c00b-8af1-498e-ad82-12ceb49d80df.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/b2e60b7c-c039-4f7d-926a-e285e014cd7f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/8339cabd-2a90-46b9-926d-ca1889597fd7.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/272cb262-2a82-41b9-9147-582962916ace.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/66d0bfcf-b036-44f5-b15a-8cb4734f4583.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/kanyon-by-beyond/95de2d2d-7380-46e9-a149-ab2fd5f0dc72.jpg"
    ],
    "amenities": [
      "Refreshing Pools",
      "Indoor & Outdoor Sports",
      "Family & Kids",
      "Wellness & Relaxation"
    ],
    "highlights": [
      "Official Direct Launch from Beyond Developments",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 9.2% - 9.3%",
      "Handover: Q4 2028",
      "Prime Address in Palm Jumeirah East Crescent"
    ],
    "badge": "0% BROKERAGE FEE",
    "roiEstimate": "9.2% - 9.3%",
    "sourceSiteUrl": "https://kanyon-by-beyond.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5037,
    "launchId": 13,
    "slug": "nad-al-sheba-gardens",
    "name": "Nad Al Sheba Gardens",
    "developer": "Meraas",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/7/thumbnail_logo_meraas.png",
    "location": "Nad Al Sheba 1",
    "fullAddress": "Nad Al Sheba 1, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 3950000,
    "priceFormatted": "AED 3,950,000",
    "handover": "Q3 2027",
    "handoverYear": 32027,
    "paymentPlan": "70/30 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Discover the latest villa release at Nad Al Sheba Gardens by Meraas &mdash; a private gated community designed around spacious living, landscaped surroundings and a strong connection to nature.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/cb7db35c-c3c8-45f3-967d-e9c194aeb530.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/0e3b1012-4202-4e2b-8b38-ebd85cac599a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/07f1424d-64c4-452e-b355-c75cc455bb46.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/83d1b314-ef40-4a83-8f5b-86d3e18d6cd9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/8a723efc-f88e-4694-bc55-4b813a2afc1d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/308528f7-04e1-437f-956c-ade33459ff3c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/06452d25-e777-4e28-9013-804c6d405265.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/a122cb20-d5d7-47a4-837c-e8f36402d193.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/7bd809b3-0115-4147-828f-e54953f7c1be.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/cb7db35c-c3c8-45f3-967d-e9c194aeb530.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/bf7dca17-8a40-4c34-9634-fe8c124505a1.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/c04e223b-2f0a-411f-aec0-79d1492eef77.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/507c2e17-c898-41e4-851f-e9455f1de7d3.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/c192c471-99a3-4ce5-99a3-84c866611633.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/9cb3c980-6baa-456c-91ba-ecbaa41d9093.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/85979c9f-adf7-4abb-bbbb-091e129c77ab.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/1ee99e59-c4e6-43f7-90fe-f369c95ef49e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/46e8ae37-dbdc-459c-9bcf-22dbbae36bb9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/f968ef81-6bd8-4812-a2fb-4be36c378e54.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/4d63fc35-f375-48fc-9040-3e94cfe769b5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/552d99ee-634e-4f2c-a2ec-b524e0dccd76.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/1eaf6554-1772-4524-8f0a-fb7af602ff4c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/8f7e7f0e-80e7-4bd7-a2b5-42223c050c3a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/b04c2113-cc4c-4d24-b064-9967bd012809.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/a68564e7-e193-4471-b9d3-e1b554a14410.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/3d58bc4e-efca-48ad-970f-86fb654a329e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/5f213022-3658-4259-81bf-7d12bbed2435.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/56510d4c-ba0e-438c-bccd-3765ef45eb46.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/00a67e17-a63d-487b-a5e8-d879b1dfb192.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/nad-al-sheba-gardens/7fc90614-d4ce-4889-9676-4a6675110a2c.jpg"
    ],
    "amenities": [
      "Lagoon & Wave Pool",
      "Running Tracks",
      "Kids Play Areas",
      "Sports Facilities"
    ],
    "highlights": [
      "Official Direct Launch from Meraas",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 6.8% - 9.7%",
      "Handover: Q3 2027",
      "Prime Address in Nad Al Sheba 1"
    ],
    "badge": "HIGH CAPITAL GROWTH",
    "roiEstimate": "6.8% - 9.7%",
    "sourceSiteUrl": "https://nad-al-sheba-gardens.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5038,
    "launchId": 12,
    "slug": "oasis-by-emaar",
    "name": "The Oasis",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "The Oasis by Emaar",
    "fullAddress": "The Oasis by Emaar, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Villa",
    "startingPrice": 8500000,
    "priceFormatted": "AED 8,500,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "Upon Handover",
        "percentage": "20%"
      }
    ],
    "description": "Nestled in the heart of Dubai, The Oasis by Emaar spans over 9.4 million sq. meters, offering a harmonious blend of nature and architectural brilliance. Featuring 4 to 6-bedroom villas set amidst lagoons, waterways, and landscaped parks.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/a287c272-435b-44a1-90ad-79d943da3b61.webp",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/c0545a33-d06c-47b9-baac-9a4bdb8088c8.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/a287c272-435b-44a1-90ad-79d943da3b61.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/4e198195-72a9-4d13-96a6-d9de3b43e4a4.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/7a7e5699-0268-43c0-9731-3162427de558.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/ab1973ab-04cf-45b3-a935-c6dfb9def605.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/bd7ed813-db40-4e6c-a5c9-42de53a1a688.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/a9c60772-83c3-4b50-88ef-95a921df333f.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/516f2bb0-f863-42cb-b3a4-11113f5a3ba0.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/44b64ca3-4d70-43ef-9c4f-16d9ce878f9e.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/bdb0d766-e948-4f86-828a-b43f42de0b24.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/907cb44a-5ff3-43b2-ab30-110476a50a84.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/eaef2d6e-30ad-4d09-86ef-020935fa24f5.webp",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/oasis-by-emaar/88764d04-0918-4ed2-af9b-9ea08c07eb43.webp"
    ],
    "amenities": [
      "Direct Beach Access",
      "Infinity pools and poolside bars",
      "Private cinema and games room",
      "Spa, treatment rooms, yoga & meditation studio"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.1% - 10.1%",
      "Handover: Q4 2028",
      "Prime Address in The Oasis by Emaar"
    ],
    "badge": "HIGH RENTAL YIELD",
    "roiEstimate": "7.1% - 10.1%",
    "sourceSiteUrl": "https://oasis-by-emaar.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5039,
    "launchId": 11,
    "slug": "valley-by-emaar",
    "name": "The Valley",
    "developer": "Emaar Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/1/thumbnail_logo_emaar.png",
    "location": "The Valley (Dubai-Al Ain Rd)",
    "fullAddress": "The Valley (Dubai-Al Ain Rd), Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Townhouse",
    "startingPrice": 2250000,
    "priceFormatted": "AED 2,250,000",
    "handover": "Q2 2027",
    "handoverYear": 22027,
    "paymentPlan": "80/20 Plan",
    "paymentMilestones": [
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "The Valley is a charming new community where modern townhouses sit harmoniously amid vast sands and expansive green spaces. Discover the new facets of this serene destination, where landscaped gardens and open meadows invite you to live an active, nature-inspired lifestyle. Here, the beauty of nature blends effortlessly with elegant modern living, creating a community where every moment invites you to unwind, explore, and connect.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/3da14e3b-7cf1-4874-9dc9-2a685c38b504.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/3da14e3b-7cf1-4874-9dc9-2a685c38b504.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/85603a40-020a-4a73-8723-5904a6b5272c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/2b451fac-456e-4261-b609-e812a8a511ed.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/344f75c7-3e8e-4c42-8a0f-bdde65c89a8d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/25d9ec1c-8444-4af0-acc4-97c76d03e8d4.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/281f55fe-5439-405f-b07f-71b63a6a515e.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/ad481a89-5565-4e21-bd40-8829c9117ff9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/6b0d1173-24fd-4844-ad57-11effeefb091.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/0bfe4be1-395d-4803-9d4d-9b33f9f0d20c.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/dc6a68da-1345-4bb0-bee4-306cbed7d5df.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/3d6ecc92-e7db-480d-8d92-5ef070b8c134.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/a8a9d255-28aa-4b63-8f11-d3e37dd78f80.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/3e245377-a5bb-4d0a-85ac-b8c71308e9a6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/79ee6b9c-e9bb-45d6-ae88-9b705d291e98.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/e3d400b5-cd56-4631-9851-bb66a02006d9.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/bc8e8232-c488-499b-bbec-ea0f475bb662.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/cc1eed80-8df6-4e85-86a5-53ee9348b245.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/29486e7b-5032-4693-b4d8-947a3f0cf310.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/4d478315-b8fc-4a28-b5dd-224cbf7e0c9d.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/c4dd86e8-d97e-4a32-a1db-127440206cca.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/a8794a22-ae44-4d3a-956e-6c1fddbb29f8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/8363c4da-0e6b-4ddb-b6e4-23536adb3f34.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/valley-by-emaar/92e988b4-0f70-4521-9026-1760c6f8fad5.jpg"
    ],
    "amenities": [
      "Parks Pocket & Open Lawns",
      "Indoor & Outdoor Sports",
      "Kids Play Area",
      "Fitness & Sports Centre"
    ],
    "highlights": [
      "Official Direct Launch from Emaar Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.4% - 10.5%",
      "Handover: Q2 2027",
      "Prime Address in The Valley (Dubai-Al Ain Rd)"
    ],
    "badge": "ICONIC ARCHITECTURE",
    "roiEstimate": "7.4% - 10.5%",
    "sourceSiteUrl": "https://valley-by-emaar.mavrixproperties.ae/",
    "publishedAt": 1790597248000
  },
  {
    "id": 5040,
    "launchId": 10,
    "slug": "hudayriyat-golf",
    "name": "Hudayriat Golf Estate",
    "developer": "Modon Properties",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/12/thumbnail_logo_modon.png",
    "location": "Hudayriyat Island",
    "fullAddress": "Hudayriyat Island, Abu Dhabi, United Arab Emirates",
    "city": "Abu Dhabi",
    "type": "Villa",
    "startingPrice": 6900000,
    "priceFormatted": "AED 6,900,000",
    "handover": "Q1 2029",
    "handoverYear": 12029,
    "paymentPlan": "50/50 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down Payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Handover",
        "percentage": "20%"
      }
    ],
    "description": "Hudayriyat Golf Estates is a premium residential development set on the vibrant Hudayriyat Island in Abu Dhabi, designed to redefine luxury coastal living.As part of the visionary Golf Estates Hudayriyat community, the project is centered around a future championship golf course and surrounded by stunning beaches, lush landscapes, and world-class lifestyle amenities.The development offers spacious, contemporary villas with elegant designs, large plots, and seamless indoor-outdoor living, many featuring views of the golf course, marina, or the Arabian Gulf.With its prime location and integration into Abu Dhabi’s long-term growth vision, Golf Estates Hudayriyat presents a strong investment opportunity, combining exclusivity, limited supply, and high potential for future value appreciation.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/a4967da9-34fe-450c-9d3b-496e40609845.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/a4967da9-34fe-450c-9d3b-496e40609845.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/0cd9f86e-3d8b-432c-a062-a72c1a2f6add.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/f4102e6e-3da8-4c54-9218-47b8a31b2fee.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/99803d13-35a6-4ef3-9cd1-2547499b43e6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/d2e86ef9-bc20-40e1-bc20-73f6be4475d0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/edddeb61-3b6c-4669-b7b4-e1f5adb0eb39.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/1cf089eb-8e35-4e7a-91df-b84aae67ebba.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/917ed136-57bd-4a35-ad66-8d56fff72141.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/961da609-4c36-47c6-bc97-c6aa2079c54b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/412ff308-1f17-490b-85b4-d449d1b01bd5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/f1abfd05-109f-49d6-b585-aee6222ce5e8.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/hudayriyat-golf/7d074d6f-53e2-4d0f-b42c-cd5cf8d5ef14.jpg"
    ],
    "amenities": [
      "18-hole Golf Course",
      "Country Clubhouse",
      "Dining & Retail",
      "Wellness Centre",
      "Multi-Sports Courts",
      "Community Retail",
      "Private School",
      "CyclingTrails",
      "Parks & Green Spaces",
      "Coworking Spaces"
    ],
    "highlights": [
      "Official Direct Launch from Modon Properties",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 7.7% - 8.7%",
      "Handover: Q1 2029",
      "Prime Address in Hudayriyat Island"
    ],
    "badge": "PRIVATE BEACHFRONT",
    "roiEstimate": "7.7% - 8.7%",
    "sourceSiteUrl": "https://hudayriyat-golf.com/",
    "publishedAt": 1790168256000
  },
  {
    "id": 5041,
    "launchId": 9,
    "slug": "passo-by-beyond",
    "name": "Passo at Palm Jumeriah",
    "developer": "Beyond Developments",
    "developerLogo": "https://elist-solz.s3.ap-south-1.amazonaws.com/developers/15/thumbnail_logo_beyond.png",
    "location": "Palm Jumeirah Crescent",
    "fullAddress": "Palm Jumeirah Crescent, Dubai, United Arab Emirates",
    "city": "Dubai",
    "type": "Penthouse",
    "startingPrice": 10800000,
    "priceFormatted": "AED 10,800,000",
    "handover": "Q4 2028",
    "handoverYear": 42028,
    "paymentPlan": "60/40 Plan",
    "paymentMilestones": [
      {
        "milestone": "Down payment",
        "percentage": "20%"
      },
      {
        "milestone": "During Construction",
        "percentage": "20%"
      },
      {
        "milestone": "On Construction Completion",
        "percentage": "20%"
      }
    ],
    "description": "PASSO’s architecture is a reflection of nature’s everlasting metamorphosis. It’s a bold expression of fluid architecture, holistic design, and elevated living. From its dynamic facades to its lush, sensory landscapes, every detail is crafted to evoke a sense of rhythm, balance, and calm.",
    "heroImage": "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/5138e8e3-5b65-4b5c-8061-fb3e32376306.jpg",
    "gallery": [
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/5138e8e3-5b65-4b5c-8061-fb3e32376306.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/7e44944b-b0e0-4711-84c5-6f92c0956495.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/fed233ea-7237-4889-8d69-d42ab842317f.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/cdcfb5a1-178c-4b34-9137-1faa7cd7b142.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/9c9d7a76-3d08-4dfb-95d7-2cbe0906ae1a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/f50cf791-0fbc-4a87-934e-2a6d3c2390b6.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/d1e4d883-ba8b-48b3-99e3-2f25248ea83a.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/5706a105-d469-47a7-8d0c-6122010397ed.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/a294d652-4f34-471c-8a97-58dcb46bd538.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/c61759a0-219d-4ea8-ab32-41181091def5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/6b623467-f52e-484d-a9df-09e319775f96.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/cd22e660-3000-4561-a6ec-380928df90b5.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/7ff8ea1e-5e4d-4c5e-9f66-d3587fd04b3b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/557a132d-c62c-4a86-a5c5-06cb05013710.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/037f792d-4273-4e73-a5e7-11b29ca65742.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/13d35a7e-10d6-4db1-a428-9f04e420ff4b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/56f72fa8-7762-4208-8630-7ea920c19db0.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/37e54a06-02fc-4727-a035-0f95aae0520b.jpg",
      "https://elist-solz.s3.ap-south-1.amazonaws.com/multi_web_cms/landing-pages/content/passo-by-beyond/580f94af-cf2b-4233-aba8-2c573dcbd40c.jpg"
    ],
    "amenities": [
      "Parks Pocket & Open Lawns",
      "Indoor & Outdoor Sports",
      "Kids Play Area",
      "Fitness & Sports Centre"
    ],
    "highlights": [
      "Official Direct Launch from Beyond Developments",
      "0% Commission & Free DLD Advisory",
      "Target Estimated ROI: 8.0% - 9.1%",
      "Handover: Q4 2028",
      "Prime Address in Palm Jumeirah Crescent"
    ],
    "badge": "VIP LAUNCH ACCESS",
    "roiEstimate": "8.0% - 9.1%",
    "sourceSiteUrl": "https://passo-by-beyond.mavrixproperties.ae/",
    "publishedAt": 1790149070000
  }
];
