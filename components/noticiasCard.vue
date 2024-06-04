<template>

    <div class="noticiasBanner " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
        <img :src="game.background_image"
            :alt="game.name">

        <div class="info flex flex-col gap-8  p-12">
            <h2 class="justify-end">{{ game.name
                }}</h2>

            <div class="desc_noticias">
                <p>¡Atención, fanáticos de Counter-Strike: Global Offensive! Valve ha lanzado una emocionante
                    actualización
                    que trae consigo la esperada Operación Riptide, junto con una serie de mejoras significativas para
                    el
                    modo competitivo.</p>
            </div>

            <div class="infoPubli">
                <p>{{ game.released }}</p>
                <p>by Arma Co.</p>
            </div>

        </div>

    </div>

</template>

<script setup>
const props = defineProps({
    game: {
        type: Object,
        required: false
    },
    count: {
        type: Number,
    }
});
const { game } = props;
const { count } = props;

</script>

<style lang="postcss">
.noticiasBanner {
    display: flex;
    align-self: center;
    padding-right: 2rem;
    width: 100%;
    border-radius: 2rem;
    transition: 300ms;
    background-color: #111216;
    max-height: 350px;


    img {
        max-width: 30%;
        border-radius: 2rem;
        transition: 300ms;
    }

    .desc_noticias{
        p{
            max-width: 100%;
        }
    }


    &:hover {
        cursor: pointer;
        transform: scale(101%);

        img {
            border-right: 8px solid #0047FF;
        }
    }
}

/* Responsive styles */
@media (max-width: 1024px) {
    .noticiasBanner {
        flex-direction: column;
        align-items: center;
        text-align: start;
        max-height: none;
        padding: 1rem;

        img {
            max-width: 100%;
            margin-bottom: 1rem;
        }

        .info {
            padding: 1rem;
        }
    }
}

@media (max-width: 768px) {
    .noticiasBanner {
        .info {
            gap: 4px;
        }

        .desc_noticias p {
            font-size: 14px;
        }

        .infoPubli p {
            font-size: 12px;
        }
    }
}

@media (max-width: 480px) {
    .noticiasBanner {
        .info {
            padding: 0.5rem;
            gap: 2px;
        }

        .desc_noticias p {
            font-size: 12px;
        }

        .infoPubli p {
            font-size: 10px;
        }

        h2 {
            font-size: 18px;
        }
    }
}
</style>
