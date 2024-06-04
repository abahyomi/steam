<template>
    <section class="footer">
        <div class="left flex gap-16">
            <img src="../public/Logo Steam.svg" alt="">

            <div class="footerLinks flex gap-8">
                <ul class="flex flex-col">
                    <li>About</li>
                    <li>Works</li>
                    <li>Support</li>
                </ul>

                <ul class="flex flex-col">
                    <li>Contact</li>
                    <li>Legal info</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>


        <div class="right flex flex-col gap-24 items-end">
            <span>©2024-copyright</span>

            <div class="footerbtns flex gap-6">
                <UButton color="white">Twitter</UButton>
                <UButton color="white">Instagram</UButton>
            </div>
        </div>
    </section>
</template>

<script></script>

<style>
.footer {
    margin-top: 4rem;
    overflow: hidden;
    width: 100%;
    height: 300px;
    padding: 4rem;
    border-top: 1px solid #D9D9D9;
    display: flex;
    align-items: self-start;
    justify-content: space-between;

    .footerLinks {
        li {
            padding: 0;
            margin-bottom: 1rem;
        }
    }

    img {
        opacity: 70%;
        height: 28px;
    }
}
</style>