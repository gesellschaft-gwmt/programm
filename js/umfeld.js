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
    
    day_gwmtmv: "",
    time_gwmtmv: "",
    event_gwmtmv: "",





    
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