<template>
  <div class="cloud-based-wrapper">
    <section class="cloud-based-section">
      <div class="cloud-based-container">
        <!-- Header -->
        <div class="section-header">
          <h2 class="section-title">Cloud based App</h2>
          <p class="section-subtitle">From personal use to Enterprise</p>
        </div>

        <!-- Spacer -->
        <div class="section-spacer"></div>
      </div>
    </section>

    <!-- Overview Cards -->
    <section class="overview-cards-section">
      <div class="overview-cards-container">
        <div class="overview-cards">
        <!-- Free Card -->
        <div class="overview-card">
          <h6 class="card-title" style="color: #ff780d;">Free</h6>
          <p class="card-description">
            One device for all features. Want to give Webkey a try and see all features in action? Sign up for free and see it for yourself! Free, and always will be. We welcome all feedback and questions. Cloud based service, secure and user friendly.
          </p>
        </div>

        <!-- Home Card -->
        <div class="overview-card">
          <h6 class="card-title" style="color: #050a54;">Home</h6>
          <p class="card-description">
            5 devices control via a cloud hosted app. Ideal for micro businesses as well as for friends and family, who may rely on you for technical support with their android devices. All features are available in the pricing plan, however it may require a rooted device.
          </p>
        </div>

        <!-- Professional Card -->
        <div class="overview-card">
          <h6 class="card-title" style="color: #b00020;">Professional</h6>
          <p class="card-description">
            From 10 devices upwards – recommended for all sizes of businesses. All features are available from the standard version of the app and the pricing based on the number of devices so you only pay for what you use. This plan comes with priority support to give you control over your business.
          </p>
        </div>

        <!-- Professional Plus Card -->
        <div class="overview-card">
          <h6 class="card-title" style="color: #22a1c7;">Professional plus</h6>
          <p class="card-description">
            This plan gives you the highly customizable business edition of the Android app. All features plus possibility for a headless client app, fleet ID and many more. Priority support at all times. We are happy to help your business grow.
          </p>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.cloud-based-wrapper {
  position: relative;
}

.cloud-based-section {
  position: relative;
  padding: 100px 40px 100px;
  min-height: 400px;
  background: #145cff;
  color: #ffffff;
  overflow: visible;
}

.cloud-based-section::before {
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

.cloud-based-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.cloud-based-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #ffffff;
  margin: 0 0 20px;
}

.section-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  margin: 0;
}

.section-spacer {
  height: 0;
}

.overview-cards-section {
  position: relative;
  padding: 0 40px 80px;
  background: transparent;
  z-index: 10;
}

.overview-cards-container {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

.overview-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: -120px;
}

.overview-card {
  background: #ffffff;
  padding: 60px 45px;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
}

.card-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 20px;
  letter-spacing: 1px;
}

.card-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 26px;
  color: #20242e;
  margin: 0;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cloud-based-section {
    padding: 80px 40px 80px;
    min-height: 350px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .section-spacer {
    height: 0;
  }

  .overview-cards-section {
    padding: 0 40px 60px;
  }

  .overview-cards {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -100px;
  }
}

@media (max-width: 768px) {
  .cloud-based-section {
    padding: 60px 20px 60px;
    min-height: 300px;
  }

  .section-title {
    font-size: 22px;
  }

  .section-subtitle {
    font-size: 14px;
    line-height: 24px;
  }

  .section-spacer {
    height: 0;
  }

  .overview-cards-section {
    padding: 0 20px 40px;
  }

  .overview-cards {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: -80px;
  }

  .overview-card {
    padding: 55px 35px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-description {
    font-size: 15px;
    line-height: 24px;
  }
}
</style>
