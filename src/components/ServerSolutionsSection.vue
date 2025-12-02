<template>
  <section class="server-solutions-section">
    <div class="server-solutions-container">
      <div class="server-solutions-content">
        <h2 class="server-solutions-title">Server based Solutions</h2>
        <div class="server-solutions-text">
          <p>
            Our highly customizable server based solutions offer your business an additional layer of security to control your Android devices. Our flexible plans range from fully managed servers with dedicated priority support to one time licence/set-up fee models. Unlimited devices are part of all plans, but we are happy to tailor Webkey to best cover your needs.
          </p>
        </div>
        <div class="server-solutions-cta">
          <a href="/server" class="btn-find-out">Find out more</a>
        </div>
      </div>
      <div class="server-solutions-image">
        <img src="/server-solutions.png" alt="Server based Solutions" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.server-solutions-section {
  padding: 80px var(--padding-horizontal);
  background: linear-gradient(90deg, #f6f6f6 0%, #e8c8c5 100%);
}

.server-solutions-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

.server-solutions-content {
  flex: 1;
  max-width: 600px;
}

.server-solutions-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin-bottom: 30px;
  color: #20242e;
  text-align: center;
}

.server-solutions-text {
  margin-bottom: 30px;
}

.server-solutions-text p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  text-align: left;
}

.server-solutions-cta {
  text-align: center;
}

.btn-find-out {
  display: inline-block;
  background: #ffffff;
  color: #20242e;
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

.btn-find-out:hover {
  background: #f7bfba;
  color: #20242e;
  transform: translateY(-2px);
}

.server-solutions-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.server-solutions-image img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .server-solutions-section {
    padding: 60px var(--padding-horizontal);
  }

  .server-solutions-container {
    gap: 40px;
  }

  .server-solutions-title {
    font-size: 30px;
  }

  .server-solutions-text p {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 768px) {
  .server-solutions-section {
    padding: 40px var(--padding-horizontal-mobile);
  }

  .server-solutions-container {
    flex-direction: column;
    gap: 30px;
  }

  .server-solutions-content {
    max-width: 100%;
  }

  .server-solutions-title {
    font-size: 24px;
    text-align: center;
  }

  .server-solutions-text p {
    font-size: 14px;
    line-height: 24px;
    text-align: left;
  }

  .btn-find-out {
    padding: 10px 24px;
    font-size: 13px;
  }

  .server-solutions-image {
    order: -1;
  }
}
</style>
