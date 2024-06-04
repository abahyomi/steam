<template>
  <nav>
    <NuxtLink to="/" class="logo">
      <img src="../public/Logo Steam.svg" alt="Logo">
    </NuxtLink>
    <button v-if="!logged" class="menu-button" @click="menuOpen = !menuOpen">
      <Icon name="ic:outline-menu" />
    </button>
    <ul :class="{'open': menuOpen}">
      <li>
        <NuxtLink to="/about">SteamCreate</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/tienda">Tienda</NuxtLink>
      </li>
    </ul>
    <div class="right_header flex items-center justify-center">
      <UButton v-if="!logged" class="instalar" label="Installar" @click="isOpen = true" />

      <UModal v-model="isOpen" :overlay="true">
        <div class="p-6 flex flex-col gap-4 self-center">
          <h3>¿Quieres instalar Steam en tu ordenador?</h3>
          <div class="flex gap-4">
            <UButton @click="isOpen = false" class="w-36 justify-center" color="white" variant="solid">No</UButton>
            <UButton class="w-36 justify-center p-4 text-white" label="Sí"
                     @click="toast.add({ timeout: 3000, title: 'Steam instalado correctamente!' }), isOpen = false">
            </UButton>
          </div>
        </div>
      </UModal>
      <button v-if="!logged && !modalActive" @click="modalActive = !modalActive">
        Iniciar sesión
      </button>
      <div v-else-if="!modalActive" class="userCard flex items-center gap-6" @click="panelActive = !panelActive">
        <div class="dropdow flex items-center gap-4">
          <h3>Mateo</h3>
          <div class="user"><img src="/pfpic.png" alt="Profile Picture"></div>
        </div>
        <Icon name="ic:outline-shopping-cart" />
      </div>
      <div class="panel" v-show="panelActive">
        <ul>
          <li>
            <NuxtLink to="/about">SteamCreate</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tienda">Tienda</NuxtLink>
          </li>
          <li class="cerrarSesion" @click="logged = false; panelActive = false">
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
const menuOpen = ref(false)

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(3, 3, 18, 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 0.5px solid #e4ebfa;
  padding: 2rem 4rem;

  .menu-button {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 96px;
      right: 0;
      background: rgba(3, 3, 18, 0.95);
      width: 200px;
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
      border: 1px solid #e4ebfa;
      padding: 1rem;
    }

    li {
      padding: 1rem;
      transition: color 300ms;

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

  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }

  .panel {
    position: absolute;
    top: 64px;
    right: 0;
    background: rgba(3, 3, 18, 0.95);
    width: 200px;
    border: 1px solid #e4ebfa;
    padding: 1rem;
    border-radius: 8px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 1rem;
        color: white;

        &:hover {
          color: #0047FF;
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  nav {
    padding: 2rem 1rem;

    .logo {
      img {
        height: 36px;
      }
    }

    .menu-button {
      display: block;
    }

    .instalar {
      display: none;
    }

    ul {
      display: none;

      &.open {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
