<template>
    <div class="GameItem">
        <img :src="game.imageUrl" :alt="game.name">
        <div class="GameItemText">
            <h1>{{ game.name }}</h1>
            <div class="PriceTag">

                <span class="discount">{{ game.discount }}</span>
                <div class="actualPrice">
                    <p class="smallText">{{ game.oldPrice }}</p>
                    <h1>{{ game.price }}</h1>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        game: {
            type: Object,
            required: true
        }
    }
};
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
        width: 500px;
        border-radius: 2rem;
        transition: 400ms;
    }


    .GameItemText {
        width: 500px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1100px) {
            width: 400px;
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