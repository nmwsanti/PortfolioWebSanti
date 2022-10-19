<script setup>
const props = defineProps(['src']);
const imageUrl = new URL(`/src/assets/img/${props.src}`, import.meta.url).href;
</script>

<template>
  <img class="card-img-top" :src="imageUrl" alt="img" />
</template>