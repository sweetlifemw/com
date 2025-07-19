document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;
  const district = document.getElementById("district").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const errorBox = document.getElementById("error");
  const successBox = document.getElementById("success");

  errorBox.style.display = "none";
  successBox.style.display = "none";

  if (password !== confirmPassword) {
    errorBox.textContent = "Passwords do not match.";
    errorBox.style.display = "block";
    return;
  }

  try {
    const res = await fetch("https://sweetlife-1dpx.onrender.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        phone,
        gender,
        district,
        password,
        confirmPassword
      })
    });

    const data = await res.json();

    if (res.ok) {
      successBox.textContent = "Account created successfully! Redirecting...";
      successBox.style.display = "block";
      setTimeout(() => {
        window.location.href = "/htmls-pages/home.html";
      }, 2000);
    } else {
      errorBox.textContent = data.message || "Registration failed";
      errorBox.style.display = "block";
    }

  } catch (err) {
    errorBox.textContent = "Network error. Please try again.";
    errorBox.style.display = "block";
  }
});
