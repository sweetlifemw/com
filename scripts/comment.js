document.addEventListener("DOMContentLoaded", () => {
  
    
const names = [
  "Chikondi", "Thokozani", "Blessings", "Tamara", "Limbani", "Mphatso", "Tiwonge", "Chimwemwe",
  "Yamikani", "Fatsani", "Zione", "Precious", "Dalitso", "Tadala", "Mayeso", "Alinafe",
  "Wiza", "Chifundo", "Memory", "Pilirani", "Hope", "Inno", "Madalitso", "Bright", "Misheck",
  // Add more up to 1000
];

const fakeComments = [
  "I really love this!", "This is amazing!", "Wow, didn’t expect this!", "Keep it up!",
  "Best site ever!", "So interesting!", "How do I join?", "Looks legit!", "Following now.",
  "Can’t believe this works!", "Already deposited!", "I'm enjoying this so much."
];

const timeOptions = [
  "Now", "1 min ago", "2 mins ago", "3 mins ago", "5 mins ago", "Just now"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function showLockedPopup(type) {
    const message = `Sorry dear, you can’t view the image of ${type.toLowerCase()}s for privacy. You don’t have enough funds in your account.`;
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("popupModal").style.display = "flex";
  }


function generateComments() {
  const container = document.getElementById("commentSection");
  container.innerHTML = ""; // clear previous comments

  for (let i = 0; i < 10; i++) {
    const name = names[getRandomInt(names.length)];
    const comment = fakeComments[getRandomInt(fakeComments.length)];
    const time = timeOptions[getRandomInt(timeOptions.length)];

    const commentElement = document.createElement("div");
    commentElement.className = "testimony";

    commentElement.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="comment-icon" alt="icon" />
      <div class="comment-content">
        <div class="comment-left">
          <div class="comment-name">${name}</div>
          <div class="comment-text">${comment}</div>
        </div>
        <div class="comment-time">${time}</div>
      </div>
    `;

    container.appendChild(commentElement);
  }
}

window.onload = generateComments;



function showMoneyPopup() {
  document.getElementById("moneyPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("moneyPopup").style.display = "none";
}
function closeCommentPopup() {
  document.getElementById("popup-overlay").style.display = "none";
}

function goToAccount() {
  // Replace this with actual account page link
  window.location.href = "./";
}

  const form = document.getElementById("depositForm");
  const popup = document.getElementById("popup");
  const paymentInfo = document.getElementById("paymentInfo");

  const paymentDetails = {
    airtel: "Send to Airtel Money Number: 0999 123 456",
    tnm: "Send to TNM Mpamba Number: 0888 654 321",
    mpambaCode: "Use Agent Mpamba Code: 112233"
  };

  function showPaymentDetails(value) {
    if (paymentDetails[value]) {
      paymentInfo.textContent = paymentDetails[value];
      paymentInfo.style.display = "block";
    } else {
      paymentInfo.textContent = "";
      paymentInfo.style.display = "none";
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = parseInt(form.querySelector('input[type="number"]').value);
    if (amount < 11000) {
      alert("Minimum deposit is MWK 11,000.");
      return;
    }
    popup.style.display = "flex";
  });

  function closePopup() {
    popup.style.display = "none";
    form.reset();
    paymentInfo.style.display = "none";
  }


  const videos = [
    { title: "Malawi Love Story", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Spoil Me Vibes", url: "https://www.w3schools.com/html/movie.mp4" },
    { title: "Mzuzu Connection", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Blantyre Romance", url: "https://www.w3schools.com/html/movie.mp4" },
    { title: "Zomba Secrets", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Blesser Encounter", url: "https://www.w3schools.com/html/movie.mp4" },
    { title: "Sweet Moments", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "VIP Sugar Club", url: "https://www.w3schools.com/html/movie.mp4" }
    // Add more video objects as needed
  ];

  let index = 0;
  const perPage = 4;
  const container = document.getElementById("videoSection");

  function loadVideos() {
    const end = index + perPage;
    const slice = videos.slice(index, end);

    slice.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <video controls muted>
          <source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-title">${video.title}</div>
      `;
      container.appendChild(card);
    });

    index += perPage;
  }

  // Initial load
  loadVideos();

  // Infinite scroll
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      loadVideos();
    }
  });


  
});


