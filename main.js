// do proměnné si uložíme prvek ve stránce,
// kam budeme vypisovat výsledek
const vysledek = document.querySelector('#vysledek');

// ihned po načtení stránky zavoláme funkci,
// která přečte hodnotu z Local Storage a zobrazí ji
nactiHodnotu();


// funkce pro načtení a zobrazení hodnoty z Local Storage
function nactiHodnotu() {
	// načteme z Local Storage
let hodnota = localStorage.getItem('mojehodnota');

	// pokud hodnota nexistuje, vypíšeme chybu
		if (hodnota === null || hodnota === undefined) 
		{vysledek.textContent="V local storage neexistuje 'mojehodnota'."}
	// jinak hodnota existuje a vypíšeme ji
		else {vysledek.textContent=hodnota;};
}


// funkce pro uložení hodnoty do Local Storage
function ulozHodnotu() {
	// hodnotu načteme z pole formuláře
let hodnota = document.querySelector('#hodnota').value ;

	// a uložíme do local storage pod jménem "mojehodnota"
	localStorage.setItem('mojehodnota', hodnota);
	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce
	nactiHodnotu();
}

// funkce pro smazání hodnoty z Local Storage
function smazatHodnotu() {
	if (localStorage.mojehodnota !== null)
	{
		localStorage.removeItem('mojehodnota');
	}
	
	// smažeme hodnotu uloženou pod jménem "mojehodnota",
	// pokud takový klíč neexistuje, nestane se nic

	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce

}