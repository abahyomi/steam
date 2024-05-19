<template>
  <div class="body">
    <NavBar />
    <NuxtPage />

    <footersteam />
    <UNotifications />
  </div>
</template>


<style lang="postcss">
@tailwind base;

* {
  color: #fff;
  font-family: Poppins;
  object-fit: cover;
}

.body {
  @apply bg-[--color-bg];
}

.display1 {
  font-size: 96px;
  font-weight: 600;
}

.display2 {
  font-size: 64px;
  font-weight: 500;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
}

h2{
  font-size: 1.5rem;
}




@layer base {
  :root {
    --color-bg: #04050E;
    --color-primary: #0047FF;
    /* ... */
  }
}
</style>