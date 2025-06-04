<template>
  <section id="services" class="py-16 md:py-24 bg-[#1D4ED8]-light">
    <div class="container mx-auto px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-12 md:mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-[#1F2937] mb-3">
          Des Services Pensés Pour Vous
        </h2>
        <p class="text-lg text-[#4B5563] max-w-2xl mx-auto">
          Nous offrons une gamme complète de services pour répondre à tous vos besoins digitaux.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
        >
          <div class="p-3 bg-[#1D4ED8]/10 text-[#1D4ED8] rounded-lg mb-6 inline-flex justify-center items-center self-start"> 
            <component :is="service.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-[#1F2937] mb-3 font-heading">{{ service.title }}</h3>
          <p class="text-[#4B5563] leading-relaxed flex-grow">
            {{ service.description }}
          </p>
          <NuxtLink to="#" class="mt-4 text-[#1D4ED8] hover:text-[#1D4ED8]-hover font-medium inline-flex items-center">
            En savoir plus
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ... (imports d'icônes et données des services comme avant)
import { shallowRef } from 'vue'
import { CubeTransparentIcon, CodeBracketSquareIcon, PaintBrushIcon, MagnifyingGlassCircleIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const services = shallowRef([
  { icon: CodeBracketSquareIcon, title: 'Développement Web Sur Mesure', description: 'Sites vitrines, e-commerce, applications web complexes, nous codons vos idées en utilisant les dernières technologies.'},
  { icon: PaintBrushIcon, title: 'Design UX/UI Moderne', description: 'Création d\'interfaces intuitives et esthétiques pour une expérience utilisateur mémorable et engageante.'},
  { icon: DevicePhoneMobileIcon, title: 'Solutions Mobiles & Responsive', description: 'Des sites web et applications parfaitement adaptées à tous les écrans, pour toucher vos clients où qu\'ils soient.'},
  { icon: MagnifyingGlassCircleIcon, title: 'Optimisation SEO Avancée', description: 'Améliorez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié grâce à nos stratégies SEO.'},
  { icon: ChartBarIcon, title: 'Stratégie Digitale & Conseil', description: 'Nous vous accompagnons dans la définition de votre stratégie digitale pour atteindre vos objectifs de croissance.'},
  { icon: CubeTransparentIcon, title: 'Hébergement & Maintenance', description: 'Solutions d\'hébergement fiables et services de maintenance pour assurer la pérennité de vos projets web.'},
]);
</script>