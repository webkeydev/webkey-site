<template>
  <div class="features-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="features-hero-section">
      <div class="features-hero-container">
        <h1 class="features-hero-title">Features</h1>
        <p class="features-hero-description">
          All Webkey packages include the full feature set of cloud service without limitations, however some capabilities require root access to your Android device or a Webkey APK integration.
        </p>
        <p class="features-hero-note">
          The LAN access is not part of the cloud service. This feature is purchasable in the application.
        </p>
      </div>
    </section>

    <!-- Features Comparison Table Section -->
    <section class="features-table-section">
      <div class="features-table-container">
        <FeaturesComparisonTable />
        <div class="table-cta">
          <a href="https://dashboard.webkeyapp.com/dashboard/registration" class="btn-try-free">
            Try Free
          </a>
        </div>
      </div>
    </section>

    <!-- Features Accordion Section -->
    <section class="features-accordion-section">
      <div class="features-accordion-container">
        <h2 class="section-title">Take control of your android device!</h2>
        <p class="section-subtitle">Webkey gives you the control of multiple android devices through a browser based Dashboard.</p>
        <FeaturesAccordion />
      </div>
    </section>

    <!-- Cloud Based App Section (reused from Pricing) -->
    <CloudBasedSection />

    <!-- Server Based App Section (reused from Pricing) -->
    <ServerBasedSection />

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import FeaturesComparisonTable from '../components/features/FeaturesComparisonTable.vue'
import FeaturesAccordion from '../components/features/FeaturesAccordion.vue'
import CloudBasedSection from '../components/pricing/CloudBasedSection.vue'
import ServerBasedSection from '../components/pricing/ServerBasedSection.vue'
</script>

<style scoped>
.features-page {
  min-height: 100vh;
}

/* Hero Section */
.features-hero-section {
  padding: 140px var(--padding-horizontal) 40px;
  background: #f6f5f6;
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.features-hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 30px;
  color: #20242e;
}

.features-hero-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0 0 20px;
}

.features-hero-note {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #20242e;
  margin: 0;
}

/* Features Table Section */
.features-table-section {
  padding: 40px var(--padding-horizontal) 80px;
  background: #f6f5f6;
}

.features-table-container {
  max-width: 1400px;
  margin: 0 auto;
}

.table-cta {
  text-align: center;
  margin-top: 50px;
}

.btn-try-free {
  display: inline-block;
  background: #145cff;
  color: #ffffff;
  padding: 16px 40px;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-try-free:hover {
  background: #000000;
  transform: translateY(-2px);
}

/* Features Accordion Section */
.features-accordion-section {
  padding: 80px var(--padding-horizontal);
  background: #ffffff;
}

.features-accordion-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 30px;
  font-weight: 500;
  color: #20242e;
  text-align: center;
  margin: 0 0 20px;
  letter-spacing: 1px;
  line-height: 1.3;
}

.section-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  text-align: center;
  margin: 0 0 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .features-hero-section {
    padding: 120px 40px 30px;
  }

  .features-hero-title {
    font-size: 40px;
  }

  .features-hero-description {
    font-size: 15px;
    line-height: 26px;
  }

  .features-table-section {
    padding: 30px 40px 60px;
  }

  .table-cta {
    margin-top: 40px;
  }

  .features-accordion-section {
    padding: 60px 40px;
  }

  .section-title {
    font-size: 32px;
    margin-bottom: 50px;
  }
}

@media (max-width: 768px) {
  .features-hero-section {
    padding: 100px var(--padding-horizontal-mobile) 30px;
    min-height: 300px;
  }

  .features-hero-title {
    font-size: 32px;
  }

  .features-hero-description {
    font-size: 14px;
    line-height: 24px;
  }

  .features-hero-note {
    font-size: 13px;
    line-height: 22px;
  }

  .btn-try-free {
    padding: 14px 32px;
    font-size: 13px;
  }

  .features-table-section {
    padding: 20px var(--padding-horizontal-mobile) 40px;
  }

  .table-cta {
    margin-top: 30px;
  }

  .features-accordion-section {
    padding: 40px var(--padding-horizontal-mobile);
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .features-hero-title {
    font-size: 28px;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>
