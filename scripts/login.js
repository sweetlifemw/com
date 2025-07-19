


document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const phone = document.getElementById("phoneOrUsername").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("https://sweetlife-1dpx.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // important to receive/set cookies
      body: JSON.stringify({ phone, password })
    });

    const data = await res.json();

    if (res.ok) {
      // success — redirect to home page
      window.location.href = "htmls-pages/home.html";
    } else {
      document.getElementById("error").textContent = data.message || "Login failed";
      document.getElementById("error").style.display = "block";
    }
  } catch (err) {
    document.getElementById("error").textContent = "Network error. Try again later.";
    document.getElementById("error").style.display = "block";
  }
});


