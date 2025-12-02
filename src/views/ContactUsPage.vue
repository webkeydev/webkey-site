<template>
  <div class="contact-us-page">
    <AppHeader />

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="contact-form-container">
        <div class="contact-info" :class="{ 'show': formLoaded }">
          <h1 class="contact-info-title">Stay Connected</h1>
          <p class="contact-message">
            Don't hesitate to contact us if you need more help or want to share your feedback.
          </p>
          <div class="contact-details">
            <p><strong>Email:</strong> <a href="mailto:info@webkeyapp.com">info@webkeyapp.com</a></p>
            <p><strong>Twitter:</strong> <a href="https://twitter.com/webkeyapp" target="_blank">twitter.com/webkeyapp</a></p>
          </div>
        </div>

        <!-- HubSpot Form -->
        <div class="hubspot-form-container">
          <div id="hubspot-form"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'

const formLoaded = ref(false)

onMounted(() => {
  // Load HubSpot form script
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: "na1",
      portalId: "5236092",
      formId: "ca89cc29-ccb2-4428-bb5a-828aef500a8a",
      target: "#hubspot-form",
      onFormReady: () => {
        formLoaded.value = true
      }
    })
  } else {
    // Load HubSpot script if not already loaded
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "5236092",
          formId: "ca89cc29-ccb2-4428-bb5a-828aef500a8a",
          target: "#hubspot-form",
          onFormReady: () => {
            formLoaded.value = true
          }
        })
      }
    }
    document.body.appendChild(script)
  }
})
</script>

<style scoped>
.contact-us-page {
  min-height: 100vh;
}

/* Make header transparent and non-sticky on this page */
.contact-us-page :deep(#app-header) {
  background: transparent !important;
  position: absolute !important;
}

/* Contact Form Section */
.contact-form-section {
  min-height: calc(100vh - 80px);
  padding: 70px var(--padding-horizontal) 80px;
  background: url('/succesfull_connection-fin-1.jpg') center center / cover no-repeat fixed;
  position: relative;
}

.contact-form-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.2) 100%);
  z-index: 0;
}

.contact-form-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.contact-info {
  text-align: left;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.contact-info.show {
  opacity: 1;
  transform: translateX(0);
}

.contact-info-title {
  font-family: 'DrukWide', sans-serif;
  font-size: 65.8px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 30px;
  color: #ffffff;
}

.contact-message {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 22px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0 0 30px;
}

.contact-details {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 1.8;
  color: #ffffff;
}

.contact-details p {
  margin: 10px 0;
}

.contact-details strong {
  color: #ffffff;
}

.contact-details a {
  color: #ffffff;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.contact-details a:hover {
  opacity: 0.8;
}

.hubspot-form-container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 720px;
}

#hubspot-form {
  min-height: 640px;
}

/* HubSpot Form Styling Override */
.hubspot-form-container :deep(.hs-form) {
  font-family: 'DecimaMonoPro', monospace;
}

.hubspot-form-container :deep(.hs-input) {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.hubspot-form-container :deep(.hs-input:focus) {
  outline: none;
  border-color: #145cff;
}

.hubspot-form-container :deep(.hs-button) {
  background: #145cff;
  color: #ffffff;
  border: none;
  padding: 12px 32px;
  border-radius: 3px;
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hubspot-form-container :deep(.hs-button:hover) {
  background: #5a4ee0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-form-section {
    padding: 120px var(--padding-horizontal-mobile) 60px;
    min-height: auto;
  }

  .contact-form-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info {
    text-align: center;
  }

  .contact-info-title {
    font-size: 36px;
  }

  .contact-message {
    font-size: 18px;
  }

  .contact-details {
    font-size: 13px;
  }

  .hubspot-form-container {
    padding: 30px 20px;
  }
}
</style>
