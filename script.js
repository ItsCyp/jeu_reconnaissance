const vocabulary = [
    // Animaux
    { name: "Chat", image: "images/animaux/chat.png", category: "animaux", translations: { fr: "Chat", en: "Cat", es: "Gato", ja: "Neko (ネコ)", ko: "Goyangi (고양이)", it: "Gatto", ru: "Кот" } },
    { name: "Chien", image: "images/animaux/chien.png", category: "animaux", translations: { fr: "Chien", en: "Dog", es: "Perro", ja: "Inu (イヌ)", ko: "Gae (개)", it: "Cane", ru: "Собака" } },
    { name: "Oiseau", image: "images/animaux/oiseau.png", category: "animaux", translations: { fr: "Oiseau", en: "Bird", es: "Pájaro", ja: "Tori (トリ)", ko: "Sae (새)", it: "Uccello", ru: "Птица" } },
    { name: "Cheval", image: "images/animaux/cheval.png", category: "animaux", translations: { fr: "Cheval", en: "Horse", es: "Caballo", ja: "Uma (ウマ)", ko: "Mal (말)", it: "Cavallo", ru: "Лошадь" } },
    { name: "Cochon", image: "images/animaux/cochon.png", category: "animaux", translations: { fr: "Cochon", en: "Pig", es: "Cerdo", ja: "Buta (ブタ)", ko: "Dwaeji (돼지)", it: "Maiale", ru: "Свинья" } },
    { name: "Lapin", image: "images/animaux/lapin.png", category: "animaux", translations: { fr: "Lapin", en: "Rabbit", es: "Conejo", ja: "Usagi (ウサギ)", ko: "Tokki (토끼)", it: "Coniglio", ru: "Кролик" } },
    { name: "Tigre", image: "images/animaux/tigre.png", category: "animaux", translations: { fr: "Tigre", en: "Tiger", es: "Tigre", ja: "Tora (トラ)", ko: "Horangi (호랑이)", it: "Tigre", ru: "Тигр" } },
    { name: "Lion", image: "images/animaux/lion.png", category: "animaux", translations: { fr: "Lion", en: "Lion", es: "León", ja: "Raion (ライオン)", ko: "Saja (사자)", it: "Leone", ru: "Лев" } },
    { name: "Ours", image: "images/animaux/ours.png", category: "animaux", translations: { fr: "Ours", en: "Bear", es: "Oso", ja: "Kuma (クマ)", ko: "Gom (곰)", it: "Orso", ru: "Медведь" } },
    { name: "Loup", image: "images/animaux/loup.png", category: "animaux", translations: { fr: "Loup", en: "Wolf", es: "Lobo", ja: "Ookami (オオカミ)", ko: "Neukdae (늑대)", it: "Lupo", ru: "Волк" } },
    { name: "Panda", image: "images/animaux/panda.png", category: "animaux", translations: { fr: "Panda", en: "Panda", es: "Panda", ja: "Panda (パンダ)", ko: "Panda (판다)", it: "Panda", ru: "Панда" } },
    { name: "Poisson", image: "images/animaux/poisson.png", category: "animaux", translations: { fr: "Poisson", en: "Fish", es: "Pez", ja: "Sakana (サカナ)", ko: "Mulgogi (물고기)", it: "Pesce", ru: "Рыба" } },
    { name: "Serpent", image: "images/animaux/serpent.png", category: "animaux", translations: { fr: "Serpent", en: "Snake", es: "Serpiente", ja: "Hebi (ヘビ)", ko: "Baem (뱀)", it: "Serpente", ru: "Змея" } },
    { name: "Crocodile", image: "images/animaux/crocodile.png", category: "animaux", translations: { fr: "Crocodile", en: "Crocodile", es: "Cocodrilo", ja: "Wani (ワニ)", ko: "Ageo (악어)", it: "Coccodrillo", ru: "Крокодил" } },
    { name: "Grenouille", image: "images/animaux/grenouille.png", category: "animaux", translations: { fr: "Grenouille", en: "Frog", es: "Rana", ja: "Kaeru (カエル)", ko: "Gaeguri (개구리)", it: "Rana", ru: "Лягушка" } },
    { name: "Girafe", image: "images/animaux/girafe.png", category: "animaux", translations: { fr: "Girafe", en: "Giraffe", es: "Jirafa", ja: "Kirin (キリン)", ko: "Girin (기린)", it: "Giraffa", ru: "Жираф" } },
    { name: "Zèbre", image: "images/animaux/zebre.png", category: "animaux", translations: { fr: "Zèbre", en: "Zebra", es: "Cebra", ja: "Shimauma (シマウマ)", ko: "Eollukmal (얼룩말)", it: "Zebra", ru: "Зебра" } },
    { name: "Éléphant", image: "images/animaux/elephant.png", category: "animaux", translations: { fr: "Éléphant", en: "Elephant", es: "Elefante", ja: "Zou (ゾウ)", ko: "Kokkiri (코끼리)", it: "Elefante", ru: "Слон" } },
    { name: "Renard", image: "images/animaux/renard.png", category: "animaux", translations: { fr: "Renard", en: "Fox", es: "Zorro", ja: "Kitsune (キツネ)", ko: "Yeou (여우)", it: "Volpe", ru: "Лиса" } },
    { name: "Poule", image: "images/animaux/poule.png", category: "animaux", translations: { fr: "Poule", en: "Chicken", es: "Gallina", ja: "Niwatori (ニワトリ)", ko: "Dak (닭)", it: "Gallina", ru: "Курица" } },
    { name: "Perroquet", image: "images/animaux/perroquet.png", category: "animaux", translations: { fr: "Perroquet", en: "Parrot", es: "Loro", ja: "Oumu (オウム)", ko: "Aengmusa (앵무새)", it: "Pappagallo", ru: "Попугай" } },
    { name: "Koala", image: "images/animaux/koala.png", category: "animaux", translations: { fr: "Koala", en: "Koala", es: "Koala", ja: "Koara (コアラ)", ko: "Koala (코알라)", it: "Koala", ru: "Коала" } },
    { name: "Singe", image: "images/animaux/singe.png", category: "animaux", translations: { fr: "Singe", en: "Monkey", es: "Mono", ja: "Saru (サル)", ko: "Wonsungi (원숭이)", it: "Scimmia", ru: "Обезьяна" } },
    { name: "Vache", image: "images/animaux/vache.png", category: "animaux", translations: { fr: "Vache", en: "Cow", es: "Vaca", ja: "Ushi (ウシ)", ko: "So (소)", it: "Mucca", ru: "Корова" } },
    { name: "Souris", image: "images/animaux/souris.png", category: "animaux", translations: { fr: "Souris", en: "Mouse", es: "Ratón", ja: "Nezumi (ネズミ)", ko: "Jwi (쥐)", it: "Topo", ru: "Мышь" } },
    
    // Couleurs
    { name: "Rouge", color: "#e74c3c", category: "couleurs", translations: { fr: "Rouge", en: "Red", es: "Rojo", ja: "Aka (アカ)", ko: "Ppalgansaek (빨간색)", it: "Rosso", ru: "Красный" } },
    { name: "Bleu", color: "#3498db", category: "couleurs", translations: { fr: "Bleu", en: "Blue", es: "Azul", ja: "Ao (アオ)", ko: "Paransaek (파란색)", it: "Blu", ru: "Синий" } },
    { name: "Vert", color: "#2ecc71", category: "couleurs", translations: { fr: "Vert", en: "Green", es: "Verde", ja: "Midori (ミドリ)", ko: "Chokrok (초록)", it: "Verde", ru: "Зелёный" } },
    { name: "Jaune", color: "#f1c40f", category: "couleurs", translations: { fr: "Jaune", en: "Yellow", es: "Amarillo", ja: "Kiiro (キイロ)", ko: "Noransaek (노란색)", it: "Giallo", ru: "Жёлтый" } },
    { name: "Orange", color: "#e67e22", category: "couleurs", translations: { fr: "Orange", en: "Orange", es: "Naranja", ja: "Orenji (オレンジ)", ko: "Juhwangsaek (주황색)", it: "Arancione", ru: "Оранжевый" } },
    { name: "Violet", color: "#9b59b6", category: "couleurs", translations: { fr: "Violet", en: "Purple", es: "Morado", ja: "Murasaki (ムラサキ)", ko: "Borasaek (보라색)", it: "Viola", ru: "Фиолетовый" } },
    { name: "Rose", color: "#ff69b4", category: "couleurs", translations: { fr: "Rose", en: "Pink", es: "Rosa", ja: "Pinku (ピンク)", ko: "Bunhongsaek (분홍색)", it: "Rosa", ru: "Розовый" } },
    { name: "Noir", color: "#000000", category: "couleurs", translations: { fr: "Noir", en: "Black", es: "Negro", ja: "Kuro (クロ)", ko: "Geomsaek (검정)", it: "Nero", ru: "Чёрный" } },
    { name: "Blanc", color: "#ecf0f1", category: "couleurs", translations: { fr: "Blanc", en: "White", es: "Blanco", ja: "Shiro (シロ)", ko: "Hinsaek (흰색)", it: "Bianco", ru: "Белый" } },
    { name: "Marron", color: "#8b4513", category: "couleurs", translations: { fr: "Marron", en: "Brown", es: "Marrón", ja: "Chairo (チャイロ)", ko: "Galsaek (갈색)", it: "Marrone", ru: "Коричневый" } },
];

const CATEGORY_LABELS = {
    fr: { animaux: "Animaux", couleurs: "Couleurs", all: "Tout" },
    en: { animaux: "Animals", couleurs: "Colors", all: "All" },
    es: { animaux: "Animales", couleurs: "Colores", all: "Todo" },
    ja: { animaux: "動物", couleurs: "色", all: "すべて" },
    ko: { animaux: "동물", couleurs: "색깔", all: "모두" },
    it: { animaux: "Animali", couleurs: "Colori", all: "Tutto" },
    ru: { animaux: "Животные", couleurs: "Цвета", all: "Все" }
};

const cardsContainer = document.getElementById('cards-container');
const btnApprentissage = document.getElementById('btn-apprentissage');
const btnJeu = document.getElementById('btn-jeu');
const instructionText = document.getElementById('instruction');
const btnRejouer = document.getElementById('btn-rejouer');
const statsContainer = document.getElementById('stats-container');
const scoreValue = document.getElementById('score-value');
const roundValue = document.getElementById('round-value');
const langSelect = document.getElementById('lang-select');
const categorySelect = document.getElementById('category-select');
const categoryContainer = document.getElementById('category-container');

let currentMode = 'apprentissage';
let currentLang = 'fr';
let currentCategory = 'animaux';
let currentGameItems = [];
let targetAnimal = null;
let isGameActive = false;
let score = 0;
let currentRound = 1;
const MAX_ROUNDS = 10;
const WINNING_SCORE = 10;

const SPEECH_LANG_CODES = {
    fr: 'fr-FR',
    en: 'en-US',
    es: 'es-ES',
    ja: 'ja-JP',
    ko: 'ko-KR',
    it: 'it-IT',
    ru: 'ru-RU'
};

const UI_TEXTS = {
    fr: { click: "Clique sur une carte pour entendre le nom !", find: "Trouve : ", find_speak: "Trouve ", good: "Bonne réponse !", bad: "Mauvaise réponse !", win: "Bravo ! ", lose: "Partie terminée !", score: "Score final", restart: "Recommencer" },
    en: { click: "Click on a card to hear the name!", find: "Find: ", find_speak: "Find the ", good: "Good answer!", bad: "Wrong!", win: "Congrats!", lose: "Game over!", score: "Final score", restart: "Restart" },
    es: { click: "¡Haz clic en una carta para escuchar el nombre!", find: "Encuentra: ", find_speak: "Encuentra ", good: "¡Buena respuesta!", bad: "¡Respuesta incorrecta!", win: "¡Bravo!", lose: "¡Juego terminado!", score: "Puntaje final", restart: "Reiniciar" },
    ja: { click: "カードをクリックして名前を聞こう！", find: "探して：", find_speak: "を探して", good: "正解！", bad: "不正解！", win: "おめでとう！", lose: "ゲームオーバー！", score: "最終スコア", restart: "リスタート" },
    ko: { click: "카드를 클릭하여 이름을 들어보세요!", find: "찾으세요: ", find_speak: "를 찾으세요 ", good: "정답입니다!", bad: "오답입니다!", win: "축하합니다!", lose: "게임 종료!", score: "최종 점수", restart: "다시 시작" },
    it: { click: "Clicca su una carta per sentire il nome!", find: "Trova: ", find_speak: "Trova ", good: "Risposta corretta!", bad: "Risposta sbagliata!", win: "Bravo!", lose: "Partita finita!", score: "Punteggio finale", restart: "Ricomincia" },
    ru: { click: "Нажмите на карту, чтобы услышать название!", find: "Найди: ", find_speak: "Найди ", good: "Правильно!", bad: "Неправильно!", win: "Поздравляем!", lose: "Игра окончена!", score: "Финальный счет", restart: "Начать заново" }
};

function init() {
    updateCategoryLabels();
    setMode('apprentissage');
    
    if (btnApprentissage) {
        btnApprentissage.addEventListener('click', () => setMode('apprentissage'));
    }
    if (btnJeu) {
        btnJeu.addEventListener('click', () => setMode('jeu'));
    }
    if (btnRejouer) {
        btnRejouer.addEventListener('click', () => {
            score = 0;
            currentRound = 1;
            updateStatsDisplay();
            startNewRound();
        });
    }
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateCategoryLabels();
            if (currentMode === 'jeu') {
                score = 0;
                currentRound = 1;
                updateStatsDisplay();
                startNewRound();
            } else {
                updateInstructionText();
                resetCards();
            }
        });
    }
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            if (currentMode === 'jeu') {
                score = 0;
                currentRound = 1;
                updateStatsDisplay();
                startNewRound();
            } else {
                resetCards();
            }
        });
    }
}

function updateCategoryLabels() {
    if (categorySelect) {
        const options = categorySelect.querySelectorAll('option');
        options.forEach(opt => {
            const val = opt.value;
            if (CATEGORY_LABELS[currentLang] && CATEGORY_LABELS[currentLang][val]) {
                opt.textContent = CATEGORY_LABELS[currentLang][val];
            }
        });
    }
}

function speak(text) {
    window.speechSynthesis.cancel();
    const textToSpeak = text.replace(/\s*\(.*?\)\s*/g, "");
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = SPEECH_LANG_CODES[currentLang] || 'fr-FR';
    utterance.rate = 1.1;
    window.speechSynthesis.speak(utterance);
}

function updateInstructionText() {
    if (currentMode === 'apprentissage') {
        instructionText.textContent = UI_TEXTS[currentLang].click;
    }
}

function setMode(mode) {
    currentMode = mode;
    isGameActive = false;
    
    if (mode === 'apprentissage') {
        cardsContainer.classList.remove('hide-names');
        cardsContainer.classList.remove('game-grid-3x3');
        
        if (btnApprentissage) btnApprentissage.classList.add('active');
        if (btnJeu) btnJeu.classList.remove('active');
        
        if (categoryContainer) categoryContainer.style.display = 'flex';
        
        updateInstructionText();
        instructionText.style.display = 'block';
        
        btnRejouer.style.display = 'none';
        statsContainer.style.display = 'none';
        
        resetCards();
    } else {
        cardsContainer.classList.add('hide-names');
        cardsContainer.classList.add('game-grid-3x3');
        
        if (btnJeu) btnJeu.classList.add('active');
        if (btnApprentissage) btnApprentissage.classList.remove('active');
        
        score = 0;
        currentRound = 1;
        updateStatsDisplay();
        statsContainer.style.display = 'block';
        instructionText.style.display = 'block';
        
        btnRejouer.style.display = 'none';
        startNewRound();
    }
}

function updateStatsDisplay() {
    if (scoreValue) scoreValue.textContent = score;
    if (roundValue) roundValue.textContent = currentRound;
}

function getArticlePrefix(lang, word) {
    const firstChar = word.charAt(0).toLowerCase();
    const lastChar = word.slice(-1).toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê'];

    if (lang === 'fr') {
        if (vowels.includes(firstChar)) return "l'";
        const fem = ["Grenouille", "Girafe", "Poule", "Vache", "Souris"];
        if (fem.includes(word)) return "la ";
        return "le ";
    }
    if (lang === 'es') {
        if (word === "Serpiente" || lastChar === 'a') return "la ";
        return "el ";
    }
    if (lang === 'it') {
        if (vowels.includes(firstChar)) return "l'";
        const fem = ["Tigre", "Zebra", "Volpe", "Mucca", "Scimmia", "Rana", "Giraffa", "Gallina"];
        if (fem.includes(word) || lastChar === 'a') return "la ";
        return "il ";
    }
    return "";
}

function startNewRound() {
    if (currentRound > MAX_ROUNDS) {
        endGame();
        return;
    }

    resetCards();
    isGameActive = true;
    
    const randomIndex = Math.floor(Math.random() * currentGameItems.length);
    targetAnimal = currentGameItems[randomIndex];
    
    const animalName = targetAnimal.translations[currentLang];
    
    instructionText.textContent = `${UI_TEXTS[currentLang].find}${animalName} !`;
    btnRejouer.style.display = 'none';
    cardsContainer.style.pointerEvents = 'auto';
    
    setTimeout(() => {
        const nameToSpeak = animalName.replace(/\s*\(.*?\)\s*/g, "");
        if (currentLang === 'ja' || currentLang === 'ko') {
            speak(`${nameToSpeak} ${UI_TEXTS[currentLang].find_speak}`);
        } else {
            const prefix = getArticlePrefix(currentLang, animalName);
            speak(`${UI_TEXTS[currentLang].find_speak}${prefix}${nameToSpeak}`);
        }
    }, 500);
}

function endGame() {
    isGameActive = false;
    cardsContainer.style.pointerEvents = 'none';
    
    let message = "";
    if (score >= 6) {
        message = `${UI_TEXTS[currentLang].win} ${score}/${MAX_ROUNDS}`;
        instructionText.textContent = message;
        confettiEffect();
    } else {
        message = `${UI_TEXTS[currentLang].lose} ${score}/${MAX_ROUNDS}`;
        instructionText.textContent = message;
    }
    
    speak(message);
    btnRejouer.style.display = 'inline-block';
    btnRejouer.textContent = UI_TEXTS[currentLang].restart;
}

function handleCardClick(item, cardElement) {
    const itemName = item.translations[currentLang];

    if (currentMode === 'apprentissage') {
        speak(itemName);
        animateCard(cardElement, 'pulse');
    } else if (currentMode === 'jeu' && isGameActive) {
        if (cardElement.classList.contains('correct') || cardElement.classList.contains('wrong')) return;

        if (item.name === targetAnimal.name) {
            isGameActive = false;
            cardElement.classList.add('correct');
            animateCard(cardElement, 'bounce');
            speak(UI_TEXTS[currentLang].good);
            score++;
            updateStatsDisplay();

            setTimeout(() => {
                currentRound++;
                if (currentRound <= MAX_ROUNDS) {
                    updateStatsDisplay();
                }
                startNewRound();
            }, 2000);

        } else {
            cardElement.classList.add('wrong');
            animateCard(cardElement, 'shake');
            speak(UI_TEXTS[currentLang].bad);
            
            const correctCard = Array.from(cardsContainer.children).find(card => 
                card.dataset.name === targetAnimal.name
            );
            
            if (correctCard) {
                correctCard.classList.add('correct');
            }

            instructionText.textContent = `${UI_TEXTS[currentLang].bad}`;
            
            isGameActive = false;
            setTimeout(() => {
                currentRound++;
                if (currentRound <= MAX_ROUNDS) {
                    updateStatsDisplay();
                }
                startNewRound();
            }, 3000);
        }
    }
}

function animateCard(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
    element.classList.add(animationClass);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function resetCards() {
    cardsContainer.innerHTML = '';
    
    let filteredItems;
    
    if (currentCategory === 'all') {
        filteredItems = [...vocabulary];
    } else {
        filteredItems = vocabulary.filter(item => item.category === currentCategory);
    }
    
    if (currentMode === 'jeu') {
        shuffleArray(filteredItems);
        currentGameItems = filteredItems.slice(0, 9);
    } else {
        currentGameItems = filteredItems;
    }
    
    currentGameItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.name = item.name;
        
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            card.appendChild(img);
        } else if (item.color) {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = item.color;
            card.appendChild(colorBox);
        }
        
        const name = document.createElement('p');
        name.textContent = item.translations[currentLang];
        
        card.appendChild(name);
        card.addEventListener('click', () => handleCardClick(item, card));
        cardsContainer.appendChild(card);
    });
}

function confettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da', '#fcbad3', '#a8d8ea', '#ffd93d', '#6bcb77'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 6;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.8;
        const startX = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 200;
        
        confetti.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${startX}vw;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            pointer-events: none;
            z-index: 9999;
            opacity: 1;
        `;
        document.body.appendChild(confetti);
        
        const startTime = performance.now() + delay * 1000;
        const endY = window.innerHeight + 50;
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            if (elapsed < 0) {
                requestAnimationFrame(animate);
                return;
            }
            
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const y = progress * endY;
            const x = drift * progress + Math.sin(progress * 10) * 30;
            const rotation = progress * 720;
            const opacity = 1 - progress * 0.5;
            
            confetti.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg)`;
            confetti.style.opacity = opacity;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        }
        
        requestAnimationFrame(animate);
    }
}

init();
