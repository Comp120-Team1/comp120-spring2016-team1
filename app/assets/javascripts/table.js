// gracias http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

function get_lang(langcode) {

  var isoLangs = {
        "ab": {
        "name": "Abkhaz",
            "nativeName": "аҧсуа"
    },
        "aa": {
        "name": "Afar",
            "nativeName": "Afaraf"
    },
        "af": {
        "name": "Afrikaans",
            "nativeName": "Afrikaans"
    },
        "ak": {
        "name": "Akan",
            "nativeName": "Akan"
    },
        "sq": {
        "name": "Albanian",
            "nativeName": "Shqip"
    },
        "am": {
        "name": "Amharic",
            "nativeName": "አማርኛ"
    },
        "ar": {
        "name": "Arabic",
            "nativeName": "العربية"
    },
        "an": {
        "name": "Aragonese",
            "nativeName": "Aragonés"
    },
        "hy": {
        "name": "Armenian",
            "nativeName": "Հայերեն"
    },
        "as": {
        "name": "Assamese",
            "nativeName": "অসমীয়া"
    },
        "av": {
        "name": "Avaric",
            "nativeName": "авар мацӀ, магӀарул мацӀ"
    },
        "ae": {
        "name": "Avestan",
            "nativeName": "avesta"
    },
        "ay": {
        "name": "Aymara",
            "nativeName": "aymar aru"
    },
        "az": {
        "name": "Azerbaijani",
            "nativeName": "azərbaycan dili"
    },
        "bm": {
        "name": "Bambara",
            "nativeName": "bamanankan"
    },
        "ba": {
        "name": "Bashkir",
            "nativeName": "башҡорт теле"
    },
        "eu": {
        "name": "Basque",
            "nativeName": "euskara, euskera"
    },
        "be": {
        "name": "Belarusian",
            "nativeName": "Беларуская"
    },
        "bn": {
        "name": "Bengali",
            "nativeName": "বাংলা"
    },
        "bh": {
        "name": "Bihari",
            "nativeName": "भोजपुरी"
    },
        "bi": {
        "name": "Bislama",
            "nativeName": "Bislama"
    },
        "bs": {
        "name": "Bosnian",
            "nativeName": "bosanski jezik"
    },
        "br": {
        "name": "Breton",
            "nativeName": "brezhoneg"
    },
        "bg": {
        "name": "Bulgarian",
            "nativeName": "български език"
    },
        "my": {
        "name": "Burmese",
            "nativeName": "ဗမာစာ"
    },
        "ca": {
        "name": "Catalan; Valencian",
            "nativeName": "Català"
    },
        "ch": {
        "name": "Chamorro",
            "nativeName": "Chamoru"
    },
        "ce": {
        "name": "Chechen",
            "nativeName": "нохчийн мотт"
    },
        "ny": {
        "name": "Chichewa; Chewa; Nyanja",
            "nativeName": "chiCheŵa, chinyanja"
    },
        "zh": {
        "name": "Chinese",
            "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
    },
        "cv": {
        "name": "Chuvash",
            "nativeName": "чӑваш чӗлхи"
    },
        "kw": {
        "name": "Cornish",
            "nativeName": "Kernewek"
    },
        "co": {
        "name": "Corsican",
            "nativeName": "corsu, lingua corsa"
    },
        "cr": {
        "name": "Cree",
            "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
    },
        "hr": {
        "name": "Croatian",
            "nativeName": "hrvatski"
    },
        "cs": {
        "name": "Czech",
            "nativeName": "česky, čeština"
    },
        "da": {
        "name": "Danish",
            "nativeName": "dansk"
    },
        "dv": {
        "name": "Divehi; Dhivehi; Maldivian;",
            "nativeName": "ދިވެހި"
    },
        "nl": {
        "name": "Dutch",
            "nativeName": "Nederlands, Vlaams"
    },
        "en": {
        "name": "English",
            "nativeName": "English"
    },
        "eo": {
        "name": "Esperanto",
            "nativeName": "Esperanto"
    },
        "et": {
        "name": "Estonian",
            "nativeName": "eesti, eesti keel"
    },
        "ee": {
        "name": "Ewe",
            "nativeName": "Eʋegbe"
    },
        "fo": {
        "name": "Faroese",
            "nativeName": "føroyskt"
    },
        "fj": {
        "name": "Fijian",
            "nativeName": "vosa Vakaviti"
    },
        "fi": {
        "name": "Finnish",
            "nativeName": "suomi, suomen kieli"
    },
        "fr": {
        "name": "French",
            "nativeName": "français, langue française"
    },
        "ff": {
        "name": "Fula; Fulah; Pulaar; Pular",
            "nativeName": "Fulfulde, Pulaar, Pular"
    },
        "gl": {
        "name": "Galician",
            "nativeName": "Galego"
    },
        "ka": {
        "name": "Georgian",
            "nativeName": "ქართული"
    },
        "de": {
        "name": "German",
            "nativeName": "Deutsch"
    },
        "el": {
        "name": "Greek, Modern",
            "nativeName": "Ελληνικά"
    },
        "gn": {
        "name": "Guaraní",
            "nativeName": "Avañeẽ"
    },
        "gu": {
        "name": "Gujarati",
            "nativeName": "ગુજરાતી"
    },
        "ht": {
        "name": "Haitian; Haitian Creole",
            "nativeName": "Kreyòl ayisyen"
    },
        "ha": {
        "name": "Hausa",
            "nativeName": "Hausa, هَوُسَ"
    },
        "he": {
        "name": "Hebrew (modern)",
            "nativeName": "עברית"
    },
        "hz": {
        "name": "Herero",
            "nativeName": "Otjiherero"
    },
        "hi": {
        "name": "Hindi",
            "nativeName": "हिन्दी, हिंदी"
    },
        "ho": {
        "name": "Hiri Motu",
            "nativeName": "Hiri Motu"
    },
        "hu": {
        "name": "Hungarian",
            "nativeName": "Magyar"
    },
        "ia": {
        "name": "Interlingua",
            "nativeName": "Interlingua"
    },
        "id": {
        "name": "Indonesian",
            "nativeName": "Bahasa Indonesia"
    },
        "ie": {
        "name": "Interlingue",
            "nativeName": "Originally called Occidental; then Interlingue after WWII"
    },
        "ga": {
        "name": "Irish",
            "nativeName": "Gaeilge"
    },
        "ig": {
        "name": "Igbo",
            "nativeName": "Asụsụ Igbo"
    },
        "ik": {
        "name": "Inupiaq",
            "nativeName": "Iñupiaq, Iñupiatun"
    },
        "io": {
        "name": "Ido",
            "nativeName": "Ido"
    },
        "is": {
        "name": "Icelandic",
            "nativeName": "Íslenska"
    },
        "it": {
        "name": "Italian",
            "nativeName": "Italiano"
    },
        "iu": {
        "name": "Inuktitut",
            "nativeName": "ᐃᓄᒃᑎᑐᑦ"
    },
        "ja": {
        "name": "Japanese",
            "nativeName": "日本語 (にほんご／にっぽんご)"
    },
        "jv": {
        "name": "Javanese",
            "nativeName": "basa Jawa"
    },
        "kl": {
        "name": "Kalaallisut, Greenlandic",
            "nativeName": "kalaallisut, kalaallit oqaasii"
    },
        "kn": {
        "name": "Kannada",
            "nativeName": "ಕನ್ನಡ"
    },
        "kr": {
        "name": "Kanuri",
            "nativeName": "Kanuri"
    },
        "ks": {
        "name": "Kashmiri",
            "nativeName": "कश्मीरी, كشميري‎"
    },
        "kk": {
        "name": "Kazakh",
            "nativeName": "Қазақ тілі"
    },
        "km": {
        "name": "Khmer",
            "nativeName": "ភាសាខ្មែរ"
    },
        "ki": {
        "name": "Kikuyu, Gikuyu",
            "nativeName": "Gĩkũyũ"
    },
        "rw": {
        "name": "Kinyarwanda",
            "nativeName": "Ikinyarwanda"
    },
        "ky": {
        "name": "Kirghiz, Kyrgyz",
            "nativeName": "кыргыз тили"
    },
        "kv": {
        "name": "Komi",
            "nativeName": "коми кыв"
    },
        "kg": {
        "name": "Kongo",
            "nativeName": "KiKongo"
    },
        "ko": {
        "name": "Korean",
            "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
    },
        "ku": {
        "name": "Kurdish",
            "nativeName": "Kurdî, كوردی‎"
    },
        "kj": {
        "name": "Kwanyama, Kuanyama",
            "nativeName": "Kuanyama"
    },
        "la": {
        "name": "Latin",
            "nativeName": "latine, lingua latina"
    },
        "lb": {
        "name": "Luxembourgish, Letzeburgesch",
            "nativeName": "Lëtzebuergesch"
    },
        "lg": {
        "name": "Luganda",
            "nativeName": "Luganda"
    },
        "li": {
        "name": "Limburgish, Limburgan, Limburger",
            "nativeName": "Limburgs"
    },
        "ln": {
        "name": "Lingala",
            "nativeName": "Lingála"
    },
        "lo": {
        "name": "Lao",
            "nativeName": "ພາສາລາວ"
    },
        "lt": {
        "name": "Lithuanian",
            "nativeName": "lietuvių kalba"
    },
        "lu": {
        "name": "Luba-Katanga",
            "nativeName": ""
    },
        "lv": {
        "name": "Latvian",
            "nativeName": "latviešu valoda"
    },
        "gv": {
        "name": "Manx",
            "nativeName": "Gaelg, Gailck"
    },
        "mk": {
        "name": "Macedonian",
            "nativeName": "македонски јазик"
    },
        "mg": {
        "name": "Malagasy",
            "nativeName": "Malagasy fiteny"
    },
        "ms": {
        "name": "Malay",
            "nativeName": "bahasa Melayu, بهاس ملايو‎"
    },
        "ml": {
        "name": "Malayalam",
            "nativeName": "മലയാളം"
    },
        "mt": {
        "name": "Maltese",
            "nativeName": "Malti"
    },
        "mi": {
        "name": "Māori",
            "nativeName": "te reo Māori"
    },
        "mr": {
        "name": "Marathi (Marāṭhī)",
            "nativeName": "मराठी"
    },
        "mh": {
        "name": "Marshallese",
            "nativeName": "Kajin M̧ajeļ"
    },
        "mn": {
        "name": "Mongolian",
            "nativeName": "монгол"
    },
        "na": {
        "name": "Nauru",
            "nativeName": "Ekakairũ Naoero"
    },
        "nv": {
        "name": "Navajo, Navaho",
            "nativeName": "Diné bizaad, Dinékʼehǰí"
    },
        "nb": {
        "name": "Norwegian Bokmål",
            "nativeName": "Norsk bokmål"
    },
        "nd": {
        "name": "North Ndebele",
            "nativeName": "isiNdebele"
    },
        "ne": {
        "name": "Nepali",
            "nativeName": "नेपाली"
    },
        "ng": {
        "name": "Ndonga",
            "nativeName": "Owambo"
    },
        "nn": {
        "name": "Norwegian Nynorsk",
            "nativeName": "Norsk nynorsk"
    },
        "no": {
        "name": "Norwegian",
            "nativeName": "Norsk"
    },
        "ii": {
        "name": "Nuosu",
            "nativeName": "ꆈꌠ꒿ Nuosuhxop"
    },
        "nr": {
        "name": "South Ndebele",
            "nativeName": "isiNdebele"
    },
        "oc": {
        "name": "Occitan",
            "nativeName": "Occitan"
    },
        "oj": {
        "name": "Ojibwe, Ojibwa",
            "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
        "cu": {
        "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
            "nativeName": "ѩзыкъ словѣньскъ"
    },
        "om": {
        "name": "Oromo",
            "nativeName": "Afaan Oromoo"
    },
        "or": {
        "name": "Oriya",
            "nativeName": "ଓଡ଼ିଆ"
    },
        "os": {
        "name": "Ossetian, Ossetic",
            "nativeName": "ирон æвзаг"
    },
        "pa": {
        "name": "Panjabi, Punjabi",
            "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
    },
        "pi": {
        "name": "Pāli",
            "nativeName": "पाऴि"
    },
        "fa": {
        "name": "Persian",
            "nativeName": "فارسی"
    },
        "pl": {
        "name": "Polish",
            "nativeName": "polski"
    },
        "ps": {
        "name": "Pashto, Pushto",
            "nativeName": "پښتو"
    },
        "pt": {
        "name": "Portuguese",
            "nativeName": "Português"
    },
        "qu": {
        "name": "Quechua",
            "nativeName": "Runa Simi, Kichwa"
    },
        "rm": {
        "name": "Romansh",
            "nativeName": "rumantsch grischun"
    },
        "rn": {
        "name": "Kirundi",
            "nativeName": "kiRundi"
    },
        "ro": {
        "name": "Romanian, Moldavian, Moldovan",
            "nativeName": "română"
    },
        "ru": {
        "name": "Russian",
            "nativeName": "русский язык"
    },
        "sa": {
        "name": "Sanskrit (Saṁskṛta)",
            "nativeName": "संस्कृतम्"
    },
        "sc": {
        "name": "Sardinian",
            "nativeName": "sardu"
    },
        "sd": {
        "name": "Sindhi",
            "nativeName": "सिन्धी, سنڌي، سندھی‎"
    },
        "se": {
        "name": "Northern Sami",
            "nativeName": "Davvisámegiella"
    },
        "sm": {
        "name": "Samoan",
            "nativeName": "gagana faa Samoa"
    },
        "sg": {
        "name": "Sango",
            "nativeName": "yângâ tî sängö"
    },
        "sr": {
        "name": "Serbian",
            "nativeName": "српски језик"
    },
        "gd": {
        "name": "Scottish Gaelic; Gaelic",
            "nativeName": "Gàidhlig"
    },
        "sn": {
        "name": "Shona",
            "nativeName": "chiShona"
    },
        "si": {
        "name": "Sinhala, Sinhalese",
            "nativeName": "සිංහල"
    },
        "sk": {
        "name": "Slovak",
            "nativeName": "slovenčina"
    },
        "sl": {
        "name": "Slovene",
            "nativeName": "slovenščina"
    },
        "so": {
        "name": "Somali",
            "nativeName": "Soomaaliga, af Soomaali"
    },
        "st": {
        "name": "Southern Sotho",
            "nativeName": "Sesotho"
    },
        "es": {
        "name": "Spanish; Castilian",
            "nativeName": "español, castellano"
    },
        "su": {
        "name": "Sundanese",
            "nativeName": "Basa Sunda"
    },
        "sw": {
        "name": "Swahili",
            "nativeName": "Kiswahili"
    },
        "ss": {
        "name": "Swati",
            "nativeName": "SiSwati"
    },
        "sv": {
        "name": "Swedish",
            "nativeName": "svenska"
    },
        "ta": {
        "name": "Tamil",
            "nativeName": "தமிழ்"
    },
        "te": {
        "name": "Telugu",
            "nativeName": "తెలుగు"
    },
        "tg": {
        "name": "Tajik",
            "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"
    },
        "th": {
        "name": "Thai",
            "nativeName": "ไทย"
    },
        "ti": {
        "name": "Tigrinya",
            "nativeName": "ትግርኛ"
    },
        "bo": {
        "name": "Tibetan Standard, Tibetan, Central",
            "nativeName": "བོད་ཡིག"
    },
        "tk": {
        "name": "Turkmen",
            "nativeName": "Türkmen, Түркмен"
    },
        "tl": {
        "name": "Tagalog",
            "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
        "tn": {
        "name": "Tswana",
            "nativeName": "Setswana"
    },
        "to": {
        "name": "Tonga (Tonga Islands)",
            "nativeName": "faka Tonga"
    },
        "tr": {
        "name": "Turkish",
            "nativeName": "Türkçe"
    },
        "ts": {
        "name": "Tsonga",
            "nativeName": "Xitsonga"
    },
        "tt": {
        "name": "Tatar",
            "nativeName": "татарча, tatarça, تاتارچا‎"
    },
        "tw": {
        "name": "Twi",
            "nativeName": "Twi"
    },
        "ty": {
        "name": "Tahitian",
            "nativeName": "Reo Tahiti"
    },
        "ug": {
        "name": "Uighur, Uyghur",
            "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
    },
        "uk": {
        "name": "Ukrainian",
            "nativeName": "українська"
    },
        "ur": {
        "name": "Urdu",
            "nativeName": "اردو"
    },
        "uz": {
        "name": "Uzbek",
            "nativeName": "zbek, Ўзбек, أۇزبېك‎"
    },
        "ve": {
        "name": "Venda",
            "nativeName": "Tshivenḓa"
    },
        "vi": {
        "name": "Vietnamese",
            "nativeName": "Tiếng Việt"
    },
        "vo": {
        "name": "Volapük",
            "nativeName": "Volapük"
    },
        "wa": {
        "name": "Walloon",
            "nativeName": "Walon"
    },
        "cy": {
        "name": "Welsh",
            "nativeName": "Cymraeg"
    },
        "wo": {
        "name": "Wolof",
            "nativeName": "Wollof"
    },
        "fy": {
        "name": "Western Frisian",
            "nativeName": "Frysk"
    },
        "xh": {
        "name": "Xhosa",
            "nativeName": "isiXhosa"
    },
        "yi": {
        "name": "Yiddish",
            "nativeName": "ייִדיש"
    },
        "yo": {
        "name": "Yoruba",
            "nativeName": "Yorùbá"
    },
        "za": {
        "name": "Zhuang, Chuang",
            "nativeName": "Saɯ cueŋƅ, Saw cuengh"
    }
  }
  var arr = [];
  for (i in isoLangs) {
    arr.push([i, isoLangs[i]]);
  }

  for (var i = 0; i < arr.length; i++) {
    if (langcode == arr[i][0]) {
        language = arr[i][1]['name'];
    }
  }
  return language
}

function init_table() {
  highlight_priorities(function() {

    // https://github.com/serkanyersen/ifvisible.js
    (function(){!function(a,b){return"function"==typeof define&&define.amd?define(function(){return b()}):"object"==typeof exports?module.exports=b():a.ifvisible=b()}(this,function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;return i={},c=document,k=!1,l="active",g=6e4,f=!1,b=function(){var a,b,c,d,e,f,g;return a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},e=function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},f={},c="__ceGUID",b=function(a,b,d){return a[c]=void 0,a[c]||(a[c]="ifvisible.object.event.identifier"),f[a[c]]||(f[a[c]]={}),f[a[c]][b]||(f[a[c]][b]=[]),f[a[c]][b].push(d)},d=function(a,b,d){var e,g,h,i,j;if(a[c]&&f[a[c]]&&f[a[c]][b]){for(i=f[a[c]][b],j=[],g=0,h=i.length;h>g;g++)e=i[g],j.push(e(d||{}));return j}},g=function(a,b,d){var e,g,h,i,j;if(d){if(a[c]&&f[a[c]]&&f[a[c]][b])for(j=f[a[c]][b],g=h=0,i=j.length;i>h;g=++h)if(e=j[g],e===d)return f[a[c]][b].splice(g,1),e}else if(a[c]&&f[a[c]]&&f[a[c]][b])return delete f[a[c]][b]},{add:b,remove:g,fire:d}}(),a=function(){var a;return a=!1,function(b,c,d){return a||(a=b.addEventListener?function(a,b,c){return a.addEventListener(b,c,!1)}:b.attachEvent?function(a,b,c){return a.attachEvent("on"+b,c,!1)}:function(a,b,c){return a["on"+b]=c}),a(b,c,d)}}(),d=function(a,b){var d;return c.createEventObject?a.fireEvent("on"+b,d):(d=c.createEvent("HTMLEvents"),d.initEvent(b,!0,!0),!a.dispatchEvent(d))},h=function(){var a,b,d,e,f;for(e=void 0,f=3,d=c.createElement("div"),a=d.getElementsByTagName("i"),b=function(){return d.innerHTML="<!--[if gt IE "+ ++f+"]><i></i><![endif]-->",a[0]};b(););return f>4?f:e}(),e=!1,n=void 0,"undefined"!=typeof c.hidden?(e="hidden",n="visibilitychange"):"undefined"!=typeof c.mozHidden?(e="mozHidden",n="mozvisibilitychange"):"undefined"!=typeof c.msHidden?(e="msHidden",n="msvisibilitychange"):"undefined"!=typeof c.webkitHidden&&(e="webkitHidden",n="webkitvisibilitychange"),m=function(){var b,d;return b=!1,d=function(){return clearTimeout(b),"active"!==l&&i.wakeup(),f=+new Date,b=setTimeout(function(){return"active"===l?i.idle():void 0},g)},d(),a(c,"mousemove",d),a(c,"keyup",d),a(c,"touchstart",d),a(window,"scroll",d),i.focus(d),i.wakeup(d)},j=function(){var b;return k?!0:(e===!1?(b="blur",9>h&&(b="focusout"),a(window,b,function(){return i.blur()}),a(window,"focus",function(){return i.focus()})):a(c,n,function(){return c[e]?i.blur():i.focus()},!1),k=!0,m())},i={setIdleDuration:function(a){return g=1e3*a},getIdleDuration:function(){return g},getIdleInfo:function(){var a,b;return a=+new Date,b={},"idle"===l?(b.isIdle=!0,b.idleFor=a-f,b.timeLeft=0,b.timeLeftPer=100):(b.isIdle=!1,b.idleFor=a-f,b.timeLeft=f+g-a,b.timeLeftPer=(100-100*b.timeLeft/g).toFixed(2)),b},focus:function(a){return"function"==typeof a?this.on("focus",a):(l="active",b.fire(this,"focus"),b.fire(this,"wakeup"),b.fire(this,"statusChanged",{status:l})),this},blur:function(a){return"function"==typeof a?this.on("blur",a):(l="hidden",b.fire(this,"blur"),b.fire(this,"idle"),b.fire(this,"statusChanged",{status:l})),this},idle:function(a){return"function"==typeof a?this.on("idle",a):(l="idle",b.fire(this,"idle"),b.fire(this,"statusChanged",{status:l})),this},wakeup:function(a){return"function"==typeof a?this.on("wakeup",a):(l="active",b.fire(this,"wakeup"),b.fire(this,"statusChanged",{status:l})),this},on:function(a,c){return j(),b.add(this,a,c),this},off:function(a,c){return j(),b.remove(this,a,c),this},onEvery:function(a,b){var c,d;return j(),c=!1,b&&(d=setInterval(function(){return"active"===l&&c===!1?b():void 0},1e3*a)),{stop:function(){return clearInterval(d)},pause:function(){return c=!0},resume:function(){return c=!1},code:d,callback:b}},now:function(a){return j(),l===(a||"active")}}})}).call(this);

    query = getQueryParams(document.location.search);
    locale = query.locale || "en"
    var table;

    ifvisible.setIdleDuration(120); // Page will become idle after 120 seconds

    ifvisible.on("idle", function(){
        //pause live update
        if (table) {
          table.liveAjax.pause();
          $('#update').html('Inactive - Update Paused');
        }
    });

    ifvisible.on("wakeup", function(){
      if (table){
        table.liveAjax.resume();
        $('#update').html('Auto Updated');
      }
    });

    table = $('#incident-list').DataTable({
      "dom": 'l<"filtering"f>t<"pagination"p>',
      responsive: true,
      "order": [[0, "desc"], [ 3, "desc" ]],
      "oLanguage": { "sSearch": "Filter: ", "sUrl": "//cdn.datatables.net/plug-ins/1.10.7/i18n/" + get_lang(locale) + ".json"},

      ajax: {
          url: $('#incident-list').data('source')
          /*dataSrc: function(json) {
            return json.data.map(function(x){
                x.created_at = moment(x.created_at).fromNow();
                x.time_of_incident = moment(x.time_of_incident).fromNow();
                return x
            });
          }*/
      },
      "order": [[ 3, 'desc' ]],
      columns: [
                {
                    title: 'Priority',
                    data:  'priority.name',
                    "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                      if (oData.priority.name == "High") {
                        $(nTd).html('<span class="glyphicon glyphicon-exclamation-sign priority_high" aria-hidden="true"></span>')
                        $(nTd).append('<span class="glyphicon glyphicon-exclamation-sign priority_high" aria-hidden="true"></span>')
                        $(nTd).append('<span class="glyphicon glyphicon-exclamation-sign priority_high" aria-hidden="true"></span>')
                      } else if (oData.priority.name == "Medium") {
                        $(nTd).html('<span class="glyphicon glyphicon-exclamation-sign priority_med" aria-hidden="true"></span>')
                        $(nTd).append('<span class="glyphicon glyphicon-exclamation-sign priority_med" aria-hidden="true"></span>')
                      } else if (oData.priority.name == "Low") {
                        $(nTd).html('<span class="glyphicon glyphicon-exclamation-sign priority_low" aria-hidden="true"></span>')
                      }

                    }
                }, {
                    title: 'Subject',
                    data:  'subject'
                }, {
                    title: 'Location of Incident',
                    data:  'location_of_incident'
                }, {
                    title:  'Time Submitted',
                    data: 'created_at',
                    "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                        $(nTd).html(moment(oData.created_at).fromNow());
                    }
                },
                {
                    title:  'Time of Incident',
                    data: 'time_of_incident',
                    "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                        $(nTd).html(moment(oData.time_of_incident).fromNow());
                    }
                },
                {
                    title:  'Category',
                    data: 'incident_category.name'
                },
                {
                    title:  'Actions',
                    data: 'id',
                      "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                          buttons = "<a class='btn btn-default' href="+ "'incidents/" + oData.id+ "/edit?locale=" + locale + "'>Edit</a>" +
                                      "<a class='btn btn-default' href="+ "'incidents/" + oData.id + "?locale=" + locale + "'>Show</a>"
                          $(nTd).html(buttons)
                          
                      }
                },
                {
                    title:  'Progress',
                    data: 'progress.name'
                }

            ],
      rowId: 'id',
      liveAjax: {
        interval: 30000
      }

    });
  })
}


