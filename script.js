new fullpage('#fullpage', {
  navigation: true,
  responsiveWidth: 700,
  });

window.addEventListener("load", function(){
  let s1Logo = document.querySelector('.s-1__logo');
  let s1H1Text = document.querySelector('.s-1__h1-text');
  let s1PText = document.querySelector('.s-1__p-text');
  let s1ImageDiv = document.querySelector('.s-1__image-div');
  s1Logo.style.opacity = 1;
  setTimeout( function() {
    s1H1Text.style.opacity = 1;
  }, 1000);
  setTimeout( function() {
    s1H1Text.style.opacity = 1;
  }, 1300);
  setTimeout( function() {
    s1PText.style.opacity = 1;
  }, 2000);
  setTimeout( function() {
    s1ImageDiv.style.opacity = 1;
  }, 2800);
});
