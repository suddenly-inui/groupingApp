<template>
    <div class="shuffleButton_wrapper">
        <myButton class="b" @click="sub">-</myButton>
        <myButton class="b" @click="shuffle">
        <slot />
        </myButton>
        <myButton class="b" @click="add">+</myButton>
    </div>
</template>

<style lang="scss" scoped>
    .b{
        display: inline-block;
        font-size: 1rem;
    }
</style>

<script lang="ts" setup>
import myButton from './myButton.vue';

const emit = defineEmits(["add", "sub", "shuffle"])

const add = () => {
    emit("add")
}

const shuffle = () => {
    emit("shuffle")

}
const sub = () => {
    emit("sub")

}
</script>