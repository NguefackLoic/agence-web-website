<template>
  <section id="about" class="py-16 md:py-24 bg-white"> 
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700, type: 'spring' } }"
          class="relative"
        >
          <div class="aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-10 rounded-xl shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Notre équipe travaillant ensemble"
              class="object-cover w-full h-full"
              loading="lazy"
            >
          </div>
          <!-- Éléments décoratifs plus subtils -->
          <div class="absolute -top-5 -left-5 w-24 h-24 bg-[#D97706]/20 rounded-full -z-10 hidden md:block transform-gpu transition-transform hover:scale-110"></div>
          <div class="absolute -bottom-6 -right-6 w-20 h-20 border-4 border-[#1D4ED8] rounded-lg -z-10 hidden md:block transform-gpu transition-transform hover:rotate-12"></div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700, delay:150, type: 'spring' } }"
        >
          <span class="text-[#D97706] font-semibold uppercase tracking-wider text-sm block mb-2">Qui sommes-nous ?</span>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-[#1F2937] mb-6">
            Votre Partenaire Digital de Confiance
          </h2>
          <p class="text-[#4B5563] mb-4 leading-relaxed text-lg">
            Nous sommes une équipe passionnée de créatifs, développeurs et stratèges digitaux, unis par une mission commune : transformer vos idées en succès numériques.
          </p>
          <p class="text-[#4B5563] mb-6 leading-relaxed text-lg">
            Forts de notre expertise et de notre approche centrée sur le client, nous concevons des expériences web qui non seulement impressionnent, mais convertissent.
          </p>
          <NuxtLink
            to="/#contact"
            class="inline-block bg-[#EC4899] hover:bg-[#EC4899]-hover text-white font-semibold py-3 px-7 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Parlons de votre projet
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>