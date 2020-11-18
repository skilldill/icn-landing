<template>
    <div class="menu">
        <div class="menu-content">
            <div class="menu-logo" @click="goto('/')">
                <img :src="require('../../assets/icn-logo-menu.svg')" alt="">
            </div>
            <div class="menu-links">
                <a :class="{'link': true, 'link-decorated': decoratedWorking && !decoratedBenefit, 'link-translate': !showLinkBtn}" href="#working">Как работает <div></div></a>
                <a :class="{'link link-last': true, 'link-decorated': decoratedWorking && decoratedBenefit, 'link-translate': !showLinkBtn}" href="#benefit">В чём польза <div></div></a>
                <a @click.prevent="goto(!!showLinkBtn ? '/contacts' : '/benefit')"  :class="{'link link-last link-btn': true, 'link-btn-show': showLinkBtn }" href="#">
                    Попробовать бесплатно
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    data() {
        return {
            showLinkBtn: false,
            decoratedWorking: false,
            decoratedBenefit: false
        }
    },

    methods: {
        goto(path) {
            this.$router.push(path);
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.showLinkBtn = window.scrollY >= 500;
            this.decoratedWorking = window.scrollY >= 700;
            this.decoratedBenefit = window.scrollY >= 3300;
        })
    }
}
</script>
<style lang="scss" scoped>
    .menu {
        z-index: 1000;
        position: sticky;
        top: 0;
        background-color: white;

        &-content {
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1600px;
            padding: 16px 100px;
        }

        &-logo {
            cursor: pointer;
        }

        &-links {
            .link {
                display: inline-block;
                font-size: 18px;
                line-height: 27px;
                color: #222222;
                text-decoration: none;
                transition: all .3s;
                transform: translateX(0px);
                position: relative;

                div {
                    position: absolute;
                    height: 3px;
                    left: 0;
                    right: 0;
                    background-color:#5295F1;
                    transition: all .3s;
                    transform: scale(0);
                }
            } 

            .link-last {
                margin-left: 132px;
            }

            .link-btn {
                background: #5295F1;
                box-shadow: 0px 0px 10px rgba(82, 149, 241, 0.5);
                border-radius: 10px;
                padding: 10px 40px;
                color: white;
                opacity: 0;
            }

            .link-btn-show {
                opacity: 1;
            }

            .link-translate {
                transform: translateX(410px);
            }

            .link-decorated {
                div { transform: scale(1); }
            }
        }
    }
</style>