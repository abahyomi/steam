<template>
    <div v-if="data != null">

        <div class="imgHero h-600px overflow-hidden" data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="400">
            <img class="w-full object-top" :src="data.background_image" alt="">
        </div>

        <section class="container flex p-24">

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

        <section class="assets gap-8 px-24 py-6 flex space items-start justify-between">

            <div class="dlc flex flex-col gap-4 max-w-3xl">
                <h1>DlC´s</h1>
                <p class="max-w-md">Los DlC`s son contenido adicional de los juegos de Steam, en ningún caso son una
                    compra obligatoria. Aqui te ofreces la lista de DLC´s disponibles para {{ data.name }}</p>
                <ul class="flex flex-col gap-4">

                    <div class="dlcTag flex items-center justify-between">
                        <li>DlC-01
                        </li>

                        <div class="PriceTag justify-end" data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="800">
                            <span class="discount">20%</span>
                            <div class="actualPrice">
                                <p class="smallText">59.99€</p>
                                <h1>47.99</h1>
                            </div>
                        </div>
                    </div>
                    <div class="dlcTag flex items-center justify-between">
                        <li>DlC-02
                        </li>

                        <div class="PriceTag justify-end" data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="800">
                            <span class="discount">10%</span>
                            <div class="actualPrice">
                                <p class="smallText">29.99€</p>
                                <h1>26.99</h1>
                            </div>
                        </div>
                    </div>

                    <div class="dlcTag flex items-center justify-between">
                        <li>DlC-03
                        </li>

                        <div class="PriceTag justify-end" data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="800">
                            <span class="discount">45%</span>
                            <div class="actualPrice">
                                <p class="smallText">69.99€</p>
                                <h1>37.99</h1>
                            </div>
                        </div>
                    </div>


                </ul>
            </div>

            <div class="caracteristica">
                <h1 class="underline">Características</h1>
                <ul class="flex flex-col">
                    <div class="carcTag">
                        <li class="p-0 py-2">· Salida: {{ data.released }}
                        </li>

                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2">· Puntuación: {{ data.rating }}/5
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2" v-for="genre in data.genres" :key="genre.id">· Género: {{ genre.name }}</li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> · Almacenamiento Steam Cloud 
                        </li>
                    </div>
                </ul>
            </div>
        </section>

        <section class="carrousel px-24 py-16">
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
                        <li class="p-0 py-4">· Requiere un procesador 64-bit  y sistema operativo
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· O.S.:</b> Windows 10
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Procesador:</b> INTEL CORE I5-8400 or AMD RYZEN 3 3300X
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Memoria:</b> 12GB Ram
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Gráfica:</b> NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· DirectX:</b> Versión 12
                        </li>
                    </div>
                    <div class="caracTag">
                        <li class="p-0 py-2"> <b>· Alamacenamiento:</b> 60GB de alamacenamiento
                        </li>
                    </div>
                </ul>
            </div>
            <div class="info">
                <h1>Sobre {{ data.name }}</h1>
            </div>
        </section>
    </div>

    <section class="reviews py-16 px-24">
        <h1>Reviews de los usuarios</h1>
    </section>


</template>

<style>
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
    }
}

.galeriaDetalle {}

.assets {

    .dlcTag {
        background-color: #111216;
        border-radius: 1rem;
        min-width: 600px;
        padding: 1.2rem 2rem;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
    }


}
</style>

<script setup>

const route = useRoute();
const { data } = useFetch(`https://api.rawg.io/api/games/${route.params.id}?key=d45f1e8e88654d059e56f179e27d9327`)

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
</script>