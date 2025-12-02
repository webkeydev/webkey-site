<template>
  <div class="faq-page">
    <AppHeader :transparent="true" />

    <!-- Page Title Section -->
    <section class="page-title-section">
      <div class="page-title-container">
        <h1 class="page-title-text">FAQ</h1>
      </div>
    </section>

    <!-- FAQ Content Section -->
    <section class="faq-content-section">
      <div class="faq-content-container">
        <FaqAccordion :faqs="faqItems" />
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import FaqAccordion from '../components/FaqAccordion.vue'

const faqItems = [
  {
    id: 'faq-1',
    question: 'Is Webkey secure?',
    answer: 'Yes, we can provide high security. In the last 10 years with multiple developments we have created a secure environment for Webkey App. Browser and Webkey client both use SSL communication.'
  },
  {
    id: 'faq-2',
    question: 'How can I manage more than one device?',
    answer: 'We have more options for the application. Service provided for individual users is to be able to control one device remotely but in case you would like to control more than 1, Business and Enterprise option is the best one for you. With a monthly fee, you can control countless devices remotely easily.'
  },
  {
    id: 'faq-3',
    question: 'Is there any data limit?',
    answer: 'There is no data limit.'
  },
  {
    id: 'faq-4',
    question: 'What payment methods are accepted?',
    answer: 'You can pay with credit card / debit card and also with a Paypal account'
  },
  {
    id: 'faq-5',
    question: 'Can I have my own Webkey server?',
    answer: 'As a part of our B2B solution we are offering to our clients also the possibility to have their own server. For further details about the Webkey server please contact us at info@webkeyapp.com.'
  },
  {
    id: 'faq-6',
    question: 'Do I have to root my device to use Webkey?',
    answer: 'Root is not necessary to use Webkey, but because of Android OS limitations some functions of our solution are available only with rooted devices or with a signed Webkey APK with Android platform key. To check our available feature list please visit the Features section at <a href="https://www.webkeyapp.com" target="_blank">https://www.webkeyapp.com</a>'
  },
  {
    id: 'faq-7',
    question: 'How to remote control Android device from any browser with Webkey?',
    answer: 'Once you have Webkey configured on your device, just log in to your account at dashboard.webkeyapp.com from any browser and start to take control of your device.'
  },
  {
    id: 'faq-8',
    question: 'How to start using Webkey?',
    answer: 'Please read and follow the instructions described in this article: <a href="https://www.webkeyapp.com/en/getting-started/" target="_blank">https://www.webkeyapp.com/en/getting-started/</a>'
  },
  {
    id: 'faq-9',
    question: 'Failed to connect devices through Webkey?',
    answer: 'Please read and follow the instructions described in this article: <a href="https://www.webkeyapp.com/en/device-is-offline/" target="_blank">https://www.webkeyapp.com/en/device-is-offline/</a>'
  },
  {
    id: 'faq-10',
    question: 'How to delete a Webkey account?',
    answer: 'Please contact us via info@webkeyapp.com and let us help you.'
  },
  {
    id: 'faq-11',
    question: 'How can I remove my device?',
    answer: 'On the dashboard under device details (three dots on the right) there is an option to remove your device.'
  },
  {
    id: 'faq-12',
    question: 'What is the Terminal feature and how to use it?',
    answer: 'The Webkey Terminal feature enable real-time pseudo terminal access to your Android devices. To understand more about this unique feature please go to our Knowledge Base and check this article <a href="https://www.webkeyapp.com/en/terminal-tutorial/" target="_blank">https://www.webkeyapp.com/en/terminal-tutorial/</a>'
  },
  {
    id: 'faq-13',
    question: 'How many devices can I control in the Free plan?',
    answer: 'The Webkey Free plan gives you the possibility to control for free one device, without any data restriction with all Webkey features included. You can start to use Webkey registering at his link: dashboard.webkeyapp.com/registration'
  }
]
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
}

.page-title-section {
  position: relative;
  padding: 140px var(--padding-horizontal) 80px;
  min-height: 300px;
  background: #13171a;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-title-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/243A2909-0-1920x1080.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}

.page-title-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.page-title-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.page-title-text {
  font-family: 'DrukWide', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0;
  color: #ffffff;
}

.faq-content-section {
  padding: 80px var(--padding-horizontal);
  background: #ffffff;
}

.faq-content-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .page-title-section {
    padding: 120px 40px 60px;
    min-height: 250px;
  }

  .page-title-text {
    font-size: 40px;
  }

  .faq-content-section {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .page-title-section {
    padding: 100px var(--padding-horizontal-mobile) 50px;
    min-height: 200px;
  }

  .page-title-text {
    font-size: 32px;
  }

  .faq-content-section {
    padding: 40px var(--padding-horizontal-mobile);
  }
}
</style>
