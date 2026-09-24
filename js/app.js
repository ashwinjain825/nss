/**
 * ==============================================================================
 * IIITDM KURNOOL - NSS PORTAL INTERACTIVE APPLICATION ENGINE
 * ==============================================================================
 * Core Features:
 * - Multi-year tab filtering (All Years, Current Year, 2024, 2023, 2022, 2019-2018 Archive)
 * - Live keyword search with instant response
 * - Dynamic photo download capability (individual high-res download & toast alerts)
 * - Enhanced event detail modal with downloadable photo gallery
 * - Fullscreen photo lightbox with one-click download toolbar
 * - Dropdown navigation menu support for desktop & mobile
 * - URL parameter / hash auto-routing (e.g. ?year=2024-2025)
 * ==============================================================================
 */

(function () {
  'use strict';

  const data = window.NSS_DATA || {};

  // Application State
  const state = {
    selectedYear: 'all',
    searchQuery: '',
    currentLightboxUrl: '',
    currentLightboxTitle: '',
    isMobileMenuOpen: false
  };

  // DOM Elements Cache
  const elements = {
    eventsGrid: document.getElementById('eventsGrid'),
    eventsCountDisplay: document.getElementById('eventsCountDisplay'),
    searchInput: document.getElementById('eventSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    yearTabsContainer: document.getElementById('yearTabsContainer'),

    eventModal: document.getElementById('eventDetailModal'),
    eventModalContent: document.getElementById('eventModalBodyContent'),
    lightboxModal: document.getElementById('galleryLightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),

    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    navMenu: document.getElementById('navMenu')
  };

  async function init() {
    await loadHeader();
    setupFilters();
    checkUrlParameters();
    filterEvents();
    setupDropdowns();
    setupEventListeners();
    setupToast();
  }

  /**
   * 0. Dynamic Shared Header Component Loader
   */
  async function loadHeader() {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;

    try {
      const response = await fetch('header.html');
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const html = await response.text();
      
      const responseMenu = await fetch('menubar.html');
      const menuHtml = responseMenu.ok ? await responseMenu.text() : '';

      headerContainer.innerHTML = html + menuHtml;
    } catch (err) {
      console.warn('Loading fallback header component (useful for local file:// mode):', err);
      headerContainer.innerHTML = getFallbackHeader();
    }

    // Refresh header elements cache
    elements.mobileMenuToggle = document.getElementById('mobileMenuToggle');
    elements.navMenu = document.getElementById('navMenu');

    // Automatically highlight the current page in the navigation bar
    highlightActiveNav();

    // Re-bind dropdown and mobile menus for the injected markup
    setupDropdowns();
  }

  function highlightActiveNav() {
    const path = window.location.pathname.toLowerCase();
    let currentNav = 'index';

    if (path.includes('events.html')) {
      currentNav = 'events';
    } else if (path.includes('team.html')) {
      currentNav = 'team';
    } else if (path.includes('gallery.html')) {
      currentNav = 'gallery';
    } else if (path.includes('existing-website.html')) {
      currentNav = 'existing-website';
    } else if (path.includes('contact.html')) {
      currentNav = 'contact';
    } else if (path.endsWith('/') || path.endsWith('index.html') || !path.includes('.html')) {
      currentNav = 'index';
    }

    const item = document.querySelector(`[data-nav="${currentNav}"]`);
    if (item) {
      if (item.tagName === 'A') {
        item.classList.add('active');
      } else {
        const link = item.querySelector('.nav-link');
        if (link) link.classList.add('active');
      }
    }
  }

  function getFallbackHeader() {
    return `
<header class="institute-masthead">
  <div class="container masthead-wrapper">
    <a href="https://iiitk.ac.in" target="_blank" class="masthead-logo-link" title="IIITDM Kurnool Official Website" rel="noopener noreferrer">
      <img src="assets/images/iiitdmk-logo.png" alt="IIITDM Kurnool Logo" class="masthead-logo">
    </a>
    <div class="masthead-center-content">
      <h1 class="masthead-nss-title">National Service Scheme (NSS)</h1>
      <h2 class="masthead-inst-name-en">Indian Institute of Information Technology, Design and Manufacturing, Kurnool</h2>
      <div class="masthead-nss-hindi">राष्ट्रीय सेवा योजना</div>
      <div class="masthead-inst-name-hi">भारतीय सूचना प्रौद्योगिकी अभिकल्पना एवं विनिर्माण संस्थान कर्नूल</div>
    </div>
    <div class="masthead-logo-link nss-logo-wrapper" title="National Service Scheme">
      <img src="assets/images/nss-logo.png" alt="National Service Scheme Logo" class="masthead-logo">
    </div>
  </div>
</header>

<nav class="main-header light-theme-menu">
  <div class="container nav-wrapper">
    <ul id="navMenu" class="nav-menu">
      <li><a href="index.html" class="nav-link" data-nav="index">Home</a></li>
      <li class="nav-item-dropdown" data-nav="events">
        <a href="events.html" class="nav-link nav-dropdown-toggle">Events</a>
        <ul class="nav-dropdown-menu">
          <li class="nav-dropdown-item"><a href="events.html" class="nav-dropdown-link">All Events</a></li>
          <li class="nav-dropdown-item"><a href="events.html?year=2025-2026" class="nav-dropdown-link">Current Year (2025-26)</a></li>
          <li class="nav-dropdown-item"><a href="events.html?year=2024-2025" class="nav-dropdown-link">2024-2025</a></li>
          <li class="nav-dropdown-item"><a href="events.html?year=2023-2024" class="nav-dropdown-link">2023-2024</a></li>
          <li class="nav-dropdown-item"><a href="events.html?year=2022-2023" class="nav-dropdown-link">2022-2023</a></li>
          <li class="nav-dropdown-divider"></li>
          <li class="nav-dropdown-item"><a href="events.html?year=2019-2018 Archive" class="nav-dropdown-link">2018-19 Historical Archive</a></li>
        </ul>
      </li>
      <li class="nav-item-dropdown" data-nav="team">
        <a href="team.html" class="nav-link nav-dropdown-toggle">NSS Team</a>
        <ul class="nav-dropdown-menu">
          <li class="nav-dropdown-item"><a href="team.html" class="nav-dropdown-link">Full NSS Team Directory</a></li>
          <li class="nav-dropdown-item"><a href="team.html#patronSection" class="nav-dropdown-link">Chief Patron (Director)</a></li>
          <li class="nav-dropdown-item"><a href="team.html#facultyGrid" class="nav-dropdown-link">Programme Officer</a></li>
          <li class="nav-dropdown-item"><a href="team.html#facultyGrid" class="nav-dropdown-link">Departmental Advisors</a></li>
        </ul>
      </li>
      <li class="nav-item-dropdown" data-nav="gallery">
        <a href="gallery.html" class="nav-link nav-dropdown-toggle">Gallery</a>
        <ul class="nav-dropdown-menu">
          <li class="nav-dropdown-item"><a href="gallery.html" class="nav-dropdown-link">Photo Gallery & Downloads</a></li>
          <li class="nav-dropdown-item"><a href="gallery.html?cat=blood-health" class="nav-dropdown-link">Blood Donation & Health</a></li>
          <li class="nav-dropdown-item"><a href="gallery.html?cat=environment" class="nav-dropdown-link">Tree Plantation & Greenery</a></li>
          <li class="nav-dropdown-item"><a href="gallery.html?cat=education" class="nav-dropdown-link">STEM & Rural School Visits</a></li>
          <li class="nav-dropdown-item"><a href="gallery.html?cat=community" class="nav-dropdown-link">Youth Day & Community</a></li>
        </ul>
      </li>
      <li><a href="existing-website.html" class="nav-link" data-nav="existing-website">Existing Website</a></li>
      <li class="nav-item-dropdown">
        <a href="javascript:void(0)" class="nav-link nav-dropdown-toggle">Institute Links</a>
        <ul class="nav-dropdown-menu">
          <li class="nav-dropdown-item"><a href="https://iiitk.ac.in" target="_blank" class="nav-dropdown-link" rel="noopener noreferrer">IIITDM Kurnool Home</a></li>
          <li class="nav-dropdown-item"><a href="https://iiitk.ac.in/Activities/Social-Service-Group/page" target="_blank" class="nav-dropdown-link" rel="noopener noreferrer">Existing NSS on iiitk.ac.in</a></li>
          <li class="nav-dropdown-item"><a href="https://iiitk.ac.in/academic-administration/page" target="_blank" class="nav-dropdown-link" rel="noopener noreferrer">Student Affairs</a></li>
          <li class="nav-dropdown-item"><a href="https://iiitk.samarth.ac.in/" target="_blank" class="nav-dropdown-link" rel="noopener noreferrer">Samarth ERP Portal</a></li>
        </ul>
      </li>
      <li><a href="contact.html" class="nav-link" data-nav="contact">Contact</a></li>
    </ul>
    <button id="mobileMenuToggle" class="mobile-menu-toggle light-theme-toggle" aria-label="Toggle Navigation Menu">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>
</nav>
    `;
  }

  /**
   * 1. Check URL parameters and hash to set initial year or filter
   */
  function checkUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const yearParam = params.get('year') || window.location.hash.replace('#', '');
    if (yearParam && elements.yearTabsContainer) {
      const targetBtn = elements.yearTabsContainer.querySelector(`.year-tab-btn[data-year="${yearParam}"]`);
      if (targetBtn) {
        elements.yearTabsContainer.querySelectorAll('.year-tab-btn').forEach(b => b.classList.remove('active'));
        targetBtn.classList.add('active');
        state.selectedYear = yearParam;
      }
    }
  }

  /**
   * 2. Setup Year Filters & Search Inputs
   */
  function setupFilters() {
    if (elements.yearTabsContainer) {
      const yearBtns = elements.yearTabsContainer.querySelectorAll('.year-tab-btn');
      yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          yearBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedYear = btn.getAttribute('data-year');
          filterEvents();
        });
      });
    }

    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        filterEvents();
      });
    }

    if (elements.clearSearchBtn && elements.searchInput) {
      elements.clearSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        filterEvents();
      });
    }
  }

  /**
   * 3. Filter Hardcoded Events by Year and Search Query
   */
  function filterEvents() {
    if (!elements.eventsGrid) return;
    const cards = elements.eventsGrid.querySelectorAll('.event-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardYear = card.getAttribute('data-year') || '';
      const cardText = card.textContent.toLowerCase();

      const matchYear = (state.selectedYear === 'all') || (cardYear === state.selectedYear);
      const matchSearch = !state.searchQuery || cardText.includes(state.searchQuery);

      if (matchYear && matchSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (elements.eventsCountDisplay) {
      elements.eventsCountDisplay.textContent = `Showing ${visibleCount} event${visibleCount === 1 ? '' : 's'}`;
    }

    // Empty state
    let emptyNotice = document.getElementById('eventsEmptyNotice');
    if (visibleCount === 0) {
      if (!emptyNotice) {
        emptyNotice = document.createElement('div');
        emptyNotice.id = 'eventsEmptyNotice';
        emptyNotice.className = 'events-empty-state';
        emptyNotice.innerHTML = `
          <div class="empty-state-icon"><i class="fa-solid fa-calendar-xmark"></i></div>
          <h3 class="empty-state-title">No events found</h3>
          <p class="empty-state-text">No events match your current filter selection. Try resetting filters.</p>
          <button class="btn btn-primary" id="resetFiltersBtn">Reset Filters</button>
        `;
        elements.eventsGrid.appendChild(emptyNotice);

        const resetBtn = document.getElementById('resetFiltersBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            state.selectedYear = 'all';
            state.searchQuery = '';
            if (elements.searchInput) elements.searchInput.value = '';
            if (elements.yearTabsContainer) {
              elements.yearTabsContainer.querySelectorAll('.year-tab-btn').forEach((b, i) => {
                b.classList.toggle('active', i === 0);
              });
            }
            filterEvents();
          });
        }
      }
      emptyNotice.style.display = 'block';
    } else if (emptyNotice) {
      emptyNotice.style.display = 'none';
    }
  }

  /**
   * 4. Open Event Details Modal with Downloadable Photo Gallery
   */
  function openEventDetailsById(eventId) {
    if (!elements.eventModal || !elements.eventModalContent) return;

    let ev = null;
    if (data.events && Array.isArray(data.events)) {
      ev = data.events.find(e => e.id === eventId);
    }

    if (!ev) {
      const card = document.querySelector(`.event-card[data-id="${eventId}"]`);
      if (card) {
        ev = {
          title: card.querySelector('.event-title') ? card.querySelector('.event-title').textContent : 'Event Details',
          year: card.getAttribute('data-year') || '2025-2026',
          status: card.querySelector('.event-status-badge') ? card.querySelector('.event-status-badge').textContent : 'Completed',
          date: card.querySelector('.event-meta-item') ? card.querySelector('.event-meta-item').textContent : 'Date not specified',
          venue: 'IIITDM Kurnool Campus',
          partner: card.querySelector('.event-partner-tag') ? card.querySelector('.event-partner-tag').textContent : 'NSS Cell',
          image: card.querySelector('.event-card-img') ? card.querySelector('.event-card-img').src : '',
          fullDescription: card.querySelector('.event-summary') ? card.querySelector('.event-summary').textContent : '',
          coordinator: 'NSS Unit IIITDM Kurnool'
        };
      }
    }

    if (!ev) return;

    const sanitizedTitle = (ev.title || 'event').replace(/[^a-zA-Z0-9_-]/g, '_');
    const coverFilename = `IIITDMK_NSS_${sanitizedTitle}_Cover.jpg`;

    // Gallery section with direct download & view on every photo
    let galleryHtml = '';
    const photoList = (ev.gallery && Array.isArray(ev.gallery) && ev.gallery.length > 0) 
      ? ev.gallery 
      : (ev.image ? [ev.image] : []);

    if (photoList.length > 0) {
      galleryHtml = `
        <div style="margin-top: 26px; border-top: 1px solid var(--border-light); padding-top: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--primary-900); display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-camera-retro" style="color: var(--accent-crimson);"></i> Event Photo Gallery (${photoList.length} Photographs)
            </h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Click photo to enlarge or download</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;">
            ${photoList.map((imgUrl, idx) => {
              const photoFilename = `IIITDMK_NSS_${sanitizedTitle}_Photo_${idx + 1}.jpg`;
              return `
                <div class="modal-photo-item" title="Click to view full photo">
                  <img src="${imgUrl}" alt="${ev.title}" loading="lazy" onclick="window.NSS_PORTAL.openLightbox('${imgUrl}', '${ev.title} (Photo ${idx + 1})')">
                  <div class="modal-photo-overlay" onclick="window.NSS_PORTAL.openLightbox('${imgUrl}', '${ev.title} (Photo ${idx + 1})')">
                    <button class="modal-photo-btn" title="View Fullscreen" onclick="event.stopPropagation(); window.NSS_PORTAL.openLightbox('${imgUrl}', '${ev.title} (Photo ${idx + 1})')">
                      <i class="fa-solid fa-expand"></i>
                    </button>
                    <button class="modal-photo-btn" title="Download This Photo" onclick="event.stopPropagation(); window.NSS_PORTAL.downloadImage('${imgUrl}', '${photoFilename}')">
                      <i class="fa-solid fa-download"></i>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    elements.eventModalContent.innerHTML = `
      <div style="position: relative; margin-bottom: 20px;">
        <img src="${ev.image}" alt="${ev.title}" class="modal-event-img" style="margin-bottom: 0;">
        <button class="btn btn-primary" style="position: absolute; bottom: 16px; right: 16px; font-size: 0.82rem; padding: 8px 16px; box-shadow: var(--shadow-lg);" onclick="window.NSS_PORTAL.downloadImage('${ev.image}', '${coverFilename}')">
          <i class="fa-solid fa-download"></i> Download Cover Photo
        </button>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
        <span class="event-status-badge badge-${(ev.status || 'completed').toLowerCase()}" style="position: static;">${ev.status || 'Completed'}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-regular fa-calendar"></i> Academic Year: <strong>${ev.year || '2025-2026'}</strong></span>
      </div>

      <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--primary-900); margin-bottom: 12px; line-height: 1.25;">
        ${ev.title}
      </h2>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px; border-bottom: 1px solid var(--border-light); padding-bottom: 16px;">
        <span><i class="fa-solid fa-calendar-day" style="color: var(--primary-700);"></i> Date: <strong>${ev.date}</strong></span>
        <span><i class="fa-solid fa-location-dot" style="color: var(--accent-crimson);"></i> Venue: <strong>${ev.venue || 'IIITDM Kurnool Campus'}</strong></span>
        <span><i class="fa-solid fa-handshake" style="color: var(--accent-gold);"></i> Partner: <strong>${ev.partner || 'NSS Cell'}</strong></span>
      </div>

      <div style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.7; margin-bottom: 20px;">
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--primary-900); margin-bottom: 8px;">Activity Summary & Report:</h4>
        <p>${ev.fullDescription || ev.summary}</p>
      </div>

      <div style="background: var(--bg-alt); padding: 14px 18px; border-radius: var(--radius-md); font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px; border: 1px solid var(--border-light);">
        <i class="fa-solid fa-user-tie" style="color: var(--primary-800); margin-right: 6px;"></i>
        Coordinated by: <strong>${ev.coordinator || 'NSS Unit, IIITDM Kurnool'}</strong>
      </div>

      ${galleryHtml}

      <div style="margin-top: 28px; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-light); padding-top: 18px; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="window.NSS_PORTAL.downloadImage('${ev.image}', '${coverFilename}')">
            <i class="fa-solid fa-download"></i> Download Cover
          </button>
          <a href="existing-website.html" class="btn" style="background: var(--bg-alt); color: var(--text-primary); border: 1.5px solid var(--border-medium); font-size: 0.88rem;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Existing Archive
          </a>
        </div>
        <button class="btn" style="background: var(--bg-alt); color: var(--text-secondary); border: 1px solid var(--border-medium);" onclick="window.NSS_PORTAL.closeModal(document.getElementById('eventDetailModal'))">
          Close Window
        </button>
      </div>
    `;

    openModal(elements.eventModal);
  }

  /**
   * 5. Download Image Helper (Reliable cross-browser download with feedback)
   */
  function downloadImage(url, filename) {
    if (!url) return;
    const cleanFilename = filename || 'IIITDMK_NSS_Event_Photo.jpg';
    showToast(`Downloading: ${cleanFilename}`);

    // Fetch as blob for cleanest browser download behavior
    fetch(url)
      .then(resp => {
        if (!resp.ok) throw new Error('Network response not ok');
        return resp.blob();
      })
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = cleanFilename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }, 100);
      })
      .catch(() => {
        // Fallback for strict cross-origin: direct link click with download attribute
        const a = document.createElement('a');
        a.href = url;
        a.download = cleanFilename;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 100);
      });
  }

  /**
   * 6. Enhanced Lightbox with Top Action Toolbar and Download Button
   */
  function openLightbox(imageUrl, caption) {
    if (!elements.lightboxModal) return;
    state.currentLightboxUrl = imageUrl;
    state.currentLightboxTitle = caption || 'IIITDM Kurnool NSS Photograph';

    if (elements.lightboxImg) {
      elements.lightboxImg.src = imageUrl;
    }

    if (elements.lightboxCaption) {
      elements.lightboxCaption.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="font-weight: 700; color: #ffffff; font-size: 1rem; margin-bottom: 3px;">
              ${state.currentLightboxTitle}
            </div>
            <div style="font-size: 0.82rem; color: #94a3b8;">
              National Service Scheme • IIITDM Kurnool Official Archive
            </div>
          </div>
          <button class="lightbox-download-btn" onclick="window.NSS_PORTAL.downloadCurrentImage()">
            <i class="fa-solid fa-download"></i> Download Photo
          </button>
        </div>
      `;
    }

    openModal(elements.lightboxModal);
  }

  function downloadCurrentImage() {
    if (!state.currentLightboxUrl) return;
    const sanitized = (state.currentLightboxTitle || 'NSS_Photo').replace(/[^a-zA-Z0-9_-]/g, '_');
    downloadImage(state.currentLightboxUrl, `IIITDMK_${sanitized}.jpg`);
  }

  /**
   * 7. Floating Toast Notification System
   */
  let toastEl = null;
  function setupToast() {
    toastEl = document.createElement('div');
    toastEl.className = 'nss-toast';
    toastEl.innerHTML = '<i class="fa-solid fa-circle-down"></i> <span id="nssToastMsg">Downloading photo...</span>';
    document.body.appendChild(toastEl);
  }

  function showToast(message) {
    if (!toastEl) return;
    const msgSpan = toastEl.querySelector('#nssToastMsg');
    if (msgSpan) msgSpan.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2800);
  }

  /**
   * 8. Navigation Dropdowns (Desktop & Touch Support)
   */
  function setupDropdowns() {
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = toggle.closest('.nav-item-dropdown');
          if (parent) {
            parent.classList.toggle('open');
          }
        }
      });
    });

    // Close open dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item-dropdown')) {
        document.querySelectorAll('.nav-item-dropdown.open').forEach(el => {
          el.classList.remove('open');
        });
      }
    });
  }

  /**
   * 9. Modal Helpers & Keyboard Listeners
   */
  function setupEventListeners() {
    if (elements.mobileMenuToggle && elements.navMenu) {
      elements.mobileMenuToggle.addEventListener('click', () => {
        state.isMobileMenuOpen = !state.isMobileMenuOpen;
        elements.navMenu.style.display = state.isMobileMenuOpen ? 'flex' : 'none';
        if (state.isMobileMenuOpen) {
          elements.navMenu.style.flexDirection = 'column';
          elements.navMenu.style.position = 'absolute';
          elements.navMenu.style.top = '50px';
          elements.navMenu.style.left = '0';
          elements.navMenu.style.right = '0';
          elements.navMenu.style.background = '#ffffff';
          elements.navMenu.style.padding = '14px 20px';
          elements.navMenu.style.borderBottom = '2px solid var(--primary-800)';
          elements.navMenu.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1)';
        }
      });
    }

    document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(el => {
      el.addEventListener('click', function (e) {
        if (e.target === this || this.classList.contains('modal-close-btn')) {
          closeAllModals();
        }
      });
    });

    document.querySelectorAll('.modal-container').forEach(c => {
      c.addEventListener('click', (e) => e.stopPropagation());
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }

  // Expose global methods
  window.NSS_PORTAL = {
    openModal,
    closeModal,
    closeAllModals,
    openLightbox,
    openEventDetailsById,
    filterEvents,
    downloadImage,
    downloadCurrentImage,
    showToast
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
