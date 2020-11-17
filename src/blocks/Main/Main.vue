<template>
    <div :class="mountedClass">
        <div class="main-content">
            <div class="main-large-content">
                <p>
                    <span>Развивайте нетворкинг</span> в вашей компании без усилий HR-отдела
                </p>
            </div>
            <div class="phone-block">
                <img :src="require('../../assets/phones/lock-phone.svg')" alt="icn-phone">
                <img class="unlock-phone" :src="require('../../assets/phones/start-phone.svg')" alt="icn-phone">
            </div>
            <div class="main-default-content">
                <p>
                    Подключите ICNetworking и ваши сотрудники начнут 
                    самостоятельно строить неформальные социальные 
                    связи полезные для вас и компании.
                </p>
                <a @click.prevent="gotoContacts()" class="link-btn" href="#contacts">Попробовать бесплатно</a>
            </div>
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
            }, 500);
        },
        
        gotoContacts() {
            this.$router.push('/contacts');
        }
    },

    mounted() {
        this.setMountedClass();
    }
}
</script>
<style lang="scss" scoped>
    .main {
        background-color: #EDF3FB;
        height: 100vh;
        width: 100%;
        max-height: 1000px;

        &-content {
            padding: 0 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;
            max-width: 1600px;
            margin: auto;
        }

        .phone-block {
            position: relative;

            .unlock-phone {
                top: 0;
                left: 0;
                position: absolute;
                transition: all .9s;
                opacity: 0;
            }
        }

        &-default-content {
            flex: 1;
            transition: all .8s;
            transform: translateY(-80px);
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
                // max-width: 437px;
            }
        }

        &-large-content {
            flex: 1;
            transition: all .8s;
            transform: translateY(-80px);
            opacity: 0;

            p {
                hyphens: auto;
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

        .phone-block {
            .unlock-phone {
                opacity: 1;
            }
        }
    }
</style>