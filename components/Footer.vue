<template>
  <footer class="bg-[#1F2937] text-gray-400 py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div>
          <NuxtLink to="/" class="text-2xl font-bold text-white">
            Agence<span class="text-[#EC4899]">Nom</span>
          </NuxtLink>
          <p class="text-sm mt-2">Transformer les idées en réalité digitale.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Liens Rapides</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/#services" class="hover:text-white transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/#about" class="hover:text-white transition-colors">À Propos</NuxtLink></li>
            <li><NuxtLink to="/#portfolio" class="hover:text-white transition-colors">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/#contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
           <h4 class="text-white font-semibold mb-3">Contactez-nous</h4>
           <p>123 Rue Imaginaire, 75000 Paris</p>
           <p>contact@agence.com</p>
           <p>+33 1 23 45 67 89</p>
           <!-- Social media icons here -->
        </div>
      </div>
      <div class="mt-10 border-t border-gray-700 pt-8 text-center text-sm">
        <p>© {{ new Date().getFullYear() }} AgenceNom. Tous droits réservés.</p>
        <NuxtLink to="/mentions-legales" class="hover:text-white px-2">Mentions Légales</NuxtLink>
        <NuxtLink to="/politique-confidentialite" class="hover:text-white px-2">Confidentialité</NuxtLink>
      </div>
    </div>
  </footer>
</template>