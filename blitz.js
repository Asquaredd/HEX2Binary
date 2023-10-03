document.addEventListener("DOMContentLoaded", function () {
    let hexDisplay = document.getElementById("hex-display");
    let binaryInput = document.getElementById("binary-input");
    let comboCounter = document.getElementById("combo-counter");
    let swapButton = document.getElementById("swap-button"); // Get swap button
    let combo = 0;
    let isBinaryMode = true; // Default mode is Binary

    function generateHex() {
        const hexValue = Math.floor(Math.random() * 16);
        hexDisplay.textContent = isBinaryMode ? hexValue.toString(16).toUpperCase() : hexValue.toString(2).padStart(4, '0');
        binaryInput.placeholder = isBinaryMode ? "Enter Binary" : "Enter Hex";
        binaryInput.maxLength = isBinaryMode ? 4 : 1; // Adjust maximum input length
    }

    function checkInput() {
        const hexValue = parseInt(hexDisplay.textContent, isBinaryMode ? 16 : 2);
        const inputValue = parseInt(binaryInput.value, isBinaryMode ? 2 : 16);
        return hexValue === inputValue;
    }

    function applyEffect(effectName, element, duration = 1000) {
        element.classList.add(effectName);
        setTimeout(() => {
            element.classList.remove(effectName);
        }, duration);
    }

    binaryInput.addEventListener("input", function () {
        if (binaryInput.value.length >= (isBinaryMode ? 4 : 1)) {
            if (checkInput()) {
                combo++;
                applyEffect("correct", binaryInput, 500);
                animateBits();
            } else {
                combo = 0;
                applyEffect("incorrect", binaryInput);
                return; // Don’t generate a new hex number
            }
            
            comboCounter.textContent = "Combo: " + combo;
            binaryInput.value = "";
            generateHex();
        }
    });

    // Swap button functionality
    swapButton.addEventListener("click", function () {
        isBinaryMode = !isBinaryMode;
        generateHex(); // Generate a new number to guess after swapping
    });

    generateHex();
});



function animateBits() {
    const comboElem = document.getElementById("combo-counter");
    const { left, bottom } = comboElem.getBoundingClientRect();

    for (let i = 0; i < 10; i++) {
        const bit = document.createElement("div");
        bit.className = 'bit';
        bit.style.left = `${left + Math.random() * 50}px`;
        bit.style.bottom = `${window.innerHeight - bottom + Math.random() * 50}px`;
        document.body.appendChild(bit);

        setTimeout(() => {
            bit.style.transform = `translateY(${Math.random() * -200}px) translateX(${Math.random() * 50 - 25}px)`;
            bit.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            document.body.removeChild(bit);
        }, 2000);
    }
}
