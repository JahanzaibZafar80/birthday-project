let currentCard = 0;

const cards = [

    {
        title: "🎂 Birthday Protocol",
        content: `
            <p>
                A special system has been initialized
                for a very special person.
            </p>

            <div class="info">
                Status: ONLINE ✓
            </div>

            <div class="info">
                Moment: BIRTHDAY 🎉
            </div>
        `
    },

    {
        title: "Information",
        content: `
            <div class="info">
                User Status: Yrrrr
            </div>

            <div class="info">
                Happiness: 100%
            </div>

            <div class="info">
                Cake: READY 🎂
            </div>

            <div class="info">
                Version: 20 Years
            </div>

            <div class="info">
                Memories: LOADED ❤️
            </div>
        `
    },

    {
        title: "🚀 Best Moment Released Released",
        content: `
            <p>
                Keep Working!
            </p>

            <div class="info">
                Previous  → 19 years
            </div>

            <div class="info">
                Current Version → 20 Years
            </div>

            <div class="info">
                Status → Successfully Upgraded ✓
            </div>
        `
    },

    {
        title: "❤️ Personal Message",
        content: `
            <p>
                Some people make ordinary moments
                feel special.
            </p>

            <p>
                Today is your day,
                so this little Cards created
                just for you.
            </p>
        `
    },

    {
        title: "🔥 Final Moment",
        content: `
            <p>
                Birthday detected successfully.
            </p>

            <div class="info">
                Happiness.exe → RUNNING
            </div>

            <div class="info">
                Smile.exe → REQUIRED
            </div>

            <div class="info">
                Cake.exe → MUST 🎂
            </div>
        `
    }

];


function startBirthday() {

    document.getElementById("startScreen")
        .classList.remove("active");

    document.getElementById("cardScreen")
        .classList.add("active");

    showCard();
}


function showCard() {

    const card = cards[currentCard];

    document.getElementById("cardNumber").innerText =
        `${String(currentCard + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;

    document.getElementById("cardContent").innerHTML = `
        <h1>${card.title}</h1>
        ${card.content}
    `;

    if (currentCard === cards.length - 1) {
        document.getElementById("nextButton").innerText =
            "FINISH 🎉";
    }
}


function nextCard() {

    currentCard++;

    if (currentCard >= cards.length) {

        document.getElementById("cardScreen")
            .classList.remove("active");

        document.getElementById("finalScreen")
            .classList.add("active");

        // Start final birthday experience
        speakBirthdayMessage();
        createFloatingWords();

        return;
    }

    showCard();
}


/* ================================
   BIRTHDAY VOICE
================================ */

function speakBirthdayMessage() {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
        "Happy Birthday Mase-roo"
    );

    const voices = window.speechSynthesis.getVoices();

    // Female voice prefer karo
    const femaleVoice = voices.find(voice =>
        /female|zira|samantha|karen|susan|hazel|aria|jenny/i.test(voice.name)
    );

    if (femaleVoice) {
        speech.voice = femaleVoice;
    }

    speech.rate = 0.85;
    speech.pitch = 1.15;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}


/* ================================
   FLOATING WORDS
================================ */

function createFloatingWords() {

    const container =
        document.getElementById("floatingWords");

    if (!container) {
        return;
    }

    // Clear old words
    container.innerHTML = "";

    const words = [
        "🎉 Happy Birthday 🎉",
        "✨ Yara ✨",
        "🎂 Have a Beautiful Day 🎂",
        "❤️ Best Wishes ❤️",
        "🚀 Keep Shining 🚀",
        "🥳 Stay Happy 🥳",
        "✨ Keep Smiling ✨",
        "🎁 Enjoy Your Day 🎁"
    ];

    words.forEach((word, index) => {

        const span = document.createElement("span");

        span.innerText = word;

        span.classList.add("floating-word");

        // Different starting positions
        span.style.left =
            Math.random() * 80 + 10 + "%";

        // Different animation delays
        span.style.animationDelay =
            (index * 0.7) + "s";

        // Different animation duration
        span.style.animationDuration =
            (5 + Math.random() * 4) + "s";

        container.appendChild(span);
    });
}