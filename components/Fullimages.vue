<template>
    <div class="full-images-container d-flex justify-content-center align-items-center">
        <div class="full-images-mask">
            <ImagesCarousel :imagesList="images" :imagesBg="false" :paginationPosition="'bottom'" />
        </div>
        <div class="full-images-close d-flex justify-content-center align-items-center" @click="$emit('handleFullImages',false)">
            X
        </div>
    </div>
</template>

<script>
export default {
    props: ["images"],
    methods(){
        console.log("full images", this.images);
    }
}
</script>

<style>
.full-images-container{
    position: fixed;
    width: 100dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.8);
    background-color: rgba(255, 255, 255, 0.074);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    z-index: 1;
}
.full-images-mask{
    width: 90%;
    height: 90%;
    /* background-color: red; */
}
.full-images-mask .carousel__item{
    height: 90dvh;
}
.full-images-close{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: blue;
    color:#fff;
    border-radius: 20px;
    cursor: pointer;
}
</style>