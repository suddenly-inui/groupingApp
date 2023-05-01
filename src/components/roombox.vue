<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(["roomname"])

</script>

<template>
    <div class="container">
        <RouterLink :to="{
            name: 'room',
            params: {
                id: roomname
            }
        }">
            {{ roomname }}</RouterLink>
    </div>
</template>

<style>
.container {
    border: 1px solid rgb(133, 133, 133);
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
}
</style>

