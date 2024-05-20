import ArticleCard from '~/components/global/ArticleCard.vue';
<template>
    <div class="hero_index">
        <div class="carrousel" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <div class="box">
                <UCarousel v-slot="{ item }" :items="items" :ui="{
                    item: 'basis-full',
                    container: 'rounded-lg'
                }" :prev-button="{
                    color: 'gray',
                    icon: 'i-heroicons-arrow-left-16-solid',
                }" :next-button="{
                    color: 'gray',
                    icon: 'i-heroicons-arrow-right-16-solid',
                }" arrows class="w-full mx-auto" indicators>

                    <div class="text-center relative">
                        <NuxtLink :to="item.to">
                            <img :src="item.img.src" class="w-full" draggable="false">
                        </NuxtLink>
                        <p class="text-5xl text text-white align-middle absolute bottom-9 w-full shadowtext font-medium">
                            {{ index }}{{ item.name }}
                        </p>
                    </div>


                </UCarousel>
            </div>
        </div>

        <div class="info" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <h1 class="title text-8xl">{{ title }}
            </h1>
            <p class="text-white max-w-96" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">Tu
                plataforma definitiva para juegos y entretenimiento! Desde su lanzamiento en 2003,
                Steam se ha convertido en el epicentro de la comunidad global de jugadores, ofreciendo una amplia
                variedad de juegos, contenido descargable, y funciones sociales para que disfrutes al máximo de tu
                experiencia de juego</p>
        </div>
    </div>

    <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" class="container cards-section">
        <div class="title">
            <h1>Noticias</h1>
            <UInput v-model="q" name="q" placeholder="Buscar en noticias..."
                icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
                :ui="{ icon: { trailing: { pointer: '' } } }">
                <template #trailing>
                    <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                        :padded="false" @click="q = ''" />
                </template>
            </UInput>
        </div>

        <ArticleCard v-for="(article, index) in articles" :key="index" :article="article">
        </ArticleCard>
    </section>


</template>

<script setup>
import { ref } from 'vue'
const title = ref('Bienvenido a Steam')

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

//Carrousel

const items = [{
    name: 'Tienda',
    to: '/tienda',
    img: { src: '../tiendaHero01.gif' }
},
{
    name: 'Comunidad',
    to: '/comunidad',
    img: { src: '../tiendaHero.png' }
},
{
    name: 'SteamCreate',
    to: '/tienda',
    img: { src: '../tiendaHero02.png' }
}
]
</script>

<style lang="postcss">
.hero_index {

    .carrousel {
        padding: 4rem 0rem;
        display: flex;
        justify-content: center;
        transition: 400ms;


        .box {
            transition: 300ms;
            .shadowtext{
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }

        img {
            border-radius: 32px;
            height: 700px;
            width: 100vw;
            border-left: 8px solid #0047FF;
            border-right: 8px solid #0047FF;
            transition: 400ms;
        }

        &:hover {
            cursor: pointer;

            .box {
                box-shadow: 1px 0px 121.4px 0px rgba(98, 134, 229, 0.37);
            }

            img {
                border-left: 16px solid #0047FF;
                border-right: 16px solid #0047FF;
            }
        }
    }

    .info {
        display: flex;
        padding-bottom: 2rem;
        margin: 2rem 4rem;
        justify-content: space-between;
        border-bottom: 1px solid whitesmoke;

        .display1 {
            font-size: 96px;
            font-weight: 600;
        }
    }
}

.cards-section {
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    width: 100%;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
    }
}
</style>