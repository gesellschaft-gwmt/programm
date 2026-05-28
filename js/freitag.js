const originalContent = {};

const translations = {
    en: {
        pageTitle: "Friday",
        back: "back",
        headline: "Program - Friday, September 11, 2026",

        th_time: "Time",
        th_event: "Event",
        th_location: "Location",

        time_sektion9: "9:00 a.m. - 10:30 a.m.",
        time_sektion10: "9:00 a.m. - 10:30 a.m.",
        time_sektion11: "9:00 a.m. - 10:30 a.m.",
        time_sektion12: "9:00 a.m. - 10:30 a.m.",
        time_coffebreak: "10:30 a.m. - 11:00 a.m.",
        time_sektion13: "11:00 a.m. - 1:00 p.m.",
        time_sektion14: "11:00 a.m. - 1:00 p.m.",
        time_sektion15: "11:00 a.m. - 1:00 p.m.",
        time_sektion16: "11:00 a.m. - 1:00 p.m.",

        conference_office_friday_time: "08:30 a.m. - 01:00 p.m.",
        conference_office_friday: "Open Conference Office",

        sektion9: `<strong>SECTION 9 (German)</strong><br>
                        <strong>Translation and/of Technology (Individual lectures)</strong>
                        <br>/ Chair: TBA <!-- TODO: Chair hinzufügen-->
                        <br>
                        <br><a href="../sektionen/sektion9/s9_1.html">Translating the Java Bogie: Railway Technology Transfer between Switzerland, South and
                        Southeast Asia in the 1920s</a>
                        <br>/ Philipp Krauer, Zurich
                        <br>
                        <br><a href="../sektionen/sektion9/s9_2.html">Environmental knowledge in transit: Automobility as a translational practice in the making
                        of modern ecology</a>
                        <br>/ Jonathan Stafford, Constance
                        <br>
                        <br><a href="../sektionen/sektion9/s9_3.html">Imaging the Human Body: Medical Images between Computer Vision and Medical Perception.</a>
                        <br>/ Hannes Junker, Bonn`,
        sektion10: `<strong>SECTION 10</strong><br>
                        <strong>Key debates of 20th century (Individual lectures)</strong>
                        <br>/ Chair: TBA <!--TODO: Chair hinzufügen-->
                        <br>
                        <br><a href="../sektionen/sektion10/s10_1.html">The Vienna Circle, a programme of scientific philosophy: its reception in two phases after
                        its exile.</a>
                        <br>/ Antonia Soulez, Paris
                        <br>
                        <br><a href="../sektionen/sektion10/s10_2.html">Translating the Unconscious into Socialist Science: The Case of Filipp Bassin (1904–1992)</a>
                        <br>/ Roman Mamin, Paris
                        <br>
                        <br><a href="../sektionen/sektion10/s10_3.html">From Ilya Ehrenburg to C. P. Snow: Translating the “Two Cultures” Debate in Socialist
                        Czechoslovakia.</a>
                        <br>/ Michaela Šmidrkalová, Prague`,
        sektion11: `<strong>SECTION 11</strong><br>
                        <strong><a href="../sektionen/sektion11/s11.html">Materials and meanings: Understanding pre-modern drug
                                production as translation </a></strong>
                        <br>/ Organisation: Katarzyna Pękacka-Falkowska/Bettina Wahrig, Wrocław/Braunschweig
                        <br>
                        <br><a href="../sektionen/sektion11/s11_1.html">From Philology to Praxis: The Epistemic Translation of Pharmaceutical Recipes in the
                        Polish-Lithuanian Commonwealth.</a>
                        <br>/ Danuta Raj, Jakub Węglorz, Katarzyna Pękacka-Falkowska, Wrocław
                        <br>
                        <br><a href="../sektionen/sektion11/s11_2.html">Reconstruction, Reenactment and Reworking: Early Modern Plague Remedies between Material
                        Practice and Microbiological Testing</a>
                        <br>/ Alvin Heidenfelder, Braunschweig
                        <br>
                        <br><a href="../sektionen/sektion11/s11_3.html">Translating "Arzneimittelgeschichte" into the "Arzneimittelhistorische Sammlung: 
                        Re-construction and Lexicology of the 1960s.</a>
                        <br>/ Bettina Wahrig, Braunschweig`,
        sektion12: `<strong>SECTION 12</strong><br>
                        <strong>Psychosciences (Individual lectures)</a></strong>
                        <br>/ Chair: TBA <!--TODO: Chair hinzufügen-->
                        <br>
                        <br><a href="../sektionen/sektion12/s12_1.html">The Translational Imperative: Reshaping Mental Health Research in the 1990s Decade of the
                        Brain.</a>
                        <br>/ Wessel de Cock, Berlin
                        <br>
                        <br><a href="../sektionen/sektion12/s12_2.html">Signal Transmission and Knowledge Translation: Cybernetic Reseach between Animal, Human and
                        Machine in 1970s West-Germany</a>
                        <br>/ Dinah Pfau, Munich
                        <br>
                        <br><a href="../sektionen/sektion12/s12_3.html">Measuring Minds under Socialism: IQ Testing and the Reconfiguration of Class in 1970s
                        Hungary.</a>
                        <br>/ Annina Gagyiova, Prague`,
        sektion13: ` <strong>SECTION 13</strong><br>
                        <strong><a href="../sektionen/sektion13/s13.html">Paleontological Passages: The Popularization of Prehistory
                                in Central and Eastern Europe</a></strong>
                        <br>/ Organisation: Philipp Kohl, Munich
                        <br>
                        <br><a href="../sektionen/sektion13/s13_1.html">“Silurian Sea of Bohemia”: The Impact of Joachim Barrande’s Research on the National Imagery</a>
                        <br>/ Josef Řídký, Prague
                        <br>
                        <br><a href="../sektionen/sektion13/s13_2.html">Depicting and Popularizing Earth History. Die Urwelt in ihren verschiedenen Bildungsperioden</a>
                        (1851) by Naturalist Franz Unger and Artist Joseph Kuwasseg
                        <br>/ Patrick Stoffel, Lüneburg
                        <br>
                        <br><a href="../sektionen/sektion13/s13_3.html">“A Series of Localized Images”: The Visual Reconstruction of Bohemian Prehistory and the
                        National Geology of Antonín Frič</a>
                        <br>/ Philipp Kohl, Munich
                        <br>
                        <br><a href="../sektionen/sektion13/s13_4.html">Zdeněk Burian’s Paleoart and 20th-Century Czechoslovakia</a>
                        <br>/ Rostislav Walica, Prague`,
        sektion14: `<strong>SECTION 14</strong><br>
                        <strong><a href="../sektionen/sektion14/s14.html">Train the messenger – Information brokering and the wake of
                                knowledge society</a></strong>
                        <br>/ Organization: Friedrich Cain, Vienna
                        <br>
                        <br><a href="../sektionen/sektion14/s14_1.html">Lost in Translation? Vietnamese Art Students’ Education and Careers Between Prague and
                        Vietnam, 1969-1989</a>
                        <br>/ Anna-Marie Kroupova, Vienna
                        <br>
                        <br><a href="../sektionen/sektion14/s14_2.html">Infrastructures and politics of information: towards a comparative history of information
                        science in FRG and GDR, c. 1960–1990</a>
                        <br>/ Mathias Grote, Greifswald
                        <br>/ Max Stadler, Berlin
                        <br>
                        <br><a href="../sektionen/sektion14/s14_3.html">Dis-assetizing Feminist Knowledge: Translation, State Enclosure, and the Aftermath of the
                        Birth Control Movement in Late-Twentieth-Century Greece</a>
                        <br>/ Evangelia Chordaki, Athens
                        <br>
                        <br><a href="../sektionen/sektion14/s14_4.html">Creative Cadres. Applying Science Studies in 1980s GDR Architecture</a>
                        <br>/ Friedrich Cain, Vienna`,
        sektion15: `<strong>SECTION 15 (German)</strong><br>
                        <strong>Übersetzung in Früher Neuzeit (Individual lectures)</strong>
                        <br>/ Chair: TBA
                        <br>
                        <br><a href="../sektionen/sektion15/s15_1.html">Vernacular Text Work: Translation technischen Wissens in Wort und Bild im frühen Buchdruck</a>
                        <br>/ Tillmann Taape, Berlin
                        <br>
                        <br><a href="../sektionen/sektion15/s15_2.html">Praxis- und Erfahrungswissen in den Aufzeichnungen und Anleitungen frühneuzeitlicher
                        Handwerkschirurgen</a>
                        <br>/ Michael Stolberg, Würzburg
                        <br>
                        <br><a href="../sektionen/sektion15/s15_3.html">Lost in Translation: Epistemische Passagen der Informationsgewinnung in barocker Topographie</a>
                        <br>/ Karl Johann Scharpf, Berlin
                        <br>
                        <br><a href="../sektionen/sektion15/s15_4.html">Optisches Wissen und Übersetzung im 18. Jahrhundert: Beispiele aus dem Werk Barthold
                        Heinrich Brockes’</a>
                        <br>/ Maja Rausch, Marburg`,
        sektion16: ` <strong>SECTION 16 (German)</strong><br>
                        <strong><a href="../sektionen/sektion16/s16.html">ICH ICH ICH. Autorschaft und Identität in epistemischen und
                                politischen Umbruchzeiten</a></strong>
                        <br>/ Organisation: Christina Wessely, Lüneburg
                        <br>
                        <br>/ Christina Wessely, Lüneburg
                        <br><a href="../sektionen/sektion16/s16_1.html">Einführung: ICH ICH ICH. Autorschaft und Identität in epistemischen und politischen
                        Umbruchzeiten</a>
                        <br>
                        <br>/ Monika Wulz, Lüneburg
                        <br><a href="../sektionen/sektion16/s16_2.html">Irritationen des Ichs. Identität und Wissen in der Zeitschrift Common Ground 1940–1949</a>
                        <br>
                        <br>/ Onur Erdur, Berlin
                        <br><a href="../sektionen/sektion16/s16_3.html">Zur Evidenz der Erfahrung, ca. 1990</a>
                        <br>
                        <br><a href="../sektionen/sektion16/s16_4.html">Der Schriftsteller als Avatar zu Besuch im Uncanny Valley</a>
                        <br>/ Michael Hagner, Zurich
                        <br>
                        <br>Kommentar
                        <br>/ Cornelius Borck, Lübeck`,
        coffebreak: "Coffebreak",

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