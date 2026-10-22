/**
 * ==============================================================================
 * IIITDM KURNOOL - NATIONAL SERVICE SCHEME (NSS) PORTAL DATA TEMPLATE
 * ==============================================================================
 * This file contains all dynamic configuration and content for the NSS portal.
 * Professors, Faculty Advisors, and Student Coordinators can easily update,
 * add, or remove data below without writing any HTML or CSS code.
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
  // 2B. PRELOADER CONFIGURATION (GLOBAL - AUTO-REFLECTS ON EVERY PAGE)
  // ----------------------------------------------------------------------------
  preloader: {
    enabled: true,
    title: "National Service Scheme",
    subtitle: "IIITDM Kurnool",
    motto: "Not Me, But You • राष्ट्रीय सेवा योजना",
    minDisplayTimeMs: 400, // Smooth minimal visible duration for crisp UX
    fadeDurationMs: 350
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
  // 6. MASTER EVENT REPOSITORY (ALL EVENTS - SORTED NEWEST FIRST)
  // ----------------------------------------------------------------------------
  events: [
    {
        "id": "ev-2026-world-ozone-day",
        "title": "Seed Planting Drive – World Ozone Day 2026",
        "year": "2025-2026",
        "date": "September 16, 2026",
        "category": "environment",
        "status": "Completed",
        "venue": "Kalpana Chawla (Girls Hostel), Cricket Ground, Near Workshop, & Near SFC",
        "partner": "IIITDM Kurnool Administration",
        "summary": "NSS Unit of IIITDM Kurnool organized a campus-wide seed planting drive on 16 September 2026 to commemorate World Ozone Day under the theme 'Healthy Ozone | Healthy Planet | Brighter Tomorrow'.",
        "fullDescription": "The NSS Unit of IIITDM Kurnool organized a seed planting drive on the occasion of World Ozone Day on 16 September 2026 across strategic zones including Kalpana Chawla Girls Hostel, Cricket Ground, Workshop area, and SFC. Student volunteers planted seeds to support afforestation, enhance biodiversity, and spread awareness on ozone layer preservation.",
        "metrics": [
            {
                "label": "Campus Zones Planted",
                "value": "4"
            },
            {
                "label": "Drive Duration",
                "value": "1.5 Hrs"
            },
            {
                "label": "Student Engagement",
                "value": "100%"
            }
        ],
        "coordinator": "NSS Unit, IIITDM Kurnool",
        "image": "assets/images/events/event0007/IMG_3040.JPG",
        "gallery": [
            "assets/images/events/event0007/IMG_3040.JPG",
            "assets/images/events/event0007/IMG_3045.JPG",
            "assets/images/events/event0007/IMG_3054.JPG",
            "assets/images/events/event0007/IMG_3059.JPG",
            "assets/images/events/event0007/IMG_3103.JPG",
            "assets/images/events/event0007/IMG_3126.JPG",
            "assets/images/events/event0007/IMG_3132.JPG"
        ],
        "reportUrl": "assets/images/events/event0007/World_Ozone_Day_2026_Report.pdf",
        "featured": true,
        "pageUrl": "events/event0007.html"
    },
    {
        "id": "ev-2026-orphanage-visit",
        "title": "Orphanage Visit & Outreach 2026",
        "year": "2025-2026",
        "date": "August 23, 2026",
        "category": "community",
        "status": "Completed",
        "venue": "Local Children's Home & Orphanage, Kurnool District",
        "partner": "District Child Welfare Committee & Community Care Trust",
        "summary": "NSS IIITDM Kurnool conducted a meaningful orphanage visit on 23rd August 2026, engaging children in science activities, games, and distributing school kits and essentials.",
        "fullDescription": "On 23rd August 2026, student volunteers and faculty representatives from the NSS Unit of IIITDM Kurnool conducted an Orphanage Visit and Child Welfare Outreach Programme at a local children's home. Volunteers organized science activities, storytelling, and distributed educational kits and sports gear.",
        "metrics": [
            {
                "label": "Children Engaged",
                "value": "80+"
            },
            {
                "label": "Student Volunteers",
                "value": "35"
            },
            {
                "label": "Kits & Books Distributed",
                "value": "100+"
            }
        ],
        "coordinator": "NSS Community Outreach & Child Welfare Wing",
        "image": "assets/images/events/event0008/IMG_6603.JPG",
        "gallery": [
            "assets/images/events/event0008/APE06619_1.JPG",
            "assets/images/events/event0008/APE06621.JPG",
            "assets/images/events/event0008/APE06657.JPG",
            "assets/images/events/event0008/APE06659.JPG",
            "assets/images/events/event0008/IMG_6603.JPG",
            "assets/images/events/event0008/IMG_6632.JPG",
            "assets/images/events/event0008/IMG_6702.JPG",
            "assets/images/events/event0008/IMG_6862.JPG",
            "assets/images/events/event0008/IMG_6926.JPG"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0008.html"
    },
    {
        "id": "ev-2026-womens-day",
        "title": "Women's Day Celebrations 2026",
        "year": "2025-2026",
        "date": "March 08, 2026",
        "category": "community",
        "status": "Completed",
        "venue": "Auditorium & Seminar Hall, IIITDM Kurnool",
        "partner": "Internal Complaints Committee (ICC) & Student Affairs",
        "summary": "International Women's Day was celebrated at IIITDM Kurnool with keynotes, panel discussions, self-defense demonstrations, and felicitations recognizing women in STEM and leadership.",
        "fullDescription": "On 8th March 2026, the NSS unit of IIITDM Kurnool celebrated International Women's Day, honoring women achievers in academia and engineering. The event gathered students, faculty, and staff for panel discussions, cultural presentations, and felicitation ceremonies.",
        "metrics": [
            {
                "label": "Participants",
                "value": "200+"
            },
            {
                "label": "Event Scope",
                "value": "Full Day"
            },
            {
                "label": "Achievers Felicitated",
                "value": "15"
            }
        ],
        "coordinator": "NSS Gender Equity & Women Empowerment Cell",
        "image": "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.44.10 PM_7.jpeg",
        "gallery": [
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.38.22 PM_1.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.38.23 PM_2.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.38.23 PM_3.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.38.23 PM_4.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.38.24 PM_5.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.43.26 PM_9.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.43.27 PM_10.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.44.10 PM_7.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.44.57 PM_11.jpeg",
            "assets/images/events/event0006/WhatsApp Image 2026-09-24 at 10.44.57 PM_8.jpeg"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0006.html"
    },
    {
        "id": "ev-2026-road-safety",
        "title": "Road Safety Awareness Programme",
        "year": "2025-2026",
        "date": "January 31, 2026",
        "category": "community",
        "status": "Completed",
        "venue": "Krishna Seminar Hall",
        "partner": "District Traffic Police & Transport Department",
        "summary": "NSS IIITDM Kurnool conducted an impactful Road Safety Awareness Programme at Krishna Seminar Hall, sensitizing students and campus residents on traffic norms, helmet rules, defensive driving, and life-saving accident response.",
        "fullDescription": "The National Service Scheme (NSS) unit of IIITDM Kurnool organized a comprehensive Road Safety Awareness Programme on 31st January 2026 at Krishna Seminar Hall. Faculty coordinators and road safety experts emphasized accident prevention, emergency protocols, and the role of youth in fostering civic discipline on roads.",
        "metrics": [
            {
                "label": "Participants & Volunteers",
                "value": "180+"
            },
            {
                "label": "Workshop Duration",
                "value": "1 Day"
            },
            {
                "label": "Safety Pledge",
                "value": "100%"
            }
        ],
        "coordinator": "NSS Programme Officer & Faculty Advisors",
        "image": "assets/images/events/event0001/E0001-IMG001.jpeg",
        "gallery": [
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.35 PM_6.jpeg",
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.37 PM_5.jpeg",
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.38 PM_3.jpeg",
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.38 PM_4.jpeg",
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.39 PM.jpeg",
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.39 PM_1.jpeg",
            "assets/images/events/event0001/WhatsApp Image 2026-09-24 at 10.16.39 PM_2.jpeg"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0001.html"
    },
    {
        "id": "ev-2026-republic-day",
        "title": "Republic Day Celebrations 2026",
        "year": "2025-2026",
        "date": "January 26, 2026",
        "category": "community",
        "status": "Completed",
        "venue": "Institute Central Plaza & Main Flag Post, IIITDM Kurnool",
        "partner": "Student Affairs & Cultural Council",
        "summary": "The 77th Republic Day was celebrated with patriotic fervor at IIITDM Kurnool with ceremonial flag hoisting, volunteer parade inspection, Director's address, and cultural performances.",
        "fullDescription": "The 77th Republic Day was celebrated with profound patriotic fervor and enthusiasm at IIITDM Kurnool on 26th January 2026. The event commenced with flag hoisting by the Director, followed by national anthem, NSS volunteer parade, and cultural presentations.",
        "metrics": [
            {
                "label": "Faculty & Students",
                "value": "500+"
            },
            {
                "label": "Republic Day",
                "value": "77th"
            },
            {
                "label": "Honor Guard Volunteers",
                "value": "45"
            }
        ],
        "coordinator": "NSS Unit & Institute Administration",
        "image": "assets/images/events/event0003/IMG_0175.JPG",
        "gallery": [
            "assets/images/events/event0003/IMG_0001.JPG",
            "assets/images/events/event0003/IMG_0043.JPG",
            "assets/images/events/event0003/IMG_0140.JPG",
            "assets/images/events/event0003/IMG_0175.JPG",
            "assets/images/events/event0003/IMG_0216.JPG",
            "assets/images/events/event0003/IMG_0304.JPG",
            "assets/images/events/event0003/IMG_0333.JPG",
            "assets/images/events/event0003/IMG_0345.JPG",
            "assets/images/events/event0003/IMG_0366.JPG",
            "assets/images/events/event0003/IMG_0422.JPG",
            "assets/images/events/event0003/IMG_0582.JPG"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0003.html"
    },
    {
        "id": "ev-2026-3k-republic-run",
        "title": "3K Republic Run 2026",
        "year": "2025-2026",
        "date": "January 25, 2026",
        "category": "community",
        "status": "Completed",
        "venue": "Campus Main Gate to Hillock Circuit, IIITDM Kurnool",
        "partner": "Sports Council & Fit India Movement Cell",
        "summary": "A high-energy 3K Republic Run held on the eve of Republic Day promoting physical fitness, national unity, and active living across the scenic Jagannathagattu campus.",
        "fullDescription": "On the eve of the 77th Republic Day, the NSS Unit of IIITDM Kurnool organized the 3K Republic Run on 25th January 2026. Over 300 runners participated across the hillock perimeter route promoting fitness and patriotism under Fit India.",
        "metrics": [
            {
                "label": "Student Runners",
                "value": "300+"
            },
            {
                "label": "Course Length",
                "value": "3 km"
            },
            {
                "label": "Route Marshals",
                "value": "40"
            }
        ],
        "coordinator": "NSS Unit & Physical Education Department",
        "image": "assets/images/events/event0004/IMG_0285.JPG",
        "gallery": [
            "assets/images/events/event0004/IMG_0023.JPG",
            "assets/images/events/event0004/IMG_0040.JPG",
            "assets/images/events/event0004/IMG_0043.JPG",
            "assets/images/events/event0004/IMG_0285.JPG"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0004.html"
    },
    {
        "id": "ev-2026-national-youth-day",
        "title": "National Youth Day 2026",
        "year": "2025-2026",
        "date": "January 24, 2026",
        "category": "community",
        "status": "Completed",
        "venue": "Seminar Hall & Campus Auditorium, IIITDM Kurnool",
        "partner": "Literary & Debate Club & Student Affairs",
        "summary": "National Youth Day commemorated at IIITDM Kurnool honoring Swami Vivekananda's birth anniversary with youth symposium, keynote speeches, and student elocution sessions.",
        "fullDescription": "On 24th January 2026, the NSS unit of IIITDM Kurnool commemorated National Youth Day celebrating the ideals of Swami Vivekananda. The celebration featured floral tributes, keynote faculty lectures, and competitive student elocution on nation building.",
        "metrics": [
            {
                "label": "Youth Participants",
                "value": "250+"
            },
            {
                "label": "Vivekananda Jayanti",
                "value": "163rd"
            },
            {
                "label": "Elocution Finalists",
                "value": "18"
            }
        ],
        "coordinator": "NSS Youth & Leadership Wing",
        "image": "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.40 PM_8.jpeg",
        "gallery": [
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.38 PM_1.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.38 PM_2.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.38 PM_3.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.39 PM_4.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.39 PM_5.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.39 PM_6.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.40 PM_7.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.40 PM_8.jpeg",
            "assets/images/events/event0005/WhatsApp Image 2026-09-24 at 10.25.40 PM_9.jpeg"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0005.html"
    },
    {
        "id": "ev-2025-medical-camp-kethavaram",
        "title": "Medical Camp @Kethavaram",
        "year": "2025-2026",
        "date": "December 28, 2025",
        "category": "blood-health",
        "status": "Completed",
        "venue": "Kethavaram Village (Adopted Cluster)",
        "partner": "Govt General Hospital, Kurnool & Primary Health Centre",
        "summary": "Free rural health check-up, pediatric evaluation, diagnostic screening, and medicine distribution camp organized by NSS IIITDM Kurnool volunteers at Kethavaram village.",
        "fullDescription": "On 28th December 2025, the NSS unit of IIITDM Kurnool organized a comprehensive Free Medical Camp at Kethavaram Village. Over 240 villagers and school children received health screenings, diagnostic evaluations, and free medicines.",
        "metrics": [
            {
                "label": "Villagers Screened",
                "value": "240+"
            },
            {
                "label": "Student Volunteers",
                "value": "35"
            },
            {
                "label": "Free Medicines",
                "value": "100%"
            }
        ],
        "coordinator": "NSS Health & Wellness Wing",
        "image": "assets/images/events/dental-health-screening.jpg",
        "gallery": [
            "assets/images/events/dental-health-screening.jpg",
            "assets/images/events/rural-residential-camp.jpg"
        ],
        "reportUrl": "#",
        "featured": true,
        "pageUrl": "events/event0002.html"
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
      image: "./assets/images/director.jpg",
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
    }
  },

  // ----------------------------------------------------------------------------
  // 8B. NSS TEAM ROSTER (CURRENT & PAST YEARS - EASY TO UPDATE & MAINTAIN)
  // ----------------------------------------------------------------------------
  nssTeam: {
    current: {
      academicYear: "2026–2027",
      faculty: [
        {
          name: "Dr. Somnath Dey",
          designation: "Assistant Professor",
          department: "Dept. of ME",
          email: "sdey@iiitk.ac.in",
          role: "Faculty-in-Charge, NSS",
          photo: "./assets/images/nss-team/sdey.jpg"
        },
        {
          name: "Dr. K. Elangovan",
          designation: "Assistant Professor",
          department: "Dept. of ECE",
          email: "elango.k@iiitk.ac.in",
          role: "Faculty-in-Charge, NSS",
          photo: "./assets/images/nss-team/elangovan.jpg"
        }
      ],
      students: [
        {
          name: "Pranith",
          role: "President",
          roll: "524ME0013",
          branch: "3rd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/524ME0013.jpg"
        },
        {
          name: "Billa Saikrishna",
          role: "Vice-President",
          roll: "124AD0047",
          branch: "3rd Year B.Tech",
          department: "AIDS",
          photo: "./assets/images/nss-team/2026-27/124AD0047.jpg"
        },
        {
          name: "Hasini Kolluri",
          role: "Vice President",
          roll: "124AD0017",
          branch: "3rd Year B.Tech",
          department: "AIDS",
          photo: "./assets/images/nss-team/2026-27/124AD0017.jpg"
        },
        {
          name: "Priya Deepika",
          role: "Treasurer",
          roll: "124AD0002",
          branch: "3rd Year B.Tech",
          department: "AIDS",
          photo: "./assets/images/nss-team/2026-27/124AD0002.jpg"
        },
        {
          name: "Duvva Sai Vivek",
          role: "Treasurer",
          roll: "124AD0048",
          branch: "3rd Year B.Tech",
          department: "AIDS",
          photo: "./assets/images/nss-team/2026-27/124AD0048.jpg"
        },
        {
          name: "Ashwin Jain",
          role: "Member",
          roll: "125AD0039",
          branch: "2nd Year B.Tech",
          department: "AIDS",
          photo: "./assets/images/nss-team/2026-27/125AD0039.jpg"
        },
        {
          name: "Prachi Arya",
          role: "Member",
          roll: "125ME0005",
          branch: "2nd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/125ME0005.jpg"
        },
        {
          name: "Samyak Prakash",
          role: "Member",
          roll: "125CS0066",
          branch: "2nd Year B.Tech",
          department: "CS",
          photo: "./assets/images/nss-team/2026-27/125CS0066.jpg"
        },
        {
          name: "Animesh",
          role: "Member",
          roll: "125ME0039",
          branch: "2nd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/125ME0039.jpg"
        },
        {
          name: "Satyam Kumar",
          role: "Member",
          roll: "125ME0047",
          branch: "2nd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/125ME0047.jpg"
        },
        {
          name: "Gorla Srujan",
          role: "Member",
          roll: "125ME0033",
          branch: "2nd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/125ME0033.jpg"
        },
        {
          name: "Ram Charan",
          role: "Member",
          roll: "125CS0007",
          branch: "2nd Year B.Tech",
          department: "CSE",
          photo: "./assets/images/nss-team/2026-27/125CS0007.jpg"
        },
        {
          name: "Charitha",
          role: "Member",
          roll: "125CS0015",
          branch: "2nd Year B.Tech",
          department: "CSE",
          photo: "./assets/images/nss-team/2026-27/125CS0015.jpg"
        },
        {
          name: "Ekshitha Royal",
          role: "Member",
          roll: "125EC0014",
          branch: "2nd Year B.Tech",
          department: "ECE",
          photo: "./assets/images/nss-team/2026-27/125EC0014.jpg"
        },
        {
          name: "Lekana Akshaya",
          role: "Member",
          roll: "525CS0011",
          branch: "2nd Year B.Tech",
          department: "CSE",
          photo: "./assets/images/nss-team/2026-27/525CS0011.jpg"
        },
        {
          name: "Rahul P",
          role: "Member",
          roll: "525ME0008",
          branch: "2nd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/525ME0008.jpg"
        },
        {
          name: "Sandeep V",
          role: "Member",
          roll: "525ME0001",
          branch: "2nd Year B.Tech",
          department: "ME",
          photo: "./assets/images/nss-team/2026-27/525ME0001.jpg"
        },
        {
          name: "Jaswanth",
          role: "Member",
          roll: "525EC0003",
          branch: "2nd Year B.Tech",
          department: "ECE",
          photo: "./assets/images/nss-team/2026-27/525EC0003.jpg"
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
          }
        ],
        students: [
          {
            name: "Vikram Malhotra",
            role: "President",
            branch: "B.Tech",
            department: "Computer Science and Engineering",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
          }
        ]
      },
      {
        year: "2023–2024",
        faculty: [
          {
            name: "Dr. Noel Nittala",
            designation: "Faculty-in-Charge & Program Officer",
            department: "Sciences & Humanities",
            role: "FIC NSS & Program Officer",
            photo: "./assets/images/nss-team/23-24/dr_noel_nittala_fic_nss_program_officer.jpeg"
          },
          {
            name: "Dr. V. Siva Prasad",
            designation: "Program Officer",
            department: "Mechanical Engineering",
            role: "Program Officer",
            photo: "./assets/images/nss-team/23-24/dr_v_siva_prasad_program_officer.jpg"
          }
        ],
        students: [
          {
            name: "Sumanth Siddamsetty",
            role: "President",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/sumanth_siddamsetty_president.jpg"
          },
          {
            name: "Aryan Kumar",
            role: "Vice-President",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/23-24/aryan_kumar_vice_president.jpg"
          },
          {
            name: "Prasanthi",
            role: "Vice-President",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/23-24/prasanthi_vice_president.jpg"
          },
          {
            name: "Sumanth Segu",
            role: "Treasurer",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/sumanth_segu_treasurer.jpg"
          },
          {
            name: "Rohith Sonawane",
            role: "Chief-Secretary",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/rohith_sonawane_chief_secretary.jpg"
          },
          {
            name: "Jyothi Singh",
            role: "Chief-Secretary",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/23-24/jyothi_singh_chief_secretary.jpg"
          },
          {
            name: "Aditya Rai",
            role: "Conveyer",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/aditya_rai_conveyer.jpg"
          },
          {
            name: "Kushal",
            role: "CSE-Secretary",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/23-24/kushal_cse_secretary.jpg"
          },
          {
            name: "Suguna Sree",
            role: "CSE-Secretary",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/23-24/suguna_sree_cse_secretary.jpg"
          },
          {
            name: "Mahesh Chituri",
            role: "ECE-Secretary",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/23-24/mahesh_chituri_ece_secretary.jpg"
          },
          {
            name: "Nathanya",
            role: "ECE-Secretary",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/23-24/nathanya_ece_secretary.jpg"
          },
          {
            name: "Sanchay",
            role: "Mech-Secretary",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/sanchay_mech_secretary.jpg"
          },
          {
            name: "Sai Priya",
            role: "Mech-Secretary",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/sai_priya_mech_secretary.jpg"
          },
          {
            name: "Manjunath",
            role: "AI&DS-Secretary",
            branch: "B.Tech",
            department: "Artificial Intelligence & Data Science",
            photo: "./assets/images/nss-team/23-24/manjunath_aids_secretary.jpg"
          },
          {
            name: "Sathvika",
            role: "AI&DS-Secretary",
            branch: "B.Tech",
            department: "Artificial Intelligence & Data Science",
            photo: "./assets/images/nss-team/23-24/sathvika_aids_secretary.jpg"
          },
          {
            name: "Aditya Yadav",
            role: "Media",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/23-24/aditya_yadav_media.jpg"
          },
          {
            name: "Subhash Teku",
            role: "Media",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/23-24/subhash_teku_media.jpg"
          },
          {
            name: "Ashutosh Mishra",
            role: "Photography",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/23-24/ashutosh_mishra_photography.jpg"
          },
          {
            name: "Kaustubh",
            role: "Photography",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/23-24/kaustubh_photography.jpg"
          }
        ]
      },
      {
        year: "2021–2022",
        faculty: [
          {
            name: "Dr. Noel Nittala",
            designation: "Assistant Professor",
            department: "Department of Science",
            role: "FIC NSS & Program Officer",
            photo: "./assets/images/nss-team/21-22/dr_noel_nittala_fic_nss_program_officer.png"
          },
          {
            name: "Dr. V. Siva Prasad",
            designation: "Assistant Professor",
            department: "Mechanical Engineering",
            role: "Program Officer",
            photo: "./assets/images/nss-team/21-22/dr_v_siva_prasad_program_officer.jpg"
          }
        ],
        students: [
          {
            name: "Ayush Shukla",
            role: "President",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/21-22/ayush_shukla_president.jpg"
          },
          {
            name: "Lavish Singh",
            role: "Vice-President",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/21-22/lavish_singh_vice_president.jpg"
          },
          {
            name: "Aditya Pandey",
            role: "Chief-Secretary",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/21-22/aditya_pandey_chief_secretary.jpg"
          },
          {
            name: "Rishitha Reddy",
            role: "Joint Secretary",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/21-22/rishitha_reddy_joint_secretary.png"
          },
          {
            name: "Devesh Arya",
            role: "Media-Incharge",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/21-22/devesh_arya_media_incharge.jpg"
          },
          {
            name: "Sandeep Anand",
            role: "CSE-Secretary",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/21-22/sandeep_anand_cse_secretary.jpg"
          },
          {
            name: "Vineela",
            role: "CSE-Secretary",
            branch: "B.Tech",
            department: "Computer Science & Engineering",
            photo: "./assets/images/nss-team/21-22/vineela_cse_secretary.jpg"
          },
          {
            name: "Sudeepthi",
            role: "ECE-Secretary",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/21-22/sudeepthi_ece_secretary.jpg"
          },
          {
            name: "Shubham Gehlot",
            role: "ECE-Secretary",
            branch: "B.Tech",
            department: "Electronics & Communication Engineering",
            photo: "./assets/images/nss-team/21-22/shubham_gehlot_ece_secretary.jpg"
          },
          {
            name: "Shiv Shankar Kumar",
            role: "Mech-Secretary",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/21-22/shiv_shankar_kumar_mech_secretary.jpg"
          },
          {
            name: "Rama Devi",
            role: "Mech-Secretary",
            branch: "B.Tech",
            department: "Mechanical Engineering",
            photo: "./assets/images/nss-team/21-22/rama_devi_mech_secretary.jpg"
          },
          {
            name: "Sindhu Priya",
            role: "AI&DS-Secretary",
            branch: "B.Tech",
            department: "Artificial Intelligence & Data Science",
            photo: "./assets/images/nss-team/21-22/sindhu_priya_aids_secretary.jpg"
          },
          {
            name: "Sujan",
            role: "AI&DS-Secretary",
            branch: "B.Tech",
            department: "Artificial Intelligence & Data Science",
            photo: "./assets/images/nss-team/21-22/sujan_aids_secretary.jpg"
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
  // 10. NSS in News & Media (Press Releases, Articles, and Media Coverage)
  // ----------------------------------------------------------------------------

  news: [
    {
      title: "IIITDM Kurnool NSS Volunteers serve prasadam, refreshments to devotees",
      date: "February 15, 2026",
      source: "The Hindu",
      image: "./assets/images/news/iiitdm-nss-prasadam-service.jpg",
      link: "https://www.thehindu.com/news/national/andhra-pradesh/iiitdm-kurnool-nss-volunteers-serve-prasadam-refreshments-to-devotees/article70635865.ece"
    },
    {
      title: "Blood Donation Drive held at IIITDM Kurnool as part of I-Day fete",
      date: "August 15, 2025",
      source: "The Hindu",
      image: "./assets/images/news/blood-donation-drive-79th-independence.jpg",
      link: "https://www.thehindu.com/news/national/andhra-pradesh/blood-donation-camp-held-at-iiitdm-as-part-of-i-day-fete/article69936755.ece"
    },
  ],

  // ----------------------------------------------------------------------------
  // 11. FREQUENTLY ASKED QUESTIONS (FAQs)
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
