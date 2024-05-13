<script setup lang="ts">

const items = [
    '../tiendaHero01.gif',
    '../tiendaHero.png',
    '../tiendaHero02.png',
    '../tiendaHero03.png',
]


</script>

<template>
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

        <img :src="item" class="w-full" draggable="false">
    </UCarousel>
</template>
