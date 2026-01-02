const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  const email = inputs[0].value.trim();
  const password = inputs[1].value.trim();
  const confirm = inputs[2].value.trim();

  if (!email || !password || !confirm) {
    alert("Please fill in all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match ❌");
    return;
  }

  alert(`Account created successfully 🎉\nWelcome, ${email}`);
  
  form.reset();
});
