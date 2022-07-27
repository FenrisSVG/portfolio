<template>
    <!-- ESTRUCTURA DE LOS CONOCIMIENTOS -->
    <section class="conocimientos-section" id="conocimientos"
    data-test-id="conocimientos-section-test">
        <h2 class="conocimientos-title"><span class="about-title--color">02.</span> Conocimientos
        <sub>(Front-End)</sub> 💻</h2>
        <article class="conocimientos-article">
            <h3 class="conocimientos-article__text">A continuación se mostrará una lista de las <span>tecnologias</span> en las que
                tengo conocimiento y estoy <span>listo a afrontar</span>,
            </h3>
            <!-- CARD OF MY KNOWLEDGES -->
            <div class="card card--one">
                <!-- CARD DEL HTML -->
                <p class="card-header__title"><span>Estructurar</span> la Página</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i class="fab fa-html5 card-header__icon"></i>
                    </div>
                    <p class="card-header__text">HTML5</p>
                </header>
            </div>
            <!-- CARD BRING FOR JAVASCRIPT FOR CSS AND JS -->
            <div :class="item.class" v-for="item in technos" :key="item.id">
                <p :class="item.titleClass" :data-value="item.title"></p>
                <header class="card-header card-header--flex">
                    <div class="card-header__techno">
                        <div>
                            <i :class="item.icon"></i>
                        </div>
                        <p class="card-header__text">{{item.name}}</p>
                    </div>
                    <div :class="[item.typescript ? 'card-header__techno card-header__techno--2' : null]"
                    v-if="item.typescript">
                        <div>
                            <i class="devicon-typescript-plain"></i>
                        </div>
                        <p class="card-header__text">Typescript</p>
                    </div>
                </header>
                <footer class="card-footer">
                    <div class="card-footer__frameworks">
                        <h4 class="card-footer__title">{{item.frameworkTitle}}</h4>
                        <div class="card-header__techno">
                            <i v-if="item.isIcon" :class="item.iconFramework"></i>
                            <img v-else src="../assets/icons/tailwind-64x64.png" loading="lazy"
                            alt="css framework tailwind icon" class="card-header__image">
                        </div>
                        <p class="card-header__text">{{item.framework}}</p>
                    </div>
                    <div class="card-footer__pre">
                        <h4 class="card-footer__title">{{item.preTitle}}</h4>
                        <div class="card-header__techno">
                            <i :class="item.iconPre" v-if="!item.isIcon"></i>
                            <img v-else src="../assets/icons/babel-64x64.png" loading="lazy"
                            alt="js babel icon" class="card-header__image">
                        </div>
                        <p class="card-header__text">{{item.preProcesador}}</p>
                    </div>
                </footer>
            </div>
                <!-- CARD DE GIT-->
            <div class="card card--two">
                <p class="card-header__title"><span>Controlador</span> versiones</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i class="fab fa-git-alt card-header__icon"></i>
                    </div>
                    <p class="card-header__text">GIT</p>
                </header>
            </div>
                <!-- CARD DE VITE-->
            <div class="card card--three">
                <p class="card-header__title"><span>Empaquetar</span> proyecto</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <img src="../assets/icons/vite-64x64.png" class="card-header__image"
                            alt="package vite icon" loading="lazy">
                    </div>
                    <p class="card-header__text">VITE</p>
                </header>
            </div>
            <!-- CARD DE SQL-->
            <div class="card card--four">
                <p class="card-header__title">Bases de <span>Datos</span></p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <img src="../assets/icons/MySQL-64x64.png" class="card-header__image"
                            alt="mysql database icon" loading="lazy">
                    </div>
                    <p class="card-header__text">MySQL</p>
                </header>
            </div>
            <!-- CARD DE CYPRESS-->
            <div class="card card--seven">
                <p class="card-header__title"><span>Testing</span></p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <img src="../assets/icons/cypress.png" class="card-header__image"
                            alt="cypress test icon" loading="lazy">
                    </div>
                    <p class="card-header__text">Cypress</p>
                </header>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    name: 'Conocimientos',
    data(){
        return{
            isIcon: false,
            technos:[{
                id: 1,
                title: 'Diseño de página',
                icon: 'fab fa-css3-alt card-header__icon',
                name: 'CSS3',
                frameworkTitle: 'Frameworks',
                iconFramework: 'fab fa-sass card-header__icon',
                framework: 'TailwindCSS',
                preTitle: 'Pre-Procesador',
                iconPre: 'fab fa-sass card-header__icon',
                preProcesador: 'Sass',
                isIcon: false,
                class: 'card card--five',
                titleClass: 'card-header__title card-header__title--flex'
            },
            {
                id: 2,
                title: 'Interacción de la página',
                icon: 'fab fa-js card-header__icon',
                name: 'JavaScript',
                frameworkTitle: 'Frameworks',
                iconFramework: 'fab fa-vuejs card-header__icon',
                framework: 'VueJS',
                preTitle: 'Transpilador',
                iconPre: 'fab fa-sass card-header__icon',
                preProcesador: 'Babel',
                isIcon: true,
                class: 'card card--six',
                titleClass: 'card-header__title card-header__title--flex',
                typescript: [false, true]
            }],
            copyTechnos: [],
        }
    },
    methods:{
        putSpan(){
            const title = document.querySelectorAll('[data-value]')

            const putText = (n,initial,end)=>{
                title[n].innerHTML = `
                <span>${title[n].dataset.value.slice(0,end)}</span>
                ${title[n].dataset.value.slice(initial)}`
            }

            putText(0,6,7)
            putText(1,11,12)
        }
    },
    mounted(){
        return this.putSpan();
    }
}
</script>