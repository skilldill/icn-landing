<template>
    <div :class="{'features': true, 'features-show': show}">
        <div class="features-content">
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
    </div>
</template>
<script>
export default {
    name: "FeaturesList",

    data() {
        return {
            show: false,
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.show = window.scrollY >= 2390;
        })
    }
}
</script>
<style lang="scss" scoped>
    @keyframes vibration {
        0% {
            transform: translateX(5px) rotate(-15deg);
        }

        25% {
            transform: translateX(-5px) rotate(15deg);
        }

        50% {
            transform: translateX(5px) rotate(-15deg);
        }

        75% {
            transform: translateX(-5px) rotate(15deg);
        }

        100% {
            transform: translateX(0px) rotate(0deg);
        }
    }

    .features {
        background-color: #F8F8F8;
        
        &-content {
            display: flex;
            justify-content: space-between;
            padding: 160px 100px;
            max-width: 1600px;
            margin: auto;
        }

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

                img {
                    transition: all .6s;
                    opacity: 0;

                    &:hover {
                        animation: vibration .3s ease-in 0s;
                    }
                }
            }

            p {
                transition: all .6s;
                opacity: 0;
                font-size: 36px;
                line-height: 50px;
                text-align: center;
                color: #222222;
                margin: 0;
            }
        }
    }

    .features-show {
        .features-item {
            .circle {
                img {
                    opacity: 1;
                }
            }

            p {
                opacity: 1;
            }
        }
    }
</style>