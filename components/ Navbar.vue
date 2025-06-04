<template>
  <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-3xl font-bold text-[#1D4ED8]">
        Agence<span class="text-[#EC4899]">Nom</span>
      </NuxtLink>
      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/#services" class="text-medium-text hover:text-[#1D4ED8] transition-colors duration-300">Services</NuxtLink>
        <NuxtLink to="/#about" class="text-medium-text hover:text-[#1D4ED8] transition-colors duration-300">À Propos</NuxtLink>
        <NuxtLink to="/#portfolio" class="text-medium-text hover:text-[#1D4ED8] transition-colors duration-300">Portfolio</NuxtLink>
        <NuxtLink
          to="/#contact"
          class="px-6 py-2.5 bg-[#1D4ED8] text-white rounded-lg font-medium hover:bg-[#1D4ED8]-hover transition-colors duration-300 transform hover:scale-105"
        >
          Contactez-nous
        </NuxtLink>
      </div>
      <div class="md:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-[#1F2937] focus:outline-none">
          <svg v-if="!mobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </nav>
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div v-show="mobileMenuOpen" class="md:hidden bg-white shadow-lg rounded-b-md">
        <NuxtLink to="/#services" @click="mobileMenuOpen = false" class="block px-4 py-3 text-sm text-medium-text hover:bg-light-bg hover:text-[#1D4ED8]">Services</NuxtLink>
        <NuxtLink to="/#about" @click="mobileMenuOpen = false" class="block px-4 py-3 text-sm text-medium-text hover:bg-light-bg hover:text-[#1D4ED8]">À Propos</NuxtLink>
        <NuxtLink to="/#portfolio" @click="mobileMenuOpen = false" class="block px-4 py-3 text-sm text-medium-text hover:bg-light-bg hover:text-[#1D4ED8]">Portfolio</NuxtLink>
        <NuxtLink to="/#contact" @click="mobileMenuOpen = false" class="block px-4 py-3 text-sm text-[#1D4ED8] font-semibold hover:bg-light-bg">Contactez-nous</NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false);
</script>