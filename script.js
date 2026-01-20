// ======= HERO TYPING EFFECT (Loop + Blinking Cursor) =======
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


// Select elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li a');

// Burger click → toggle menu + cross
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');   // Menu open/close
    burger.classList.toggle('toggle');    // Bars → Cross

    // Prevent scrolling when menu is open
    document.body.style.overflow = nav.classList.contains('nav-active') ? 'auto' : 'auto';
});

// Close menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        document.body.style.overflow = 'auto';
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



// ======= CONTACT FORM SUBMISSION =======
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  // --- 1. Send to Backend ---
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message); // "Contact saved successfully"
      form.reset();
    } else {
      alert(data.error || "Server Error!");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Server Error!");
  }

  // --- 2. Send WhatsApp Message ---
  const whatsappNumber = '923026897659'; // Pakistan format without + or 00
  const whatsappMessage = `Hi Dua!%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, '_blank');
});


function scrollSkills(amount) {
    document.getElementById('skillsGrid').scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}
