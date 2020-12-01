const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/* Header */

const navBar = document.querySelectorAll('a');
const navBarArray = Array.from(navBar);
navBarArray[0].textContent = 'Services';
navBarArray[1].textContent = 'Product';
navBarArray[2].textContent = 'Vision';
navBarArray[3].textContent = 'Features';
navBarArray[4].textContent = 'About';
navBarArray[5].textContent = 'Contact';

/* Section Class cta */

const h1 = document.querySelector('h1');
h1.innerHTML = 'DOM <br> IS <br> AWESOME';
const button = document.querySelector('button');
button.textContent = 'Get Started';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";

/* Section main-content */

const divh4 = document.querySelectorAll('.text-content h4');
const h4Array = Array.from(divh4);
h4Array[0].textContent = 'Features';
h4Array[1].textContent = 'About';
h4Array[2].textContent = 'Services';
h4Array[3].textContent = 'Product';
h4Array[4].textContent = 'Vision';
const divP = document.querySelectorAll('.text-content p');
const pArray = Array.from(divP);
pArray[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pArray[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
const midImg = document.querySelector('#middle-img');
midImg.src = "img/mid-page-accent.jpg";
pArray[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pArray[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pArray[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

/* Section Contact */

const h4cont = document.querySelector('.contact h4');
h4cont.textContent = 'Contact';
const contP = document.querySelectorAll('.contact p');
const contactP = Array.from(contP);
contactP[0].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
contactP[1].textContent = '1 (888) 888-8888';
contactP[2].textContent = 'sales@greatidea.io';

/* Footer */

const footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';