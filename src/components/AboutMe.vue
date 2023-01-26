<template>
    <section class="about-section" id="about" data-test-id="about-test">
        <Title list="01." title="Sobre Mi. 🔎" name="title-one" />
        <article class="about-article">
            <div class="about-article__header">
                <p class="about-article__text">Estudiante de 
                    <span class="about-article__text--color">Ingeniería de Sistemas</span> en la
                    <span class="about-article__text--color">Universidad Nacional de Ingenieria</span>. 
                    Desarrollado en el area <span class="about-article__text--color">Front-End</span>. 
                    Entusiasta de la tecnologia y la ciencia.
                    No tengo experiencia pero estoy dispuesto a aprender y hacer lo mejor de mi.
                    Interesado en el mundo del desarrollo web, diseño UI/UX. Soy una persona
                    versatil con una amplia gama de habilidades, con muchas ganas de aprender
                    y preparado para afrentar nuevos y dificiles desafios dentro o fuera de mi pais. He tenido experiencia realizando
                    proyectos personales con diferentes tecnologias aprendidas, al igual que realizando diversos retos de Front-End Mentor. ✨
                </p>
            </div>
            <div class="about-article__footer">
                <img data-test-id="personal-image-test"
                src="../assets/images/felix.jpg" class="about-article__image" loading="lazy" alt="own picture felix sandoval glasses"/>
            </div>
        </article>
    </section>
</template>

<script>
import scrollReveal from 'scrollreveal'
import Title from './Layout/Title.vue'

export default {
    name: 'AboutMe',
    components:{
        Title
    },
    methods:{
        scrollReveal(){
            scrollReveal().reveal('.about-section',{delay: 300, reset: true})
            scrollReveal().reveal('.about-article__text',{delay: 500, reset: true, opacity: .5})
            scrollReveal().reveal('.about-article__image',{delay: 500, reset: true, rotate:{x:30,z:30}})
        }
    },
    mounted(){
        return this.scrollReveal()
    }
}
</script>