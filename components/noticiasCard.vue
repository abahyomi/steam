<template>

    <div class="gameBanner">
        <img data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600" :src="game.background_image"
            :alt="game.name">

        <div class="info flex flex-col gap-8 justify-end text-end">
            <h2 class="justify-end" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">{{ game.name
                }}</h2>
            <div class="PriceTag justify-end" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">

                <span class="discount">20%</span>
                <div class="actualPrice">
                    <p class="smallText">59.99€</p>
                    <h1>47.99</h1>
                </div>
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
.gameBanner {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    align-self: center;
    padding: 2rem 3rem;
    width: 100%;
    border-radius: 2rem;
    transition: 300ms;

    img {
        max-width: 1400px;
        max-height: 400px;
        border-radius: 2rem;
    }

    &:hover {
        cursor: pointer;
        background-color: #111216;
        transform: scale(101%);
    }
}
</style>
