<template>
  <div class="home-page">
    <AppHeader />
    <HeroSection />
    <RemoteToolsSection />
    <CtaSection />
    <BusinessSection />
    <ServerSolutionsSection />
    <DigitalSignageSection />
    <PartnersSection />
    <SecuritySection />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import RemoteToolsSection from '../components/RemoteToolsSection.vue'
import CtaSection from '../components/CtaSection.vue'
import BusinessSection from '../components/BusinessSection.vue'
import ServerSolutionsSection from '../components/ServerSolutionsSection.vue'
import DigitalSignageSection from '../components/DigitalSignageSection.vue'
import PartnersSection from '../components/PartnersSection.vue'
import SecuritySection from '../components/SecuritySection.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>
