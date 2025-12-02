<template>
  <section class="business-section">
    <div class="business-container">
      <h1 class="business-main-title">Webkey for Business</h1>

      <div class="business-intro">
        <div class="business-intro-text">
          <h2 class="business-subtitle">
            Webkey is a flexible and easy-to-integrate solution with different business editions and price plans for all the different business purposes. Most frequently used for managing POS systems, in-store retail devices, digital warehousing, digital signage platforms, digital kiosks and controlling educational content, we would be happy to hear from your business and find ways to help you succeed.
          </h2>
        </div>
        <div class="business-intro-cta">
          <a href="/business" class="btn-learn-more">Learn more about Webkey for business</a>
          <a href="/business#usecases" class="btn-usecases">Usecases</a>
        </div>
      </div>

      <div class="business-cards">
        <div class="business-card">
          <div class="card-image">
            <img src="/business/pos-retail.jpg" alt="POS and In-store Retail devices" />
          </div>
          <div class="card-content">
            <h3 class="card-title">POS and In-store Retail devices</h3>
            <p class="card-description">Remote management of cashiers, terminals and digital scales</p>
          </div>
        </div>

        <div class="business-card">
          <div class="card-image">
            <img src="/business/warehousing.jpg" alt="Digital warehousing" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Digital warehousing</h3>
            <p class="card-description">Maintaining barcode scanners, tablets, wearable devices</p>
          </div>
        </div>

        <div class="business-card">
          <div class="card-image">
            <img src="/business/advertisement.jpg" alt="IT Management, Advertisement and Entertainment" />
          </div>
          <div class="card-content">
            <h3 class="card-title">IT Management, Advertisement and Entertainment</h3>
            <p class="card-description">Digital kiosks, set-top boxes, mobile device fleet management</p>
          </div>
        </div>

        <div class="business-card">
          <div class="card-image">
            <img src="/business/education.jpg" alt="Education" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Education</h3>
            <p class="card-description">Managing educational content on classroom tablets</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.business-section {
  padding: 80px var(--padding-horizontal);
  background: #ffffff;
}

.business-container {
  max-width: 1400px;
  margin: 0 auto;
}

.business-main-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin-bottom: 40px;
  color: #20242e;
  text-align: left;
}

.business-intro {
  display: flex;
  gap: 60px;
  margin-bottom: 60px;
  align-items: flex-start;
}

.business-intro-text {
  flex: 2;
}

.business-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  line-height: 32px;
  color: #20242e;
  font-weight: 400;
  margin: 0;
}

.business-intro-cta {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.btn-learn-more,
.btn-usecases {
  display: inline-block;
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
  text-align: center;
}

.btn-learn-more {
  width: auto;
  white-space: nowrap;
}

.btn-usecases {
  width: auto;
}

.btn-learn-more:hover,
.btn-usecases:hover {
  background: #000000;
  transform: translateY(-2px);
}

.business-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.business-card {
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.business-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  width: 100%;
  padding-top: 58.594%;
  overflow: hidden;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.business-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 24px;
}

.card-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 12px;
  color: #20242e;
}

.card-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #20242e;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .business-section {
    padding: 60px var(--padding-horizontal);
  }

  .business-main-title {
    font-size: 32px;
  }

  .business-subtitle {
    font-size: 16px;
    line-height: 28px;
  }

  .business-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .business-section {
    padding: 40px var(--padding-horizontal-mobile);
  }

  .business-main-title {
    font-size: 26px;
  }

  .business-intro {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
  }

  .business-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .business-intro-cta {
    width: 100%;
    max-width: 100%;
  }

  .btn-learn-more {
    font-size: 13px;
    padding: 10px 24px;
  }

  .btn-usecases {
    font-size: 13px;
    padding: 10px 24px;
  }

  .business-cards {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }

  .card-title {
    font-size: 15px;
  }

  .card-description {
    font-size: 13px;
    line-height: 22px;
  }
}
</style>
