<template>
    <section :class="className">
        <p class="card-header__title">{{title}} <span>{{spanTitle}}</span></p>
        <div class="card-header" v-if="hasOneTechno">
            <div class="card-header__techno">
                <img v-if="!isIcon"
                    :src="`/src/assets/icons/${image}`" class="card-header__image"
                    :alt="alt" loading="lazy">
                    <i  v-else-if="isIcon"
                        :class="icon"></i>
            </div>
            <p class="card-header__text">{{techno}}</p>
        </div>
        <!-- ESTO ES PARA LA ESTRUCTURACIÓN DE PÁGINA Y APAREZCA FIGMA DEBIDO A QUE PUSE DOS TECNOLOGIAS EN UNA CARD. -->
        <div class="card-header" v-else-if="!hasOneTechno">
            <div class="card-header__techno card-header__techno--design">
                <i class="fab fa-html5 card-header__icon"></i>
                <i class="devicon-figma-plain card-header__icon"></i>
            </div>
            <div class="card-header__techno--text">
                <p class="card-header__text">HTML5</p>
                <p class="card-header__text">FIGMA</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Technos',
    props:{
        icon: String,
        title: {
            type: String,
            default: ''
        },
        className: String,
        spanTitle: {
            type: String,
            default: 'Edit text here.',
            required: true
        },
        image: {
            type: String,
            default: '',
            required: true
        },
        alt:{
            type: String,
            default: 'Icon Techno Front-End from DevIcons or Font-Awesome',
            required: true
        },
        techno:{
            type: String,
            default: "Some Techno for Front-End.",
            required: true
        },
        isIcon: {
            type: Boolean,
            default: false
        },
        hasOneTechno: {
            type: Boolean,
            default: true
        }
    }
}
</script>