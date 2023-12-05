const Products = [
    {
        naslov: "Nasloni za glavu",
        cena: 4990,
        popust: 20,
        slike: [
            "naslonjacslika2.webp",
            "naslonjacslika1.webp",
            "naslonjacslika3.webp",
            "naslonjacslika4.webp",
        ],
        boje: ["crna", "bez"],
        deskripcija: {
            naslov: "BEZ UKOČENOSTI VRATA",
            opis: "Da li Vam se ikada desilo da odspavate u automobilu, ali kada stignete na odredište, probudite se sa bolovima ili ukočenim vratom? Da, to je grozno - i često se to dešava kada nemate odgovarajuću podršku za vrat. Naši jastuci za glavu za sedište automobila menjaju to, pružajući celokupnu podršku za bolje spavanje vaše dece.",
        },

        promocije: [
            {
                slika: "https://ae01.alicdn.com/kf/S6aa00e29560f41528caa1c5f7891a199L/Car-Seat-Headrest-Pillow-Travel-Rest-sleeping-headrest-Support-Solution-car-accessories-interior-u-shaped-pillow.jpg_640x640.jpg_.webp",
                naslov: "Akcija",
                podNaslov: "1 Kom - Ustedi",
                popust: 20,
                cena: 4990,
            },
            {
                slika: "https://ae01.alicdn.com/kf/S6aa00e29560f41528caa1c5f7891a199L/Car-Seat-Headrest-Pillow-Travel-Rest-sleeping-headrest-Support-Solution-car-accessories-interior-u-shaped-pillow.jpg_640x640.jpg_.webp",
                naslov: "Popularno",
                podNaslov: "2 Kom - Ustedi",
                popust: 25,
                cena: 9980,
            },
            {
                slika: "https://ae01.alicdn.com/kf/S6aa00e29560f41528caa1c5f7891a199L/Car-Seat-Headrest-Pillow-Travel-Rest-sleeping-headrest-Support-Solution-car-accessories-interior-u-shaped-pillow.jpg_640x640.jpg_.webp",
                naslov: "Super usteda",
                podNaslov: "3 Kom - Ustedi",
                popust: 30,
                cena: 14970,
            },
        ],
        komentati: [],
    },

    {
        naslov: "Organizator Za Auto Sedište",
        cena: 2490,
        popust: 17,
        opcije: ["vozac", "suvozac"],
        boje: ["crna", "bez"],
        deskripcija: {
            naslov: "DA LI OVO ZVUČI KAO TI KAD SI ZA VOLANOM?",
            opis: "Provodiš mnogo vremena u automobilu jer si, pa, zauzet roditelj. Od vožnje dece u vrtić ili na fudbalski trening ili uzimanje večere na putu kući, provodiš puno sati za volanom. I kada nisi sam ili sama u automobilu, često postoji nešto što zahteva tvoju potpunu pažnju (kada bi tvoje oči stvarno trebale biti na putu). Neko treba maramice. Neko treba punjač. Oh, i ne možeš da nađeš karmin da se doteraš.",
        },

        slike: [
            "organizator1.webp",
            "organizator2.webp",
            "organizator3.webp",
            "organizator4.webp",
        ],
        promocije: [
            {
                naslov: "Vozac/Suvozac",
                podNaslov: "1 Kom",
                cena: 2490,
                popust: 17,
                boje: ["crna", "bez"],
                tip: ["vozac", "suvozac"],
            },
            {
                naslov: "Vozac + Suvozac",
                podNaslov: "2 Kom - Ustedi",
                popust: 30,
                cena: 3980,
                boje: ["crna", "bez"],
                tip: ["vozac", "suvozac"],
                boje: ["crna", "bez"],
                tip: ["vozac", "suvozac"],
            },
        ],
        komentari: [],
    },
    {
        naslov: "MINI PRIVEZAK-PUNJAČ ZA TELEFON",
        slike: [
            "privezak1.webp",
            "privezak2.webp",
            "privezak3.webp",
            "privezak4.webp",
        ],
        deskripcija: {
            naslov: "Privezak Punjač Bateriju za Telefon - vaš mali saveznik za energiju.",
            opis: "U današnjem brzom tempu života, ne dozvolite da vas uhvati nedostatak baterije. Privezak Punjač za Telefon je tu da vam obezbedi dodatnu dopunu telefona u svakoj situaciji, i to sa stilom.",
        },
        model: ["Android", "Iphone"],
        boje: ["crna", "pink"],

        cena: 2990,
        popust: 17,
        promocije: [
            {
                naslov: "Akcija",
                podNaslov: "Kupi 1 kom - Ustedi",
                popust: 17,
                cena: 2990,
            },
            {
                naslov: "Popularno",
                podNaslov: "Kupi 2 kom - Ustedi",
                popust: 10,
                cena: 4980,
            },
            {
                naslov: "super usteda",
                podNaslov: "Kupi 3 kom - Ustedi",
                cena: 7470,
                popust: 15,
            },
            {
                naslov: "kupi 4 i ustedi 20 %",
                podNaslov: "Ustedi",
                cena: 9960,
                popust: 20,
            },
        ],
    },
    {
        naslov: "UNIVERZALNI MAGNETNI DRŽAČ ZA MOBILNI",
        cena: 2690,
        popust: 26,
        slike: ["tel1.webp", "tel2.webp", "tel3.webp", "tel4.webp"],
        promocije: [
            {
                naslov: "Akcija",
                podNaslov: "Kupi 1 kom - Ustedi",
                popust: 17,
                cena: 2690,
            },
            {
                naslov: "Popularno",
                podNaslov: "Kupi 2 kom - Ustedi",
                popust: 10,
                cena: 3980,
            },
            {
                naslov: "super usteda",
                podNaslov: "Kupi 3 kom - Ustedi",
                cena: 5970,
                popust: 20,
            },
        ],
        deskripcija: {
            naslov: "Siguran za Vožnju",
            opis: "Držite ruke dalje od telefona dok vozite i koristite ovaj univerzalni magnetni držač za mobilni telefon u automobilu za sigurnu vožnju! Naš držač je napravljen da nosi vaš telefon i pruži siguran i jednostavan način za obavljanje poziva, navigacije i čak korišćenje glasovnog asistenta telefona, a da pri tom ne padne prilikom skretanja. Savršen magnetni nosač koji drži vaš uređaj kao da je zalepljen i dizajniran da bude kompatibilan čak i sa najvećim i najtežim modelima pametnih telefona",
        },
        komentari: [],
    },
    {
        naslov: "TORBICA ZA KOZMETIKU",
        slike: ["torba1.webp", "torba2.webp", "torba3.webp", "torba4.webp"],
        cena: 1990,
        popust: 10,
        boje: ["pink", "crna", "navy", "plava"],
        deskripcija: {
            naslov: "VODOOTPORNA I LAKO SE ČISTI",
            opis: "Torba je napravljena od vrhunskog poliesterskog materijala koji se lako pere. Torba je vodootporna i stoga su svi predmeti u njoj bezbedni.",
        },

        promocije: [
            {
                naslov: "Akcija",
                podNaslov: "1 Kom - Ustedi",
                popust: 10,
                cena: 1990,
                boja: ["crna", "pink", "plava", "navy"],
            },
            {
                naslov: "Popularno",
                podNaslov: "2 Kom - Ustedi",
                cena: 3980,
                popust: 15,
            },
            {
                naslov: "Super usteda",
                podNaslov: "3 Kom - Ustedi",
                cena: 5970,
                popust: 20,
            },
        ],
    },
    {
        naslov: "8-U-1 SET ZA ČIŠĆENJE TEHNIČKIH UREDJAJA",
        slike: ["cistac1.webp", "cistac2.webp", "cistac3.webp", "cistac4.webp"],
        cena: 2490,
        popust: 20,
        deskripcija: {
            naslov: "KARAKTERISTIKE",
            opis: "✔ ČETKICA ZA TASTATURU Čistač je napravljen sa mekanom četkicom i alatom za uklanjanje tastera, što ga čini izuzetno lakim za čišćenje i osvežavanje vaše tastature. Radite udobno i efikasno u zoni bez prašine.✔ SET ZA ČIŠĆENJE SLUŠALICA Ovaj alat za čišćenje slušalica dizajniran je sa malom mekanom četkom, sundjerastim štapićem i metalnom olovkom, omogućavajući efikasno i temeljno čišćenje vaših slušalica, čineći ih kao nove.✔ SET ZA ČIŠĆENJE EKRANA Mikrofiber krpa koja se može skidati i prati, zajedno sa sprejom, lako uklanja otiske prstiju, fleke i prašinu. Nakon čišćenja, ekran će biti svetliji, jasniji i privlačniji.✔ FANTASTIČNO i POGODNO - Kompaktna veličina i lagani dizajn ovog sve-u-jednom alata za čišćenje čine ga lako prenosivim gde god da idete. Savršen je za upotrebu kod kuće, na poslu ili dok ste u pokretu.✔ ŠIROKA PRIMENA - Veoma koristan set za čišćenje za slušalice, laptop, tastaturu, telefon, tablet, kameru. Ako imate mnogo uređaja, ovaj prenosni alat za čišćenje će vam biti naročito koristan.",
        },
        promocije: [
            {
                naslov: "Akcija",
                podNaslov: "1 Kom - Ustedi",
                popust: 20,
                cena: 2490,
            },
            {
                naslov: "Popularno",
                podNaslov: "2 Kom - Ustedi",
                popust: 10,
                cena: 3980,
            },
            {
                naslov: "Super usteda",
                podNaslov: "3 Kom - Ustedi",
                popust: 20,
                cena: 5970,
            },
        ],
    },
    {
        naslov: "METALNI MAGNETNI DRŽAČ TELEFONA ZA AUTOMOBIL",
        cena: 3990,
        popust: 25,
        slike: ["magnet1.webp", "magnet2.webp", "magnet3.webp", "magnet4.webp"],
        komentari: [],
        boje: ["crna", "srebrena"],
        deskripcija: {
            naslov: "ALUMINIJUMSKI MAGNETNI DRŽAČ TELEFONA ZA AUTOMOBIL",
            opis: "Jednostavan za instalaciju, ovaj magnetni držač omogućava brzo postavljanje i skidanje telefona sa samo jednim potezom. Magnetna snaga je dovoljna da čvrsto drži tvoj uređaj tokom vožnje, čineći putovanje bezbrižnim i sigurnim.",
        },
        promocije: [
            {
                naslov: "Akcija",
                cena: 3990,
                popust: 25,
                podNaslov: "1 Kom - Ustedi",
            },
            {
                naslov: "Popularno",
                cena: 5980,
                popust: 10,
                podNaslov: "2 Kom - Ustedi",
            },
            {
                naslov: "Super usteda",
                cena: 8970,
                popust: 20,
                podNaslov: "3 Kom - Ustedi",
            },
        ],
    },
    {
        naslov: "DRŽAČ ZA TELEFON U AUTU",
        cena: 1590,
        popust: 20,
        slike: ["dtel1.webp", "dtel2.webp", "dtel3.webp", "dtel4.webp"],
        deskripcija: {
            naslov: "Sigurno i elegantno",
            opis: "Sigurno i elegantno rešenje za tvoj mobilni svet! Upoznaj naš Aluminijumski Magnetni Držač Telefona za Automobil - spoj visokokvalitetnog materijala i praktičnog dizajna!",
        },
        promocije: [
            {
                naslov: "Akcija",
                cena: 1590,
                popust: 20,
                podNaslov: "1 Kom - Ustedi",
            },
            {
                naslov: "Popularno",
                cena: 2780,
                popust: 10,
                podNaslov: "2 Kom - Ustedi",
            },
            {
                naslov: "Super usteda",
                cena: 4170,
                popust: 20,
                podNaslov: "3 Kom - Ustedi",
            },
        ],
    },
    {
        naslov: "ELEKTRIČNI MASAŽER OCTOPUS SA OSAM PIPAKA",
        cena: 5990,
        popust: 17,
        deskripcija: {
            naslov: "Osam fleksibilnih masažnih ruku:",
            opis: "Zahvaljujući svom dizajnu inspirisanom hobotnicom, ovaj masažer se ponosi sa osam fleksibilnih ruku koje nežno obuhvataju vašu skalp. Ove ruke su opremljene višekontaktnim masažnim čvorovima koji simuliraju osećaj ljudskih prstiju, osiguravajući zaista opuštajuće iskustvo.",
        },
        slike: [
            "masazer1.webp",
            "masazer2.webp",
            "masazer3.webp",
            "masazer4.webp",
        ],
        promocije: [
            {
                naslov: "Akcija",
                cena: 5990,
                popust: 10,
                podNaslov: "1 Kom - Ustedi",
            },
            {
                naslov: "Popularno",
                cena: 9980,
                popust: 20,
                podNaslov: "2 Kom - Ustedi",
            },
            {
                naslov: "Super usteda",
                cena: 14970,
                popust: 30,
                podNaslov: "3 Kom - Ustedi",
            },
        ],
    },
    {
        naslov: "ELEKTRIČNI MINI BRIJAČ DŽEPNE VELIČINE",
        cena: 4990,
        popust: 40,
        boje: ["crna", "srebrna"],
        deskripcija: {
            naslov: "Precizno Brijanje, Gdje God",
            opis: "Sa kompaktnim dizajnom koji staje u svaki džep, ovaj brijalica je savršeno rješenje za one trenutke kada želiš osvježiti svoj izgled ili se riješiti neželjenih dlačica. Bez obzira da li ideš na važan sastanak, večeru ili putovanje, ovaj mini brijalica je tvoj idealan suputnik.",
        },
        slike: [
            "brijacslika1.webp",
            "brijacslika2.webp",
            "brijacslika3.webp",
            "brijacslika4.webp",
        ],
        promocije: [
            {
                naslov: "Akcija",
                cena: 2990,
                popust: 10,
                podNaslov: "1 Kom - Ustedi",
            },
            {
                naslov: "Popularno",
                cena: 5980,
                popust: 20,
                podNaslov: "2 Kom - Ustedi",
            },
            {
                naslov: "Super usteda",
                cena: 8970,
                popust: 30,
                podNaslov: "3 Kom - Ustedi",
            },
        ],
    },
    {
        naslov: "TAM MINI WI FI KAMERA",
        cena: 5990,
        popust: 17,
        deskripcija: {
            naslov: "Snima trenutke diskretno i sa stilom.",
            opis: " Kamera predstavlja vrhunski spoj sofisticiranog dizajna i tehnološke inovacije, nudeći diskretno nadgledanje sa lakoćom. Sa svojim kompaktnim dimenzijama, ova kamera se nenametljivo uklapa u svaki prostor, omogućavajući ti da snimaš i nadgledaš ono što ti je važno, bez obzira gde se nalaziš.",
        },
        slike: [
            "kameraslika1.webp",
            "kameraslika2.webp",
            "kameraslika3.webp",
            "kameraslika4.webp",
        ],
        promocije: [
            {
                naslov: "Akcija",
                cena: 4990,
                podNaslov: "1 Kom",
            },
            {
                naslov: "Popularno",
                cena: 9980,
                popust: 10,
                podNaslov: "2 Kom - Ustedi",
            },
            {
                naslov: "Super usteda",
                cena: 14970,
                popust: 20,
                podNaslov: "3 Kom - Ustedi",
            },
        ],
    },
];

export default Products;
