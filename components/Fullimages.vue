<template>
    <div class="full-images-container d-flex justify-content-center align-items-center">
        <div class="full-images-mask">
            <ImagesCarousel />
        </div>
        <div class="full-images-close" @click="$emit('handleFullImages',false)">
            X
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.full-images-container{
    position: fixed;
    width: 100dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255, 0.5);
    z-index: 1;
}
.full-images-mask{
    width: 90%;
    height: 90%;
    background-color: red;
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
}
</style>