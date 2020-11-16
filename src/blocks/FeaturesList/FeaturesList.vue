<template>
    <div class="features">
        <div class="features-item">
            <div class="circle">
                <img :src="require('../../assets/icons/swipe-hande.svg')" alt="swipew">
            </div>
            <p>Свайпайте</p>
            <p>коллег</p>
        </div>
        <div class="features-item">
            <div class="circle">
                <img :src="require('../../assets/icons/eye.svg')" alt="swipew">
            </div>
            <p>Просматривайте</p>
            <p>совпадения</p>
        </div>
        <div class="features-item">
            <div class="circle">
                <img :src="require('../../assets/icons/calendar.svg')" alt="swipew">
            </div>
            <p>Назначайте</p>
            <p>встречи</p>
        </div>
        <div class="features-item">
            <div class="circle">
                <img :src="require('../../assets/icons/members.svg')" alt="swipew">
            </div>
            <p>Общайтесь</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "FeaturesList"
}
</script>
<style lang="scss" scoped>
    .features {
        display: flex;
        justify-content: space-between;
        padding: 160px 100px;
        background-color: #F8F8F8;
        
        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;

            .circle {
                width: 168px;
                height: 168px;
                border-radius: 100%;
                background: #222222;
                box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
                margin-bottom: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            p {
                font-size: 36px;
                line-height: 50px;
                text-align: center;
                color: #222222;
                margin: 0;
            }
        }
    }
</style>