<template>
  <section class="pricing-hero">
    <div class="pricing-hero-container">
      <h1 class="pricing-hero-title">Pricing and Plans</h1>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.pricing-hero {
  padding: 100px 40px 60px;
  background: #ffffff;
  text-align: center;
}

.pricing-hero-container {
  max-width: 1400px;
  margin: 0 auto;
}

.pricing-hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0;
  color: #20242e;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .pricing-hero {
    padding: 80px 40px 50px;
  }

  .pricing-hero-title {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .pricing-hero {
    padding: 70px 20px 40px;
  }

  .pricing-hero-title {
    font-size: 32px;
  }
}
</style>
