const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector("input[type='email']").value.trim();
  const password = form.querySelector("input[type='password']").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert(`Login successful ✔️\nWelcome back, ${email}`);
  
  form.reset();
});
