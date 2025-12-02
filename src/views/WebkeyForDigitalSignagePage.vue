<template>
  <div class="webkey-digital-signage-page">
    <AppHeader :transparent="true" />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">Signed Webkey APK</h1>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section">
      <div class="container">
        <div class="value-text">
          <p>If you are working in the Digital Signage industry, Webkey would <a href="mailto:info@webkeyapp.com">love to hear</a> from you.</p>
          <p>We are happy to offer Digital Signage companies a wide variety of solutions with our application:</p>
          <ul>
            <li>We are happy to set-up a partnership agreement with you.</li>
            <li>We can whitelable our app to be incorporated in the Content Management Software that you are offering.</li>
            <li>We would also gladly work together with OEMs <router-link to="/sign-our-apk">to have our app signed</router-link> and then build a working relationship around this.</li>
          </ul>
          <p class="closing-text">Screen mirroring and remote access and control are great features, but if you are working in the Digital Signage industry Webkey is ready to offer you solutions that can help you grow.</p>
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
.webkey-digital-signage-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/webkey-digital-free-bg-medium-scaled-1-1380x1920.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px var(--padding-horizontal) 60px;
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
  max-width: 1000px;
  margin: 0 auto;
}

.hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 56px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 30px;
  line-height: 1.2;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin: 0;
}

/* Value Section */
.value-section {
  padding: 80px var(--padding-horizontal);
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.value-text {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  text-align: left;
}

.value-text p {
  margin: 0 0 10px;
  color: #20242e;
}

.value-text p:last-child {
  margin-bottom: 0;
}

.value-text ul {
  margin: 10px 0;
  padding-left: 30px;
  list-style-type: disc;
}

.value-text li {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin-bottom: 8px;
}

.value-text li:last-child {
  margin-bottom: 0;
}

.value-text a {
  color: #145cff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.value-text a:hover {
  color: #0d4acc;
  text-decoration: underline;
}

.value-text .closing-text {
  font-family: 'DrukWide', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: #20242e;
  margin-top: 30px;
  letter-spacing: 2px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-section {
    padding: 120px 40px 60px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-subtitle {
    font-size: 16px;
    line-height: 28px;
  }

  .value-section {
    padding: 60px 40px;
  }

  .value-text {
    font-size: 16px;
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 400px;
    padding: 100px var(--padding-horizontal-mobile) 50px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .value-section {
    padding: 50px var(--padding-horizontal-mobile);
  }

  .value-text {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
}
</style>
