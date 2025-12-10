/**
 * VocaPlay - Vocabulary Learning Application
 * Using Web Speech API for text-to-speech synthesis
 */

// ============================================
// Vocabulary Data
// ============================================

const vocabularyData = {
    animals: {
        'fr-FR': [
            { name: 'Chat', emoji: '🐱', phonetic: '/ʃa/' },
            { name: 'Chien', emoji: '🐕', phonetic: '/ʃjɛ̃/' },
            { name: 'Oiseau', emoji: '🐦', phonetic: '/wazo/' },
            { name: 'Poisson', emoji: '🐟', phonetic: '/pwasɔ̃/' },
            { name: 'Cheval', emoji: '🐴', phonetic: '/ʃəval/' },
            { name: 'Vache', emoji: '🐄', phonetic: '/vaʃ/' },
            { name: 'Cochon', emoji: '🐷', phonetic: '/koʃɔ̃/' },
            { name: 'Lapin', emoji: '🐰', phonetic: '/lapɛ̃/' },
            { name: 'Lion', emoji: '🦁', phonetic: '/ljɔ̃/' },
            { name: 'Éléphant', emoji: '🐘', phonetic: '/elefɑ̃/' },
            { name: 'Singe', emoji: '🐵', phonetic: '/sɛ̃ʒ/' },
            { name: 'Papillon', emoji: '🦋', phonetic: '/papijɔ̃/' }
        ],
        'en-US': [
            { name: 'Cat', emoji: '🐱', phonetic: '/kæt/' },
            { name: 'Dog', emoji: '🐕', phonetic: '/dɔɡ/' },
            { name: 'Bird', emoji: '🐦', phonetic: '/bɜːrd/' },
            { name: 'Fish', emoji: '🐟', phonetic: '/fɪʃ/' },
            { name: 'Horse', emoji: '🐴', phonetic: '/hɔːrs/' },
            { name: 'Cow', emoji: '🐄', phonetic: '/kaʊ/' },
            { name: 'Pig', emoji: '🐷', phonetic: '/pɪɡ/' },
            { name: 'Rabbit', emoji: '🐰', phonetic: '/ˈræbɪt/' },
            { name: 'Lion', emoji: '🦁', phonetic: '/ˈlaɪən/' },
            { name: 'Elephant', emoji: '🐘', phonetic: '/ˈelɪfənt/' },
            { name: 'Monkey', emoji: '🐵', phonetic: '/ˈmʌŋki/' },
            { name: 'Butterfly', emoji: '🦋', phonetic: '/ˈbʌtərflaɪ/' }
        ],
        'es-ES': [
            { name: 'Gato', emoji: '🐱', phonetic: '/ˈɡato/' },
            { name: 'Perro', emoji: '🐕', phonetic: '/ˈpero/' },
            { name: 'Pájaro', emoji: '🐦', phonetic: '/ˈpaxaɾo/' },
            { name: 'Pez', emoji: '🐟', phonetic: '/peθ/' },
            { name: 'Caballo', emoji: '🐴', phonetic: '/kaˈβaʎo/' },
            { name: 'Vaca', emoji: '🐄', phonetic: '/ˈbaka/' },
            { name: 'Cerdo', emoji: '🐷', phonetic: '/ˈθeɾðo/' },
            { name: 'Conejo', emoji: '🐰', phonetic: '/koˈnexo/' },
            { name: 'León', emoji: '🦁', phonetic: '/leˈon/' },
            { name: 'Elefante', emoji: '🐘', phonetic: '/eleˈfante/' },
            { name: 'Mono', emoji: '🐵', phonetic: '/ˈmono/' },
            { name: 'Mariposa', emoji: '🦋', phonetic: '/maɾiˈposa/' }
        ],
        'de-DE': [
            { name: 'Katze', emoji: '🐱', phonetic: '/ˈkatsə/' },
            { name: 'Hund', emoji: '🐕', phonetic: '/hʊnt/' },
            { name: 'Vogel', emoji: '🐦', phonetic: '/ˈfoːɡl̩/' },
            { name: 'Fisch', emoji: '🐟', phonetic: '/fɪʃ/' },
            { name: 'Pferd', emoji: '🐴', phonetic: '/pfeːɐ̯t/' },
            { name: 'Kuh', emoji: '🐄', phonetic: '/kuː/' },
            { name: 'Schwein', emoji: '🐷', phonetic: '/ʃvaɪ̯n/' },
            { name: 'Kaninchen', emoji: '🐰', phonetic: '/kaˈnɪnçən/' },
            { name: 'Löwe', emoji: '🦁', phonetic: '/ˈløːvə/' },
            { name: 'Elefant', emoji: '🐘', phonetic: '/eleˈfant/' },
            { name: 'Affe', emoji: '🐵', phonetic: '/ˈafə/' },
            { name: 'Schmetterling', emoji: '🦋', phonetic: '/ˈʃmɛtɐlɪŋ/' }
        ],
        'it-IT': [
            { name: 'Gatto', emoji: '🐱', phonetic: '/ˈɡatto/' },
            { name: 'Cane', emoji: '🐕', phonetic: '/ˈkane/' },
            { name: 'Uccello', emoji: '🐦', phonetic: '/utˈtʃɛllo/' },
            { name: 'Pesce', emoji: '🐟', phonetic: '/ˈpeʃʃe/' },
            { name: 'Cavallo', emoji: '🐴', phonetic: '/kaˈvallo/' },
            { name: 'Mucca', emoji: '🐄', phonetic: '/ˈmukka/' },
            { name: 'Maiale', emoji: '🐷', phonetic: '/maˈjale/' },
            { name: 'Coniglio', emoji: '🐰', phonetic: '/koˈniʎʎo/' },
            { name: 'Leone', emoji: '🦁', phonetic: '/leˈone/' },
            { name: 'Elefante', emoji: '🐘', phonetic: '/eleˈfante/' },
            { name: 'Scimmia', emoji: '🐵', phonetic: '/ˈʃimmja/' },
            { name: 'Farfalla', emoji: '🦋', phonetic: '/farˈfalla/' }
        ]
    },
    fruits: {
        'fr-FR': [
            { name: 'Pomme', emoji: '🍎', phonetic: '/pɔm/' },
            { name: 'Banane', emoji: '🍌', phonetic: '/banan/' },
            { name: 'Orange', emoji: '🍊', phonetic: '/ɔʁɑ̃ʒ/' },
            { name: 'Fraise', emoji: '🍓', phonetic: '/fʁɛz/' },
            { name: 'Raisin', emoji: '🍇', phonetic: '/ʁɛzɛ̃/' },
            { name: 'Cerise', emoji: '🍒', phonetic: '/səʁiz/' },
            { name: 'Pastèque', emoji: '🍉', phonetic: '/pastɛk/' },
            { name: 'Ananas', emoji: '🍍', phonetic: '/anana/' },
            { name: 'Poire', emoji: '🍐', phonetic: '/pwaʁ/' },
            { name: 'Citron', emoji: '🍋', phonetic: '/sitʁɔ̃/' },
            { name: 'Pêche', emoji: '🍑', phonetic: '/pɛʃ/' },
            { name: 'Kiwi', emoji: '🥝', phonetic: '/kiwi/' }
        ],
        'en-US': [
            { name: 'Apple', emoji: '🍎', phonetic: '/ˈæpəl/' },
            { name: 'Banana', emoji: '🍌', phonetic: '/bəˈnænə/' },
            { name: 'Orange', emoji: '🍊', phonetic: '/ˈɔːrɪndʒ/' },
            { name: 'Strawberry', emoji: '🍓', phonetic: '/ˈstrɔːberi/' },
            { name: 'Grapes', emoji: '🍇', phonetic: '/ɡreɪps/' },
            { name: 'Cherry', emoji: '🍒', phonetic: '/ˈtʃeri/' },
            { name: 'Watermelon', emoji: '🍉', phonetic: '/ˈwɔːtərmelən/' },
            { name: 'Pineapple', emoji: '🍍', phonetic: '/ˈpaɪnæpəl/' },
            { name: 'Pear', emoji: '🍐', phonetic: '/peər/' },
            { name: 'Lemon', emoji: '🍋', phonetic: '/ˈlemən/' },
            { name: 'Peach', emoji: '🍑', phonetic: '/piːtʃ/' },
            { name: 'Kiwi', emoji: '🥝', phonetic: '/ˈkiːwi/' }
        ],
        'es-ES': [
            { name: 'Manzana', emoji: '🍎', phonetic: '/manˈθana/' },
            { name: 'Plátano', emoji: '🍌', phonetic: '/ˈplatano/' },
            { name: 'Naranja', emoji: '🍊', phonetic: '/naˈɾanxa/' },
            { name: 'Fresa', emoji: '🍓', phonetic: '/ˈfɾesa/' },
            { name: 'Uvas', emoji: '🍇', phonetic: '/ˈuβas/' },
            { name: 'Cereza', emoji: '🍒', phonetic: '/θeˈɾeθa/' },
            { name: 'Sandía', emoji: '🍉', phonetic: '/sanˈdia/' },
            { name: 'Piña', emoji: '🍍', phonetic: '/ˈpiɲa/' },
            { name: 'Pera', emoji: '🍐', phonetic: '/ˈpeɾa/' },
            { name: 'Limón', emoji: '🍋', phonetic: '/liˈmon/' },
            { name: 'Melocotón', emoji: '🍑', phonetic: '/melokoˈton/' },
            { name: 'Kiwi', emoji: '🥝', phonetic: '/ˈkiwi/' }
        ],
        'de-DE': [
            { name: 'Apfel', emoji: '🍎', phonetic: '/ˈapfəl/' },
            { name: 'Banane', emoji: '🍌', phonetic: '/baˈnaːnə/' },
            { name: 'Orange', emoji: '🍊', phonetic: '/oˈʁaŋʒə/' },
            { name: 'Erdbeere', emoji: '🍓', phonetic: '/ˈeːɐ̯tbeːʁə/' },
            { name: 'Trauben', emoji: '🍇', phonetic: '/ˈtʁaʊ̯bən/' },
            { name: 'Kirsche', emoji: '🍒', phonetic: '/ˈkɪʁʃə/' },
            { name: 'Wassermelone', emoji: '🍉', phonetic: '/ˈvasɐmeloːnə/' },
            { name: 'Ananas', emoji: '🍍', phonetic: '/ˈananas/' },
            { name: 'Birne', emoji: '🍐', phonetic: '/ˈbɪʁnə/' },
            { name: 'Zitrone', emoji: '🍋', phonetic: '/tsiˈtʁoːnə/' },
            { name: 'Pfirsich', emoji: '🍑', phonetic: '/ˈpfɪʁzɪç/' },
            { name: 'Kiwi', emoji: '🥝', phonetic: '/ˈkiːvi/' }
        ],
        'it-IT': [
            { name: 'Mela', emoji: '🍎', phonetic: '/ˈmɛla/' },
            { name: 'Banana', emoji: '🍌', phonetic: '/baˈnana/' },
            { name: 'Arancia', emoji: '🍊', phonetic: '/aˈrantʃa/' },
            { name: 'Fragola', emoji: '🍓', phonetic: '/ˈfraɡola/' },
            { name: 'Uva', emoji: '🍇', phonetic: '/ˈuva/' },
            { name: 'Ciliegia', emoji: '🍒', phonetic: '/tʃiˈljɛdʒa/' },
            { name: 'Anguria', emoji: '🍉', phonetic: '/anˈɡurja/' },
            { name: 'Ananas', emoji: '🍍', phonetic: '/ˈananas/' },
            { name: 'Pera', emoji: '🍐', phonetic: '/ˈpɛra/' },
            { name: 'Limone', emoji: '🍋', phonetic: '/liˈmone/' },
            { name: 'Pesca', emoji: '🍑', phonetic: '/ˈpeska/' },
            { name: 'Kiwi', emoji: '🥝', phonetic: '/ˈkiwi/' }
        ]
    },
    objects: {
        'fr-FR': [
            { name: 'Maison', emoji: '🏠', phonetic: '/mɛzɔ̃/' },
            { name: 'Voiture', emoji: '🚗', phonetic: '/vwatyʁ/' },
            { name: 'Livre', emoji: '📚', phonetic: '/livʁ/' },
            { name: 'Téléphone', emoji: '📱', phonetic: '/telefɔn/' },
            { name: 'Table', emoji: '🪑', phonetic: '/tabl/' },
            { name: 'Chaise', emoji: '💺', phonetic: '/ʃɛz/' },
            { name: 'Lampe', emoji: '💡', phonetic: '/lɑ̃p/' },
            { name: 'Horloge', emoji: '🕐', phonetic: '/ɔʁlɔʒ/' },
            { name: 'Clé', emoji: '🔑', phonetic: '/kle/' },
            { name: 'Sac', emoji: '👜', phonetic: '/sak/' },
            { name: 'Parapluie', emoji: '☂️', phonetic: '/paʁaplɥi/' },
            { name: 'Lunettes', emoji: '👓', phonetic: '/lynɛt/' }
        ],
        'en-US': [
            { name: 'House', emoji: '🏠', phonetic: '/haʊs/' },
            { name: 'Car', emoji: '🚗', phonetic: '/kɑːr/' },
            { name: 'Book', emoji: '📚', phonetic: '/bʊk/' },
            { name: 'Phone', emoji: '📱', phonetic: '/foʊn/' },
            { name: 'Table', emoji: '🪑', phonetic: '/ˈteɪbəl/' },
            { name: 'Chair', emoji: '💺', phonetic: '/tʃer/' },
            { name: 'Lamp', emoji: '💡', phonetic: '/læmp/' },
            { name: 'Clock', emoji: '🕐', phonetic: '/klɑːk/' },
            { name: 'Key', emoji: '🔑', phonetic: '/kiː/' },
            { name: 'Bag', emoji: '👜', phonetic: '/bæɡ/' },
            { name: 'Umbrella', emoji: '☂️', phonetic: '/ʌmˈbrelə/' },
            { name: 'Glasses', emoji: '👓', phonetic: '/ˈɡlæsɪz/' }
        ],
        'es-ES': [
            { name: 'Casa', emoji: '🏠', phonetic: '/ˈkasa/' },
            { name: 'Coche', emoji: '🚗', phonetic: '/ˈkotʃe/' },
            { name: 'Libro', emoji: '📚', phonetic: '/ˈliβɾo/' },
            { name: 'Teléfono', emoji: '📱', phonetic: '/teˈlefono/' },
            { name: 'Mesa', emoji: '🪑', phonetic: '/ˈmesa/' },
            { name: 'Silla', emoji: '💺', phonetic: '/ˈsiʎa/' },
            { name: 'Lámpara', emoji: '💡', phonetic: '/ˈlampaɾa/' },
            { name: 'Reloj', emoji: '🕐', phonetic: '/reˈlox/' },
            { name: 'Llave', emoji: '🔑', phonetic: '/ˈʎaβe/' },
            { name: 'Bolso', emoji: '👜', phonetic: '/ˈbolso/' },
            { name: 'Paraguas', emoji: '☂️', phonetic: '/paˈɾaɣwas/' },
            { name: 'Gafas', emoji: '👓', phonetic: '/ˈɡafas/' }
        ],
        'de-DE': [
            { name: 'Haus', emoji: '🏠', phonetic: '/haʊ̯s/' },
            { name: 'Auto', emoji: '🚗', phonetic: '/ˈaʊ̯to/' },
            { name: 'Buch', emoji: '📚', phonetic: '/buːx/' },
            { name: 'Telefon', emoji: '📱', phonetic: '/teleˈfoːn/' },
            { name: 'Tisch', emoji: '🪑', phonetic: '/tɪʃ/' },
            { name: 'Stuhl', emoji: '💺', phonetic: '/ʃtuːl/' },
            { name: 'Lampe', emoji: '💡', phonetic: '/ˈlampə/' },
            { name: 'Uhr', emoji: '🕐', phonetic: '/uːɐ̯/' },
            { name: 'Schlüssel', emoji: '🔑', phonetic: '/ˈʃlʏsl̩/' },
            { name: 'Tasche', emoji: '👜', phonetic: '/ˈtaʃə/' },
            { name: 'Regenschirm', emoji: '☂️', phonetic: '/ˈʁeːɡn̩ʃɪʁm/' },
            { name: 'Brille', emoji: '👓', phonetic: '/ˈbʁɪlə/' }
        ],
        'it-IT': [
            { name: 'Casa', emoji: '🏠', phonetic: '/ˈkaza/' },
            { name: 'Auto', emoji: '🚗', phonetic: '/ˈauto/' },
            { name: 'Libro', emoji: '📚', phonetic: '/ˈlibro/' },
            { name: 'Telefono', emoji: '📱', phonetic: '/teˈlɛfono/' },
            { name: 'Tavolo', emoji: '🪑', phonetic: '/ˈtavolo/' },
            { name: 'Sedia', emoji: '💺', phonetic: '/ˈsɛdja/' },
            { name: 'Lampada', emoji: '💡', phonetic: '/ˈlampada/' },
            { name: 'Orologio', emoji: '🕐', phonetic: '/oroˈlɔdʒo/' },
            { name: 'Chiave', emoji: '🔑', phonetic: '/ˈkjave/' },
            { name: 'Borsa', emoji: '👜', phonetic: '/ˈborsa/' },
            { name: 'Ombrello', emoji: '☂️', phonetic: '/omˈbrɛllo/' },
            { name: 'Occhiali', emoji: '👓', phonetic: '/okˈkjali/' }
        ]
    },
    flags: {
        'fr-FR': [
            { name: 'France', emoji: '🇫🇷', phonetic: '/fʁɑ̃s/' },
            { name: 'Allemagne', emoji: '🇩🇪', phonetic: '/almaɲ/' },
            { name: 'Espagne', emoji: '🇪🇸', phonetic: '/ɛspaɲ/' },
            { name: 'Italie', emoji: '🇮🇹', phonetic: '/itali/' },
            { name: 'Royaume-Uni', emoji: '🇬🇧', phonetic: '/ʁwajom yni/' },
            { name: 'États-Unis', emoji: '🇺🇸', phonetic: '/eta zyni/' },
            { name: 'Japon', emoji: '🇯🇵', phonetic: '/ʒapɔ̃/' },
            { name: 'Chine', emoji: '🇨🇳', phonetic: '/ʃin/' },
            { name: 'Brésil', emoji: '🇧🇷', phonetic: '/bʁezil/' },
            { name: 'Canada', emoji: '🇨🇦', phonetic: '/kanada/' },
            { name: 'Australie', emoji: '🇦🇺', phonetic: '/ostʁali/' },
            { name: 'Inde', emoji: '🇮🇳', phonetic: '/ɛ̃d/' }
        ],
        'en-US': [
            { name: 'France', emoji: '🇫🇷', phonetic: '/fræns/' },
            { name: 'Germany', emoji: '🇩🇪', phonetic: '/ˈdʒɜːrməni/' },
            { name: 'Spain', emoji: '🇪🇸', phonetic: '/speɪn/' },
            { name: 'Italy', emoji: '🇮🇹', phonetic: '/ˈɪtəli/' },
            { name: 'United Kingdom', emoji: '🇬🇧', phonetic: '/juˌnaɪtɪd ˈkɪŋdəm/' },
            { name: 'United States', emoji: '🇺🇸', phonetic: '/juˌnaɪtɪd steɪts/' },
            { name: 'Japan', emoji: '🇯🇵', phonetic: '/dʒəˈpæn/' },
            { name: 'China', emoji: '🇨🇳', phonetic: '/ˈtʃaɪnə/' },
            { name: 'Brazil', emoji: '🇧🇷', phonetic: '/brəˈzɪl/' },
            { name: 'Canada', emoji: '🇨🇦', phonetic: '/ˈkænədə/' },
            { name: 'Australia', emoji: '🇦🇺', phonetic: '/ɔːˈstreɪliə/' },
            { name: 'India', emoji: '🇮🇳', phonetic: '/ˈɪndiə/' }
        ],
        'es-ES': [
            { name: 'Francia', emoji: '🇫🇷', phonetic: '/ˈfɾanθja/' },
            { name: 'Alemania', emoji: '🇩🇪', phonetic: '/aleˈmanja/' },
            { name: 'España', emoji: '🇪🇸', phonetic: '/esˈpaɲa/' },
            { name: 'Italia', emoji: '🇮🇹', phonetic: '/iˈtalja/' },
            { name: 'Reino Unido', emoji: '🇬🇧', phonetic: '/ˈrejno uˈniðo/' },
            { name: 'Estados Unidos', emoji: '🇺🇸', phonetic: '/esˈtaðos uˈniðos/' },
            { name: 'Japón', emoji: '🇯🇵', phonetic: '/xaˈpon/' },
            { name: 'China', emoji: '🇨🇳', phonetic: '/ˈtʃina/' },
            { name: 'Brasil', emoji: '🇧🇷', phonetic: '/bɾaˈsil/' },
            { name: 'Canadá', emoji: '🇨🇦', phonetic: '/kanaˈða/' },
            { name: 'Australia', emoji: '🇦🇺', phonetic: '/ausˈtɾalja/' },
            { name: 'India', emoji: '🇮🇳', phonetic: '/ˈindja/' }
        ],
        'de-DE': [
            { name: 'Frankreich', emoji: '🇫🇷', phonetic: '/ˈfʁaŋkʁaɪ̯ç/' },
            { name: 'Deutschland', emoji: '🇩🇪', phonetic: '/ˈdɔʏ̯tʃlant/' },
            { name: 'Spanien', emoji: '🇪🇸', phonetic: '/ˈʃpaːni̯ən/' },
            { name: 'Italien', emoji: '🇮🇹', phonetic: '/iˈtaːli̯ən/' },
            { name: 'Vereinigtes Königreich', emoji: '🇬🇧', phonetic: '/fɛɐ̯ˈʔaɪ̯nɪçtəs ˈkøːnɪçʁaɪ̯ç/' },
            { name: 'Vereinigte Staaten', emoji: '🇺🇸', phonetic: '/fɛɐ̯ˈʔaɪ̯nɪçtə ˈʃtaːtən/' },
            { name: 'Japan', emoji: '🇯🇵', phonetic: '/ˈjaːpan/' },
            { name: 'China', emoji: '🇨🇳', phonetic: '/ˈçiːna/' },
            { name: 'Brasilien', emoji: '🇧🇷', phonetic: '/bʁaˈziːli̯ən/' },
            { name: 'Kanada', emoji: '🇨🇦', phonetic: '/ˈkanada/' },
            { name: 'Australien', emoji: '🇦🇺', phonetic: '/aʊ̯sˈtʁaːli̯ən/' },
            { name: 'Indien', emoji: '🇮🇳', phonetic: '/ˈɪndi̯ən/' }
        ],
        'it-IT': [
            { name: 'Francia', emoji: '🇫🇷', phonetic: '/ˈfrantʃa/' },
            { name: 'Germania', emoji: '🇩🇪', phonetic: '/dʒerˈmanja/' },
            { name: 'Spagna', emoji: '🇪🇸', phonetic: '/ˈspaɲɲa/' },
            { name: 'Italia', emoji: '🇮🇹', phonetic: '/iˈtalja/' },
            { name: 'Regno Unito', emoji: '🇬🇧', phonetic: '/ˈreɲɲo uˈnito/' },
            { name: 'Stati Uniti', emoji: '🇺🇸', phonetic: '/ˈstati uˈniti/' },
            { name: 'Giappone', emoji: '🇯🇵', phonetic: '/dʒapˈpone/' },
            { name: 'Cina', emoji: '🇨🇳', phonetic: '/ˈtʃina/' },
            { name: 'Brasile', emoji: '🇧🇷', phonetic: '/braˈzile/' },
            { name: 'Canada', emoji: '🇨🇦', phonetic: '/ˈkanada/' },
            { name: 'Australia', emoji: '🇦🇺', phonetic: '/ausˈtralja/' },
            { name: 'India', emoji: '🇮🇳', phonetic: '/ˈindja/' }
        ]
    },
    colors: {
        'fr-FR': [
            { name: 'Rouge', emoji: '🔴', phonetic: '/ʁuʒ/' },
            { name: 'Bleu', emoji: '🔵', phonetic: '/blø/' },
            { name: 'Vert', emoji: '🟢', phonetic: '/vɛʁ/' },
            { name: 'Jaune', emoji: '🟡', phonetic: '/ʒon/' },
            { name: 'Orange', emoji: '🟠', phonetic: '/ɔʁɑ̃ʒ/' },
            { name: 'Violet', emoji: '🟣', phonetic: '/vjɔlɛ/' },
            { name: 'Rose', emoji: '🩷', phonetic: '/ʁoz/' },
            { name: 'Noir', emoji: '⚫', phonetic: '/nwaʁ/' },
            { name: 'Blanc', emoji: '⚪', phonetic: '/blɑ̃/' },
            { name: 'Marron', emoji: '🟤', phonetic: '/maʁɔ̃/' },
            { name: 'Gris', emoji: '🩶', phonetic: '/ɡʁi/' },
            { name: 'Turquoise', emoji: '🩵', phonetic: '/tyʁkwaz/' }
        ],
        'en-US': [
            { name: 'Red', emoji: '🔴', phonetic: '/red/' },
            { name: 'Blue', emoji: '🔵', phonetic: '/bluː/' },
            { name: 'Green', emoji: '🟢', phonetic: '/ɡriːn/' },
            { name: 'Yellow', emoji: '🟡', phonetic: '/ˈjeloʊ/' },
            { name: 'Orange', emoji: '🟠', phonetic: '/ˈɔːrɪndʒ/' },
            { name: 'Purple', emoji: '🟣', phonetic: '/ˈpɜːrpəl/' },
            { name: 'Pink', emoji: '🩷', phonetic: '/pɪŋk/' },
            { name: 'Black', emoji: '⚫', phonetic: '/blæk/' },
            { name: 'White', emoji: '⚪', phonetic: '/waɪt/' },
            { name: 'Brown', emoji: '🟤', phonetic: '/braʊn/' },
            { name: 'Gray', emoji: '🩶', phonetic: '/ɡreɪ/' },
            { name: 'Turquoise', emoji: '🩵', phonetic: '/ˈtɜːrkwɔɪz/' }
        ],
        'es-ES': [
            { name: 'Rojo', emoji: '🔴', phonetic: '/ˈroxo/' },
            { name: 'Azul', emoji: '🔵', phonetic: '/aˈθul/' },
            { name: 'Verde', emoji: '🟢', phonetic: '/ˈbeɾðe/' },
            { name: 'Amarillo', emoji: '🟡', phonetic: '/amaˈɾiʎo/' },
            { name: 'Naranja', emoji: '🟠', phonetic: '/naˈɾanxa/' },
            { name: 'Morado', emoji: '🟣', phonetic: '/moˈɾaðo/' },
            { name: 'Rosa', emoji: '🩷', phonetic: '/ˈrosa/' },
            { name: 'Negro', emoji: '⚫', phonetic: '/ˈneɣɾo/' },
            { name: 'Blanco', emoji: '⚪', phonetic: '/ˈblanko/' },
            { name: 'Marrón', emoji: '🟤', phonetic: '/maˈron/' },
            { name: 'Gris', emoji: '🩶', phonetic: '/ɡɾis/' },
            { name: 'Turquesa', emoji: '🩵', phonetic: '/tuɾˈkesa/' }
        ],
        'de-DE': [
            { name: 'Rot', emoji: '🔴', phonetic: '/ʁoːt/' },
            { name: 'Blau', emoji: '🔵', phonetic: '/blaʊ̯/' },
            { name: 'Grün', emoji: '🟢', phonetic: '/ɡʁyːn/' },
            { name: 'Gelb', emoji: '🟡', phonetic: '/ɡɛlp/' },
            { name: 'Orange', emoji: '🟠', phonetic: '/oˈʁaŋʒ/' },
            { name: 'Lila', emoji: '🟣', phonetic: '/ˈliːla/' },
            { name: 'Rosa', emoji: '🩷', phonetic: '/ˈʁoːza/' },
            { name: 'Schwarz', emoji: '⚫', phonetic: '/ʃvaʁts/' },
            { name: 'Weiß', emoji: '⚪', phonetic: '/vaɪ̯s/' },
            { name: 'Braun', emoji: '🟤', phonetic: '/bʁaʊ̯n/' },
            { name: 'Grau', emoji: '🩶', phonetic: '/ɡʁaʊ̯/' },
            { name: 'Türkis', emoji: '🩵', phonetic: '/tʏʁˈkiːs/' }
        ],
        'it-IT': [
            { name: 'Rosso', emoji: '🔴', phonetic: '/ˈrosso/' },
            { name: 'Blu', emoji: '🔵', phonetic: '/blu/' },
            { name: 'Verde', emoji: '🟢', phonetic: '/ˈverde/' },
            { name: 'Giallo', emoji: '🟡', phonetic: '/ˈdʒallo/' },
            { name: 'Arancione', emoji: '🟠', phonetic: '/aranˈtʃone/' },
            { name: 'Viola', emoji: '🟣', phonetic: '/ˈvjɔla/' },
            { name: 'Rosa', emoji: '🩷', phonetic: '/ˈrɔza/' },
            { name: 'Nero', emoji: '⚫', phonetic: '/ˈnero/' },
            { name: 'Bianco', emoji: '⚪', phonetic: '/ˈbjanko/' },
            { name: 'Marrone', emoji: '🟤', phonetic: '/marˈrone/' },
            { name: 'Grigio', emoji: '🩶', phonetic: '/ˈɡridʒo/' },
            { name: 'Turchese', emoji: '🩵', phonetic: '/turˈkeze/' }
        ]
    }
};

// Feedback messages in different languages
const feedbackMessages = {
    'fr-FR': {
        correct: ['Bonne réponse !', 'Excellent !', 'Bravo !', 'Parfait !', 'Très bien !'],
        incorrect: ['Incorrect', 'Essaie encore', 'Ce n\'est pas ça', 'Pas tout à fait'],
        findThe: 'Trouvez :',
        clickToStart: 'Cliquez sur "Nouvelle Partie" pour commencer !'
    },
    'en-US': {
        correct: ['Correct!', 'Excellent!', 'Well done!', 'Perfect!', 'Great job!'],
        incorrect: ['Incorrect', 'Try again', 'That\'s not it', 'Not quite'],
        findThe: 'Find:',
        clickToStart: 'Click "New Game" to start!'
    },
    'es-ES': {
        correct: ['¡Correcto!', '¡Excelente!', '¡Bien hecho!', '¡Perfecto!', '¡Muy bien!'],
        incorrect: ['Incorrecto', 'Inténtalo de nuevo', 'Eso no es', 'No exactamente'],
        findThe: 'Encuentra:',
        clickToStart: '¡Haz clic en "Nueva Partida" para comenzar!'
    },
    'de-DE': {
        correct: ['Richtig!', 'Ausgezeichnet!', 'Gut gemacht!', 'Perfekt!', 'Sehr gut!'],
        incorrect: ['Falsch', 'Versuch es nochmal', 'Das ist es nicht', 'Nicht ganz'],
        findThe: 'Finde:',
        clickToStart: 'Klicken Sie auf "Neues Spiel" um zu starten!'
    },
    'it-IT': {
        correct: ['Corretto!', 'Eccellente!', 'Ben fatto!', 'Perfetto!', 'Ottimo!'],
        incorrect: ['Sbagliato', 'Riprova', 'Non è quello', 'Non proprio'],
        findThe: 'Trova:',
        clickToStart: 'Clicca su "Nuova Partita" per iniziare!'
    }
};

// ============================================
// Application State
// ============================================

const state = {
    currentTheme: 'animals',
    currentLanguage: 'fr-FR',
    currentMode: 'learn',
    gameActive: false,
    currentWord: null,
    score: 0,
    bestScore: 0,
    streak: 0,
    attempts: 0
};

// ============================================
// DOM Elements
// ============================================

const elements = {
    navTabs: document.querySelectorAll('.nav-tab'),
    themeSelect: document.getElementById('theme-select'),
    languageSelect: document.getElementById('language-select'),
    learnSection: document.getElementById('learn-section'),
    gameSection: document.getElementById('game-section'),
    learnCards: document.getElementById('learn-cards'),
    gameCards: document.getElementById('game-cards'),
    startGameBtn: document.getElementById('start-game'),
    repeatWordBtn: document.getElementById('repeat-word'),
    scoreDisplay: document.getElementById('score'),
    bestScoreDisplay: document.getElementById('best-score'),
    streakDisplay: document.getElementById('streak'),
    gameStatus: document.getElementById('game-status'),
    feedbackOverlay: document.getElementById('feedback-overlay'),
    feedbackModal: document.getElementById('feedback-modal'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackText: document.getElementById('feedback-text')
};

// ============================================
// Speech Synthesis
// ============================================

const synth = window.speechSynthesis;
let voices = [];

// Load available voices
function loadVoices() {
    voices = synth.getVoices();
}

// Get best voice for language
function getVoiceForLanguage(lang) {
    // Try to find a native voice for the language
    let voice = voices.find(v => v.lang === lang && v.localService);
    if (!voice) {
        voice = voices.find(v => v.lang === lang);
    }
    if (!voice) {
        // Try to find a voice that starts with the language code
        const langCode = lang.split('-')[0];
        voice = voices.find(v => v.lang.startsWith(langCode));
    }
    return voice;
}

// Speak text
function speak(text, onEnd = null) {
    // Cancel any ongoing speech
    synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state.currentLanguage;
    
    const voice = getVoiceForLanguage(state.currentLanguage);
    if (voice) {
        utterance.voice = voice;
    }
    
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    if (onEnd) {
        utterance.onend = onEnd;
    }
    
    synth.speak(utterance);
}

// Initialize voices
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

// ============================================
// Card Generation
// ============================================

function createCard(item, index, isGameMode = false) {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.dataset.index = index;
    card.dataset.name = item.name;
    card.tabIndex = 0;
    
    card.innerHTML = `
        <span class="sound-indicator">🔊</span>
        <div class="card-image">${item.emoji}</div>
        <p class="card-name">${isGameMode ? '' : item.name}</p>
        <p class="card-phonetic">${isGameMode ? '' : item.phonetic}</p>
    `;
    
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.05}s`;
    card.style.animation = 'slideUp 0.5s ease-out both';
    
    return card;
}

function renderCards(containerId, isGameMode = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const vocabulary = vocabularyData[state.currentTheme][state.currentLanguage];
    
    vocabulary.forEach((item, index) => {
        const card = createCard(item, index, isGameMode);
        container.appendChild(card);
    });
    
    // Add event listeners
    const cards = container.querySelectorAll('.vocab-card');
    cards.forEach(card => {
        card.addEventListener('click', () => handleCardClick(card, isGameMode));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(card, isGameMode);
            }
        });
    });
}

// ============================================
// Card Click Handlers
// ============================================

function handleCardClick(card, isGameMode) {
    if (isGameMode) {
        handleGameCardClick(card);
    } else {
        handleLearnCardClick(card);
    }
}

function handleLearnCardClick(card) {
    const index = parseInt(card.dataset.index);
    const vocabulary = vocabularyData[state.currentTheme][state.currentLanguage];
    const item = vocabulary[index];
    
    // Add speaking animation
    card.classList.add('speaking');
    setTimeout(() => card.classList.remove('speaking'), 500);
    
    // Speak the word
    speak(item.name);
}

function handleGameCardClick(card) {
    if (!state.gameActive || card.classList.contains('disabled')) return;
    
    const clickedName = card.dataset.name;
    const isCorrect = clickedName === state.currentWord.name;
    
    if (isCorrect) {
        // Correct answer
        card.classList.add('correct');
        state.score += 10 + (state.streak * 2);
        state.streak++;
        
        // Update best score
        if (state.score > state.bestScore) {
            state.bestScore = state.score;
            localStorage.setItem('vocaplay_best_score', state.bestScore);
        }
        
        updateScoreDisplay();
        showFeedback(true);
        
        // Say correct feedback
        const messages = feedbackMessages[state.currentLanguage].correct;
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        setTimeout(() => {
            speak(message, () => {
                setTimeout(() => {
                    hideFeedback();
                    card.classList.remove('correct');
                    nextRound();
                }, 500);
            });
        }, 300);
        
    } else {
        // Incorrect answer
        card.classList.add('incorrect');
        state.streak = 0;
        state.attempts++;
        
        updateScoreDisplay();
        showFeedback(false);
        
        // Say incorrect feedback
        const messages = feedbackMessages[state.currentLanguage].incorrect;
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        setTimeout(() => {
            speak(message, () => {
                setTimeout(() => {
                    hideFeedback();
                    card.classList.remove('incorrect');
                    
                    // Give another chance (up to 2 attempts)
                    if (state.attempts >= 2) {
                        // Show the correct answer
                        highlightCorrectCard();
                        setTimeout(() => {
                            nextRound();
                        }, 1500);
                    }
                }, 500);
            });
        }, 300);
    }
}

function highlightCorrectCard() {
    const cards = elements.gameCards.querySelectorAll('.vocab-card');
    cards.forEach(card => {
        if (card.dataset.name === state.currentWord.name) {
            card.classList.add('correct');
            setTimeout(() => card.classList.remove('correct'), 1500);
        }
    });
}

// ============================================
// Game Logic
// ============================================

function startGame() {
    state.gameActive = true;
    state.score = 0;
    state.streak = 0;
    
    updateScoreDisplay();
    elements.repeatWordBtn.disabled = false;
    
    // Shuffle and render cards for game
    renderCards('game-cards', true);
    
    // Start first round
    nextRound();
}

function nextRound() {
    state.attempts = 0;
    
    const vocabulary = vocabularyData[state.currentTheme][state.currentLanguage];
    
    // Pick a random word
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    state.currentWord = vocabulary[randomIndex];
    
    // Update game status
    const findText = feedbackMessages[state.currentLanguage].findThe;
    elements.gameStatus.innerHTML = `<p>${findText} <span class="question-word">${state.currentWord.name}</span></p>`;
    
    // Enable all cards
    const cards = elements.gameCards.querySelectorAll('.vocab-card');
    cards.forEach(card => card.classList.remove('disabled'));
    
    // Speak the word after a short delay
    setTimeout(() => {
        speak(state.currentWord.name);
    }, 500);
}

function repeatCurrentWord() {
    if (state.currentWord) {
        speak(state.currentWord.name);
    }
}

// ============================================
// UI Updates
// ============================================

function updateScoreDisplay() {
    elements.scoreDisplay.textContent = state.score;
    elements.bestScoreDisplay.textContent = state.bestScore;
    elements.streakDisplay.textContent = state.streak;
}

function showFeedback(isCorrect) {
    elements.feedbackModal.className = `feedback-modal ${isCorrect ? 'success' : 'error'}`;
    elements.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
    
    const messages = isCorrect 
        ? feedbackMessages[state.currentLanguage].correct 
        : feedbackMessages[state.currentLanguage].incorrect;
    elements.feedbackText.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    elements.feedbackOverlay.classList.add('show');
}

function hideFeedback() {
    elements.feedbackOverlay.classList.remove('show');
}

function switchMode(mode) {
    state.currentMode = mode;
    state.gameActive = false;
    
    // Update nav tabs
    elements.navTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    
    // Update sections
    elements.learnSection.classList.toggle('active', mode === 'learn');
    elements.gameSection.classList.toggle('active', mode === 'game');
    
    // Render appropriate cards
    if (mode === 'learn') {
        renderCards('learn-cards', false);
    } else {
        renderCards('game-cards', true);
        elements.gameStatus.innerHTML = `<p>${feedbackMessages[state.currentLanguage].clickToStart}</p>`;
        elements.repeatWordBtn.disabled = true;
    }
}

function updateTheme(theme) {
    state.currentTheme = theme;
    if (state.currentMode === 'learn') {
        renderCards('learn-cards', false);
    } else {
        renderCards('game-cards', true);
        // Reset game if in progress
        if (state.gameActive) {
            startGame();
        }
    }
}

function updateLanguage(language) {
    state.currentLanguage = language;
    if (state.currentMode === 'learn') {
        renderCards('learn-cards', false);
    } else {
        renderCards('game-cards', true);
        elements.gameStatus.innerHTML = `<p>${feedbackMessages[state.currentLanguage].clickToStart}</p>`;
        // Reset game if in progress
        if (state.gameActive) {
            startGame();
        }
    }
}

// ============================================
// Event Listeners
// ============================================

function initEventListeners() {
    // Navigation tabs
    elements.navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchMode(tab.dataset.mode);
        });
    });
    
    // Theme select
    elements.themeSelect.addEventListener('change', (e) => {
        updateTheme(e.target.value);
    });
    
    // Language select
    elements.languageSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });
    
    // Game buttons
    elements.startGameBtn.addEventListener('click', startGame);
    elements.repeatWordBtn.addEventListener('click', repeatCurrentWord);
    
    // Close feedback on click outside
    elements.feedbackOverlay.addEventListener('click', (e) => {
        if (e.target === elements.feedbackOverlay) {
            hideFeedback();
        }
    });
}

// ============================================
// Initialization
// ============================================

function init() {
    // Load best score from localStorage
    const savedBestScore = localStorage.getItem('vocaplay_best_score');
    if (savedBestScore) {
        state.bestScore = parseInt(savedBestScore);
        elements.bestScoreDisplay.textContent = state.bestScore;
    }
    
    // Initialize event listeners
    initEventListeners();
    
    // Render initial cards
    renderCards('learn-cards', false);
    renderCards('game-cards', true);
    
    console.log('VocaPlay initialized! 🎯');
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', init);

