<template>
    <div class="hero_index">
        <div class="carrousel" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <div class="box">
                <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{
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
                        <p
                            class="text-5xl text text-white align-middle absolute bottom-9 w-full shadowtext font-medium">
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

    <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" class="cards-section py-16 px-24">
        <div class="title">
            <div class="noticiasinfo flex gap-6">
                <h1 class="text-6xl">Noticias</h1>
                <p>¡Mantente al día con las últimas novedades del mundo de los videojuegos! En nuestra sección de
                    noticias,
                    encontrarás actualizaciones sobre los juegos más populares, anuncios de nuevos lanzamientos,
                    detalles
                    sobre eventos especiales, y ofertas exclusivas. No te pierdas ninguna noticia y sigue de cerca todo
                    lo
                    que sucede en la comunidad gamer.</p>
            </div>

            <UInput v-model="q" name="q" placeholder="Buscar en noticias..."
                icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
                :ui="{ icon: { trailing: { pointer: '' } } }">
                <template #trailing>
                    <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                        :padded="false" @click="q = ''" />
                </template>
            </UInput>
        </div>

        <section class="cardsNoticias" v-if="data.results != null">
            <div class="titleLine py-4">
                <h1>Proximamente</h1>
            </div>
            <noticiasCard v-for="(game, index) in recommendedGames" :key="index" :game="game" :count="index" />

            <div class="titleLine py-4">
                <h1>Hoy</h1>
            </div>

            <noticiasCardLeft v-for="(game, index) in visibleFilteredGames" :key="index" :game="game" :count="index" />

            <div class="btns flex justify-end gap-4 py-4">
                <div class="btn_show flex gap-4">
                    <UButton color="white" @click="closeMoreGames" label="Ver menos"></UButton>
                </div>
                <div class="btn_show flex gap-4">
                    <UButton @click="loadMoreGames" label="Ver más"></UButton>
                </div>
            </div>
        </section>

    </section>


    <section class="moreValve">
        <h1 class="py-16 px-24">Otros Servicios</h1>

        <div class="bannerMore">

            <div class="bannerImg">
                <img class="max-w-5xl-" src="/public/valveindex.jpg" alt="">
            </div>

            <div class="bannerInfo flex flex-col gap-12 p-8 max-w-2xl">
                <div class="bannerText flex flex-col gap-4">
                    <h1 class="text-6xl">Valve Index</h1>
                    <p>Las Valve Index son un avanzado sistema de realidad virtual desarrollado por Valve. Ofrecen una
                        experiencia
                        inmersiva con pantallas de alta resolución, una tasa de refresco de hasta 144 Hz, y un amplio
                        campo
                        de
                        visión. Incluyen controladores ergonómicos que permiten un seguimiento preciso de los
                        movimientos de
                        las
                        manos y dedos, proporcionando una interacción natural y detallada en entornos virtuales.
                        Diseñadas
                        para
                        ofrecer comodidad y rendimiento superior, las Valve Index son una opción destacada para los
                        entusiastas
                        de
                        la realidad virtual que buscan una experiencia de alta calidad.</p>
                </div>
                <UButton class="max-w-24 items-center justify-center" label="Ir a la web"></UButton>
            </div>


        </div>
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

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3500)
})

//Carrousel

const items = [{
    name: 'Tienda',
    to: '/tienda',
    img: { src: '../tiendaHero01v.gif' }
},
{
    name: 'SteamCreate',
    to: '/tienda',
    img: { src: '../tiendaHero01.gif' }
}
]


// CardsRight

const q = ref('')
const data = ref({ results: [] });

const error = ref(null);
const visibleGames = ref(3);

const fetchData = async () => {
    try {
        const response = await fetch('https://api.rawg.io/api/games?key=d45f1e8e88654d059e56f179e27d9327');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        data.value = jsonData;
    } catch (err) {
        error.value = err.message;
    }
};

onMounted(() => {
    fetchData();
});

const filteredGames = computed(() => {
    if (!data.value.results) return [];
    return data.value.results.filter(game =>
        game.name.toLowerCase().includes(q.value.toLowerCase())
    );
});

const visibleFilteredGames = computed(() => {
    return filteredGames.value.slice(0, visibleGames.value);
});

const loadMoreGames = () => {
    visibleGames.value += 3;
};
const closeMoreGames = () => {
    visibleGames.value -= 3;
};





// CardsLeft

const recommendedGames = ref([]);

const fetchRecommendedGames = async () => {
    try {
        const response = await fetch('https://api.rawg.io/api/games?key=d45f1e8e88654d059e56f179e27d9327');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const games = jsonData.results;
        // Seleccionar aleatoriamente algunos juegos para mostrar
        const randomGames = getRandomGames(games, 2);
        recommendedGames.value = randomGames;
    } catch (error) {
        console.error('Error fetching recommended games:', error);
    }
};

const getRandomGames = (games, count) => {
    // Si hay menos juegos que la cantidad solicitada, devolver todos los juegos
    if (games.length <= count) {
        return games;
    }
    const randomGames = [];
    const selectedIndices = new Set();
    while (randomGames.length < count) {
        const randomIndex = Math.floor(Math.random() * games.length);
        if (!selectedIndices.has(randomIndex)) {
            randomGames.push(games[randomIndex]);
            selectedIndices.add(randomIndex);
        }
    }
    return randomGames;
};

onMounted(() => {
    fetchRecommendedGames();
});



</script>

<style lang="postcss">
.moreValve{
.bannerMore {
    display: flex;
    gap: 4rem;

    .bannerImg{
        img{
            max-width: 1000px;
            border-top-right-radius: 120px;
            border-bottom-right-radius: 120px;
        }
    }

    
}

}
.hero_index {

    .carrousel {
        padding: 4rem 0rem;
        display: flex;
        justify-content: center;
        transition: 400ms;


        .box {
            transition: 300ms;

            .shadowtext {
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-bottom: 1px solid white;

    .cardsNoticias {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .titleLine {
        border-bottom: 1px solid white;
    }

    .noticiasinfo {
        flex-direction: column;
        max-width: 80%;
    }

    p {
        max-width: 40%;
    }


    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0rem;
    }
}


</style>