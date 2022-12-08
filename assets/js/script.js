let min_price = 0;
let max_price = 100;

$("#min-price").on("change mousemove", function () {
  min_price = parseInt($("#min-price").val());
  $("#min-price-txt").text(min_price + "€");
});

$("#max-price").on("change mousemove", function () {
  max_price = parseInt($("#max-price").val());
  $("#max-price-txt").text(max_price + "€");
});

const getFlagEmoji = (countryCode) => countryCode.toUpperCase().replace(/./g,
  char => String.fromCodePoint(127397 + char.charCodeAt())
);

const flagReplace = document.querySelectorAll('[data-flag]');
flagReplace.forEach(s => s.innerHTML = getFlagEmoji(s.dataset.flag))