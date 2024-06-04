<template>
    <NuxtLink :to="`/gamesdet/${game.id}`">
        <div class="GameItem">
            <img :src="game.background_image" :alt="game.name">
            <div class="GameItemText">
                <h2 class="text-xl md:text-3xl">{{ game.name }}</h2>
                <div class="PriceTag">
                    <span class="discount">20%</span>
                    <div class="actualPrice">
                        <p class="smallText">59.99€</p>
                        <h1>47.99</h1>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">

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
.GameItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: 400ms;

    img {
        height: 365px;
        width: 90%;
        border-radius: 2rem;
        transition: 400ms;
    }


    .GameItemText {
        width: 500px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1135px) {
            max-width: 400px;
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


    }

    &:hover {
        cursor: pointer;
        transform: scale(102%);

        img {
            filter: drop-shadow(0px 0px 103.2px rgba(255, 255, 255, 0.29));
        }
    }
}
</style>