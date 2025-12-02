<template>
  <div class="digital-signage-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">Your screens can do more</h1>
          <p class="hero-subtitle">
            Gain access to tools that help you connect to your screens remotely. Securely display dashboards. Maintain your screens from one central location. <strong>Webkey helps you take your digital signage solutions to the next level.</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section">
      <div class="container">
        <p class="value-text">
          Unlocking your screen potential is more important now than ever, when hundreds of communication channels are competing for your audiences' attention. Take control of your displays remotely and secure them without having to go to their physical location!
        </p>
      </div>
    </section>

    <!-- Demo Form Section -->
    <section class="demo-section">
      <div class="container">
        <div class="demo-content">
          <div class="demo-info">
            <h2 class="demo-title">Register a free demo</h2>
            <p class="demo-description">
              See how Webkey can transform your digital signage deployment. Our team will get in touch with you to schedule a personalized demo.
            </p>
          </div>

          <form class="demo-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" v-model="formData.email" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input type="text" id="firstName" v-model="formData.firstName" required />
              </div>

              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input type="text" id="lastName" v-model="formData.lastName" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="country">Country - Region</label>
                <input type="text" id="country" v-model="formData.country" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="company">Company Name</label>
                <input type="text" id="company" v-model="formData.company" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" v-model="formData.phone" />
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="submit-button">Request Demo</button>
            </div>

            <p v-if="submitMessage" class="submit-message" :class="{ error: submitError }">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

const formData = ref({
  email: '',
  firstName: '',
  lastName: '',
  country: '',
  company: '',
  phone: ''
})

const submitMessage = ref('')
const submitError = ref(false)

const handleSubmit = () => {
  // For now, just show a success message
  // In production, this would send data to a backend API
  submitMessage.value = 'Thank you for your interest! We will contact you soon to schedule your demo.'
  submitError.value = false

  // Reset form after 3 seconds
  setTimeout(() => {
    formData.value = {
      email: '',
      firstName: '',
      lastName: '',
      country: '',
      company: '',
      phone: ''
    }
    submitMessage.value = ''
  }, 5000)
}
</script>

<style scoped>
.digital-signage-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/webkey-digital-free-bg-medium-scaled-1-1380x1920.jpg');
  background-size: cover;
  background-position: center;
  padding: 140px var(--padding-horizontal) 80px;
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
  max-width: 1000px;
  margin: 0 auto;
}

.hero-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 56px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 30px;
  line-height: 1.2;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin: 0;
}

.hero-subtitle strong {
  font-weight: 700;
}

/* Value Section */
.value-section {
  padding: 80px var(--padding-horizontal);
  background: #ffffff;
}

.value-text {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 20px;
  line-height: 36px;
  color: #20242e;
  margin: 0;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* Demo Section */
.demo-section {
  padding: 80px var(--padding-horizontal);
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-content {
  max-width: 700px;
  margin: 0 auto;
}

.demo-info {
  text-align: center;
  margin-bottom: 50px;
}

.demo-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 42px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: 1px;
}

.demo-description {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #666666;
  margin: 0;
}

/* Form Styles */
.demo-form {
  background: #ffffff;
  padding: 50px 40px;
  border-radius: 3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row:has(.form-group:nth-child(2)) {
  grid-template-columns: 1fr 1fr;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 600;
  color: #20242e;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.form-group input {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 15px;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 3px;
  background: #ffffff;
  color: #20242e;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #145cff;
}

.form-actions {
  margin-top: 30px;
  text-align: center;
}

.submit-button {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 48px;
  background: #145cff;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  letter-spacing: 1px;
}

.submit-button:hover {
  background: #0d4acc;
  transform: translateY(-2px);
}

.submit-button:active {
  transform: translateY(0);
}

.submit-message {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  margin-top: 20px;
  padding: 15px;
  border-radius: 3px;
  background: #d4edda;
  color: #155724;
  text-align: center;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-section {
    padding: 120px 40px 60px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-subtitle {
    font-size: 16px;
    line-height: 28px;
  }

  .value-section {
    padding: 60px 40px;
  }

  .value-text {
    font-size: 18px;
    line-height: 32px;
  }

  .demo-section {
    padding: 60px 40px;
  }

  .demo-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 400px;
    padding: 100px var(--padding-horizontal-mobile) 50px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 15px;
    line-height: 26px;
  }

  .value-section {
    padding: 50px var(--padding-horizontal-mobile);
  }

  .value-text {
    font-size: 16px;
    line-height: 28px;
  }

  .demo-section {
    padding: 50px var(--padding-horizontal-mobile);
  }

  .demo-info {
    margin-bottom: 40px;
  }

  .demo-title {
    font-size: 32px;
  }

  .demo-description {
    font-size: 15px;
    line-height: 26px;
  }

  .demo-form {
    padding: 40px 30px;
  }

  .form-row:has(.form-group:nth-child(2)) {
    grid-template-columns: 1fr;
  }

  .submit-button {
    padding: 14px 32px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .demo-form {
    padding: 30px 20px;
  }

  .form-group input {
    font-size: 14px;
    padding: 10px 14px;
  }
}
</style>
