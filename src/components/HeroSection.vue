<template>
  <section id="home" class="bg-gradient-to-br from-teal-50 via-sky-50 to-white section-padding pt-32 pb-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 animate-on-scroll">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-taupe leading-tight">
            {{ t('hero.subtitle') }}
            <span class="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">{{
              t('hero.perfectSmile') }}</span>
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            {{ t('hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button @click="scrollToBooking" class="btn-primary text-lg">
              {{ t('hero.cta') }}
            </button>
            <button @click="scrollToServices" class="btn-secondary text-lg">
              {{ t('hero.ctaSecondary') }}
            </button>
          </div>

          <!-- Trust Badges -->
          <div class="flex items-center gap-8 pt-8">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-sm font-semibold text-dark-taupe">4.9/5 Rating</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="text-sm font-semibold text-dark-taupe">5,000+ {{ t('whyChooseUs.happyPatients') }}</span>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative animate-on-scroll">
          <div
            class="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img src="../assets/hero-image.png" alt="Modern Dental Office" class="w-full h-full object-cover" />
          </div>

          <!-- Floating Card -->
          <div
            class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 hidden md:block animate-on-scroll border-2 border-teal-100">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-teal-600 font-medium">CERTIFIED</p>
                <p class="text-sm font-bold text-dark-taupe">{{ t('whyChooseUs.experiencedTeam') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const scrollToBooking = () => {
  const bookingSection = document.getElementById('booking')
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>


<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
