<template>
    <a href="mailto:felix.sandoval171@outlook.com"
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
        }
    }
}
</script>
