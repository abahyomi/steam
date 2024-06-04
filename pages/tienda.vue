<template>
    <div>

        <section class="tiendaHero">
            <div class="heroHead" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">
                <h3 class="display2 Underline">Destacados</h3>
                <div class="heroRight">
                    <UInput v-model="q" name="q" placeholder="Buscar en tienda..."
                        icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
                        :ui="{ icon: { trailing: { pointer: '' } } }">
                        <template #trailing>
                            <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                                :padded="false" @click="q = ''" />
                        </template>
                    </UInput>
                    <h1 class="text-7xl lg:text-8xl">Tienda</h1>
                </div>
            </div>

            <div class="heroDescription" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">

                <div class="heroText">

                    <div class="top">
                        <h1 class="text-primary-500">Ready or Not</h1>
                        <p class="descPar mb-8">Ready or Not es un FPS táctico realista donde te pones en la piel de un
                            agente SWAT para completar misiones en situaciones hostiles e intensas, poniendo énfasis en
                            la comunicación del equipo, la planificación y la ejecución precisa. Ofrece personalización
                            de equipamiento, modo para un jugador y multijugador, y ha sido recibido positivamente por
                            su realismo, estrategia y rejugabilidad. Si te gustan los juegos de disparos tácticos
                            desafiantes.</p>
                    </div>


                    <div class="moreInfo">
                        <div class="PriceTag">
                            <span class="discount">20%</span>
                            <div class="actualPrice">
                                <p class="smallText">59.99</p>
                                <h1>47.99</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="imageDesc">

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

                        <img :src="item.img.src" draggable="false">


                    </UCarousel>
                </div>
            </div>
        </section>



        <section class="p-2 md:p-4 first game" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">

            <div class="games_title">
                <div class="title">
                    <h1 class="underline">Encuentra tu juego!</h1>
                    <UInput v-model="q" name="q" placeholder="Buscar en Tienda..."
                        icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
                        :ui="{ icon: { trailing: { pointer: '' } } }">
                        <template #trailing>
                            <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                                :padded="false" @click="q = ''" />
                        </template>
                    </UInput>
                </div>

                <div class="filters flex gap-8 ">
                    <USelectMenu class="w-96" v-model="labels" by="id" name="labels" :options="options"
                        option-attribute="name" multiple creatable show-create-option-when="always"
                        placeholder="Filtrar" />
                </div>

            </div>

            <div v-if="error">{{ error }}</div>
            <div v-else class="games" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                <GameItem v-for="(game, index) in visibleFilteredGames" :key="index" :game="game" :count="index" />
            </div>

            <div class="btns flex justify-end gap-4 py-4">
                <div class="btn_show flex gap-4">
                    <UButton color="white" @click="closeMoreGames" label="Ver menos"></UButton>
                </div>
                <div class="btn_show flex gap-4">
                    <UButton @click="loadMoreGames" label="Ver más"></UButton>
                </div>
            </div>

        </section>

        <section class="banners p-12">
            <h1 class="p-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">Recomendaciones
                personalizadas
            </h1>

            <div class="recomendaciones flex flex-col gap-4">
                <GameBanner v-for="(game, index) in recommendedGames" :key="index" :game="game" :count="index" />
            </div>

        </section>

    </div>
</template>

<script setup lang="ts">

//Carrousel
const items = [{
    img: { src: '../t01.jpg' }
},
{
    img: { src: '../t02.jpg' }
},
{
    img: { src: '../t03.jpg' }
}
]

const q = ref('')

//games API
const data = ref({ results: [] });
const error = ref(null);
const visibleGames = ref(6);

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
    visibleGames.value += 6;
};
const closeMoreGames = () => {
    visibleGames.value -= 6;
};


//recomendados
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
        const randomGames = getRandomGames(games, 3); // Obtener 3 juegos aleatorios
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




//filters
const options = ref([
    { id: 1, name: 'New' },
    { id: 2, name: 'Free To Play' },
    { id: 3, name: 'duplicate' },
    { id: 4, name: 'enhancement' },
    { id: 5, name: 'good first issue' },
    { id: 6, name: 'help wanted' },
    { id: 7, name: 'invalid' },
    { id: 8, name: 'question' },
    { id: 9, name: 'wontfix' }
])

const selected = ref([])

const labels = computed({
    get: () => selected.value,
    set: async (labels) => {
        const promises = labels.map(async (label) => {
            if (label.id) {
                return label
            }
            const response = {
                id: options.value.length + 1,
                name: label.name
            }
            options.value.push(response)
            return response
        })

        selected.value = await Promise.all(promises)
    }
})




// export default {
//     components: {
//         GameItem
//     },
//     data() {
//         return {
//             games: [
//                 {
//                     id: 1,
//                     name: "Fallout",
//                     discount: "30%",
//                     oldPrice: "59.99€",
//                     price: "47.99€",
//                     imageUrl: "https://picsum.photos/500/365"
//                 },
//                 {
//                     id: 2,
//                     name: "Fallout",
//                     discount: "30%",
//                     oldPrice: "59.99€",
//                     price: "47.99€",
//                     imageUrl: "https://picsum.photos/500/365"
//                 },
//                 {
//                     id: 3,
//                     name: "Fallout",
//                     discount: "30%",
//                     oldPrice: "59.99€",
//                     price: "47.99€",
//                     imageUrl: "https://picsum.photos/500/365"
//                 },
//                 {
//                     id: 4,
//                     name: "Fallout",
//                     discount: "30%",
//                     oldPrice: "59.99€",
//                     price: "47.99€",
//                     imageUrl: "https://picsum.photos/500/365"
//                 },
//                 {
//                     id: 5,
//                     name: "Fallout",
//                     discount: "30%",
//                     oldPrice: "59.99€",
//                     price: "47.99€",
//                     imageUrl: "https://picsum.photos/500/365"
//                 },
//                 {
//                     id: 6,
//                     name: "Fallout",
//                     discount: "30%",
//                     oldPrice: "59.99€",
//                     price: "47.99€",
//                     imageUrl: "https://picsum.photos/500/365"
//                 },

//             ]
//         };
//     }
// };
</script>


<style lang="postcss">
.tiendaHero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0rem 4rem 4rem;
    gap: 4rem;

    @media (max-width: 1224px){
        padding: 2rem;
    }

    @media (max-width: 736px){
        padding: 1rem;
        gap: 2rem;
        border-bottom: 1px solid white;
    }


    .heroHead {
        @media (max-width: 1224px) {
            h3 {
                display: none
            }
            
            h1{
                order: -1;
            }
        }
    }

    .heroDescription {
        display: flex;
        gap: 2rem;

        @media (max-width: 1224px) {
            flex-direction: column;

        }

        .heroText {
            display: flex;
            flex-direction: column;
            justify-content: space-between;



            .top {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            .moreInfo {
                display: flex;
                gap: 2rem;
            }
        }

        .descPar {
            max-width: 600px;
            margin-right: 4rem;
            color: white;

            @media (max-width: 736px){
                margin-right:0;
            }
        }

        .imageDesc {
            max-width: 60vw;

            @media (max-width: 1224px) {
                order: -1;
                max-width: 100vw;
                img{
                    border-radius: 2rem;
                }
            }

            img {
                border-top-left-radius: 4rem;
                border-bottom-left-radius: 4rem;
            }
        }
    }

    .heroHead {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-right: 4rem;
    }

    .Underline {
        border-bottom: 1px solid white;
    }

    .heroRight {
        display: flex;
        align-items: center;
        gap: 4rem;

        @media (max-width: 655px) {
            flex-direction: column;
            gap: 1rem;
        }
    }
}

.games_title {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 2rem;

    @media (max-width:1020px){
        padding: 1rem;
    }

    .title {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;
    }
}

.PriceTag {
    display: flex;
    gap: .5rem;

    .discount {
        background-color: #0047FF;
        padding: .5rem;
        border-radius: .5rem;
        height: 40px;
    }

}

.games {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 1rem;
    padding: 2rem;

    @media (max-width:1020px){
        padding: 1rem;
    }
}

.game {
    border-bottom: 1px solid white;
}

@media (max-width: 1100px) {
    .games {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
}

@media (max-width: 440px) {
    .games {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

@media (max-width: 480px) {
    tiendaHero {
        padding: 1rem;
    }

    .games {
        grid-template-columns: 1fr;
    }

    .heroDescription {
        flex-direction: column
    }
}
</style>