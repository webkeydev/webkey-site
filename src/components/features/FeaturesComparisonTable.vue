<template>
  <div class="features-comparison">
    <div class="comparison-header">
      <div class="feature-column"></div>
      <div class="edition-column">
        <h5>Standard Edition</h5>
      </div>
      <div class="edition-column">
        <h5>Business Edition</h5>
      </div>
    </div>

    <div class="comparison-body">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="comparison-row"
      >
        <div class="feature-name">
          {{ feature.name }}
          <span v-if="feature.tooltip" class="tooltip-wrapper">
            <i class="fa-solid fa-circle-question tooltip-icon"></i>
            <span class="tooltip-content" v-html="feature.tooltip"></span>
          </span>
        </div>
        <div class="edition-check standard">
          <span v-if="feature.standard" class="check-icon"></span>
        </div>
        <div class="edition-check business">
          <span v-if="feature.business" class="check-icon"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { name: 'Real-time remote view', standard: true, business: true },
  {
    name: 'Full remote control including touch and key events',
    standard: true,
    business: true,
    tooltip: 'Rooted device, or <a href="/remote-control-non-rooted">accessibility permission for non rooted devices</a>, Works on SAMSUNG device without root'
  },
  { name: 'File explorer', standard: true, business: true },
  { name: 'Linux terminal access', standard: true, business: true },
  { name: 'GPS-based location tracking', standard: true, business: true },
  { name: 'Remote screenshot', standard: true, business: true },
  { name: 'Screen recording', standard: true, business: true },
  { name: 'Quick open URLs in Android', standard: true, business: true },
  { name: 'Web Dashboard to monitor devices', standard: true, business: true },
  { name: 'List installed packages through a Rest API', standard: true, business: true },
  {
    name: 'Install/Remove packages',
    standard: true,
    business: true,
    tooltip: 'Requires rooted device'
  },
  { name: 'Direct access to your device by nick name', standard: true, business: true },
  { name: 'Communication via Intents', standard: true, business: true },
  { name: 'Device-to-Device control', standard: true, business: true },
  {
    name: 'Configuration via intent',
    standard: false,
    business: true,
    tooltip: 'External configuration of Webkey Client\'s APK Learn more: <a href="https://github.com/webkeydev/webkey-headless-control" target="_blank" rel="noopener noreferrer">https://github.com/webkeydev/webkey-headless-control</a>'
  },
  {
    name: 'Pre-installed Webkey client',
    standard: false,
    business: true,
    tooltip: 'Webkey client cannot be removed from the device and opens up automatically after restart'
  },
  {
    name: 'Headless version',
    standard: false,
    business: true,
    tooltip: 'Webkey can run invisibly without the client app on any Android device'
  }
]
</script>

<style scoped>
.features-comparison {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.comparison-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 2px solid #e0e0e0;
}

.comparison-header > div {
  padding: 30px 40px;
}

.feature-column {
  font-family: 'DrukWide', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #20242e;
  letter-spacing: 1px;
}

.edition-column {
  text-align: center;
}

.edition-column:last-child {
  background: #ffffff;
}

.edition-column h5 {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  font-weight: 700;
  color: #20242e;
  margin: 0;
  letter-spacing: 1px;
}

.comparison-body {
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #d0d0d0;
  transition: background 0.3s ease;
}

.comparison-row > div {
  padding: 20px 40px;
}

.comparison-row:hover {
  background: #fafafa;
}

.comparison-row:last-child {
  border-bottom: none;
}

.feature-name {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  color: #20242e;
  line-height: 24px;
  position: relative;
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
  margin-left: 8px;
}

.tooltip-icon {
  color: #145cff;
  font-size: 14px;
  cursor: help;
}

.tooltip-content {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  color: #20242e;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 20px;
  white-space: normal;
  width: 320px;
  z-index: 100;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e0e0;
}

.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #ffffff;
}

.tooltip-content a {
  color: #145cff;
  text-decoration: underline;
  word-break: break-all;
}

.tooltip-content a:hover {
  color: #5a4ee0;
}

.tooltip-wrapper:hover .tooltip-content {
  visibility: visible;
  opacity: 1;
}

.edition-check {
  text-align: center;
  font-size: 11px;
}

.edition-check.business {
  background: #ffffff;
}

.check-icon::before {
  content: "\f058";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  font-size: 24px;
}

.edition-check.standard .check-icon::before {
  color: #000000;
}

.edition-check.business .check-icon::before {
  color: #145cff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .comparison-header,
  .comparison-row {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  .comparison-header > div,
  .comparison-row > div {
    padding: 15px 20px;
  }

  .edition-column h5 {
    font-size: 14px;
  }

  .feature-name {
    font-size: 14px;
    line-height: 20px;
  }

  .edition-check {
    font-size: 10px;
  }

  .check-icon::before {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .comparison-header,
  .comparison-row {
    grid-template-columns: 2fr 0.8fr 0.8fr;
  }

  .comparison-header > div,
  .comparison-row > div {
    padding: 12px 15px;
  }

  .edition-column h5 {
    font-size: 12px;
  }

  .feature-name {
    font-size: 13px;
  }

  .edition-check {
    font-size: 9px;
  }

  .check-icon::before {
    font-size: 20px;
  }
}
</style>
