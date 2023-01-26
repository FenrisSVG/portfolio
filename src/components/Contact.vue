<template>
    <section class="contact-section" id="contacto">
        <Title list="04." title="Contactame." name="title-four" />
        <div class="form-container">
            <div class="contact-info">
                <header class="contact-info__header">
                    <h3 class="contact-info__title" data-section="contact" data-value="title">Sobre mi perfil.</h3>
                    <p class="contact-info__text" data-section="contact" data-value="text">Estoy abierto a sugerencias o solicitudes de empleo.</p>
                </header>
                <footer class="contact-info__footer" v-if="info.length > 0">
                    <div class="contact-info__perfil" v-for="item in info" :key="item.id">
                        <i :class="item.icon"></i>
                        <p class="contact-info__description"><strong>{{ item.text }}</strong> {{ item.information }}</p>
                    </div>
                </footer>
            </div>
            <form class="contact-form" action="https://formsubmit.co/fsandovalchavez3@gmail.com" method="POST" autocomplete="off"
                v-if="inputs.length > 0">
                <h3 class="contact-info__title contact-info__title--two">Pongamonos en contacto.</h3>
                <div class="contact-form__group" v-for="item in inputs" :key="item.id">
                    <i :class="item.icon"></i>
                    <label :for="item.name" class="contact-form__label">
                        {{ item.label }}
                        <input :type="item.type" class="contact-form__input" :name="item.name" required :placeholder="item.placeholder" maxlength="50">
                    </label>
                </div>
                <div class="contact-form__group">
                    <label for="message" class="contact-form__label" data-section="contact" data-value="label-three">
                        MESSAGE.
                        <textarea name="message" cols="30" rows="4"
                        class="contact-form__textarea" placeholder="Write a message." required
                        maxlength="250"></textarea>
                    </label>
                </div>
                <div class="contact-form__group">
                    <button type="submit" class="contact-form__button" data-section="contact" data-value="button">Enviar Mensaje.</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import Title from './Layout/Title.vue'
export default{
    name: 'Contact',
    components: {
        Title
    },
    data(){
        return{
            info: [
                {
                    id: 1,
                    icon: 'fa-solid fa-location-dot contact-info__icon',
                    text: 'Departamento: ',
                    information: 'Managua, Nicaragua.'
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-square-phone-flip contact-info__icon',
                    text:'Celular: ',
                    information: '8355-4265 (Claro)'
                },
                {
                    id: 3,
                    icon: 'fa-regular fa-envelope contact-info__icon',
                    text: 'Email: ',
                    information: 'fsandovalchavez3@gmail.com'
                },
                {
                    id: 4,
                    icon: 'fa-brands fa-linkedin contact-info__icon',
                    text: 'Github: ',
                    information: 'FenrisSVG'
                }
            ],
            inputs: [
                {
                    id: 1,
                    icon: 'fa-solid fa-user-plus',
                    label: 'FULL NAME.',
                    type: 'text',
                    name: 'fullname',
                    placeholder: 'Type your full name.'
                },
                {
                    id: 2,
                    icon: 'fa-regular fa-envelope',
                    type: 'email',
                    name: 'email',
                    label: 'EMAIL ADDRESS.',
                    placeholder: 'Example@gmail.com.'
                },
                // {
                //     id: 1,
                //     icon: 'fa-solid fa-user-plus',
                //     label: 'Nombre Completo.',
                //     placeholder: 'Ingrese su nombre completo.'
                // }
            ]
        }
    }
}
</script>