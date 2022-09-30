const modal = (trigger, overflow, closeTrigger, icon, modalForm) => {
    const triggerBtn = document.querySelector(trigger),
          overflowWindow = document.querySelector(overflow),
          closeBtn = document.querySelector(closeTrigger),
          iconSvg = document.querySelector(icon),
          modalWindow = document.querySelector(modalForm);
          /* scroll = caclScroll(); */


    triggerBtn.addEventListener('click', () => {
        overflowWindow.classList.toggle("is-hidden");
    });

    closeBtn.addEventListener('click', (e) => {
        if(e.target === closeBtn) {
            overflowWindow.classList.toggle("is-hidden");
        } 
    });

    overflowWindow.addEventListener('click', (e) => {
        if (e.target === overflowWindow) {
            overflowWindow.classList.toggle("is-hidden");
        } 
    });

    iconSvg.addEventListener('click', (e) => {
        if (e.target === iconSvg ) {
            overflowWindow.classList.toggle("is-hidden");
        }
    });

/*     function caclScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    } */
}

export default modal;