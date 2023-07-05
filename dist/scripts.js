/*!
* This file is intentionally blank
* Use this file to add JavaScript to your project
*/

// https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers/onscroll
    window.onscroll = function () {
        display_button()
    };
    function display_button() {
        // https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
        let elem = document.getElementById('btn-top');
        let numberPixels = window.pageYOffset | document.body.scrollTop;
        if (numberPixels > 360) {
            elem.style.display = 'block';
        } else if (numberPixels <= 360) {
            elem.style.display = 'none';
        }
    }
});
