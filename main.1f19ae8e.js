// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"m.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mNames = void 0;
// 2 syllable m words
// https://en.wiktionary.org/w/index.php?title=Category:English_2-syllable_words&from=M
var mNames = ["m'lord", "m'lud", "maasha", "Maastricht", "macabre", "macaque", "Macau", "macaw", "macher", "Machin", "machine", "machines", "macho", "-machy", "machzor", "Macie", "Mackem", "mackerel", "macky", "Macleod", "macock", "Macomb", "Macon", "macra", "macro", "macro-", "macron", "Macron", "macrons", "mactate", "Macy", "madam", "madame", "Madan", "madden", "Madden", "madder", "Maddie", "madding", "maddock", "Maddow", "Maddox", "Maddy", "madhab", "Madi", "madly", "madness", "Madras", "Madrid", "madstone", "maegbot", "maelstrom", "maenad", "maestro", "mafic", "mafoo", "maftir", "MAGA", "Magar", "Magdalen", "Magdalene", "Maggie", "maggie", "maggot", "maggots", "Maghreb", "magi", "Magi", "magic", "maglev", "magma", "magmic", "magna", "magnate", "magnet", "magnet-", "Magnus", "magpie", "maguey", "magus", "Magyar", "mahal", "Mahdi", "mahjong", "Mahound", "mahout", "Maia", "maidan", "maiden", "Maidstone", "maigre", "mailing", "maillot", "mailman", "mailroom", "mails", "mainer", "mainful", "mainland", "mainline", "mainly", "mainmast", "mainour", "mainprize", "mainstay", "maintain", "maintained", "majlis", "major", "Majur", "Makah", "makar", "make out", "make-work", "makefast", "makeless", "Makepeace", "maker", "makeshift", "making", "mako", "malaise", "malar", "Malay", "Malcolm", "Maldives", "Maldon", "malestream", "malfed", "Mali", "mali", "malic", "malice", "malign", "Malik", "malkin", "mallard", "mallee", "mallet", "mallgoth", "mallow", "Malmesbury", "malmsey", "Malmö", "Malone", "Malta", "Maltese", "maltreat", "malum", "malus", "malware", "mama", "mamash", "mambo", "mamma", "mammal", "mammet", "mammock", "Mammon", "mammoth", "mamo", "mampus", "mampy", "man down", "Man U", "man up", "man-mark", "mana", "manage", "managed", "mancake", "manchette", "Manchu", "mancia", "Manda", "mandate", "mandement", "mandil", "mando", "mandrel", "mandrill", "Mandy", "manes", "manful", "manga", "mangal", "manger", "mangetout", "mangle", "mangled", "mango", "mangrove", "mangy", "manhole", "manhood", "manic", "manille", "mankind", "Mankiw", "manky", "manlike", "manling", "manlock", "manly", "manna", "manner", "manners", "mannish", "mannose", "manor", "manpack", "manque", "manqué", "manqués", "mansaf", "manses", "manship", "Mansi", "mansion", "manslot", "Manson", "mansplain", "manspread", "manteau", "mantel", "mantelet", "mantelpiece", "manther", "Manti", "mantic", "mantle", "mantlet", "mantra", "manual", "manul", "manure", "manward", "Manx cat", "Manx cats", "many", "Maori", "maple", "mapping", "maquette", "maquis", "mara", "marae", "Marans", "maraud", "marble", "Marcel", "marcher", "Marches", "marching", "marchland", "marchpane", "Marcia", "Marcus", "mardy", "mare", "mare's nest", "mareel", "Marfa", "marga", "Margaret", "margent", "margin", "Margot", "margrave", "Marie", "maril", "marine", "marish", "Marist", "marked", "market", "markets", "Markham", "markhor", "Markie", "marksman", "markup", "Marlborough", "Marley", "marlock", "marmite", "marmot", "maroon", "Marple", "marplot", "marquee", "marquess", "marquis", "marram", "marredness", "marriage", "married", "marries", "Marro", "marrow", "marry", "Marseille", "Marseilles", "Marsha", "marshal", "marshy", "martel", "marten", "Martha", "martial", "Martial", "Martian", "martin", "Martin", "martinet", "martyr", "maru", "marvel", "marvellous", "marver", "Marvin", "Marxist", "Mary", "mary", "Marylebone", "mascle", "mascon", "mascot", "masdar", "maser", "mash tun", "Masha", "masher", "mashgiach", "mashup", "Masih", "masjid", "maslin", "mason", "Mason", "mass", "massage", "masses", "masseur", "masseuse", "Massey", "Masshole", "massif", "massive", "massy", "master", "masters", "mastic", "mastiff", "masu", "mat rep", "matcha", "matches", "matching", "matchlock", "matchy", "matelot", "mater", "mathsy", "mating", "matric", "matrist", "matrix", "matron", "Matsu", "matter", "matters", "Matthew", "Matthews", "matting", "mattock", "mattress", "mature", "matzo", "maudle", "maudlin", "maugre", "Maulis", "maulstick", "maumy", "maunder", "maundy", "maungy", "Maureen", "Maurice", "maven", "Mavis", "mavis", "mavrone", "maw-gut", "mawkish", "mawky", "max facs", "maxim", "maxixe", "Maxwell", "Maya", "maybe", "Maycomb", "mayday", "Mayfair", "Mayfield", "mayhap", "mayhem", "Mayhew", "maying", "Maykop", "mayn't", "Maynooth", "mayo", "Mayon", "mayonnaise", "mayor", "mayoral", "Mayotte", "mazer", "mazes", "McCobb", "McCrea", "McGrath", "McKean", "McLean", "McLeod", "McMahon", "McQueen", "me fein", "mead-bench", "meadow", "meager", "meagre", "meal prep", "mealie", "mealworm", "mealy", "meaning", "meanly", "meantime", "meanwhile", "measles", "measly", "measure", "measured", "measures", "meatless", "meatloaf", "meatman", "meaty", "mebi-", "mebos", "Mecca", "medal", "Medan", "meddies", "meddle", "meddler", "meddy", "media", "Media", "median", "Median", "medick", "medium", "medlar", "medley", "meekly", "meeple", "meerkat", "meet cute", "meetcha", "meeting", "meetings", "mega", "mega-", "Megan", "meggings", "megrim", "mehfil", "Meiji", "Meillet", "meinie", "meister", "melange", "Melbourne", "mele", "melee", "Melkite", "Melksham", "melleous", "Mellin", "mellon", "mellow", "Melnik", "melon", "melons", "melted", "melting", "melton", "Melvin", "member", "members", "membral", "membrane", "memester", "memic", "memo", "memoir", "memoirs", "memory", "Memphis", "menace", "Mendip", "menhir", "meninx", "mennish", "Mensa", "menses", "menstral", "menstrate", "menstrual", "menstruate", "menstruous", "menstruum", "menta", "mental", "mentha", "mention", "mentioned", "mentions", "mentor", "menu", "meow", "mercer", "Mercer", "merchant", "merchants", "Mercia", "Mercian", "mercy", "mere", "merely", "mereswine", "merger", "merguez", "Mergui", "meringue", "merit", "merits", "Merkel", "merkin", "merlette", "merlin", "merlon", "Merlot", "mermaid", "meront", "merry", "Mersey", "Merstham", "Merton", "Mervyn", "mesa", "mesemb", "mesial", "mesic", "mesna", "meson", "mesquite", "message", "Messi", "Messia", "Messrs", "Messrs.", "messuage", "messy", "meta", "meta-", "metal", "metals", "meteor", "meter", "methane", "mether", "methi", "methinks", "methinkst", "method", "methods", "methyl", "metic", "metings", "Metis", "metope", "metre", "metric", "metro", "metro-", "mettle", "meum", "meze", "mezzo", "MGTOW", "Mhairi", "mhm", "Mia", "mic fright", "mica", "Micah", "micelle", "Michael", "Michelle", "micing", "mickey", "Mickey", "mickle", "micrite", "micro", "microbe", "micron", "Midas", "midbie", "midday", "midden", "middle", "middling", "middlings", "middy", "Mideast", "midfield", "midgie", "MIDI", "Midir", "Midland", "midmost", "midnight", "midpoint", "midquel", "midterm", "midway", "midwife", "mielie", "Mifflin", "miffy", "might can", "mightand", "mightier", "mightly", "mightn't", "mighty", "mignon", "migraine", "migrant", "migrate", "Miguel", "mikan", "Mikey", "mikveh", "Milan", "mildew", "mildly", "Mildred", "Mile End", "mileage", "miler", "milestone", "Miley", "Milford", "milieu", "milieux", "milk toast", "milkmaid", "milkman", "milksop", "milky", "mill dam", "Mill Hill", "mill race", "mille-feuille", "Miller", "miller", "millet", "milli-", "millie", "milling", "million", "millions", "millionth", "millstone", "millstream", "Millwall", "milord", "milquetoast", "Milton", "mimbar", "mimic", "miming", "minah", "mincer", "minces", "mincy", "Mincy", "mind's eye", "Minden", "mindfuck", "mindful", "minecart", "miner", "mineral", "mineshaft", "minger", "minging", "mingle", "mingled", "mingy", "minhag", "mini", "minim", "mining", "minion", "minish", "minium", "Minnie", "minnow", "minor", "minster", "minstrel", "minter", "Minto", "minty", "minus", "minute", "minutes", "miny", "minyan", "mirage", "mirate", "mire", "mirid", "mirror", "mirrour", "mirza", "misborn", "miscall", "mischance", "mischief", "mischieve", "Mischling", "misdeed", "misdo", "misdoubt", "miser", "misery", "misfare", "misfire", "misfit", "misgo", "Misha", "mishap", "mishear", "misheard", "mishmash", "miskal", "mislaid", "mislay", "misle", "mislead", "misled", "mislike", "misly", "mismatch", "miso", "misplace", "misplant", "misprint", "misprize", "misrate", "misread", "misrule", "misseem", "missend", "misses", "misshape", "missies", "missile", "missing", "mission", "missive", "misspeak", "misspell", "misspelt", "missus", "Missy", "missy", "mistake", "mistakes", "mister", "mister", "Mister", "misting", "mistle", "mistook", "mistrain", "mistral", "mistress", "mistrust", "mistruth", "mistry", "misty", "misuse", "misword", "Mitcham", "Mitchell", "miter", "mitey", "mither", "mithqal", "mithril", "mitral", "mitrate", "mitre", "mitred", "mitten", "mitzvah", "mitzvoth", "mixin", "mixing", "mixmatch", "mixtion", "mixture", "mixup", "Mizo", "mizzen", "mizzle", "Mizzou", "Mjollnir", "Mmes", "Mmes.", "mnemist", "moa", "moai", "moany", "mob cap", "mobile", "Mobile", "moble", "mobled", "mocha", "mock meat", "mocking", "mockney", "mockup", "model", "models", "modem", "modern", "modest", "modiste", "module", "modus", "moe", "moegoe", "Moesia", "moffie", "mofo", "moggy", "Moghul", "mogra", "mogul", "moguled", "mogwai", "mohair", "mohel", "mohur", "Moira", "moiré", "moisten", "moisture", "mojo", "moksha", "mola", "molar", "molasse", "Molden", "molding", "moldy", "mole", "molehill", "Molesey", "molest", "mollie", "mollusc", "molly", "Molly", "Moloch", "moloi", "molten", "moly", "mombie", "moment", "moments", "momist", "momma", "mommick", "monad", "monarch", "Monash", "Monday", "Monet", "money", "moneyer", "mongeese", "monger", "Mongol", "mongoose", "mongrel", "monial", "monkey", "Monmouth", "mono", "mono-", "Monroe", "monsoon", "monster", "monstrance", "monstrous", "monstruous", "Mont Blanc", "montage", "montane", "monte", "monteith", "monthly", "moo shu", "moo-cow", "moochin", "moodir", "moody", "Moody", "mooey", "moola", "mooli", "moon shot", "moonack", "moonbat", "moonbeam", "mooncalf", "moonlight", "moonlit", "moonrat", "moonrock", "moonsault", "moonshine", "moonstone", "moonwalk", "moonwort", "moorhen", "moori", "Moorish", "moorish", "moorland", "mootah", "moped", "mopey", "mopoke", "mopper", "mopy", "moquette", "Moqui", "mora", "morae", "morai", "moraine", "moral", "morale", "morals", "moras", "morass", "Moray", "morbid", "mordant", "Morden", "mordent", "Mordor", "more", "Morecambe", "moreish", "morel", "morepork", "mores", "moresome", "morgan", "Morgan", "Morgon", "moric", "morion", "Mormon", "morna", "morning", "moron", "morose", "morpheme", "Morpheus", "morphew", "morphic", "morphine", "morra", "Morra", "Morran", "Morris", "morrow", "morsel", "mortal", "mortar", "mortgage", "mortise", "Mortlake", "mortmain", "Mosby", "Moscow", "Moses", "mosey", "Mosgiel", "Moskva", "Moslem", "Mosley", "moss-grown", "mosses", "mossie", "mossy", "mostly", "Mosul", "mot juste", "motel", "moth-er", "mothball", "mothballed", "mothen", "mother", "mothers", "motif", "motile", "motion", "motive", "motives", "motley", "motor", "MOTOS", "Motown", "motrix", "motsser", "mottle", "mottled", "motto", "mouchard", "mouflon", "moulder", "mouldwarp", "mouldy", "moulin", "Moulmein", "moundsman", "moundsmen", "Mount Mayon", "mountain", "mountains", "mounted", "Mountie", "mounting", "mourn", "mournful", "mourning", "mouse pad", "mouse-ear", "Mousehole", "mousekin", "mousetrap", "mousmé", "mousseline", "mousseux", "moussy", "moustache", "mousy", "mouthpiece", "movement", "movements", "movie", "moving", "mower", "mox nix", "moxie", "Mozart", "mozo", "mozzie", "MPEG", "Mr.", "MRAP", "Mrs", "MRSA", "Mses", "Mss", "MTSO", "muah chee", "Muay Thai", "muchwhat", "muckle", "mucky", "mucoid", "mucous", "mucus", "muddle", "muddler", "mudfish", "Mudi", "mudlark", "mudra", "mudstone", "Mueller", "muesli", "muffin", "muffle", "muffled", "muffler", "mufti", "mugger", "mugging", "muggins", "muggle", "Muggle", "muggy", "mugwort", "Muir", "Muirhead", "mujik", "mujra", "mukhtar", "mukluk", "muktuk", "mulai", "mulberry", "mulcher", "mulching", "muleback", "mulga", "mulier", "mullah", "mullein", "muller", "mullet", "Mullins", "multi-", "multure", "Mumbai", "mumble", "mumchance", "mummer", "mummy", "munchies", "munchkin", "mundane", "mung bean", "Munich", "munite", "munshi", "Munslow", "Munster", "munter", "muntjac", "muon", "muppet", "mura", "mural", "Murat", "murder", "murdered", "Murdoch", "murgeon", "murine", "murmur", "murmured", "muroid", "Murphy", "murrain", "Murray", "murrelet", "murrey", "Murry", "murtad", "Muscat", "muscat", "muscle", "muscles", "museau", "museless", "muses", "musette", "museum", "mushrik", "mushroom", "mushroomed", "mushy", "music", "muskeg", "musket", "muskrat", "musky", "muslin", "mussel", "mussuck", "must've", "must-buy", "must-read", "mustache", "mustached", "mustang", "mustard", "mustee", "muster", "mustn't", "mut. mut.", "mutant", "mutate", "mute h", "mutex", "mutha", "muti", "mutiny", "mutter", "muttered", "mutton", "muumuu", "muumuus", "muzzle", "myall", "Myanmar", "mycin", "mydid", "mylar", "myna", "mynheer", "myrrhic", "myrtle", "myself", "Mysia", "Mysian", "Mysore", "mystery", "mystic", "mystique", "mythic", "mythos", "mythscape", "mythus", "myxo", "myxoid", "mzee", "Mâcon", "Männlein", "ménage", "métier", "mézair", "Mímir"];
exports.mNames = mNames;
},{}],"c.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cNames = void 0;
// 2 syllable c words
// https://en.wiktionary.org/w/index.php?title=Category:English_2-syllable_words&from=C
var cNames = ["c'mon", "C-bomb", "cabal", "cabbage", "cabbie", "cabbing", "cabbit", "cabby", "caber", "CABG", "cabin", "cabinet", "Caboc", "caboose", "caboshed", "Cabot", "cabre", "cabré", "cacao", "cache", "caches", "cachet", "cachou", "cackle", "cacti", "cactus", "caddie", "caddow", "caddy", "Caden", "cadence", "cadet", "cadi", "Cadiz", "cadmium", "cadr", "cadre", "caecum", "Caesar", "caesar", "cafe", "caffeine", "café", "cagey", "cagoule", "cahoots", "Caicos", "caid", "Caillou", "caiman", "Caiman", "caique", "cairned", "Cairo", "caisson", "caitiff", "cajole", "Cajun", "cake shop", "cakeshop", "cakewalk", "caking", "cakings", "caky", "Calais", "calces", "calcine", "calcite", "Caldwell", "Caleb", "calends", "Calgary", "Cali", "calid", "caliph", "caller", "calling", "calloo", "callop", "callous", "callow", "callus", "calmer", "calmly", "calmness", "calpack", "Caltech", "caltrop", "calver", "Calvin", "calving", "calvous", "calyx", "calzone", "calèche", "cama", "camber", "cambium", "cambric", "Cambridge", "cambro", "Camden", "camel", "camels", "camera", "cami", "camion", "camlet", "camo", "campaign", "Campbell", "camper", "camphene", "camphor", "camping", "campings", "campion", "campus", "campy", "camwhore", "can haz", "Cana", "Canaan", "canaille", "canal", "canard", "Canberra", "cancel", "cancer", "Cancer", "CanCon", "cancrine", "Candian", "candid", "candied", "candle", "candlelight", "candles", "candor", "candy", "Candy", "canhouse", "canid", "canine", "caning", "canings", "canker", "cankle", "canna", "Cannae", "cannet", "cannibal", "canning", "Cannock", "cannon", "Cannon", "cannot", "canny", "canoe", "canoes", "canon", "Cantab", "canteen", "canter", "canthus", "cantle", "canto", "canton", "Canton", "cantore", "cantrip", "Canuck", "canvas", "canyon", "caoshu", "caoutchouc", "cap'n", "Cape Town", "Cape Verde", "caper", "capeshit", "capful", "capias", "caping", "capisce", "Caplan", "caple", "caplin", "capo", "capon", "cappa", "cappie", "capping", "Capri", "caprice", "caprid", "capsize", "capstan", "capsule", "captain", "captains", "CAPTCHA", "caption", "captious", "captive", "capture", "capuche", "caput", "car park", "carafe", "caramel", "carat", "carbine", "carbon", "carboy", "carcass", "carceral", "card game", "cardboard", "carder", "carders", "Cardiff", "cardinal", "cardist", "cardless", "cardsharp", "careen", "career", "careful", "carefully", "careless", "careline", "carelines", "carer", "caress", "caressed", "caret", "careworn", "Carey", "Cargill", "cargo", "Carian", "caries", "caring", "carjack", "carl", "Carla", "carline", "Carline", "Carlisle", "carload", "Carlos", "carmel", "carnage", "carnal", "carnet", "Carnot", "carnous", "carny", "carol", "carom", "caron", "carouse", "carpal", "carpel", "carper", "carpet", "carplane", "carport", "carpus", "Carrboro", "carrel", "Carrell", "carriage", "carrol", "carrot", "carry", "Carson", "carte blanche", "cartel", "Carter", "carter", "Carthage", "carting", "Cartist", "cartload", "cartloads", "carton", "cartoon", "cartouche", "cartridge", "cartwheel", "carved", "carvel", "carven", "carver", "casa", "cascade", "cascrom", "cases", "Casey", "casher", "cashew", "cashier", "cashmere", "cashpoint", "casing", "casings", "casket", "casn't", "Casper", "cassette", "Cassie", "Cassius", "cassock", "Casta", "castellan", "caster", "Castile", "casting", "castle", "castling", "castor", "castrate", "Castries", "Castrist", "Castro", "casual", "Caswell", "cat's eye", "catarrh", "catbird", "catchee", "catcher", "catching", "catchment", "catchphrase", "catchpole", "catchword", "catchy", "cater", "catfight", "Catford", "catgut", "Cathar", "Cathay", "cathect", "Catherine", "cathode", "cathouse", "Cathy", "catkin", "catlap", "catlet", "catloaf", "catmint", "catnip", "Cato", "catom", "Catron", "cattail", "cattle", "cattleya", "Catton", "catty", "caucus", "caudal", "caudate", "caudex", "caudle", "caughten", "cauldron", "cauli", "caulis", "cauma", "causal", "causes", "causeway", "causey", "caustic", "cautel", "caution", "cautious", "Cavan", "cave", "caveach", "Caver", "cavern", "caverns", "cavil", "cavin", "caving", "cavort", "cavy", "cawky", "cayenne", "Cayenne", "Caymans", "cc", "CD", "cdr", "ceaseless", "ceases", "ceasing", "ceasings", "Cecil", "cedar", "ceded", "cedent", "cedi", "ceding", "Cedric", "ceilidh", "ceilidhean", "ceiling", "ceilinged", "celeb", "celeste", "Celeste", "cell wall", "cella", "cellar", "cellblock", "cellmate", "cello", "cellphone", "celly", "CELTA", "Celtic", "celtuce", "cembra", "cement", "cenome", "censer", "censor", "censure", "census", "cental", "centaur", "center", "centered", "central", "centre", "centred", "centres", "centric", "centum", "century", "Cepheus", "cepstrum", "Ceqli", "Cera", "Cerda", "Ceres", "cerise", "cerium", "Cerna", "certain", "certes", "cerule", "ceruse", "cervine", "cervix", "Cervus", "Cesar", "cessile", "cession", "cesspit", "cesspool", "cestode", "cestus", "Cetti's warbler", "Ceylon", "Ch'orti'", "cha-ching", "chabuk", "chaconne", "Chadwick", "chaebol", "chaeta", "chaetae", "chaffer", "chaffinch", "chagrin", "chain-smoke", "chain-smoked", "chaining", "chainings", "chainman", "chainring", "chainsaw", "chairman", "chairness", "chaise longue", "chaise lounge", "Chakma", "chakra", "chakric", "chaldron", "chalet", "chalice", "chalkboard", "challah", "challan", "challenge", "challis", "Chalmers", "Chalmette", "chamade", "chamar", "chamber", "chambers", "Chambers", "chambray", "chambré", "chametz", "chamfer", "chamfron", "chamois", "champagne", "champaign", "Champaign", "champeen", "champers", "champion", "chancel", "chancellor", "chancer", "chances", "chancre", "chancroid", "chandler", "Changchun", "change-up", "change-ups", "changeling", "changelog", "changes", "changeset", "changing", "Changji", "channel", "channels", "chanop", "chanson", "chanter", "chanteuse", "chantment", "chantwell", "chaos", "chapeau", "chapel", "chaplain", "chaplet", "Chaplin", "Chapman", "chapman", "chapping", "chappy", "chapter", "chapters", "char siu", "charact", "charade", "charcoal", "chardonnay", "charger", "charges", "Charing", "chariot", "Charis", "charkha", "Charlene", "Charles's law", "Charlotte", "charlotte", "Charlyne", "charmer", "charmest", "charming", "Charon", "charpoy", "charter", "charva", "chary", "chaser", "chases", "chasing", "chasings", "chasm", "chasma", "chasseur", "chassis", "chassised", "chasten", "chastise", "Chatham", "chatted", "chattee", "chattel", "", "chatter", "chatting", "chattings", "chatty", "Chaucer", "chauffer", "chauffeur", "chaus", "chaver", "chavette", "chavvy", "chawush", "cheaping", "cheapish", "cheaply", "cheapness", "Cheaster", "cheated", "cheater", "cheatgrass", "cheating", "cheatings", "Chechen", "checkback", "checkbox", "checker", "checking", "checkings", "checklist", "checkmate", "Cheddar", "cheddar", "chedi", "cheeking", "cheeky", "cheeping", "cheepings", "cheerful", "cheering", "cheerlead", "cheeselet", "cheeses", "cheesing", "cheesy", "cheetah", "cheffy", "chefly", "chela", "chelate", "Chelmsford", "Chelsea", "Chelsfield", "chemic", "chemise", "chemist", "Chemnitz", "chemo", "chemtrail", "chemtrails", "Chemung", "chemy", "chengyu", "chenille", "Chennai", "cheong fun", "Cheops", "chequer", "chequy", "Cheri", "Cherine", "cherish", "cherished", "cheroot", "cherry", "Chertsey", "cherty", "cherub", "chervil", "Cherwell", "Cheryl", "Chesham", "Cheshire", "chessil", "chested", "Chester", "chesting", "chestnut", "chesty", "Cheswick", "chetnik", "chetty", "Cheung", "cheval", "chevda", "cheviot", "chevon", "chevron", "chevy", "Chevy", "chewy", "Cheyenne", "Cheyne-Stokes", "Chi-Town", "chia", "chiack", "chiause", "chiaush", "chiauss", "chicane", "chicha", "chichi", "chick lit", "chicken", "chickens", "chickies", "chickpea", "chicky", "chicle", "chicory", "chided", "chiding", "chidings", "chiefess", "chiefly", "chiefrie", "chieftain", "Chiers", "chiffchaff", "chiffon", "chignon", "chigoe", "chilblain", "childbed", "childer", "childhood", "childing", "childish", "childlike", "children", "Chile", "chile", "chili", "Chili", "chilia-", "chiliast", "chilis", "chillax", "chilli", "chilling", "chillun", "chilly", "chilver", "chimbley", "chiming", "chimings", "chimley", "chimney", "chimo", "chimp out", "chin-chin", "chin-up", "China", "china", "Chinchew", "Chinese", "Chingford", "chinlone", "chinning", "chinny", "chinook", "Chinook", "chintzy", "chinwag", "chiong", "Chios", "chipper", "chipping", "chippings", "chippy", "chiptune", "chiral", "chiro", "Chiron", "chirpy", "chirren", "chirrup", "chisel", "Chiswick", "Chita", "chitin", "chitlins", "chiton", "chitterlings", "chivvy", "chivy", "chlamys", "Chloe", "chloride", "chlorine", "chlorite", "Chloë", "chockstone", "choco", "Choctaw", "choenix", "choffer", "choices", "choicest", "choir", "choker", "choking", "chokings", "choline", "Cholmondeley", "cholo", "chomo", "chondral", "chondrule", "Chongqing", "chookhouse", "chookie", "chooses", "choosing", "chopine", "chopper", "choppy", "chopstix", "choral", "chorale", "chordate", "chordee", "chore", "choroid", "chortle", "chorus", "chosen", "chossy", "chotki", "choupique", "chouriço", "chow mein", "chowder", "chowing", "chowkat", "chresard", "Chrimbo", "chrism", "chrisom", "chrissake", "Christchurch", "christen", "Christer", "Christian", "Christie", "christie", "Christman", "Christmas", "chroma", "chromid", "chromist", "chromo", "chronic", "chronics", "chthonian", "chthonic", "chu nom", "chubby", "chubster", "chuckey", "chucking", "chuckings", "chuckle", "Chucky", "chuffle", "chugger", "chugging", "chuggings", "chukar", "Chukchi", "Chumash", "chumble", "chumming", "chummy", "chumpy", "chunam", "chunder", "chungus", "chunky", "chunni", "chunter", "chuppah", "church key", "churches", "Churchill", "churchish", "churchy", "churchyard", "churel", "churlish", "churro", "chute house", "chutney", "chutzpah", "Chuvash", "Chuzhou", "Chwezi", "chypre", "chyron", "chytrid", "château", "châteaux", "chèvre", "chômeur", "Ciara", "cichlid", "cider", "cigar", "cigars", "Cimbrian", "cinches", "cinching", "cincture", "cinder", "Cindy", "cingle", "cinnamon", "cinquain", "Cinque Ports", "cinquefoil", "cipher", "cippus", "Cira", "circa", "Circe", "circle", "circled", "circles", "circlet", "circlip", "circus", "ciron", "cirrous", "cirrus", "cisco", "Cisco", "cishet", "cissy", "cistern", "cistus", "cital", "cited", "Citeh", "cities", "citing", "citral", "citren", "citreous", "citric", "citron", "Citroën", "citrus", "city", "civet", "civey", "civic", "civics", "civil", "civils", "civvies", "civvy", "CIWS", "clabber", "clachan", "cladding", "cladist", "cladus", "claggy", "claiming", "clamber", "clamming", "clammy", "clamor", "clamour", "clamping", "clampings", "clampy", "clams up", "Clancy", "clanger", "clangour", "clanky", "clannish", "clapboard", "Clapham", "clapmatch", "clapper", "clapping", "clappings", "Clapton", "claptrap", "Clara", "Clarence", "claret", "clarion", "Clarry", "clarsach", "clashy", "classes", "classic", "classist", "classmate", "classmates", "classroom", "classwork", "classy", "clastic", "clathrate", "Clatsop", "clatter", "clauber", "Claudius", "claustrum", "clave", "clavis", "clayey", "claying", "claymore", "Clayton", "Claytons", "cleaner", "cleaning", "cleanings", "cleanly", "cleanness", "cleansing", "cleanskin", "clearer", "clearing", "clearly", "clearspan", "cleavage", "cleaver", "clement", "clergy", "cleric", "clerkling", "Cleta", "Cletus", "Clevedon", "Cleveland", "clever", "clewless", "cli-fi", "cliche", "cliché", "clickbait", "clicker", "clicking", "clickings", "clicko", "client", "clifflike", "Clifford", "Clifton", "clifty", "climate", "climax", "climber", "climbing", "clinal", "cling film", "clingfilm", "clinging", "clingy", "clinic", "clinker", "clinoid", "clinquant", "Clinton", "Clio", "clip-clop", "clippers", "clipping", "clippings", "cliquish", "clitar", "clitic", "Clitus", "clivus", "cloakroom", "clobber", "clockcase", "clockpost", "clockwise", "clockwork", "Cloe", "clogwyn", "cloister", "cloistral", "clonic", "clonus", "Clooney", "cloque", "close call", "close down", "close up", "close-up", "closed", "closely", "closen", "closeness", "closer", "closers", "closest", "closet", "closeup", "closing", "closure", "clothesline", "clothier", "clothing", "Clotho", "cloture", "cloud nine", "cloud street", "cloudberry", "cloudburst", "clouded", "clouding", "cloudings", "cloudy", "clover", "clowder", "Clowdus", "clown car", "clownage", "clowning", "clownings", "clownish", "cloying", "clubbing", "clubbings", "clucking", "cluebat", "clueful", "clueing", "clueless", "clumping", "clumpings", "clumpy", "clumsy", "clunker", "cluster", "clutches", "clutching", "clutchings", "clutter", "clypeus", "clyster", "cmavo", "cmene", "CMOS", "cnemis", "cnida", "co-ed", "co-op", "co-wife", "CoA", "coachman", "coact", "coal", "coal hole", "coaming", "coarse", "coarsen", "coastal", "coaster", "coastland", "coated", "coating", "coatings", "coax", "coaxes", "coaxing", "cobalt", "cobber", "cobble", "cobby", "Cobham", "coble", "cobnut", "cobra", "coca", "cocaine", "coccic", "coccus", "coccyx", "cochlea", "Cochrane", "cock-stand", "cockade", "Cockaigne", "cockal", "cockerel", "cocket", "cockle", "Cockney", "Cockrill", "cockroach", "cocktail", "cocky", "coco", "cocoa", "cocoon", "coctile", "coda", "coddle", "codeine", "codex", "codger", "codlet", "codon", "codpiece", "Cody", "coelom", "coerce", "Coeus", "coffee", "coffer", "coffered", "coffin", "coffle", "cogent", "cognac", "cognate", "cognit", "Cohen", "cohere", "coho", "cohort", "coilgun", "coiling", "coilings", "Coimbra", "coin-op", "coinage", "coining", "coinings", "Cointreau", "coir", "coistrel", "coitus", "cola", "colas", "Colbert", "Colby", "cold sore", "colden", "coldly", "coldness", "Coleford", "Coleman", "coleslaw", "Colfax", "colic", "Colin", "collage", "collapse", "collar", "collard", "collate", "collaud", "colleague", "collect", "colleen", "college", "collet", "collide", "collie", "collier", "Collis", "collogue", "colloid", "colly", "colo", "Cologne", "cologne", "colon", "colone", "colonel", "color", "colored", "colors", "colpate", "Colquhoun", "Colson", "colter", "colthood", "Colton", "column", "columns", "colón", "coma", "Coman", "combat", "comber", "combine", "Combine", "combined", "combines", "come in", "come on", "come to", "come-on", "comeback", "comely", "comer", "Comer", "comet", "cometh", "Comey", "comfit", "comfort", "comfrey", "comfy", "comic", "comice", "coming", "comma", "command", "commands", "commence", "commenced", "commend", "comment", "commerce", "commit", "commits", "commode", "common", "commons", "commune", "commute", "comp sci", "compact", "company", "compare", "compared", "compass", "compassed", "compeer", "compel", "compelled", "compels", "compere", "compete", "competes", "compile", "complain", "complained", "complains", "complaint", "complaints", "complete", "completes", "complex", "complied", "complies", "compline", "compling", "complot", "comply", "compo", "comport", "compose", "composed", "compost", "compote", "compound", "compress", "compressed", "comprise", "comprised", "compter", "compute", "computes", "comrade", "comrades", "comsat", "con crud", "Conan", "conapt", "concave", "conceal", "concealed", "concede", "concedes", "conceit", "conceive", "conceived", "conceives", "concept", "concern", "concerned", "concerns", "concert", "conches", "conchy", "concise", "conclave", "conclude", "concludes", "concoct", "concord", "Concord", "concrete", "concur", "concuss", "concussion", "condemn", "condemned", "condense", "condign", "condo", "condom", "condone", "condor", "conduce", "conduct", "conduit", "condyle", "confab", "confan", "confect", "confer", "conference", "conferred", "confess", "confessed", "confide", "confides", "config", "confine", "confined", "confirm", "confirmed", "confix", "conflab", "conflate", "conflict", "conflow", "conform", "confound", "confront", "confuse", "confused", "confute", "conga", "congeal", "congee", "conger", "congkak", "conglobe", "Congo", "congou", "congrats", "congree", "congress", "conic", "conjoin", "conjunct", "conjure", "conker", "conlang", "Conley", "Connacht", "connect", "connects", "Connel", "connive", "connote", "conquer", "conquered", "conquest", "Conrad", "cons cell", "conscience", "conscious", "conscript", "consent", "conserve", "consign", "consist", "consists", "console", "consonant", "consort", "constant", "constat", "constrain", "constrained", "constraint", "constraints", "constrict", "construct", "construe", "construed", "construes", "consul", "consult", "consume", "contact", "contacts", "contain", "contained", "contains", "Conteh", "contemn", "contempt", "contend", "content", "contents", "contest", "context", "contig", "contoid", "contort", "contour", "contra", "contract", "contracts", "contrast", "contrist", "contrite", "contrive", "contrived", "control", "controlled", "controls", "contuse", "Conté", "convent", "converb", "converge", "converse", "convert", "convex", "convey", "conveyed", "conveys", "convict", "convince", "convinced", "convo", "convoke", "convolve", "convolved", "convolves", "convoy", "Conway", "Conwy", "cony", "coo-coo", "cooches", "coochie", "coochies", "cooee", "cooing", "cooings", "coojong", "cookbook", "cooker", "cookie", "cookies", "cooking", "cookshack", "cool beans", "coolant", "cooldown", "cooler", "Cooley", "Coolidge", "coolie", "cooling", "coolly", "coolness", "cooning", "coop", "cooper", "cooping", "cooter", "cooters", "cootie", "cooties", "cop on", "copal", "copay", "copha", "copied", "copier", "copies", "copper", "coppice", "copra", "copter", "Coptic", "copy", "coquet", "coquets", "coquette", "corah", "coral", "corbel", "cordage", "cordate", "cordax", "cordial", "cordon", "core", "Corfu", "corgi", "corgwn", "Corinne", "Corinth", "corkage", "corkscrew", "Corna", "cornbread", "corncob", "corncrake", "corner", "corners", "cornet", "cornett", "cornfield", "cornhole", "corniche", "Cornish", "cornmeal", "cornpone", "cornute", "Cornwall", "corny", "corol", "corporal", "corporate", "corps", "corpsman", "corpus", "corral", "correct", "correus", "corrie", "corrode", "corrupt", "corsac", "corsage", "corsair", "corselet", "corset", "cortege", "cortex", "corvee", "corvid", "Cory", "corymb", "coset", "cosh", "cosign", "cosine", "Cosman", "Cosmas", "cosmic", "cosmid", "cosmoi", "cosmos", "cosplay", "Cossack", "cosset", "cossid", "costage", "costal", "costard", "costen", "costive", "costly", "costume", "cosy", "coteau", "Cotman", "Cotswold", "cottage", "Cottam", "Cottbus", "cottise", "cotton", "cottrel", "couch grass", "couchant", "couches", "couching", "couchings", "cougar", "cougher", "could've", "coulda", "couldn't", "couldna", "coulee", "coulisse", "couloir", "coulomb", "Coulsdon", "council", "counsel", "count coup", "countdown", "counted", "countenance", "counter", "countered", "countess", "counties", "counting", "countings", "countless", "countor", "countries", "country", "county", "coup d'oeil", "coup d'œil", "coupee", "coupist", "couple", "coupled", "coupler", "couples", "couplet", "coupling", "coupon", "coupé", "courage", "courgette", "courier", "course", "coursebook", "courser", "courses", "courseware", "court", "courtier", "courtiers", "courtly", "courts", "courtship", "courtyard", "couscous", "cousin", "couture", "couvade", "Covell", "coven", "covenant", "cover", "covered", "covers", "covert", "covet", "covey", "cow's milk", "cowan", "coward", "cowbell", "cowboy", "cower", "cowered", "cowing", "Cowley", "cowlick", "cowlstaff", "cowpea", "cowpoke", "cowrie", "cowslip", "coxa", "coxie", "coxswain", "coyly", "coyness", "cozen", "cozener", "CPAP", "crabbing", "crabbit", "crabby", "crabtree", "crack down", "cracker", "cracking", "crackings", "crackle", "cracknel", "Cracow", "cradle", "craftsman", "crafty", "craggy", "cragsman", "craisin", "crambo", "crampet", "cramping", "crampings", "crampon", "cranage", "cranefly", "craneman", "cranemen", "Cranford", "craning", "cranings", "crankle", "cranky", "cranny", "Cranston", "crapper", "crapple", "crapplet", "crappy", "CrASBO", "crases", "crashes", "crashing", "crashings", "crasis", "Crassus", "crater", "cratic", "crating", "craton", "cravat", "craven", "cravens", "craving", "crawdad", "crawfish", "crawldad", "crawlfish", "crayfish", "Crayford", "crayon", "crazes", "crazing", "crazings", "crazy", "creaking", "creakings", "creaky", "creamer", "creaming", "creamings", "creamy", "creases", "creasing", "creasings", "creasy", "create", "creates", "creature", "creatures", "credence", "credit", "credited", "credits", "credo", "creeded", "creeding", "creeper", "creeping", "creepings", "creepshot", "creepy", "creetur", "Creighton", "cremate", "crenate", "crenel", "creole", "Creole", "crescent", "cresol", "cresols", "crested", "cresting", "crestings", "Cretan", "Cretian", "cretic", "cretin", "crevasse", "crevice", "crew neck", "Crewkerne", "cribbage", "cribbing", "cribbings", "cricket", "crickets", "cricoid", "crier", "crikey", "Crimble", "Crimea", "crimelike", "crimping", "crimpings", "crimson", "crinal", "crinet", "cringefest", "cringes", "cringing", "cringings", "cringle", "cringy", "crinkle", "crinoid", "crises", "crisis", "crisper", "Crispin", "crisping", "crispings", "crisply", "CRISPR", "crispy", "crista", "cristae", "critic", "critique", "critter", "crivvens", "Croat", "crochet", "crocus", "Croesus", "Crofton", "croggle", "croggy", "croissant", "cromlech", "Cronian", "cronut", "crony", "croodle", "crooked", "crooner", "crooning", "croonings", "cropout", "croppie", "croquet", "croquette", "crore", "crosier", "cross-bench", "cross-dress", "crossbow", "crossbreed", "crosscut", "crosses", "crossfire", "crossing", "crosslet", "crosslots", "crosswind", "crotchet", "croton", "crottle", "Crouch End", "crouches", "crouching", "crouchings", "Crouchy", "croupy", "crouton", "crowbar", "crowded", "Crowder", "crowdie", "crowding", "crowdings", "crowdsale", "crowing", "crowings", "crowner", "crowning", "crownings", "crownment", "Croydon", "cruces", "crucial", "cruckle", "cruddy", "crude form", "crudeform", "crudely", "crudy", "crudzine", "cruel", "cruelly", "cruelty", "cruet", "crufty", "cruiser", "cruises", "cruising", "cruisings", "cruisy", "cruller", "crumbing", "crumble", "crumby", "crummy", "crumpet", "crumple", "crumpy", "crunches", "crunchie", "crunching", "crunchings", "crunchy", "crunkle", "crupper", "crural", "crusade", "crusher", "crushes", "crushing", "crustal", "crusted", "crusting", "crustings", "crustose", "crusty", "crying", "cryo-", "crypsis", "cryptic", "crystal", "crystals", "crème fraîche", "crêpy", "csardas", "CSIS", "CSUN", "CTAB", "ctenid", "ctenoid", "Cuba", "Cuban", "cubbing", "cubby", "cubeb", "cubic", "Cubist", "cubit", "cuckold", "cuckoo", "cuckquean", "cuddle", "cudgel", "cueing", "cuffee", "cuffin", "cuffing", "cuffings", "cufflink", "cuirass", "cuisine", "cuju", "culchie", "culex", "Cullen", "cullet", "culling", "cullings", "cullion", "cully", "culottes", "culprit", "cultist", "cultists", "culture", "culty", "culver", "Cuman", "cumbent", "cumber", "cumbia", "cumbrous", "cumene", "cumin", "cummie", "cumming", "Cummings", "Cummins", "cumshots", "cumyl", "cunette", "cunning", "cunny", "cunt-struck", "cuntfuck", "cunthead", "cuntless", "cunty", "cupboard", "cupcake", "cupel", "Cupid", "cupping", "Cura", "curate", "curber", "curcas", "curdle", "curdy", "cure-all", "curebie", "curer", "curfew", "curial", "curium", "curlew", "curling", "curly", "currach", "Curragh", "currant", "current", "currier", "curriers", "currish", "curry", "cursed", "curses", "cursive", "cursor", "cursory", "curtail", "curtain", "curtains", "curtal", "Curtis", "curtsey", "curule", "curvet", "curvy", "cuscus", "cushag", "cushat", "cushion", "cushions", "Cushla", "cushty", "cushy", "cuspid", "cussed", "cusses", "cussing", "cussings", "custard", "custom", "customs", "custrel", "cut-out", "cute hoor", "cutesy", "cutie", "cutlass", "Cutler", "cutline", "cutpurse", "cutter", "cutting", "cuttings", "cuttle", "cutty", "cuvette", "cuvée", "Cuzco", "cy pres", "cyan", "cyber", "cyber-", "cyborg", "cycad", "cycas", "Cyclades", "cycle", "cycled", "cycles", "cyclic", "cyclist", "cyclo-", "cycloid", "cyclone", "cygnet", "cylix", "cyma", "cymae", "cymas", "cymbal", "cymbals", "cymoid", "Cymric", "cymrite", "Cymru", "cymæ", "cynic", "cynism", "cyno-", "Cynthia", "Cynthian", "cypress", "cyprid", "Cyprus", "Cyril", "Cyrus", "cystic", "cywydd", "czaric", "Czechia", "Czexit", "Cú Roí"];
exports.cNames = cNames;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _m = require("./m");

var _c = require("./c");

function newName() {
  var name = up(rand(_m.mNames)) + " " + up(rand(_c.cNames));
  document.getElementById("name").innerText = name;
  window.speechSynthesis.cancel();
  var msg = new SpeechSynthesisUtterance(name);
  window.speechSynthesis.speak(msg);
}

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function up(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

window.onload = function () {
  newName();
  document.getElementById("pic").addEventListener("click", function () {
    newName();
  });
};

document.onkeydown = function () {
  return newName();
};
},{"./m":"m.js","./c":"c.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56537" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map