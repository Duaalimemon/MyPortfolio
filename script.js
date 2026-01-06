Footer" "// ======= HERO TYPING EFFECT (Loop + Blinking Cursor) =======
const typingText = document.querySelector('.typing');


const roles = [
"Hello, I'm DUA ALI MEMON",
"Full Stack Web Developer",
"MERN Stack Developer",
"Frontend Enthusiast",
"Programmer",
"Creative Web Designer"
];


let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 60;
let erasingSpeed = 40;
let delayBetweenWords = 1200;


function type() {
if (charIndex < roles[roleIndex].length) {
typingText.innerHTML += roles[roleIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingSpeed);
} else {
setTimeout(erase, delayBetweenWords);
}
}


function erase() {
if (charIndex > 0) {
typingText.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
charIndex--;
setTimeout(erase, erasingSpeed);
} else {
roleIndex = (roleIndex + 1) % roles.length;
setTimeout(type, 200);
}
}


window.addEventListener("load", () => {
typingText.innerHTML = "";
setTimeout(type, 300);
});
// Navbar burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li a');


burger.addEventListener('click', () => {
nav.classList.toggle('active');
burger.classList.toggle('toggle');
});


// Close nav when a link is clicked
navLinks.forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('active');  // hide menu
burger.classList.remove('toggle'); // reset burger animation
});
});


// ======= SMOOTH SCROLL FOR NAV LINKS =======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});


// ======= FADE-IN ANIMATION FOR SECTIONS =======
const fadeElements = document.querySelectorAll('.fade-in');


const fadeObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('show'); // triggers CSS fade-in
}
});
}, { threshold: 0.2 });


fadeElements.forEach(el => fadeObserver.observe(el));


const form = document.getElementById('contactForm');


form.addEventListener('submit', (e) => {
e.preventDefault();


const name = encodeURIComponent(document.getElementById('name').value.trim());
const email = encodeURIComponent(document.getElementById('email').value.trim());
const msg = encodeURIComponent(document.getElementById('Message').value.trim());


// WhatsApp number should be in full international format without + or 00
const whatsappNumber = '923026897659'; // 03… becomes 9230… for Pakistan
const whatsappMessage = Hi Dua!%0AName: ${name}%0AEmail: ${email}%0AMessage: ${msg};


const whatsappURL = https://wa.me/${whatsappNumber}?text=${whatsappMessage};
window.open(whatsappURL, '_blank');
});
Footer
