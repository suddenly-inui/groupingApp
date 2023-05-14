<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(["roomname"])

</script>

<template>
    <div class="box">
        <RouterLink :to="{
            name: 'room',
            params: {
                id: roomname
            }
        }" class="box_a">
            {{ roomname }}</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.box {
    background-color: rgb(246,246,246);
    border-radius: 10px;
    margin: 10px 0;
    font-size: 20px;
    &:hover{
        background-color: rgb(235,235,235);
    }
    .box_a{
        display: block;
        padding: 20px 10px;
    padding-left: 30px;
    }
}
</style>

