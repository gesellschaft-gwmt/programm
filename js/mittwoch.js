const originalContent = {};

const translations = {
  en: {
    pageTitle: "Wednesday",
    back: "back",
    headline: "Program - Wednesday, September 9, 2026",

    th_time: "Time",
    th_event: "Event",
    th_location: "Location",

    time1: '15:00 - 19:00 <a href="../iCal/mittwoch/registrierung.ics">(iCal)</a>',
    event1: "Registration at the National Museum of Agriculture (conference office).<br>Opportunity to visit the museum, café, and observation platform.",
    location1: "National Museum of Agriculture",

    time2: '15:00 - 18:30 <a href="../iCal/mittwoch/mitgliederversammlung.ics">(iCal)</a>',
    event2: "General assembly of GWMT",

    time3: 'From 19:00 <a href="../iCal/mittwoch/eroeffnungsvortrag.ics">(iCal)</a>',
    event3: `<strong>Opening ceremony of the 8th annual GWMT conference</strong><br><br>
    / Welcome by <i>TBA</i><br>
    / GWMT chair, Noyan Dinçal<br>
    / Local organizers, Jan Surman<br><br>
    <strong>Lucie Storchová, Prague</strong><br>
    TBA<br>
    / Moderation: TBA`,

    time4: "Afterwards (until 22:00)",
    event4: "Reception with drinks and snacks",

    time5: "From 22:00",
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