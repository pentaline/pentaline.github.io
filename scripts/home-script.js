let customThemeBox = document.getElementById('custom-theme-box');
let customSiteBox = document.getElementById('custom-site-box');
let testimonialsBox = document.getElementById('testimonials-box');
let contactUsBox = document.getElementById('contact-us-box');

customThemeBox.setAttribute('onclick', 'location.href = "customtheme.html"');
customSiteBox.setAttribute('onclick', 'location.href = "customtheme.html"');
testimonialsBox.setAttribute('onclick', 'location.href = "customtheme.html"');
contactUsBox.setAttribute('onclick', 'location.href = "customtheme.html"');

if (window.innerWidth > 900){
  customThemeBox.onmouseover = function(){
    document.getElementById('custom-theme').style.backgroundImage = "url('images/custom-theme-box-background-dark.jpg')";
  };
    customThemeBox.onmouseout = function(){
    document.getElementById('custom-theme').style.backgroundImage = "url('images/custom-theme-box-background.jpg')";
  };

  customSiteBox.onmouseover = function(){
    document.getElementById('custom-site').style.backgroundImage = "url('images/premade-theme-box-background-dark.jpg')";
  };
  customSiteBox.onmouseout = function(){
    document.getElementById('custom-site').style.backgroundImage = "url('images/premade-theme-box-background.jpg')";
  };

  testimonialsBox.onmouseover = function(){
    document.getElementById('testimonials').style.backgroundImage = "url('images/testimonials-background-dark.jpg')";
  };
  testimonialsBox.onmouseout = function(){
    document.getElementById('testimonials').style.backgroundImage = "url('images/testimonials-background.jpg')";
  };

  contactUsBox.onmouseover = function(){
    document.getElementById('contact-us').style.backgroundImage = "url('images/contact-us-background-dark.jpg')";
  };
  contactUsBox.onmouseout = function(){
    document.getElementById('contact-us').style.backgroundImage = "url('images/contact-us-background.jpg')";
  };
}else if (window.innerWidth < 900){
  document.getElementById('custom-theme').style.backgroundImage = "url('images/custom-theme-box-background-mobile.jpg')";
  document.getElementById('contact-us').style.backgroundImage = "url('images/contact-us-background-mobile.jpg')";
  document.getElementById('testimonials').style.backgroundImage = "url('images/testimonials-background-mobile.jpg')";
  document.getElementById('custom-site').style.backgroundImage = "url('images/premade-theme-box-background-dark.jpg')";
}
