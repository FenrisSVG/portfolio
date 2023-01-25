<template>
    <a :href="href"
            rel="nofollow noopener noreferrer"
            class="section-footer__link" data-test-id="contact-me-test">{{button}}
    </a>
</template>

<script>
export default {
    name: 'Button',
    props: {
        button: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        }
    }
}
</script>
