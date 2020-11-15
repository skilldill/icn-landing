<template>
    <div :class="mountedClass">
        <div class="main-large-content">
            <p>
                <span>Развивайте нетворкинг</span> в вашей компа-
                нии без усилий HR-отдела
            </p>
        </div>
        <div class="phone-block">
            <img :src="require('../../assets/phones/start-phone.svg')" alt="icn-phone">
        </div>
        <div class="main-default-content">
            <p>
                Подключите ICNetworking и ваши сотрудники начнут 
                самостоятельно строить неформальные социальные 
                связи полезные для вас и компании.
            </p>
            <a class="link-btn" href="#contacts">Попробовать бесплатно</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "Main",

    data() {
        return {
            mountedClass: "main"
        }
    },

    methods: {
        setMountedClass() {
            const timeOut = setTimeout(() => {
                this.mountedClass = "main main-mounted";
                clearTimeout(timeOut);
            }, 1000);
        }
    },

    mounted() {
        this.setMountedClass();
    }
}
</script>
<style lang="scss" scoped>
    .main {
        max-width: 1600px;
        padding: 0 100px;
        background-color: #EDF3FB;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-default-content {
            flex: 1;
            transition: all .8s;
            transform: translateY(50px);
            opacity: 0;

            p {
                font-size: 24px;
                line-height: 36px;
                color: #222222;
                margin-bottom: 64px;
            }

            .link-btn {
                display: block;
                text-decoration: none;
                color: white;
                background: #5295F1;
                box-shadow: 0px 0px 30px rgba(82, 149, 241, 0.5);
                border-radius: 10px;
                font-weight: 500;
                font-size: 32px;
                line-height: 24px;
                padding: 28px 0;
                text-align: center;
            }
        }

        &-large-content {
            flex: 1;
            transition: all .5s;
            transform: translateY(50px);
            opacity: 0;

            p {
                font-size: 64px;
                line-height: 74px;
                color: #222222;
                font-weight: 500;

                span {
                    color:#5295F1;
                }
            }
        }
    }

    .main-mounted {
        .main-default-content,
        .main-large-content {
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>