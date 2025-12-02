<template>
  <div class="pricing-page">
    <AppHeader />
    <PricingHero />
    <PricingTabs />
    <TakeControlSection />
    <CloudBasedSection />
    <ServerBasedSection />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import PricingHero from '../components/pricing/PricingHero.vue'
import PricingTabs from '../components/pricing/PricingTabs.vue'
import TakeControlSection from '../components/pricing/TakeControlSection.vue'
import CloudBasedSection from '../components/pricing/CloudBasedSection.vue'
import ServerBasedSection from '../components/pricing/ServerBasedSection.vue'
</script>

<style scoped>
.pricing-page {
  min-height: 100vh;
}
</style>
