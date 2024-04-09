document.addEventListener("DOMContentLoaded", function () {
    const hiddenObject = document.getElementById("elem");
    const gameCont = document.getElementById("game-cont");
    const gameWind = document.getElementById("game-wind");
    const diffSelector = document.getElementById("diffSelector");
    const speedSelector = document.getElementById("speedSelector");
    const colorSelector = document.getElementById("contColor");
    const startButton = document.getElementById("start");
    const header = document.getElementById("header");
    const scoreCounter = document.getElementById("scoreCounter");
    const scoreCounterHeader = document.getElementById("scoreCounterHeader");

    const DEFAULT_LIVES = 3;
    const DEFAULT_SCORE = 0;
    let sizeObject;
    let lives = DEFAULT_LIVES;
    let score = DEFAULT_SCORE;
    let timeoutId;

    function setSettings() {
        sizeObject = diffSelector.value;
        hiddenObject.style.padding = sizeObject + "px";
        hiddenObject.style.backgroundColor = colorSelector.value;
    }

    function updatePosition() {
        const randomX = Math.floor(
            Math.random() * (gameCont.offsetWidth - sizeObject)
        );
        const randomY = Math.floor(
            Math.random() * (gameCont.offsetHeight - sizeObject)
        );
        hiddenObject.style.top = randomY + "px";
        hiddenObject.style.left = randomX + "px";
    }

    function updateText() {
        scoreCounter.textContent = `Score: ${score} Lives: ${lives}`;
    }

    function handleClick() {
        hiddenObject.style.display = "block";
        score++;
        updateText();
        clearTimeout(timeoutId);
        updatePosition();
        setAutoChange();
        finishGame();
    }

    function setAutoChange() {
        timeoutId = setTimeout(() => {
            updatePosition();
            hiddenObject.style.display = "block";
            lives--;
            updateText();
            clearTimeout(timeoutId);
            finishGame();
            setAutoChange();
        }, 1000 * speedSelector.value);
    }

    function startGame() {
        setSettings();
        clearTimeout(timeoutId);
        header.style.display = "none";
        gameWind.style.display = "block";
        scoreCounterHeader.style.display = "none";
        scoreCounter.textContent = `Score: ${score} Lives: ${lives}`;
        updatePosition();
    }

    function finishGame() {
        if (lives == 0) {
            header.style.display = "flex";
            gameWind.style.display = "none";
            scoreCounterHeader.style.display = "block";
            scoreCounterHeader.textContent = `Score: ${score}`;
            lives = DEFAULT_LIVES;
            score = DEFAULT_SCORE;
        }
    }

    function clicked(event) {
        if (event.target.id !== "elem") {
            lives--;
            clearTimeout(timeoutId);
            updateText();
            updatePosition();
            setAutoChange();
        }
        finishGame();
    }

    hiddenObject.addEventListener("click", handleClick);
    startButton.addEventListener("click", startGame);
    gameCont.addEventListener("click", clicked);

    setSettings();
    setAutoChange();
});
