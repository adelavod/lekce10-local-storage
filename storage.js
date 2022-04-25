// Tvorba objektu

let clovek = {
    jmeno: "Aleš",
    prijmeni: "Kremser",
    roknarozeni: 1994,
    barva: "blue",
    maSourozence: true,
};

/* console.log(clovek);
console.log(clovek.prijmeni);
console.log(2022-clovek.roknarozeni);
 */
// Překlad objektu do stringu JSON

//STRINGIFY objekt na string
let stringClovek = JSON.stringify(clovek);
console.log(stringClovek);

//PARSE string opět do objektu
let opetObjectClovek = JSON.parse(stringClovek);
console.log(opetObjectClovek);

//ukládám do localStorage jméno a příjmení z našeho objektu
localStorage.jmeno=clovek.jmeno;
localStorage.prijmeni=clovek.prijmeni;
