<script>
import Nav from './Nav.vue'
import Main from './Main.vue'

export default {
  name: 'Index',
  components:{
    Nav,Main
  },
  data(){
        return{
            icons:[{
                id: 1,
                class: 'fab fa-github socials-icons__networks',
                href: 'https://github.com/FenrisSVG?tab=repositories'
            },
            {
                id: 2,
                class: 'fab fa-instagram socials-icons__networks',
                href: 'https://www.instagram.com/fenrisskt/?hl=es-la'
            },
            {
                id: 3,
                class: 'fab fa-twitter-square socials-icons__networks'
            },
            {
                id: 4,
                class: 'fab fa-telegram socials-icons__networks'
            }]
        }
    }
}
</script>

<template>
  <div class="portfolio">
    <Nav/>
    <Main/>
    <aside class="socials" v-if="icons.length > 0">
        <div class="socials-icons" v-for="item in icons" :key="item.id">
            <a :href="item.href" target="_blank" rel="noopener noreferrer nofollow"
            class="socials-icons__link">
                <i :class="item.class"></i>
            </a>
        </div>
    </aside>
    <aside class="mail">
        <div class="mail-container">
            <img src="../assets/images/personal-mail.webp" alt="personal mail for contact me" loading="lazy" class="mail-container__image">
        </div>
    </aside>
  </div>
</template>

