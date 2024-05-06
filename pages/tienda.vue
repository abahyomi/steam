<template>
    <div>

        <section class="tiendaHero">
            <div class="heroHead" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">
                <h3 class="display2 Underline">Destacados</h3>
                <div class="heroRight">
                    <form action="search">Buscar en la tienda</form>
                    <h1 class="display1">Tienda</h1>
                </div>
            </div>

            <div class="heroDescription" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <h1>Ready or Not</h1>
            <p>Los Sueños. El LSPD informa de un gran aumento de los delitos en toda el área metropolitana de Los
                Sueños.
                Los SWAT tratan de solventar situaciones de alto riesgo como tomas de rehenes, amenazas de bomba y
                sospechosos atrincherados, entre otros.</p>

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

        </section>

        <section class="games" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <GameItem v-for="(game, index) in games" :key="index" :game="game"></GameItem>
        </section>

    </div>
</template>

<script>
import GameItem from '../components/GameItem.vue'; // Asegúrate de que la ruta sea correcta

export default {
    components: {
        GameItem
    },
    data() {
        return {
            games: [
                {
                    id: 1,
                    name: "Fallout",
                    discount: "30%",
                    oldPrice: "59.99€",
                    price: "47.99€",
                    imageUrl: "https://picsum.photos/500/365"
                },
                {
                    id: 2,
                    name: "Fallout",
                    discount: "30%",
                    oldPrice: "59.99€",
                    price: "47.99€",
                    imageUrl: "https://picsum.photos/500/365"
                },
                {
                    id: 3,
                    name: "Fallout",
                    discount: "30%",
                    oldPrice: "59.99€",
                    price: "47.99€",
                    imageUrl: "https://picsum.photos/500/365"
                },
                {
                    id: 4,
                    name: "Fallout",
                    discount: "30%",
                    oldPrice: "59.99€",
                    price: "47.99€",
                    imageUrl: "https://picsum.photos/500/365"
                },
                {
                    id: 5,
                    name: "Fallout",
                    discount: "30%",
                    oldPrice: "59.99€",
                    price: "47.99€",
                    imageUrl: "https://picsum.photos/500/365"
                },
                {
                    id: 6,
                    name: "Fallout",
                    discount: "30%",
                    oldPrice: "59.99€",
                    price: "47.99€",
                    imageUrl: "https://picsum.photos/500/365"
                },

            ]
        };
    }
};
</script>


<style lang="postcss">
.tiendaHero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    gap: 4rem;

    .heroHead{
        display: flex;
        justify-content: space-between;
        width: 100%;
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
        /* Cambia a 2 columnas en pantallas más pequeñas */
    }
}

@media (max-width: 480px) {
    .games {
        grid-template-columns: 1fr;
        /* Una columna en móvil */
    }
}
</style>