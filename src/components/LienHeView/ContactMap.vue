<script>
export default {
    name: 'ContactMap',
};
</script>

<template>
    <div class="theMap">
        <iframe title="address" width="600" height="450" style="border: 0" loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/search?q=19%20%C4%90.%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20Ph%C3%BA%20Th%E1%BB%8D%20Ho%C3%A0%2C%20T%C3%A2n%20Ph%C3%BA%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam&key=AIzaSyD6J578sDr4D8HbXfChepeylYj7jA0cbBo"></iframe>
    </div>
</template>

<style scoped>
.theMap {
    width: 100%;
    height: 600px;
}

.theMap iframe {
    width: 100%;
    height: 100%;
}
</style>
