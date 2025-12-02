<template>
  <section class="take-control-section">
    <div class="take-control-container">
      <h2 class="section-title">Take control of your android device!</h2>
      <p class="section-subtitle">
        Webkey gives you the control of multiple android devices through a browser based Dashboard.
      </p>
      <div class="section-spacing"></div>
      <p class="section-description">
        We have set up multiple pricing options and plans so we can help you take control regardless if you just need to provide support to your family or control a multitude of devices for your enterprise. In the below section, we would like to provide a quick overview for our pricing plans and features so that you can select the best fit:
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.take-control-section {
  padding: 80px 40px;
  background: #f6f5f6;
}

.take-control-container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #20242e;
  margin: 0 0 30px;
}

.section-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0 auto 40px;
  max-width: 900px;
}

.section-spacing {
  height: 20px;
}

.section-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0 auto;
  max-width: 1200px;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .take-control-section {
    padding: 60px 40px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle,
  .section-description {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 768px) {
  .take-control-section {
    padding: 40px 20px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle,
  .section-description {
    font-size: 14px;
    line-height: 24px;
  }

  .section-description {
    text-align: center;
  }
}
</style>
