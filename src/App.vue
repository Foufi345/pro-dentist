<template>
  <div class="app">
    <NavigationBar />
    <HeroSection />
    <ServicesGrid />
    <WhyChooseUs />
    <TestimonialsSection />
    <BookingSystem />
    <MapsSection />
    <FooterSection />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesGrid from './components/ServicesGrid.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import BookingSystem from './components/BookingSystem.vue'
import MapsSection from './components/MapsSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'

// Initialize scroll animations
onMounted(() => {
  const observeElements = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))
  }

  // Small delay to ensure DOM is ready
  setTimeout(observeElements, 100)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
}
</style>
