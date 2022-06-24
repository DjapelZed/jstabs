document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".tabs__card");
    const navItems = document.querySelectorAll(".tabs-nav__item");
    let activeIndex = 0;

    const displayCard = i => cards[i].classList.add("active");    
    const hideCard = i => cards[i].classList.remove("active");

    const setItemActive = i => navItems[i].classList.add("active");
    const setItemPassive = i => navItems[i].classList.remove("active");

    const itemClick = (event, i) => {
        if (activeIndex !== i){
            setItemPassive(activeIndex);
            setItemActive(i);
            hideCard(activeIndex);
            displayCard(i);
            activeIndex = i;
        }
    };
    
    navItems.forEach((item, i) => item.addEventListener("click", event => itemClick(event, i)));
});