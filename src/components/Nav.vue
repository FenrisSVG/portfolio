<template>
    <header class="header">
        <div class="menu">
            <div class="menu-logo">
                <img src="../assets/logo.png" alt="portfolio logo"
                class="logo">
            </div>
            <div class="menu-icon" @click="showMenu">
                <i class="fas fa-bars menu-bars"></i> 
            </div>
        </div>
        <nav class="nav" id="nav">
            <div class="nav-close" @click="hideMenu">
                <i class="fas fa-times nav-times"></i>
            </div>
            <ul class="main-menu" v-if="listaObjetos.length > 0">
                <li class="main-menu__item" v-for="item in listaObjetos" :key="item.id">
                    <a :href="item.href" class="main-menu__link"  rel="nofollow noopener noreferrer">{{item.name}}</a>
                </li>
            </ul>
            <div class="menu-footer">
                <p class="menu-footer__text">Felix Sandoval Portfolio</p>
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
                href: '#about'
            },
            {
                id: 2,
                name: 'Conocimientos',
                href: '#conocimientos'
            },
            {
                id: 3,
                name: 'Proyectos',
                href: '#proyectos'
            },
            {
                id: 4,
                name: 'Contacto',
                href: '#contacto'
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