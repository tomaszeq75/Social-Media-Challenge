function themeSwitch() {
    const switchState = document.getElementById("checkbox").checked;
    elements = document.querySelectorAll(".dark");
    elements.forEach(item => item.classList.toggle('light'));
    console.log(elements[0]);
}