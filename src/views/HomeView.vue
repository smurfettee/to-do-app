<template>
  <div class="home">
    <ToDoSection/>
  </div>
</template>

<script>
import ToDoSection from '@/components/ToDoSection.vue';

export default {
	name: "HomeView",
	components: {
		ToDoSection,
	}
}

</script>

<style scoped>
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
