<template>
  <section class="partners-section">
    <div class="partners-container">
      <h2 class="partners-title">Already working with Webkey:</h2>
      <div class="partners-carousel">
        <div class="partners-track">
          <a v-for="partner in partners" :key="partner.name" :href="partner.url" target="_blank" class="partner-logo">
            <img :src="partner.logo" :alt="partner.name" />
          </a>
          <!-- Duplicate for seamless loop -->
          <a v-for="partner in partners" :key="partner.name + '-duplicate'" :href="partner.url" target="_blank" class="partner-logo">
            <img :src="partner.logo" :alt="partner.name" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const partnersTrack = ref(null)

const partners = [
  { name: 'Activaire', logo: '/partners/activare.jpg', url: 'https://activaire.com/' },
  { name: 'Adload Technologies', logo: '/partners/al-1.jpg', url: 'http://adloadtechnologies.com/' },
  { name: 'Unitech', logo: '/partners/unitech.jpg', url: 'https://www.unitech.com.tw/aboutEng.aspx' },
  { name: 'Digimevo', logo: '/partners/Digi-ewo.jpg', url: 'https://en.digimevo.com/' },
  { name: 'York Region District School Board', logo: '/partners/york-1.jpg', url: 'http://www.yrdsb.ca/Pages/default.aspx' },
  { name: 'Scoops', logo: '/partners/scoops.jpg', url: 'http://www.scoops.com/en' },
  { name: 'Digitronix', logo: '/partners/digitronix.jpg', url: 'https://evaret.nl/' },
  { name: 'Evaret', logo: '/partners/evaret.jpg', url: 'https://evaret.nl/' },
  { name: 'Xibo', logo: '/partners/xibo-2.jpg', url: 'https://xibo.org.uk/' },
  { name: 'CipherLab', logo: '/partners/cipherlab.jpg', url: 'https://www.cipherlab.com/' }
]
</script>

<style scoped>
.partners-section {
  background: #ffffff;
  padding: 80px var(--padding-horizontal);
}

.partners-container {
  max-width: 1400px;
  margin: 0 auto;
}

.partners-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: #20242e;
  margin-bottom: 60px;
  text-align: left;
  letter-spacing: 1px;
}

.partners-carousel {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.partners-track {
  display: flex;
  gap: 80px;
  align-items: center;
  animation: scroll-left 30s linear infinite;
  width: fit-content;
}

.partners-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  filter: grayscale(100%);
  opacity: 0.6;
}

.partner-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

.partner-logo img {
  max-height: 50px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .partners-section {
    padding: 60px var(--padding-horizontal);
  }

  .partners-title {
    font-size: 24px;
    margin-bottom: 50px;
  }

  .partners-track {
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 40px var(--padding-horizontal-mobile);
  }

  .partners-title {
    font-size: 20px;
    margin-bottom: 40px;
  }

  .partners-track {
    gap: 50px;
    animation: scroll-left 25s linear infinite;
  }

  .partner-logo img {
    max-height: 40px;
    max-width: 100px;
  }
}
</style>
