const originalContent = {};

const translations = {
  en: {
    pageTitle: "Events accompanying the annual conference",
    headline: "Events accompanying the annual conference",

    th_day: "Day",
    th_time: "Time",
    th_event: "Event",
    th_location: "Location",

    dk_day_1: "08/09/2026",
    dk_day_2: "09/09/2026",
    day_gwmtmv:"09/09/2026",
    time_gwmtmv:"03:30 p.m. - 06:30 p.m.",
    event_gwmtmv:"GWMT General Assembly",
    rt_day: "10/09/2026",
    rt_time:"01:30 p.m. - 03:00 p.m.",
    ec_day:"10/09/2026",
    ec_time:"05:15 p.m. - 06:00 p.m.",
    agf_day:"10/09/2026",
    agf_time:"01:30 p.m. 03:00 p.m.",
    day_pecee:"10/09/2026",
    time_pecee:"05:15 p.m. - 06:00 p.m.",
    guidedtours: "guidedtours",
    day_gt:"Day",
    time_gt:"Time",
    event_gt:"Event",
    location_gt:"Location",
    day_gt_1:"09/09/2026",
    time_gt_1:"01:30 p.m. - 03:00 p.m.",
    gt_1:"Technical Museum, Prague",
    day_gt_2:"11/09/2026",
    time_gt_2:"02:30 p.m. - 03:00 p.m."
  }
};

// Original (Deutsch) speichern
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[id]").forEach(el => {
    originalContent[el.id] = el.innerHTML;
  });

  // gespeicherte Sprache laden
  const savedLang = localStorage.getItem("lang");
  if (savedLang === "en") {
    setLanguage("en");
  }
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  if (lang === "en") {
    for (let key in translations.en) {
      const el = document.getElementById(key);
      if (el) el.innerHTML = translations.en[key];
    }
    document.documentElement.lang = "en";
  }

  if (lang === "de") {
    for (let key in originalContent) {
      const el = document.getElementById(key);
      if (el) el.innerHTML = originalContent[key];
    }
    document.documentElement.lang = "de";
  }
}