import ArticleCard from '~/components/global/ArticleCard.vue';
<template>
    <div>
        <h1>{{ title }}</h1>
        <Icon name="material-symbols:person-rounded" color="white" size="2rem" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium velit tempora reiciendis. Doloribus esse
            tempora exercitationem quibusdam dolorem voluptatem perspiciatis? Nisi ipsa ab hic quod delectus iusto,
            assumenda iure eos?</p>
    </div>

    <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" class="container cards-section">
        <ArticleCard v-for="(article, index) in articles" :key="index" :article="article">
        </ArticleCard>
    </section>


</template>

<script setup>
import { ref } from 'vue'
const title = ref('Página de inicio')

const articles = ref([
    {
        id: 1,
        title: "Artículo 1",
        url: "https://picsum.photos/3000/1000"
    },
    {
        id: 2,
        title: "Artículo 2",
        url: "https://picsum.photos/3000/1000"
    },
    {
        id: 3,
        title: "Artículo 3",
        url: "https://picsum.photos/3000/1000"
    },
    {
        id: 4,
        title: "Artículo 4",
        url: "https://picsum.photos/3000/1000"
    }
])
</script>

<style lang="postcss">
.cards-section {
    display: flex;
    justify-content: space-between;
}
</style>