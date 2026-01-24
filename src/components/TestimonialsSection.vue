<template>
  <section id="testimonials" class="section-padding bg-gradient-to-br from-teal-50 to-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-taupe mb-4">{{ t('testimonials.title') }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll border border-teal-100">
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-gray-600 italic mb-6 leading-relaxed">"{{ testimonial.quote }}"</p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="font-bold text-dark-taupe">{{ testimonial.name }}</p>
              <p class="text-sm text-teal-600">{{ testimonial.treatment }}</p>
            </div>
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

const testimonials = computed(() => [
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    treatment: t('services.teethWhitening'),
    quote: t('testimonials.testimonial1')
  },
  {
    id: 2,
    name: 'Michael Chen',
    initials: 'MC',
    treatment: t('services.dentalImplants'),
    quote: t('testimonials.testimonial2')
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    initials: 'ER',
    treatment: t('services.generalCheckup'),
    quote: t('testimonials.testimonial3')
  }
])
</script>
