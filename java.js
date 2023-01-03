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



function getPDF() {
  var doc = new jsPDF();
 
  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
    '#getPDF': function(element, renderer){
      return true;
    },
    '.controls': function(element, renderer){
      return true;
    }
  };

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML($('.zima').get(0), 15, 15, {
    'width': 170, 
    'elementHandlers': specialElementHandlers
  });

  doc.save('Colombe.Hassold.Lagamificationdestutorielsameliorantlapprentissage_compressed.PDF');
}
