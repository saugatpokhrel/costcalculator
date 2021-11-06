let fee = {
  youtube: 11.99,
  netflix: 9.99,
  spotify: 9.99,
  prime: 14.99,
  github: 4,
  discord: 9.99,
  forbes: 65,
  insider: 12.99,
}
let totalprice = 0
let checkboxyoutube = document.querySelector("input[name=youtube]");
checkboxyoutube.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.youtube
  } else {
    totalprice = totalprice - fee.youtube
  }
});
let checkboxnetflix = document.querySelector("input[name=netflix]");
checkboxnetflix.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.netflix
  } else {
    totalprice = totalprice - fee.netflix
  }
}
);
let githubcheck = document.querySelector("input[name=github]");
githubcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.github
  } else {
    totalprice = totalprice - fee.github
  }
}
);
let discordcheck = document.querySelector("input[name=discord]");
discordcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.discord
  } else {
    totalprice = totalprice - fee.discord
  }
}
);
let primecheck = document.querySelector("input[name=prime]");
primecheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.prime
  } else {
    totalprice = totalprice - fee.prime
  }
}
);
let forbescheck = document.querySelector("input[name=forbes]");
forbescheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.forbes
  } else {
    totalprice = totalprice - fee.forbes
  }
}
);
let insidercheck = document.querySelector("input[name=insider]");
insidercheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.insider
  } else {
    totalprice = totalprice - fee.insider
  }
}
);
//Check the final price
let finalprice = document.getElementById("finalprice");
let result = document.getElementById("result");
finalprice.addEventListener('click', function () {
  let totalround = Math.round(totalprice * 100) / 100
  result.innerHTML = `Your final price is $ ${totalround}`
}
);
