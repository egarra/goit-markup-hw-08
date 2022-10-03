import modal from "./modules/modal.js";
import modalMobile from "./modules/mobile-menu.js";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    try {
        modal('.hero__btn', '.overflow', '.modal-close__btn', '.modal-close__icon' , '.modal');
    } catch {console.error("error")};
    modalMobile('.header-mobile__icon', '.header-mobile', '.header-mobile__icon-close');
});

