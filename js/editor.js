/**
 * ==============================================================================
 * IIITDM KURNOOL NSS PORTAL - PROFESSOR & DATA MANAGER IN-BROWSER EDITOR
 * ==============================================================================
 * Provides an interactive UI directly on the website allowing faculty members
 * and coordinators to:
 * 1. Add new events for any year (Current Year, 2024, 2023, 20XX).
 * 2. Update faculty advisors and leadership details.
 * 3. Preview changes immediately in the live DOM.
 * 4. Export or download the updated js/data.js file without writing code!
 * ==============================================================================
 */

(function () {
  'use strict';

  function initEditor() {
    createEditorUI();
    bindEditorEvents();
  }

  function createEditorUI() {
    // 1. Create Floating Action Button (FAB)
    const fab = document.createElement('button');
    fab.id = 'editorFab';
    fab.className = 'editor-trigger-fab';
    fab.innerHTML = `
      <i class="fa-solid fa-pen-to-square"></i>
      <span>Professor / Template Editor</span>
    `;
    document.body.appendChild(fab);

    // 2. Create Floating Editor Panel
    const panel = document.createElement('div');
    panel.id = 'editorPanel';
    panel.className = 'editor-panel-wrapper';
    panel.innerHTML = `
      <div class="editor-panel-header">
        <div class="editor-panel-title">
          <i class="fa-solid fa-sliders"></i> NSS Portal Template Editor
        </div>
        <button id="closeEditorPanelBtn" style="color: #ffffff; font-size: 1.1rem; padding: 4px;">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="editor-panel-tabs">
        <button class="editor-tab-btn active" data-target="tabAddEvent">Add Event</button>
        <button class="editor-tab-btn" data-target="tabFaculty">Edit Faculty</button>
        <button class="editor-tab-btn" data-target="tabExport">Export Code</button>
      </div>

      <div class="editor-panel-body">
        <!-- Tab 1: Add New Event -->
        <div id="tabAddEvent" class="editor-tab-content">
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 14px;">
            Add an event to the <strong>20XX or Current Year</strong> archive. It will immediately reflect on the website!
          </p>

          <form id="editorNewEventForm">
            <div class="form-group">
              <label class="form-label">Event Title *</label>
              <input type="text" class="form-control" id="edEvTitle" placeholder="e.g. Rural Blood Donation Camp 2026" required>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group">
                <label class="form-label">Academic Year *</label>
                <select class="form-control" id="edEvYear" required>
                  <option value="2025-2026">2025-2026 (Current Year)</option>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2022-2023">2022-2023</option>
                  <option value="2019-2018 Archive">2019-2018 Archive</option>
                  <option value="Custom">Custom Year...</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Status</label>
                <select class="form-control" id="edEvStatus">
                  <option value="Completed">Completed</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group">
                <label class="form-label">Event Date</label>
                <input type="text" class="form-control" id="edEvDate" placeholder="e.g. March 15, 2026">
              </div>

              <div class="form-group">
                <label class="form-label">Venue</label>
                <input type="text" class="form-control" id="edEvVenue" placeholder="e.g. SAC Hall, IIITDM Kurnool">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Partner / Association</label>
              <input type="text" class="form-control" id="edEvPartner" placeholder="e.g. Indian Red Cross Society">
            </div>

            <div class="form-group">
              <label class="form-label">Short Summary *</label>
              <textarea class="form-control" id="edEvSummary" rows="2" placeholder="Brief 1-2 sentence description..." required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Photo Image URL</label>
              <input type="url" class="form-control" id="edEvImg" placeholder="https://... (or leave empty)">
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
              <i class="fa-solid fa-plus-circle"></i> Add & Preview on Page
            </button>
          </form>
        </div>

        <!-- Tab 2: Edit Faculty Leadership -->
        <div id="tabFaculty" class="editor-tab-content" style="display: none;">
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 14px;">
            Update the Programme Officer or Advisor names directly.
          </p>
          <form id="editorFacultyForm">
            <div class="form-group">
              <label class="form-label">NSS Programme Officer Name</label>
              <input type="text" class="form-control" id="edProgOfficerName" value="${window.NSS_DATA && window.NSS_DATA.leadership && window.NSS_DATA.leadership.programmeOfficer ? window.NSS_DATA.leadership.programmeOfficer.name : 'Dr. Faculty-in-Charge, NSS'}">
            </div>
            <div class="form-group">
              <label class="form-label">Programme Officer Email</label>
              <input type="email" class="form-control" id="edProgOfficerEmail" value="${window.NSS_DATA && window.NSS_DATA.leadership && window.NSS_DATA.leadership.programmeOfficer ? window.NSS_DATA.leadership.programmeOfficer.email : 'nss.coordinator@iiitk.ac.in'}">
            </div>
            <div class="form-group">
              <label class="form-label">Programme Officer Cabin / Office</label>
              <input type="text" class="form-control" id="edProgOfficerCabin" value="${window.NSS_DATA && window.NSS_DATA.leadership && window.NSS_DATA.leadership.programmeOfficer ? window.NSS_DATA.leadership.programmeOfficer.cabin : 'Room No. 104, Academic Block-1'}">
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
              <i class="fa-solid fa-floppy-disk"></i> Update Faculty Live
            </button>
          </form>
        </div>

        <!-- Tab 3: Export & Download Code -->
        <div id="tabExport" class="editor-tab-content" style="display: none;">
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px;">
            Copy this JavaScript code and paste it into <code>js/data.js</code>, or click <strong>Download data.js</strong> to save your modifications permanently!
          </p>
          <textarea class="code-export-box" id="codeExportBox" readonly></textarea>
          
          <div style="display: flex; gap: 10px;">
            <button id="copyCodeBtn" class="btn btn-primary" style="flex: 1; font-size: 0.82rem;">
              <i class="fa-regular fa-copy"></i> Copy to Clipboard
            </button>
            <button id="downloadDataJsBtn" class="btn btn-primary" style="flex: 1; font-size: 0.82rem; background: var(--accent-crimson);">
              <i class="fa-solid fa-download"></i> Download data.js
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  }

  function bindEditorEvents() {
    const fab = document.getElementById('editorFab');
    const panel = document.getElementById('editorPanel');
    const closeBtn = document.getElementById('closeEditorPanelBtn');
    const tabs = panel.querySelectorAll('.editor-tab-btn');

    // Toggle panel
    fab.addEventListener('click', () => {
      panel.classList.toggle('active');
      if (panel.classList.contains('active')) {
        updateExportCode();
      }
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.remove('active');
    });

    // Tab switching
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-target');
        panel.querySelectorAll('.editor-tab-content').forEach(c => c.style.display = 'none');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = 'block';
        }

        if (targetId === 'tabExport') {
          updateExportCode();
        }
      });
    });

    // Handle Adding New Event
    const newEventForm = document.getElementById('editorNewEventForm');
    if (newEventForm) {
      newEventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('edEvTitle').value.trim();
        let year = document.getElementById('edEvYear').value;
        if (year === 'Custom') {
          const customYear = prompt('Enter the custom academic year (e.g. 2026-2027):', '2026-2027');
          if (customYear) year = customYear.trim();
        }

        const date = document.getElementById('edEvDate').value.trim() || 'Upcoming';
        const status = document.getElementById('edEvStatus').value;
        const venue = document.getElementById('edEvVenue').value.trim() || 'IIITDM Kurnool Campus';
        const partner = document.getElementById('edEvPartner').value.trim() || 'NSS Unit IIITDM Kurnool';
        const summary = document.getElementById('edEvSummary').value.trim();
        const img = document.getElementById('edEvImg').value.trim() || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80';

        const eventId = 'ev-' + Date.now();
        const newEventObj = {
          id: eventId,
          title,
          year,
          date,
          status,
          venue,
          partner,
          summary,
          fullDescription: summary,
          coordinator: 'NSS Faculty Coordinator',
          image: img,
          gallery: [img]
        };

        // Add to active data array at the beginning
        if (window.NSS_DATA && window.NSS_DATA.events) {
          window.NSS_DATA.events.unshift(newEventObj);
        }

        // Insert new card directly into the DOM
        const eventsGrid = document.getElementById('eventsGrid');
        if (eventsGrid) {
          const card = document.createElement('div');
          card.className = 'event-card';
          card.setAttribute('data-year', year);
          card.setAttribute('data-id', eventId);
          card.innerHTML = `
            <div class="event-card-img-wrapper">
              <img src="${img}" alt="${title}" class="event-card-img" loading="lazy">
              <span class="event-status-badge badge-${status.toLowerCase()}">${status}</span>
              <span class="event-year-badge"><i class="fa-regular fa-calendar"></i> ${year}</span>
            </div>
            <div class="event-card-body">
              <div class="event-meta-row">
                <span class="event-meta-item"><i class="fa-regular fa-calendar-check"></i> ${date}</span>
                <span class="event-meta-item"><i class="fa-solid fa-location-dot"></i> ${venue}</span>
              </div>
              <h3 class="event-title">${title}</h3>
              <p class="event-summary">${summary}</p>
              <div class="event-card-footer">
                <span class="event-partner-tag"><i class="fa-solid fa-handshake"></i> ${partner}</span>
                <button class="event-details-btn" onclick="window.NSS_PORTAL.openEventDetailsById('${eventId}')">
                  View Details <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          `;
          eventsGrid.prepend(card);
        }

        if (window.NSS_PORTAL) {
          window.NSS_PORTAL.filterEvents();
        }

        alert(`Event "${title}" has been successfully added to the portal! Check the Events section.`);
        newEventForm.reset();
        updateExportCode();
      });
    }

    // Handle Faculty Update
    const facultyForm = document.getElementById('editorFacultyForm');
    if (facultyForm) {
      facultyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('edProgOfficerName').value.trim();
        const email = document.getElementById('edProgOfficerEmail').value.trim();
        const cabin = document.getElementById('edProgOfficerCabin').value.trim();

        // Update DOM elements
        const nameEl = document.querySelector('.faculty-card .faculty-name');
        if (nameEl) nameEl.textContent = name;

        const emailEl = document.querySelector('.faculty-card a[href^="mailto:"]');
        if (emailEl) {
          emailEl.textContent = email;
          emailEl.href = 'mailto:' + email;
        }

        alert('Faculty information updated live on the page!');
        updateExportCode();
      });
    }

    // Handle Code Copy
    const copyBtn = document.getElementById('copyCodeBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const codeBox = document.getElementById('codeExportBox');
        codeBox.select();
        document.execCommand('copy');
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy to Clipboard';
        }, 2000);
      });
    }

    // Handle File Download
    const downloadBtn = document.getElementById('downloadDataJsBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const codeContent = getFormattedDataJs();
        const blob = new Blob([codeContent], { type: 'application/javascript;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  }

  function getFormattedDataJs() {
    return `/**\n * IIITDM KURNOOL - NSS PORTAL DATA CONFIGURATION\n * Generated via Professor / Data Manager Mode\n */\n\nwindow.NSS_DATA = ` + 
      JSON.stringify(window.NSS_DATA || {}, null, 2) + `;\n`;
  }

  function updateExportCode() {
    const codeBox = document.getElementById('codeExportBox');
    if (codeBox) {
      codeBox.value = getFormattedDataJs();
    }
  }

  // Auto initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEditor);
  } else {
    initEditor();
  }

})();
