function onClick(toggleItem) {
    const component = document.getElementById(toggleItem);
    component.classList.toggle('visible');
    component.classList.toggle('invisible');
}