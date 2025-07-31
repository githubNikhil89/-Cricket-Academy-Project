document.addEventListener("DOMContentLoaded", function () {
  // 1. Set dynamic title
  document.title = "Crick_Factory - Champion Cricket Academy";

  // 2. Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Registration form handling (no backend)
  const form = document.querySelector("#registration form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect input values
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const age = form.querySelector('[name="age"]').value.trim();
      const role = form.querySelector('[name="role"]').value;

      // Basic validation
      if (!name || !email || !phone || !age || !role) {
        alert("❗ Please fill in all fields.");
        return;
      }

      // Simulated successful submission
      alert(`✅ Thank you, ${name}! Your registration has been received.\nWe'll contact you at ${email}.`);

      // Reset the form
      form.reset();
    });
  }
});

