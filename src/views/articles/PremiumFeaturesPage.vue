<template>
  <ArticleTemplate
    title="New: Premium features in app"
    hero-image="/tools-bg.jpg"
    date="2021-10-06"
    :related-articles="relatedArticles"
  >
    <p>As some of you may have already seen, recently a new menu item has appeared in the Webkey app user interface. These are available to all Webkey users, independent of the pricing plan (free version included!)</p>

    <p>By selecting the premium features menu option, you will have an instant access to</p>

    <ul>
      <li>Extend the device limit</li>
      <li>Activate your local network connection</li>
    </ul>

    <h2>Extending the Device Limit</h2>

    <p>Extending the device limit will allow you to control more devices from your Dashboard. Please find more information about this on our Pricing page.</p>

    <h2>Local Network</h2>

    <p>The second premium feature allows you to use your local network connection (wifi) without internet to manage your devices in your plan.</p>

    <p>To be able to use this feature, you must know the IP address of your device and you must be able to set up local users on your device. No internet connection is necessary, so this feature can be a really useful tool for controlling devices in a closed environment.</p>

    <p>The purchase and the payment for this can be made in the app – one off payment, via Google PlayStore.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Webkey: Headless version',
    link: '/webkey-headless',
    image: '/Webkey-how-to-root.jpg'
  },
  {
    id: 2,
    title: 'Why Choose Webkey for Your Small Business?',
    link: '/why-webkey-small-business',
    image: '/243A2909-0-1920x1080.jpg'
  }
]
</script>
