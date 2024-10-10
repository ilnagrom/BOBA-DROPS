let credit = 0;
let autoRate = 0;
let clickValue = 1;

// Update the display
function updateDisplay() {
    document.getElementById('credit').innerText = credit;
    document.getElementById('rate').innerText = autoRate;
}

// Click button function
document.getElementById('clickButton').addEventListener('click', () => {
    credit += clickValue;
    updateDisplay();
});

// Upgrade button functions
document.getElementById('upgrade1').addEventListener('click', () => {
    if (credit >= 10) {
        credit -= 10;
        clickValue += 1;
        document.getElementById('upgrade1').disabled = true; // Disable after buying
        updateDisplay();
    }
});

document.getElementById('upgrade2').addEventListener('click', () => {
    if (credit >= 50) {
        credit -= 50;
        clickValue += 5;
        document.getElementById('upgrade2').disabled = true; // Disable after buying
        updateDisplay();
    }
});

document.getElementById('upgrade3').addEventListener('click', () => {
    if (credit >= 1000) {
        credit -= 1000;
        autoRate += 50;
        document.getElementById('upgrade3').disabled = true; // Disable after buying
        updateDisplay();
    }
});

// Auto-increment function
setInterval(() => {
    credit += autoRate;
    updateDisplay();
}, 1000);
