# IIITDM Kurnool - National Service Scheme (NSS) Portal Template

A dynamic, graphically designed, and highly interactive website interface for the **National Service Scheme (NSS)** section of the **Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Kurnool**.

Inspired by the NSS portals of premier institutions (**IIT Guwahati, IIT Roorkee, and IIT Bombay**), this portal is built as a **flexible, professor-friendly template** where all required information (events conducted in 20XX, events conducted this year, faculty advisors, coordinators, and impact metrics) can be easily filled in or updated by professors and staff.

---

## 🌟 Key Features

1. **Inspiration from IIT Guwahati, IIT Roorkee, & IIT Bombay**:
   - Modern glassmorphic cards with academic navy (`#0a192f`) and NSS crimson (`#c53030`) color palette.
   - Dynamic animated impact counters (Volunteers, Blood Units, Trees Planted, Service Hours).
   - Four core focus wings: *Health & Blood Donation, Swachhata & Greenery, STEM & Digital Literacy, Rural Community Welfare*.
2. **Prominent Existing Website Redirection**:
   - Direct link to the existing IIITDM Kurnool NSS website: [https://iiitk.ac.in/Activities/Social-Service-Group/page](https://iiitk.ac.in/Activities/Social-Service-Group/page).
   - Displayed prominently in the top notification banner, navbar quick-action button, and footer.
3. **Multi-Year Event Repository (20XX & Current Year)**:
   - Dynamic year tab switcher: **"Current Year (2025-26)"**, **"2024-2025"**, **"2023-2024"**, **"2022-2023"**, and **"2019-2018 Archive"**.
   - Category filtering (Health & Blood, Environment, STEM, Community Service).
   - Instant live search bar by title, venue, and partner.
   - Interactive Event Detail Modal with key metrics, full report, and photo gallery.
4. **Faculty Advisors & Leadership Directory**:
   - Chief Patron: **Prof. B. S. Murty** (Director, IIITDM Kurnool).
   - NSS Programme Officer & Faculty In-Charge card.
   - Departmental Faculty Advisors across Computer Science, Electronics & Communication, Mechanical, and Sciences.
   - Student Executive Committee directory.
5. **Interactive Photo Gallery**:
   - Responsive grid with hover preview and full-screen image lightbox.
6. **Student Volunteer Registration**:
   - Interactive modal with form validation for students to enroll in NSS.
7. **In-Browser Professor / Data Manager Mode**:
   - A floating editor button (`👨‍🏫 Professor / Template Editor`) on the website allowing professors to visually add events, edit faculty info, preview changes live, and download or copy the updated `data.js` file with one click!

---

## 📂 Project Directory Structure

```
iiitdmk-nss-portal/
├── index.html            # Main semantic HTML5 template
├── css/
│   └── styles.css        # Responsive styling, modern animations & design tokens
├── js/
│   ├── data.js           # Central configuration file for professors to fill in
│   ├── app.js            # Core interactive application logic & filters
│   └── editor.js         # Professor / Template in-browser editing tool
└── README.md             # Documentation & guide
```

---

## 🚀 How to Run Locally

This website has **zero external build dependencies or Node.js requirements**. You can run it immediately on any computer:

### Option 1: Direct Browser
Simply double-click on `index.html` to open it in your preferred browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Python Web Server (Recommended)
In PowerShell or Terminal, navigate to the folder and run:
```powershell
python -m http.server 8000 --directory C:\Users\samya\.gemini\antigravity\scratch\iiitdmk-nss-portal
```
Then open your browser and navigate to:
```
http://localhost:8000
```

---

## ✏️ How Professors Can Fill in and Update Data

All portal data is decoupled into `js/data.js`. You have two convenient ways to update the content:

### Method A: Using the In-Browser Template Editor (Easiest)
1. Open the website in your browser.
2. Click the floating **"Professor / Template Editor"** button in the bottom-right corner.
3. Fill in the event details (Title, Year, Date, Category, Summary, Metrics).
4. Click **"Add & Preview on Page"** to see it immediately update the live website.
5. Go to the **"Export Code"** tab and click **"Download data.js"** to replace the existing `js/data.js` file!

### Method B: Directly Editing `js/data.js`
Open `js/data.js` in any text editor (Notepad, VS Code, etc.). The file is fully commented:
- **To add an event for a new year (e.g. 2026)**: Add an object to the `events` array:
  ```javascript
  {
    id: "ev-2026-tree-plantation",
    title: "Monsoon Tree Plantation Drive 2026",
    year: "2025-2026",
    date: "July 20, 2026",
    category: "environment",
    status: "Upcoming",
    venue: "East Campus Boundary",
    partner: "AP Forest Department",
    summary: "Targeting 500 saplings across the Jagannathagattu campus.",
    metrics: [
      { label: "Target Saplings", value: "500" },
      { label: "Volunteers", value: "100" }
    ],
    coordinator: "Faculty Advisor (Environment)",
    image: "https://example.com/photo.jpg",
    gallery: ["https://example.com/photo.jpg"]
  }
  ```
- **To update Faculty Advisors**: Edit the `leadership` section:
  ```javascript
  leadership: {
    programmeOfficer: {
      name: "Dr. [Faculty Name]",
      designation: "Assistant Professor",
      department: "Department of Computer Science & Engineering",
      email: "advisor@iiitk.ac.in",
      cabin: "Room 105, Academic Block-1"
    }
  }
  ```
- **To change the Legacy Redirection URL**:
  ```javascript
  institute: {
    legacyWebsiteUrl: "https://iiitk.ac.in/Activities/Social-Service-Group/page"
  }
  ```

---

## 🌐 Deploying to IIITDM Kurnool Web Server

Since this is a lightweight static web portal, you can deploy it instantly:
- **Institute Apache/Nginx Server**: Copy the `iiitdmk-nss-portal` directory to `/var/www/html/nss/` or the designated virtual host directory.
- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages under *Settings > Pages*.
- **Samarth / College Subdomain**: Point `nss.iiitk.ac.in` or `iiitk.ac.in/nss` to this folder.

---

## 📜 Credits & Attributions
- **Institute**: Indian Institute of Information Technology, Design and Manufacturing, Kurnool
- **Design Inspiration**: NSS Sections of IIT Guwahati, IIT Roorkee, and IIT Bombay
- **Historical Data**: Preserved from the official IIITDM Kurnool Social Service Group archives
