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

        <div class="right flex flex-col gap-12 md:gap-24 items-end">
            <span>©2024-copyright</span>

            <div class="footerbtns flex gap-6">
                <UButton color="white">Twitter</UButton>
                <UButton color="white">Instagram</UButton>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'FooterSteam'
};
</script>

<style scoped>
.footer {
    margin-top: 4rem;
    overflow: hidden;
    width: 100%;
    padding: 4rem;
    border-top: 1px solid #D9D9D9;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}

.footerLinks {
    display: flex;
    gap: 2rem;
    li {
        padding: 0;
        margin-bottom: 1rem;
    }
}

img {
    opacity: 70%;
    height: 28px;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .left, .right {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footerLinks {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .footerLinks ul {
        margin-bottom: 2rem;
    }

    .right {
        margin-top: 2rem;
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 2rem;
    }

    .footerbtns {
        gap: 1rem;
    }
}
</style>
