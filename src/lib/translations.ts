export type Language = 'en' | 'cs' | 'de';

export const translations = {
  en: {
    nav: {
      eat: "EAT",
      kocour: "KOCOUR",
      findUs: "FIND US",
      orderNow: "ORDER NOW",
    },
    hero: {
      since: "Since 2026",
      titleLine1: "Fried",
      titleLine2: "Gold",
      titleLine3: "In The",
      titleLine4: "Wilderness",
      subtitle: "Escape Prague. Eat Langosz. Get Weird.",
      cta: "See The Menu",
    },
    menu: {
      titleLine1: "Feed Your",
      titleLine2: "Soul",
      description: "Hand-stretched dough, fried in premium lard (or oil if you're vegan, we guess), topped with dreams.",
      items: {
        bastard: {
          name: "The Classic Bastard",
          desc: "Garlic confit, artisanal gouda, ketchup that actually tastes like tomatoes. No bullshit.",
          tags: ["Classic", "Vegetarian"]
        },
        kocour: {
          name: "The Kocour Special",
          desc: "Slow-roasted pulled pork, truffle mayo, pickled onions, fresh dill. It's messy and you'll love it.",
          tags: ["Meat Sweats", "Chef's Choice"]
        },
        sin: {
          name: "Sweet Sin",
          desc: "Local jam, sour cream, cinnamon sugar, and a shot of rum poured right on top.",
          tags: ["Sweet", "Boozy"]
        }
      },
      cta: "I Want It",
      pdf: "View Full Menu PDF"
    },
    about: {
      meet: "Meet",
      kocour: "Kocour",
      p1: "Michal \"Kocour\" Tušer didn't choose the langosz life. The langosz life chose him.",
      p2: "After years of fine dining bullshit in Prague, Kocour packed his knives, bought an old crumbling house in Kytlice, and decided to make the one thing that actually makes people happy:",
      p2highlight: "Fried Dough.",
      p3: "\"It's not about foam or deconstructed plates. It's about grease, garlic, and community. Come say hi, grab a beer, and let me feed you until you can't walk.\"",
      quote: "\"Best thing I've ate since 1999\"",
      quoteAuthor: "- Some Guy from Holesovice",
      svgText: "• The Legend • The Myth • The Fryer •"
    },
    location: {
      title: "Get Your Ass To",
      titleLocation: "Kytlice",
      subtitle: "It's in the middle of nowhere. That's the point.",
      hqLabel: "The HQ",
      addressTitle: "Address",
      fromPragueTitle: "From Prague",
      fromPragueTime: "~ 1 hour 45 minutes",
      fromPragueDesc: "Take the D8 north, scream at the traffic, exit toward Děčín, then follow the smell of garlic into the hills.",
      tipTitle: "Kocour's Tip:",
      tipDesc: "\"Park by the church. Don't block the tractor path or old man Novák will deflate your tires. Seriously.\"",
      openMaps: "Open in Maps",
      fri: "Fri",
      sat: "Sat",
      sun: "Sun",
      party: "(Party)"
    },
    footer: {
      tagline: "The greasiest, tastiest spot in Bohemia.",
      visitUs: "Visit Us",
      openHours: "Open Hours",
      copyright: "© 2026 Michal \"Kocour\" Tušer. All Rights Reserved."
    }
  },
  cs: {
    nav: {
      eat: "JÍDLO",
      kocour: "KOCOUR",
      findUs: "KDE JSME",
      orderNow: "OBJEDNAT",
    },
    hero: {
      since: "Od roku 2026",
      titleLine1: "Smažené",
      titleLine2: "Zlato",
      titleLine3: "Uprostřed",
      titleLine4: "Divočiny",
      subtitle: "Utečte z Prahy. Dejte si langoš. Odvažte se.",
      cta: "Zobrazit Menu",
    },
    menu: {
      titleLine1: "Nakrmte Svou",
      titleLine2: "Duši",
      description: "Ručně tažené těsto, smažené na prémiovém sádle (nebo oleji, jestli jste vegani, co už), posypané sny.",
      items: {
        bastard: {
          name: "Klasickej Parchant",
          desc: "Česnekové konfit, řemeslná gouda, kečup co chutná jako rajčata. Žádný kecy.",
          tags: ["Klasika", "Vegetarián"]
        },
        kocour: {
          name: "Kocourův Speciál",
          desc: "Trhané vepřové, lanýžová majonéza, nakládaná cibulka, čerstvý kopr. Je to prasárna a budete to milovat.",
          tags: ["Masakr", "Šéfova Volba"]
        },
        sin: {
          name: "Sladký Hřích",
          desc: "Domácí marmeláda, zakysaná smetana, skořicový cukr a panák rumu přímo navrch.",
          tags: ["Sladké", "Opilé"]
        }
      },
      cta: "Chci To",
      pdf: "Celé menu v PDF"
    },
    about: {
      meet: "To Je",
      kocour: "Kocour",
      p1: "Michal \"Kocour\" Tušer si nevybral život langošů. Život langošů si vybral jeho.",
      p2: "Po letech \"fine dining\" nesmyslů v Praze Kocour sbalil nože, koupil starý rozpadlý barák v Kytlicích a rozhodl se dělat tu jedinou věc, která lidi doopravdy potěší:",
      p2highlight: "Smažené Těsto.",
      p3: "\"Není to o pěně nebo dekonstruovaných talířích. Je to o mastnotě, česneku a komunitě. Přijďte pozdravit, dejte si pivo a nechte mě vás nakrmit, dokud nebudete moct chodit.\"",
      quote: "\"Nejlepší věc, co jsem jedl od devadesátek\"",
      quoteAuthor: "- Nějakej týpek z Holešovic",
      svgText: "• Legenda • Mýtus • Fritéza •"
    },
    location: {
      title: "Dostaňte Zadek Do",
      titleLocation: "Kytlic",
      subtitle: "Je to uprostřed ničeho. A o to jde.",
      hqLabel: "Centrála",
      addressTitle: "Adresa",
      fromPragueTitle: "Z Prahy",
      fromPragueTime: "~ 1 hodina 45 minut",
      fromPragueDesc: "Po D8 na sever, zanadávejte si v zácpě, sjeďte na Děčín a pak jděte po čuchu česneku do kopců.",
      tipTitle: "Kocourův Tip:",
      tipDesc: "\"Parkujte u kostela. Neblokujte cestu traktoru, nebo vám starej Novák vypustí gumy. Vážně.\"",
      openMaps: "Otevřít v Mapách",
      fri: "Pá",
      sat: "So",
      sun: "Ne",
      party: "(Párty)"
    },
    footer: {
      tagline: "Nejmastnější a nejchutnější flek v Čechách.",
      visitUs: "Navštivte Nás",
      openHours: "Otevíračka",
      copyright: "© 2026 Michal \"Kocour\" Tušer. Všechna práva vyhrazena."
    }
  },
  de: {
    nav: {
      eat: "ESSEN",
      kocour: "DER KATER",
      findUs: "FINDE UNS",
      orderNow: "BESTELLEN",
    },
    hero: {
      since: "Seit 2026",
      titleLine1: "Frittiertes",
      titleLine2: "Gold",
      titleLine3: "In Der",
      titleLine4: "Wildnis",
      subtitle: "Entfliehe Prag. Iss Langos. Werde verrückt.",
      cta: "Menü ansehen",
    },
    menu: {
      titleLine1: "Füttere Deine",
      titleLine2: "Seele",
      description: "Handgezogener Teig, frittiert in erstklassigem Schmalz (oder Öl, wenn du Veganer bist), belegt mit Träumen.",
      items: {
        bastard: {
          name: "Der Klassische Bastard",
          desc: "Knoblauch-Confit, handwerklicher Gouda, Ketchup der tatsächlich nach Tomaten schmeckt. Kein Bullshit.",
          tags: ["Klassiker", "Vegetarisch"]
        },
        kocour: {
          name: "Der Kater Spezial",
          desc: "Slow-roasted Pulled Pork, Trüffelmayo, eingelegte Zwiebeln, frischer Dill. Es ist chaotisch und du wirst es lieben.",
          tags: ["Fleisch", "Chef's Choice"]
        },
        sin: {
          name: "Süße Sünde",
          desc: "Lokale Marmelade, saure Sahne, Zimtzucker und ein Schuss Rum direkt oben drauf.",
          tags: ["Süß", "Beschwipst"]
        }
      },
      cta: "Ich Will Es",
      pdf: "Vollständiges Menü PDF"
    },
    about: {
      meet: "Triff",
      kocour: "Den Kater",
      p1: "Michal \"Kocour\" Tušer hat sich das Langos-Leben nicht ausgesucht. Das Langos-Leben hat ihn ausgesucht.",
      p2: "Nach Jahren des Fine-Dining-Bullshits in Prag packte Kocour seine Messer, kaufte ein altes, zerfallendes Haus in Kytlice und beschloss, das Einzige zu machen, das Menschen wirklich glücklich macht:",
      p2highlight: "Frittierten Teig.",
      p3: "\"Es geht nicht um Schaum oder dekonstruierte Teller. Es geht um Fett, Knoblauch und Gemeinschaft. Komm vorbei, trink ein Bier und lass mich dich füttern, bis du nicht mehr laufen kannst.\"",
      quote: "\"Das Beste, was ich seit 1999 gegessen habe\"",
      quoteAuthor: "- Irgendein Typ aus Holesovice",
      svgText: "• Die Legende • Der Mythos • Die Fritteuse •"
    },
    location: {
      title: "Beweg Deinen Hintern Nach",
      titleLocation: "Kytlice",
      subtitle: "Es ist mitten im Nirgendwo. Das ist der Punkt.",
      hqLabel: "Das HQ",
      addressTitle: "Adresse",
      fromPragueTitle: "Von Prag",
      fromPragueTime: "~ 1 Stunde 45 Minuten",
      fromPragueDesc: "Nimm die D8 nach Norden, schrei den Verkehr an, fahr Richtung Děčín ab und folge dann dem Knoblauchgeruch in die Berge.",
      tipTitle: "Kocour's Tipp:",
      tipDesc: "\"Park bei der Kirche. Blockier nicht den Traktorweg, sonst lässt der alte Novák deine Reifen luftleer. Ernsthaft.\"",
      openMaps: "In Maps öffnen",
      fri: "Fr",
      sat: "Sa",
      sun: "So",
      party: "(Party)"
    },
    footer: {
      tagline: "Der fettigste, leckerste Ort in Böhmen.",
      visitUs: "Besuche Uns",
      openHours: "Öffnungszeiten",
      copyright: "© 2026 Michal \"Kocour\" Tušer. Alle Rechte vorbehalten."
    }
  }
};
