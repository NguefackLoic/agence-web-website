<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <PortfolioSection /> <!-- Ajoutez cette ligne -->
    <CtaSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import PortfolioSection from '~/components/PortfolioSection.vue'; // Ajoutez cette ligne
import CtaSection from '~/components/CtaSection.vue';

useHead({
  title: 'Accueil - AgenceNom | Solutions Web Modernes',
  meta: [
    { name: 'description', content: 'AgenceNom : création de sites web sur mesure, design UX/UI, SEO et stratégie digitale. Donnez vie à vos projets avec nous.' }
  ]
})
</script>