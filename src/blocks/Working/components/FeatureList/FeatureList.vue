<template>
    <div class="feature-list">
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
        list: Array
    }
}
</script>
<style lang="scss" scoped>
    .feature-list {
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
</style>