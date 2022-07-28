<template>
    <header class="header">
        <div class="menu">
            <div class="menu-logo">
                <img src="../assets/logo.png" alt="portfolio logo"
                class="logo">
            </div>
            <div class="menu-icon" @click="showMenu" data-test-id="menu-icon-test">
                <i class="fas fa-bars menu-bars"></i> 
            </div>
        </div>
        <nav class="nav" id="nav">
            <div class="nav-close" @click="hideMenu" data-test-id="icon-close-menu">
                <i class="fas fa-times nav-times"></i>
            </div>
            <ul class="main-menu" v-if="listaObjetos.length > 0">
                <li class="main-menu__item" v-for="item in listaObjetos" :key="item.id">
                    <a :href="item.href" class="main-menu__link"  rel="nofollow noopener noreferrer"
                    data-test-id="main-menu-test"
                    :data-section="item.dataProfile"
                    :data-value="item.dataValue">{{item.name}}</a>
                </li>
            </ul>
            <div class="menu-footer" id="flags">
                <div class="languages" data-language="es">
                    <img src="../assets/flags/es.svg" alt="spanish flag" class="languages__flags">
                </div>
                <div class="languages" data-language="en">
                    <img src="../assets/flags/en.svg" alt="america flag" class="languages__flags">
                </div>
                <p class="menu-footer__text" data-test-id="menu-footer-test">Felix Sandoval Portfolio</p>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return{
            listaObjetos:[
            {
                id: 1,
                name: 'Sobre mi',
                href: '#about',
                dataProfile: 'nav',
                dataValue: 'about'
            },
            {
                id: 2,
                name: 'Conocimientos',
                href: '#conocimientos',
                dataProfile: 'nav',
                dataValue: 'knowledge'
            },
            {
                id: 3,
                name: 'Proyectos',
                href: '#proyectos',
                dataProfile: 'nav',
                dataValue: 'projects'
            },
            {
                id: 4,
                name: 'Contacto',
                href: '#contacto',
                dataProfile: 'nav',
                dataValue: 'contact'
            }
            ],
            listItem:[
            {
                id: 1,
                name: 'About me'
            },
            {
                id: 2,
                name: 'Knowledge'
            },
            {
                id: 3,
                name: 'Projects'
            },
            {
                id: 4,
                name: 'Contact'
            }
            ],
        }
    },
    methods:{
        showMenu(e){
            const nav = document.getElementById('nav')
    
            if(e.target.classList.contains('menu-icon')
            || e.target.classList.contains('menu-bars')) nav.classList.add('nav--show')
        },
        hideMenu(e){
            const nav = document.getElementById('nav')
    
            if(e.target.classList.contains('nav-close')
            || e.target.classList.contains('nav-times')) nav.classList.remove('nav--show')
        }
    }
}
</script>