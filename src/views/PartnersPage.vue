<template>
  <div class="partners-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-left">
            <h1 class="hero-title">
              Become a<br>
              Webkey<br>
              partner today!
            </h1>

            <div class="hero-buttons">
            <router-link to="/already-using-webkey" class="hero-button hero-button-left">
              Already working with Webkey
            </router-link>
            <router-link to="/webkey-for-digital-signage" class="hero-button hero-button-center">
              Webkey for Digital signage
            </router-link>
            <router-link to="/sign-our-apk" class="hero-button hero-button-right">
              Signed Webkey APK
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.partners-page {
  min-height: 100vh;
}

/* Transparent header that becomes black on scroll */
.partners-page :deep(#app-header) {
  background: transparent !important;
  transition: background 0.3s ease;
}

.partners-page :deep(#app-header.header-scrolled) {
  background: #000000 !important;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/webkey-team-1920x1113.jpg');
  background-size: cover;
  background-position: center top;
  padding: 100px var(--padding-horizontal);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero-left {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-title {
  font-size: 51px !important;
  font-family: 'DrukWide';
  font-weight: 500;
  color: white;
  margin-bottom: 16rem;
  line-height: 1.2;
  text-align: center;
}

.hero-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.hero-button {
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DecimaMonoPro', monospace;
  border-radius: 3px;
  border: 2px solid white;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
  width: fit-content;
}

.hero-button-left {
  justify-self: start;
}

.hero-button-center {
  justify-self: center;
}

.hero-button-right {
  justify-self: end;
}

.hero-button:hover {
  background: #F7BFBA;
  color: white;
  border-color: #F7BFBA;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-left {
    max-width: 100%;
    align-items: center;
  }

  .hero-title {
    font-size: 36px !important;
    margin-bottom: 12rem;
  }

  .hero-section {
    min-height: 100vh;
    padding: 80px var(--padding-horizontal-mobile);
  }

  .hero-buttons {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }

  .hero-button {
    padding: 14px 24px;
    font-size: 13px;
    text-align: center;
    justify-self: center !important;
  }
}
</style>
