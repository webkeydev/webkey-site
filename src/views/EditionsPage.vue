<template>
  <div class="editions-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <h1 class="hero-title">Editions</h1>
        <p class="hero-description">
          Webkey comes in two default editions; one of them is the Standard version which can be downloaded from the Google playstore and the Business edition which is a more customizeable version that is specialized for businesses.
        </p>
        <p class="hero-tagline">
          Essentially they are the same software, that are designed for different audiences.
        </p>
      </div>
    </section>

    <!-- Editions Cards Section -->
    <div class="editions-wrapper">
      <section class="editions-background-section">
        <div class="editions-background-container">
          <div class="section-spacer"></div>
        </div>
      </section>

      <section class="editions-cards-section">
        <div class="editions-cards-container">
          <div class="editions-grid">
            <!-- Standard Edition Card -->
            <div class="edition-card">
              <div class="edition-image-container">
                <img src="/webkey-standard-edition.svg" alt="Standard Edition" class="edition-image">
              </div>
              <h2 class="edition-title">Standard</h2>
              <p class="edition-description">
                This edition of Webkey is available from the play store. All features are available for Android remote control however some features may require a rooted device.
              </p>
              <div class="edition-pricing">
                <span class="price-label">Free for one device</span>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.webkey" target="_blank" class="edition-button">
                Download from Play Store
              </a>
            </div>

            <!-- Business Edition Card -->
            <div class="edition-card edition-card-business">
              <div class="edition-image-container">
                <img src="/webkey-business-edition-1.svg" alt="Business Edition" class="edition-image">
              </div>
              <h2 class="edition-title">Business</h2>
              <p class="edition-description">
                This edition of Webkey is recommended for business purposes; special business features are available like
              </p>
              <ul class="edition-features">
                <li>Headless version</li>
                <li>Fleet ID</li>
                <li>Pre-Installed Webkey client</li>
                <li>Other custom features</li>
              </ul>
              <router-link to="/contact-us" class="edition-button edition-button-business">
                Contact Us
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Definitions Section -->
    <section class="definitions-section">
      <div class="definitions-container">
        <h2 class="definitions-title">Definitions</h2>

        <div class="definition-item">
          <h3 class="definition-term">Rooted Device</h3>
          <p class="definition-text">
            Grants elevated permissions to access the device's background OS
          </p>
        </div>

        <div class="definition-item">
          <h3 class="definition-term">Signed APK</h3>
          <p class="definition-text">
            Developer-certified app versions specialized for manufacturers
          </p>
        </div>

        <div class="definition-item">
          <h3 class="definition-term">Headless Version</h3>
          <p class="definition-text">
            Allows running Webkey without displaying an icon
          </p>
        </div>

        <div class="definition-item">
          <h3 class="definition-term">Fleet ID</h3>
          <p class="definition-text">
            Enables rolling out the app across multiple devices with one account
          </p>
        </div>

        <div class="definition-item">
          <h3 class="definition-term">Pre-Installed Webkey Client</h3>
          <p class="definition-text">
            Default app inclusion for device providers
          </p>
        </div>

        <div class="definition-item">
          <h3 class="definition-term">In-app LAN Purchase</h3>
          <p class="definition-text">
            Local Access Network option for select environments
          </p>
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
.editions-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  padding: 140px var(--padding-horizontal) 80px;
  background: #ffffff;
  text-align: center;
}

.hero-container {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 30px;
  color: #20242e;
}

.hero-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  line-height: 1.8;
  color: #20242e;
  margin: 0 0 20px;
}

.hero-tagline {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 1.8;
  color: #20242e;
  font-style: italic;
  margin: 0;
}

/* Editions Section */
.editions-wrapper {
  position: relative;
}

.editions-background-section {
  position: relative;
  padding: 100px var(--padding-horizontal) 100px;
  min-height: 400px;
  background: #145cff;
  color: #ffffff;
  overflow: visible;
}

.editions-background-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/243A2909-0-1920x1080.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}

.editions-background-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.editions-background-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-spacer {
  height: 0;
}

.editions-cards-section {
  position: relative;
  padding: 0 var(--padding-horizontal) 80px;
  background: transparent;
  z-index: 10;
}

.editions-cards-container {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

.editions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: -120px;
}

.edition-card {
  background: #ffffff;
  padding: 60px 45px;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.edition-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
}

.edition-card-business {
  background: #ffffff;
}

.edition-image-container {
  text-align: center;
  margin-bottom: 20px;
}

.edition-image {
  max-width: 200px;
  height: auto;
  display: inline-block;
}

.edition-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #145cff;
  margin: 0 auto 20px;
  padding-bottom: 20px;
  letter-spacing: 1px;
  text-align: center;
  max-width: 200px;
}

.edition-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 1.8;
  color: #20242e;
  margin: 0 0 20px;
}

.edition-pricing {
  margin: 20px 0;
}

.price-label {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  font-weight: 700;
  color: #145cff;
}

.edition-features {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.edition-features li {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 2;
  color: #20242e;
  padding-left: 20px;
  position: relative;
}

.edition-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #145cff;
  font-weight: 700;
}

.edition-button {
  display: inline-block;
  padding: 16px 32px;
  background: #145cff;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DecimaMonoPro', monospace;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-align: center;
  margin-top: auto;
}

.edition-button:hover {
  background: #000000;
}

.edition-button-business {
  background: transparent;
  color: #145cff;
  border: 2px solid #145cff;
}

.edition-button-business:hover {
  background: #145cff;
  color: #ffffff;
}

/* Definitions Section */
.definitions-section {
  padding: 80px var(--padding-horizontal);
  background: #f8f8f8;
}

.definitions-container {
  max-width: 1000px;
  margin: 0 auto;
}

.definitions-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 42px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 60px;
  text-align: center;
  letter-spacing: 2px;
}

.definition-item {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
}

.definition-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.definition-term {
  font-family: 'DrukWide', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #145cff;
  margin: 0 0 15px;
  letter-spacing: 1px;
}

.definition-text {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 1.8;
  color: #20242e;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-section {
    padding: 120px 40px 60px;
  }

  .hero-title {
    font-size: 40px;
  }

  .editions-background-section {
    padding: 80px var(--padding-horizontal) 80px;
    min-height: 350px;
  }

  .editions-cards-section {
    padding: 0 var(--padding-horizontal) 60px;
  }

  .editions-grid {
    gap: 40px;
    margin-top: -100px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px var(--padding-horizontal-mobile) 50px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-tagline {
    font-size: 14px;
  }

  .editions-background-section {
    padding: 60px var(--padding-horizontal-mobile) 60px;
    min-height: 300px;
  }

  .editions-cards-section {
    padding: 0 var(--padding-horizontal-mobile) 40px;
  }

  .editions-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: -80px;
  }

  .edition-card {
    padding: 55px 35px;
  }

  .edition-title {
    font-size: 28px;
  }

  .definitions-section {
    padding: 60px var(--padding-horizontal-mobile);
  }

  .definitions-title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .definition-term {
    font-size: 20px;
  }

  .definition-item {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }
}
</style>
