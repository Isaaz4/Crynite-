document.addEventListener("DOMContentLoaded", () => {
const btcprice = document.getElementById("btc-price"); 
const btcchange = document.getElementById("btc-change");
const ethptice = document.getElementById("eth-price")
const ethchange= document.getElementById("eth-change");
const solprice = document.getElementById("sol-price");
const solchange = document.getElementById("sol-change");
const tetherprice = document.getElementById("usdt-price");
const tetherchange = document.getElementById("usdt-change");
const dogeprice = document.getElementById("doc-price");
const dogechange = document.getElementById("doc-change");
const xrpprice = document.getElementById("xrp-price");
const xrpchange = document.getElementById("xrp-change");
const usdcprice = document.getElementById("usdc-price");
const usdcchange = document.getElementById("usdc-change");
const trxprice = document.getElementById("trx-price");
const trxchange = document.getElementById("trx-change");
const carprice = document.getElementById("car-price");
const carchange = document.getElementById("car-change");
const suiprice = document.getElementById("sui-price");
const suichange = document.getElementById("sui-change");
const shibaprice = document.getElementById("shida-price");
const shibachange = document.getElementById("shida-change");
const daiprice = document.getElementById("dai-price");
const daichange = document.getElementById("dai-change");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    );

    const data = await response.json();

    const btc = data.find(coin => coin.id === "bitcoin");

    document.getElementById("btc-price").textContent = `$${btc.current_price}`;
    document.getElementById("btc-change").textContent = `${btc.price_change_percentage_24h.toFixed(2)}%`;

  } catch (error) {
    console.error(error);
  }
});
});

const themeToggles = document.querySelectorAll(".themeToggle");
const hero = document.querySelector(".hero");
const cryptoh1 = document.getElementById("crypto")?.querySelector("h1");
const security = document.querySelector(".security");
const mobileToggle = document.querySelector(".mobiletoggle");
const footer = document.getElementById("contact");
const herobut = document.querySelector(".herobut");
const color = document.querySelector(".color")
const Authen = document.querySelector(".login");

themeToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    hero?.classList.toggle("light");
    cryptoh1?.classList.toggle("light");
    security?.classList.toggle("light");
    mobileToggle?.classList.toggle("light");
    footer?.classList.toggle("light");
    herobut?.classList.toggle("light");
    color?.classList.toggle("light");
    Authen?.classList.toggle("light");


    const isLight = document.body.classList.contains("light");

    themeToggles.forEach(btn => {
      const icon = btn.querySelector("i");
      if (!icon) return;

      if (isLight) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    });

    console.log("Theme toggled");
  });
});

const mobilebutton = document.querySelector(".hamburger");
const menu = document.querySelector(".mobilemenu");
const menulist = document.querySelectorAll(".mobilemenu li");

mobilebutton.addEventListener("click", () =>{
  menu.classList.toggle("open");
  console.log("menu open")
})
menulist.forEach(items => {
  items.addEventListener("click", () => {
    menu.classList.remove("open");  
  });
});



