<template>
  <div class="manufacturers-grid">
    <div
      v-for="(manufacturer, index) in manufacturers"
      :key="index"
      class="manufacturer-item"
    >
      <a
        :href="manufacturer.url"
        :target="manufacturer.url ? '_blank' : undefined"
        :rel="manufacturer.url ? 'noopener noreferrer' : undefined"
        class="manufacturer-link"
      >
        <img
          :src="`/partners/${manufacturer.logo}`"
          :alt="manufacturer.name"
          class="manufacturer-logo"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const manufacturers = [
  {
    name: 'Qbic Technology',
    logo: '1683d6_93a84ceb1eed43a095d89d333ad4c1b4.png',
    url: 'https://www.qbictechnology.com/'
  },
  {
    name: 'Xibo',
    logo: 'xibo-2.jpg',
    url: 'https://xibo.org.uk/'
  },
  {
    name: 'Topicon',
    logo: '2e9c3d5613.png',
    url: 'https://www.topicon.hk/'
  },
  {
    name: 'Minix',
    logo: 'minix.png',
    url: 'https://minix.com.hk/'
  }
]
</script>

<style scoped>
.manufacturers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.manufacturer-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.manufacturer-link {
  display: block;
  transition: transform 0.3s ease;
}

.manufacturer-link:hover {
  transform: scale(1.05);
}

.manufacturer-logo {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.manufacturer-link:hover .manufacturer-logo {
  filter: grayscale(0%);
}

/* Responsive */
@media (max-width: 1024px) {
  .manufacturers-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 640px) {
  .manufacturers-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .manufacturer-logo {
    max-width: 150px;
  }
}
</style>
