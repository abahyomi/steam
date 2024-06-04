<template>
    <div v-if="data != null">
        <div class="imgHero h-600px overflow-hidden" data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="400">
            <img class="w-full object-top" :src="data.background_image" alt="">
        </div>

        <section class="container flex p-6 md:p-12 lg:p-24 ">
            <div class="gameHeroDet flex gap-24 justify-between" data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="600">
                <div class="title_dt flex flex-col gap-8">
                    <h1 class="text-7xl font-semibold">{{ data.name }}</h1>
                    <div class="parrafo max-w-7xl">
                        <p class="text-teal-50" v-html="data.description"></p>
                    </div>
                </div>
                <div class="comprar flex gap-8">
                    <div class="PriceTag justify-end" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="800">
                        <span class="discount">20%</span>
                        <div class="actualPrice">
                            <p class="smallText">59.99€</p>
                            <h1>47.99</h1>
                        </div>
                    </div>
                    <UButton class="h-12" color="white">Añadir al carrito</UButton>
                </div>
            </div>
        </section>

        <section class="assets gap-8 px-8 py-8 flex space items-start justify-between lg:mr-36 lg:px-24">
            <div class="dlc flex flex-col gap-4 max-w-3xl">
                <h1 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">DlC´s</h1>
                <p class="max-w-md" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">
                    Los DlC`s son contenido adicional de los juegos de Steam, en ningún caso son una compra obligatoria.
                    Aqui te ofreces la lista de DLC´s disponibles para {{ data.name }}
                </p>
                <ul class="flex flex-col gap-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                    <div class="dlcTag flex items-center justify-between">
                        <li>DlC-01</li>
                        <div class="PriceTag justify-end" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="600">
                            <span class="discount">20%</span>
                            <div class="actualPrice">
                                <p class="smallText">59.99€</p>
                                <h1>47.99</h1>
                            </div>
                        </div>
                    </div>
                    <div class="dlcTag flex items-center justify-between">
                        <li>DlC-02</li>
                        <div class="PriceTag justify-end" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="800">
                            <span class="discount">10%</span>
                            <div class="actualPrice">
                                <p class="smallText">29.99€</p>
                                <h1>26.99</h1>
                            </div>
                        </div>
                    </div>
                    <div class="dlcTag flex items-center justify-between">
                        <li>DlC-03</li>
                        <div class="PriceTag justify-end" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1000">
                            <span class="discount">45%</span>
                            <div class="actualPrice">
                                <p class="smallText">69.99€</p>
                                <h1>37.99</h1>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <div class="caracteristica" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">
                <h1 class="underline">Características</h1>
                <ul class="flex flex-col">
                    <div class="carcTag">
                        <li class="p-0 py-2">· Salida: {{ data.released }}</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2">· Puntuación: {{ data.rating }}/5</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2" v-for="genre in data.genres" :key="genre.id">· Género: {{ genre.name }}
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2">· Almacenamiento Steam Cloud</li>
                    </div>
                </ul>
            </div>
        </section>

        <section class="carrousel flex flex-col gap-6 p-8 md:p-12 lg:p-16" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <h1>Galería de {{ data.name }}</h1>
            <div class="galeriaDetalle">
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
        </section>

        <section class="masInfo py-16 px-24 flex justify-between">
            <div class="requerimientos">
                <h1 class="underline">Requerimientos del PC</h1>
                <ul class="flex flex-col justify-start p-0">
                    <div class="carcTag">
                        <li class="p-0 py-4">· Requiere un procesador 64-bit y sistema operativo</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· O.S.:</b> Windows 10</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Procesador:</b> INTEL CORE I5-8400 or AMD RYZEN 3 3300X</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Memoria:</b> 12GB Ram</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Gráfica:</b> NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· DirectX:</b> Versión 12</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Almacenamiento:</b> 60GB de almacenamiento</li>
                    </div>
                </ul>
            </div>
            <div class="info flex flex-col gap-6 max-w-xl">
                <h1>Más sobre {{ data.name }}</h1>
                <p class="text-teal-50" v-html="shortDescription"></p>
            </div>
        </section>
    </div>

    <section class="reviews py-16 px-24">
        <h1>Reviews de los usuarios</h1>
        <div class="reviews_container">
            <reviews></reviews>
            <reviews></reviews>
            <reviews></reviews>
        </div>
    </section>

    <section class="relacionados flex flex-col lg:py-16 px-24 gap-16">
        <h1>Juegos relacionados</h1>
        <div class="gameRelacionados flex gap-24">
            <GameItem v-for="(game, index) in recommendedGames" :key="index" :game="game" :count="index" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';


const items = ref(null);
const route = useRoute();
const { data } = useFetch(`https://api.rawg.io/api/games/${route.params.id}?key=d45f1e8e88654d059e56f179e27d9327`);

const recommendedGames = ref([]);

const fetchRecommendedGames = async () => {
    try {
        const response = await fetch('https://api.rawg.io/api/games?key=d45f1e8e88654d059e56f179e27d9327');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const games = jsonData.results;
        const randomGames = getRandomGames(games, 3);
        recommendedGames.value = randomGames;
    } catch (error) {
        console.error('Error fetching recommended games:', error);
    }
};

const getRandomGames = (games, count) => {
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

const fetchData = async () => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${route.params.id}/screenshots?key=d45f1e8e88654d059e56f179e27d9327`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        items.value = jsonData.results.map(result => ({ img: { src: result.image } }));
    } catch (err) {
        console.error('Error fetching screenshots:', err);
    }
};

onMounted(() => {
    fetchData();
});

const shortDescription = computed(() => {
    if (!data.value || !data.value.description) return '';
    const words = data.value.description.split(' ');
    const wordLimit = 150;
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return data.value.description;
});

</script>

<style lang="postcss">
.gameHeroDet {
    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: self-start;
    }
}

.imgHero {
    transition: 300ms;

    img {
        height: 600px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;

        @media (max-width:736px){
            height: 400px;
        }
    }
}

.galeriaDetalle img {
    width: 100vw;
    max-height: 800px;
}

.reviews .reviews_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 1rem;
    padding: 1rem 0rem;
}

.assets .dlcTag {
    background-color: #111216;
    border-radius: 1rem;
    width: 100%; /* Cambiar a ancho completo en dispositivos pequeños */
    max-width: 600px; /* Limitar el ancho máximo en dispositivos grandes */
    padding: 1.2rem 2rem;
}

.assets {
    @media (max-width: 1100px) {
        flex-direction: column;
    }
}

.gameRelacionados {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 1rem;
    padding: 1rem 0rem;
}

@media (max-width: 1100px) {
    .gameHeroDet {
        flex-direction: column;
        align-items: self-start;
    }

    .masInfo{
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    
    .assets {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .assets .dlcTag {
        padding: 1rem; /* Reducir el relleno en dispositivos pequeños */
    }
    
    .gameRelacionados {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Cambiar el tamaño de las columnas en dispositivos pequeños */
    }
}
</style>
