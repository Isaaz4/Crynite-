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

const themeToggle = document.getElementById("themeToggle");
const hero = document.getElementsByClassName("hero");
const cryptoh1 =  document.getElementsByClassName("cryptoh1");
const securitycolor = document.getElementsByClassName("security");
const herobutton = document.getElementsByClassName("herobut");
const trade = document.getElementsByClassName("trade");
const about= document.getElementsByClassName("about1")

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  hero[0].classList.toggle("light");
  cryptoh1[0].classList.toggle("light");
  securitycolor[0].classList.toggle("light");
  herobutton[0].classList.toggle("light");
  trade[0].classList.toggle(".light")
  about[0].classList.toggle("light");

  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

const mobilebutton = document.querySelector(".hamburger");
const menu = document.querySelector(".mobilemenu");

mobilebutton.addEventListener("click", () =>{
  menu.classList.toggle("open");
  console.log("menu open")
})
