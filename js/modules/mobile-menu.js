const modalMobile = (trigger, overflow, closeTrigger) => {
    const triggerBtn = document.querySelector(trigger),
          overflowWindow = document.querySelector(overflow),
          closeBtn = document.querySelector(closeTrigger);
    

    triggerBtn.addEventListener('click', () => {
        overflowWindow.classList.toggle("is-hidden");
       /*  document.body.style.overflow = "hidden"; */
        document.querySelector('.portfolio-cards__list').style.display = 'none';
        document.querySelector('.subscribe-footer__form').style.display = 'none';
    });

    closeBtn.addEventListener('click', (e) => {
        if(e.target === closeBtn) {
            overflowWindow.classList.toggle("is-hidden");
          /*   document.body.style.overflow = ""; */
            document.querySelector('.portfolio-cards__list').style.display = 'flex';
            document.querySelector('.subscribe-footer__form').style.display = 'block';
        } 
    });

   /*  overflowWindow.addEventListener('click', (e) => {
        if (e.target === overflowWindow) {
            overflowWindow.classList.toggle("is-hidden");
        } 
    }); */

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        overflowWindow.classList.add('is-hidden');
        document.body.style.overflow = "";
        document.querySelector('.portfolio-cards__list').style.display = 'flex';
        document.querySelector('.subscribe-footer__form').style.display = 'block';
      });
}

export default modalMobile;