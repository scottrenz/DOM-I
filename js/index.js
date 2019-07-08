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
let navDOM = document.querySelectorAll('nav a')
let navArr = Object.values(siteContent.nav)
for (i=0; i<(navDOM.length); i++)
{
  navDOM[i].textContent = navArr[i]
  navDOM[i].style.color = 'green'
}
aItem = document.createElement('a')
navDOM[navDOM.length-1].appendChild(aItem)
navDOM[navDOM.length-1].textContent='Last'
navDOM[0].prepend(aItem)
navDOM[0].textContent='First'

let ctaT = document.querySelector('.cta .cta-text')
let ctaH1 = document.querySelector('.cta .cta-text h1')
ctaH1.textContent = 'Awesome'
hItem = document.createElement('h1')
ctaT.prepend(hItem)
ctaH1 = document.querySelector('.cta .cta-text h1')
ctaH1.textContent = 'IS'
let ctaHHH = document.querySelectorAll('.cta .cta-text h1')
hhItem = document.createElement('h1')
ctaHHH[0].prepend(hhItem)
ctaH1H1 = document.querySelector('.cta .cta-text h1 h1')
ctaH1H1.textContent = 'DOM'
ctaT = document.querySelector('.cta .cta-text')

let ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = siteContent.cta.button
ctaButton.style.color = 'red'
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])
let mainArr = Object.values(siteContent['main-content'])
let topH41 = document.querySelector('.main-content .top-content .text-content h4')
let topH42 = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) h4')
topH41.textContent = mainArr[0]
topH42.textContent = mainArr[2]
let topP1 = document.querySelector('.main-content .top-content .text-content p')
let topP2 = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) p')
topP1.textContent = mainArr[1]
topP2.textContent = mainArr[3]
let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', mainArr[4])
let bottomH41 = document.querySelector('.main-content .bottom-content .text-content h4')
let bottomH42 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) h4')
let bottomH43 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) h4')
bottomH41.textContent = mainArr[5]
bottomH42.textContent = mainArr[7]
bottomH43.textContent = mainArr[9]
let bottomP1 = document.querySelector('.main-content .bottom-content .text-content p')
let bottomP2 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) p')
let bottomP3 = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) p')
bottomP1.textContent = mainArr[6]
bottomP2.textContent = mainArr[8]
bottomP3.textContent = mainArr[10]
let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact['contact-h4']
let contactP1 = document.querySelector('.contact p')
let contactP2 = document.querySelector('.contact p:nth-of-type(2)')
let contactP3 = document.querySelector('.contact p:nth-of-type(3)')
contactP1.textContent =  siteContent.contact.address
contactP2.textContent =  siteContent.contact.phone
contactP3.textContent =  siteContent.contact.email
let footerP = document.querySelector('footer p')
footerP.textContent = siteContent.footer.copyright
