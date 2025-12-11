const vocabulary = [
    { name: "Chat", image: "images/chat.png", category: "animaux" },
    { name: "Chien", image: "images/chien.png", category: "animaux" },
    { name: "Oiseau", image: "images/oiseau.png", category: "animaux" },
    { name: "Cheval", image: "images/cheval.png", category: "animaux" },
    { name: "Cochon", image: "images/cochon.png", category: "animaux" },
    { name: "Lapin", image: "images/lapin.png", category: "animaux" },
    { name: "Tigre", image: "images/tigre.png", category: "animaux" },
    { name: "Lion", image: "images/lion.png", category: "animaux" },
    { name: "Ours", image: "images/ours.png", category: "animaux" },
    { name: "Loup", image: "images/loup.png", category: "animaux" },
    { name: "Panda", image: "images/panda.png", category: "animaux" },
    { name: "Poisson", image: "images/poisson.png", category: "animaux" },
    { name: "Serpent", image: "images/serpent.png", category: "animaux" },
    { name: "Crocodile", image: "images/crocodile.png", category: "animaux" },
    { name: "Grenouille", image: "images/grenouille.png", category: "animaux" },
    { name: "Girafe", image: "images/girafe.png", category: "animaux" },
    { name: "Zèbre", image: "images/zebre.png", category: "animaux" },
    { name: "Éléphant", image: "images/elephant.png", category: "animaux" },
    { name: "Renard", image: "images/renard.png", category: "animaux" },
    { name: "Poule", image: "images/poule.png", category: "animaux" },
    { name: "Perroquet", image: "images/perroquet.png", category: "animaux" },
];

const cardsContainer = document.getElementById('cards-container');
const btnApprentissage = document.getElementById('btn-apprentissage');
const btnJeu = document.getElementById('btn-jeu');
const instructionText = document.getElementById('instruction');
const btnRejouer = document.getElementById('btn-rejouer');
const statsContainer = document.getElementById('stats-container');
const scoreValue = document.getElementById('score-value');
const roundValue = document.getElementById('round-value');
// Removed categorySelect

let currentMode = 'apprentissage'; 
let currentCategory = 'animaux'; // Default and only category now
let currentGameItems = []; 
let targetAnimal = null;
let isGameActive = false;
let score = 0;
let currentRound = 1;
const MAX_ROUNDS = 10;
const WINNING_SCORE = 10;

function init() {
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
    // Removed category select listener
}

function speak(text) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = 'fr-FR';
    utterance.rate = 1.1;    
    window.speechSynthesis.speak(utterance);
}

function setMode(mode) {
    currentMode = mode;
    isGameActive = false;
    
    if (mode === 'apprentissage') {
        cardsContainer.classList.remove('hide-names');
        cardsContainer.classList.remove('game-grid-3x3'); 
        
        if (btnApprentissage) btnApprentissage.classList.add('active');
        if (btnJeu) btnJeu.classList.remove('active');
        
        instructionText.textContent = "Clique sur une carte pour entendre le nom !";
        instructionText.style.display = 'block';
        
        btnRejouer.style.display = 'none';
        statsContainer.style.display = 'none';
        
        // Removed category select display logic
        
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
        
        // Removed category select display logic
        
        btnRejouer.style.display = 'none'; 
        startNewRound();
    }
}

function updateStatsDisplay() {
    if (scoreValue) scoreValue.textContent = score;
    if (roundValue) roundValue.textContent = currentRound;
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
    
    instructionText.textContent = `Trouve : ${targetAnimal.name} !`;
    btnRejouer.style.display = 'none';
    cardsContainer.style.pointerEvents = 'auto'; 
    
    setTimeout(() => {
        speak(`Trouve le ${targetAnimal.name}`);
    }, 500);
}

function endGame() {
    isGameActive = false;
    cardsContainer.style.pointerEvents = 'none'; 
    
    let message = "";
    if (score >= WINNING_SCORE) {
         message = "Bravo ! Tu as gagné la partie !";
         instructionText.textContent = "Bravo ! Tu as gagné !";
         confettiEffect();
    } else {
         message = `Partie terminée ! Score final : ${score} sur ${MAX_ROUNDS}.`;
         instructionText.textContent = `Partie terminée ! Score : ${score}/${MAX_ROUNDS}`;
    }
    
    speak(message);
    btnRejouer.style.display = 'inline-block';
    btnRejouer.textContent = "Recommencer une partie";
}

function handleCardClick(item, cardElement) {
    if (currentMode === 'apprentissage') {
        speak(item.name);
        animateCard(cardElement, 'pulse');
    } else if (currentMode === 'jeu' && isGameActive) {
        
        if (cardElement.classList.contains('correct') || cardElement.classList.contains('wrong')) return;

        if (item.name === targetAnimal.name) {
            isGameActive = false; 
            cardElement.classList.add('correct');
            animateCard(cardElement, 'bounce');
            speak("Bonne réponse !");
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
            speak("Mauvaise réponse !");
            instructionText.textContent = "Mauvaise réponse !";
            isGameActive = false;
            setTimeout(() => {
                currentRound++;
                if (currentRound <= MAX_ROUNDS) {
                    updateStatsDisplay();
                }
                startNewRound();
            }, 2000);
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
    
    // Always use all vocabulary items since we removed categories
    let filteredItems = vocabulary; 
    
    if (currentMode === 'jeu') {
        shuffleArray(filteredItems);
        currentGameItems = filteredItems.slice(0, 9);
    } else {
        currentGameItems = filteredItems;
    }
    
    currentGameItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        
        const name = document.createElement('p');
        name.textContent = item.name;
        
        card.appendChild(img);
        card.appendChild(name);
        
        card.addEventListener('click', () => handleCardClick(item, card));
        
        cardsContainer.appendChild(card);
    });
}

function confettiEffect() {
}

init();
