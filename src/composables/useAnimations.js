import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
      const observers = ref([])

      const observeElement = (element) => {
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

            observer.observe(element)
            observers.value.push(observer)
      }

      const initScrollAnimations = () => {
            const elements = document.querySelectorAll('.animate-on-scroll')
            elements.forEach((el) => observeElement(el))
      }

      onMounted(() => {
            setTimeout(initScrollAnimations, 100)
      })

      onUnmounted(() => {
            observers.value.forEach((observer) => observer.disconnect())
      })

      return { initScrollAnimations }
}

export function useCountUp(target, duration = 2000) {
      const count = ref(0)
      const isVisible = ref(false)

      const animateCount = () => {
            if (isVisible.value) return

            isVisible.value = true
            const startTime = Date.now()
            const endValue = typeof target === 'string' ? parseInt(target.replace(/[^0-9]/g, '')) : target

            const updateCount = () => {
                  const now = Date.now()
                  const progress = Math.min((now - startTime) / duration, 1)

                  // Easing function for smooth animation
                  const easeOutQuad = (t) => t * (2 - t)
                  const currentCount = Math.floor(easeOutQuad(progress) * endValue)

                  count.value = currentCount

                  if (progress < 1) {
                        requestAnimationFrame(updateCount)
                  } else {
                        count.value = endValue
                  }
            }

            requestAnimationFrame(updateCount)
      }

      const observeCounter = (element) => {
            const observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting && !isVisible.value) {
                                    animateCount()
                              }
                        })
                  },
                  { threshold: 0.5 }
            )

            observer.observe(element)
      }

      return { count, observeCounter, isVisible }
}
