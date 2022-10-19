<script setup>
import NavbarItem from './components/NavbarItem.vue'
import { RouterView } from 'vue-router'
import FooterItem from './components/FooterItem.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <NavbarItem />
  <RouterView />
  <FooterItem />
</template>