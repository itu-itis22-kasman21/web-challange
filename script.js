function showUS() {
    blurOthers('us');
}

function showAus() {
    blurOthers('aus');
}

function showCan() {
    blurOthers('can');
}

function showUk() {
    blurOthers('uk');
}

var activeCategory = null;
var allElements = document.querySelectorAll(".us-num1, .us-num2, .us-num3, .aus-num1, .aus-num2, .aus-num3, .can-num1, .can-num2, .can-num3, .uk-num1, .uk-num2, .uk-num3, .av-num1, .av-num2, .av-num3");

function resetOpacity() {
    allElements.forEach(function (element) {
        element.style.opacity = 1;
    });
}

function blurOthers(category) {
    if (activeCategory === category) {
        resetOpacity();
        activeCategory = null;
    } else {
        resetOpacity();
        allElements.forEach(function (element) {
            if (!element.classList.contains(`${category}-num1`) &&
                !element.classList.contains(`${category}-num2`) &&
                !element.classList.contains(`${category}-num3`)) {
                element.style.opacity = 0.25;
            }
        });
        
        activeCategory = category; 
    }
}

var activePViews = null;


function resetColors() {
    document.documentElement.style.setProperty('--clr-top-donut-blue', '#83B776');
    document.documentElement.style.setProperty('--clr-top-donut-green', '#7DA1D3');
    document.documentElement.style.setProperty('--clr-top-donut-yellow', '#FFC744');
}

function blurPViews(category) {
    resetColors(); // Reset all colors first

    if (activePViews === category) {
        activePViews = null; // If clicking the same button, reset the active category
    } else {
        if (category === 'ref') {
            resetColors();
            document.documentElement.style.setProperty('--clr-top-donut-blue', '#83B77550');
            document.documentElement.style.setProperty('--clr-top-donut-green', '#7DA1D350');

        } else if (category === 'dir') {
            resetColors();
            document.documentElement.style.setProperty('--clr-top-donut-green', '#7DA1D350');
            document.documentElement.style.setProperty('--clr-top-donut-yellow', '#FFC74450');

        } else if (category === 'org') {
            resetColors();
            document.documentElement.style.setProperty('--clr-top-donut-yellow', '#FFC74450');
            document.documentElement.style.setProperty('--clr-top-donut-blue', '#83B77550');
        }
        activePViews = category; // Set the new active category
    }
}

function showRef() {
    blurPViews('ref');
}

function showDir() {
    blurPViews('dir');
}

function showOrg() {
    blurPViews('org');
}
