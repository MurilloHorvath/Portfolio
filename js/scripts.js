const menuBtn = document.querySelector("#hamb-icon")
const closeMenuBtn = document.querySelector("#hamb-close-icon")
const changeTheme = document.querySelector("#change-theme")

function showMenu() {
    return document.querySelector("#sidebar").classList.toggle("show-menu")
}

function toggleLightMode() {
    document.body.classList.toggle("light")
}

function loadTheme() {
    const lightMode = localStorage.getItem("light")

    if(lightMode) {
        toggleLightMode()
    }

}

loadTheme()

menuBtn.addEventListener("click", () => {
    showMenu()
})

closeMenuBtn.addEventListener("click", () => {
    showMenu()
})

changeTheme.addEventListener("change", () => {
    toggleLightMode()

    // save or remove dark mode
    localStorage.removeItem("light")

    if(document.body.classList.contains("light")) {
        localStorage.setItem("light", 1)
    }
})