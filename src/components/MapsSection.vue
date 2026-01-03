<template>
  <section id="location" class="section-padding bg-gradient-to-br from-teal-50 to-sky-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-dark-taupe mb-4">{{ t('maps.title') }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('maps.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start animate-on-scroll">
        <!-- Contact Info Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h3 class="text-2xl font-bold text-dark-taupe mb-6">{{ t('footer.contactUs') }}</h3>

          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-taupe mb-1">{{ t('maps.address') }}</h4>
                <p class="text-gray-600">{{ t('maps.addressLine') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-taupe mb-1">{{ t('maps.phone') }}</h4>
                <p class="text-gray-600">{{ t('maps.phoneLine') }}</p>
                <p class="text-sm text-teal-600 mt-1">Available 24/7 for emergencies</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-teal-100 to-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-taupe mb-1">{{ t('maps.hours') }}</h4>
                <p class="text-gray-600">
                  {{ t('maps.weekdays') }}: {{ t('maps.weekdayHours') }}<br />
                  {{ t('maps.saturday') }}: {{ t('maps.saturdayHours') }}<br />
                  {{ t('maps.sunday') }}: {{ t('maps.sundayHours') }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-gray-200">
            <button @click="openDirections" class="btn-primary w-full flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {{ t('maps.getDirections') }}
            </button>
          </div>
        </div>

        <!-- Google Maps Embed -->
        <div class="rounded-2xl overflow-hidden shadow-xl h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173524353847!2d-73.98823492346652!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704225600000!5m2!1sen!2sus"
            width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            class="grayscale-0 hover:grayscale-0 transition-all duration-300"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const openDirections = () => {
  window.open('https://www.google.com/maps/dir//123+Dental+Street+Suite+100+New+York+NY+10001', '_blank')
}
</script>
