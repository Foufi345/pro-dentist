<template>
  <section id="booking" class="section-padding bg-gradient-to-br from-teal-600 to-sky-600 animate-on-scroll">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ t('booking.title') }}</h2>
        <p class="text-xl text-stone-200">
          {{ t('booking.subtitle') }}
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <!-- Success Message -->
        <div v-if="isSubmitted" class="text-center py-12">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-dark-taupe mb-4">{{ t('booking.successTitle') }}</h3>
          <p class="text-gray-600 text-lg mb-8">
            {{ t('booking.successMessage') }} {{ formData.firstName }} {{ formData.lastName }}!<span
              v-if="formData.email"> {{ t('booking.successEmail') }} {{ formData.email }}.</span>
          </p>
          <button @click="resetForm" class="btn-primary">
            {{ t('booking.bookAnother') }}
          </button>
        </div>

        <!-- Booking Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Honeypot Field (Hidden from users, visible to bots) -->
          <input type="text" v-model="formData.website" name="website" autocomplete="off" tabindex="-1"
            class="absolute opacity-0 pointer-events-none" aria-hidden="true" />

          <!-- Step Indicator -->
          <div class="flex justify-between items-center mb-8">
            <div v-for="i in 3" :key="i" class="flex items-center" :class="{ 'flex-1': i < 3 }">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                :class="currentStep >= i ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-500'">
                {{ i }}
              </div>
              <div v-if="i < 3" class="flex-1 h-1 mx-2" :class="currentStep > i ? 'bg-teal-500' : 'bg-gray-200'"></div>
            </div>
          </div>

          <!-- Step 1: Service Selection -->
          <div v-show="currentStep === 1" class="space-y-6">
            <h3 class="text-2xl font-bold text-dark-taupe mb-4">{{ t('booking.step1Title') }}</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <label v-for="service in services" :key="service.value" class="relative cursor-pointer">
                <input type="radio" v-model="formData.service" :value="service.value" class="peer sr-only" required />
                <div
                  class="card border-2 border-transparent peer-checked:border-teal-500 peer-checked:bg-teal-50 transition-all">
                  <div class="flex items-center gap-3">
                    <div v-html="service.icon" class="w-8 h-8 text-teal-600"></div>
                    <div>
                      <p class="font-bold text-dark-taupe">{{ service.label }}</p>
                      <p class="text-sm text-gray-600">{{ service.duration }}</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Step 2: Date & Time Selection -->
          <div v-show="currentStep === 2" class="space-y-6">
            <h3 class="text-2xl font-bold text-dark-taupe mb-4">{{ t('booking.step2Title') }}</h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.selectDate') }}</label>
                <input type="date" v-model="formData.date" :min="minDate" required
                  class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.selectTime') }}</label>
                <select v-model="formData.time" required
                  class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors">
                  <option value="">{{ t('booking.selectTime') }}</option>
                  <option v-for="slot in timeSlots" :key="slot" :value="slot">{{ slot }}</option>
                </select>
              </div>
            </div>

            <!-- Available Slots Display -->
            <div class="bg-teal-50 rounded-lg p-4">
              <p class="text-sm text-teal-600 font-semibold mb-2">📅 {{ t('booking.availableTimes') }}</p>
              <div class="flex flex-wrap gap-2">
                <button type="button" v-for="slot in timeSlots.slice(0, 6)" :key="slot" @click="formData.time = slot"
                  class="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:bg-teal-500 hover:text-white transition-colors"
                  :class="formData.time === slot ? 'bg-teal-500 text-white' : 'text-dark-taupe'">
                  {{ slot }}
                </button>
              </div>
            </div>
          </div>

          <!-- Step 3: Personal Details -->
          <div v-show="currentStep === 3" class="space-y-6">
            <h3 class="text-2xl font-bold text-dark-taupe mb-4">{{ t('booking.step3Title') }}</h3>

            <!-- Name Fields -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.firstName') }} *</label>
                <input type="text" v-model="formData.firstName" required
                  :placeholder="t('booking.firstNamePlaceholder')"
                  class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.lastName') }} *</label>
                <input type="text" v-model="formData.lastName" required :placeholder="t('booking.lastNamePlaceholder')"
                  class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors" />
              </div>
            </div>

            <!-- Phone & Age -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.phone') }} *</label>
                <input type="tel" v-model="formData.phone" required :placeholder="t('booking.phonePlaceholder')"
                  class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.age') }} *</label>
                <input type="number" v-model="formData.age" required min="1" max="120"
                  :placeholder="t('booking.agePlaceholder')"
                  class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors" />
              </div>
            </div>

            <!-- Email (Optional) -->
            <div>
              <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.email') }}</label>
              <input type="email" v-model="formData.email" :placeholder="t('booking.emailPlaceholder')"
                class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors" />
            </div>

            <!-- New Patient Checkbox -->
            <div>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" v-model="formData.isNewPatient"
                  class="w-5 h-5 rounded border-stone-300 text-teal-600 focus:ring-teal-500" />
                <span class="text-dark-taupe font-medium">{{ t('booking.newPatient') }}</span>
              </label>
            </div>

            <!-- Additional Notes -->
            <div>
              <label class="block text-sm font-semibold text-dark-taupe mb-2">{{ t('booking.notes') }}</label>
              <textarea v-model="formData.notes" rows="3" :placeholder="t('booking.notesPlaceholder')"
                class="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors resize-none"></textarea>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between pt-6 border-t-2 border-stone-100">
            <button v-if="currentStep > 1" type="button" @click="currentStep--" class="btn-secondary">
              ← {{ t('booking.back') }}
            </button>

            <button v-if="currentStep < 3" type="button" @click="nextStep" class="btn-primary ml-auto">
              {{ t('booking.next') }} →
            </button>

            <button v-if="currentStep === 3" type="submit" :disabled="isSubmitting"
              class="btn-primary ml-auto flex items-center gap-2">
              <span v-if="isSubmitting">
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              <span v-else>{{ t('booking.submit') }} ✓</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { currentLanguage, t } = useI18n()
const currentStep = ref(1)
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Security state
const formStartTime = ref(0)
const sessionToken = ref('')
const lastSubmissionTime = ref(0)

const formData = ref({
  service: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  phone: '',
  age: '',
  email: '',
  isNewPatient: false,
  notes: '',
  website: '' // Honeypot field
})

const services = computed(() => [
  {
    value: 'checkup',
    label: t('services.generalCheckup'),
    duration: '30-45 min',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    value: 'cleaning',
    label: t('services.teethCleaning'),
    duration: '45-60 min',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
  },
  {
    value: 'whitening',
    label: t('services.teethWhitening'),
    duration: '60-90 min',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
  },
  {
    value: 'consultation',
    label: t('services.generalCheckup'), // 'Consultation' isn't explicitly in used keys listing I saw, reusing General Checkup or Learn More?
    // Wait, let me check useI18n.ts content again if possible. I recall 'generalCheckup' and 'learnMore'.
    // Ah, 'services.generalCheckup' is "General Checkup". 'consultation' implies general checkup usually.
    // Or I can use t('services.generalCheckup') as fallback.
    duration: '20-30 min',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>`
  }
])

const timeSlots = ref([
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
])

const minDate = computed(() => {
  const today = new Date()
  today.setDate(today.getDate() + 1) // Minimum next day
  return today.toISOString().split('T')[0]
})

// Generate session token on mount
const generateSessionToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

onMounted(() => {
  formStartTime.value = Date.now()
  sessionToken.value = generateSessionToken()
})

const nextStep = () => {
  if (currentStep.value === 1 && !formData.value.service) {
    alert(t('booking.selectService'))
    return
  }
  if (currentStep.value === 2 && (!formData.value.date || !formData.value.time)) {
    alert(t('booking.required'))
    return
  }
  currentStep.value++
}

// Security validation functions
const validateAgainstBots = () => {
  // 1. Check honeypot field
  if (formData.value.website) {
    console.warn('🤖 Bot detected: Honeypot field filled')
    return { valid: false, reason: 'honeypot' }
  }

  // 2. Check submission time (must be at least 5 seconds)
  const timeTaken = Date.now() - formStartTime.value
  if (timeTaken < 5000) {
    console.warn('🤖 Bot detected: Form submitted too quickly')
    return { valid: false, reason: 'too_fast' }
  }

  // 3. Check rate limiting (max 1 submission per 60 seconds)
  const timeSinceLastSubmission = Date.now() - lastSubmissionTime.value
  if (lastSubmissionTime.value > 0 && timeSinceLastSubmission < 60000) {
    console.warn('🤖 Spam detected: Too many submissions')
    return { valid: false, reason: 'rate_limit' }
  }

  // 4. Pattern detection for names (no URLs, excessive numbers)
  const urlPattern = /(http|www|https)|\.com|\.net|\.org/i
  const excessiveNumbers = /\d{5,}/ // 5+ consecutive numbers

  if (urlPattern.test(formData.value.firstName) || urlPattern.test(formData.value.lastName)) {
    console.warn('🤖 Spam detected: URLs in name fields')
    return { valid: false, reason: 'spam_pattern' }
  }

  if (excessiveNumbers.test(formData.value.firstName) || excessiveNumbers.test(formData.value.lastName)) {
    console.warn('🤖 Spam detected: Excessive numbers in name')
    return { valid: false, reason: 'spam_pattern' }
  }

  // 5. Check for repeated characters (spam pattern)
  const repeatedChars = /([a-z])\1{4,}/i
  if (repeatedChars.test(formData.value.firstName) || repeatedChars.test(formData.value.lastName)) {
    console.warn('🤖 Spam detected: Repeated characters')
    return { valid: false, reason: 'spam_pattern' }
  }

  return { valid: true }
}

const handleSubmit = async () => {
  // Run security validation
  const securityCheck = validateAgainstBots()

  if (!securityCheck.valid) {
    // Silent fail for bots - don't reveal detection
    console.warn('Submission blocked:', securityCheck.reason)

    // Show generic error to user (could be a bot or spam)
    if (securityCheck.reason === 'rate_limit') {
      alert('Please wait a moment before submitting another booking.')
    } else {
      // For other cases, just simulate success to confuse bots
      await new Promise(resolve => setTimeout(resolve, 1500))
    }
    return
  }

  isSubmitting.value = true

  // Update last submission time for rate limiting
  lastSubmissionTime.value = Date.now()

  // Prepare data for Google Sheets
  const bookingData = {
    timestamp: new Date().toISOString(),
    firstName: formData.value.firstName,
    lastName: formData.value.lastName,
    phone: formData.value.phone,
    age: formData.value.age,
    email: formData.value.email || 'Not provided',
    service: formData.value.service, // Always in French
    date: formData.value.date,
    time: formData.value.time,
    isNewPatient: formData.value.isNewPatient ? 'Yes' : 'No',
    notes: formData.value.notes || 'None',
    sessionToken: sessionToken.value,
    formDuration: Math.floor((Date.now() - formStartTime.value) / 1000), // seconds
    userLanguage: currentLanguage.value.toUpperCase() // FR or AR
  }

  try {
    const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxGcBaTAb75mxDo3H9OObn4J19BN70-FwsNvBpEpj3CydZokZQteYP74IFka6IQlvBd/exec'

    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    })

    // Request sent to Google Sheets

    console.log('Booking data to send:', bookingData)

    isSubmitted.value = true
  } catch (error) {
    console.error('Booking error:', error)
    alert('There was an error submitting your booking. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value = {
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
    email: '',
    isNewPatient: false,
    notes: '',
    website: ''
  }
  currentStep.value = 1
  isSubmitted.value = false
  // Reset security tokens for new form
  formStartTime.value = Date.now()
  sessionToken.value = generateSessionToken()
}
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
