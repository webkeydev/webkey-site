<template>
  <div class="client-story">
    <div class="client-logo-wrapper">
      <img
        :src="`/partners/${logo}`"
        :alt="title"
        class="client-logo"
      />
    </div>
    <div class="client-content">
      <h3 class="client-title">{{ title }}</h3>
      <p class="client-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.client-story {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.client-logo-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.client-logo {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0%);
}

.client-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.client-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.client-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #20242e;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .client-logo {
    max-width: 150px;
  }

  .client-title {
    font-size: 0.95rem;
  }

  .client-description {
    font-size: 0.9rem;
  }
}
</style>
