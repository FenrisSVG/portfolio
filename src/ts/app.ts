const flagsElement: HTMLElement = document.getElementById('flags') as HTMLElement
const textsToChange: NodeListOf<HTMLElement> = 
            document.querySelectorAll('[data-section]') 

//PROMESA PARA CRECUPERAR EL JSON DEL IDIOMA PARA POSTERIORMENTE
//USAR ESE DATO PARA EL EVENTO CLICK
const changeLanguage = async (languaje) : Promise<void> => {
    const requestJson: Response = await fetch(`/src/languages/${languaje}.json`)
    const texts: string = await requestJson.json()

    for(let textToChange of textsToChange){
        const section: number = (textToChange.dataset.section as number)
        const value: number = <number> textToChange.dataset.value
            
        textToChange.innerHTML = texts[section][value]
    }
}

if(flagsElement){
    flagsElement.addEventListener('click', (e) : void => {
        changeLanguage(e.target.parentElement.dataset.language)
    })
}
