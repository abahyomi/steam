<template>
    <div v-if="data != null">
        <img :src="data.background_image" alt="">

        <main class="container">
            <h1>{{ data.name }}</h1>
            <p v-html="data.description"></p>

        </main>
    </div>


</template>

<script setup>

const route = useRoute();
const { data } = useFetch(`https://api.rawg.io/api/games/${route.params.id}?key=d45f1e8e88654d059e56f179e27d9327`)

</script>