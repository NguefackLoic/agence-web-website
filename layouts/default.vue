<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/ Navbar.vue';
import Footer from '../components/Footer.vue';
</script>