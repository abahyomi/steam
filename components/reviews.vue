<template>

    <div class="comment p-8">
        <div class="profile flex flex-col gap-6">

            <div class="upComment flex justify-between pb-8">
                <div class="prof flex items-center gap-6">
                    <div class="profile_pic">
                        <img src="https://picsum.photos/id/237/200/300" alt="" class="profile">
                    </div>
                    <div class="mainInfo">
                        <h3>Victor</h3>
                        <p>Esta guay!! lol</p>
                    </div>
                </div>

                <span> 12 Sep 2023</span>
            </div>

            <div class="servido flex flex-col gap-4">
                <span>Te ha servido este comentario?</span>
                <div class="btns_Comment flex gap-4">
                    <UButton color="white">Si <Icon name="ic:baseline-thumb-up-alt" /></UButton>
                    <UButton color="white">No <Icon name="ic:baseline-thumb-down-alt" /></UButton>
                </div>

            </div>


        </div>
    </div>

</template>

<script></script>

<style>
.comment {
    background-color: #111216;
    max-width: 800px;
    border-radius: 32px;

    .profile_pic {
        img {
            height: 30px;
            width: 30px;
            border-radius: 900px;
        }
    }

    .upComment {
        border-bottom: 1px solid grey;
    }

}
</style>