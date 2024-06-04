<template>
    <div class="bannerMore" :class="{'flex-row-reverse': imagePosition === 'right'}">
        <div class="bannerImg" :class="{'rounded-left': imagePosition === 'left', 'rounded-right': imagePosition === 'right'}">
            <img :src="service.src" :alt="service.title">
        </div>
        <div class="bannerInfo flex flex-col gap-12 p-8 max-w-2xl">
            <div class="bannerText flex flex-col gap-4">
                <h1 class="text-6xl">{{service.title}}</h1>
                <p>{{service.desc}}</p>
            </div>
            <UButton class="max-w-24 items-center justify-center" label="Ir a la web"></UButton>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    service: {
        type: Object,
        required: false
    },
    imagen: {
        type: Object,
        required: false
    },
    imagePosition: {
        type: String,
        default: 'left' 
    }
});
</script>

<style>

.bannerMore {
  display: flex;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.bannerImg img {
  max-width: 50vw;
  height: 550px;
}
.rounded-left img {
  border-top-right-radius: 120px;
  border-bottom-right-radius: 120px;
}
.rounded-right img {
  border-top-left-radius: 120px;
  border-bottom-left-radius: 120px;
}

@media (max-width: 768px) {
  .bannerMore {
    flex-direction: column;
    align-items: center
  }
  .flex-row-reverse {
    flex-direction: column;
  }
  .bannerImg img {
    height: 300px;
    max-width: 90vw;
    border-radius: 20px; /* Ajustar los bordes redondeados en pantallas pequeñas */
  }
}
</style>