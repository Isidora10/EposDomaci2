// Scroll na pocetak stranice za dugme
function naVrh() {
    window.scrollTo(0, 0);
}


// Promena footera na pocetnoj strani
function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("FOOTER")[0].style.backgroundColor=b;

    window.alert("Iznenadjenje! Pozadina footera je promenjena!")
}

