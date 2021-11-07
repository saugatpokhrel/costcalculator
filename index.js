let fee = {
  youtube: 11.99,
  netflix: 9.99,
  spotify: 9.99,
  prime: 14.99,
  canva:12.99,
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
  appletvplus: 4.99,
  googlecloud: 1.99,
  dropbox: 9.99,
  nordvpn:11.95,
  expressvpn: 12.95,
  surfshark:12.95,
  protonvpn:4,
  cyberghost:12.99,
  ipvanish:10.99,
  xboxcloud: 14.99,
  geforce: 9.99,
  shadow: 24.99,
  vortex: 9.99,
  psnow: 9.99,
  boosteriod: 17.32,
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
let googlecloudcheck = document.querySelector("input[name=googlecloud]");
let dropboxcheck = document.querySelector("input[name=dropbox]");
let nordvpncheck = document.querySelector("input[name=nordvpn]");
let expressvpncheck = document.querySelector("input[name=expressvpn]");
let surfsharkcheck = document.querySelector("input[name=surfshark]");
let protonvpncheck = document.querySelector("input[name=protonvpn]");
let cyberghostcheck = document.querySelector("input[name=cyberghost]");
let ipvanishcheck = document.querySelector("input[name=ipvanish]");
let xboxcloudcheck = document.querySelector("input[name=xboxcloud]");
let geforcecheck = document.querySelector("input[name=geforce]");
let shadowcheck = document.querySelector("input[name=shadow]");
let vortexcheck = document.querySelector("input[name=vortex]");
let psnowcheck = document.querySelector("input[name=psnow]");
let boosteroidcheck = document.querySelector("input[name=boosteroid]");
let canvacheck=document.querySelector("input[name=canva]");
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
googlecloudcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.googlecloud
  } else {
    totalprice = totalprice - fee.googlecloud
  }
}
);
expressvpncheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.expressvpn
  } else {
    totalprice = totalprice - fee.expressvpn
  }
}
);
xboxcloudcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.xboxcloud
  } else {
    totalprice = totalprice - fee.xboxcloud
  }
});
geforcecheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.geforce
  } else {
    totalprice = totalprice - fee.geforce
  }
});
shadowcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.shadow
  } else {
    totalprice = totalprice - fee.shadow
  }
});
vortexcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.vortex
  } else {
    totalprice = totalprice - fee.vortex
  }
});
psnowcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.psnow
  } else {
    totalprice = totalprice - fee.psnow
  }
});
boosteroidcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.boosteriod
  } else {
    totalprice = totalprice - fee.boosteriod
  }
});
dropboxcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.dropbox
  } else {
    totalprice = totalprice - fee.dropbox
  }
});
nordvpncheck.addEventListener('click', function () {  
  if (this.checked) {
    totalprice = totalprice + fee.nordvpn
  } else {
    totalprice = totalprice - fee.nordvpn
  }
});
surfsharkcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.surfshark
  } else {
    totalprice = totalprice - fee.surfshark
  }
});
protonvpncheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.protonvpn
  } else {
    totalprice = totalprice - fee.protonvpn
  }
});
cyberghostcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.cyberghost
  } else {
    totalprice = totalprice - fee.cyberghost
  }
});
ipvanishcheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.ipvanish
  } else {
    totalprice = totalprice - fee.ipvanish
  }
});
canvacheck.addEventListener('click', function () {
  if (this.checked) {
    totalprice = totalprice + fee.canva
  } else {
    totalprice = totalprice - fee.canva
  }
});







//Check the final price

finalprice.addEventListener('click', function () {
  let totalround = Math.round(totalprice * 100) / 100
  if (totalround == 0) {
    result.innerHTML = `Your final price is $ ${totalround}, Please Check A Item.`
  } else {
    result.innerHTML = `Your final price is $ ${totalround}`
  }
}
);

