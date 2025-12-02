<template>
  <section class="pricing-tabs-section">
    <div class="pricing-tabs-container">
      <!-- Tab Navigation -->
      <div class="tabs-nav">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-button', { active: activeTab === index }]"
          @click="activeTab = index"
        >
          <i :class="`fa ${tab.icon}`"></i>
          {{ tab.name }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Individual Tab -->
        <div v-show="activeTab === 0" class="tab-panel">
          <p class="tab-intro">
            We offer pricing options that work well for individuals as well as for
            businesses of all sizes. Choose the option that is right for you.
          </p>
          <div class="pricing-cards">
            <!-- Free Plan -->
            <div class="pricing-card">
              <div class="card-top-bar" style="background-color: #ff780d;"></div>
              <div class="card-content">
                <h5 class="plan-name" style="color: #ff780d;">Free</h5>
                <p class="plan-subtitle">For personal use</p>
                <h3 class="plan-price">Free</h3>
                <p class="plan-note" style="opacity: 0; pointer-events: none; margin: 0 0 25px 0;">or save 4 months with annual subscription</p>
                <div class="plan-features">
                  <p>One device<br />
                  Unlimited data traffic<br />
                  All features included<br />
                  <a href="https://play.google.com/store/apps/details?id=com.webkey&hl=en" target="_blank" class="plan-feature-link">Standard edition</a><br />
                  Free forever</p>
                </div>
                <div class="plan-cta">
                  <a href="https://dashboard.webkeyapp.com/registration" class="btn-plan">Try Now</a>
                  <p class="plan-note" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); margin: 0; width: 100%;">No Credit card required</p>
                </div>
              </div>
            </div>

            <!-- Home Plan -->
            <div class="pricing-card">
              <div class="card-top-bar" style="background-color: #050a54;"></div>
              <div class="card-content">
                <h5 class="plan-name" style="color: #050a54;">Home</h5>
                <p class="plan-subtitle">For personal use</p>
                <h3 class="plan-price">€ 5 / mo</h3>
                <p class="plan-note">or <strong>save 4 months</strong> with annual subscription</p>
                <div class="plan-features">
                  <p>Max 5 devices<br />
                  Unlimited data traffic<br />
                  All features included<br />
                  <a href="https://play.google.com/store/apps/details?id=com.webkey&hl=en" target="_blank" class="plan-feature-link">Standard edition</a></p>
                </div>
                <div class="plan-cta">
                  <a href="https://dashboard.webkeyapp.com/registration" class="btn-plan">Subscribe now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Business Tab -->
        <div v-show="activeTab === 1" class="tab-panel">
          <p class="tab-intro">
            Webkey for businesses scales from startups to enterprises. With our tiered
            pricing and flexible plans, we can accommodate organizations of all sizes.
          </p>
          <div class="pricing-cards">
            <!-- Professional Plan -->
            <div class="pricing-card">
              <div class="card-top-bar" style="background-color: #b00020;"></div>
              <div class="card-content">
                <h5 class="plan-name" style="color: #b00020;">Professional</h5>
                <p class="plan-subtitle">For Companies</p>
                <h3 class="plan-price">€ 120 / yr</h3>
                <p class="plan-note plan-note-no-bottom">for 10 devices</p>
                <div class="plan-features">
                  <p class="plan-tiered-pricing">€ 595 / year (50 devices)<br />
                  € 875 / year (100 devices)<br />
                  € 1750 / year (250 devices)<br />
                  € 2450 / year (500 devices)</p>
                  <p class="plan-feature-list">Unlimited data traffic<br />
                  All features included<br />
                  <a href="https://play.google.com/store/apps/details?id=com.webkey&hl=en" target="_blank" class="plan-feature-link">Standard edition</a><br />
                  Priority Support</p>
                </div>
                <a href="https://dashboard.webkeyapp.com/registration" class="btn-plan">Subscribe now</a>
              </div>
            </div>

            <!-- Professional Plus Plan -->
            <div class="pricing-card">
              <div class="card-top-bar" style="background-color: #22a1c7;"></div>
              <div class="card-content">
                <h5 class="plan-name" style="color: #22a1c7;">Professional Plus</h5>
                <p class="plan-subtitle">For Companies</p>
                <h3 class="plan-price">€ 1390 / yr</h3>
                <p class="plan-note plan-note-no-bottom">for 100 devices</p>
                <div class="plan-features">
                  <p class="plan-tiered-pricing">€ 1990 / year (250 devices)<br />
                  € 2990 / year (500 devices)<br />
                  <br />
                  <br /></p>
                  <p class="plan-feature-list">Unlimited data traffic<br />
                  All features included<br />
                  <a href="/business#business-edition" class="plan-feature-link">Business edition</a><br />
                  Priority Support</p>
                </div>
                <a href="/contact-us" class="btn-plan btn-plan-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Server Tab -->
        <div v-show="activeTab === 2" class="tab-panel">
          <p class="tab-intro">
            For larger organizations, we offer server-based solutions with unlimited devices.
            Choose between our managed service or on-premise installation.
          </p>
          <div class="pricing-cards">
            <!-- Dedicated Server Plan -->
            <div class="pricing-card">
              <div class="card-top-bar" style="background-color: #050a54;"></div>
              <div class="card-content">
                <h5 class="plan-name" style="color: #050a54;">Dedicated Server</h5>
                <p class="plan-subtitle">Enhanced security</p>
                <h3 class="plan-price">Please contact us for a quote</h3>
                <div class="plan-features plan-features-extra-space">
                  <p>Server maintenance and support<br />
                  Set-up costs included<br />
                  Features tailored to your needs<br />
                  Unlimited devices</p>
                </div>
                <a href="/contact-us" class="btn-plan">Get in touch now</a>
              </div>
            </div>

            <!-- On-premise Server Plan -->
            <div class="pricing-card">
              <div class="card-top-bar" style="background-color: #b00020;"></div>
              <div class="card-content">
                <h5 class="plan-name" style="color: #b00020;">On-premise server</h5>
                <p class="plan-subtitle">One off Set-up costs</p>
                <h3 class="plan-price">Please contact us for a quote</h3>
                <p class="plan-note-small">Installation costs are not included. Installation cost will be determined on a case-by case basis.</p>
                <div class="plan-features">
                  <p>Unlimited devices<br />
                  Headless Client App<br />
                  LAN Server Builds<br />
                  Pre-installed Webkey Client<br />
                  All security controlled by you</p>
                </div>
                <a href="/contact-us" class="btn-plan">Get in touch now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  { name: 'Individual', icon: 'fa-user' },
  { name: 'Business', icon: 'fa-briefcase' },
  { name: 'Server', icon: 'fa-server' }
]
</script>

<style scoped>
.pricing-tabs-section {
  padding: 80px 40px;
  background: #ffffff;
}

.pricing-tabs-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Tab Navigation */
.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.tab-button {
  background: transparent;
  border: 2px solid #145cff;
  border-left: none;
  padding: 15px 40px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #20242e;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  outline: none;
}

.tab-button:first-child {
  border-left: 2px solid #145cff;
  border-radius: 5px 0 0 5px;
}

.tab-button:last-child {
  border-radius: 0 5px 5px 0;
}

.tab-button i {
  font-size: 18px;
}

.tab-button:hover {
  background: #e6edff;
  color: #145cff;
}

.tab-button.active {
  background: #145cff;
  color: #ffffff;
  border: none;
}

/* Tab Content */
.tab-content {
  min-height: 400px;
}

.tab-panel {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-intro {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 60px;
}

/* Pricing Cards */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 850px;
  margin: 0 auto;
}

.pricing-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-top-bar {
  height: 11px;
  width: 100%;
}

.card-content {
  padding: 40px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 530px;
  position: relative;
}

.plan-name {
  font-family: 'DrukWide', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}

.plan-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  color: #20242e;
  margin-bottom: 20px;
}

.plan-price {
  font-family: 'DrukWide', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #20242e;
  margin: 10px 0 10px;
}

.plan-note {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 12px;
  color: #20242e;
  margin: 0 0 25px 0;
}

.plan-note-no-bottom {
  margin-bottom: 0;
}

.plan-note-small {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 10px;
  color: #666666;
  margin: 5px 0 15px 0;
  line-height: 1.4;
}

.plan-features {
  margin: 0 0 30px 0;
  flex-grow: 1;
}

.plan-features-extra-space {
  margin-top: 70px;
}

.plan-features p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
}

.plan-tiered-pricing {
  margin-bottom: 0;
  font-size: 12px !important;
  line-height: 20px !important;
}

.plan-feature-list {
  margin-top: 20px;
}

.plan-feature-link {
  color: #145cff;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.plan-feature-link:hover {
  color: #0d4acc;
}

.plan-cta {
  margin-top: auto;
}

.btn-plan {
  display: inline-block;
  background: #145cff;
  color: #ffffff;
  padding: 12px 32px;
  border-radius: 5px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.btn-plan:hover {
  background: #000000;
  transform: translateY(-2px);
}

.btn-plan-secondary {
  background: #145cff;
  color: #ffffff;
}

.btn-plan-secondary:hover {
  background: #000000;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .pricing-tabs-section {
    padding: 60px 40px;
  }

  .tabs-nav {
    gap: 15px;
    margin-bottom: 50px;
  }

  .tab-button {
    padding: 12px 30px;
    font-size: 14px;
  }

  .pricing-cards {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .pricing-tabs-section {
    padding: 40px 20px;
  }

  .tabs-nav {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
  }

  .tab-button {
    width: 100%;
    justify-content: center;
    padding: 15px 20px;
    border: 2px solid #145cff;
    border-radius: 5px;
  }

  .tab-button:first-child {
    border-radius: 5px;
  }

  .tab-button:last-child {
    border-radius: 5px;
  }

  .tab-intro {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .card-content {
    padding: 50px 30px;
  }

  .plan-price {
    font-size: 30px;
  }

  .plan-features {
    min-height: auto;
  }
}
</style>
