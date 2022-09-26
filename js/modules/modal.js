const modal = (trigger, overflow, closeTrigger, icon) => {
    const triggerBtn = document.querySelector(trigger),
          overflowWindow = document.querySelector(overflow),
          closeBtn = document.querySelector(closeTrigger),
          iconSvg = document.querySelector(icon),
          scroll = caclScroll();


    triggerBtn.addEventListener('click', () => {
        overflowWindow.style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    });

    closeBtn.addEventListener('click', (e) => {
        if(e.target === closeBtn || e.target === iconSvg) {
            overflowWindow.style.display = 'none';
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    });

    overflowWindow.addEventListener('click', () => {
        overflowWindow.style.display = 'none';
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });

    function caclScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
}

export default modal;