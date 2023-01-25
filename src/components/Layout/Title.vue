<template>
    <h2 class="about-title" data-section="main" :data-value="name"><span class="about-title--color">{{list}}</span> {{title}}</h2>
</template>

<script>
export default{
    name: 'Title',
    props: {
        list: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: 'Title not defined.',
            required: true
        },
        name: String
    }
}
</script>