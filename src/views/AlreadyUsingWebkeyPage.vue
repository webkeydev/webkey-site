<template>
  <div class="already-using-webkey-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">Already using Webkey</h1>
          <p class="hero-description">
            We are proud to share the success stories of our key accounts. Get in touch today and let us know if there is anything we can help you with!<br>
            <strong>Take control!</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Clients Carousel Section -->
    <section class="clients-carousel-section">
      <div class="container">
        <ClientsCarousel />
      </div>
    </section>

    <!-- Divider -->
    <section class="divider-section">
      <div class="container">
        <div class="divider"></div>
      </div>
    </section>

    <!-- Client Stories -->
    <section class="client-stories-section">
      <div class="container">
        <!-- Row 1 -->
        <div class="client-stories-row">
          <ClientStorySection
            logo="unitech-2.jpg"
            title="Unitech, Taiwan"
            description="Unitech is a Taiwanese barcode scanner manufacturer. For security reasons they were looking for a partner that integrates with their MDM solution. Webkey has provided Unitech with a server based remote access to their devices, that now runs on their local access network."
          />

          <ClientStorySection
            logo="activare-2.jpg"
            title="Brooklyn, New York"
            description="With speakers all across the US in reatail stores, they wanted to save time and energy on maintenance and IT management. Webkey has helped Activaire integrate their own with solution for a centrally managed IT maintenance system."
          />
        </div>

        <!-- Row 2 -->
        <div class="client-stories-row">
          <ClientStorySection
            logo="york-2x-1.jpg"
            title="Board of York School, Canada"
            description="The board leverages Webkey to centrally control their educational devices (tablets, interactive boards) in K-12 institutes."
          />

          <ClientStorySection
            logo="Digi-ewo-2.jpg"
            title="Digimevo, Spain"
            description="Digimevo spain displays educational content in medical facilities across Spain. They found it difficulty to maintain all their devices in their fleet. Webkey has been helped them to control the management and maintenance of their Android devices centrally."
          />
        </div>

        <!-- Row 3 -->
        <div class="client-stories-row">
          <ClientStorySection
            logo="logo-topx70.png"
            title="Adload"
            description="Adload inc specializes in displaying ads on the backdoors of trucks across all roadways. To maximize the reach of their ads, they need to have accurate location information of their devices. They choose Webkey to make sure the ads are tailored to the location they are relevant in."
          />

          <ClientStorySection
            logo="scoops-2-1.jpg"
            title="Scoops"
            description="Scoops provides devices for digital signage in many retail facilities. They needed to maintain and manage their devices centrally, but they had to bring all of their devices on-board quickly. Webkey helped them by providing them with auto-enrollment of devices (one time enrollment of multiple devices to one account), helping them to take control of their devices more efficiently."
          />
        </div>

        <!-- Row 4 -->
        <div class="client-stories-row">
          <ClientStorySection
            logo="digitronix-2.jpg"
            title="Digitronix"
            description="Digitronix is a France based digital signage company. With geographical expansion, they wanted to make sure they retain control over their devices in a central way. They chose Webkey to be their partner in building a centrally managed maintenance supply chain."
          />

          <ClientStorySection
            logo="evaret-2.jpg"
            title="Evaret"
            description="Evaret provides a number of different IT solutions, among them digital signage. They wanted to make sure that the maintenance of these is as efficient as possible. Webkey has helped them build a resilient way to manage their Android devices."
          />
        </div>
      </div>
    </section>

    <!-- Bottom Divider -->
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
import ClientsCarousel from '../components/ClientsCarousel.vue'
import ClientStorySection from '../components/ClientStorySection.vue'
</script>

<style scoped>
.already-using-webkey-page {
  min-height: 100vh;
}

/* Transparent header that becomes black on scroll */
.already-using-webkey-page :deep(#app-header) {
  background: transparent !important;
  transition: background 0.3s ease;
}

.already-using-webkey-page :deep(#app-header.header-scrolled) {
  background: #000000 !important;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/Webkey-Stills-part2-0261-1920x1080.jpg');
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

/* Clients Carousel Section */
.clients-carousel-section {
  padding: 80px var(--padding-horizontal) 60px;
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

/* Client Stories Section */
.client-stories-section {
  padding: 40px var(--padding-horizontal) 80px;
  background: white;
}

.client-stories-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
}

.client-stories-row:last-child {
  margin-bottom: 0;
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

  .client-stories-row {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }
}
</style>
