let fee = {
  youtube: 11.99,
  netflix: 9.99,
  spotify: 9.99,
  prime: 14.99,
  microsoft365: 9.99,
  github: 4,
  discord: 9.99,
  forbes: 65,
  insider: 12.99,
  hbomax: 14.99,
  disney: 7.99,
  hulu: 65,
  sling: 35,
  peacock: 4.99,
  fubotv: 65,
  crackle: 4.99,
  espn: 6.99,
  paramountplus: 10,
  appletvplus:4.99,
}
//Initializing the variables
let totalprice = 0
let checkboxyoutube = document.querySelector("input[name=youtube]");
let checkboxnetflix = document.querySelector("input[name=netflix]");
let microsoft365checkbox = document.querySelector("input[name=microsoft365]");
let githubcheck = document.querySelector("input[name=github]");
let discordcheck = document.querySelector("input[name=discord]");
let primecheck = document.querySelector("input[name=prime]");
let forbescheck = document.querySelector("input[name=forbes]");
let insidercheck = document.querySelector("input[name=insider]");
let hbomaxcheck = document.querySelector("input[name=hbo-max]");
let spotifycheck = document.querySelector("input[name=spotify]");
let disneycheck = document.querySelector("input[name=disney]");
let hulucheck = document.querySelector("input[name=hulu]");
let slingcheck = document.querySelector("input[name=sling]");
let peacockcheck = document.querySelector("input[name=peacock]");
let fubotvcheck = document.querySelector("input[name=fubotv]");
let cracklecheck = document.querySelector("input[name=crackle]");
let espncheck = document.querySelector("input[name=espn]");
let paramountpluscheck = document.querySelector("input[name=paramountplus]");
let appletvpluscheck = document.querySelector("input[name=appletvplus]");
let finalprice = document.getElementById("finalprice");
let result = document.getElementById("result");


checkboxyoutube.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.youtube
  } else {
    totalprice = totalprice - fee.youtube
  }
});
checkboxnetflix.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.netflix
  } else {
    totalprice = totalprice - fee.netflix
  }
}
);
githubcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.github
  } else {
    totalprice = totalprice - fee.github
  }
}
);
discordcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.discord
  } else {
    totalprice = totalprice - fee.discord
  }
}
);
primecheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.prime
  } else {
    totalprice = totalprice - fee.prime
  }
}
);
forbescheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.forbes
  } else {
    totalprice = totalprice - fee.forbes
  }
}
);
insidercheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.insider
  } else {
    totalprice = totalprice - fee.insider
  }
}
);
hbomaxcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.hbomax
  } else {
    totalprice = totalprice - fee.hbomax
  }
}
);
spotifycheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.spotify
  } else {
    totalprice = totalprice - fee.spotify
  }
}
);
disneycheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.disney
  } else {
    totalprice = totalprice - fee.disney
  }
}
);
hulucheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.hulu
  } else {
    totalprice = totalprice - fee.hulu
  }
}
);
slingcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.sling
  } else {
    totalprice = totalprice - fee.sling
  }
}
);
peacockcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.peacock
  } else {
    totalprice = totalprice - fee.peacock
  }
}
);
fubotvcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.fubotv
  } else {
    totalprice = totalprice - fee.fubotv
  }
}
);
cracklecheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.crackle
  } else {
    totalprice = totalprice - fee.crackle
  }
}
);
espncheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.espn
  } else {
    totalprice = totalprice - fee.espn
  }
}
);
paramountpluscheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.paramountplus
  } else {
    totalprice = totalprice - fee.paramountplus
  }
}
);
appletvpluscheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.appletvplus
  } else {
    totalprice = totalprice - fee.appletvplus
  }
}
);
microsoft365checkbox.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.microsoft365
  } else {
totalprice = totalprice - fee.microsoft365
  }
}
);





//Check the final price

finalprice.addEventListener('click', function () {
  let totalround = Math.round(totalprice * 100) / 100
  result.innerHTML = `Your final price is $ ${totalround}`
}
);

