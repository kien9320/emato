<script>
import ContactMap from '@/components/LienHeView/ContactMap.vue';
import CustomerSupport from '@/components/LienHeView/CustomerSupport.vue';

export default {
    name: 'LienHeView',
    components: {
        ContactMap,
        CustomerSupport,
    },
};
</script>
<template>
    <div>
        <ContactMap> </ContactMap>
        <CustomerSupport></CustomerSupport>
    </div>
</template>

<style scoped></style>
