"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');
//PROMESA PARA CRECUPERAR EL JSON DEL IDIOMA PARA POSTERIORMENTE
//USAR ESE DATO PARA EL EVENTO CLICK
const changeLanguage = (languaje) => __awaiter(void 0, void 0, void 0, function* () {
    const requestJson = yield fetch(`/src/languages/${languaje}.json`);
    const texts = yield requestJson.json();
    for (let textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
});

if (flagsElement) {
    flagsElement.addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    });
}
