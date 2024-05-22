<template>
    <div v-if="data != null">
        <div class="imgHero h-600px overflow-hidden" data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="400">
            <img class="w-full object-top" :src="data.background_image" alt="">
        </div>


        <main class="container p-16">

            <div class="gameHeroDet flex gap-16" data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="600">

                <div class="title_dt flex flex-col gap-8" >
                    <h1 class="text-7xl font-semibold">{{ data.name }}</h1>
                    <div class="parrafo max-w-2xl">
                        <p class="text-teal-50" v-html="data.description"></p>
                    </div>
               
                </div>

                <div class="PriceTag justify-end" data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800">
                    <span class="discount">20%</span>
                    <div class="actualPrice">
                        <p class="smallText">59.99€</p>
                        <h1>47.99</h1>
                    </div>
                </div>

            </div>

        </main>
    </div>


</template>

<style>
.imgHero {

    transition: 300ms;

    img {
        height: 600px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
    }

    &:hover{
        img{
            filter: drop-shadow(0px 0px 103.2px rgba(255, 255, 255, 0.29));
        }
    }
}
</style>

<script setup>

const route = useRoute();
const { data } = useFetch(`https://api.rawg.io/api/games/${route.params.id}?key=d45f1e8e88654d059e56f179e27d9327`)

</script>