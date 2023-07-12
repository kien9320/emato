<!-- eslint-disable import/no-dynamic-require -->
<!-- eslint-disable global-require -->
<script>
import SectionHeader from '@/components/SectionHeader.vue';
import ShopsList from '@/components/ShopsView/ShopsList.vue';

export default {
    name: 'ShopsView',
    components: {
        SectionHeader,
        ShopsList,
    },
};
</script>

<template>
    <SectionHeader class="py-4">
        <template #sectionTitle><b>Danh sách</b> cửa hàng</template>
        <template><ShopsList></ShopsList></template>
    </SectionHeader>
</template>

<style scoped></style>
