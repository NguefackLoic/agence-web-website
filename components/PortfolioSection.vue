<template>
    <section id="portfolio" class="py-16 md:py-24 bg-medium-bg"> 
      <div class="container mx-auto px-6">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-center mb-12 md:mb-16"
        >
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-[#1F2937] mb-3">
            Nos Réalisations Récentes
          </h2>
          <p class="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Découvrez quelques-uns des projets que nous avons eu le plaisir de concrétiser.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100, type: 'spring', stiffness:90 } }"
            class="bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col"
          >
            <div class="aspect-w-16 aspect-h-9">
              <img :src="project.imageUrl" :alt="project.title" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy"/>
            </div>
            <div class="p-6 flex-grow flex flex-col">
              <h3 class="text-xl font-semibold text-[#1F2937] mb-1.5 font-heading">{{ project.title }}</h3>
              <p class="text-[#6B7280] text-sm mb-3">{{ project.category }}</p>
              <p class="text-[#4B5563] text-sm mb-4 flex-grow">{{ project.excerpt }}</p>
              <NuxtLink :to="project.url" target="_blank" class="mt-auto self-start text-[#1D4ED8] hover:text-[#1D4ED8]-hover font-medium text-sm group-hover:underline inline-flex items-center">
                Voir le projet
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1.5">
                  <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
           v-motion
           :initial="{ opacity: 0, y:20 }"
           :visibleOnce="{ opacity: 1, y:0, transition: { duration: 500, delay: projects.length * 100 + 100 } }"
           class="text-center mt-12"
         >
           <NuxtLink
            to="/portfolio"
            class="bg-[#1D4ED8] hover:bg-[#1D4ED8]-hover text-white font-semibold py-3.5 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Voir Tout Notre Portfolio
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projects = [
    { title: 'Projet Alpha', category: 'Site E-commerce', url: '#', imageUrl: 'https://picsum.photos/seed/alpha/600/338', excerpt: 'Une plateforme e-commerce robuste avec des fonctionnalités avancées pour une expérience client optimale.' },
    { title: 'Projet Beta', category: 'Application Web SaaS', url: '#', imageUrl: 'https://picsum.photos/seed/beta/600/338', excerpt: 'Solution SaaS innovante pour la gestion de projets, conçue pour améliorer la productivité des équipes.' },
    { title: 'Projet Gamma', category: 'Site Vitrine Institutionnel', url: '#', imageUrl: 'https://picsum.photos/seed/gamma/600/338', excerpt: 'Un site vitrine élégant et moderne, reflétant l\'image de marque et les valeurs de l\'entreprise.' },
  ];
  </script>