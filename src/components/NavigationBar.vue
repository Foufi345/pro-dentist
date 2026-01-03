<template>
  <nav class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center" :class="isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'">
          <img src="../assets/logo-pro-dentist.png" alt="Pro Dentist Logo" class="h-12 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#home" class="text-dark-taupe hover:text-teal-500 transition-colors duration-300 font-medium">{{ t('nav.home') }}</a>
          <a href="#services" class="text-dark-taupe hover:text-teal-500 transition-colors duration-300 font-medium">{{ t('nav.services') }}</a>
          <a href="#about" class="text-dark-taupe hover:text-teal-500 transition-colors duration-300 font-medium">{{ t('nav.about') }}</a>
          <a href="#testimonials" class="text-dark-taupe hover:text-teal-500 transition-colors duration-300 font-medium">{{ t('nav.testimonials') }}</a>
          <a href="#contact" class="text-dark-taupe hover:text-teal-500 transition-colors duration-300 font-medium">{{ t('nav.contact') }}</a>

          <!-- Language Switcher -->
          <LanguageSwitcher />

          <button @click="scrollToBooking" class="btn-primary">
            {{ t('nav.bookAppointment') }}
          </button>
        </div>

        <!-- Mobile Menu Button & Language Switcher -->
        <div class="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button @click="toggleMenu" class="p-2 rounded-lg hover:bg-stone-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden pb-4 space-y-2">
        <a href="#home" @click="toggleMenu" class="block px-4 py-2 text-dark-taupe hover:bg-stone-50 rounded-lg transition-colors">{{ t('nav.home') }}</a>
        <a href="#services" @click="toggleMenu" class="block px-4 py-2 text-dark-taupe hover:bg-stone-50 rounded-lg transition-colors">{{ t('nav.services') }}</a>
        <a href="#about" @click="toggleMenu" class="block px-4 py-2 text-dark-taupe hover:bg-stone-50 rounded-lg transition-colors">{{ t('nav.about') }}</a>
        <a href="#testimonials" @click="toggleMenu" class="block px-4 py-2 text-dark-taupe hover:bg-stone-50 rounded-lg transition-colors">{{ t('nav.testimonials') }}</a>
        <a href="#contact" @click="toggleMenu" class="block px-4 py-2 text-dark-taupe hover:bg-stone-50 rounded-lg transition-colors">{{ t('nav.contact') }}</a>
        <button @click="scrollToBooking" class="w-full btn-primary mt-2">
          {{ t('nav.bookAppointment') }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t, isRTL } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToBooking = () => {
  const bookingSection = document.getElementById('booking')
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
</script>
