define(['pipAPI' ,'./iat_extension.js'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension({
    "category1": {
        "name": "Paid Media",
        "title": {
            "media": {
                "word": "Paid Media"
            },
            "css": {
                "color": "#336600",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Google Ads"
            },
            {
                "word": "Facebook Ads"
            },
            {
                "word": "LinkedIn Ads"
            },
            {
                "word": "TikTok Ads"
            },
            {
                "word": "Programmatic"
            },
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "1.8em"
        }
    },
    "category2": {
        "name": "Organic",
        "title": {
            "media": {
                "word": "Organic"
            },
            "css": {
                "color": "#336600",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "SEO"
            },
            {
                "word": "Blog post"
            },
            {
                "word": "Social content"
            },
            {
                "word": "Newsletter"
            },
            {
                "word": "Link building"
            },
        ],
        "stimulusCss": {
            "color": "#336600",
            "font-size": "1.8em"
        }
    },
    "attribute1": {
        "name": "Performance",
        "title": {
            "media": {
                "word": "Performance"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Conversione"
            },
            {
                "word": "ROI"
            },
            {
                "word": "Ottimizzazione"
            },
            {
                "word": "Crescita"
            },
            {
                "word": "Analisi"
            },
            {
                "word": "Successo"
            },

        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2.3em"
        }
    },
    "attribute2": {
        "name": "Ostacoli",
        "title": {
            "media": {
                "word": "Ostacoli"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4
        },
        "stimulusMedia": [
            {
                "word": "Churn"
            },
            {
                "word": "Perdita"
            },
            {
                "word": "Dispersione"
            },
            {
                "word": "Errore"
            },
            {
                "word": "Lentezza"
            },
            {
                "word": "Stasi"
            },
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2.3em"
        }
    },
    "remindError": true,
    "errorCorrection": true,
    "isTouch": false,
    "base_url": {
        "image": "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/docs/images/"
    },
    "blockCategories_nTrials": 20,
    "blockCategories_nMiniBlocks": 5,
    "blockAttributes_nTrials": 20,
    "blockAttributes_nMiniBlocks": 5,
    "blockFirstCombined_nTrials": 20,
    "blockFirstCombined_nMiniBlocks": 5,
    "blockSecondCombined_nTrials": 40,
    "blockSecondCombined_nMiniBlocks": 10,
    "blockSwitch_nTrials": 28,
    "blockSwitch_nMiniBlocks": 7,
    "randomBlockOrder": true,
    "randomAttSide": false,
    "remindErrorText": "<p style=\"font-size:16px;font-family:arial serif;text-align:center;\">Se commetti un errore, apparirà una <span style=\"color:red;\"><b>X</b></span> rossa. Premi l'altro tasto per continuare.<p/>",
    "leftKeyText": "Premi \"E\" per",
    "rightKeyText": "Premi \"I\" per",
    "orText": "o",
    "instAttributePractice": "<div><p  style=\"font-size:20px;font-family:arial serif;text-align:center;\"><span style=\"#000000\"><u>Parte blockNum di nBlocks </u></span><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Metti l'indice della mano sinistra sul tasto <b>E</b> per gli elementi che appartengono alla categoria <span style=\"#0000ff\">leftAttribute.</span><br/>Metti l'indice della mano destra sul tasto <b>I</b> per gli elementi che appartengono alla categoria <span style=\"#0000ff\">rightAttribute</span>.<br/><br/>Se commetti un errore, apparirà una <span style=\"color:red;\"><b>X</b></span> rossa. Premi l'altro tasto per continuare.<br/><u>Cerca di essere il più veloce e accurato possibile. </u><br/><br/></p><p style=\"text-align:center;\"> Premi la <b>barra spaziatrice</b> quando sei pronto per iniziare.</font></p></div>",
    "instCategoriesPractice": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><span style=\"#000000\"><u>Parte blockNum di nBlocks </u></span><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Metti l'indice della mano sinistra sul tasto <b>E</b> per gli elementi che appartengono alla categoria <span style=\"#336600\">leftCategory</span>. <br/>Metti l'indice della mano destra sul tasto <b>I</b> per gli elementi che appartengono alla categoria <span style=\"#336600\">rightCategory</span>.<br/>Gli elementi appariranno uno alla volta.<br/><br/>Se commetti un errore, apparirà una <span style=\"color:red;\"><b>X</b></span> rossa. Premi l'altro tasto per continuare.<br/><u>Cerca di essere il più veloce e accurato possibile.</u> while being accurate.<br/><br/></p><p style=\"text-align:center;\">Premi la <b>barra spaziatrice</b> quando sei pronto per iniziare.</font></p></div>",
    "instFirstCombined": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><span style=\"#000000\"><u>Parte blockNum di nBlocks </u></span><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Usa il tasto <b>E</b> per <span style=\"#336600\">leftCategory</span> e per <span style=\"#0000ff\">leftAttribute</span>.<br/>Usa il tasto <b>I</b> per <span style=\"#336600\">rightCategory</span> e per <span style=\"#0000ff\">rightAttribute</span>.<br/>Ciascun elemento appartiene ad una sola categoria<br/><br/>Se commetti un errore, apparirà una <span style=\"color:red;\"><b>X</b></span> rossa. Premi l'altro tasto per continuare.<br/><u>Cerca di essere il più veloce e accurato possibile.</u><br/><br/></p><p style=\"text-align:center;\">Premi la <b>barra spaziatrice</b> quando sei pronto per iniziare.</font></p></div>",
    "instSecondCombined": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><span style=\"#000000\"><u>Parte blockNum di nBlocks </u></span><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Il compito che segue è lo stesso della parte precedente<br/>Usa il tasto <b>E</b> per <span style=\"#336600\">leftCategory</span> e per <span style=\"#0000ff\">leftAttribute</span>.<br/>Usa il tasto <b>I</b> per <span style=\"#336600\">rightCategory</span> e per <span style=\"#0000ff\">rightAttribute</span>.<br/>Ciascun elemento appartiene ad una sola categoria<br/><br/><u>Cerca di essere il più veloce e accurato possibile.</u><br/><br/></p><p style=\"text-align:center;\">Premi la <b>barra spaziatrice</b> quando sei pronto per iniziare.</font></p></div>",
    "instSwitchCategories": "<div><p style=\"font-size:20px; font-family:arial serif;text-align:center;\"><span style=\"#000000\"><u>Parte blockNum di nBlocks </u</span>><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\"><b>Attanzione! Le etichette hanno cambiato posizione!</b><br/>Metti l'indice della mano sinistra sul tasto <b>E</b> per <span style=\"#336600\">leftCategory</span>.<br/>Metti l'indice della mano destra sul tasto <b>I</b> per <span style=\"#336600\">rightCategory</span>.<br/><br/><u>Cerca di essere il più veloce e accurato possibile.</u> <br/><br/></p><p style=\"text-align:center;\">Premi la <b>barra spaziatrice</b> quando sei pronto per iniziare.</font></p></div>",
    "preDebriefingText": "Premi spazio per continuare."
});});
