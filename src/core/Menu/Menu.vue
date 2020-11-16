<template>
    <div class="menu">
        <div class="menu-logo">
            <img :src="require('../../assets/icn-logo-menu.svg')" alt="">
        </div>
        <div class="menu-links">
            <a :class="{'link': true, 'link-translate': !showLinkBtn}" href="#working">Как работает</a>
            <a :class="{'link link-last': true, 'link-translate': !showLinkBtn}" href="#benefit">В чем польза</a>
            <a :class="{'link link-last link-btn': true, 'link-btn-show': showLinkBtn }" href="#contacts">Попробовать бесплатно</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    data() {
        return {
            showLinkBtn: false
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.showLinkBtn = window.scrollY >= 500;
        })
    }
}
</script>
<style lang="scss" scoped>
    .menu {
        z-index: 1000;
        align-items: center;
        display: flex;
        justify-content: space-between;
        max-width: 1600px;
        padding: 16px 100px;
        position: sticky;
        top: 0;
        background-color: white;

        &-logo {

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
        }
    }
</style>