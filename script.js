new fullpage('#fullpage', {
  navigation: true,
  responsiveWidth: 700,
  afterLoad: function(){
    //slide 2
    if (document.getElementById('body').classList.contains('fp-viewing-1')) {
      let s2TopText = document.querySelector('.s-2__top-text');
      let s2BottomText = document.querySelector('.s-2__bottom-text');
      
      s2TopText.style.opacity = 1;

      setTimeout( function() {
        s2BottomText.style.opacity = 1;
      }, 1000);
    } 
    // slide 3
    if (document.getElementById('body').classList.contains('fp-viewing-2')) {
      let s3TopText = document.querySelector('.s-3__top-text');
      let s3BottomText = document.querySelector('.s-3__bottom-text');
      
      s3TopText.style.opacity = 1;

      setTimeout( function() {
        s3BottomText.style.opacity = 1;
      }, 1000);
    } 
    //slide 4
    if (document.getElementById('body').classList.contains('fp-viewing-3')) {
      let s4TopText = document.querySelector('.s-4__top-text');
      let s4BottomText = document.querySelector('.s-4__bottom-text');
      
      s4TopText.style.opacity = 1;

      setTimeout( function() {
        s4BottomText.style.opacity = 1;
      }, 1000);
    } 
}
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

