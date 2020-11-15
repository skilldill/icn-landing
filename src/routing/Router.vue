<template>
    <div class="container">
        <Menu />
        <router-view></router-view>
    </div>
</template>
<script>
import { Menu } from "../core/Menu";

export default {
    name: "Router",
    components: { Menu }
}
</script>
<style lang="scss" scoped>
    .container {
        position: relative;
    }
</style>