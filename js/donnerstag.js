const originalContent = {};

const translations = {
    en: {
        pageTitle: "Thursday",
        back: "back",
        headline: "Program - Thursday, September 10, 2026",

        th_time: "Time",
        th_event: "Event",
        th_location: "Location",

        time_sektion1: "9:00 a.m. - 11:00 a.m.",
        time_sektion2: "9:00 a.m. - 11:00 a.m.",
        time_sektion3: "9:00 a.m. - 11:00 a.m.",
        time_sektion4: "9:00 a.m. - 11:00 a.m.",
        time_coffebreak: "11:00 a.m. - 11:30 a.m.",
        time_p_roundtable: "11:30 a.m. - 1:00 p.m",
        time_sektion5: "3:15 p.m. - 5:15 p.m.",
        time_sektion6: "3:15 p.m. - 5:15 p.m.",
        time_sektion7: "3:15 p.m. - 5:15 p.m.",
        time_sektion8: "3:15 p.m. - 5:15 p.m.",
        time_earlycareer: "5:15 p.m. - 6:00 p.m",
        time_transfer: "then",
        time_gala: "7:00 am",
        time_disco: "then",

        conference_office_thursday_time: "08:30 a.m. - 05:00 p.m.",
        conference_office_thursday: "Open Conference Office",

        time_rt_ag_mb: "01:30 p.m. - 03:00 p.m.",
        event_rt_ag_mb: `<a href="../sektionen/sektion0/agrt.html"><strong>Roundtable AG Mittelbau<strong></a></td>`,

        sektion1: `<strong>SECTION 1</strong><br>
                        <strong><a href="../sektionen/sektion1/s1.html">Roundtable: Narrating marginalized pasts. Public histories of
                                science, technology, and medicine</a></strong>
                        <br>/ Organization: Sarah Ehlers, Munich
                        <br>
                        <br>/ Manuela Bauche, Berlin
                        <br>/ Leonie Braam, Berlin
                        <br>/ Henrik Eßler, Hamburg
                        <br>/ Sophie Gerber, Vienna
                        <br>/ Monique Ligtenberg, Zurich`,

        sektion2: `<strong>SECTION 2 (German)</strong><br>
                        <strong><a href="../sektionen/sektion2/s2.html">Überbrücken, übertragen, unterschlagen: Medizinische
                                Translationen im Kalten Krieg</a></strong>
                        <br>/ Organization: Alexa Geisthövel, Berlin
                        <br>
                        <br><a href="../sektionen/sektion2/s2_1.html">Translating Weimar. Arzneimittel, Politik und Ärzteschaft in Deutschland in den 1950er
                        Jahren</a>
                        <br>/ Volker Hess, Berlin
                        <br>
                        <br><a href="../sektionen/sektion2/s2_2.html">Translation im Kalten Krieg: Wissenschaftliche Reisen zwischen der DDR und Schweden</a>
                        <br>/ Nils Hansson, Dusseldorf
                        <br>
                        <br><a href="../sektionen/sektion2/s2_3.html">Denk-denk-denk-: Stottern, lachen, verkennen und verbessern als Übersetzungstaktiken. Ludwik
                        Fleck (1896-1961) als Übersetzer und Übersetzter</a>
                        <br>/ Martina Schlünder, Berlin
                        <br>
                        <br><a href="../sektionen/sektion2/s2_4.html">Koordinieren und integrieren: Die Ständige Kommission für Gesundheitswesen des Comecon,
                        1975-1989</a>
                        <br>/ Alexa Geisthövel, Berlin
                        <br>
                        <br>Kommentar: Heiner Fangerau, Dusseldorf`,

        sektion3: `<strong>SECTION 3</strong><br>
                        <strong>Power in Translation (individual lectures)</strong>
                        <br>/ Chair: TBA <!--TODO Moderator hinzufügen-->
                        <br>
                        <br><a href="../sektionen/sektion3/s3_1.html">From ecology to industrial ecology: translating the ecosystem metaphor</a>
                        <br>/ Marcin Krasnodębski, Warsaw
                        <br>
                        <br><a href="../sektionen/sektion3/s3_3.html">Making human ecology a legal fact: the “ecological theory” of California Indian land use</a>
                        <br>/ Eric Hounshell, Vienna
                        <br>
                        <br><a href="../sektionen/sektion3/s3_3.html">'African' Management: Translation and Epistemic Freedom in Postcolonial Business
                        Administration</a>
                        <br>/ Katharina Kreuder-Sonnen, Cologne 
                        <br>
                        <br><a href="../sektionen/sektion3/s3_4.html">Knowledge Society, Translated from Capitalist into Self-Managerial Socialist</a>
                        <br>/ Vedran Duančić, Klagenfurt`,

        sektion4: `<strong>SECTION 4 (German)</strong><br>
                        <strong>Wissenschaftspopularisierung (Individual lectures)</strong>
                        <br>/ Chair: TBA <!--TODO Moderator hinzufügen-->
                        <br>
                        <br><a href="../sektionen/sektion4/s4_1.html">Wissen in Translation. Zur Popularisierung der Astronomie rund um Wilhelm Julius Foerster ab
                        1860</a>
                        <br>/ Caroline Rothauge, Bochum
                        <br>
                        <br><a href="../sektionen/sektion4/s4_2.html">Übersichtswerke der Physik- und Astronomiegeschichte zwischen 1950 und 1999.
                        Transformationen in den Darstellungen von Physikerinnen und Astronominnen?</a>
                        <br>/ Colleen Seidel, Wuppertal
                        <br>
                        <br><a href="../sektionen/sektion4/s4_3.html">Die Wissenschaftskultur(en) des geteilten Berlin. Verschwundene, erhoffte und
                        wiedergewonnene Orte für Naturkunde, Astronomie und Technik</a>
                        <br>/ Arne Schirrmacher, Berlin
                        <br>
                        <br><a href="../sektionen/sektion4/s4_4.html">‚Sexualität konkret‘ (1979–1986). Zur Popularisierung sexuologischen Wissens zwischen
                        sexueller Revolution und AIDS-Krise</a>
                        <br>/ Florenz Gilly, Wien`,

        coffebreak: "Coffebreak",
        lunch: "Lunch",
        p_roundtable: `<strong><a href="../sektionen/sektion0/plenaryroundtable.html">Plenary Roundtable</a></strong>
                        <br>/ Organization and Moderation: Michal Frankl, Prague`,

        sektion5: `<strong>SECTION 5</strong><br>
                        <strong><a href="../sektionen/sektion5/s5.html">Employing and reflecting AI/Large Language Models in teaching
                                the history of science, technology and medicine (Roundtable)</a></strong>
                        <br>/ Organization: Beate Ceranski, Stuttgart
                        <br>
                        <br>/ TBA <!--TODO: Personen eintragen-->
                        <br>/ TBA
                        <br>/ TBA
                        <br>/ TBA`,

        sektion6: `<strong>SECTION 6</strong><br>
                        <strong><a href="../sektionen/sektion6/s6.html">From Theory to Terrain: Translating ‘Western’ Science in
                                Mandate Palestine and Israel</a></strong>
                        <br>/ Organization: Alexej Lochmatow, Jerusalem <!--TODO: Personen eintragen-->
                        <br>
                        <br><a href="../sektionen/sektion6/s6_1.html">Too Backwards for the Future? Knowledge Production about Palestine’s Fellahin in
                        Modernist Writing</a>
                        <br>/ Basma Fahoum, Negev
                        <br>
                        <br><a href="../sektionen/sektion6/s6_2.html">“Cull all non-producers”: Knowledge Transfer in British and Zionist Poultry Farming
                        under the British Mandate for Palestine (1920s-1940s)</a>
                        <br>/ Mona Bieling, Hamburg
                        <br>
                        <br><a href="../sektionen/sektion6/s6_3.html">Growing Intelligence: Ahmad S. Al-Khalidi and applying ‘Western’ psychological
                        theories in Mandatory Palestine</a>
                        <br>/ Alexej Lochmatow, Jerusalem
                        <br>
                        <br><a href="../sektionen/sektion6/s6_4.html">What the Nation Wants: Bringing Opinion Polling to 1950s Palestine/Israel</a>
                        <br>/ Tar Arbel, Philadelphia`,

        sektion7: `<strong>SECTION 7 (German)</strong><br>
                        <strong>Natur Übersetzen (Individual lectures)</strong>
                        <br>/ Chair: TBA
                        <br>
                        <br><a href="../sektionen/sektion7/s7_1.html">Translation oder Ignoranz? Epistemische Friktion im Umfeld der Moortrockenlegungen des 18.
                        Jahrhunderts</a>
                        <br>/ David Gottfried, Augsburg
                        <br>
                        <br><a href="../sektionen/sektion7/s7_2.html">Bienen in Translation. Entomologische Praktiken des Übersetzens, 1880–1914</a>
                        <br>/ Jan Brinkmann, Augsburg
                        <br>
                        <br><a href="../sektionen/sektion7/s7_3.html">Mediale Translationen. Vergleichende Verhaltensforschung und ihre Medien um 1950</a>
                        <br>/ Sophia Gräfe, Berlin
                        <br>
                        <br><a href="../sektionen/sektion7/s7_4.html">Von der Antike in die Ewigkeit: Endlagerforschung und Applied history, 1960-2000</a>
                        <br>/ Leander Diener, Bielefeld`,

        sektion8: `<strong>SECTION 8 (German)</strong><br>
                        <strong>Psychowissenschaften (Individual lectures)</strong>
                        <br>/ Chair: TBA <!--TODO: Chair hinzufügen-->
                        <br>
                        <br><a href="../sektionen/sektion8/s8_1.html">Von kindlicher Aggression zu kindlicher Angst. Über die Anfänge der psychosomatischen
                        Forschung an Kindern in den 1970er Jahren</a>
                        <br>/ Anne Oommen-Halbach, Dusseldorf
                        <br>
                        <br><a href="../sektionen/sektion8/s8_2.html">Zwischen neuem Wissen und alter Logik. Zum polizeilichen Umgang mit psychischer Alterität
                        nach der Psychiatriereform, 1975-2000</a>
                        <br>/ Oliver Falk, Muenster
                        <br>
                        <br><a href="../sektionen/sektion8/s8_3.html">Hormone, Psyche, Psychoendokrinologie. Zur Translation endokrinologischen Wissens in der
                        Psychiatrie des 20. Jahrhunderts.</a>
                        <br>/ Xenia Steinbach, Hanover
                        <br>/ Sophia Wagemann, Berlin
                        <br>
                        <br><a href="../sektionen/sektion8/s8_4.html">Wissen über die Geburt der „Anderen“. Übersetzungen im Kontext der britischen und deutschen
                        Geburtsvorbereitung im 20. Jahrhundert</a>
                        <br>/ Bettina Wagener, Siegen`,

        earlycareer: "Early Career Meet Up",
        transfer: "Self organized Transfer in die Písecká brána",
        gala: `<strong>Gala evening with awards ceremony and musical accompaniment</strong>
                        <br>
                        <br>/ Welcome by Noyan Dinçkal (Chair of GWMT)
                        <br>/ Report of the Driburger Kreis
                        <br>/ Awarding of the NTM-Articleprice
                        <br>/ Awarding of the Promotion Award of GWMT`,
        disco: "Conference Dinner and GWMT Disco"
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