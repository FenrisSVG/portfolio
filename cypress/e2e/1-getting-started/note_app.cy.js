/* global cy */

describe('Portfolio', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    // TEST PARACONFIRMAR QUE SE RENDERIZA NUESTRA PAGINA
    it('frontpage can be opened', () => {
        cy.contains('Const name = Félix')
    })
    // TEST PARA SABER SU LA HAMBURGUESA DEL MENU FUNCIONA Y MUESTRA EL MENU
    it('menu can be opened and closes', () => {
        cy.get('[data-test-id="menu-icon-test"]').click()
        cy.get('[data-test-id="main-menu-test"]').should(($lis) => {
            expect($lis, '4 items').to.have.length(4)
            expect($lis.eq(0), 'first item').to.contain('Sobre mi')
            expect($lis.eq(1), 'second item').to.contain('Conocimientos')
            expect($lis.eq(2), 'third item').to.contain('Proyectos')
            expect($lis.eq(3), 'fourth item').to.contain('Contacto')
          })
        cy.get('[data-test-id="menu-footer-test"]')
            .should('contain','Felix Sandoval Portfolio')
        cy.get('[data-test-id="icon-close-menu"]').click()
    })

    /* TEST PARA LA SECCION MAIN */

    //TEST PARA SABER SI EL BOTON CONTACTAME REALIZA SU FUNCION
    it('button contact me its worked', () =>{
        cy.get('[data-test-id="contact-me-test"]').should('be.visible')
        // cy.get('[data-test-id="contact-me-test"]').click()
    })

    it('section about me its showed', () =>{
        cy.get('[data-test-id="about-test"]').should(($row) => {
            expect($row.text()).to.match(/Sobre Mi/i);
            expect($row.text()).to.match(/Front-End/i);
            expect($row.text()).to.match(/dificiles desafios/i);
        })

        cy.get('[data-test-id="personal-image-test"]').should('be.visible')           
    })
    //Test para la seccion de los conocimientos
    describe('conocimientos section tested', ()=>{
        it('section conocimientos its showed to the public', ()=>{
            cy.get('[data-test-id="conocimientos-section-test"]').should(($row) => {
                expect($row.text()).to.match(/tecnologias/i);
                expect($row.text()).to.match(/HTML5/i);
                expect($row.text()).to.match(/VITE/i);
                expect($row.text()).to.match(/Cypress/i);
                expect($row.text()).to.match(/JavaScript/i);
                expect($row.text()).to.match(/VueJS/i);
            })
            cy.get('.card-header__icon').should('be.visible')
            cy.get('.card-header__image').should('be.visible')
        })
    })
    // TEST PARA LAS REDES SOCIALES
    describe('socials icons tested', () =>{
        it('icon could be showed', ()=>{
            cy.get('.socials-icons__link').should('be.visible')
        })
        it('socials icons can be clicked', () =>{
            cy.get('.socials-icons__link').click()
        })
    })
})