<template>
	{{ text }}
	<button class="p-2 m1-2 bg-white text-red-400" @click="$emit('remove')">x</button>
</template>

<script>
export default {
	props: ['text'],
	emit: ['remove']
}
</script>

<style scoped>
</style>
