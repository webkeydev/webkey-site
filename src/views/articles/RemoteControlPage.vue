<template>
  <ArticleTemplate
    title="Remote Control – non rooted device"
    hero-image="/succesfull_connection-fin-1.jpg"
    date="2021-11-05"
    :related-articles="relatedArticles"
  >
    <p>Webkey gives you the possibility to remotely control your devices without rooting them and without add-ons. How? Let's have a look!</p>

    <p>Remotely controlling your devices requires special permission and there are different technical limitations from the developers perspective There were three options to gain control with Webkey and we have now added a new one to allow you remotely control your devices.</p>

    <p>You may gain access to remote control by the following steps:</p>

    <ol>
      <li>If your phone is compatible with Samsung Knox</li>
      <li>If the manufacturer of your device has certified our app</li>
      <li>With rooted devices</li>
      <li>Accessibility service</li>
    </ol>

    <p>The accessibility service can be set-up by you and it does not require add-ons or complex processes on your end.</p>

    <h3>How to activate?</h3>

    <p>To activate this service, you need to follow these steps:</p>

    <p>1. Open Webkey on your device and go to permissions in the menu.</p>
    <p>2. Choose the control permission</p>
    <p>3. Go to the Accessibility menu and find Webkey.</p>
    <p>4. Switch on the "use service" option for Webkey. Our app will ask for permissions as shown on the image.</p>
    <p>5. Switch on use service! Voila! You can now control the device remotely.</p>

    <h3>Note</h3>

    <p>Please note that this option has some limitations. For example it only works with Android O (26) and above. There may be device brand specific limitations which can cause the Accessibility permission to be deactivated. For example in some Samsung and Vivo devices this permission may be disabled after the screen is locked. For any brands with limitations we recommend rooting the device for using remote control.</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'Legacy screen stream',
    link: '/legacy-screen-stream',
    image: '/Webkey-Stills-part2-0098-1920x1080.jpg'
  },
  {
    id: 2,
    title: 'Pricing overview',
    link: '/pricing-overview',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg'
  }
]
</script>
