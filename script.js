// Mobile navigation
const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
    }
  });
}

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const questionBtn = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const toggle = item.querySelector(".faq-toggle");

  questionBtn.addEventListener("click", () => {
    const isOpen = answer.style.display === "block";

    faqItems.forEach((other) => {
      const otherAnswer = other.querySelector(".faq-answer");
      const otherToggle = other.querySelector(".faq-toggle");
      otherAnswer.style.display = "none";
      otherToggle.textContent = "+";
    });

    if (!isOpen) {
      answer.style.display = "block";
      toggle.textContent = "−";
    } else {
      answer.style.display = "none";
      toggle.textContent = "+";
    }
  });
});

// Simple in-browser form handling (replace with real backend)
const contactForm = document.getElementById("contactForm");
const heroForm = document.getElementById("heroForm");
const contactSuccess = document.getElementById("contactSuccess");

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitButton = form.querySelector("button[type='submit']");
  if (!submitButton) return;

  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  console.log("Form submission payload:", payload);

  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
    form.reset();

    if (form.id === "contactForm" && contactSuccess) {
      contactSuccess.textContent =
        "Thank you. Your request has been received. A consultant will contact you shortly.";
    }

    if (form.id === "heroForm") {
      alert("Thank you. Your callback request has been submitted.");
    }
  }, 800);
}

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);
}

if (heroForm) {
  heroForm.addEventListener("submit", handleFormSubmit);
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
