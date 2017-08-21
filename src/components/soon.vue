<template>
  <div class="soon">
    <div v-for="item in soon">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'soon',
    computed: {
      soon() {
        return this.$store.state.soon;
      }
    },
    mounted() {
      this.$store.dispatch('LOAD_SOON_LIST');
    }
  }
</script>

<style>

</style>
