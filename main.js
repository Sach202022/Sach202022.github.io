console.log("hello world")

document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);
document.getElementById('menu-1-button-side').addEventListener('click', sideMenuDisappears);
document.getElementById('menu-2-button-side').addEventListener('click', sideMenuDisappears);
document.getElementById('menu-3-button-side').addEventListener('click', sideMenuDisappears);
document.getElementById('menu-4-button-side').addEventListener('click', sideMenuDisappears);


function sideMenuAppears() {
  // console.log('sideMenuAppears() is active');
  document.getElementById('side-menu').classList.add('show-menu');
}

function sideMenuDisappears() {
  // console.log('sideMenuDisappears() is active');
  document.getElementById('side-menu').classList.remove('show-menu');
}
 /*Dropdown-menu*/
function menuThreeShow(){
  document.getElementById('menu-3').classList.add('show');
  document.getElementById('menu-4').classList.remove('show');
}
function menuFourShow(){
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.add('show');
}
document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
document.getElementById('menu-4-button').addEventListener('mouseover', menuFourShow);
/*Menu-hide*/
function menusHide() {
  document.getElementById('menu-3').classList.remove('show');
  document.getElementById('menu-4').classList.remove('show');
}
document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
document.getElementById('menu-4').addEventListener('mouseleave', menusHide);
/*phone-section*/


document.getElementById('phone-button').addEventListener('click', phoneNumberAppears);
document.getElementById('close-icon').addEventListener('click', phoneNumberDisappears);

function phoneNumberAppears() {
  document.getElementById('phone-number').classList.add('show-phone-number');
}
function phoneNumberDisappears() {
  document.getElementById('phone-number').classList.remove('show-phone-number');
}
