<template>
  <div class="language-switcher">
    <button @click="toggleDropdown" class="lang-button" :class="{ 'active': isOpen }" aria-label="Change language">
      <span class="flag">{{ currentLang.flag }}</span>
      <span class="lang-code">{{ currentLang.code.toUpperCase() }}</span>
      <svg class="chevron" :class="{ 'rotate': isOpen }" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="dropdown">
        <button v-for="lang in availableLanguages" :key="lang.code" @click="selectLanguage(lang.code)"
          class="dropdown-item" :class="{ 'active': currentLanguage === lang.code }">
          <span class="flag">{{ lang.flag }}</span>
          <span class="lang-name">{{ lang.name }}</span>
          <svg v-if="currentLanguage === lang.code" class="check-icon" width="16" height="16" viewBox="0 0 16 16"
            fill="none">
            <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { currentLanguage, currentLang, availableLanguages, setLanguage } = useI18n()
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (lang: string): void => {
  setLanguage(lang)
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent): void => {
  const element = (event.target as HTMLElement).closest('.language-switcher')
  if (!element) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  z-index: 1000;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.lang-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.lang-button.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.flag {
  font-size: 1.25rem;
  line-height: 1;
}

.lang-code {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.chevron {
  transition: transform 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
}

.chevron.rotate {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: white;
  border: none;
  color: #334155;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
  color: white;
}

.dropdown-item.active {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  color: #0d9488;
}

.dropdown-item.active:hover {
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
  color: white;
}

.lang-name {
  flex: 1;
  text-align: left;
  font-size: 0.9375rem;
}

.check-icon {
  color: #14b8a6;
}

.dropdown-item:hover .check-icon {
  color: white;
}

/* RTL Support */
[dir="rtl"] .lang-name {
  text-align: right;
}

[dir="rtl"] .dropdown {
  right: auto;
  left: 0;
}

/* Dropdown Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top right;
}

.dropdown-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

[dir="rtl"] .dropdown-enter-active,
[dir="rtl"] .dropdown-leave-active {
  transform-origin: top left;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .lang-button {
    padding: 0.4rem 0.6rem;
  }

  .lang-code {
    display: none;
  }

  .flag {
    font-size: 1.5rem;
  }

  .dropdown {
    min-width: 140px;
  }
}
</style>
