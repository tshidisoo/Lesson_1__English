// Game Data
const gameData = {
    score: 0,
    level: 1,
    soundEnabled: true,
    currentGame: null,
    
    // Fill in the Blanks Game
    fillBlanks: {
        questions: [
            { sentence: "She _____ (work) at a hospital.", answer: "works" },
            { sentence: "I _____ (play) soccer every weekend.", answer: "play" },
            { sentence: "They _____ (study) English at school.", answer: "study" },
            { sentence: "He _____ (watch) TV in the evening.", answer: "watches" },
            { sentence: "We _____ (go) to the beach in summer.", answer: "go" },
            { sentence: "The cat _____ (sleep) all day.", answer: "sleeps" },
            { sentence: "You _____ (teach) mathematics.", answer: "teach" },
            { sentence: "The sun _____ (rise) in the east.", answer: "rises" },
            { sentence: "My sister _____ (brush) her teeth twice a day.", answer: "brushes" },
            { sentence: "They _____ (wash) the dishes after dinner.", answer: "wash" },
            { sentence: "The baby _____ (cry) when hungry.", answer: "cries" },
            { sentence: "He _____ (fix) cars for a living.", answer: "fixes" },
            { sentence: "The leaves _____ (change) color in autumn.", answer: "change" },
            { sentence: "My mother _____ (cook) dinner every night.", answer: "cooks" },
            { sentence: "We _____ (catch) the bus at 8:00 AM.", answer: "catch" }
        ],
        currentQuestion: 0
    },
    
    // Choose Correct Form Game
    correctForm: {
        questions: [
            {
                question: "He (play) soccer every weekend.",
                options: ["play", "plays", "playing", "played"],
                answer: "plays"
            },
            {
                question: "They (study) hard for their exams.",
                options: ["study", "studies", "studying", "studied"],
                answer: "study"
            },
            {
                question: "She (watch) TV after dinner.",
                options: ["watch", "watches", "watching", "watched"],
                answer: "watches"
            },
            {
                question: "I (go) to work by bus.",
                options: ["go", "goes", "going", "gone"],
                answer: "go"
            },
            {
                question: "The dog (bark) at strangers.",
                options: ["bark", "barks", "barking", "barked"],
                answer: "barks"
            },
            {
                question: "We (live) in a small apartment.",
                options: ["live", "lives", "living", "lived"],
                answer: "live"
            },
            {
                question: "The children (play) in the park.",
                options: ["play", "plays", "playing", "played"],
                answer: "play"
            },
            {
                question: "Water (boil) at 100 degrees Celsius.",
                options: ["boil", "boils", "boiling", "boiled"],
                answer: "boils"
            },
            {
                question: "My brother (work) at a bank.",
                options: ["work", "works", "working", "worked"],
                answer: "works"
            },
            {
                question: "You (speak) French fluently.",
                options: ["speak", "speaks", "speaking", "spoke"],
                answer: "speak"
            },
            {
                question: "The train (leave) at 9 AM every day.",
                options: ["leave", "leaves", "leaving", "left"],
                answer: "leaves"
            },
            {
                question: "Cats (love) to sleep in the sun.",
                options: ["love", "loves", "loving", "loved"],
                answer: "love"
            }
        ],
        currentQuestion: 0
    },
    
    // Form a Sentence Game
    formSentence: {
        sentences: [
            {
                words: ["She", "works", "as", "a", "doctor", "in", "the", "hospital"],
                solution: "She works as a doctor in the hospital"
            },
            {
                words: ["My", "brother", "plays", "basketball", "every", "Saturday"],
                solution: "My brother plays basketball every Saturday"
            },
            {
                words: ["They", "study", "English", "at", "school", "twice", "a", "week"],
                solution: "They study English at school twice a week"
            },
            {
                words: ["The", "sun", "rises", "in", "the", "east", "every", "morning"],
                solution: "The sun rises in the east every morning"
            },
            {
                words: ["I", "brush", "my", "teeth", "every", "morning", "and", "night"],
                solution: "I brush my teeth every morning and night"
            },
            {
                words: ["He", "watches", "TV", "after", "dinner"],
                solution: "He watches TV after dinner"
            },
            {
                words: ["We", "go", "to", "the", "beach", "in", "summer"],
                solution: "We go to the beach in summer"
            },
            {
                words: ["She", "never", "eats", "fast", "food"],
                solution: "She never eats fast food"
            },
            {
                words: ["The", "shops", "open", "at", "9", "AM", "and", "close", "at", "6", "PM"],
                solution: "The shops open at 9 AM and close at 6 PM"
            },
            {
                words: ["They", "always", "help", "their", "neighbors"],
                solution: "They always help their neighbors"
            }
        ],
        currentSentence: 0
    },
    
    // Quiz Game
    quiz: {
        questions: [
            {
                question: "Which sentence uses the Simple Present Tense correctly?",
                options: [
                    "She working at a hospital.",
                    "She works at a hospital.",
                    "She is work at a hospital.",
                    "She worked at a hospital."
                ],
                answer: "She works at a hospital.",
                explanation: "For third-person singular (she), we add -s to the base verb (work → works)."
            },
            {
                question: "When do we use Simple Present Tense?",
                options: [
                    "To describe actions happening now",
                    "To describe actions that happened in the past",
                    "To describe habits, routines, and general truths",
                    "To describe future plans"
                ],
                answer: "To describe habits, routines, and general truths",
                explanation: "Simple Present Tense is used for habits, daily routines, general truths, and permanent situations."
            },
            {
                question: "Which is the correct negative form of: 'She works at a hospital'?",
                options: [
                    "She not works at a hospital.",
                    "She don't work at a hospital.",
                    "She doesn't works at a hospital.",
                    "She doesn't work at a hospital."
                ],
                answer: "She doesn't work at a hospital.",
                explanation: "In negative form with 'does not/doesn't', we use the base form of the verb without -s/-es."
            },
            {
                question: "What is the correct spelling rule for a verb ending in -y after a consonant?",
                options: [
                    "Add -s (study → studys)",
                    "Change -y to -i and add -es (study → studies)",
                    "Just add -es (study → studyes)",
                    "Keep it as is (study → study)"
                ],
                answer: "Change -y to -i and add -es (study → studies)",
                explanation: "For verbs ending in consonant + -y, we change -y to -i and add -es."
            },
            {
                question: "Which verb form is correct for 'I'?",
                options: [
                    "I plays tennis.",
                    "I play tennis.",
                    "I playing tennis.",
                    "I am play tennis."
                ],
                answer: "I play tennis.",
                explanation: "For the subject 'I', we use the base form of the verb without adding -s/-es."
            },
            {
                question: "Which sentence shows the correct question form in Simple Present?",
                options: [
                    "Work he at a school?",
                    "Does he work at a school?",
                    "Do he works at a school?",
                    "Does he works at a school?"
                ],
                answer: "Does he work at a school?",
                explanation: "For questions with he/she/it, we use 'Does' + subject + base verb (without -s/-es)."
            },
            {
                question: "What is the correct form of the verb 'fix' with 'she'?",
                options: [
                    "She fix cars.",
                    "She fixs cars.",
                    "She fixes cars.",
                    "She fixing cars."
                ],
                answer: "She fixes cars.",
                explanation: "For verbs ending in -x, we add -es with third-person singular subjects."
            },
            {
                question: "Which sentence uses the Simple Present correctly to express a general truth?",
                options: [
                    "The Earth is orbiting the Sun.",
                    "The Earth orbit the Sun.",
                    "The Earth orbits the Sun.",
                    "The Earth will orbit the Sun."
                ],
                answer: "The Earth orbits the Sun.",
                explanation: "Simple Present is used for general truths, and with 'The Earth' (it), we add -s to the verb."
            },
            {
                question: "For which subject do we NOT add -s/-es to the verb?",
                options: [
                    "He",
                    "They",
                    "She",
                    "It"
                ],
                answer: "They",
                explanation: "We don't add -s/-es for plural subjects like 'they' (also I, you, we)."
            },
            {
                question: "Which sentence shows the correct use of adverbs of frequency in Simple Present?",
                options: [
                    "She always go to bed early.",
                    "Always she goes to bed early.",
                    "She goes always to bed early.",
                    "She always goes to bed early."
                ],
                answer: "She always goes to bed early.",
                explanation: "Adverbs of frequency usually come before the main verb, and with 'she' we add -s to the verb."
            }
        ],
        currentQuestion: 0,
        totalAnswered: 0
    }
};

// Audio effects
const audio = {
    correct: new Audio('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'),
    incorrect: new Audio('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'),
    levelComplete: new Audio('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'),
    click: new Audio('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'),
    
    play: function(sound) {
        if (gameData.soundEnabled) {
            this[sound].play();
        }
    }
};

// Helper Functions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateScore(points) {
    gameData.score += points;
    domElements.score.textContent = gameData.score;
}

function updateLevel() {
    gameData.level++;
    domElements.level.textContent = gameData.level;
}

function showScreen(screenId) {
    // Hide all screens
    domElements.homeScreen.classList.remove('active');
    domElements.fillBlanksGame.classList.remove('active');
    domElements.correctFormGame.classList.remove('active');
    domElements.formSentenceGame.classList.remove('active');
    domElements.quizGame.classList.remove('active');
    
    // Show the requested screen
    document.getElementById(screenId).classList.add('active');
}

function showFeedback(element, message, isSuccess) {
    element.textContent = message;
    element.className = 'feedback ' + (isSuccess ? 'success' : 'error');
    
    // Clear feedback after 3 seconds
    setTimeout(() => {
        element.textContent = '';
        element.className = 'feedback';
    }, 3000);
}

function showLevelCompleteModal() {
    domElements.levelScore.textContent = gameData.score;
    
    // Determine feedback based on score
    let feedback;
    if (gameData.score >= 90) {
        feedback = "Excellent! You're a Simple Present Tense master!";
    } else if (gameData.score >= 70) {
        feedback = "Great job! You've got a good grasp of Simple Present Tense.";
    } else if (gameData.score >= 50) {
        feedback = "Good effort! Keep practicing to improve your Simple Present Tense skills.";
    } else {
        feedback = "You're making progress! Let's review the rules and try again.";
    }
    
    domElements.levelFeedback.textContent = feedback;
    domElements.levelComplete.style.display = 'flex';
    
    audio.play('levelComplete');
}

// Initialize Game Functions
function initFillBlanksGame() {
    const game = gameData.fillBlanks;
    game.currentQuestion = 0;
    
    // Shuffle questions for this round
    shuffle(game.questions);
    
    // Display first question
    domElements.fillBlankSentence.textContent = game.questions[0].sentence;
    domElements.fillBlankAnswer.value = '';
    domElements.nextFillBlank.disabled = true;
    domElements.fillBlankFeedback.textContent = '';
    domElements.fillBlankFeedback.className = 'feedback';
}

function initCorrectFormGame() {
    const game = gameData.correctForm;
    game.currentQuestion = 0;
    
    // Shuffle questions for this round
    shuffle(game.questions);
    
    // Display first question
    const question = game.questions[0];
    domElements.correctFormQuestion.innerHTML = `Choose the correct form for: <span class="highlight">${question.question}</span>`;
    
    // Create option buttons
    domElements.correctFormOptions.innerHTML = '';
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.addEventListener('click', () => selectOption(option));
        domElements.correctFormOptions.appendChild(btn);
    });
    
    domElements.nextCorrectForm.disabled = true;
    domElements.correctFormFeedback.textContent = '';
    domElements.correctFormFeedback.className = 'feedback';
}

function initFormSentenceGame() {
    const game = gameData.formSentence;
    game.currentSentence = 0;
    
    // Shuffle sentences for this round
    shuffle(game.sentences);
    
    // Display first sentence
    displaySentenceWords(game.sentences[0].words);
    
    domElements.nextSentence.disabled = true;
    domElements.formSentenceFeedback.textContent = '';
    domElements.formSentenceFeedback.className = 'feedback';
}

function initQuizGame() {
    const game = gameData.quiz;
    game.currentQuestion = 0;
    game.totalAnswered = 0;
    
    // Shuffle questions for this round
    shuffle(game.questions);
    
    // Display first question
    displayQuizQuestion(game.questions[0]);
    
    domElements.currentQuestionEl.textContent = '1';
    domElements.totalQuestionsEl.textContent = game.questions.length;
    domElements.nextQuiz.disabled = true;
    domElements.quizFeedback.textContent = '';
    domElements.quizFeedback.className = 'feedback';
}

// Game Logic Functions
function checkFillBlankAnswer() {
    const game = gameData.fillBlanks;
    const userAnswer = domElements.fillBlankAnswer.value.trim().toLowerCase();
    const correctAnswer = game.questions[game.currentQuestion].answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        showFeedback(domElements.fillBlankFeedback, "Correct! Great job!", true);
        updateScore(10);
        domElements.nextFillBlank.disabled = false;
        audio.play('correct');
    } else {
        showFeedback(domElements.fillBlankFeedback, `Incorrect. The correct answer is: ${correctAnswer}`, false);
        audio.play('incorrect');
    }
    
    domElements.submitFillBlank.disabled = true;
    
    // Enable next button or end game
    if (game.currentQuestion < game.questions.length - 1) {
        domElements.nextFillBlank.disabled = false;
    } else {
        setTimeout(showLevelCompleteModal, 1500);
    }
}

function nextFillBlankQuestion() {
    const game = gameData.fillBlanks;
    game.currentQuestion++;
    
    if (game.currentQuestion < game.questions.length) {
        domElements.fillBlankSentence.textContent = game.questions[game.currentQuestion].sentence;
        domElements.fillBlankAnswer.value = '';
        domElements.submitFillBlank.disabled = false;
        domElements.nextFillBlank.disabled = true;
    }
}

function selectOption(selectedOption) {
    const game = gameData.correctForm;
    const correctAnswer = game.questions[game.currentQuestion].answer;
    
    // Clear previously selected
    const options = domElements.correctFormOptions.querySelectorAll('.option-btn');
    options.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        if (btn.textContent === selectedOption) {
            btn.classList.add('selected');
            
            if (selectedOption === correctAnswer) {
                btn.classList.add('correct');
                showFeedback(domElements.correctFormFeedback, "Correct! Great job!", true);
                updateScore(10);
                audio.play('correct');
            } else {
                btn.classList.add('incorrect');
                // Also highlight the correct answer
                options.forEach(optBtn => {
                    if (optBtn.textContent === correctAnswer) {
                        optBtn.classList.add('correct');
                    }
                });
                showFeedback(domElements.correctFormFeedback, "Incorrect. Try again!", false);
                audio.play('incorrect');
            }
        }
    });
    
    // Enable next button or end game
    if (game.currentQuestion < game.questions.length - 1) {
        domElements.nextCorrectForm.disabled = false;
    } else {
        setTimeout(showLevelCompleteModal, 1500);
    }
}

function nextCorrectFormQuestion() {
    const game = gameData.correctForm;
    game.currentQuestion++;
    
    if (game.currentQuestion < game.questions.length) {
        const question = game.questions[game.currentQuestion];
        domElements.correctFormQuestion.innerHTML = `Choose the correct form for: <span class="highlight">${question.question}</span>`;
        
        // Create option buttons
        domElements.correctFormOptions.innerHTML = '';
        question.options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.className = 'option-btn';
            btn.addEventListener('click', () => selectOption(option));
            domElements.correctFormOptions.appendChild(btn);
        });
        
        domElements.nextCorrectForm.disabled = true;
        domElements.correctFormFeedback.textContent = '';
        domElements.correctFormFeedback.className = 'feedback';
    }
}

function displaySentenceWords(words) {
    // Clear both containers
    domElements.wordBank.innerHTML = '';
    domElements.sentenceConstruction.innerHTML = '';
    
    // Shuffle words and add to word bank
    const shuffledWords = [...words];
    shuffle(shuffledWords);
    
    shuffledWords.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word-item';
        wordElement.textContent = word;
        wordElement.draggable = true;
        wordElement.addEventListener('click', () => moveWord(wordElement));
        domElements.wordBank.appendChild(wordElement);
    });
}

function moveWord(wordElement) {
    // If word is in word bank, move to sentence construction
    if (wordElement.parentElement === domElements.wordBank) {
        domElements.sentenceConstruction.appendChild(wordElement);
    } 
    // If word is in sentence construction, move back to word bank
    else {
        domElements.wordBank.appendChild(wordElement);
    }
    
    audio.play('click');
}

function checkSentence() {
    const game = gameData.formSentence;
    const sentenceWords = Array.from(domElements.sentenceConstruction.querySelectorAll('.word-item')).map(el => el.textContent);
    const userSentence = sentenceWords.join(' ');
    const correctSentence = game.sentences[game.currentSentence].solution;
    
    if (userSentence === correctSentence) {
        showFeedback(domElements.formSentenceFeedback, "Correct! Perfect sentence!", true);
        updateScore(15);
        audio.play('correct');
        
        // Enable next button or end game
        if (game.currentSentence < game.sentences.length - 1) {
            domElements.nextSentence.disabled = false;
        } else {
            setTimeout(showLevelCompleteModal, 1500);
        }
    } else {
        showFeedback(domElements.formSentenceFeedback, "That's not quite right. Try rearranging the words.", false);
        audio.play('incorrect');
    }
}

function resetCurrentSentence() {
    const game = gameData.formSentence;
    displaySentenceWords(game.sentences[game.currentSentence].words);
}

function nextSentence() {
    const game = gameData.formSentence;
    game.currentSentence++;
    
    if (game.currentSentence < game.sentences.length) {
        displaySentenceWords(game.sentences[game.currentSentence].words);
        domElements.nextSentence.disabled = true;
        domElements.formSentenceFeedback.textContent = '';
        domElements.formSentenceFeedback.className = 'feedback';
    }
}

function displayQuizQuestion(question) {
    domElements.quizQuestion.innerHTML = `<p class="highlight">${question.question}</p>`;
    
    // Create option buttons
    domElements.quizOptions.innerHTML = '';
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.addEventListener('click', () => selectQuizOption(option));
        domElements.quizOptions.appendChild(btn);
    });
}

function selectQuizOption(selectedOption) {
    const game = gameData.quiz;
    const question = game.questions[game.currentQuestion];
    const correctAnswer = question.answer;
    
    // Clear previously selected
    const options = domElements.quizOptions.querySelectorAll('.option-btn');
    options.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        if (btn.textContent === selectedOption) {
            btn.classList.add('selected');
            
            if (selectedOption === correctAnswer) {
                btn.classList.add('correct');
                showFeedback(domElements.quizFeedback, `Correct! ${question.explanation}`, true);
                updateScore(15);
                audio.play('correct');
            } else {
                btn.classList.add('incorrect');
                // Also highlight the correct answer
                options.forEach(optBtn => {
                    if (optBtn.textContent === correctAnswer) {
                        optBtn.classList.add('correct');
                    }
                });
                showFeedback(domElements.quizFeedback, `Incorrect. ${question.explanation}`, false);
                audio.play('incorrect');
            }
        }
    });
    
    game.totalAnswered++;
    
    // Enable next button or end game
    if (game.currentQuestion < game.questions.length - 1) {
        domElements.nextQuiz.disabled = false;
    } else {
        setTimeout(showLevelCompleteModal, 2000);
    }
}

function nextQuizQuestion() {
    const game = gameData.quiz;
    game.currentQuestion++;
    
    if (game.currentQuestion < game.questions.length) {
        displayQuizQuestion(game.questions[game.currentQuestion]);
        domElements.currentQuestionEl.textContent = game.currentQuestion + 1;
        domElements.nextQuiz.disabled = true;
        domElements.quizFeedback.textContent = '';
        domElements.quizFeedback.className = 'feedback';
    }
}

// DOM Elements
const domElements = {
    // General elements
    score: document.getElementById("score"),
    level: document.getElementById("level"),
    
    // Screens
    homeScreen: document.getElementById("home-screen"),
    fillBlanksGame: document.getElementById("fill-blanks-game"),
    correctFormGame: document.getElementById("correct-form-game"),
    formSentenceGame: document.getElementById("form-sentence-game"),
    quizGame: document.getElementById("quiz-game"),
    
    // Fill in the Blanks Game
    fillBlankSentence: document.getElementById("fill-blank-sentence"),
    fillBlankAnswer: document.getElementById("fill-blank-answer"),
    submitFillBlank: document.getElementById("submit-fill-blank"),
    nextFillBlank: document.getElementById("next-fill-blank"),
    fillBlankFeedback: document.getElementById("fill-blank-feedback"),
    
    // Choose Correct Form Game
    correctFormQuestion: document.getElementById("correct-form-question"),
    correctFormOptions: document.getElementById("correct-form-options"),
    correctFormFeedback: document.getElementById("correct-form-feedback"),
    nextCorrectForm: document.getElementById("next-correct-form"),
    
    // Form a Sentence Game
    wordBank: document.getElementById("word-bank"),
    sentenceConstruction: document.getElementById("sentence-construction"),
    checkSentence: document.getElementById("check-sentence"),
    resetSentence: document.getElementById("reset-sentence"),
    nextSentence: document.getElementById("next-sentence"),
    formSentenceFeedback: document.getElementById("form-sentence-feedback"),
    
    // Quiz Game
    quizQuestion: document.getElementById("quiz-question"),
    quizOptions: document.getElementById("quiz-options"),
    quizFeedback: document.getElementById("quiz-feedback"),
    nextQuiz: document.getElementById("next-quiz"),
    currentQuestionEl: document.getElementById("current-question"),
    totalQuestionsEl: document.getElementById("total-questions"),
    
    // Modals
    levelComplete: document.getElementById("level-complete"),
    levelScore: document.getElementById("level-score"),
    levelFeedback: document.getElementById("level-feedback"),
    nextLevel: document.getElementById("next-level"),
    helpModal: document.getElementById("help-modal"),
    
    // Buttons
    startFillBlanks: document.getElementById("start-fill-blanks"),
    startCorrectForm: document.getElementById("start-correct-form"),
    startFormSentence: document.getElementById("start-form-sentence"),
    startQuiz: document.getElementById("start-quiz"),
    helpBtn: document.getElementById("help-btn"),
    soundToggle: document.getElementById("sound-toggle"),
    returnHomeButtons: document.querySelectorAll(".return-home")
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Start Game Buttons
    domElements.startFillBlanks.addEventListener('click', () => {
        showScreen('fill-blanks-game');
        initFillBlanksGame();
        gameData.currentGame = 'fillBlanks';
        audio.play('click');
    });
    
    domElements.startCorrectForm.addEventListener('click', () => {
        showScreen('correct-form-game');
        initCorrectFormGame();
        gameData.currentGame = 'correctForm';
        audio.play('click');
    });
    
    domElements.startFormSentence.addEventListener('click', () => {
        showScreen('form-sentence-game');
        initFormSentenceGame();
        gameData.currentGame = 'formSentence';
        audio.play('click');
    });
    
    domElements.startQuiz.addEventListener('click', () => {
        showScreen('quiz-game');
        initQuizGame();
        gameData.currentGame = 'quiz';
        audio.play('click');
    });
    
    // Fill in the Blanks Game
    domElements.submitFillBlank.addEventListener('click', checkFillBlankAnswer);
    domElements.fillBlankAnswer.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            checkFillBlankAnswer();
        }
    });
    domElements.nextFillBlank.addEventListener('click', nextFillBlankQuestion);
    
    // Choose Correct Form Game
    domElements.nextCorrectForm.addEventListener('click', nextCorrectFormQuestion);
    
    // Form a Sentence Game
    domElements.checkSentence.addEventListener('click', checkSentence);
    domElements.resetSentence.addEventListener('click', resetCurrentSentence);
    domElements.nextSentence.addEventListener('click', nextSentence);
    
    // Quiz Game
    domElements.nextQuiz.addEventListener('click', nextQuizQuestion);
    
    // Return Home Buttons
    domElements.returnHomeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showScreen('home-screen');
            audio.play('click');
        });
    });
    
    // Level Complete Modal
    domElements.nextLevel.addEventListener('click', () => {
        domElements.levelComplete.style.display = 'none';
        updateLevel();
        
        // Continue with current game at a higher difficulty
        if (gameData.currentGame) {
            // Reset current game with new questions
            switch (gameData.currentGame) {
                case 'fillBlanks':
                    initFillBlanksGame();
                    break;
                case 'correctForm':
                    initCorrectFormGame();
                    break;
                case 'formSentence':
                    initFormSentenceGame();
                    break;
                case 'quiz':
                    initQuizGame();
                    break;
            }
        } else {
            showScreen('home-screen');
        }
        
        audio.play('click');
    });
    
    // Help Button
    domElements.helpBtn.addEventListener('click', () => {
        domElements.helpModal.style.display = 'flex';
        audio.play('click');
    });
    
    // Close Help Modal
    document.querySelector('.close-btn').addEventListener('click', () => {
        domElements.helpModal.style.display = 'none';
        audio.play('click');
    });
    
    // Sound Toggle
    domElements.soundToggle.addEventListener('click', () => {
        gameData.soundEnabled = !gameData.soundEnabled;
        domElements.soundToggle.textContent = gameData.soundEnabled ? 'Sound: On' : 'Sound: Off';
        audio.play('click');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', e => {
        if (e.target === domElements.helpModal) {
            domElements.helpModal.style.display = 'none';
        }
        if (e.target === domElements.levelComplete) {
            domElements.levelComplete.style.display = 'none';
        }
    });
});