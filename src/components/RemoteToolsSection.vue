<template>
  <section class="remote-tools-section">
    <div class="remote-tools-container">
      <div class="remote-tools-content">
        <h1 class="remote-tools-title desktop-only">Remote access tools<br />for all your android devices</h1>
        <h1 class="remote-tools-title mobile-only">Remote access<br />tools</h1>

        <!-- Desktop/Tablet: Accordion -->
        <div class="tools-accordion desktop-only">
          <div
            v-for="(item, index) in tools"
            :key="index"
            class="accordion-item"
            :class="{ active: activeIndex === index }"
          >
            <div class="accordion-header" @click="activeIndex = index">
              <h3 class="accordion-title">{{ item.title }}</h3>
              <i class="accordion-arrow">›</i>
            </div>
            <transition name="accordion">
              <div class="accordion-content" v-if="activeIndex === index">
                <div class="accordion-content-inner">
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile: Carousel -->
        <div class="tools-carousel mobile-only">
          <div
            class="carousel-wrapper"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div
              class="carousel-track"
              :style="{ transform: carouselTransform, transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }"
            >
              <div
                v-for="(item, index) in tools"
                :key="index"
                class="carousel-slide"
              >
                <h6 class="slide-title">{{ item.title }}</h6>
                <div class="slide-image">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <p class="slide-description">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="carousel-dots">
            <button
              v-for="(item, index) in tools"
              :key="index"
              :class="['dot', { active: currentSlide === index }]"
              @click="currentSlide = index"
            ></button>
          </div>
        </div>

        <div class="tools-cta">
          <a href="/features" class="btn-features">Check out all features</a>
        </div>
      </div>

      <div class="remote-tools-image desktop-only">
        <img :src="tools[activeIndex].image" :alt="tools[activeIndex].title" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
const currentSlide = ref(0)
const touchStartX = ref(0)
const isDragging = ref(false)
const dragOffset = ref(0)

const tools = [
  {
    title: 'Screen mirroring',
    description: 'Get real time screen stream of your Android devices on your computer',
    image: '/webkey-realtime-view-1.png'
  },
  {
    title: 'Full remote control for multiple devices',
    description: 'Control your Android device as it would be in your hands, including all touch and key events through your web browser (root access required)',
    image: '/webkey-multiple-devices-1.png'
  },
  {
    title: 'Runs from the browser',
    description: 'Manage your devices centrally from the web Dashboard',
    image: '/webkey-runs-from-the-browser-1.png'
  },
  {
    title: 'Linux terminal access',
    description: 'Run terminal commands and write shell scripts on your device',
    image: '/webkey-remote-terminal-access-1.png'
  },
  {
    title: 'GPS Tracking',
    description: 'Check the location of your devices and follow them on a map with GPS tracking',
    image: '/webkey-gps-feature-2-1.png'
  }
]

const carouselTransform = computed(() => {
  const baseOffset = -currentSlide.value * 100
  if (isDragging.value) {
    return `translateX(calc(${baseOffset}% + ${dragOffset.value}px))`
  }
  return `translateX(${baseOffset}%)`
})

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
  isDragging.value = true
  dragOffset.value = 0
}

const handleTouchMove = (e) => {
  if (!isDragging.value) return

  const currentX = e.touches[0].clientX
  const diff = currentX - touchStartX.value

  // Prevent default if dragging horizontally
  if (Math.abs(diff) > 10) {
    e.preventDefault()
    dragOffset.value = diff
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return

  const threshold = 50

  if (dragOffset.value < -threshold && currentSlide.value < tools.length - 1) {
    currentSlide.value++
  } else if (dragOffset.value > threshold && currentSlide.value > 0) {
    currentSlide.value--
  }

  isDragging.value = false
  dragOffset.value = 0
  touchStartX.value = 0
}

let autoplayInterval = null

onMounted(() => {
  // Auto-advance slides every 8 seconds on mobile
  if (window.innerWidth <= 768) {
    autoplayInterval = setInterval(() => {
      if (!isDragging.value) {
        currentSlide.value = (currentSlide.value + 1) % tools.length
      }
    }, 8000)
  }
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
.remote-tools-section {
  padding: 120px var(--padding-horizontal);
  background: url('/tools-bg.jpg') center center / cover no-repeat;
}

.remote-tools-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.remote-tools-content {
  flex: 1;
  max-width: 600px;
}

.remote-tools-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0;
  margin-bottom: 30px;
  color: #20242e;
}

.tools-accordion {
  margin-bottom: 40px;
}

.accordion-item {
  border-bottom: none;
}

.accordion-item.active {
  border-bottom: 1px solid rgba(32, 36, 46, 0.1);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-header:hover {
  opacity: 0.7;
}

.accordion-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #20242e;
  margin: 0;
  text-transform: none;
}

.accordion-arrow {
  font-size: 24px;
  font-style: normal;
  color: #20242e;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-item.active .accordion-arrow {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
}

.accordion-content-inner {
  padding: 0 0 20px 0;
}

.accordion-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-enter-from {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.accordion-enter-to {
  max-height: 200px;
  opacity: 1;
  transform: translateY(0);
}

.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
  transform: translateY(0);
}

.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.accordion-content p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #20242e;
  margin: 0;
}

.tools-cta {
  margin-top: 40px;
}

.btn-features {
  display: inline-block;
  background: #000000;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-features:hover {
  background: #145cff;
  transform: translateY(-2px);
}

.remote-tools-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.remote-tools-image img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile Carousel */
.tools-carousel {
  margin-bottom: 40px;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
  touch-action: pan-y pinch-zoom;
  user-select: none;
  position: relative;
}

.carousel-track {
  display: flex;
  will-change: transform;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.slide-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #20242e;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
}

.slide-image {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.slide-image img {
  width: 100%;
  max-width: 486px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.slide-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #20242e;
  margin: 0 auto;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(32, 36, 46, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.dot.active {
  background: #20242e;
  transform: scale(1.2);
}

/* Visibility toggles */
.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .remote-tools-section {
    padding: 90px var(--padding-horizontal);
  }

  .remote-tools-container {
    gap: 40px;
  }

  .remote-tools-title {
    font-size: 28px;
  }

  .accordion-title {
    font-size: 15px;
  }

  .accordion-content p {
    font-size: 13px;
    line-height: 22px;
  }
}

@media (max-width: 768px) {
  .remote-tools-section {
    padding: 60px var(--padding-horizontal-mobile);
    background: #f7bfba;
  }

  .remote-tools-container {
    flex-direction: column;
    gap: 30px;
  }

  .remote-tools-content {
    max-width: 100%;
  }

  .remote-tools-title {
    font-size: 22px;
    text-align: center;
  }

  /* Hide accordion and side image on mobile */
  .desktop-only {
    display: none !important;
  }

  /* Show carousel on mobile */
  .mobile-only {
    display: block;
  }

  .accordion-header {
    padding: 16px 0;
  }

  .accordion-title {
    font-size: 14px;
  }

  .accordion-content p {
    font-size: 13px;
    line-height: 22px;
  }

  .btn-features {
    padding: 10px 24px;
    font-size: 13px;
  }

  .tools-cta {
    text-align: center;
  }

  .slide-title {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .slide-image {
    margin-bottom: 15px;
  }

  .slide-description {
    font-size: 13px;
    line-height: 22px;
    padding: 0 20px;
    max-width: 100%;
  }

  .slide-title {
    padding: 0 20px;
  }

  .carousel-slide {
    padding: 0;
  }
}
</style>
