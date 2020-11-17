<template>
    <div class="working">
        <h1 class="working-title">Как это работает</h1>
        <div class="working-block">
            <FeatureList title="Профиль" :show="showProfileList" fadeDirection="left" :list="[
                'Загружаете фото и указываете личные или профессиональные интересы.', 
                'Профиль можно заполнить автоматически данными корпоративного аккаунта.']" 
            />
            <div class="phones">
                <div class="phone-block">
                    <img :src="require('../../assets/phones/profile-phone-1.svg')" alt="профиль">
                </div>
                <div class="phone-block phone-block-video">
                    <img :src="require('../../assets/phones/profile-phone-2.svg')" alt="профиль">
                </div>
            </div>
        </div>

        <div class="working-block">
            <div class="phones">
                <div class="phone-block">
                    <img :src="require('../../assets/phones/swipe-phone-1.svg')" alt="профиль">
                </div>
                <div class="phone-block phone-block-video">
                    <img width="226" :src="require('../../assets/phones/swipe-video.gif')" alt="профиль">
                </div>
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
                <div class="phone-block">
                    <img :src="require('../../assets/phones/meetings-phone-1.svg')" alt="профиль">
                </div>
                <div class="phone-block">
                    <img :src="require('../../assets/phones/meetings-phone-2.svg')" alt="профиль">
                </div>
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
        console.log(this.videoHtml);

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

            .phones {
                display: flex;

                .phone-block {
                    box-shadow: 20px 20px 60px rgba(98, 98, 98, 0.1), 40px 40px 40px rgba(98, 98, 98, 0.05), 25px 25px 30px rgba(98, 98, 98, 0.05), 20px 20px 20px rgba(98, 98, 98, 0.05), 10px 8px 20px rgba(98, 98, 98, 0.1);
                    background-color: transparent;
                    height: 456px;
                    border-radius: 50px;
                    &:first-child {
                        margin-right: 80px;
                    }
                }
            }
        }
    }
</style>