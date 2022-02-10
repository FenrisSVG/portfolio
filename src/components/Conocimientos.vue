<template>
    <!-- ESTRUCTURA DE LOS CONOCIMIENTOS -->
    <section class="conocimientos-section">
        <h2 class="conocimientos-title"><span class="about-title--color">02.</span> Conocimientos
        <sub>(Front-End)</sub></h2>
        <article class="conocimientos-article">
            <h3 class="conocimientos-article__text">A continuacion se mostrará una lista de las <span>tecnologias</span> en las que
                tengo conocimiento y estoy <span>listo a afrontar</span>,
            </h3>
            <!-- CARD OF MY KNOWLEDGES -->
            <div class="card">
                <!-- CARD DEL HTML -->
                <p class="card-header__title"><span>Estructurar</span> la Pagina</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i class="fab fa-html5 card-header__icon"></i>
                    </div>
                    <p class="card-header__text">HTML5</p>
                </header>
            </div>
            <!-- CARD BRING FOR JAVASCRIPT FOR CSS AND JS -->
            <div class="card" v-for="item in technos" :key="item.id">
                <p class="card-header__title" :data-value="item.title"></p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i :class="item.icon"></i>
                    </div>
                    <p class="card-header__text">{{item.name}}</p>
                </header>
                <footer class="card-footer">
                    <div class="card-footer__frameworks">
                        <h4 class="card-footer__title">{{item.frameworkTitle}}</h4>
                        <div class="card-header__techno">
                            <i :class="item.iconFramework"></i>
                        </div>
                        <p class="card-header__text">{{item.framework}}</p>
                    </div>
                    <div class="card-footer__pre">
                        <h4 class="card-footer__title">{{item.preTitle}}</h4>
                        <div class="card-header__techno">
                            <i :class="item.iconPre"></i>
                        </div>
                        <p class="card-header__text">{{item.preProcesador}}</p>
                    </div>
                </footer>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    name: 'Conocimientos',
    data(){
        return{
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
                preProcesador: 'Sass'
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
                preProcesador: 'Babel'
            }]
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