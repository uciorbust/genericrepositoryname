const pinkTheme = 'CSS/pinkLink.css'
const normalTheme = 'CSS/index.css'

function swapStyleSheet() {

    if (localStorage.getItem("theme") === normalTheme) { // No theme set yet
        setStyleSheet(pinkTheme)
        localStorage.setItem("theme", pinkTheme)
    }
    else { // load the current theme
        setStyleSheet(normalTheme)
        localStorage.setItem("theme", normalTheme)
    }
}

function setStyleSheet(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

// Check if the "magic-e" button has already been clicked

// Add click event listener to the reset button
document.getElementById("reset-button").addEventListener("click", () => {
    resetChanges();
    localStorage.removeItem("magic-e-clicked");
});

// Function to apply the changes
function applyChanges() {
    document.querySelectorAll(".before").forEach(element => {
        element.classList.remove("before");
        element.classList.add("hide");
    });
    document.querySelectorAll(".after").forEach(element => {
        element.classList.remove("after", "hide");
        element.classList.add("show");
    });
    document.querySelectorAll('.redacted').forEach(element => {
        element.classList.remove('redacted')
        element.classList.add('unredacted')
    })
}

// Function to reset the changes
function resetChanges() {
    document.querySelectorAll(".hide").forEach(element => {
        element.classList.remove("hide");
        element.classList.add("before");
    });
    document.querySelectorAll(".show").forEach(element => {
        element.classList.remove("show");
        element.classList.add("after", "hide");
    });
    document.querySelectorAll('.unredacted').forEach(element => {
        element.classList.remove('unredacted')
        element.classList.add('redacted')
    })
}