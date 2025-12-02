<template>
  <div class="server-based-wrapper">
    <section class="server-based-section">
      <div class="server-based-container">
        <!-- Header -->
        <div class="section-header">
          <h2 class="section-title">Server based App</h2>
          <p class="section-subtitle">Recommended for larger organizations</p>
        </div>

        <!-- Spacer -->
        <div class="section-spacer"></div>
      </div>
    </section>

    <!-- Overview Cards -->
    <section class="overview-cards-section">
      <div class="overview-cards-container">
        <div class="overview-cards">
        <!-- Dedicated Server Card -->
        <div class="overview-card">
          <h6 class="card-title" style="color: #050a54;">Dedicated server</h6>
          <p class="card-description">
            Unlimited devices on a dedicated server, maintained and supported by your Webkey team. Recommended to fleet management and device providers. Highly customizable hosting options to match your needs!
          </p>
        </div>

        <!-- On Premise Card -->
        <div class="overview-card">
          <h6 class="card-title" style="color: #b00020;">On premise</h6>
          <p class="card-description">
            Set-up by Webkey, and then supported and maintained by you. Recommended for tech savy organizations looking for any enhanced level of security with maximum independence. One off costs, and unlimited devices
          </p>
        </div>
      </div>
      </div>
    </section>

    <!-- CTA Button -->
    <section class="server-cta-section">
      <div class="server-cta-container">
        <a href="/server" class="btn-server-more">
          <span>Find out more about server based solutions</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.server-based-wrapper {
  position: relative;
}

.server-based-section {
  position: relative;
  padding: 100px 40px 100px;
  min-height: 400px;
  background: #13171a;
  color: #ffffff;
  overflow: visible;
}

.server-based-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/Webkey-Stills-part2-0261-1920x1080.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}

.server-based-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.server-based-container {
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
  font-weight: 500;
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
  font-weight: 400;
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
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  padding: 0;
}

.overview-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
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

.server-cta-section {
  position: relative;
  padding: 0 40px 60px;
  text-align: center;
  margin-top: -40px;
  z-index: 10;
}

.server-cta-container {
  max-width: 1400px;
  margin: 0 auto;
}

.btn-server-more {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #145cff;
  color: #ffffff;
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

.btn-server-more:hover {
  background: #000000;
  transform: translateY(-2px);
}

.btn-server-more i {
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .server-based-section {
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

  .overview-cards-container {
    padding: 0;
  }

  .overview-cards {
    gap: 40px;
    margin-top: -100px;
  }
}

@media (max-width: 768px) {
  .server-based-section {
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

  .overview-cards-container {
    padding: 0;
  }

  .overview-cards {
    grid-template-columns: 1fr;
    gap: 30px;
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

  .server-cta-section {
    padding: 0 20px 40px;
    margin-top: -30px;
  }

  .btn-server-more {
    padding: 10px 24px;
    font-size: 13px;
  }
}
</style>
