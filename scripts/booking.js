document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-btn");
  const hamburger = document.querySelector(".hamburger");
  const navMobileContainer = document.querySelector(".nav-mobile-container");

  // Get the current page filename only
  const currentPage =
    window.location.pathname.split("/").pop() || "booking.html";
  console.log("Current page:", currentPage); // Debug log

  // First, remove any existing active classes
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Set active state based on exact page match
  if (currentPage === "booking.html") {
    document.getElementById("hotels").classList.add("active");
  } else if (currentPage === "flights.html") {
    document.getElementById("flights").classList.add("active");
  } else if (currentPage === "carrental.html") {
    document.getElementById("car-hire").classList.add("active");
  }

  // Button click handlers
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Page navigation
      const pages = {
        flights: "flights.html",
        hotels: "booking.html",
        "car-hire": "carrental.html",
      };
      window.location.href = pages[this.id] || "#";
    });
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobileContainer.classList.toggle("active");
  });

  // Close menu on outside click
  document.addEventListener("click", (event) => {
    if (
      !navMobileContainer.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      hamburger.classList.remove("active");
      navMobileContainer.classList.remove("active");
    }
  });
});
