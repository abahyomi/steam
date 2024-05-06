<template>
    <nav >
        <NuxtLink to="/"><img src="../public/Logo Steam.svg" alt=""></NuxtLink>
        <ul>
            <li>
                <NuxtLink to="/about">SteamCreate</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/tienda">Tienda</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/comunidad">Comunidad</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">Soporte</NuxtLink>
            </li>
        </ul>

        <div class="right_header">
            <span>instalar</span>
            <span v-if="unlogged">iniciar sesión</span>
            <div v-else v-auto-animate class="user" @click="panelActive = !panelActive"> <div class="panel" v-if="panelActive"></div></div>
        </div>

        

    </nav>
</template>

<script setup>
import { ref } from 'vue';
const panelActive = ref(false);
const unlogged = ref(false);
</script>


<style lang="postcss">
nav {
    @apply flex items-center;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(3, 3, 18, 0.85); 
    backdrop-filter: blur(10px); 
    border-bottom: 0.5px solid #e4ebfa;
    display: flex;
    padding: 2rem 4rem;
    justify-content: space-between;

    ul{
        li{
            transition: 300ms;
            &:hover{
                color: #0047FF;
                
            }
        }
    }

    .right_header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
}

.user {
    @apply w-10 h-10 rounded-full;
    background-color: beige;
    position: relative;

    &:hover {
        cursor: pointer
    }

    .panel {
    position: absolute;
    top: 80px;
    right: 0;
    width: 300px;
    height: 100px;
    overflow: hidden;
    background-color: aqua;
}
}

ul {
    @apply flex p-4;

    li {
        @apply p-4;
    }
}


</style>