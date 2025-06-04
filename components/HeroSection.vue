<template>
  <section class="bg-[#1D4ED8] text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <!-- Pattern SVG subtil pour le fond -->
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(1) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,0)"/><path d="M10-6V6M0 0h20M10 14v12M0 20h20M10 34v12M0 40h20M10 54v12M0 60h20" stroke-linecap="round" stroke-width="1" stroke="hsla(220, 70%, 80%, 0.2)" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"/></svg>
    </div>

    <div class="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20 min-h-[70vh] md:min-h-[calc(90vh-80px)] flex flex-col justify-center relative z-10">
      <div class="md:w-3/5 lg:w-1/2 text-center md:text-left">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, type: 'spring', stiffness: 100, damping: 10 } }"
          class="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
        >
          Créons Ensemble Votre Avenir Digital
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200, type: 'spring', stiffness: 100 } }"
          class="text-lg md:text-xl mb-10 font-light opacity-90"
        >
          Des solutions web sur mesure, innovantes et performantes pour propulser votre entreprise au sommet.
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 400, ease: 'easeOut' } }"
          class="space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <NuxtLink
            to="/#services"
            class="w-full sm:w-auto inline-block bg-white text-[#1D4ED8] font-semibold py-3.5 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Nos Services
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="w-full sm:w-auto inline-block bg-[#D97706] hover:bg-[#D97706]-hover text-white font-semibold py-3.5 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Devis Gratuit
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Illustration SVG - flottant à droite sur grand écran -->
    <div
      v-motion
      :initial="{ opacity: 0, x: 100, scale: 0.8 }"
      :enter="{ opacity: 1, x: 0, scale: 1, transition: { duration: 800, delay: 500, ease: 'easeOut' } }"
      class="hidden md:block absolute right-0 bottom-0 md:w-2/5 lg:w-1/2 h-full opacity-80 md:opacity-100"
    >
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-contain object-right-bottom">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,165,0);stop-opacity:1" />
          </linearGradient>
           <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" style="stop-color:#EC4899;stop-opacity:0.7" />
             <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:0.7" />
           </linearGradient>
        </defs>
        <path fill="#FFFFFF" opacity="0.1" d="M394.5,337.5Q346,425,250,423Q154,421,104,335.5Q54,250,107,164Q160,78,251.5,91Q343,104,391,177Q439,250,394.5,337.5Z" transform="translate(0 0)"/>
        <path fill="url(#grad2)" opacity="0.6" d="M324,329.5Q270,409,190,390Q110,371,100.5,285.5Q91,200,146,141Q201,82,271,91.5Q341,101,355,175.5Q369,250,324,329.5Z" transform="translate(30 20) scale(0.9)" />
        <g transform="translate(100 80) scale(0.8)">
          <rect x="50" y="50" width="150" height="80" rx="10" ry="10" fill="white" opacity="0.2"/>
          <circle cx="250" cy="100" r="40" fill="url(#grad1)" opacity="0.5"/>
          <rect x="100" y="180" width="200" height="120" rx="15" ry="15" fill="white" opacity="0.3"/>
          <line x1="70" y1="80" x2="180" y2="60" stroke="white" stroke-width="5" opacity="0.4"/>
          <line x1="230" y1="220" x2="280" y2="280" stroke="white" stroke-width="5" opacity="0.4"/>
        </g>
      </svg>
    </div>
  </section>
</template>