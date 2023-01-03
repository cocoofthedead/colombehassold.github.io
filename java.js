var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}



const button = document.querySelector('.copy-btn1')

const addToClipboard = async (link) => {
    await navigator.clipboard.writeText(link);
}

const copyLink = async (link) => {
    const copied = await addToClipboard(link)
    button.innerText = 'Copied'
    setTimeout(() => {
    button.innerText = 'Copy link'
    }, 3000)
};

button.addEventListener('click', () => copyLink('ColombeHassold'))