function oblicz(){
    var dlugosc = document.querySelector('input[name="długość"]:checked');
    if (!dlugosc){
        alert("wybierz długość")
    }

    var cenabase;

    if (dlugosc.value === "25") {
        cenabase = 25;
    }
    else if (dlugosc.value === "30") {
        cenabase = 30;
    }
    else if (dlugosc.value === "40") {
        cenabase = 40;
    }
    else if (dlugosc.value === "50") {
        cenabase = 50;
    }
    
    var cenaprom = cenabase - 10;

    document.getElementById("wynik").innerHTML = "cena promocyjna: " + cenaprom + "zł.";
}