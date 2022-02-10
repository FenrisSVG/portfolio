<template>
    <section class="conocimientos-section">
        <h2 class="conocimientos-title"><span class="about-title--color">02.</span> Conocimientos
        <sub>(Front-End)</sub></h2>
        <article class="conocimientos-article">
            <h3 class="conocimientos-article__text">A continuacion se mostrará una lista de las <span>tecnologias</span> en las que
                tengo conocimiento y estoy <span>listo a afrontar</span>,
            </h3>
            <div class="card">
                <p class="card-header__title"><span>Estructurar</span> la Pagina</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i class="fab fa-html5 card-header__icon"></i>
                    </div>
                    <p class="card-header__text">HTML5</p>
                </header>
            </div>
            <div class="card">
                <p class="card-header__title"><span>Diseño</span> de Página</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i class="fab fa-css3-alt card-header__icon"></i>
                    </div>
                    <p class="card-header__text">CSS3</p>
                </header>
                <footer class="card-footer">
                    <div class="card-footer__frameworks">
                        <h4 class="card-footer__title">Framewokrs</h4>
                        <div class="card-header__techno">
                            <i class="fab fa-sass card-header__icon"></i>
                        </div>
                        <p class="card-header__text">TailwindCSS</p>
                    </div>
                    <div class="card-footer__pre">
                        <h4 class="card-footer__title">Pre-Procesadores</h4>
                        <div class="card-header__techno">
                            <i class="fab fa-sass card-header__icon"></i>
                        </div>
                        <p class="card-header__text">Sass</p>
                    </div>
                </footer>
            </div>
            <div class="card">
                <p class="card-header__title"><span>Interacción</span> de la página</p>
                <header class="card-header">
                    <div class="card-header__techno">
                        <i class="fab fa-js card-header__icon"></i>
                    </div>
                    <p class="card-header__text">JavaScript</p>
                </header>
                <footer class="card-footer">
                    <div class="card-footer__frameworks">
                        <h4 class="card-footer__title">Framewokrs</h4>
                        <div class="card-header__techno">
                            <i class="fab fa-vuejs card-header__icon"></i>
                        </div>
                        <p class="card-header__text">VueJS</p>
                    </div>
                    <div class="card-footer__pre">
                        <h4 class="card-footer__title">Transpilador</h4>
                        <div class="card-header__techno">
                            <i class="fab fa-sass card-header__icon"></i>
                        </div>
                        <p class="card-header__text">Babel</p>
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
                icon: 'fab fa-html5',
                name: 'HTML5'
            }]
        }
    }
}
</script>