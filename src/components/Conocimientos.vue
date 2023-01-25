<template>
    <!-- ESTRUCTURA DE LOS CONOCIMIENTOS -->
    <section class="conocimientos-section" id="conocimientos"
    data-test-id="conocimientos-section-test">
        <Title list="02." title="Herramientas Técnologicas. 💻" name="title-two" />
        <!-- CARD OF MY KNOWLEDGES -->
        <article class="conocimientos-article">
            <h3 class="conocimientos-article__text">A continuación se mostrará una lista de las <span>tecnologias</span> en las que
                tengo conocimiento y estoy <span>listo a afrontar</span>,
            </h3>
            <!-- CARD DEL HTML -->
            <Technos className="card card--one" 
                title="Estructurar"
                image=""
                alt=""
                techno=""
                icon=""
                spanTitle="la Página."
                :isIcon="false"
                :hasOneTechno="false" />
            <!-- CARD BRING FOR JAVASCRIPT FOR CSS AND JS -->
            <div :class="item.class" v-for="item in technos" :key="item.id">
                <p :class="item.titleClass" :data-value="item.title">{{item.title}}</p>
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
                        <div class="card-header__techno card-header__techno--flex">
                            <i v-if="item.isIcon" :class="item.iconFramework"></i>
                            <img v-else src="../assets/icons/tailwind-64x64.png" loading="lazy"
                            alt="css framework tailwind icon" class="card-header__image">
                            <img v-if="item.secondFramework" loading="lazy" class="card-header__image--astro"
                            src="../assets/icons/astro.png" alt="astro framework vercel icon">
                        </div>
                        <div class="card-header__techno--front">
                            <p class="card-header__text">{{item.framework}}</p>
                            <p v-if="item.secondFramework"
                            class="card-header__text">Astro.</p>
                        </div>
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
            <Technos className="card card--two" 
                title="Controlador"
                image=""
                alt=""
                spanTitle="Versiones."
                techno="GIT."
                :isIcon="true"
                :hasOneTechno="true" />
            <!-- CARD DE VITE-->
            <Technos className="card card--three" 
                title="Empaquetar"
                spanTitle="proyectos."
                image="vite-64x64.png" 
                alt="package folder vite icon" 
                techno="VITE"
                :isIcon="false"
                :hasOneTechno="true" />
            <!-- CARD DE SQL-->
            <Technos className="card card--four" 
                    title="Bases de "
                    spanTitle="Datos."
                    image="MySQL-64x64.png" 
                    alt="mysql database icon" 
                    techno="MySQL"
                    :isIcon="false"
                    :hasOneTechno="true" />
            <!-- CARD DE CYPRESS-->
            <Technos className="card card--seven" 
                    spanTitle="Testing"
                    image="cypress.png" 
                    alt="cypress testing icon" 
                    techno="Cypress"
                    :isIcon="false"
                    :hasOneTechno="true" />
        </article>
    </section>
</template>

<script>
import Title from './Layout/Title.vue'
import Technos from './Layout/Technos.vue'

export default {
    name: 'Conocimientos',
    components:{
        Title,
        Technos
    },
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
                titleClass: 'card-header__title card-header__title--flex',
                secondFramework: false
            },
            {
                id: 2,
                title: 'Interacción de la página',
                icon: 'fab fa-js card-header__icon',
                name: 'JavaScript',
                frameworkTitle: 'Frameworks',
                iconFramework: 'fab fa-vuejs card-header__icon',
                framework: 'VueJS',
                framework2: 'Astro',
                preTitle: 'Transpilador',
                iconPre: 'fab fa-sass card-header__icon',
                preProcesador: 'Babel',
                isIcon: true,
                class: 'card card--six',
                titleClass: 'card-header__title card-header__title--flex',
                typescript: [false, true],
                secondFramework: true
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
    }
}
</script>