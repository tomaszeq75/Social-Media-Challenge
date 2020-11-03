function themeSwitch() {
    const switchState = document.getElementById("checkbox").checked;
    const elements = document.querySelectorAll(".dark");
    elements.forEach(item => item.classList.toggle('light'));

    const headerLabel = document.getElementById('mode')
    if (switchState == true) {
        headerLabel.innerText = 'Light Mode'
    } else {
        headerLabel.innerText = 'Dark Mode'
    }
}