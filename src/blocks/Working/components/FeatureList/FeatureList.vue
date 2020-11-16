<template>
    <div :class="{'feature-list': true, 'feature-list-right': fadeDirection === 'right', 'feature-list-left': fadeDirection === 'left', 'feature-list-show': show}">
        <h3 class="feature-list-title">{{ title }}</h3>
        <ul class="feature-list-items">
            <li class="feature-list-item" v-for="item in list" :key="item">
                <img :src="require('../../../../assets/icons/list-item.svg')" alt="list-item">
                <p>{{ item }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "FeatureList",
    props: {
        title: String,
        list: Array,
        show: Boolean,
        fadeDirection: String
    },
}
</script>
<style lang="scss" scoped>
    .feature-list {
        transition: all .3s;
        opacity: 0;

        &-title {
            font-weight: 500;
            font-size: 48px;
            line-height: 64px;
            color: #222222;
        }
            
        &-items {
            padding: 0;
        }

        &-item {
            list-style-type: none;
            display: flex;
            align-items: flex-start;
            margin-bottom: 48px;

            img {
                margin-top: 8px;
                margin-right: 32px;
            }

            p {
                font-size: 24px;
                line-height: 36px;
                color: #222222;
                margin: 0;
                max-width: 470px;
            }
        }
    }

    .feature-list-right {
        transform: translateX(80px);
    }

    .feature-list-left {
        transform: translateX(-80px);
    }

    .feature-list-show {
        opacity: 1;
        transform: translateX(0px);
    }
</style>