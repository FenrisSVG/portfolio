<template>
    <main class="main">
        <section class="section">
            <header class="section-header">
                <p class="section-header__name">
                    Hola, mi nombre es
                </p>
                <h1 class="title">Félix <span>Sandoval</span></h1>
            </header>
            <div class="section-body">
                <p class="section-body__message">
                    Si no puedo hacer grandes cosas, hago que las cosas
                    pequeñas sean grandiosas.
                </p>
                <p class="section-body_aboutme">
                    Soy estudiante de cuarto año de la carrera Ingenieria en Sistemas
                    cursando en la Universidad Nacional de Ingenieria. Me interesa el
                    area de desarollador de aplicaciones web y móvil.
                </p>
            </div>
            <footer class="section-footer">
                <a href="mailto:fsandovalchavez3@gmail.com"
                rel="nofollow noopener noreferrer"
                class="section-footer__link">Contáctame</a>
            </footer>
        </section>
        <AboutMe/>
        <Conocimientos/>
    </main>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Conocimientos from './Conocimientos.vue'

export default {
    name: 'Main',
    components:{
        AboutMe,Conocimientos
    }
}
</script>