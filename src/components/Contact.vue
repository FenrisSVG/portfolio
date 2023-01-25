<template>
    <section class="contact-section">
        <Title list="04." title="Contactame." name="title-four" />
        <div class="form-container">
            <div class="contact-info">
                <header class="contact-info__header">
                    <h3 class="contact-info__title">Sobre mi perfil.</h3>
                    <p class="contact-info__text">Estoy abierto a sugerencias o solicitudes de empleo.</p>
                </header>
                <footer class="contact-info__footer" v-if="info.length > 0">
                    <div class="contact-info__perfil" v-for="item in info" :key="item.id">
                        <i :class="item.icon"></i>
                        <p class="contact-info__description"><strong>{{ item.text }}</strong> {{ item.information }}</p>
                    </div>
                </footer>
            </div>
            <form class="contact-form" action="" method="POST" autocomplete="off"
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
                    <label for="message" class="contact-form__label">
                        MENSAJE.
                        <textarea name="message" cols="30" rows="5"
                        class="contact-form__textarea" placeholder="Escriba un mensaje." required
                        maxlength="500"></textarea>
                    </label>
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
                // {
                //     id: 4,
                //     icon: '',
                //     text: 'Website: ',
                //     information: '8355-4265 (Claro)'
                // }
            ],
            inputs: [
                {
                    id: 1,
                    icon: 'fa-solid fa-user-plus',
                    label: 'NOMBRE COMPLETO.',
                    type: 'text',
                    name: 'fullname',
                    placeholder: 'Ingrese su nombre completo.'
                },
                {
                    id: 2,
                    icon: 'fa-regular fa-envelope',
                    type: 'email',
                    name: 'email',
                    label: 'CORREO ELECTRONICO.',
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