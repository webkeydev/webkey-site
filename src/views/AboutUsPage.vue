<template>
  <div class="about-us-page">
    <AppHeader />

    <!-- About Us Content -->
    <section class="about-us-section">
      <div class="about-us-container">
        <div class="about-us-row">
          <!-- Left Column: Text Content -->
          <div class="about-us-column-text">
            <div class="spacing-top"></div>

            <div class="content-section">
              <h4>Who we are</h4>
              <p>
                Webkey Development Ltd was founded in 2018 in the heart of Central Europe. Although a start-up, our team has been bringing successful Android solutions to a wide variety of customers for 10 years, and we are now growing our presence regionally and internationally. Our main focus is development of Android remote management tools and to this end, we have developed our own bespoke application: Webkey. As a company, we are a youthful, energetic and powerful team. Constantly growing, with multiple offices in Hungary and in Madrid & Warsaw.
              </p>
            </div>

            <div class="spacing-medium"></div>

            <div class="content-section">
              <h4>Our vision and mission</h4>
              <p>
                Our mission is to make clients more satisfied and more profitable by our actions every single day. We continuously work to improve even our newest developments, to be able to provide the best hands-on solution for new and existing clients. We ensure that Webkey is always more secure, reliable, useful and powerful. Security is the key. This is why we have multiple options for each customer, including a dedicated server option. This and our customization makes us the unique and successful option for customers.
              </p>
            </div>
          </div>

          <!-- Right Column: Team Image -->
          <div class="about-us-column-image">
            <div class="team-image-container">
              <img
                src="/team-1.jpg"
                alt="Webkey team"
                class="team-image"
                loading="lazy"
              />
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
.about-us-page {
  min-height: 100vh;
}

.about-us-section {
  padding: 140px var(--padding-horizontal) 80px;
  background: #ffffff;
}

.about-us-container {
  max-width: 1400px;
  margin: 0 auto;
}

.about-us-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-us-column-text {
  padding: 0;
}

.spacing-top {
  height: 60px;
}

.spacing-medium {
  height: 30px;
}

.content-section h4 {
  font-family: 'DrukWide', sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: 1px;
}

.content-section p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0;
}

.about-us-column-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-image-container {
  max-width: 750px;
  width: 100%;
}

.team-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 3px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about-us-section {
    padding: 120px 40px 60px;
  }

  .about-us-row {
    gap: 40px;
  }

  .content-section h4 {
    font-size: 24px;
  }

  .content-section p {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 768px) {
  .about-us-section {
    padding: 100px var(--padding-horizontal-mobile) 50px;
  }

  .about-us-row {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .spacing-top {
    height: 30px;
  }

  .spacing-medium {
    height: 20px;
  }

  .content-section h4 {
    font-size: 22px;
  }

  .content-section p {
    font-size: 14px;
    line-height: 24px;
  }

  .team-image-container {
    max-width: 100%;
  }
}
</style>
