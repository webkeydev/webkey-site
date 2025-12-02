<template>
  <div class="server-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="server-hero-section">
      <div class="server-hero-container animate-on-scroll" ref="heroContainer">
        <h1 class="server-hero-title">Server Based Webkey Solutions<br><span class="smaller">for your business</span></h1>
        <p class="server-hero-description">
          We at Webkey understand every business decision is influenced based on a multitude of factors. We have developed our application to be customizable to help your business grow and flourish; this is also the reason we offer you Webkey as a server based software solution. With this solution we offer you the possibility to run Webkey on your devices from a locally hosted server on a local access network. Enjoy all Webkey features with a higher level of security, more control on downtimes and a tailored financial set-up
        </p>
        <div class="hero-cta">
          <a href="/contact-us" class="btn-hero-contact">Contact us</a>
        </div>
      </div>
    </section>

    <!-- Core Advantages Section -->
    <section class="advantages-section">
      <div class="advantages-container">
        <h2 class="section-title animate-on-scroll" ref="advantagesTitle">Advantages of the server based application</h2>
        <div class="advantages-grid">
          <div class="advantage-card animate-on-scroll" ref="advantage1" style="--delay: 0.1s">
            <div class="advantage-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3 class="advantage-title">Security</h3>
            <p class="advantage-description">
              with the server based application your data will be stored on a dedicated server or even on your own LAN network
            </p>
          </div>

          <div class="advantage-card animate-on-scroll" ref="advantage2" style="--delay: 0.2s">
            <div class="advantage-icon">
              <i class="fa-solid fa-hand-fist"></i>
            </div>
            <h3 class="advantage-title">Independence</h3>
            <p class="advantage-description">
              Optionally, we will help you with the set-up, but the support can be run by your own teams. You will be in control of any maintenance down-times
            </p>
          </div>

          <div class="advantage-card animate-on-scroll" ref="advantage3" style="--delay: 0.3s">
            <div class="advantage-icon">
              <i class="fa-solid fa-infinity"></i>
            </div>
            <h3 class="advantage-title">Unlimited</h3>
            <p class="advantage-description">
              Unlimited devices can be added with no extra costs or any other limitations. You can integrate Webkey as part of your future solution at your own pace.
            </p>
          </div>

          <div class="advantage-card animate-on-scroll" ref="advantage4" style="--delay: 0.4s">
            <div class="advantage-icon">
              <i class="fa-solid fa-dollar-sign"></i>
            </div>
            <h3 class="advantage-title">Financial</h3>
            <p class="advantage-description">
              One off cost or recurring fees: we are flexible to meet your needs
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="case-studies-section">
      <div class="case-studies-container">
        <div class="case-studies-grid">
          <div class="case-study-card animate-on-scroll" ref="caseStudy1" style="--delay: 0.1s">
            <div class="case-study-logo">
              <img src="/logos/unitech-logo.png" alt="Unitech" />
            </div>
            <div class="case-study-header">
              <h3 class="case-study-company">Unitech, Taiwan</h3>
            </div>
            <p class="case-study-description">
              Unitech is a Taiwanese barcode scanner manufacturer. For security reasons they were looking for a partner that integrates with their MDM solution. Webkey has provided Unitech with a server based remote access to their devices, that now runs on their local access network.
            </p>
          </div>

          <div class="case-study-card animate-on-scroll" ref="caseStudy2" style="--delay: 0.2s">
            <div class="case-study-logo">
              <img src="/logos/activaire-logo.png" alt="Activaire" />
            </div>
            <div class="case-study-header">
              <h3 class="case-study-company">Brooklyn, New York</h3>
            </div>
            <p class="case-study-description">
              With speakers all across the US in reatail stores, they wanted to save time and energy on maintenance and IT management. Webkey has helped Activaire integrate their own with solution for a centrally managed IT maintenance system.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Server Packages Button Section -->
    <section class="server-packages-section">
      <div class="server-packages-container animate-on-scroll" ref="serverPackages">
        <a href="/pricing#server-packages" class="btn-server-packages">Server Packages</a>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container animate-on-scroll" ref="ctaContainer">
        <h4 class="cta-subtitle">
          At Webkey, we believe that every business is unique and therefore our server based app solution is designed to be highly customizable.<br />
          The server based Webkey app is a perfect tool for enterprises with a large or rapidly growing number of devices or businesses where the enhanced level of security is a must.
        </h4>
        <h4 class="cta-title">
          Get in touch with us today so we can design the perfect plan for your business!
        </h4>
        <div class="cta-buttons">
          <a href="/contact-us" class="btn-contact">Contact us</a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

let observer = null

onMounted(() => {
  // Intersection Observer to trigger animations
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach(el => observer.observe(el))
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.server-page {
  min-height: 100vh;
}

/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/* Animation Classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: var(--delay, 0s);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Hero Section */
.server-hero-section {
  padding: 140px var(--padding-horizontal) 80px;
  background:
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%),
    url('/server-hero-bg.jpg') center center / cover no-repeat fixed;
  text-align: left;
}

.server-hero-container {
  max-width: 1400px;
  margin: 0;
  width: 50%;
}

.server-hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 30px;
  color: #ffffff;
}

.server-hero-title .smaller {
  font-size: 32px;
}

.server-hero-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  margin: 0 0 30px;
}

.hero-cta {
  margin-top: 30px;
}

.btn-hero-contact {
  display: inline-block;
  padding: 16px 40px;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-hero-contact:hover {
  background: #F7BFBA;
  border-color: #F7BFBA;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(247, 191, 186, 0.4);
}

/* Advantages Section */
.advantages-section {
  padding: 80px var(--padding-horizontal) 40px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%),
    url('/server-hero-bg.jpg') center center / cover no-repeat fixed;
  color: #ffffff;
}

.advantages-container {
  max-width: 1400px;
  margin: 0;
}

.section-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 0 0 60px;
  color: #ffffff;
  text-align: left;
  max-width: 50%;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.advantage-card {
  padding: 0;
  text-align: left;
  transition: transform 0.3s ease;
}

.advantage-card:hover {
  transform: translateX(10px);
}

.advantage-icon {
  display: none;
}

.advantage-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #ffffff;
  letter-spacing: 0px;
}

.advantage-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
}

/* Case Studies Section */
.case-studies-section {
  padding: 80px var(--padding-horizontal);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.85) 100%),
    url('/server-hero-bg.jpg') center center / cover no-repeat fixed;
}

.case-studies-container {
  max-width: 1400px;
  margin: 0 auto;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.case-study-card {
  padding: 0;
  text-align: left;
  transition: transform 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-5px);
}

.case-study-card:hover .case-study-logo img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.case-study-logo {
  margin-bottom: 20px;
  text-align: center;
}

.case-study-logo img {
  max-width: 300px;
  height: auto;
  transition: transform 0.3s ease;
}

.case-study-header {
  margin-bottom: 15px;
}

.case-study-company {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
}

.case-study-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
}

/* Server Packages Section */
.server-packages-section {
  padding: 80px var(--padding-horizontal);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%),
    url('/server-hero-bg.jpg') center center / cover no-repeat fixed;
  text-align: center;
}

.server-packages-container {
  max-width: 1400px;
  margin: 0 auto;
}

.btn-server-packages {
  display: inline-block;
  padding: 16px 40px;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-server-packages:hover {
  background: #F7BFBA;
  border-color: #F7BFBA;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(247, 191, 186, 0.4);
}

/* CTA Section */
.cta-section {
  padding: 80px var(--padding-horizontal);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(51, 37, 50, 0.95) 100%),
    url('/server-hero-bg.jpg') center center / cover no-repeat fixed;
  text-align: center;
  color: #ffffff;
}

.cta-container {
  max-width: 100%;
  margin: 0;
}

.cta-subtitle {
  font-family: 'DrukWide', sans-serif;
  font-size: 27px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  margin: 0 0 30px;
  letter-spacing: 0.5px;
}

.cta-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 27px;
  font-weight: 500;
  line-height: 1.4;
  color: #ffffff;
  margin: 0 0 60px;
  letter-spacing: 1px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-contact,
.btn-pricing {
  display: inline-block;
  padding: 15px 40px;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-contact {
  background: #145cff;
  color: #ffffff;
  padding: 16px 40px;
  border-radius: 3px;
  box-shadow: 0 4px 15px rgba(20, 92, 255, 0.3);
}

.btn-contact:hover {
  background: #000000;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .server-hero-title {
    font-size: 36px;
  }

  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .section-title {
    font-size: 32px;
  }

  .advantage-card:hover {
    transform: translateX(5px);
  }
}

@media (max-width: 768px) {
  .server-hero-section {
    padding: 120px var(--padding-horizontal-mobile) 60px;
  }

  .server-hero-container {
    width: 100%;
  }

  .server-hero-title {
    font-size: 28px;
  }

  .server-hero-description {
    font-size: 16px;
    line-height: 28px;
  }

  .advantages-section,
  .case-studies-section,
  .features-section,
  .server-packages-section,
  .cta-section {
    padding: 60px var(--padding-horizontal-mobile);
  }

  .section-title {
    font-size: 26px;
    margin-bottom: 40px;
    max-width: 100%;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .case-studies-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .cta-subtitle {
    font-size: 18px;
  }

  .cta-title {
    font-size: 18px;
  }

  .cta-description {
    font-size: 16px;
    line-height: 28px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-contact,
  .btn-pricing {
    width: 100%;
  }

  .animate-on-scroll {
    transform: translateY(20px);
  }

  .advantage-card:hover {
    transform: none;
  }

  .case-study-card:hover {
    transform: none;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .advantage-card:hover,
  .case-study-card:hover,
  .btn-hero-contact:hover,
  .btn-server-packages:hover,
  .btn-contact:hover {
    transform: none;
  }
}
</style>
