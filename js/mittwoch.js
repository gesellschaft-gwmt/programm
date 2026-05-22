const originalContent = {};

const translations = {
  en: {
    pageTitle: "Wednesday",
    back: "back",
    headline: "Program - Wednesday, September 9, 2026",

    th_time: "Time",
    th_event: "Event",
    th_location: "Location",

    time1: "3:00 p.m. - 7:00 p.m.",
    event1: "Registration at the National Museum of Agriculture (conference office).<br>Opportunity to visit the museum, café, and observation platform.",
    location1: "National Museum of Agriculture",

    time2: "3:00 p.m. - 6:30 p.m.",
    event2: "General assembly of GWMT",

    time3: "From 7:00 p.m.",
    event3: `<strong>Opening ceremony of the 8th annual GWMT conference</strong><br><br>
    / Welcome by <i>TBA</i><br>
    / GWMT chair, Noyan Dinçal<br>
    / Local organizers, Jan Surman<br><br>
    <strong>Lucie Storchová, Prague</strong><br>
    Translating the Natural Order: The Circulation of Knowledge between the German Lands and Bohemia in Early Modern Times<br>
    / Moderation: TBA`,

    time4: "Afterwards (until 10:00 p.m.)",
    event4: "Reception with drinks and snacks",

    time5: "From 10:00 p.m.",
    event5: "Informal end of the day at Letenský zámeček with a view over Prague",
    location2: "250 m straight ahead from the museum entrance"
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