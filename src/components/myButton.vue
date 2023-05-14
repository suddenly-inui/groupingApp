<template>
<button class="mybutton">
    <slot></slot>
</button>
</template>

<style lang="scss">
    .mybutton{
	text-align: center;
	vertical-align: middle;
	text-decoration: none;
	margin: auto;
	padding: 1rem 2rem;
	font-weight: bold;
	border: 2px solid $main_color;
	color: $main_color;
	transition: 0.5s;
    
    &:hover{
        color: rgb(246,246,246);
		background: $main_color;
    }
    }
</style>
