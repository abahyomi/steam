<template>
    <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
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
            <UButton label="Installar" @click="isOpen = true" />

            <UModal v-model="isOpen" :overlay="true">
                <div class="p-6 flex flex-col gap-4 self-center">
                    <h3>¿Quieres instalar Steam en tu ordenador?</h3>
                    <div class="flex gap-4">
                        <UButton @click="isOpen = false" class="w-36 justify-center" color="white" variant="solid">No</UButton>
                        <UButton class="w-36 justify-center p-4 text-white" label="Sí"
                            @click="toast.add({ timeout: 3000, title: 'Steam instalado correctamente!' }), isOpen=false">
                        </UButton>
                    </div>
                </div>
            </UModal>
            <button v-if="!logged && !modalActive" @click="modalActive = !modalActive">
                Iniciar sesión
            </button>
            <div v-else-if="!modalActive" class="user" @click="panelActive = !panelActive">
                <Icon name="ph:user" size="1.2em" color="white" />
            </div>
            <div class="panel" v-show="panelActive">
                <ul>
                    <li class="cerrarSesion" @click="logged = !logged; panelActive = !panelActive">
                        Cerrar sesión
                    </li>
                </ul>
            </div>

            <Modal v-show="modalActive" @close-modal="closeModal" />

        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const panelActive = ref(false)
const modalActive = ref(false)
const logged = ref(false)


const isOpen = ref(false)
const toast = useToast()

const closeModal = (e) => {
    modalActive.value = false;
    if (e == "logged") {
        logged.value = true;
    }
}
</script>


<style lang="postcss">
nav {
    @apply flex items-center;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(3, 3, 18, 0.75);
    backdrop-filter: blur(10px);
    border-bottom: 0.5px solid #e4ebfa;
    display: flex;
    padding: 2rem 4rem;
    justify-content: space-between;

    ul {
        li {
            transition: 300ms;

            &:hover {
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