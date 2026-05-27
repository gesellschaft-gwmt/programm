const originalContent = {};

const translations = {
    en: {
        pageTitle: "Round Table 2026",
        headline: "Round Table 2026",

        orga: "Organization: Marcus Carrier, Leonard Damhorst, Gina Maria Klein, Roxana Müller und Natalie Rath",
        content: `How do we talk about knowledge? What knowledge do we not share openly? In correspondence with the GWMT 2026 conference theme “Epistemic Passages: Knowledge in Translation,” this year's Round Table of the AG Mittelbau (Representation of early career researchers and non-professional staff) will deal with the translation of knowledge. Translation is also, but by no means exclusively, related to so-called natural languages. Rather, the Round Table is dedicated to knowledge communication and production on three different but interrelated levels: (1) Output, (2) Outreach, and (3) the Inbetween. Following on from the Round Tables of recent years, which repeatedly highlighted the importance of implicit, i.e., unspoken, knowledge, we would like to turn our attention to this topic. We will focus on the forms, origins, and differences of implicit knowledge and ask how translation into and out of our own university contexts is possible. We invite you to join us during the lunch break, have some snacks and discuss with each other and our invited experts your efforts and struggles in translating knowledge.<br><br>[The experts are to be announced.]`
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