<template>
  <div class="about">
    <div class="container">
      <ArchiveList/>
    </div>
  </div>
</template>

<script>
  import ArchiveList from '@/components/ArchiveList.vue';

  export default {
    name: "AboutView",
    components: {
      ArchiveList,
    }
  }
</script>

<style scoped>
  .container {
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>