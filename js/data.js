/**
 * ==============================================================================
 * IIITDM KURNOOL - NATIONAL SERVICE SCHEME (NSS) PORTAL DATA TEMPLATE
 * ==============================================================================
 * This file contains all dynamic configuration and content for the NSS portal.
 * Professors, Faculty Advisors, and Student Coordinators can easily update,
 * add, or remove data below without writing any HTML or CSS code.
 *
 * TIP: You can also use the interactive "Professor / Data Editor Mode" built
 * into the website to add events or edit details visually and export this file!
 * ==============================================================================
 */

window.NSS_DATA = {
  // ----------------------------------------------------------------------------
  // 1. INSTITUTIONAL IDENTITY & OFFICIAL URLS
  // ----------------------------------------------------------------------------
  institute: {
    fullName: "Indian Institute of Information Technology, Design and Manufacturing, Kurnool",
    shortName: "IIITDM Kurnool",
    unitName: "National Service Scheme (NSS)",
    motto: "Not Me, But You",
    mottoHindi: "राष्ट्रीय सेवा योजना - न मे पराहू",
    tagline: "Empowering Communities Through Design, Technology & Selfless Service",
    established: "2015",
    
    // IMPORTANT: Legacy / Existing NSS Website Redirection Link
    // As specified by the Institute:
    legacyWebsiteUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page",
    instituteHomeUrl: "https://iiitk.ac.in",
    
    address: "Jagannathagattu, Dinnedevarapadu, Kurnool, Andhra Pradesh - 518008, India",
    contactEmail: "nss@iiitk.ac.in",
    helplinePhone: "+91-8518-289114",
    officeLocation: "Student Activity Center (SAC), Ground Floor, IIITDM Kurnool Campus",
    socialLinks: {
      facebook: "https://www.facebook.com/Iiitdm-Kurnool-211133533006549/",
      twitter: "https://twitter.com/iiitdmkurnool",
      youtube: "https://www.youtube.com/channel/UCXUm4xE1QB6jkBMRBnmtguw",
      instagram: "https://www.instagram.com/iiit.Kurnool/",
      linkedin: "https://www.linkedin.com/company/iiit-Kurnool"
    }
  },

  // ----------------------------------------------------------------------------
  // 2. TICKER ANNOUNCEMENT (TOP BANNER & HERO)
  // ----------------------------------------------------------------------------
  announcement: {
    isActive: true,
    badgeText: "LATEST UPDATE",
    text: "Registrations are now open for the Annual Mega Blood Donation Drive & Swachhata Pakhwada 2025-26. Volunteer today!",
    linkText: "Register as Volunteer",
    linkAction: "openVolunteerModal", // or external URL
    date: "March 2026"
  },

  // ----------------------------------------------------------------------------
  // 3. IMPACT STATISTICS (Displayed in the animated counter section)
  // ----------------------------------------------------------------------------
  impactStats: [
    {
      id: "volunteers",
      label: "Active Student Volunteers",
      value: 520,
      suffix: "+",
      icon: "users",
      description: "Dedicated undergraduate and postgraduate volunteers across all departments"
    },
    {
      id: "hours",
      label: "Community Service Hours",
      value: 4850,
      suffix: "+",
      icon: "clock",
      description: "Hours contributed towards rural education, health camps, and green drives"
    },
    {
      id: "blood",
      label: "Units of Blood Donated",
      value: 460,
      suffix: "+",
      icon: "heart-pulse",
      description: "Collected in partnership with Indian Red Cross Society and Govt Hospital Kurnool"
    },
    {
      id: "trees",
      label: "Trees & Saplings Planted",
      value: 1350,
      suffix: "+",
      icon: "tree",
      description: "Planted across the Jagannathagattu hillock campus with AP Forest Department"
    },
    {
      id: "villages",
      label: "Villages & Schools Reached",
      value: 18,
      suffix: "+",
      icon: "map-pin",
      description: "Surrounding rural settlements in Dinnedevarapadu and Kurnool district"
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. CORE WINGS / PILLARS (Inspired by IIT Guwahati, IIT Bombay & IIT Roorkee)
  // ----------------------------------------------------------------------------
  wings: [
    {
      id: "health",
      name: "Health, Wellness & Blood Donation",
      shortDesc: "Organizing regular blood donation camps with Red Cross, dental health checkups, and mental health coping sessions.",
      icon: "heart-handshake",
      color: "from-rose-500 to-red-600",
      stats: "15+ Camps Conducted",
      lead: "Dr. Faculty Advisor (Health Wing)"
    },
    {
      id: "environment",
      name: "Swachhata & Green Campus Drive",
      shortDesc: "Leading tree plantation drives, plastic-free campus campaigns, water conservation, and Jagannathagattu cleanups.",
      icon: "leaf",
      color: "from-emerald-500 to-teal-600",
      stats: "1,350+ Saplings Planted",
      lead: "Dr. Faculty Advisor (Environment Wing)"
    },
    {
      id: "education",
      name: "STEM & Digital Literacy Outreach",
      shortDesc: "Teaching basic computing, mathematics, and science experiments to children in nearby rural government schools.",
      icon: "graduation-cap",
      color: "from-blue-500 to-indigo-600",
      stats: " 520+ Students Mentored",
      lead: "Dr. Faculty Advisor (Education Wing)"
    },
    {
      id: "community",
      name: "Rural Development & Social Welfare",
      shortDesc: "Assisting local communities, stationery and cloth distribution, disaster relief support, and temple festival assistance.",
      icon: "hand-helping",
      color: "from-amber-500 to-orange-600",
      stats: "18+ Villages Reached",
      lead: "Dr. Faculty Advisor (Rural Wing)"
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. EVENT ARCHIVE CONFIGURATION (20XX and Current Year)
  // ----------------------------------------------------------------------------
  // The current active academic year for highlighting
  currentYear: "2025-2026",

  // Available year tabs in the filter (Professors can add new years here)
  yearTabs: [
    { id: "all", label: "All Years" },
    { id: "2025-2026", label: "Current Year (2025-26)" },
    { id: "2024-2025", label: "2024-2025" },
    { id: "2023-2024", label: "2023-2024" },
    { id: "2022-2023", label: "2022-2023" },
    { id: "legacy-archive", label: "2019-2018 Archive" }
  ],

  // Event Categories
  categories: [
    { id: "all", label: "All Categories" },
    { id: "blood-health", label: "Blood & Health" },
    { id: "environment", label: "Environment & Greenery" },
    { id: "education", label: "Digital Literacy & STEM" },
    { id: "community", label: "Community & Village Service" },
    { id: "mental-health", label: "Mental Wellness & Lectures" }
  ],

  // ----------------------------------------------------------------------------
  // 6. MASTER EVENT REPOSITORY
  // ----------------------------------------------------------------------------
  // Contains both historical events from the existing website and modern entries.
  events: [
    // --- Current Year: 2025-2026 ---
    {
      id: "ev-2026-blood-camp",
      title: "Annual Mega Blood Donation Drive 2026",
      year: "2025-2026",
      date: "February 24, 2026",
      category: "blood-health",
      status: "Completed",
      venue: "Student Activity Center (SAC), IIITDM Kurnool Campus",
      partner: "Indian Red Cross Society, Kurnool Chapter & Govt General Hospital",
      summary: "A high-impact blood donation camp organized with great enthusiasm. Students, research scholars, and faculty participated selflessly to donate blood for patients with Thalassemia and emergency needs.",
      fullDescription: "Continuing its proud tradition of community health support, the NSS unit of IIITDM Kurnool conducted its Annual Blood Donation Camp in association with the Indian Red Cross Society. Over 110 volunteers registered, and 86 healthy units of blood were safely collected after stringent medical screenings. Refreshments and donor certificates were distributed to all participants.",
      metrics: [
        { label: "Donors Screened", value: "115" },
        { label: "Units Collected", value: "86" },
        { label: "Student Volunteers", value: "45" }
      ],
      coordinator: "NSS Faculty In-Charge & Student Core Team",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: true
    },
    {
      id: "ev-2025-hillock-plantation",
      title: "Green Jagannathagattu Campus Plantation Drive Phase-V",
      year: "2025-2026",
      date: "October 14, 2025",
      category: "environment",
      status: "Completed",
      venue: "Campus Ring Road & East Academic Block Perimeter",
      partner: "Andhra Pradesh Forest Department, Kurnool Division",
      summary: "Massive afforestation drive planting over 300 drought-tolerant native saplings across the rocky terrain of Jagannathagattu to increase green cover.",
      fullDescription: "As part of the nationwide 'Ek Ped Maa Ke Naam' and Swachhata campaign, the NSS team of IIITDM Kurnool collaborated with the AP Forest Department. The Director, Deans, faculty members, and first-year B.Tech students planted saplings including Neem, Peepal, Pongamia, and Gulmohar. Drip watering networks were also set up by student volunteers.",
      metrics: [
        { label: "Saplings Planted", value: "320" },
        { label: "Participants", value: "180+" },
        { label: "Area Covered", value: "3 Acres" }
      ],
      coordinator: "Faculty Advisor (Environment Wing)",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: true
    },
    {
      id: "ev-2026-stem-school",
      title: "Rural STEM & Coding Literacy Workshop",
      year: "2025-2026",
      date: "January 18, 2026",
      category: "education",
      status: "Completed",
      venue: "Zilla Parishad High School, Dinnedevarapadu Village",
      partner: "Department of Computer Science & NSS Outreach Cell",
      summary: "Interactive hands-on session introducing 8th and 9th grade rural students to visual block programming (Scratch), robotics basics, and internet safety.",
      fullDescription: "Student volunteers traveled to Zilla Parishad High School in Dinnedevarapadu. They demonstrated simple robotic kits, explained basic scientific principles through fun experiments, and coached over 120 rural pupils on basic computer operations, cyber safety, and digital learning opportunities.",
      metrics: [
        { label: "School Students", value: "120" },
        { label: "Student Mentors", value: "22" },
        { label: "Computers Setup", value: "15" }
      ],
      coordinator: "Faculty Advisor (Education Wing)",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: false
    },
    {
      id: "ev-2026-upcoming-camp",
      title: "Special 7-Day Rural Residential Camp 2026",
      year: "2025-2026",
      date: "April 05 - 11, 2026",
      category: "community",
      status: "Upcoming",
      venue: "Adopted Village (Jagannathagattu Rural Cluster)",
      partner: "District Administration & Local Gram Panchayat",
      summary: "Annual flagship residential camp focusing on health awareness, village socio-economic survey, solar lamp maintenance, and school infrastructure revitalization.",
      fullDescription: "A contingent of 50 selected NSS volunteers will reside in the adopted village for 7 days, conducting Swachhata rallies, street plays on social issues, free medical checkups, career guidance for village youth, and tree plantation along village roads.",
      metrics: [
        { label: "Camp Duration", value: "7 Days" },
        { label: "Expected Volunteers", value: "50" },
        { label: "Target Households", value: "350" }
      ],
      coordinator: "NSS Programme Officer & Faculty Advisors",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: true
    },

    // --- Academic Year: 2024-2025 ---
    {
      id: "ev-2024-youth-day",
      title: "National Youth Day & Run for Unity 2025",
      year: "2024-2025",
      date: "January 12, 2025",
      category: "community",
      status: "Completed",
      venue: "Main Administrative Quadrangle, IIITDM Kurnool",
      partner: "Ministry of Youth Affairs and Sports",
      summary: "Commemorating the birth anniversary of Swami Vivekananda with a 5K Run for Unity, youth symposium, and essay competition on nation-building.",
      fullDescription: "Celebrated enthusiastically across the institute. Over 250 students and faculty joined the morning 5-km mini-marathon across the scenic Jagannathagattu campus. The run was followed by a symposium on 'Role of Technology in Rural Transformation'.",
      metrics: [
        { label: "Run Participants", value: "250+" },
        { label: "Essay Entries", value: "65" },
        { label: "Medals Awarded", value: "12" }
      ],
      coordinator: "NSS Faculty Advisor & Sports Council",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: false
    },
    {
      id: "ev-2024-dental-health",
      title: "Free Dental Screening & Oral Hygiene Camp 2024",
      year: "2024-2025",
      date: "November 08, 2024",
      category: "blood-health",
      status: "Completed",
      venue: "Institute Medical Center & SAC Hall",
      partner: "G. Pulla Reddy Dental College & Hospital, Kurnool",
      summary: "Comprehensive dental checkups, cavity detection, and dental hygiene awareness sessions for students, housekeeping staff, and security personnel.",
      fullDescription: "A specialized team of 8 dental surgeons and postgraduates from G. Pulla Reddy Dental College examined more than 210 individuals. Free dental kits (toothbrush, toothpaste, and dental hygiene guides) were distributed to campus staff and workers.",
      metrics: [
        { label: "Individuals Examined", value: "215" },
        { label: "Dental Surgeons", value: "8" },
        { label: "Kits Distributed", value: "200+" }
      ],
      coordinator: "Faculty In-Charge (Health Activities)",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: false
    },
    {
      id: "ev-2024-cloth-drive",
      title: "Joy of Giving: Winter Cloth & Stationery Drive",
      year: "2024-2025",
      date: "December 15, 2024",
      category: "community",
      status: "Completed",
      venue: "Hostel Blocks & Surrounding Construction Worker Settlements",
      partner: "Local Child Welfare NGO, Kurnool",
      summary: "Collection and distribution of warm clothes, blankets, notebooks, and school bags for children of daily-wage workers and underprivileged communities.",
      fullDescription: "Organized under the 'Daan Utsav' initiative. Students and faculty generously contributed over 400 clean garments, 80 blankets, and 300 sets of notebooks and stationery items, which were neatly packed and handed over to families in need.",
      metrics: [
        { label: "Garments Donated", value: "420" },
        { label: "Blankets", value: "85" },
        { label: "Families Supported", value: "70+" }
      ],
      coordinator: "NSS Student Executive Committee",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: false
    },

    // --- Academic Year: 2023-2024 ---
    {
      id: "ev-2023-swachhata-hi-seva",
      title: "Swachhata Hi Seva: Cleanliness Drive & Shramdaan",
      year: "2023-2024",
      date: "October 02, 2023",
      category: "environment",
      status: "Completed",
      venue: "IIITDM Kurnool Campus & Jagannathagattu Approach Road",
      partner: "Swachh Bharat Mission & Ministry of Education",
      summary: "One-hour intensive Shramdaan for cleanliness on Gandhi Jayanti. Over 200 kg of single-use plastic and litter was segregated and cleared.",
      fullDescription: "Led by institute authorities and NSS volunteers, the drive covered the entire academic zone, library surroundings, and 2 km of the approach road. Plastic debris was collected and sent for responsible recycling.",
      metrics: [
        { label: "Plastic Cleared", value: "210 kg" },
        { label: "Road Cleared", value: "2.5 km" },
        { label: "Volunteers Joined", value: "190" }
      ],
      coordinator: "NSS Coordinator & Estate Section",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: false
    },
    {
      id: "ev-2023-cyber-safety",
      title: "Cyber Security & UPI Fraud Awareness Campaign",
      year: "2023-2024",
      date: "February 10, 2024",
      category: "education",
      status: "Completed",
      venue: "Panchayat Hall, Dinnedevarapadu Village",
      partner: "Department of CSE & Kurnool District Police Cyber Cell",
      summary: "Awareness session for local shopkeepers, farmers, and village elders about safeguarding against financial phishing and mobile OTP scams.",
      fullDescription: "Engineering students created simple Telugu posters and skits illustrating common scam tactics (fake electricity bill alerts, prize lottery calls, suspicious QR codes). They guided over 80 attendees on enabling biometric locking on UPI apps.",
      metrics: [
        { label: "Villagers Attended", value: "85" },
        { label: "Pamphlets Distributed", value: "250" },
        { label: "Student Speakers", value: "14" }
      ],
      coordinator: "Faculty Advisor (Computer Science)",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "#",
      featured: false
    },

    // --- Academic Year: 2022-2023 (Actual Event from Existing Website) ---
    {
      id: "ev-2022-stress-session",
      title: "Emotional StressHandling & Mental Wellness Session",
      year: "2022-2023",
      date: "April 01, 2022",
      category: "mental-health",
      status: "Completed",
      venue: "Institute Auditorium, IIITDM Kurnool",
      partner: "Expert Lecture by Prof. V. Sarma",
      summary: "An illuminating expert lecture on 'Emotional Stress Coping Strategies' delivered by Prof. V. Sarma, focusing on academic pressure and emotional well-being.",
      fullDescription: "As documented on the official IIITDM Kurnool portal, the National Service Scheme Unit of IIITDM Kurnool organized an expert talk on 'Emotional Stress Coping Strategies' on 1st April 2022. Prof. V. Sarma explained the importance of mental health on one's thinking, feelings, and actions. He also discussed various biological, psychological, and environmental factors contributing to stress and guided students with actionable mindfulness techniques.",
      metrics: [
        { label: "Attendees", value: "220+" },
        { label: "Guest Speaker", value: "Prof. V. Sarma" },
        { label: "Session Duration", value: "2.5 Hours" }
      ],
      coordinator: "NSS Unit IIITDM Kurnool",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page",
      featured: true
    },
    {
      id: "ev-2022-blood-donation",
      title: "Post-Pandemic Blood Donation Drive 2022",
      year: "2022-2023",
      date: "September 17, 2022",
      category: "blood-health",
      status: "Completed",
      venue: "Old Academic Block, Ground Floor",
      partner: "Indian Red Cross Society, Kurnool",
      summary: "First major voluntary blood donation drive organized post-lockdown, witnessing enthusiastic response from returning students and staff.",
      fullDescription: "Organized to replenish local blood bank reserves. Pre-donation health checks, hemoglobin level screenings, and sanitization protocols were thoroughly maintained. 62 units of blood were safely collected.",
      metrics: [
        { label: "Units Donated", value: "62" },
        { label: "Student Volunteers", value: "35" }
      ],
      coordinator: "NSS Coordinator",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
      ],
      reportUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page",
      featured: false
    },

    // --- Legacy Archive: 2019-2018 (Directly from Existing IIITDMK Website!) ---
    {
      id: "ev-2019-tree-plantation",
      title: "Institute Tree Plantation Drive 2019",
      year: "2019-2018 Archive",
      date: "May 11, 2019",
      category: "environment",
      status: "Completed",
      venue: "Paver Block Pathway & Institute Campus Grounds",
      partner: "Andhra Pradesh Forest Department & Building Works Committee",
      summary: "Social Service Group (SSG) of IIITDM Kurnool organized a grand tree plantation drive with BWC members, Guest Speakers, and FDP participants.",
      fullDescription: "From the official IIITDM Kurnool records: 'Social Service Group (SSG) of IIITDM Kurnool organized a tree plantation drive on 11th May 2019. It was conducted second time in the academic year 2018-2019 after conducting once at the time of Institute reopening. The event was a huge success and saw active participation from BWC members, Guest Speakers, and participants of the Faculty Development Program. The participants planted saplings in designated spots along the paver block pathway in coordination with the Andhra Pradesh Forest Department.'",
      metrics: [
        { label: "Event Type", value: "Campus Greening" },
        { label: "Key Dignitaries", value: "BWC Members & Guest Speakers" },
        { label: "Location", value: "Paver Pathway" }
      ],
      coordinator: "Social Service Group (SSG) IIITDM Kurnool",
      image: "https://i.imgur.com/nwTiQYE.jpg", // Original image from existing website
      gallery: [
        "https://i.imgur.com/nwTiQYE.jpg",
        "https://i.imgur.com/HAYQWcF.png",
        "https://i.imgur.com/B5kTSRr.jpg",
        "https://i.imgur.com/awnpNvD.jpg"
      ],
      reportUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page",
      featured: true
    },
    {
      id: "ev-2019-blood-camp",
      title: "Voluntary Blood Donation Camp 2019",
      year: "2019-2018 Archive",
      date: "March 19, 2019",
      category: "blood-health",
      status: "Completed",
      venue: "IIITDM Kurnool Campus Hall",
      partner: "Indian Red Cross Society",
      summary: "Organized by the Social Service Group in association with Indian Red Cross Society. Exactly 53 units of blood were collected from 53 willing donors.",
      fullDescription: "From official records: 'The Social Service Group of IIITDM Kurnool organized a blood donation camp in association with Indian Red Cross Society on 19th of March, 2019 (Tuesday). The healthy participation by students, staff, and faculty in the event is highly appreciated. During the camp, the total 53 donors reported for blood donation and 53 units of blood was collected.'",
      metrics: [
        { label: "Donors Reported", value: "53" },
        { label: "Units Collected", value: "53" },
        { label: "Partner", value: "Indian Red Cross Society" }
      ],
      coordinator: "Social Service Group (SSG) IIITDM Kurnool",
      image: "https://i.imgur.com/9yKoPiK.png", // Original image from existing website
      gallery: [
        "https://i.imgur.com/9yKoPiK.png"
      ],
      reportUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page",
      featured: true
    },
    {
      id: "ev-2018-dental-camp",
      title: "Free Dental Health Checkup Camp 2018",
      year: "2019-2018 Archive",
      date: "August 30, 2018",
      category: "blood-health",
      status: "Completed",
      venue: "IIITDM Kurnool Campus",
      partner: "G Pulla Reddy Dental College and Hospital, Kurnool",
      summary: "First major healthcare checkup camp organized on campus in collaboration with G Pulla Reddy Dental College and Hospital.",
      fullDescription: "From official records: 'The Social Service Group (SSG) of IIITDM Kurnool in association with G Pulla Reddy Dental College and Hospital conducted a free dental health checkup camp on our campus on 30th of August, 2018 (Thursday).' Doctors provided oral examinations, tooth cleaning guidance, and prescribed treatments.",
      metrics: [
        { label: "Camp Type", value: "Free Checkup" },
        { label: "Partner", value: "G Pulla Reddy Dental College" }
      ],
      coordinator: "Social Service Group (SSG) IIITDM Kurnool",
      image: "https://i.imgur.com/zBKpwdF.png", // Original image from existing website
      gallery: [
        "https://i.imgur.com/zBKpwdF.png"
      ],
      reportUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page",
      featured: true
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. FACULTY ADVISORS & LEADERSHIP (Customizable by Professors)
  // ----------------------------------------------------------------------------
  leadership: {
    patron: {
      name: "Prof. B. S. Murty",
      designation: "Director, IIITDM Kurnool",
      role: "Chief Patron, NSS Cell",
      message: "At IIITDM Kurnool, we believe technical education finds its true culmination in social service. Our NSS volunteers embody the spirit of 'Not Me, But You' by applying their intellect and compassion to uplift neighboring communities.",
      email: "director@iiitk.ac.in",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      profileUrl: "https://iiitk.ac.in/Director's-Profile/page"
    },
    
    // Main Programme Coordinator / In-Charge
    programmeOfficer: {
      name: "Dr. Faculty-in-Charge, NSS", // Professors can change this name
      designation: "Associate Professor / Assistant Professor",
      role: "NSS Programme Officer & Coordinator",
      department: "Student Affairs & Administration",
      cabin: "Room No. 104, Academic Block-1",
      email: "nss.coordinator@iiitk.ac.in",
      phone: "+91-8518-289114",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Guiding the NSS volunteers of IIITDM Kurnool in orchestrating impactful health camps, rural educational visits, and eco-conservation initiatives."
    },

    // Departmental Faculty Advisors
    advisors: [
      {
        id: "fac-cse",
        name: "Dr. Faculty Advisor (CSE)",
        role: "Faculty Advisor - Digital & STEM Wing",
        department: "Computer Science and Engineering",
        email: "advisor.cse@iiitk.ac.in",
        cabin: "Academic Block-2, Cabin 205",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        focus: "Digital Literacy, Coding in Rural Schools, Tech for Social Good"
      },
      {
        id: "fac-ece",
        name: "Dr. Faculty Advisor (ECE)",
        role: "Faculty Advisor - Health & Blood Drive Wing",
        department: "Electronics and Communication Engineering",
        email: "advisor.ece@iiitk.ac.in",
        cabin: "Academic Block-2, Cabin 312",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
        focus: "Blood Donation Drives, Red Cross Liaison, Medical Camps"
      },
      {
        id: "fac-mech",
        name: "Dr. Faculty Advisor (ME)",
        role: "Faculty Advisor - Swachhata & Environment Wing",
        department: "Mechanical Engineering",
        email: "advisor.me@iiitk.ac.in",
        cabin: "Workshop Complex, Faculty Cabin 102",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        focus: "Campus Greening, Water Harvesting, Solar & Waste Management"
      },
      {
        id: "fac-sciences",
        name: "Dr. Faculty Advisor (Sciences)",
        role: "Faculty Advisor - Rural Engagement & Surveys",
        department: "Department of Sciences & Humanities",
        email: "advisor.sciences@iiitk.ac.in",
        cabin: "Academic Block-1, Cabin 118",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        focus: "Village Socio-economic Surveys, Mental Health Workshops, Gender Equality"
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // ----------------------------------------------------------------------------
  // 8. STUDENT CORE EXECUTIVE COMMITTEE (LEGACY & BACKWARD COMPATIBLE)
  // ----------------------------------------------------------------------------
  studentTeam: [
    {
      name: "Pranith",
      role: "President",
      roll: "125AD0039",
      year: "3rd Year B.Tech",
      department: "--",
      email: "nss.head@iiitk.ac.in",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Billa Saikrishna",
      role: "Vice-President",
      roll: "524ME0013",
      year: "3rd Year B.Tech",
      department: "ECE",
      email: "nss.colead@iiitk.ac.in",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hasini Kolluri",
      role: "Vice President",
      roll: "125AD0039",
      year: "3rd Year B.Tech",
      department: "Mechanical",
      email: "nss.health@iiitk.ac.in",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Deepika",
      role: "Tresurer",
      roll: "125AD0039",
      year: "3rd Year B.Tech",
      department: "CSE",
      email: "nss.green@iiitk.ac.in",
      image: "./assets/images/nss-team/124AD0002.jpg"
    },
    {
      name: "Duvva Sai Vivek",
      role: "Tresurer",
      roll: "125AD0039",
      year: "Third Year B.Tech",
      department: "CSE",
      email: "nss.tech@iiitk.ac.in",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // ----------------------------------------------------------------------------
  // 8B. NSS TEAM ROSTER (CURRENT & PAST YEARS - EASY TO UPDATE & MAINTAIN)
  // ----------------------------------------------------------------------------
  nssTeam: {
    current: {
      academicYear: "2025–2026",
      faculty: [
        {
          name: "Dr. Faculty-in-Charge, NSS",
          designation: "Associate Professor",
          department: "Mechanical Engineering",
          role: "NSS Programme Officer & Coordinator",
          photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Dr. Faculty Advisor (CSE)",
          designation: "Assistant Professor",
          department: "Computer Science and Engineering",
          role: "Faculty Advisor (Digital & STEM)",
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Dr. Faculty Advisor (ECE)",
          designation: "Assistant Professor",
          department: "Electronics and Communication Engineering",
          role: "Faculty Advisor (Health & Blood Drives)",
          photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Dr. Faculty Advisor (Sciences)",
          designation: "Assistant Professor",
          department: "Sciences & Humanities",
          role: "Faculty Advisor (Rural Outreach)",
          photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
        }
      ],
      students: [
        {
          name: "Aarav Sharma",
          role: "President",
          branch: "B.Tech Final Year",
          department: "Computer Science and Engineering",
          photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Pooja Reddy",
          role: "Vice President",
          branch: "B.Tech Final Year",
          department: "Electronics and Communication Engineering",
          photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Rohan Varma",
          role: "Treasurer",
          branch: "B.Tech Pre-Final Year",
          department: "Mechanical Engineering",
          photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Ananya Iyer",
          role: "General Secretary",
          branch: "B.Tech Pre-Final Year",
          department: "Computer Science and Engineering",
          photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Karthik Nair",
          role: "Health Wing Lead",
          branch: "B.Tech Third Year",
          department: "Mechanical Engineering",
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Sneha Patel",
          role: "Environment Wing Lead",
          branch: "B.Tech Third Year",
          department: "Computer Science and Engineering",
          photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    pastTeams: [
      {
        year: "2024–2025",
        faculty: [
          {
            name: "Dr. Faculty-in-Charge, NSS",
            designation: "Associate Professor",
            department: "Mechanical Engineering",
            role: "NSS Programme Officer",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Dr. Faculty Advisor (ECE)",
            designation: "Assistant Professor",
            department: "Electronics and Communication Engineering",
            role: "Faculty In-Charge",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
          }
        ],
        students: [
          {
            name: "Vikram Malhotra",
            role: "President",
            branch: "B.Tech",
            department: "Computer Science and Engineering",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Kavya Deshmukh",
            role: "Vice President",
            branch: "B.Tech",
            department: "Electronics and Communication Engineering",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Aditya Prakash",
            role: "Treasurer",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Divya Nambiar",
            role: "Secretary",
            branch: "B.Tech",
            department: "Computer Science and Engineering",
            photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
          }
        ]
      },
      {
        year: "2023–2024",
        faculty: [
          {
            name: "Dr. Faculty Advisor (Sciences)",
            designation: "Assistant Professor",
            department: "Sciences & Humanities",
            role: "NSS Programme Officer",
            photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Dr. Faculty Advisor (CSE)",
            designation: "Assistant Professor",
            department: "Computer Science and Engineering",
            role: "Faculty In-Charge",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
          }
        ],
        students: [
          {
            name: "Siddharth Rao",
            role: "President",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Meera Krishnan",
            role: "Vice President",
            branch: "B.Tech",
            department: "Computer Science and Engineering",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Pranav Joshi",
            role: "Treasurer",
            branch: "B.Tech",
            department: "Electronics and Communication Engineering",
            photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80"
          },
          {
            name: "Ritu Singhania",
            role: "Secretary",
            branch: "B.Tech",
            department: "Computer Science and Engineering",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 9. PHOTO GALLERY (With Filter Tags)
  // ----------------------------------------------------------------------------
  gallery: [
    {
      id: "gal-1",
      title: "Tree Plantation along Paver Block Pathway",
      category: "environment",
      year: "Historical",
      imageUrl: "https://i.imgur.com/nwTiQYE.jpg",
      caption: "BWC members, guest speakers, and faculty planting saplings in coordination with AP Forest Department."
    },
    {
      id: "gal-2",
      title: "Red Cross Blood Donation Camp",
      category: "blood-health",
      year: "Historical",
      imageUrl: "https://i.imgur.com/9yKoPiK.png",
      caption: "Active participation by IIITDM Kurnool students and faculty, collecting 53 units of blood."
    },
    {
      id: "gal-3",
      title: "Free Dental Health Checkup Camp",
      category: "blood-health",
      year: "Historical",
      imageUrl: "https://i.imgur.com/zBKpwdF.png",
      caption: "G Pulla Reddy Dental College doctors examining students and staff on campus."
    },
    {
      id: "gal-4",
      title: "Campus Tree Sapling Care",
      category: "environment",
      year: "Historical",
      imageUrl: "https://i.imgur.com/B5kTSRr.jpg",
      caption: "Participants nurturing young plants on the scenic Jagannathagattu campus."
    },
    {
      id: "gal-5",
      title: "Volunteer Group Planting Drive",
      category: "environment",
      year: "Historical",
      imageUrl: "https://i.imgur.com/awnpNvD.jpg",
      caption: "Social Service Group members planting trees to enhance biodiversity."
    },
    {
      id: "gal-6",
      title: "Annual Mega Blood Donation Drive 2026",
      category: "blood-health",
      year: "2025-2026",
      imageUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80",
      caption: "Student donors receiving certificates and juice after contributing units."
    },
    {
      id: "gal-7",
      title: "School Students Robotics & STEM Outreach",
      category: "education",
      year: "2025-2026",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      caption: "Interactive demonstration of basic computing to rural high school students."
    },
    {
      id: "gal-8",
      title: "National Youth Day 5K Run",
      category: "community",
      year: "2024-2025",
      imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80",
      caption: "Students running for unity and physical fitness on Swami Vivekananda Jayanti."
    }
  ],

  // ----------------------------------------------------------------------------
  // 10. FREQUENTLY ASKED QUESTIONS (FAQs)
  // ----------------------------------------------------------------------------
  faqs: [
    {
      question: "How can students enroll in the NSS Unit of IIITDM Kurnool?",
      answer: "All undergraduate students can register at the beginning of each academic semester through our online volunteer portal or by attending the NSS Orientation held during induction week. Participation earns mandatory non-academic extracurricular credits as per institute curriculum."
    },
    {
      question: "How many hours of community service are required for NSS certification?",
      answer: "Volunteers are typically required to complete a minimum of 120 hours of regular community service per academic year, along with participation in one special 7-day rural camp to be eligible for the prestigious National Service Scheme Certificate."
    },
    {
      question: "Where can I view the archives of previous years' events?",
      answer: "You can explore events right here in the 'Events Conducted' section using the year filter tabs (Current Year, 2024, 2023, 2022, 2019-2018 Archive). You can also click the top banner link anytime to view the legacy IIITDM Kurnool Social Service Group page."
    },
    {
      question: "Can faculty and non-teaching staff participate in NSS events?",
      answer: "Yes! Faculty members, administrative officers, and staff regularly participate as donors in our blood donation drives, tree plantation campaigns, and expert mentoring sessions."
    }
  ]
};
