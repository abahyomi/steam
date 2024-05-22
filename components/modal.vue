<template>
    <div>
        <form @submit.prevent="submitForm">
            <div class="modal_overlay">
                <div class="IniciarSesion bg-slate-100">
                    <h1 class="text-black">Iniciar Sesión</h1>

                    <div class="nameTag">
                        <label class="text-black" for="name">Name</label>
                        <input class="bg-slate-950 p-2 text-white rounded-lg" type="text" v-model="formData.name"
                            id="name" placeholder="eg. John98" />
                    </div>

                    <div class="nameTag">
                        <label class="text-black" for="password">Password</label>
                        <input class="bg-slate-950 p-2 text-white rounded-lg" type="password"
                            v-model="formData.password" id="password" placeholder="m38rmF$" />
                    </div>

                    <div class="buttons">
                        <UButton class="w-36 justify-center p-3" color="white"  @click.prevent="handleCancel">Cancelar</UButton>
                        <UButton class="w-36 justify-center p-3 text-white"  type="submit" label="Iniciar sesión"></UButton>

                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script setup>

import { ref } from 'vue'
const emit = defineEmits(["closeModal"])
const formData = ref({
    name: '',
    password: ''
})

const submitForm = async () => {
    const { data: responseData } = await $fetch('https://fakestoreapi.com/auth/login', {
        method: 'post',
        body: JSON.stringify({
            username: formData.value.name,
            password: formData.value.password
        })
    })
    emit("closeModal", "logged");
    //console.log(responseData.value.token)
}
const handleCancel = () => {
    emit("closeModal");
}
</script>

<style lang="postcss">
.modal_overlay {
    position: absolute;
    top: 121px;
    left: 0;
    width: 100%;
    height: 1080px;
    background: var(--Transparent-BG, rgba(4, 5, 14, 0.90));
    backdrop-filter: blur(3.75px);
    overflow: hidden;

    .IniciarSesion {
        position: relative;
        width: 600px;
        padding: 8rem 6rem;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid white;
        border-radius: 90rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        box-shadow: 1px 0px 121.4px 0px rgba(98, 134, 229, 0.77);
        overflow: hidden;
    }

}


.nameTag {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    color: black;
}

.buttons {
    display: flex;
    gap: 1rem;
}
</style>