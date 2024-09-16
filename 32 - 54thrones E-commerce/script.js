document.addEventListener("DOMContentLoaded", function () {
    

    const searchBtn = document.querySelector(".search-btn");
    const searchMenu = document.querySelector(".search-menu");
    const searchIcon = searchBtn.querySelector("img");

    // Function to toggle search menu visibility
    function toggleSearchMenu() {
        searchMenu.classList.toggle("show");
        if (searchMenu.classList.contains("show")) {
            searchIcon.src = "./images/cross.png"; // Change icon to close when menu is open
        } else {
            searchIcon.src = "./images/loupe.png"; // Change icon to search when menu is closed
        }
    }

    // Event listener for search button click
    searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleSearchMenu();
    });

    const searchBox = document.querySelector(".search-box");
    const clearIcon = document.querySelector(".clear-icon");

    // Function to clear input text
    function clearInput() {
        searchBox.value = "";
    }

    // Event listener for clear icon click
    clearIcon.addEventListener("click", function () {
        clearInput();
    });

    // Event listener for input text change
    searchBox.addEventListener("input", function () {
        // Toggle clear icon visibility based on input value
        clearIcon.style.visibility = this.value.trim() !== "" ? "visible" : "hidden";
    });

    const menu_btn = document.querySelector(".menu-btn");
    const close_btn = document.querySelector(".close-btn");
    const menu = document.querySelector(".menu");
    const drawer = menu.querySelector(".drawer");
    const blank = menu.querySelector(".blank");
    const close = () => {
        menu.classList.remove("blur");
        drawer.classList.remove("drawer-visible");
    };

    menu_btn.addEventListener("click", (e) => {
        menu.classList.add("blur");
        drawer.classList.add("drawer-visible");
    });

    close_btn.addEventListener("click", (e) => {
        close();
    });

    blank.addEventListener("click", (e) => {
        close();
    });

    Array.from(drawer.querySelectorAll("a")).forEach((element) => {
        element.addEventListener("click", () => {
            close();
        });
    });
});