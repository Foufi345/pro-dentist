<template>
  <section id="services" class="section-padding bg-gradient-to-b from-white to-teal-50/30">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-taupe mb-4">{{ t('services.title') }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id"
          class="card group cursor-pointer animate-on-scroll hover:-translate-y-2">
          <div class="flex flex-col items-center text-center space-y-4">
            <!-- Icon -->
            <div
              class="w-16 h-16 bg-gradient-to-br from-teal-100 to-sky-100 rounded-full flex items-center justify-center group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300">
              <div v-html="service.icon"
                class="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300"></div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-dark-taupe group-hover:text-teal-600 transition-colors">{{ service.title
              }}</h3>

            <!-- Description -->
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const services = computed(() => [
  {
    id: 1,
    title: t('services.generalCheckup'),
    description: t('services.generalCheckupDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    id: 2,
    title: t('services.teethWhitening'),
    description: t('services.teethWhiteningDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
  },
  {
    id: 3,
    title: t('services.dentalImplants'),
    description: t('services.dentalImplantsDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>`
  },
  {
    id: 4,
    title: t('services.orthodontics'),
    description: t('services.orthodonticsDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`
  },
  {
    id: 5,
    title: t('services.rootCanal'),
    description: t('services.rootCanalDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
  },
  {
    id: 6,
    title: t('services.teethCleaning'),
    description: t('services.teethCleaningDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`
  }
])
</script>
