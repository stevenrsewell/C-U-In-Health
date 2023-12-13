document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('select');
    const instances = M.FormSelect.init(selects);

    const dateInputs = document.querySelectorAll('input[type="date"]');
    const instances2 = M.Datepicker.init(dateInputs, {
        showClearBtn: false,
        format: 'yyyy-mm-dd', // Setting the date format
        autoClose: true // Automatically close the datepicker after selection
    });
});

function calculateTimeLost(smokedPerDay, unit, startDate, endDate) {
    const cigarettesPerPack = 20;
    const minutesPerCigarette = 11;

    let totalCigarettes = 0;

    if (unit === 'packs') {
        totalCigarettes = smokedPerDay * cigarettesPerPack;
    } else {
        totalCigarettes = smokedPerDay;
    }

    const daysSmoked = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const totalTimeMinutes = totalCigarettes * daysSmoked * minutesPerCigarette;

    const years = Math.floor(totalTimeMinutes / (60 * 24 * 365));
    const months = Math.floor((totalTimeMinutes % (60 * 24 * 365)) / (60 * 24 * 30));
    const weeks = Math.floor(((totalTimeMinutes % (60 * 24 * 365)) % (60 * 24 * 30)) / (60 * 24 * 7));
    const days = Math.floor((((totalTimeMinutes % (60 * 24 * 365)) % (60 * 24 * 30)) % (60 * 24 * 7)) / (60 * 24));

    let timeLost = '';
    if (years > 0) {
        timeLost += years + ' year' + (years !== 1 ? 's ' : ' ');
    }
    if (months > 0) {
        timeLost += months + ' month' + (months !== 1 ? 's ' : ' ');
    }
    if (weeks > 0) {
        timeLost += weeks + ' week' + (weeks !== 1 ? 's ' : ' ');
    }
    if (days > 0) {
        timeLost += days + ' day' + (days !== 1 ? 's' : '');
    }

    return timeLost.trim();
}

function displayRisks(gender) {
    const maleRisks = {
        lungCancerRisk: 'Increased 25 times',
        erectileDysfunction: 'Smoking can contribute to issues with erections due to reduced blood flow.'
    };

    const femaleRisks = {
        lungCancerRisk: 'Increased 25.7 times',
        pregnancyIssues: 'Complications during pregnancy, such as preterm delivery, low birth weight, and increased risk of birth defects.',
        menopause: 'Early menopause onset and potential for increased severity of symptoms.'
    };

    let risks = {};

    if (gender === 'male') {
        risks = { ...maleRisks };
    } else if (gender === 'female') {
        risks = { ...femaleRisks };
    }

    // Format the risks for display
    let formattedRisks = '<ul>';
    for (let key in risks) {
        formattedRisks += `<li><strong>${key}:</strong> ${risks[key]}</li>`;
    }
    formattedRisks += '</ul>';

    return formattedRisks;
}


function calculateRisks() {
const cigarettesPerDay = parseFloat(document.getElementById('cigarettesPerDay').value);
const unit = document.getElementById('unit').value;
const gender = document.getElementById('gender').value;
const startDate = new Date(document.getElementById('startDate').value);
const endDate = new Date(document.getElementById('endDate').value);

const timeLost = calculateTimeLost(cigarettesPerDay, unit, startDate, endDate);
const risks = displayRisks(gender);

const timeLostElement = document.getElementById('timeLost');
timeLostElement.textContent = `Time lost due to smoking: ${timeLost}`;

const risksElement = document.getElementById('risks');
risksElement.innerHTML = '<h3>Risks:</h3>' + risks; // Set risks as HTML content

document.getElementById('results').style.display = 'block';
}


function setEndDate() {
    const endDateInput = document.getElementById('endDate');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    endDateInput.value = formattedDate;
}

// Automatically set the current date if "End Date" input is left blank
window.onload = function () {
    const endDateInput = document.getElementById('endDate');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    endDateInput.value = formattedDate;
};