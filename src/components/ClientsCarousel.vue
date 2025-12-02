<template>
  <div class="clients-carousel">
    <div class="carousel-track" ref="carouselTrack">
      <div
        v-for="(client, index) in displayClients"
        :key="index"
        class="carousel-item"
      >
        <a
          :href="client.url"
          :target="client.url ? '_blank' : undefined"
          :rel="client.url ? 'noopener noreferrer' : undefined"
          class="client-link"
        >
          <img
            :src="`/partners/${client.logo}`"
            :alt="client.name"
            class="client-logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const clients = [
  { name: 'Activaire', logo: 'activare.jpg', url: 'https://activaire.com/' },
  { name: 'Adload Technologies', logo: 'al-1.jpg', url: 'http://adloadtechnologies.com/' },
  { name: 'Unitech', logo: 'unitech.jpg', url: 'https://www.unitech.com.tw/aboutEng.aspx' },
  { name: 'Digimevo', logo: 'Digi-ewo.jpg', url: 'https://en.digimevo.com/' },
  { name: 'York School Board', logo: 'york-1.jpg', url: 'http://www.yrdsb.ca/Pages/default.aspx' },
  { name: 'Scoops', logo: 'scoops.jpg', url: 'http://www.scoops.com/en' },
  { name: 'Digitronix', logo: 'digitronix.jpg', url: 'https://evaret.nl/' },
  { name: 'Evaret', logo: 'evaret.jpg', url: 'https://evaret.nl/' },
  { name: 'Xibo', logo: 'xibo-2.jpg', url: 'https://xibo.org.uk/' },
  { name: 'CipherLab', logo: 'cipherlab.jpg', url: 'https://www.cipherlab.com/' }
]

// Duplicate clients for infinite scroll effect
const displayClients = computed(() => [...clients, ...clients, ...clients])

const carouselTrack = ref(null)
let animationId = null
let scrollPosition = 0

const animate = () => {
  scrollPosition += 0.5
  if (carouselTrack.value) {
    const itemWidth = 150 // approximate width of each item including gap
    const totalWidth = itemWidth * clients.length

    if (scrollPosition >= totalWidth) {
      scrollPosition = 0
    }

    carouselTrack.value.style.transform = `translateX(-${scrollPosition}px)`
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.clients-carousel {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.carousel-track {
  display: flex;
  gap: 30px;
  will-change: transform;
}

.carousel-item {
  flex-shrink: 0;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-link {
  display: block;
  transition: transform 0.3s ease;
}

.client-link:hover {
  transform: scale(1.1);
}

.client-logo {
  width: 100%;
  height: auto;
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.client-link:hover .client-logo {
  filter: grayscale(0%);
}

@media (max-width: 768px) {
  .carousel-item {
    width: 100px;
  }

  .client-logo {
    max-height: 50px;
  }
}
</style>
