const supportedLangs = ["el", "en", "de"];
const defaultLang = "el";
const languageStorageKey = "synanthropia-lang";
const previewAccessStorageKey = "synanthropia-preview-access";
const previewAccessValue = "granted";
const previewUsername = "board";
const previewPassword = "Synanthropia2026";
const previewProtectedPages = new Set([
  "preview.html",
  "about.html",
  "actions.html",
  "projects.html",
  "members.html",
  "forms.html",
  "donate.html",
  "contact.html"
]);

const i18n = {
  el: {
    org_name: "ΣΥΝΑΝΘΡΩΠΙΑ",
    under_construction: "ΥΠΟ ΚΑΤΑΣΚΕΥΗ",
    nav_home: "Αρχική",
    nav_about: "Σχετικά με εμάς",
    nav_actions: "Δράσεις",
    nav_projects: "Έργα",
    nav_members: "Μέλη & Εταίροι",
    nav_forms: "Αιτήσεις",
    nav_donate: "Δωρεά",
    nav_contact: "Επικοινωνία",
    hero_kicker: "Αστική Μη Κερδοσκοπική Εταιρεία",
    hero_title: "Μια κοινότητα φροντίδας για άνθρωπο, ζώα και περιβάλλον.",
    hero_lead: "Η Συνανθρωπιά οργανώνει και στηρίζει δράσεις αλληλεγγύης με διαφάνεια, συνέχεια και σεβασμό στον τόπο.",
    cta_view_actions: "Δες τις δράσεις",
    cta_donate: "Στήριξε με δωρεά",
    mission_title: "Αποστολή",
    mission_body: "Να ενώνουμε ανθρώπους και φορείς σε πρακτικές δράσεις κοινωνικής υποστήριξης, φιλοζωίας και περιβαλλοντικής προστασίας.",
    mission_item_1: "Συνεργασία με εθελοντές και εταίρους",
    mission_item_2: "Στοχευμένες παρεμβάσεις με μετρήσιμο αποτέλεσμα",
    mission_item_3: "Ανοιχτή ενημέρωση για δράσεις και έργα",
    pillars_title: "Τομείς δράσης",
    pillars_subtitle: "Οι τρεις βασικοί πυλώνες μας",
    pillar_human_title: "Άνθρωπος",
    pillar_human_body: "Στήριξη ευάλωτων συμπολιτών, βασικές ανάγκες, κοινωνική ενδυνάμωση.",
    pillar_animals_title: "Ζώα",
    pillar_animals_body: "Φροντίδα, σίτιση, περίθαλψη και φιλοζωικές συνεργασίες στην τοπική κοινότητα.",
    pillar_env_title: "Περιβάλλον",
    pillar_env_body: "Καθαρισμοί, ευαισθητοποίηση και συμμετοχικές πρωτοβουλίες οικολογικής προστασίας.",
    timeline_title: "Χρονολόγιο δράσεων",
    timeline_subtitle: "Νεότερες δράσεις στην κορυφή. Με κύλιση προς τα κάτω βλέπεις παλαιότερες.",
    filter_all: "Όλα",
    filter_human: "Άνθρωπος",
    filter_animals: "Ζώα",
    filter_environment: "Περιβάλλον",
    projects_title: "Τρέχοντα και μελλοντικά έργα",
    projects_subtitle: "Παρακολούθηση στόχων και χρηματοδότησης με διαφάνεια.",
    about_title: "Σχετικά με εμάς",
    founders_title: "Ιδρυτές",
    founder_renata_role: "Συνιδρύτρια",
    founder_pavlos_name: "Παύλος Δρίβας",
    founder_pavlos_role: "Συνιδρυτής και Διαχειριστής",
    about_origin_prefix: "Η ΑΜΚΕ Συνανθρωπιά αποτελεί τη φυσική συνέχεια και τον επίσημο εταίρο του ελβετικού σωματείου",
    about_origin_suffix: "στην Ελλάδα, διασφαλίζοντας τη συνέχεια ενός έργου που ξεκίνησε το 2016.",
    about_body: "Δραστηριοποιούμαστε με στόχο τη βιώσιμη κοινωνική υποστήριξη, τη φροντίδα των ζώων και την προστασία του περιβάλλοντος, μέσα από συνεργασίες με εθελοντές και τοπικούς φορείς.",
    about_values_title: "Η προσέγγισή μας",
    about_values_body: "Λειτουργούμε με διαφάνεια, συνέπεια και μετρήσιμα αποτελέσματα, ώστε κάθε δράση να έχει ουσιαστικό αντίκτυπο στην κοινότητα.",
    members_title: "Μέλη και εταίροι",
    members_body: "Στην παρούσα φάση η σελίδα λειτουργεί ενημερωτικά. Σύντομα θα προστεθούν ψηφιακές υπηρεσίες για μέλη, συνδρομές και εργαλεία συνεργασίας με εταίρους.",
    forms_title: "Αιτήσεις ενδιαφέροντος",
    forms_body: "Μέχρι να ενεργοποιηθεί πλήρες σύστημα μελών, μπορείς να υποβάλεις αίτηση ενδιαφέροντος.",
    member_application_link: "Αίτηση μέλους",
    beneficiary_application_link: "Αίτηση ωφελούμενου",
    member_form_title: "Αίτηση μέλους",
    beneficiary_form_title: "Αίτηση ωφελούμενου",
    label_name: "Ονοματεπώνυμο",
    label_phone: "Τηλέφωνο",
    label_location: "Περιοχή",
    label_member_reason: "Γιατί θέλετε να γίνετε μέλος;",
    label_help_type: "Τύπος βοήθειας",
    label_beneficiary_details: "Σύντομη περιγραφή ανάγκης",
    select_help: "Επιλέξτε...",
    help_food: "Τρόφιμα",
    help_medical: "Ιατρική υποστήριξη",
    help_animals: "Υποστήριξη για ζώα",
    help_other: "Άλλο",
    submit_interest: "Αποστολή ενδιαφέροντος",
    btn_clear: "Καθαρισμός",
    submit_request: "Υποβολή αιτήματος",
    form_success_title: "Ευχαριστούμε!",
    form_success_member: "Η αίτησή σας για μέλος λήφθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα.",
    form_success_beneficiary: "Το αίτημά σας προστέθηκε στα αρχεία μας. Θα επικοινωνήσουμε για την επόμενη διαδικασία.",
    form_error: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
    donate_title: "Στήριξη και δωρεές",
    donate_subtitle: "Στην τρέχουσα φάση η ενίσχυση γίνεται με απευθείας κατάθεση ή εξωτερική πλατφόρμα.",
    bank_details_title: "Στοιχεία τραπεζικού λογαριασμού",
    beneficiary_label: "Δικαιούχος:",
    online_support_title: "Online υποστήριξη",
    online_support_body: "Μπορείτε να προσθέσετε σύνδεσμο PayPal ή Donorbox χωρίς backend. Το κουμπί παραμένει placeholder μέχρι να οριστεί τελικός λογαριασμός.",
    online_support_cta: "Σύντομα διαθέσιμο",
    contact_title: "Επικοινωνία",
    social_title: "Social media",
    location_value: "Άγιος Κωνσταντίνος Λαυρεωτικής, Ελλάδα",
    project_group_active: "Ενεργά",
    project_group_future: "Μελλοντικά",
    project_group_completed: "Ολοκληρωμένα",
    project_finance: "Κάλυψη",
    timeline_no_items: "Δεν υπάρχουν καταχωρήσεις σε αυτή την κατηγορία.",
    timeline_no_media: "Δεν έχουν προστεθεί φωτογραφίες για αυτή τη δράση.",
    timeline_open_carousel: "Προβολή φωτογραφιών",
    timeline_prev: "Προηγούμενη φωτογραφία",
    timeline_next: "Επόμενη φωτογραφία",
    timeline_close: "Κλείσιμο",
    pillar_map_human: "Άνθρωπος",
    pillar_map_animals: "Ζώα",
    pillar_map_environment: "Περιβάλλον"
  },
  en: {
    org_name: "SYNANTHROPIA",
    under_construction: "UNDER CONSTRUCTION",
    nav_home: "Home",
    nav_about: "About us",
    nav_actions: "Actions",
    nav_projects: "Projects",
    nav_members: "Members & Partners",
    nav_forms: "Applications",
    nav_donate: "Donate",
    nav_contact: "Contact",
    hero_kicker: "Non-profit civil organization",
    hero_title: "A caring community for people, animals, and the environment.",
    hero_lead: "Synanthropia organizes and supports solidarity actions with transparency, continuity, and respect for place.",
    cta_view_actions: "View actions",
    cta_donate: "Support with a donation",
    mission_title: "Mission",
    mission_body: "To connect people and organizations in practical initiatives for social support, animal welfare, and environmental protection.",
    mission_item_1: "Collaboration with volunteers and partners",
    mission_item_2: "Targeted interventions with measurable impact",
    mission_item_3: "Open updates about actions and projects",
    pillars_title: "Action pillars",
    pillars_subtitle: "Our three core pillars",
    pillar_human_title: "People",
    pillar_human_body: "Support for vulnerable people, essential needs, and social empowerment.",
    pillar_animals_title: "Animals",
    pillar_animals_body: "Care, feeding, treatment, and local animal welfare collaborations.",
    pillar_env_title: "Environment",
    pillar_env_body: "Cleanups, awareness, and participatory environmental initiatives.",
    timeline_title: "Action timeline",
    timeline_subtitle: "Newest actions first. Scroll down for older entries.",
    filter_all: "All",
    filter_human: "People",
    filter_animals: "Animals",
    filter_environment: "Environment",
    projects_title: "Current and upcoming projects",
    projects_subtitle: "Track goals and funding progress transparently.",
    about_title: "About us",
    founders_title: "Founders",
    founder_renata_role: "Co-founder",
    founder_pavlos_name: "Pavlos Drivas",
    founder_pavlos_role: "Co-founder & Administrator",
    about_origin_prefix: "Synanthropia NPO is the natural continuation and official partner of the Swiss association",
    about_origin_suffix: "in Greece, ensuring continuity of work that began in 2016.",
    about_body: "We work toward sustainable social support, animal care, and environmental protection through collaboration with volunteers and local partners.",
    about_values_title: "Our approach",
    about_values_body: "We operate with transparency, consistency, and measurable outcomes so that every action has meaningful impact in the community.",
    members_title: "Members and partners",
    members_body: "At this stage, the website is informational. Digital services for members and partner workflows will be added next.",
    forms_title: "Interest applications",
    forms_body: "Until full member services are enabled, you can submit an interest application.",
    member_application_link: "Member application",
    beneficiary_application_link: "Beneficiary application",
    member_form_title: "Member application",
    beneficiary_form_title: "Beneficiary application",
    label_name: "Full name",
    label_phone: "Phone",
    label_location: "Location",
    label_member_reason: "Why do you want to become a member?",
    label_help_type: "Type of support",
    label_beneficiary_details: "Brief description of need",
    select_help: "Please select...",
    help_food: "Food",
    help_medical: "Medical support",
    help_animals: "Animal support",
    help_other: "Other",
    submit_interest: "Submit interest",
    btn_clear: "Clear",
    submit_request: "Submit request",
    form_success_title: "Thank you!",
    form_success_member: "Your member application has been received. We will be in touch soon.",
    form_success_beneficiary: "Your request has been received. We will contact you with next steps.",
    form_error: "Something went wrong. Please try again.",
    donate_title: "Support and donations",
    donate_subtitle: "At this stage, support is available through bank transfer or external platforms.",
    bank_details_title: "Bank account details",
    beneficiary_label: "Beneficiary:",
    online_support_title: "Online support",
    online_support_body: "You can add a PayPal or Donorbox link without a backend. This button remains a placeholder until final setup.",
    online_support_cta: "Available soon",
    contact_title: "Contact",
    social_title: "Social media",
    location_value: "Agios Konstantinos Lavreotiki, Greece",
    project_group_active: "Active",
    project_group_future: "Upcoming",
    project_group_completed: "Completed",
    project_finance: "Coverage",
    timeline_no_items: "No entries found in this category.",
    timeline_no_media: "No photos have been added for this action.",
    timeline_open_carousel: "View photos",
    timeline_prev: "Previous photo",
    timeline_next: "Next photo",
    timeline_close: "Close",
    pillar_map_human: "People",
    pillar_map_animals: "Animals",
    pillar_map_environment: "Environment"
  },
  de: {
    org_name: "SYNANTHROPIA",
    under_construction: "IM AUFBAU",
    nav_home: "Start",
    nav_about: "Ueber uns",
    nav_actions: "Aktionen",
    nav_projects: "Projekte",
    nav_members: "Mitglieder & Partner",
    nav_forms: "Antraege",
    nav_donate: "Spende",
    nav_contact: "Kontakt",
    hero_kicker: "Gemeinnuetzige Organisation",
    hero_title: "Eine sorgende Gemeinschaft fuer Menschen, Tiere und Umwelt.",
    hero_lead: "Synanthropia organisiert und unterstuetzt Solidaritaetsaktionen mit Transparenz, Kontinuitaet und Respekt fuer den Ort.",
    cta_view_actions: "Aktionen ansehen",
    cta_donate: "Mit Spende unterstuetzen",
    mission_title: "Mission",
    mission_body: "Menschen und Organisationen in praktischen Initiativen fuer soziale Hilfe, Tierschutz und Umweltschutz verbinden.",
    mission_item_1: "Zusammenarbeit mit Freiwilligen und Partnern",
    mission_item_2: "Gezielte Massnahmen mit messbarer Wirkung",
    mission_item_3: "Offene Information zu Aktionen und Projekten",
    pillars_title: "Handlungsfelder",
    pillars_subtitle: "Unsere drei Grundpfeiler",
    pillar_human_title: "Menschen",
    pillar_human_body: "Unterstuetzung beduerftiger Menschen, Grundversorgung und soziale Staerkung.",
    pillar_animals_title: "Tiere",
    pillar_animals_body: "Pflege, Fuetterung, Behandlung und lokale Tierschutzkooperationen.",
    pillar_env_title: "Umwelt",
    pillar_env_body: "Reinigungsaktionen, Sensibilisierung und partizipative Umweltinitiativen.",
    timeline_title: "Aktions-Timeline",
    timeline_subtitle: "Neueste Aktionen zuerst. Beim Scrollen nach unten erscheinen aeltere Eintraege.",
    filter_all: "Alle",
    filter_human: "Menschen",
    filter_animals: "Tiere",
    filter_environment: "Umwelt",
    projects_title: "Aktuelle und kommende Projekte",
    projects_subtitle: "Ziele und Finanzierungsfortschritt transparent verfolgen.",
    about_title: "Ueber uns",
    founders_title: "Gründer",
    founder_renata_role: "Mitgründerin",
    founder_pavlos_name: "Pavlos Drivas",
    founder_pavlos_role: "Mitgründer und Geschäftsführer",
    about_origin_prefix: "Die NPO Synanthropia ist die natuerliche Fortsetzung und der offizielle Partner des Schweizer Vereins",
    about_origin_suffix: "in Griechenland und sichert die Kontinuitaet einer Arbeit, die 2016 begonnen hat.",
    about_body: "Wir arbeiten fuer nachhaltige soziale Unterstuetzung, Tierschutz und Umweltschutz durch Zusammenarbeit mit Freiwilligen und lokalen Partnern.",
    about_values_title: "Unser Ansatz",
    about_values_body: "Wir arbeiten mit Transparenz, Verlaesslichkeit und messbaren Ergebnissen, damit jede Aktion eine echte Wirkung in der Gemeinschaft hat.",
    members_title: "Mitglieder und Partner",
    members_body: "In dieser Phase ist die Website informativ. Digitale Mitgliedsdienste und Partnerfunktionen folgen spaeter.",
    forms_title: "Interessensantraege",
    forms_body: "Bis zur Aktivierung voller Mitgliedsdienste koennen Sie Ihr Interesse ueber ein Formular senden.",
    member_application_link: "Mitgliedsantrag",
    beneficiary_application_link: "Antrag als Beguenstigter",
    member_form_title: "Mitgliedsantrag",
    beneficiary_form_title: "Antrag als Beguenstigter",
    label_name: "Vollstaendiger Name",
    label_phone: "Telefon",
    label_location: "Ort",
    label_member_reason: "Warum moechten Sie Mitglied werden?",
    label_help_type: "Art der Unterstuetzung",
    label_beneficiary_details: "Kurze Beschreibung des Bedarfs",
    select_help: "Bitte auswaehlen...",
    help_food: "Lebensmittel",
    help_medical: "Medizinische Hilfe",
    help_animals: "Unterstuetzung fuer Tiere",
    help_other: "Andere",
    submit_interest: "Interesse senden",
    btn_clear: "Leeren",
    submit_request: "Antrag senden",
    form_success_title: "Vielen Dank!",
    form_success_member: "Ihre Mitgliedsanfrage wurde empfangen. Wir werden uns in Kürze bei Ihnen melden.",
    form_success_beneficiary: "Ihre Anfrage wurde empfangen. Wir kontaktieren Sie mit weiteren Schritten.",
    form_error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
    donate_title: "Unterstuetzung und Spenden",
    donate_subtitle: "In dieser Phase erfolgt Unterstuetzung per Ueberweisung oder externer Plattform.",
    bank_details_title: "Bankverbindung",
    beneficiary_label: "Empfaenger:",
    online_support_title: "Online-Unterstuetzung",
    online_support_body: "Ein PayPal- oder Donorbox-Link kann ohne Backend eingebunden werden. Die Schaltflaeche bleibt bis zur finalen Einrichtung ein Platzhalter.",
    online_support_cta: "Demnaechst verfuegbar",
    contact_title: "Kontakt",
    social_title: "Soziale Medien",
    location_value: "Agios Konstantinos Lavreotiki, Griechenland",
    project_group_active: "Aktiv",
    project_group_future: "Geplant",
    project_group_completed: "Abgeschlossen",
    project_finance: "Deckung",
    timeline_no_items: "Keine Eintraege in dieser Kategorie.",
    timeline_no_media: "Fuer diese Aktion wurden noch keine Fotos hinzugefuegt.",
    timeline_open_carousel: "Fotos anzeigen",
    timeline_prev: "Vorheriges Foto",
    timeline_next: "Naechstes Foto",
    timeline_close: "Schliessen",
    pillar_map_human: "Menschen",
    pillar_map_animals: "Tiere",
    pillar_map_environment: "Umwelt"
  }
};

const state = {
  lang: defaultLang,
  actions: [],
  projects: [],
  timelineFilter: "all",
  visibleActions: [],
  galleryCache: {},
  carouselItems: [],
  carouselIndex: 0
};

const getCurrentPage = () => {
  const path = window.location.pathname;
  if (path.endsWith("/")) {
    return "index.html";
  }
  return path.split("/").pop() || "index.html";
};

const hasPreviewAccess = () => {
  try {
    const local = window.localStorage.getItem(previewAccessStorageKey);
    const session = window.sessionStorage.getItem(previewAccessStorageKey);
    return local === previewAccessValue || session === previewAccessValue;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const setPreviewAccess = () => {
  try {
    window.localStorage.setItem(previewAccessStorageKey, previewAccessValue);
    window.sessionStorage.setItem(previewAccessStorageKey, previewAccessValue);
  } catch (error) {
    console.error(error);
  }
};

const guardPreviewAccess = () => {
  const currentPage = getCurrentPage();
  if (!previewProtectedPages.has(currentPage)) {
    return true;
  }

  if (hasPreviewAccess()) {
    return true;
  }

  window.location.replace("index.html");
  return false;
};

const wirePreviewLogin = () => {
  const loginForm = document.getElementById("preview-login-form");
  const toggleBtn = document.getElementById("preview-login-toggle");
  const panel = document.getElementById("preview-login-panel");
  const message = document.getElementById("preview-login-message");
  const continueLink = document.getElementById("preview-continue-link");

  if (continueLink) {
    continueLink.hidden = !hasPreviewAccess();
  }

  if (toggleBtn && panel) {
    toggleBtn.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
    });
  }

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = loginForm.querySelector('input[name="username"]');
    const passInput = loginForm.querySelector('input[name="password"]');
    const username = (userInput?.value || "").trim();
    const password = passInput?.value || "";

    if (username === previewUsername && password === previewPassword) {
      setPreviewAccess();
      if (message) {
        message.textContent = "Επιτυχής σύνδεση. Μεταφορά στην preview σελίδα...";
      }
      window.location.href = "preview.html";
      return;
    }

    if (message) {
      message.textContent = "Λάθος στοιχεία. Δοκιμάστε ξανά.";
    }
  });
};

const wirePreviewShortcutLogin = () => {
  if (getCurrentPage() !== "index.html") {
    return;
  }

  window.addEventListener("keydown", (event) => {
    if (!(event.ctrlKey && event.shiftKey && (event.key || "").toLowerCase() === "l")) {
      return;
    }

    event.preventDefault();

    const username = window.prompt("Preview username:");
    if (!username) {
      return;
    }

    const password = window.prompt("Preview password:");
    if (!password) {
      return;
    }

    if (username.trim() === previewUsername && password === previewPassword) {
      setPreviewAccess();
      window.location.href = "preview.html";
      return;
    }

    window.alert("Λάθος στοιχεία πρόσβασης.");
  });
};

const fmtCurrency = (value, lang) => {
  const locale = lang === "el" ? "el-GR" : lang === "de" ? "de-DE" : "en-US";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
};

const formatDate = (isoDate, lang) => {
  const locale = lang === "el" ? "el-GR" : lang === "de" ? "de-DE" : "en-GB";
  return new Date(isoDate).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

const getInitialLanguage = () => {
  try {
    const storedLang = window.localStorage.getItem(languageStorageKey);
    if (storedLang && supportedLangs.includes(storedLang)) {
      return storedLang;
    }
  } catch (error) {
    console.error(error);
  }

  return defaultLang;
};

const setLanguage = (lang) => {
  state.lang = supportedLangs.includes(lang) ? lang : defaultLang;

  try {
    window.localStorage.setItem(languageStorageKey, state.lang);
  } catch (error) {
    console.error(error);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });

  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = i18n[state.lang]?.[key];
    if (value) {
      node.textContent = value;
    }
  });

  document.documentElement.removeAttribute("data-lang-pending");

  renderTimeline();
  renderProjects();
};

const timelineTagClass = (pillar) => `tag-${pillar}`;

const getItemPillars = (item) => {
  if (Array.isArray(item.pillars) && item.pillars.length) {
    return item.pillars;
  }
  if (item.pillar) {
    return [item.pillar];
  }
  return [];
};

const getActionCacheKey = (item) => {
  const sourceTitle = item.title?.el || item.title?.en || item.title?.de || "untitled";
  return `${item.date}-${sourceTitle}`;
};

const getTimelineMediaUrls = async (item) => {
  const cacheKey = getActionCacheKey(item);
  if (state.galleryCache[cacheKey]) {
    return state.galleryCache[cacheKey];
  }

  if (item.galleryManifest) {
    try {
      const manifest = await loadJson(item.galleryManifest);
      const manifestImages = manifest?.images;
      const urls = Array.isArray(manifestImages)
        ? manifestImages.filter(Boolean)
        : typeof manifestImages === "string" && manifestImages
          ? [manifestImages]
          : [];
      state.galleryCache[cacheKey] = urls;
      return urls;
    } catch (error) {
      console.error(error);
    }
  }

  const fallback = (item.media || [])
    .map((entry) => entry.url)
    .filter((url) => url && url !== "#");

  state.galleryCache[cacheKey] = fallback;
  return fallback;
};

const renderTimeline = () => {
  const list = document.getElementById("timeline-list");
  if (!list) {
    return;
  }

  const filtered = state.actions
    .filter((item) => {
      const pillars = getItemPillars(item);
      return state.timelineFilter === "all" || pillars.includes(state.timelineFilter);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  state.visibleActions = filtered;

  if (!filtered.length) {
    list.innerHTML = `<p>${i18n[state.lang].timeline_no_items}</p>`;
    return;
  }

  list.innerHTML = filtered
    .map((item, index) => {
      const title = item.title?.[state.lang] || item.title?.el || "";
      const description = item.description?.[state.lang] || item.description?.el || "";
      const openHint = i18n[state.lang].timeline_open_carousel;
      const pillars = getItemPillars(item);
      const tags = pillars
        .map((pillar) => {
          const pillarLabel = i18n[state.lang][`pillar_map_${pillar}`] || pillar;
          return `<span class="timeline-tag ${timelineTagClass(pillar)}">${pillarLabel}</span>`;
        })
        .join("");
      const thumbFromMedia = (item.media || []).find((entry) => entry.url && entry.url !== "#")?.url || "";
      const thumb = item.thumbnail || thumbFromMedia;

      return `
        <article class="timeline-item">
          <div class="timeline-meta">
            <span class="timeline-date">${formatDate(item.date, state.lang)}</span>
            <div class="timeline-tags">${tags}</div>
          </div>
          ${thumb ? `<img class="timeline-thumb" src="${thumb}" alt="${title}" loading="lazy" />` : ""}
          <h3 class="timeline-title">${title}</h3>
          <button class="timeline-open-btn" type="button" data-action-index="${index}">${openHint}</button>
          <p>${description}</p>
        </article>
      `;
    })
    .join("");
};

const ensureTimelineCarousel = () => {
  if (document.getElementById("timeline-carousel")) {
    return;
  }

  const modal = document.createElement("div");
  modal.id = "timeline-carousel";
  modal.className = "timeline-carousel";
  modal.innerHTML = `
    <div class="timeline-carousel-dialog" role="dialog" aria-modal="true">
      <button class="carousel-close" type="button" aria-label="Close">×</button>
      <button class="carousel-nav prev" type="button" aria-label="Previous">‹</button>
      <img class="carousel-image" src="" alt="" />
      <button class="carousel-nav next" type="button" aria-label="Next">›</button>
      <p class="carousel-counter"></p>
    </div>
  `;

  document.body.appendChild(modal);
  const dialog = modal.querySelector(".timeline-carousel-dialog");
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeTimelineCarousel();
    }
  });

  modal.querySelector(".carousel-close").addEventListener("click", closeTimelineCarousel);
  modal.querySelector(".carousel-nav.prev").addEventListener("click", () => moveTimelineCarousel(-1));
  modal.querySelector(".carousel-nav.next").addEventListener("click", () => moveTimelineCarousel(1));

  dialog.addEventListener("touchstart", (event) => {
    if (!event.touches.length) {
      return;
    }
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    touchEndX = touchStartX;
    touchEndY = touchStartY;
  }, { passive: true });

  dialog.addEventListener("touchmove", (event) => {
    if (!event.touches.length) {
      return;
    }
    touchEndX = event.touches[0].clientX;
    touchEndY = event.touches[0].clientY;
  }, { passive: true });

  dialog.addEventListener("touchend", () => {
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    const threshold = 50;

    if (absX < threshold || absX <= absY) {
      return;
    }

    if (dx < 0) {
      moveTimelineCarousel(1);
    } else {
      moveTimelineCarousel(-1);
    }
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("open")) {
      return;
    }
    if (event.key === "Escape") {
      closeTimelineCarousel();
    } else if (event.key === "ArrowLeft") {
      moveTimelineCarousel(-1);
    } else if (event.key === "ArrowRight") {
      moveTimelineCarousel(1);
    }
  });
};

const updateTimelineCarousel = () => {
  const modal = document.getElementById("timeline-carousel");
  if (!modal || !state.carouselItems.length) {
    return;
  }

  const image = modal.querySelector(".carousel-image");
  const counter = modal.querySelector(".carousel-counter");
  const closeBtn = modal.querySelector(".carousel-close");
  const prevBtn = modal.querySelector(".carousel-nav.prev");
  const nextBtn = modal.querySelector(".carousel-nav.next");
  const total = state.carouselItems.length;
  const current = state.carouselIndex + 1;
  const src = state.carouselItems[state.carouselIndex];

  image.src = src;
  image.alt = `Timeline media ${current}`;
  counter.textContent = `${current} / ${total}`;
  closeBtn.setAttribute("aria-label", i18n[state.lang].timeline_close);
  prevBtn.setAttribute("aria-label", i18n[state.lang].timeline_prev);
  nextBtn.setAttribute("aria-label", i18n[state.lang].timeline_next);
};

const openTimelineCarousel = async (item) => {
  const urls = await getTimelineMediaUrls(item);
  if (!urls.length) {
    window.alert(i18n[state.lang].timeline_no_media);
    return;
  }

  ensureTimelineCarousel();
  state.carouselItems = urls;
  state.carouselIndex = 0;
  updateTimelineCarousel();

  const modal = document.getElementById("timeline-carousel");
  modal.classList.add("open");
  document.body.classList.add("modal-open");
};

const moveTimelineCarousel = (step) => {
  if (!state.carouselItems.length) {
    return;
  }
  const total = state.carouselItems.length;
  state.carouselIndex = (state.carouselIndex + step + total) % total;
  updateTimelineCarousel();
};

const closeTimelineCarousel = () => {
  const modal = document.getElementById("timeline-carousel");
  if (!modal) {
    return;
  }
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
};

const wireTimelineCarousel = () => {
  const list = document.getElementById("timeline-list");
  if (!list) {
    return;
  }

  list.addEventListener("click", (event) => {
    const btn = event.target.closest(".timeline-open-btn");
    if (!btn) {
      return;
    }

    const index = Number(btn.dataset.actionIndex);
    const item = state.visibleActions[index];
    if (!item) {
      return;
    }

    openTimelineCarousel(item);
  });
};

const renderProjects = () => {
  const target = document.getElementById("project-columns");
  if (!target) {
    return;
  }

  const groups = ["active", "future", "completed"];

  const html = groups
    .map((group) => {
      const groupItems = state.projects.filter((item) => item.status === group);
      const cards = groupItems
        .map((item) => {
          const title = item.title?.[state.lang] || item.title?.el || "";
          const summary = item.summary?.[state.lang] || item.summary?.el || "";
          const pct = Math.min(100, Math.round((item.raised / item.budget) * 100));

          return `
            <article class="project-card">
              <h4>${title}</h4>
              <p>${summary}</p>
              <div class="progress-bar">
                <div class="progress-fill" style="width:${pct}%"></div>
              </div>
              <div class="progress-meta">${i18n[state.lang].project_finance}: ${pct}% (${fmtCurrency(item.raised, state.lang)} / ${fmtCurrency(item.budget, state.lang)})</div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="project-column">
          <h3>${i18n[state.lang][`project_group_${group}`]}</h3>
          <div class="project-stack">${cards || ""}</div>
        </section>
      `;
    })
    .join("");

  target.innerHTML = html;
};

const wireLanguageButtons = () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang || defaultLang);
    });
  });
};

const wireNavigationLinks = () => {
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      const homeEl = document.querySelector("#home");
      if (homeEl) {
        homeEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
};

const wireActiveNavLink = () => {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.endsWith("/") ? "index.html" : (currentPath.split("/").pop() || "index.html");

  document.querySelectorAll(".main-nav a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const targetPage = href.split("?")[0].split("#")[0];
    const isActive = targetPage === currentPage;
    link.classList.toggle("active", isActive);
  });
};

const wireTimelineFilters = () => {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.timelineFilter = btn.dataset.filter || "all";

      document.querySelectorAll(".filter-btn").forEach((candidate) => {
        candidate.classList.toggle("active", candidate === btn);
      });

      renderTimeline();
    });
  });
};

const handleFormSuccess = () => {
  const params = new URLSearchParams(window.location.search);
  const formSuccess = params.get("form-success");

  if (!formSuccess) return;

  const formType = formSuccess === "member" ? "member-application" : "beneficiary-application";
  const card = document.getElementById(formType);
  const form = card ? card.querySelector("form") : null;

  if (form) {
    form.reset();
  }

  if (card) {
    const successKey = formSuccess === "member" ? "form_success_member" : "form_success_beneficiary";
    const successMsg = i18n[state.lang][successKey] || i18n[defaultLang][successKey];
    const titleMsg = i18n[state.lang].form_success_title || i18n[defaultLang].form_success_title;

    card.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--teal-700);">✓ ${titleMsg}</h2>
        <p style="color: var(--ink-soft); line-height: 1.7; font-size: 1rem;">${successMsg}</p>
        <p style="margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-muted);">Θα γυρίσετε στην αρχική σελίδα σε 3 δευτερόλεπτα...</p>
      </div>
    `;

    setTimeout(() => {
      window.history.replaceState({}, document.title, window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  }
};

const loadJson = async (path) => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
};

const init = async () => {
  wirePreviewLogin();
  wirePreviewShortcutLogin();

  if (!guardPreviewAccess()) {
    return;
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  wireLanguageButtons();
  wireNavigationLinks();
  wireActiveNavLink();
  wireTimelineFilters();
  wireTimelineCarousel();

  try {
    const [actions, projects] = await Promise.all([
      loadJson("data/actions.json"),
      loadJson("data/projects.json")
    ]);

    state.actions = actions;
    state.projects = projects;
  } catch (error) {
    console.error(error);
  }

  setLanguage(getInitialLanguage());
  handleFormSuccess();
};

init();
