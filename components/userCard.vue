<template>
    <article>
        <img :src="`https://picsum.photos/500/30${user.id}`" alt="">
        <div>
            <p>{{user.username}}</p>
            <p>{{user.username}}</p>
        </div>
    </article>

</template>

<script setup>

const props = defineProps({
    user: {
        type: Object,
        required: false
    }
});
const {user} = props;


</script>