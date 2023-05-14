<template>
    <input 
        class="input" 
        :type="props.type" 
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="handle">
</template>

<script lang="ts" setup>
    const props = defineProps(["placeholder", "type", "modelValue"]);
    const emit = defineEmits(["update:modelValue"])

    const handle = (e:Event) =>{
        const target = e.target as HTMLInputElement
        console.log(target.value);
        emit("update:modelValue", target.value)        
    }
</script>

<style lang="scss" scoped>
    .input {
    border-top: none;
    border-left: none;
    border-right: none;
    &:focus{
	outline:none;
}
}
</style>