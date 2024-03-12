<template>
    <div class="background">
        <div class="background-object">
            <div class="background-backdrop"></div>
            <div class="cricle-1"></div>
            <div class="cricle-2"></div>
            <div class="cricle-3"></div>
        </div>   
    </div>
</template>

<style>
.background{
    position: fixed;
    z-index: -1;
    width: 100dvw;
    height: 100dvh;
    /* background: #000; */
}
.background-object{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
}
.background-backdrop{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backdrop-filter: blur(100px) ;
    backdrop-filter: blur(100px);
    background-color: rgba(255, 255, 255, 0.074);
}
.cricle-1{
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 500px;
    background: #000069;
    top:-40px;
    right: -60px;
    z-index: -1;
}
.cricle-2{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 500px;
    background: #000069;
    bottom: 200px;
    left: -30px;
    z-index: -1;
}
.cricle-3{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 500px;
    background: #000069;
    bottom: 140px;
    right: -40px;
    z-index: -1;
}

@media only screen and (min-width: 800px){
    .cricle-1{
        width: 300px;
        height: 300px;
        top:-30px;
        right: -50px;
    }
    .cricle-2{
        width: 250px;
        height: 250px;
        left: -100px;
    }
}
</style>