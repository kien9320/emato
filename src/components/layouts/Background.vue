<template>
    <div class="background">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GlobalBackground',
};
</script>

<style scoped>
.background {
    background-color: #f5f6f9;
}
</style>
