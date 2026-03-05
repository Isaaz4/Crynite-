document.addEventListener("DOMContentLoaded", async () => {

  // ===== Mobile Menu =====
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobilemenu");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    if (mobileMenu.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});  

  // ===== Theme Toggle =====
  const themeToggles = document.querySelectorAll(".themeToggle");
  const hero = document.getElementsByClassName("hero");
  const cryptoh1 = document.getElementsByClassName("cryptoh1");
  const securitycolor = document.getElementsByClassName("security");
  const herobutton = document.getElementsByClassName("herobut");
  const about = document.getElementsByClassName("about1");
  const trade = document.querySelectorAll(".trade");

  themeToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      hero[0].classList.toggle("light");
      cryptoh1[0].classList.toggle("light");
      securitycolor[0].classList.toggle("light");
      herobutton[0].classList.toggle("light");
      about[0].classList.toggle("light");
      trade[0].classList.toggle("light");

      toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  });

  // ===== Fetch Crypto Prices =====
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    );

    const data = await response.json();
    const btc = data.find(coin => coin.id === "bitcoin");

    document.getElementById("btc-price").textContent = `$${btc.current_price}`;
    document.getElementById("btc-change").textContent =
      `${btc.price_change_percentage_24h.toFixed(2)}%`;

  } catch (error) {
    console.error(error);
  }

});
