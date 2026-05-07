const originalContent = {};

const translations = {
  en: {
    pageTitle: "GWMT Program 2026",
    headline: "Annual Conference Program 2026",

    wednesday: "Wednesday, September 09, 2026",
    thursday: "Thursday, September 10, 2026",
    friday: "Friday, September 11, 2026",
    enviroment: "Events accompanying the annual conference",
    year2025: "Annual Conference Program 2025",
    year2026: "Annual Conference Program 2024",

    info: "Hinweis: Diese Seite ist in deutscher und englischer Sprache verfügbar. Klicken sie für die deutsche Seite den Knopf (DE) oben auf der Seite."
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