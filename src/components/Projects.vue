<template>
    <section class="projects-section" id="proyectos">
        <div class="projects-section__text">
            <h2 class="projects-title"><span class="about-title--color">03.</span> Proyectos que he construido</h2>
            <p class="projects-text">Lista de páginas que he construido no oficiales si como practicas
                de 
                <span>
                    <a class="projects-text__link" href="https://www.frontendmentor.io/challenges" target="_blank" rel="noopener noreferrer nofollow">FrontEnd Mentor</a>
                </span> o individuales. 
            </p>
        </div>
        <article class="projects-article"  v-if="projects.length > 0">
            <section class="projects-article__card" v-for="item in projects" :key="item.id">
                <header class="projects-article__header">
                    <img :src="item.image" alt="web developt page picture" class="projects-article__website" loading="lazy">
                </header>
                <div class="projects-article__body">
                    <div class="projects-article__title">
                        <p class="projects-article__name">
                            <a :href="item.href" target="_blank" rel="noopener noreferrer nofollow" class="projects-article__name--link">
                            {{item.title}}</a>
                        </p>
                    </div>
                    <div class="projects-article__techno" v-if="item.isIcon
                    && item.icons.thirdIcons">
                        <div class="projects-article__devs">
                            <i :class="item.icons.html"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name}}
                            </p>
                        </div>
                        <div class="projects-article__devs">
                            <i :class="item.icons.css"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name2}}
                            </p>
                        </div>
                    </div>
                    <div class="projects-article__techno projects-article__techno--secondary"
                    v-else-if="!item.isIcon">
                        <div class="projects-article__devs projects-article__devs--secondary">
                            <img :src="item.icons.srcTailwind" alt="utility framework tailwind logo" loading="lazy" :class="item.icons.classImage">
                            <i :class="item.icons.sass"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name2}}
                            </p>
                        </div>
                        <div class="projects-article__devs projects-article__devs--secondary">
                            <i :class="item.icons.vuejs"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name}}
                            </p>
                        </div>
                        <div class="projects-article__devs projects-article__devs--secondary">
                            <img :src="item.icons.srcVite" alt="utility framework tailwind logo" loading="lazy" class="projects-article__devs-image">
                            <p class="projects-article__devs-text">
                                {{item.icons.name3}}
                            </p>
                        </div>
                    </div>
                    <div class="projects-article__techno"
                    v-else-if="!item.icons.thirdIcons">
                        <div class="projects-article__devs">
                            <i :class="item.icons.html"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name}}
                            </p>
                        </div>
                        <div class="projects-article__devs">
                            <i :class="item.icons.css"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name2}}
                            </p>
                        </div>
                        <div class="projects-article__devs">
                            <i :class="item.icons.js"></i>
                            <p class="projects-article__devs-text">
                                {{item.icons.name3}}
                            </p>
                        </div>
                    </div>
                    <div class="projects-article__description">
                        <p class="projects-article__about">
                            Esta pagina es un <span>desafio/reto</span>
                            propuesto por la página <span>
                                <a href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw" target="_blank" rel="noopener noreferrer nofollow" class="projects-article__about-link">{{item.description}}</a></span>
                            , la diseñe en el <span>{{item.year}}</span> es mas que evidente que el codigo de estructuración y de diseño es diferente al dia de hoy ya que al dia de hoy tengo mas conocimiento.
                        </p>
                    </div>
                </div>
                <footer class="projects-article__footer">
                    <a :href="item.github" target="_blank" rel="noopener noreferrer nofollow"
                    class="projects-article__footer-link">
                    <i class="fab fa-github"></i></a>
                </footer>
            </section>
        </article>
    </section>
</template> 

<script>
//import StarRating from 'vue-star-rating'

export default {
    name: 'Projects',
    data(){
        return{
            projects:[
            {
                id: 1,
                image: 'src/assets/images/landing-page.webp',
                href: 'https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw',
                title: 'Loopstudios langind page',
                icons:{
                    html: 'fab fa-html5 projects-article__devs-icon',
                    name: 'HTML',
                    css: 'fab fa-css3-alt projects-article__devs-icon',
                    name2: 'CSS',
                    thirdIcons: true
                },
                description: 'Frontend Mentor - Loopstudios landing page',
                year: 2021,
                github: 'https://github.com/FenrisSVG?tab=repositories',
                isIcon: true
            },
            {
                id: 2,
                image: 'src/assets/images/chat-app.jpg',
                href: 'https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY',
                title: 'Chat app CSS illustration',
                icons:{
                    vuejs: 'fab fa-vuejs projects-article__devs-icon',
                    name: 'VueJS',
                    srcTailwind: 'src/assets/icons/tailwind-64x64.png',
                    sass: 'fab fa-sass projects-article__devs-icon projects-article__devs-icon--sass',
                    name2: 'Tailwind',
                    srcVite: 'src/assets/icons/vite-64x64.png',
                    name3: 'Vite',
                    classImage: 'projects-article__devs-image'
                },
                description: 'Frontend Mentor - Chat app CSS illustration',
                year: 2022,
                github: 'https://github.com/FenrisSVG?tab=repositories',
                isIcon: false
            },
            {
                id: 3,
                image: 'src/assets/images/chat-app.jpg',
                href: 'https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY',
                title: 'Webpage about disorder mental',
                icons:{
                    vuejs: 'fab fa-vuejs projects-article__devs-icon',
                    name: 'VueJS',
                    sass: 'fab fa-sass projects-article__devs-icon',
                    name2: 'Sass',
                    srcVite: 'src/assets/icons/babel-64x64.png',
                    name3: 'Babel',
                    classImage: 'projects-article__devs-image projects-article__devs-image--tailwind'
                },
                description: 'proyecto de universidad',
                year: 2022,
                github: 'https://github.com/FenrisSVG?tab=repositories',
                isIcon: false
            },
            {
                id: 4,
                image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/xhxtaym7uzypzb37rpcc.jpg',
                href: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
                title: 'Extenses Chart Component',
                icons:{
                    html: 'fa-brands fa-html5 projects-article__devs-icon',
                    name: 'HTML',
                    css: 'fab fa-css3-alt projects-article__devs-icon',
                    name2: 'CSS',
                    js: 'fa-brands fa-js projects-article__devs-icon',
                    name3: 'JS',
                    thirdIcons: false
                },
                description: 'proyecto de universidad',
                year: 2022,
                github: 'https://github.com/FenrisSVG?tab=repositories',
                isIcon: true
            }
            ]
        }
    }
}
</script>