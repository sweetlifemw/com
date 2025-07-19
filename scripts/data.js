document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("https://sweetlife-1dpx.onrender.com/api/me", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    if (res.ok && data.loggedIn) {
      const user = data.user;

      // Loop through all .username elements
      document.querySelectorAll(".username2").forEach(el => {
        el.innerText = user.username;
      });

      document.querySelectorAll(".fullName2").forEach(el => {
        el.innerText = user.firstName + " " + user.lastName;
      });

      document.querySelectorAll(".phone2").forEach(el => {
        el.innerText = user.phone;
      });

      document.querySelectorAll(".account2").forEach(el => {
        el.innerText = user.accountNumber;
      });

      document.querySelectorAll(".balance2").forEach(el => {
        el.innerText = user.balance + " Kwacha";
      });
    } else {
      // User not logged in
       window.location.href = "../index.html";
    }
  } catch (err) {
    console.error("Failed to fetch user info:", err);
     window.location.href = "../index.html";
  }
});
