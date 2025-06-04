<template>
  <section id="contact" class="py-16 md:py-24 bg-gradient-to-br from-[#EC4899] to-pink-700 text-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700, type: 'spring' } }"
        >
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
            Prêt à Donner Vie à Votre Projet ?
          </h2>
          <p class="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Nous sommes impatients d'entendre parler de vos idées. Contactez-nous dès aujourd'hui pour une consultation gratuite et sans engagement. Transformons ensemble votre vision en succès digital.
          </p>
          <div class="space-y-5">
            <a href="mailto:contact@agence.com" class="flex items-center group">
              <div class="p-3 bg-white/20 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <span class="text-lg group-hover:underline">contact@agence.com</span>
            </a>
            <a href="tel:+33123456789" class="flex items-center group">
              <div class="p-3 bg-white/20 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 9.75V7.5a3 3 0 013-3V4.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-lg group-hover:underline">+33 1 23 45 67 89</span>
            </a>
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }" 
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay:150, type: 'spring' } }"
          class="bg-white p-8 md:p-10 rounded-xl shadow-2xl"
        >
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-[#1F2937] mb-1.5">Nom complet</label>
              <input type="text" id="name" v-model="form.name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] text-[#1F2937] placeholder-gray-400" required placeholder="Ex: Jean Dupont">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-[#1F2937] mb-1.5">Adresse Email</label>
              <input type="email" id="email" v-model="form.email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] text-[#1F2937] placeholder-gray-400" required placeholder="Ex: jean.dupont@email.com">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-da[#1F2937] mb-1.5">Votre Message</label>
              <textarea id="message" v-model="form.message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] text-[#1F2937] placeholder-gray-400" required placeholder="Décrivez brièvement votre projet ou votre question..."></textarea>
            </div>
            <div class="pt-1">
              <button
                type="submit"
                class="w-full bg-[#1D4ED8] hover:bg-[#1D4ED8]-hover text-white font-semibold py-3.5 px-8 rounded-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4ED8]"
              >
                Envoyer Votre Message
              </button>
            </div>
            <p v-if="submitted" class="mt-4 text-green-700 bg-green-100 p-3 rounded-md text-center text-sm">Merci ! Votre message a été envoyé avec succès.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup> // ... (logique du formulaire comme avant)
import { ref, reactive } from 'vue';
const form = reactive({ name: '', email: '', message: '' });
const submitted = ref(false);
const submitForm = () => {
  console.log('Formulaire soumis:', form);
  submitted.value = true;
  setTimeout(() => {
    form.name = ''; form.email = ''; form.message = '';
    submitted.value = false;
  }, 4000);
};
</script>