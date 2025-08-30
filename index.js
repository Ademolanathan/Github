const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    responseMessage.textContent = "⚠️ Please fill in all fields.";
    responseMessage.className = "error";
    return;
  }

  // Example of sending data with Fetch (needs backend endpoint)
  fetch("https://example.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => {
    if (res.ok) {
      responseMessage.textContent = "✅ Message sent successfully!";
      responseMessage.className = "success";
      form.reset();
    } else {
      throw new Error("Network response was not ok.");
    }
  })
  .catch(() => {
    responseMessage.textContent = "❌ Failed to send message. Try again later.";
    responseMessage.className = "error";
  });
});
