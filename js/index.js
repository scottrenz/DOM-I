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
const myLogoImg = document.querySelector('#logo-img');
console.log(myLogoImg);
const myCtaImg = document.querySelector('#cta-img');
console.log(myCtaImg);
const myContainer = document.querySelector('.container');
console.log(myContainer);
const myCta = document.querySelector('.cta');
console.log(myCta);
const myCtaText = document.querySelector('.cta-text');
console.log(myCtaText);
const myMainContent = document.querySelector('.main-content');
console.log(myMainContent);

const myTopContent = document.querySelector('.top-content');
console.log(myTopContent);

const myTextContent = document.querySelector('.text-content');
console.log(myTextContent);

const myMiddleImg = document.querySelector('.middle-img');
console.log(myMiddleImg);
const myBottomContent = document.querySelector('.bottom-content');
console.log(myBottomContent);
const myContact = document.querySelector('.contact');
console.log(myContact);
let myA = document.querySelectorAll('a');
console.log(myA);
const myNav = document.querySelector('nav');
console.log(myNav);
const myFooter = document.querySelector('footer');
console.log(myFooter);
const myButton = document.querySelector('button');

console.log(siteContent);
console.log(siteContent.nav);
console.log(siteContent.nav['nav-item-1']);
// myA.forEach
console.log(myNav.childNodes)   // textContent.style.color = 'green';
for (let i = 0; i < myA.length; i++) {
  myA[i].textContent = siteContent.nav['nav-item-' + (i+1)]
  myA[i].style.color = 'green';
  console.log('mynav ', myA[i].textContent );
}
myCtaText.textContent = siteContent.cta.h1;
console.log(myCtaText)
myButton.textContent = siteContent.cta.button;
console.log(myButton)
myMainContent.childNodes[0].textContent = siteContent["main-content"]["features-h4"]
myMainContent.childNodes[2].textContent = siteContent["main-content"]["features-content"]
myMainContent.childNodes[4].textContent = siteContent["main-content"]["about-h4"]
myMainContent.childNodes[6].textContent = siteContent["main-content"]["about-content"]
console.log(myMainContent.childNodes[0])
console.log(myMainContent.childNodes[2])
console.log(myMainContent.childNodes[4])
console.log(myMainContent.childNodes[6])
console.log(myMainContent.childNodes)
myBottomContent.childNodes[0].textContent = siteContent["main-content"]["services-h4"]
myBottomContent.childNodes[2].textContent = siteContent["main-content"]["services-content"]
myBottomContent.childNodes[4].textContent = siteContent["main-content"]["product-h4"]
myBottomContent.childNodes[6].textContent = siteContent["main-content"]["product-content"]
console.log(myBottomContent.childNodes[0])
console.log(myBottomContent.childNodes[2])
console.log(myBottomContent.childNodes[4])
console.log(myBottomContent.childNodes[6])
console.log(myBottomContent.childNodes)

const multiH4 = document.querySelectorAll('h4');
console.log(multiH4);

multiH4[4].textContent = siteContent["main-content"]["vision-h4"]
multiH4[5].textContent = siteContent["contact"]["contact-h4"]

const multiP = document.querySelectorAll('p');
console.log(multiP);

multiP[4].textContent = siteContent["main-content"]["vision-content"]
multiP[5].textContent = siteContent["contact"]["address"]
multiP[6].textContent = siteContent["contact"]["phone"]
multiP[7].textContent = siteContent["contact"]["email"]

multiP[8].textContent = siteContent["footer"]["copyright"]

console.log(multiP[4])
console.log(multiP[5])
console.log(multiP[6])
console.log(multiP[7])

console.log(multiP[8])

console.log(myA)
console.log(myNav)

var a = document.createElement("a");
myNav.appendChild(a) //'<a href="#">More</a>')

myA = document.querySelectorAll('a');

console.log(myA)
console.log(myNav)
myA[myA.length-1].textContent = 'More'
myA[myA.length-1].href = '#'
myA[myA.length-1].style.color = 'red';

myNav.prepend(a) //'<a href="#">More</a>')

myA = document.querySelectorAll('a');

console.log(myA)
console.log(myNav)
myA[0].textContent = 'Start'
myA[0].href = '#'
myA[0].style.color = 'dodgerBlue';


// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them 
