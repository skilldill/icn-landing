<template>
    <div>
        <Main />
        <Working />
        <Benefit />
    </div>
</template>
<script>
import { Main, Working, Benefit } from "../";

export default {
    name: "BasePage",
    components: { Main, Working, Benefit },
}
</script>
