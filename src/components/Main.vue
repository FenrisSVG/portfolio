<template>
    <main class="main">
        <section class="section">
            <header class="section-header">
                <p class="section-header__name">
                    Hola, mi nombre es
                </p>
                <h1 class="title"><span class="title--js">Const</span> name = <span class="title--name">Félix Sandoval</span></h1>
            </header>
            <div class="section-body">
                <p class="section-body__message">
                    Si no puedo hacer grandes cosas, hago que las cosas
                    pequeñas sean grandiosas.
                </p>
                <p class="section-body_aboutme">
                    Soy estudiante 👨‍🎓 de cuarto año de la carrera <span>Ingenieria en Sistemas</span>
                    cursando en la <span>Universidad Nacional de Ingeniejria</span>. Me interesa el
                    área de desarollador de <span>aplicaciones web y móvil</span>.
                </p>
            </div>
            <footer class="section-footer">
                <a href="mailto:felix.sandoval171@outlook.com"
                rel="nofollow noopener noreferrer"
                class="section-footer__link" data-test-id="contact-me-test">Contáctame</a>
            </footer>
        </section>
        <AboutMe/>
        <Conocimientos/>
        <Projects/>
    </main>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Conocimientos from './Conocimientos.vue'
import Projects from './Projects.vue'

export default {
    name: 'Main',
    components:{
        AboutMe,Conocimientos,Projects
    }
}
</script>