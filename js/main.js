const supportedLangs = ["el", "en", "de"];
const defaultLang = "el";
const languageStorageKey = "synanthropia-lang";
const languageButtonLabels = {
  el: "Ελληνικά",
  en: "English",
  de: "Deutsch"
};
const languageButtonIcons = {
  el: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" fill="#0d5ecf"></rect><rect x="2" y="4.2" width="20" height="2.2" fill="#ffffff"></rect><rect x="2" y="8.6" width="20" height="2.2" fill="#ffffff"></rect><rect x="2" y="13" width="20" height="2.2" fill="#ffffff"></rect><rect x="2" y="17.4" width="20" height="2.2" fill="#ffffff"></rect><rect x="2" y="2" width="9.2" height="9.2" fill="#0d5ecf"></rect><rect x="5.45" y="2" width="2.3" height="9.2" fill="#ffffff"></rect><rect x="2" y="5.45" width="9.2" height="2.3" fill="#ffffff"></rect></svg>',
  en: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" fill="#0a3a8a"></rect><polygon points="2,4 4,2 22,20 20,22" fill="#ffffff"></polygon><polygon points="20,2 22,4 4,22 2,20" fill="#ffffff"></polygon><polygon points="2,5.2 5.2,2 22,18.8 18.8,22" fill="#c8102e"></polygon><polygon points="18.8,2 22,5.2 5.2,22 2,18.8" fill="#c8102e"></polygon><rect x="10" y="2" width="4" height="20" fill="#ffffff"></rect><rect x="2" y="10" width="20" height="4" fill="#ffffff"></rect><rect x="10.8" y="2" width="2.4" height="20" fill="#c8102e"></rect><rect x="2" y="10.8" width="20" height="2.4" fill="#c8102e"></rect></svg>',
  de: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="6.67" fill="#111111"></rect><rect x="2" y="8.67" width="20" height="6.67" fill="#c8102e"></rect><rect x="2" y="15.34" width="20" height="6.66" fill="#f2c300"></rect></svg>'
};

const i18n = {
  el: {
    org_name: "ΣΥΝΑΝΘΡΩΠΙΑ",
    actions_intro_body: "Εδώ μπορείτε να δείτε τις δράσεις μας, τις τρέχουσες πρωτοβουλίες και το ιστορικό των ήδη υλοποιημένων παρεμβάσεων.",
    actions_tab_current_short: "Τρέχουσες",
    actions_tab_history_short: "Ιστορικό",
    actions_tab_current: "Τρέχουσες δράσεις",
    actions_tab_history: "Ιστορικό δράσεων",
    actions_current_intro: "Εδώ συγκεντρώνουμε πρωτοβουλίες που εξελίσσονται τώρα ή ετοιμάζονται άμεσα και χρειάζονται στήριξη, συμμετοχή ή υλικά μέσα.",
    actions_history_intro: "Χρονολογική προβολή των δράσεων που έχουν ήδη υλοποιηθεί.",
    current_actions_empty: "Δεν υπάρχουν ακόμη τρέχουσες δράσεις σε αυτή την ενότητα.",
    nav_home: "Αρχική",
    nav_about: "Σχετικά με εμάς",
    nav_actions: "Δράσεις",
    nav_forms: "Αιτήσεις",
    nav_donate: "Δωρεά",
    nav_contact: "Επικοινωνία",
    hero_kicker: "Αστική Μη Κερδοσκοπική Εταιρεία",
    hero_title: "Μια κοινότητα φροντίδας για ανθρώπους, ζώα και περιβάλλον.",
    hero_lead: "Η Συνανθρωπιά οργανώνει και στηρίζει δράσεις αλληλεγγύης με διαφάνεια, συνέχεια και σεβασμό στον τόπο.",
    cta_view_actions: "Δες τις δράσεις",
    cta_donate: "Στήριξε με δωρεά",
    mission_title: "Αποστολή",
    mission_body: "Αποστολή μας είναι να προσφέρουμε βοήθεια εκεί όπου υπάρχει πραγματική ανάγκη, χωρίς διακρίσεις και χωρίς αποκλεισμούς. Στηρίζουμε ανθρώπους, ζώα και το περιβάλλον, ενώνοντας φορείς, εθελοντές και ωφελούμενους ή παρεμβαίνοντας άμεσα όπου αυτό απαιτείται. Κάθε δράση μας βασίζεται στη διαφάνεια, τη συνεργασία και τον σεβασμό προς κάθε μορφή ζωής και τον κοινό μας τόπο.",
    quick_actions_title: "Χρειάζεστε βοήθεια ή θέλετε να προσφέρετε;",
    path_help_title: "Χρειάζομαι βοήθεια",
    path_help_body: "Αν χρειάζεστε στήριξη, μπορείτε να μας στείλετε το αίτημά σας και θα επικοινωνήσουμε μαζί σας.",
    path_offer_title: "Θέλω να προσφέρω",
    path_offer_body: "Αν θέλετε να βοηθήσετε ως εθελοντής ή υποστηρικτής, δείτε τους διαθέσιμους τρόπους συμμετοχής.",
    quick_action_receive: "Αίτημα υποστήριξης",
    quick_action_volunteer: "Θέλω να γίνω εθελοντής",
    quick_action_donate: "Θέλω να κάνω δωρεά",
    pillars_title: "Τομείς δράσης",
    pillars_subtitle: "Οι τρεις βασικοί πυλώνες μας",
    pillar_human_title: "Άνθρωπος",
    pillar_human_body: "Στεκόμαστε δίπλα σε συνανθρώπους που χρειάζονται ουσιαστική στήριξη και κοινωνική ενδυνάμωση.",
    pillar_human_item_1: "Στήριξη με τρόφιμα και είδη πρώτης ανάγκης",
    pillar_human_item_2: "Παροχή ρούχων, παπουτσιών, επίπλων και βασικού οικιακού εξοπλισμού",
    pillar_human_item_3: "Κάλυψη δαπανών που ενισχύουν την αυτονομία και την κοινωνική ενδυνάμωση",
    pillar_human_item_4: "Βοήθεια σε νομικά θέματα, κυρίως σε ζητήματα μετανάστευσης, και υποστήριξη στη χρήση βασικών κρατικών υπηρεσιών",
    pillar_human_item_5: "Μαθήματα ελληνικών για ενήλικες πρόσφυγες",
    pillar_human_item_6: "Δραστηριότητες για παιδιά με στόχο την ένταξη στην τοπική κοινωνία και την ενίσχυση της κοινωνικής τους ανάπτυξης",
    pillar_animals_title: "Ζώα",
    pillar_animals_body: "Στον τομέα των ζώων, η δράση μας βασίζεται σήμερα στη συνεργασία και την έμπρακτη στήριξη τοπικών φιλοζωικών φορέων.",
    pillar_animals_item_1: "Στήριξη με τροφές και άλλα βασικά εφόδια",
    pillar_animals_item_2: "Βοήθεια για βελτιώσεις σε χώρους φιλοξενίας και κτηριακή υποδομή",
    pillar_animals_item_3: "Συνδρομή σε μεταφορές ζώων όταν υπάρχει ανάγκη",
    pillar_animals_item_4: "Υποστήριξη σε οργανωτικά και γραφειοκρατικά ζητήματα",
    pillar_env_title: "Περιβάλλον",
    pillar_env_body: "Στον τομέα του περιβάλλοντος βρισκόμαστε ακόμη σε αρχικό στάδιο δράσης και θέλουμε να αναπτύξουμε ουσιαστικές συνεργασίες με τοπικούς φορείς και κοινότητες.",
    pillar_env_item_1: "Βοήθεια σε πληγείσες περιοχές από φυσικές καταστροφές",
    pillar_env_item_2: "Συνεργασίες με τοπικούς φορείς και κοινότητες",
    pillar_env_item_3: "Καθαρισμοί και παρεμβάσεις αποκατάστασης",
    pillar_env_item_4: "Μελλοντικές δράσεις αναδάσωσης και περιβαλλοντικής φροντίδας",
    timeline_title: "Χρονολόγιο δράσεων",
    timeline_subtitle: "Νεότερες δράσεις στην κορυφή. Με κύλιση προς τα κάτω βλέπεις παλαιότερες.",
    filter_all: "Όλα",
    filter_human: "Άνθρωπος",
    filter_animals: "Ζώα",
    filter_environment: "Περιβάλλον",
    projects_title: "Έργα",
    projects_subtitle: "Ο τομέας αυτός έχει ενσωματωθεί στις δράσεις μας.",
    projects_merged_title: "Ο τομέας Έργα έχει ενσωματωθεί στις Δράσεις",
    projects_merged_body: "Οι πρωτοβουλίες και τα σχέδιά μας παρουσιάζονται μέσα από την ενότητα Δράσεις, όπου συγκεντρώνεται η δημόσια εικόνα του έργου μας.",
    about_title: "Σχετικά με εμάς",
    founders_title: "Η ομάδα μας",
    founder_renata_role: "Συνιδρύτρια",
    founder_pavlos_name: "Παύλος Δρίβας",
    founder_pavlos_role: "Συνιδρυτής και Διαχειριστής",
    volunteer_teacher_role: "Εθελόντρια καθηγήτρια",
    about_origin_prefix: "Η ΑΜΚΕ Συνανθρωπιά αποτελεί τη φυσική συνέχεια και τον επίσημο εταίρο του ελβετικού φιλανθρωπικού σωματείου",
    about_origin_suffix: "στην Ελλάδα, διασφαλίζοντας τη συνέχεια ενός έργου που ξεκίνησε το 2017.",
    legal_tax_id_label: "ΑΦΜ:",
    legal_gemi_label: "ΓΕΜΗ:",
    legal_address_label: "Νομική έδρα:",
    legal_address_value: "Θυμάρι Παλαιάς Φώκαιας, συμβολή Σόλωνος και Σεφέρη, Τ.Κ. 19013",
    legal_statement_body: "Η ΣΥΝΑΝΘΡΩΠΙΑ ΑΣΤΙΚΗ ΜΗ ΚΕΡΔΟΣΚΟΠΙΚΗ ΕΤΑΙΡΕΙΑ λειτουργεί στην Ελλάδα ως καταχωρημένη ΑΜΚΕ με ΑΦΜ 803122300 και αριθμό ΓΕΜΗ 190082001000.",
    about_body: "Δραστηριοποιούμαστε με στόχο τη βιώσιμη κοινωνική υποστήριξη, τη φροντίδα των ζώων και την προστασία του περιβάλλοντος, μέσα από συνεργασίες με εθελοντές και τοπικούς φορείς.",
    about_values_title: "Η προσέγγισή μας",
    about_values_body: "Λειτουργούμε με διαφάνεια, συνέπεια και μετρήσιμα αποτελέσματα, ώστε κάθε δράση να έχει ουσιαστικό αντίκτυπο στην κοινότητα.",
    forms_title: "Αιτήσεις ενδιαφέροντος",
    forms_intro_title: "Εκδήλωση ενδιαφέροντος",
    forms_intro_body: "Σε αυτή την ενότητα μπορείτε να εκδηλώσετε το ενδιαφέρον σας είτε να προσφέρετε ως εθελοντής ή δωρητής είτε να ζητήσετε υποστήριξη ως ωφελούμενος. Κάθε αίτηση εξετάζεται με προσοχή και θα επικοινωνήσουμε μαζί σας για τα επόμενα βήματα.",
    beneficiary_application_link: "Αίτηση ωφελούμενου",
    volunteer_application_link: "Αίτηση εθελοντή",
    donation_application_link: "Δωρεά σε είδος",
    beneficiary_form_title: "Αίτηση ωφελούμενου",
    volunteer_form_title: "Αίτηση εθελοντή",
    donation_form_title: "Δωρεά σε είδος",
    label_name: "Ονοματεπώνυμο",
    label_phone: "Τηλέφωνο",
    label_location: "Περιοχή",
    label_volunteer_reason: "Πώς θα θέλατε να προσφέρετε;",
    label_volunteer_availability: "Διαθεσιμότητα",
    label_donation_items: "Τι θα θέλατε να προσφέρετε;",
    label_donation_availability: "Πότε μπορείτε να τα διαθέσετε;",
    label_donation_location: "Σε ποιο σημείο βρίσκονται;",
    label_donation_notes: "Επιπλέον πληροφορίες",
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
    submit_donation_plan: "Αποστολή προγραμματισμού",
    form_success_title: "Ευχαριστούμε!",
    form_success_beneficiary: "Το αίτημά σας προστέθηκε στα αρχεία μας. Θα επικοινωνήσουμε για την επόμενη διαδικασία.",
    form_success_volunteer: "Η αίτησή σας για εθελοντισμό λήφθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα.",
    form_success_donation: "Ο προγραμματισμός της δωρεάς σας λήφθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα για τα επόμενα βήματα.",
    form_error: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
    donate_title: "Στήριξη και δωρεές",
    donate_subtitle: "Δεχόμαστε οικονομικές δωρεές αλλά και δωρεές σε είδος, με στόχο να καλύπτουμε ουσιαστικές ανάγκες με αξιοπρέπεια και φροντίδα.",
    donate_schedule_cta: "Προγραμματισμός δωρεάς",
    bank_details_title: "Στοιχεία τραπεζικού λογαριασμού",
    beneficiary_label: "Δικαιούχος:",
    copy_label: "Αντιγραφή",
    copy_success: "Αντιγράφηκε",
    copy_error: "Σφάλμα",
    in_kind_title: "Δωρεές σε είδος",
    in_kind_body: "Δεχόμαστε είδη που μπορούν να δοθούν άμεσα σε ανθρώπους που τα χρειάζονται, αρκεί να είναι καθαρά, σε καλή κατάσταση και πλήρως λειτουργικά.",
    in_kind_item_1: "Ρούχα και παπούτσια",
    in_kind_item_2: "Είδη οικοσκευής και ηλεκτρικές συσκευές",
    in_kind_item_3: "Έπιπλα, ηλεκτρονικές συσκευές και παιχνίδια",
    in_kind_note: "Δεν δεχόμαστε αντικείμενα που προορίζονται για απόρριψη ή δεν μπορούν να χρησιμοποιηθούν άμεσα.",
    contact_title: "Επικοινωνία",
    location_value: "Μεταλλωρύχων 12, Άγιος Κωνσταντίνος Λαυρεωτικής, 19500",
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
    actions_intro_body: "Here you can view our actions, current initiatives, and the history of interventions that have already been carried out.",
    actions_tab_current_short: "Current",
    actions_tab_history_short: "History",
    actions_tab_current: "Current actions",
    actions_tab_history: "Action history",
    actions_current_intro: "This tab gathers initiatives that are currently in progress or being prepared for immediate launch and need support, participation, or donated items.",
    actions_history_intro: "A chronological view of actions that have already been carried out, helping us track continuity and preserve the record of our work.",
    current_actions_empty: "There are no current actions in this section yet.",
    nav_home: "Home",
    nav_about: "About us",
    nav_actions: "Actions",
    nav_forms: "Applications",
    nav_donate: "Donate",
    nav_contact: "Contact",
    hero_kicker: "Non-profit civil organization",
    hero_title: "A caring community for people, animals, and the environment.",
    hero_lead: "Synanthropia organizes and supports solidarity actions with transparency, continuity, and respect for place.",
    cta_view_actions: "View actions",
    cta_donate: "Support with a donation",
    mission_title: "Mission",
    mission_body: "Our mission is to offer help wherever there is real need, without discrimination or exclusion. We support people, animals, and the environment by connecting organizations, volunteers, and beneficiaries, or by intervening directly wherever this is needed. Every action we take is grounded in transparency, collaboration, and respect for every form of life and for the place we all share.",
    quick_actions_title: "Do you need support or would you like to help?",
    path_help_title: "I need support",
    path_help_body: "If you need support, you can send us your request and we will contact you.",
    path_offer_title: "I want to help",
    path_offer_body: "If you would like to contribute as a volunteer or supporter, see the available ways to participate.",
    quick_action_receive: "Support request",
    quick_action_volunteer: "I want to volunteer",
    quick_action_donate: "I want to donate",
    pillars_title: "Action pillars",
    pillars_subtitle: "Our three core pillars",
    pillar_human_title: "People",
    pillar_human_body: "We stand beside people who need meaningful support and social empowerment.",
    pillar_human_item_1: "Support with food and essential supplies",
    pillar_human_item_2: "Provision of clothing, shoes, furniture, and basic household equipment",
    pillar_human_item_3: "Coverage of costs that strengthen autonomy and social empowerment",
    pillar_human_item_4: "Help with legal matters, mainly migration-related issues, and support in using basic public services",
    pillar_human_item_5: "Greek language lessons for adult refugees",
    pillar_human_item_6: "Activities for children that support local integration and strengthen their social development",
    pillar_animals_title: "Animals",
    pillar_animals_body: "In the area of animal welfare, our work currently focuses on cooperation with and practical support for local animal welfare groups.",
    pillar_animals_item_1: "Support with food and other essential supplies",
    pillar_animals_item_2: "Help with improvements to shelters and facility infrastructure",
    pillar_animals_item_3: "Assistance with animal transport when needed",
    pillar_animals_item_4: "Support with organizational and administrative matters",
    pillar_env_title: "Environment",
    pillar_env_body: "In the area of the environment, we are still at an early stage and aim to build meaningful collaborations with local organizations and communities.",
    pillar_env_item_1: "Support in areas affected by natural disasters",
    pillar_env_item_2: "Partnerships with local organizations and communities",
    pillar_env_item_3: "Cleanups and restoration interventions",
    pillar_env_item_4: "Future reforestation and environmental care actions",
    timeline_title: "Action timeline",
    timeline_subtitle: "Newest actions first. Scroll down for older entries.",
    filter_all: "All",
    filter_human: "People",
    filter_animals: "Animals",
    filter_environment: "Environment",
    projects_title: "Projects",
    projects_subtitle: "This area has now been integrated into our Actions.",
    projects_merged_title: "The Projects area has been integrated into Actions",
    projects_merged_body: "Our initiatives and plans are presented through the Actions section, which brings together the public view of our work.",
    about_title: "About us",
    founders_title: "Our team",
    founder_renata_role: "Co-founder",
    founder_pavlos_name: "Pavlos Drivas",
    founder_pavlos_role: "Co-founder & Administrator",
    volunteer_teacher_role: "Volunteer Greek teacher",
    about_origin_prefix: "Synanthropia NPO is the natural continuation and official partner of the Swiss charitable association",
    about_origin_suffix: "in Greece, ensuring continuity of work that began in 2017.",
    legal_tax_id_label: "Tax ID (AFM):",
    legal_gemi_label: "GEMI No.:",
    legal_address_label: "Registered office:",
    legal_address_value: "Thymari, Palaia Fokaia, corner of Solonos and Seferi, Postal Code 19013",
    legal_statement_body: "SYNANTHROPIA CIVIL NON-PROFIT COMPANY operates in Greece as a registered non-profit entity with Tax ID 803122300 and GEMI number 190082001000.",
    about_body: "We work toward sustainable social support, animal care, and environmental protection through collaboration with volunteers and local partners.",
    about_values_title: "Our approach",
    about_values_body: "We operate with transparency, consistency, and measurable outcomes so that every action has meaningful impact in the community.",
    forms_title: "Interest applications",
    forms_intro_title: "Expression of interest",
    forms_intro_body: "In this section you can express your interest either in offering support as a volunteer or donor, or in requesting support as a beneficiary. Each application is reviewed carefully and we will contact you with the next steps.",
    beneficiary_application_link: "Beneficiary application",
    volunteer_application_link: "Volunteer application",
    donation_application_link: "In-kind donation",
    beneficiary_form_title: "Beneficiary application",
    volunteer_form_title: "Volunteer application",
    donation_form_title: "In-kind donation",
    label_name: "Full name",
    label_phone: "Phone",
    label_location: "Location",
    label_volunteer_reason: "How would you like to contribute?",
    label_volunteer_availability: "Availability",
    label_donation_items: "What would you like to offer?",
    label_donation_availability: "When can you make it available?",
    label_donation_location: "Where is it located?",
    label_donation_notes: "Additional information",
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
    submit_donation_plan: "Send scheduling request",
    form_success_title: "Thank you!",
    form_success_beneficiary: "Your request has been received. We will contact you with next steps.",
    form_success_volunteer: "Your volunteer application has been received. We will contact you soon.",
    form_success_donation: "Your donation scheduling request has been received. We will contact you soon with the next steps.",
    form_error: "Something went wrong. Please try again.",
    donate_title: "Support and donations",
    donate_subtitle: "We accept both financial donations and in-kind donations in order to respond to real needs with dignity and care.",
    donate_schedule_cta: "Donation scheduling",
    bank_details_title: "Bank account details",
    beneficiary_label: "Beneficiary:",
    copy_label: "Copy",
    copy_success: "Copied",
    copy_error: "Error",
    in_kind_title: "In-kind donations",
    in_kind_body: "We accept items that can be given directly to people who need them, as long as they are clean, in good condition, and fully functional.",
    in_kind_item_1: "Clothes and shoes",
    in_kind_item_2: "Household items and electrical appliances",
    in_kind_item_3: "Furniture, electronic devices, and toys",
    in_kind_note: "We do not accept items that are meant for disposal or cannot be used immediately.",
    contact_title: "Contact",
    location_value: "Metallorychon 12, Agios Konstantinos Lavreotikis, 19500",
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
    actions_intro_body: "Hier koennen Sie unsere Aktionen, aktuelle Initiativen und den Verlauf bereits umgesetzter Massnahmen sehen.",
    actions_tab_current_short: "Aktuell",
    actions_tab_history_short: "Verlauf",
    actions_tab_current: "Aktuelle Aktionen",
    actions_tab_history: "Aktionsverlauf",
    actions_current_intro: "Hier sammeln wir Initiativen, die aktuell laufen oder unmittelbar vorbereitet werden und Unterstuetzung, Beteiligung oder Sachspenden brauchen.",
    actions_history_intro: "Eine chronologische Ansicht der bereits umgesetzten Aktionen, damit wir die Kontinuitaet und das Archiv unserer Arbeit nachvollziehen koennen.",
    current_actions_empty: "In diesem Bereich gibt es noch keine aktuellen Aktionen.",
    nav_home: "Start",
    nav_about: "Ueber uns",
    nav_actions: "Aktionen",
    nav_forms: "Antraege",
    nav_donate: "Spende",
    nav_contact: "Kontakt",
    hero_kicker: "Gemeinnuetzige Organisation",
    hero_title: "Eine sorgende Gemeinschaft fuer Menschen, Tiere und Umwelt.",
    hero_lead: "Synanthropia organisiert und unterstuetzt Solidaritaetsaktionen mit Transparenz, Kontinuitaet und Respekt fuer den Ort.",
    cta_view_actions: "Aktionen ansehen",
    cta_donate: "Mit Spende unterstuetzen",
    mission_title: "Mission",
    mission_body: "Unsere Mission ist es, dort Hilfe zu leisten, wo wirklicher Bedarf besteht, ohne Diskriminierung und ohne Ausgrenzung. Wir unterstuetzen Menschen, Tiere und die Umwelt, indem wir Organisationen, Freiwillige und Beguenstigte zusammenbringen oder dort direkt eingreifen, wo es erforderlich ist. Jede unserer Handlungen basiert auf Transparenz, Zusammenarbeit und Respekt vor jeder Form des Lebens und vor dem gemeinsamen Lebensraum.",
    quick_actions_title: "Brauchen Sie Hilfe oder moechten Sie helfen?",
    path_help_title: "Ich brauche Hilfe",
    path_help_body: "Wenn Sie Unterstuetzung brauchen, koennen Sie uns Ihr Anliegen senden und wir werden uns bei Ihnen melden.",
    path_offer_title: "Ich moechte helfen",
    path_offer_body: "Wenn Sie sich als Freiwillige/r oder Unterstuetzer/in einbringen moechten, finden Sie hier die passenden Wege.",
    quick_action_receive: "Unterstuetzung anfragen",
    quick_action_volunteer: "Ich moechte mich ehrenamtlich engagieren",
    quick_action_donate: "Ich moechte spenden",
    pillars_title: "Handlungsfelder",
    pillars_subtitle: "Unsere drei Grundpfeiler",
    pillar_human_title: "Menschen",
    pillar_human_body: "Wir stehen Menschen zur Seite, die konkrete Unterstuetzung und soziale Staerkung brauchen.",
    pillar_human_item_1: "Unterstuetzung mit Lebensmitteln und Dingen des taeglichen Bedarfs",
    pillar_human_item_2: "Bereitstellung von Kleidung, Schuhen, Moebeln und grundlegender Haushaltsausstattung",
    pillar_human_item_3: "Uebernahme von Kosten, die Selbststaendigkeit und soziale Staerkung foerdern",
    pillar_human_item_4: "Hilfe bei rechtlichen Fragen, vor allem bei Migrationsthemen, und Unterstuetzung bei der Nutzung grundlegender staatlicher Dienste",
    pillar_human_item_5: "Griechischunterricht fuer erwachsene Gefluechtete",
    pillar_human_item_6: "Aktivitaeten fuer Kinder zur Foerderung lokaler Integration und ihrer sozialen Entwicklung",
    pillar_animals_title: "Tiere",
    pillar_animals_body: "Im Bereich Tierschutz konzentriert sich unsere Arbeit derzeit auf die Zusammenarbeit mit lokalen Tierschutzinitiativen und deren praktische Unterstuetzung.",
    pillar_animals_item_1: "Unterstuetzung mit Futter und anderen grundlegenden Bedarfsguetern",
    pillar_animals_item_2: "Hilfe bei Verbesserungen von Unterbringungsorten und Infrastruktur",
    pillar_animals_item_3: "Unterstuetzung bei Tiertransporten, wenn Bedarf besteht",
    pillar_animals_item_4: "Hilfe bei organisatorischen und buerokratischen Fragen",
    pillar_env_title: "Umwelt",
    pillar_env_body: "Im Bereich Umwelt befinden wir uns noch in einer fruehen Phase und moechten tragfaehige Kooperationen mit lokalen Akteuren und Gemeinschaften aufbauen.",
    pillar_env_item_1: "Hilfe in von Naturkatastrophen betroffenen Gebieten",
    pillar_env_item_2: "Zusammenarbeit mit lokalen Akteuren und Gemeinschaften",
    pillar_env_item_3: "Reinigungsaktionen und Massnahmen zur Wiederherstellung",
    pillar_env_item_4: "Zukuenftige Aufforstungs- und Umweltpflegeprojekte",
    timeline_title: "Aktions-Timeline",
    timeline_subtitle: "Neueste Aktionen zuerst. Beim Scrollen nach unten erscheinen aeltere Eintraege.",
    filter_all: "Alle",
    filter_human: "Menschen",
    filter_animals: "Tiere",
    filter_environment: "Umwelt",
    projects_title: "Projekte",
    projects_subtitle: "Dieser Bereich wurde in unsere Aktionen integriert.",
    projects_merged_title: "Der Bereich Projekte wurde in die Aktionen integriert",
    projects_merged_body: "Unsere Initiativen und Vorhaben werden in der Rubrik Aktionen praesentiert, die den oeffentlichen Einblick in unsere Arbeit buendelt.",
    about_title: "Ueber uns",
    founders_title: "Unser Team",
    founder_renata_role: "Mitgründerin",
    founder_pavlos_name: "Pavlos Drivas",
    founder_pavlos_role: "Mitgründer und Geschäftsführer",
    volunteer_teacher_role: "Ehrenamtliche Griechischlehrerin",
    about_origin_prefix: "Die NPO Synanthropia ist die natuerliche Fortsetzung und der offizielle Partner des Schweizer gemeinnuetzigen Vereins",
    about_origin_suffix: "in Griechenland und sichert die Kontinuitaet einer Arbeit, die 2017 begonnen hat.",
    legal_tax_id_label: "Steuer-ID (AFM):",
    legal_gemi_label: "GEMI-Nr.:",
    legal_address_label: "Rechtlicher Sitz:",
    legal_address_value: "Thymari, Palaia Fokaia, Ecke Solonos und Seferi, Postleitzahl 19013",
    legal_statement_body: "SYNANTHROPIA ZIVILE GEMEINNÜTZIGE GESELLSCHAFT ist in Griechenland als eingetragene gemeinnützige Organisation mit Steuer-ID 803122300 und GEMI-Nummer 190082001000 tätig.",
    about_body: "Wir arbeiten fuer nachhaltige soziale Unterstuetzung, Tierschutz und Umweltschutz durch Zusammenarbeit mit Freiwilligen und lokalen Partnern.",
    about_values_title: "Unser Ansatz",
    about_values_body: "Wir arbeiten mit Transparenz, Verlaesslichkeit und messbaren Ergebnissen, damit jede Aktion eine echte Wirkung in der Gemeinschaft hat.",
    forms_title: "Interessensantraege",
    forms_intro_title: "Interesse bekunden",
    forms_intro_body: "In diesem Bereich koennen Sie Ihr Interesse bekunden, entweder als Freiwillige/r oder Spender/in Unterstuetzung anzubieten oder als Beguenstigte/r Hilfe anzufragen. Jede Anfrage wird sorgfaeltig geprueft und wir melden uns mit den naechsten Schritten bei Ihnen.",
    beneficiary_application_link: "Antrag als Beguenstigter",
    volunteer_application_link: "Antrag als Freiwillige/r",
    donation_application_link: "Sachspende",
    beneficiary_form_title: "Antrag als Beguenstigter",
    volunteer_form_title: "Antrag als Freiwillige/r",
    donation_form_title: "Sachspende",
    label_name: "Vollstaendiger Name",
    label_phone: "Telefon",
    label_location: "Ort",
    label_volunteer_reason: "Wie moechten Sie sich einbringen?",
    label_volunteer_availability: "Verfuegbarkeit",
    label_donation_items: "Was moechten Sie anbieten?",
    label_donation_availability: "Wann koennen Sie es zur Verfuegung stellen?",
    label_donation_location: "Wo befindet es sich?",
    label_donation_notes: "Zusaetzliche Informationen",
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
    submit_donation_plan: "Planung senden",
    form_success_title: "Vielen Dank!",
    form_success_beneficiary: "Ihre Anfrage wurde empfangen. Wir kontaktieren Sie mit weiteren Schritten.",
    form_success_volunteer: "Ihre Anfrage fuer freiwilliges Engagement wurde empfangen. Wir melden uns in Kuerze bei Ihnen.",
    form_success_donation: "Ihre Anfrage zur Spendenplanung wurde empfangen. Wir melden uns in Kuerze mit den naechsten Schritten.",
    form_error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
    donate_title: "Unterstuetzung und Spenden",
    donate_subtitle: "Wir nehmen sowohl finanzielle Spenden als auch Sachspenden an, um konkrete Bedarfe mit Würde und Sorgfalt zu decken.",
    donate_schedule_cta: "Spende planen",
    bank_details_title: "Bankverbindung",
    beneficiary_label: "Empfaenger:",
    copy_label: "Kopieren",
    copy_success: "Kopiert",
    copy_error: "Fehler",
    in_kind_title: "Sachspenden",
    in_kind_body: "Wir nehmen Dinge an, die direkt an Menschen weitergegeben werden koennen, sofern sie sauber, in gutem Zustand und voll funktionsfaehig sind.",
    in_kind_item_1: "Kleidung und Schuhe",
    in_kind_item_2: "Haushaltsgegenstaende und Elektrogeraete",
    in_kind_item_3: "Moebel, elektronische Geraete und Spielzeug",
    in_kind_note: "Wir nehmen keine Gegenstaende an, die fuer die Entsorgung bestimmt sind oder nicht sofort genutzt werden koennen.",
    contact_title: "Kontakt",
    location_value: "Metallorychon 12, Agios Konstantinos Lavreotikis, 19500",
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
  actionsTab: "current",
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

  syncCopyButtonsLanguage();

  document.documentElement.removeAttribute("data-lang-pending");

  renderTimeline();
  renderProjects();
  renderActionsTabs();
};

const renderLanguageButtons = () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const lang = btn.dataset.lang || defaultLang;
    const icon = languageButtonIcons[lang];
    const label = languageButtonLabels[lang] || lang.toUpperCase();

    if (icon) {
      btn.innerHTML = icon;
    }

    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
};

const closeMobileNav = () => {
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }
  document.body.classList.remove("nav-open");
};

const wireMobileNav = () => {
  const headerInner = document.querySelector(".header-inner");
  const nav = document.querySelector(".main-nav");
  const languageSwitcher = document.querySelector(".language-switcher");

  if (!headerInner || !nav || document.querySelector(".nav-toggle")) {
    return;
  }

  if (!nav.id) {
    nav.id = "site-main-nav";
  }

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", nav.id);
  toggle.setAttribute("aria-label", "Toggle navigation menu");
  toggle.innerHTML = '<span></span><span></span><span></span>';

  if (languageSwitcher) {
    headerInner.insertBefore(toggle, languageSwitcher);
  } else {
    headerInner.appendChild(toggle);
  }

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileNav();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMobileNav();
    }
  });
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

  const groupsAttr = target.dataset.projectGroups;
  const hideGroupHeadings = target.dataset.hideGroupHeadings === "true";
  const groups = groupsAttr
    ? groupsAttr.split(",").map((group) => group.trim()).filter(Boolean)
    : ["active", "future", "completed"];

  const html = groups
    .map((group) => {
      const groupItems = state.projects.filter((item) => item.status === group);
      if (!groupItems.length) {
        return "";
      }

      const cards = groupItems
        .map((item) => {
          const title = item.title?.[state.lang] || item.title?.el || "";
          const summary = item.summary?.[state.lang] || item.summary?.el || "";
          const hasFinance = Number.isFinite(item.budget) && item.budget > 0 && Number.isFinite(item.raised);
          const pct = hasFinance ? Math.min(100, Math.round((item.raised / item.budget) * 100)) : null;

          return `
            <article class="project-card">
              <h4>${title}</h4>
              ${summary ? `<p>${summary}</p>` : ""}
              ${hasFinance ? `
              <div class="progress-bar">
                <div class="progress-fill" style="width:${pct}%"></div>
              </div>
              <div class="progress-meta">${i18n[state.lang].project_finance}: ${pct}% (${fmtCurrency(item.raised, state.lang)} / ${fmtCurrency(item.budget, state.lang)})</div>
              ` : ""}
            </article>
          `;
        })
        .join("");

      return `
        <section class="project-column">
          ${hideGroupHeadings ? "" : `<h3>${i18n[state.lang][`project_group_${group}`]}</h3>`}
          <div class="project-stack">${cards || ""}</div>
        </section>
      `;
    })
    .join("");

  const emptyKey = target.dataset.emptyKey || "timeline_no_items";
  target.innerHTML = html || `<p class="timeline-empty-media">${i18n[state.lang][emptyKey] || i18n[defaultLang][emptyKey] || ""}</p>`;
};

const renderActionsTabs = () => {
  const buttons = document.querySelectorAll(".actions-tab-btn");
  const panels = document.querySelectorAll(".actions-tab-panel");
  if (!buttons.length || !panels.length) {
    return;
  }

  buttons.forEach((btn) => {
    const isActive = btn.dataset.tab === state.actionsTab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `actions-panel-${state.actionsTab}`;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
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

const handleHashTarget = () => {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  if (target.tagName === "DETAILS") {
    target.open = true;
  }

  window.setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
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

const wireActionsTabs = () => {
  document.querySelectorAll(".actions-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.actionsTab = btn.dataset.tab || "current";
      renderActionsTabs();
    });
  });
};

const syncCopyButtonsLanguage = () => {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    const label = i18n[state.lang].copy_label || i18n[defaultLang].copy_label;
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
};

const copyTextToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  document.body.removeChild(helper);
};

const wireCopyButtons = () => {
  document.querySelectorAll(".copy-btn[data-copy-target]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.dataset.copyTarget;
      const target = targetId ? document.getElementById(targetId) : null;
      if (!target) return;
      const copyValue = btn.dataset.copyValue || target.textContent || "";

      const originalLabel = i18n[state.lang].copy_label || i18n[defaultLang].copy_label;

      try {
        await copyTextToClipboard(copyValue);
        btn.setAttribute("aria-label", i18n[state.lang].copy_success || i18n[defaultLang].copy_success);
        btn.setAttribute("title", i18n[state.lang].copy_success || i18n[defaultLang].copy_success);
        btn.classList.add("copied");
      } catch (error) {
        console.error(error);
        btn.setAttribute("aria-label", i18n[state.lang].copy_error || i18n[defaultLang].copy_error);
        btn.setAttribute("title", i18n[state.lang].copy_error || i18n[defaultLang].copy_error);
        btn.classList.remove("copied");
      }

      window.setTimeout(() => {
        btn.setAttribute("aria-label", originalLabel);
        btn.setAttribute("title", originalLabel);
        btn.classList.remove("copied");
      }, 1800);
    });
  });
};

const handleFormSuccess = () => {
  const params = new URLSearchParams(window.location.search);
  const formSuccess = params.get("form-success");

  if (!formSuccess) return;

  const formType = formSuccess === "volunteer"
      ? "volunteer-application"
      : formSuccess === "donation"
        ? "donation-application"
        : "beneficiary-application";
  const card = document.getElementById(formType);
  const form = card ? card.querySelector("form") : null;

  if (form) {
    form.reset();
  }

  if (card) {
    if (card.tagName === "DETAILS") {
      card.open = true;
    }

    const successKey = formSuccess === "volunteer"
        ? "form_success_volunteer"
        : formSuccess === "donation"
          ? "form_success_donation"
          : "form_success_beneficiary";
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
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderLanguageButtons();
  wireMobileNav();
  wireLanguageButtons();
  wireNavigationLinks();
  wireActiveNavLink();
  wireTimelineFilters();
  wireActionsTabs();
  wireCopyButtons();
  wireTimelineCarousel();
  handleHashTarget();

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
