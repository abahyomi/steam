<template>
    <div class="p-4 md:p-12 lg:p-16">

        <div class="title_create flex justify-between p-4 md:p-8 mb-14" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" >
            <h1  class="text-5xl md:text-6xl font-medium lg:text-8xl">Bienvenido a <br>
                SteamCreate!</h1>

            <div class="acerca">
                <h2>Acerca de:</h2>
                <p class="max-w-96">SteamCreate es una web centralizada que proporciona contenido creado por los
                    usuarios y las
                    herramientas
                    necesarias para publicar, organizar y descargar ese contenido en tus juegos. Cada título usará
                    Workshop de
                    distintas formas.</p>
            </div>
        </div>

        <div>
            <div class="img_create flex flex-col justify-between gap-16 max-w-760px lg:flex-row" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <div class="flex flex-col gap-8">
                    <img src="../public/crear.png" alt="">
                    <div class="max-w-500 mx-auto">
                        <p class="text-white">En la sección de Create, podrás subir, crear e implementar tus obras para
                            los videojuegos. Te
                            ofrecemos una amplia variedad de herramientas que te permitirán mejorar tanto la experiencia
                            de
                            Steam como los juegos disponibles en la plataforma. Con estas herramientas, tendrás la
                            posibilidad de personalizar y optimizar tus creaciones, brindando a los jugadores una
                            experiencia única y enriquecedora. Desde la creación de mods hasta la implementación de
                            nuevas
                            funcionalidades, nuestro objetivo es proporcionarte todo lo necesario para que lleves tus
                            ideas
                            al siguiente nivel. ¡Únete a nuestra comunidad de creadores y haz realidad tus proyectos más
                            ambiciosos!</p>
                    </div>

                    <UButton color="white" class="max-w-32 justify-center" label="ir a Crear" </UButton>
                </div>

                <div class="flex flex-col gap-8 justify-end text-right ">
                    <img src="../public/explorar.png" alt="">
                    <div class="max-w-500 mx-auto">
                        <p class="text-white">En la sección de Create, podrás subir, crear e implementar tus obras para
                            los videojuegos. Te
                            ofrecemos una amplia variedad de herramientas que te permitirán mejorar tanto la experiencia
                            de
                            Steam como los juegos disponibles en la plataforma. Con estas herramientas, tendrás la
                            posibilidad de personalizar y optimizar tus creaciones, brindando a los jugadores una
                            experiencia única y enriquecedora. Desde la creación de mods hasta la implementación de
                            nuevas
                            funcionalidades, nuestro objetivo es proporcionarte todo lo necesario para que lleves tus
                            ideas
                            al siguiente nivel. ¡Únete a nuestra comunidad de creadores y haz realidad tus proyectos más
                            ambiciosos!</p>
                    </div>

                    <UButton color="white" class="max-w-32 justify-center self-end" label="ir a Explorar" </UButton>

                </div>
            </div>
        </div>

        <div class="flex justify-center items-center">
            <img src="../public/render.png" alt="">
        </div>


    </div>

</template>

<style lang="postcss">

@media (max-width: 1256px){
    .title_create{
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }
}

@media (max-width: 1024px){
    .title_create{
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }
}

</style>