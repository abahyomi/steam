<template>

    <div class="noticiasBannerLeft  text-right" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">

        <div class="info flex flex-col gap-8  p-12">
            <h2 class="justify-end">{{ game.name
                }}</h2>

            <div class="desc_noticias ">
                <p>¡Atención, fanáticos de Counter-Strike: Global Offensive! Valve ha lanzado una emocionante
                    actualización
                    que trae consigo la esperada Operación Riptide, junto con una serie de mejoras significativas para
                    el
                    modo competitivo.</p>
            </div>

            <div class="infoPubli flex flex-col ">
                <p>{{ game.released }}</p>
                <p>by Arma Co.</p>
            </div>



        </div>

        <img :src="game.background_image"
            :alt="game.name">

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
.noticiasBannerLeft {
    display: flex;
    align-self: center;
    padding-left: 2rem;
    padding-left: 0;
    width: 100%;
    border-radius: 2rem;
    transition: 300ms;
    background-color: #111216;
    max-height: 350px;


    img {
        max-width: 625px;
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
            border-left: 8px solid #0047FF;
        }
    }
}
</style>
