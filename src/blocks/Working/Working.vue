<template>
    <div class="working">
        <h1 class="working-title">Как это работает</h1>
        <div class="working-block">
            <FeatureList title="Профиль" :show="showProfileList" fadeDirection="left" :list="[
                'Загружаете фото и указываете личные или профессиональные интересы.', 
                'Профиль можно заполнить автоматически данными корпоративного аккаунта.']" 
            />
            <div class="phones">
                <img :src="require('../../assets/phones/profile-phones.svg')" alt="профиль">
            </div>
        </div>

        <div class="working-block">
            <div class="phones">
                <img :src="require('../../assets/phones/swipe-phones.svg')" alt="swipe">
            </div>
            <FeatureList title="Поиск" :show="showSwipeList" fadeDirection="right" :list="[
                'Смахивайте влево, пока не найдете человека, с которым захотите пообщаться.', 
                'В поиске отображаются коллеги со схожими интересами.']" 
            />
        </div>

        <div class="working-block">
            <FeatureList title="Совпадения" :show="showMeetingsList" fadeDirection="left" :list="[
                'Люди, которые также захотели с вами пообщаться, отображаются в списке взаимного интереса. Пишите и назначайте встречи.', 
                'Коллега не узнает, если вы откажетесь общаться.']"
            />
            <div class="phones">
                <img :src="require('../../assets/phones/meetings-phones.svg')" alt="профиль">
            </div>
        </div>
    </div>
</template>
<script>
import { FeatureList } from "./components";

export default {
    name: "Working",
    components: { FeatureList },

    data() {
        return {
            showProfileList: false,
            showSwipeList: false,
            showMeetingsList: false
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.showProfileList = window.scrollY >= 750;
            this.showSwipeList = window.scrollY >= 1300;
            this.showMeetingsList = window.scrollY >= 1920;
        })
    }
}
</script>
<style lang="scss" scoped>
    .working {
        padding: 0 200px;
        padding-top: 140px;
        
        &-title {
            font-weight: bold;
            font-size: 64px;
            line-height: 74px;
            color: #5295F1;
        }

        &-block {
            display: flex;
            justify-content: space-between;
            padding-bottom: 32px;
            padding-top: 65px;
        }
    }
</style>