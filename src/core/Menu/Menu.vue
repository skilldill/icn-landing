<template>
    <div class="menu">
        <div class="menu-logo">
            <img :src="require('../../assets/icn-logo-menu.svg')" alt="">
        </div>
        <div class="menu-links">
            <a class="link" href="#working">Как работает</a>
            <a class="link link-last" href="#benefit">В чем польза</a>
            <a v-if="showLinkBtn" class="link link-last link-btn" href="#contacts">Попробовать бесплатно</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    data() {
        return {
            showLinkBtn: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu {
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
            }
        }
    }
</style>