<template>
  <div class="business-page">
    <AppHeader :transparent="true" theme="light" />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-content">
            <h1 class="hero-title">Android Device Management</h1>
            <p class="hero-subtitle">
              Take your business to the next level with Webkey! Connect your android devices over wifi, mobile network, or LAN and control them from a centralized web Dashboard
            </p>
            <div class="hero-actions">
              <router-link to="/contact-us" class="button-primary">Contact Us</router-link>
              <a href="https://dashboard.webkeyapp.com/registration" class="button-secondary">Try for Free</a>
            </div>
          </div>
          <div class="hero-images">
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/07/webkey-business-hero1.png" alt="Webkey Business Device" class="hero-image-left" />
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/07/webkey-business-hero2.png" alt="Webkey Business Dashboard" class="hero-image-right" />
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/07/webkey-business-hero-line-1.png" alt="Webkey Connection Line" class="hero-image-line" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Overview Section -->
    <section class="features-overview-section">
      <div class="container">
        <h2 class="section-title">Comprehensive Device Management</h2>
        <p class="section-intro">
          Remote control capabilities without requiring device rooting for basic functions
        </p>

        <div class="features-grid">
          <div class="feature-tier">
            <h3 class="tier-title">Non-rooted Devices</h3>
            <ul class="tier-features">
              <li>Dashboard monitoring</li>
              <li>GPS tracking</li>
              <li>Screenshots</li>
              <li>Screen recording</li>
              <li>Terminal access</li>
              <li>Package listing via API</li>
            </ul>
          </div>

          <div class="feature-tier">
            <h3 class="tier-title">Rooted Devices</h3>
            <p class="tier-description">All features from non-rooted devices plus:</p>
            <ul class="tier-features">
              <li>Full remote control</li>
              <li>Package installation</li>
              <li>Package removal</li>
              <li>Advanced system access</li>
            </ul>
          </div>

          <div id="business-edition" class="feature-tier highlighted">
            <h3 class="tier-title">Business Edition</h3>
            <p class="tier-description">Recommended for enterprise deployments:</p>
            <ul class="tier-features">
              <li>Pre-installed client</li>
              <li>Headless version</li>
              <li>Configuration via intent</li>
              <li>Automatic reinstall after factory reset</li>
              <li>Custom integration options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="use-cases-section">
      <div class="container">
        <h2 class="section-title">Real-World Use Cases</h2>

        <div class="use-cases-grid">
          <div class="use-case">
            <div class="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 class="use-case-title">POS & Retail</h3>
            <p class="use-case-description">
              Remote management of payment terminals and scales across multiple locations
            </p>
          </div>

          <div class="use-case">
            <div class="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 class="use-case-title">Warehouse & Logistics</h3>
            <p class="use-case-description">
              Device fleet monitoring, GPS tracking, and centralized software updates
            </p>
          </div>

          <div class="use-case">
            <div class="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="use-case-title">IT Management & Entertainment</h3>
            <p class="use-case-description">
              Digital kiosks and set-top box control for streamlined operations
            </p>
          </div>

          <div class="use-case">
            <div class="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 class="use-case-title">Education</h3>
            <p class="use-case-description">
              Tablet management in classroom environments for enhanced learning experiences
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Case Studies Section -->
    <section class="case-studies-section">
      <div class="container">
        <h2 class="section-title">Trusted by Industry Leaders</h2>

        <div class="case-studies-grid">
          <div class="case-study">
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/09/unitech-300x105.png" alt="Unitech" class="case-study-logo" />
            <h3 class="case-study-company">Unitech, Taiwan</h3>
            <p class="case-study-description">Unitech is a Taiwanese barcode scanner manufacturer. For security reasons they were looking for a partner that integrates with their MDM solution. Webkey has provided Unitech with a server based remote access to their devices, that now runs on their local access network.</p>
          </div>

          <div class="case-study">
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/09/activaire-1-300x105.png" alt="Activaire" class="case-study-logo" />
            <h3 class="case-study-company">Activaire, Brooklyn, New York</h3>
            <p class="case-study-description">With speakers all across the US in retail stores, they wanted to save time and energy on maintenance and IT management. Webkey has helped Activaire integrate their own solution for a centrally managed IT maintenance system.</p>
          </div>

          <div class="case-study">
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/09/digimevo-logo-300x105.png" alt="Digimevo" class="case-study-logo" />
            <h3 class="case-study-company">Digimevo, Spain</h3>
            <p class="case-study-description">Digimevo Spain displays educational content in medical facilities across Spain. They found it difficult to maintain all their devices in their fleet. Webkey has helped them to control the management and maintenance of their Android devices centrally.</p>
          </div>

          <div class="case-study">
            <img src="https://www.webkeyapp.com/wp-content/uploads/2019/09/YorkSCHOOLlogo-300x105.png" alt="York School Board" class="case-study-logo" />
            <h3 class="case-study-company">Board of York School, Canada</h3>
            <p class="case-study-description">The board leverages Webkey to centrally control their educational devices (tablets, interactive boards) in K-12 institutes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section id="security" class="security-section">
      <div class="container">
        <h2 class="section-title">Enterprise-Grade Security & Support</h2>

        <div class="security-grid">
          <div class="security-feature">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3>SSL/TLS Encryption</h3>
            <p>All communications are secured with industry-standard encryption</p>
          </div>

          <div class="security-feature">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>PIN-based Pairing</h3>
            <p>Secure device authentication and authorization</p>
          </div>

          <div class="security-feature">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3>Private Server Deployment</h3>
            <p>Optional on-premises installation for maximum data control</p>
          </div>

          <div class="security-feature">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Maintenance Contracts</h3>
            <p>Yearly support agreements with on-site assistance available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-title">Ready to Transform Your Business?</h2>
        <p class="cta-description">
          Start with our free tier for one device, or contact us to discuss enterprise solutions
        </p>
        <div class="cta-actions">
          <router-link to="/contact-us" class="button-primary">Contact Sales</router-link>
          <router-link to="/pricing" class="button-secondary">View Pricing</router-link>
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
.business-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 80px 20px 80px var(--padding-horizontal);
}

.hero-section .container {
  max-width: 1600px;
  margin: 0 auto;
}

.hero-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.hero-content {
  flex: 0 1 45%;
  max-width: 45%;
  text-align: left;
}

.hero-images {
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  position: relative;
  max-width: 450px;
  animation: fadeInRight 1s ease-out 1.2s forwards;
  opacity: 0;
}

.hero-image-left {
  flex: 0.9;
  max-width: 48%;
  height: auto;
  display: block;
  object-fit: contain;
  position: relative;
  z-index: 1;
}

.hero-image-right {
  flex: 1;
  max-width: 50%;
  height: auto;
  display: block;
  object-fit: contain;
  position: relative;
  z-index: 1;
}

.hero-image-line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  height: auto;
  z-index: 2;
  pointer-events: none;
  animation: fadeIn 1.2s ease-out 1.8s forwards;
  opacity: 0;
}

.hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 56px;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1px #20242e;
  text-stroke: 1px #20242e;
  margin: 0 0 30px;
  line-height: 1.2;
  letter-spacing: 2px;
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.hero-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0 0 60px;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.button-primary,
.button-secondary {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
}

.button-primary {
  background: #145cff;
  color: #ffffff;
  border: 2px solid #145cff;
}

.button-primary:hover {
  background: #0d4acc;
  border-color: #0d4acc;
  transform: translateY(-2px);
}

.button-secondary {
  background: transparent;
  color: #145cff;
  border: 2px solid #145cff;
}

.button-secondary:hover {
  background: rgba(20, 92, 255, 0.1);
  transform: translateY(-2px);
}

/* Common Section Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 42px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: center;
}

.section-intro {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  line-height: 32px;
  color: #666666;
  margin: 0 0 60px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Features Overview Section */
.features-overview-section {
  padding: 100px var(--padding-horizontal);
  background: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-tier {
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-tier:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-tier.highlighted {
  background: linear-gradient(135deg, #145cff 0%, #0d4acc 100%);
  color: #ffffff;
}

.tier-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 20px;
  letter-spacing: 1px;
}

.feature-tier.highlighted .tier-title,
.feature-tier.highlighted .tier-description {
  color: #ffffff;
}

.tier-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  margin: 0 0 15px;
  color: #666666;
}

.tier-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tier-features li {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 15px;
  line-height: 28px;
  padding-left: 25px;
  position: relative;
}

.tier-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  font-weight: bold;
}

.feature-tier.highlighted .tier-features li {
  color: #ffffff;
}

/* Use Cases Section */
.use-cases-section {
  padding: 100px var(--padding-horizontal);
  background: #f8f9fa;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.use-case {
  text-align: center;
  padding: 30px 20px;
  background: #ffffff;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.use-case:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.use-case-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  color: #145cff;
}

.use-case-icon svg {
  width: 100%;
  height: 100%;
}

.use-case-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 15px;
  color: #20242e;
  letter-spacing: 0.5px;
}

.use-case-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 15px;
  line-height: 26px;
  color: #666666;
  margin: 0;
}

/* Case Studies Section */
.case-studies-section {
  padding: 100px var(--padding-horizontal);
  background: #ffffff;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.case-study {
  text-align: center;
  padding: 40px 30px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.case-study:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.case-study-logo {
  max-width: 200px;
  height: auto;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  margin-bottom: 20px;
}

.case-study:hover .case-study-logo {
  opacity: 1;
}

.case-study-company {
  font-family: 'DrukWide', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 15px;
  color: #20242e;
  letter-spacing: 0.5px;
  text-align: left;
  width: 100%;
}

.case-study-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #666666;
  margin: 0;
  text-align: left;
}

/* Security Section */
.security-section {
  padding: 100px var(--padding-horizontal);
  background: #ffffff;
  color: #20242e;
}

.security-section .section-title {
  color: #20242e;
  margin-bottom: 60px;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
}

.security-feature {
  text-align: center;
  padding: 40px 30px;
  transition: all 0.3s ease;
}

.security-feature:hover {
  transform: translateY(-5px);
}

.security-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 25px;
  color: #145cff;
}

.security-icon svg {
  width: 100%;
  height: 100%;
}

.security-feature h3 {
  font-family: 'DrukWide', sans-serif;
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 20px;
  color: #20242e;
  letter-spacing: 0.5px;
}

.security-feature p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 15px;
  line-height: 26px;
  color: #666666;
  margin: 0;
}

/* CTA Section */
.cta-section {
  padding: 100px var(--padding-horizontal);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Webkey-Stills-part2-0261-1920x1080.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  text-align: center;
}

.cta-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #ffffff;
}

.cta-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  line-height: 32px;
  margin: 0 0 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}

.cta-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .button-primary {
  background: #145cff;
  color: #ffffff;
  border-color: #145cff;
}

.cta-section .button-primary:hover {
  background: #0d4acc;
  border-color: #0d4acc;
}

.cta-section .button-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.cta-section .button-secondary:hover {
  background: #F7BFBA;
  border-color: #F7BFBA;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-section {
    padding: 80px 20px 60px 40px;
  }

  .hero-wrapper {
    gap: 40px;
  }

  .hero-title {
    font-size: 48px;
    -webkit-text-stroke: 1.5px #20242e;
    text-stroke: 1.5px #20242e;
  }

  .hero-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .section-title {
    font-size: 36px;
  }

  .features-overview-section,
  .use-cases-section,
  .case-studies-section,
  .security-section,
  .cta-section {
    padding: 80px 40px;
  }

  .cta-title {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
    padding: 100px 20px 50px var(--padding-horizontal-mobile);
  }

  .hero-wrapper {
    flex-direction: column;
    gap: 40px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-images {
    gap: 5px;
  }

  .hero-image-left {
    max-width: 48%;
  }

  .hero-image-right {
    max-width: 48%;
  }

  .hero-actions {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .button-primary,
  .button-secondary {
    width: 100%;
    text-align: center;
  }

  .hero-title {
    font-size: 36px;
    -webkit-text-stroke: 1.5px #20242e;
    text-stroke: 1.5px #20242e;
  }

  .hero-subtitle {
    font-size: 16px;
    line-height: 28px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-intro {
    font-size: 16px;
    line-height: 28px;
  }

  .features-overview-section,
  .use-cases-section,
  .case-studies-section,
  .security-section,
  .cta-section {
    padding: 60px var(--padding-horizontal-mobile);
  }

  .features-grid,
  .use-cases-grid,
  .case-studies-grid,
  .security-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .cta-title {
    font-size: 32px;
  }

  .cta-description {
    font-size: 16px;
    line-height: 28px;
  }

  .button-primary,
  .button-secondary {
    padding: 14px 32px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
    -webkit-text-stroke: 1px #20242e;
    text-stroke: 1px #20242e;
  }

  .hero-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .section-title {
    font-size: 28px;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
    gap: 15px;
  }

  .button-primary,
  .button-secondary {
    width: 100%;
    text-align: center;
  }
}
</style>
