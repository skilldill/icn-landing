<template>
    <div>
        <Main />
        <Working />
        <FeaturesList />
        <Benefit />
    </div>
</template>
<script>
import { Main, Working, FeaturesList, Benefit } from "../";

export default {
    name: "BasePage",
    components: { 
        Main, 
        Working, 
        FeaturesList,
        Benefit
    },
}
</script>
