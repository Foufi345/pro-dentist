<template>
  <section id="about" class="section-padding bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-taupe mb-4">{{ t('whyChooseUs.title') }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('whyChooseUs.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.id"
          class="bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll border border-teal-100">
          <div class="flex flex-col items-center text-center space-y-4">
            <div
              class="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <div v-html="feature.icon" class="w-10 h-10 text-white"></div>
            </div>
            <h3 class="text-2xl font-bold text-dark-taupe">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Stats Section with Animated Counters -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(stat, index) in stats" :key="stat.label" ref="statRefs" class="text-center animate-on-scroll">
          <div
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent mb-2">
            {{ animatedValues[index] }}{{ stat.suffix }}
          </div>
          <div class="text-gray-600 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const features = computed(() => [
  {
    id: 1,
    title: t('whyChooseUs.experiencedTeam'),
    description: t('whyChooseUs.experiencedTeamDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
  },
  {
    id: 2,
    title: t('whyChooseUs.comprehensiveCare'),
    description: t('whyChooseUs.comprehensiveCareDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    id: 3,
    title: t('whyChooseUs.modernTech'),
    description: t('whyChooseUs.modernTechDesc'),
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
  }
])

const stats = computed(() => [
  { value: 15, suffix: '+', label: t('whyChooseUs.yearsExperience') },
  { value: 5000, suffix: '+', label: t('whyChooseUs.happyPatients') },
  { value: 98, suffix: '%', label: t('whyChooseUs.successRate') },
  { value: 100, suffix: '%', label: t('whyChooseUs.modernEquipment') }
])

const animatedValues = ref([0, 0, 0, 0])
const statRefs = ref([])
const hasAnimated = ref(false)

const animateCounter = (index: number, targetValue: number, duration = 2000): void => {
  const startTime = Date.now()

  const updateCounter = (): void => {
    const now = Date.now()
    const progress = Math.min((now - startTime) / duration, 1)

    // Easing function for smooth animation
    const easeOutQuad = (t: number): number => t * (2 - t)
    const currentValue = Math.floor(easeOutQuad(progress) * targetValue)

    animatedValues.value[index] = currentValue

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      animatedValues.value[index] = targetValue
    }
  }

  requestAnimationFrame(updateCounter)
}

onMounted(() => {
  // Intersection Observer for stats animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true

          // Animate all counters
          stats.value.forEach((stat, index) => {
            animateCounter(index, stat.value, 2000)
          })
        }
      })
    },
    { threshold: 0.5 }
  )

  // Observe the first stat element
  setTimeout(() => {
    const firstStat = document.querySelector('.text-center.animate-on-scroll')
    if (firstStat) {
      observer.observe(firstStat)
    }
  }, 100)
})
</script>
