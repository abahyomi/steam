<template>
    <div>

        <section class="tiendaHero">
            <div class="heroHead" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">
                <h3 class="display2 Underline">Destacados</h3>
                <div class="heroRight">
                    <UInput v-model="q" name="q" placeholder="Buscar en tienda..." icon="i-heroicons-magnifying-glass-20-solid"
                        autocomplete="off" :ui="{ icon: { trailing: { pointer: '' } } }">
                        <template #trailing>
                            <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                                :padded="false" @click="q = ''" />
                        </template>
                    </UInput>
                    <h1 class="display1">Tienda</h1>
                </div>
            </div>

            <div class="heroDescription" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">

                <div class="heroText">

                    <div class="top">
                        <h1 class="text-primary-500" >Ready or Not</h1>
                        <p class="descPar">Ready or Not es un FPS táctico realista donde te pones en la piel de un
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
                        <button>ver más</button>
                    </div>
                </div>


                <div class="imageDesc">
                    <carrusel></carrusel>
                </div>
            </div>

        </section>

        <section class="games" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <GameItem v-for="(game, index) in games" :key="index" :game="game"></GameItem>

        </section>


    </div>
</template>

<script setup lang="ts">

const q = ref('')

import { ref, onMounted } from 'vue';
import GameItem from '../components/GameItem.vue';

const games = ref([]);

// onMounted(async () => {
//     const { data } = await useFetch("https://api.rawg.io/api/games?key=2307b45a5fa04aee8510128079fc4871");
//     games.value = data.results;
// });

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

    .heroDescription {
        display: flex;
        gap: 2rem;

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
            color: white
        }

        .imageDesc {
            max-width: 1200px;

            img {
                height: 500px;
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
}

@media (max-width: 1100px) {
    .games {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
}

@media (max-width: 480px) {
    .games {
        grid-template-columns: 1fr;
    }
}
</style>