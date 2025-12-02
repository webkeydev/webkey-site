<template>
  <div class="sign-our-apk-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">Signed Webkey APK</h1>
          <p class="hero-description">
            At Webkey, we are constantly looking for partnerships with android device manufacturers; with a system signed APK, your devices become fully capable of getting the maximum performance of the Webkey Features.
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="container">
        <div class="content-text">
          <p>
            The need for remotely controlling a device fleet has increased significantly recently. As an android device manufacturer, you can now offer your customers the possibility to seamlessly roll out such an application simply by having a system signed APK for Webkey. A minimum effort step from your side, that can give your customers access to a better service, without having to root their devices. Get in touch with us and give yourself the market advantage!
          </p>
        </div>
        <div class="cta-button-wrapper">
          <a
            href="https://blog.xibo.org.uk/using-webkey-with-xibo-for-android-remote-management/"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-button"
          >
            Find out more about the advantages of partnering with Webkey.
          </a>
        </div>
      </div>
    </section>

    <!-- Partners Carousel Section -->
    <section class="partners-section">
      <div class="container">
        <ManufacturersGrid />
      </div>
    </section>

    <!-- Divider -->
    <section class="divider-section">
      <div class="container">
        <div class="divider"></div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ManufacturersGrid from '../components/ManufacturersGrid.vue'
</script>

<style scoped>
.sign-our-apk-page {
  min-height: 100vh;
}

/* Transparent header that becomes black on scroll */
.sign-our-apk-page :deep(#app-header) {
  background: transparent !important;
  transition: background 0.3s ease;
}

.sign-our-apk-page :deep(#app-header.header-scrolled) {
  background: #000000 !important;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/succesfull_connection-fin-1.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px var(--padding-horizontal);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  font-size: 51px !important;
  font-family: 'DrukWide';
  font-weight: 500;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 19px;
  color: white;
  line-height: 1.8;
  max-width: 1000px;
  margin: 0 auto;
}

/* Content Section */
.content-section {
  padding: 60px var(--padding-horizontal);
  background: white;
}

.content-text {
  max-width: 1200px;
  margin: 0 auto 30px;
}

.content-text p {
  font-size: 1rem;
  line-height: 1.7;
  color: #20242e;
  margin: 0;
}

.cta-button-wrapper {
  text-align: center;
  margin-top: 30px;
}

.cta-button {
  display: inline-block;
  padding: 16px 32px;
  background: white;
  color: #145cff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DecimaMonoPro', monospace;
  text-transform: none;
  border-radius: 3px;
  border: 2px solid #145cff;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.cta-button:hover {
  background: #000000;
  color: white;
  border-color: #000000;
}

/* Partners Section */
.partners-section {
  padding: 60px var(--padding-horizontal);
  background: white;
}

/* Divider Section */
.divider-section {
  padding: 40px var(--padding-horizontal);
  background: white;
}

.divider {
  height: 1px;
  background: #e0e0e0;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px !important;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-section {
    min-height: 300px;
    padding: 60px var(--padding-horizontal-mobile);
  }

  .content-text p {
    font-size: 0.95rem;
  }

  .cta-button {
    padding: 14px 24px;
    font-size: 13px;
  }
}
</style>
