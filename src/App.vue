<script>
export default {
    name: 'MainApp',
};
</script>
<template>
    <router-view />
</template>

<style>
* {
    box-sizing: border-box;
    /* transition: all 0.2s ease; */
}
html {
    scroll-behavior: smooth;
}
body {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
        Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
        Segoe UI Symbol !important;
    font-size: 14px;
    line-height: 24px;
    transition: all 0.2s ease;
}
</style>
