<template>
  <footer id="app-footer" class="footer">
    <div class="footer-container">
      <!-- Main Footer Content Row -->
      <div class="footer-main">
        <!-- Logo Section -->
        <div class="footer-logo-section">
          <div class="footer-logo">
            <img src="/logo-large.png" alt="Webkey" />
          </div>
        </div>

        <!-- Footer Columns -->
        <div class="footer-columns">
          <!-- Webkey Column -->
          <div class="footer-column">
            <h4>Webkey</h4>
            <ul>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/#security">Security</a></li>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/contact-us">Contact us</a></li>
              <li><a href="/digital-signage">Digital signage</a></li>
            </ul>
          </div>

          <!-- User cases Column -->
          <div class="footer-column">
            <h4>User cases</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/business">Business</a></li>
              <li><a href="/business#security">Security</a></li>
              <li><a href="/server">Server</a></li>
              <li><a href="/partners">Partners</a></li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/knowledge-base">Knowledge Base</a></li>
              <li><a href="https://storage.webkeyapp.com/apidoc">API Documentation</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <!-- Download Column -->
          <div class="footer-column">
            <h4>Download</h4>
            <ul>
              <li><a href="https://play.google.com/store/apps/details?id=com.webkey&hl=en&utm_source=website&utm_campaign=footer" target="_blank">Get it on Google Play</a></li>
              <li><a href="https://storage.webkeyapp.com/public/latest.apk">Direct Download Webkey Client APK</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Social & Copyright Section -->
      <div class="footer-bottom">
        <div class="footer-social">
          <a href="https://twitter.com/webkeyapp" target="_blank" aria-label="Twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/webkeydev" target="_blank" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>

        <div class="footer-copyright">
          <p>
            Copyright © Go Development 2025 • <a href="/privacy-policy">Terms Of Service</a> • <a href="/privacy-policy">Privacy Policy</a> • <a href="/cookie-policy">Cookie Policy</a>
          </p>
          <p class="footer-language">
            <i class="fa-solid fa-globe"></i> <a href="/en/">English</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  color: #20242e;
  padding: 80px 0 40px;
}

.footer-container {
  width: 100%;
  padding: 0 40px;
}

.footer-main {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
}

.footer-logo-section {
  flex-shrink: 0;
  width: 150px;
  display: flex;
  align-items: flex-start;
}

.footer-logo img {
  height: 99px;
  width: auto;
}

.footer-columns {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}

.footer-column h4 {
  font-family: 'DrukWide', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #20242e;
}

.footer-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li:last-child {
  margin-bottom: 0;
}

.footer-column a {
  color: #20242e;
  text-decoration: none;
  font-size: 16px;
  line-height: 40px;
  font-family: 'DecimaMonoPro', monospace;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #145cff;
}

.footer-bottom {
  padding-top: 40px;
}

.footer-social {
  text-align: center;
  margin-bottom: 30px;
}

.footer-social a {
  display: inline-block;
  margin: 0 10px;
  color: #20242e;
  font-size: 20px;
  transition: color 0.3s ease;
}

.footer-social a:hover {
  color: #145cff;
}

.footer-copyright {
  text-align: center;
}

.footer-copyright p {
  font-size: 12px;
  line-height: 1.6;
  color: #20242e;
  margin-bottom: 10px;
  font-family: 'DecimaMonoPro', monospace;
}

.footer-copyright p:last-child {
  margin-bottom: 0;
}

.footer-copyright a {
  color: #20242e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-copyright a:hover {
  color: #145cff;
}

.footer-language {
  margin-top: 10px;
}

.footer-language i {
  margin-right: 8px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-columns {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-container {
    padding: 0 20px;
  }

  .footer-main {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-logo-section {
    width: 100%;
    justify-content: center;
  }

  .footer-logo img {
    height: 70px;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-column h4 {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .footer-column a {
    font-size: 14px;
    line-height: 32px;
  }

  .footer-bottom {
    padding-top: 30px;
  }

  .footer-social {
    margin-bottom: 20px;
  }

  .footer-copyright p {
    font-size: 11px;
  }
}
</style>
