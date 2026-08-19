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
                Occasion: BIRTHDAY 🎉
            </div>
        `
    },

        {
        title: "💻 System Information",
        content: `
            <div class="info">
                User Status: LEGENDARY
            </div>

            <div class="info">
                Happiness: 100%
            </div>

            <div class="info">
                Cake: READY 🎂
            </div>

            <div class="info">
                Version: 2026.1
            </div>

            <div class="info">
                Memories: LOADED ❤️
            </div>
        `
    },

    {
        title: "🚀 New Version Released",
        content: `
            <p>
                Congratulations!
            </p>

            <div class="info">
                Previous Version → 2025
            </div>

            <div class="info">
                Current Version → 2026
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
                so this little system was created
                just for you.
            </p>
        `
    },

    {
        title: "🔥 Final Check",
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
                Cake.exe → MUST INSTALL 🎂
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

        return;
    }

    showCard();

}