
const cases = document.querySelectorAll(".case-jour");
const barre = document.getElementById("barre-progression");
const pourcentage = document.getElementById("pourcentage");
const bouton = document.getElementById("renouveler");


function calculerProgression() {
    let termines = 0;

    cases.forEach(function (caseJour) {
        if (caseJour.checked) {
            termines++;
        }
    });

    let progression = (termines / cases.length) * 100;

    barre.value = progression;
    pourcentage.textContent = progression + " %";
   
}

cases.forEach(function (caseJour) {
    caseJour.addEventListener("change", calculerProgression);
});


bouton.addEventListener("click", function () {

    cases.forEach(function (caseJour) {
        caseJour.checked = false;
    });

    calculerProgression();
    alert("Semaine renouvelée");

});