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

  // 3. Registration form handling with Google Sheets integration
  const form = document.querySelector("#registration form");
  const scriptURL = "https://script.google.com/macros/s/AKfycbxjpWwDfH8Vb_w1N0MUSzVMRu2kKjSAmzK7TrBwKI_rUdnfmRAq4esYI0vqWvxklPLHHA/exec
"; 

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const age = form.querySelector('[name="age"]').value.trim();
      const role = form.querySelector('[name="role"]').value;

      if (!name || !email || !phone || !age || !role) {
        alert("Please fill in all fields.");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("age", age);
      formData.append("role", role);

      fetch(scriptURL, { method: "POST", body: formData })
        .then(response => {
          if (response.ok) {
            alert(`✅ Thank you, ${name}! Your registration is complete.\nWe'll reach out to you at ${email}.`);
            form.reset();
          } else {
            alert("⚠️ Submission failed. Please try again.");
          }
        })
        .catch(error => {
          console.error("Error!", error.message);
          alert("❌ Network error. Please try again later.");
        });
    });
  }
});
