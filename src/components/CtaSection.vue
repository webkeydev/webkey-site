<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-title-column">
        <h2 class="cta-title">Are you ready<br />to take control?</h2>
      </div>
      <div class="cta-button-column">
        <a href="https://dashboard.webkeyapp.com/registration" class="btn-cta">Request for demo</a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-section {
  padding: 120px var(--padding-horizontal);
  background: linear-gradient(90deg, #332532 0%, #222630 100%);
  text-align: center;
}

.cta-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  align-items: center;
}

.cta-title-column {
  flex: 1;
  text-align: center;
}

.cta-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 2px;
  margin: 0;
  color: #ffffff;
}

.cta-button-column {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-cta {
  display: inline-block;
  background: #ffffff;
  color: #20242e;
  padding: 12px 28px;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  background: #f7bfba;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cta-section {
    padding: 90px var(--padding-horizontal);
  }

  .cta-title {
    font-size: 34px;
  }

  .btn-cta {
    padding: 14px 36px;
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 70px var(--padding-horizontal-mobile);
  }

  .cta-container {
    flex-direction: column;
    gap: 30px;
  }

  .cta-title {
    font-size: 28px;
  }

  .btn-cta {
    padding: 12px 32px;
    font-size: 14px;
  }
}
</style>
