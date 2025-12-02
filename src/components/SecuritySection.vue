<template>
  <section id="security" class="security-section" style="scroll-margin-top: 60px;">
    <div class="security-container">
      <div class="security-content">
        <h2 class="security-title">
          Security is<br />
          key for us, too
        </h2>
        <div class="security-text">
          <p>
            While using Webkey, all remote control sessions are encrypted between your browser and your device by SSL/TLS certificates.<br />
            Pairing devices always requires an access code (PIN) to avoid accidental or malicious pairings.
          </p>
          <p>
            Do you have any questions about Webkey security?
          </p>
        </div>
        <div class="security-cta">
          <a href="#contact" class="btn-contact">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="security-image-mobile"></div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.security-section {
  position: relative;
  padding: 400px var(--padding-horizontal) 200px;
  min-height: 800px;
  background: url('/security-bg.jpg') center center / cover no-repeat;
  color: #ffffff;
  overflow: hidden;
}


.security-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.security-content {
  max-width: 600px;
  margin-top: -250px;
}

.security-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin-bottom: 40px;
  color: #ffffff;
}

.security-text {
  margin-bottom: 40px;
}

.security-text p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.4px;
}

.security-text p:last-child {
  margin-bottom: 0;
  font-weight: 400;
}

.security-cta {
  margin-top: 40px;
}

.btn-contact {
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

.btn-contact:hover {
  background: #f7bfba;
  color: #20242e;
  transform: translateY(-2px);
}

.security-image-mobile {
  display: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .security-section {
    padding: 300px var(--padding-horizontal) 150px;
    min-height: 650px;
  }

  .security-title {
    font-size: 26px;
  }

  .security-text p {
    font-size: 15px;
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .security-section {
    padding: 0;
    min-height: auto;
    background: none;
    display: flex;
    flex-direction: column;
  }

  .security-container {
    background-color: #2d1b3d;
    padding: 40px var(--padding-horizontal-mobile);
  }

  .security-content {
    margin-top: 0;
    max-width: 100%;
  }

  .security-title {
    font-size: 22px;
  }

  .security-text {
    margin-bottom: 30px;
  }

  .security-text p {
    font-size: 14px;
    line-height: 26px;
  }

  .btn-contact {
    padding: 10px 24px;
    font-size: 13px;
  }

  .security-image-mobile {
    display: block;
    width: 100%;
    min-height: 400px;
    background: url('/security-bg.jpg') center center / cover no-repeat;
  }
}
</style>
