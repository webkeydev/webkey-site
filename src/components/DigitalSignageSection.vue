<template>
  <section class="digital-signage-section">
    <div class="digital-signage-container">
      <div class="digital-signage-content">
        <h2 class="digital-signage-title">Webkey for Digital signage</h2>
        <div class="digital-signage-text">
          <p>
            Webkey is an ideal partner for any digital signage company. We are constantly looking for partnership agreements, new clients but we also offer our app as whitelabled solution (so you can build it into your solution).
          </p>
          <p>
            Get in touch today to discuss the details or read more about it on our <a href="/partners">Partners page</a>.
          </p>
        </div>
        <div class="digital-signage-cta">
          <a href="/partners" class="btn-find-out">Find out more</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.digital-signage-section {
  position: relative;
  padding: 80px var(--padding-horizontal);
  min-height: 600px;
  background: url('/digital-signage-bg.jpg') center left / cover no-repeat;
  color: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.digital-signage-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.digital-signage-content {
  max-width: 600px;
  text-align: center;
}

.digital-signage-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin-bottom: 30px;
  color: #ffffff;
}

.digital-signage-text {
  margin-bottom: 30px;
}

.digital-signage-text p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 20px;
}

.digital-signage-text p:last-child {
  margin-bottom: 0;
}

.digital-signage-text a {
  color: #ffffff;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.digital-signage-text a:hover {
  opacity: 0.8;
}

.digital-signage-cta {
  margin-top: 30px;
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

/* Responsive Design */
@media (max-width: 1024px) {
  .digital-signage-section {
    padding: 60px var(--padding-horizontal);
    min-height: 500px;
  }

  .digital-signage-title {
    font-size: 32px;
  }

  .digital-signage-text p {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 768px) {
  .digital-signage-section {
    padding: 40px var(--padding-horizontal-mobile);
    min-height: auto;
    background-position: center center;
  }

  .digital-signage-container {
    justify-content: center;
  }

  .digital-signage-content {
    max-width: 100%;
    text-align: left;
    background: rgba(0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 8px;
  }

  .digital-signage-title {
    font-size: 24px;
    text-align: left;
  }

  .digital-signage-text p {
    font-size: 14px;
    line-height: 24px;
  }

  .btn-find-out {
    padding: 10px 24px;
    font-size: 13px;
  }
}
</style>
