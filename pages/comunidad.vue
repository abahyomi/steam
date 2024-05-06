<template>

    <h1>Comunidad</h1>

    <userCard v-for="(user, index) in data" :key="index" :user="user">
    </userCard>


</template>

<script setup>
const { data } = await useFetch("https://fakestoreapi.com/users", {
    lazy: true,
    server: false,
})
</script>

<style lang="postcss"></style>