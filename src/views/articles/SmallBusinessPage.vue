<template>
  <ArticleTemplate
    title="Why Choose Webkey for Your Small Business?"
    hero-image="/243A2909-0-1920x1080.jpg"
    date="2021-10-12"
    :related-articles="relatedArticles"
  >
    <p>If you are a small business owner, we at Webkey understand your day to day challenges. Difficult decisions need to be made on a daily basis and you need to be able to trust your partners, collaborators and vendors. Unlike our large competitors, we are in a very similar situation ourselves and this makes us ready to offer you the service that truly helps your business grow.</p>

    <p>Across almost all industries, we have seen the rapid growth of Android and the need for remote control go hand-in-hand. The small business owners cannot afford to stay behind in this race: you may need to perform maintenance on the Android devices from a central location or gain insight from the movement of the devices in your fleet with our GPS tracking – The challenges are different, but Webkey has an offer for you.</p>

    <p>The Standard Edition of Webkey has many of these solutions ready for you. We encourage every small business to give it a try – it is free for one device and always will be. Just go to Google Playstore and download it. Easy! The Standard Edition of our app is available for more than one device in our stair-step pricing model both as part of our Home and our Professional Pricing plans.</p>

    <p>If you do not find what you are looking for in the Standard Edition, we are always ready to listen to you and work out a solution. The Business Edition of Webkey (offered as part of the Professional Plus pricing plan) has many tailormade solutions available. This edition of our app practically is an app that is created to your business needs. As such, we are always delighted to listen to you: even if there is no immediate solution, we believe that working together we can achieve more. Feel free to get in touch with us today, we would love to hear from your business!</p>
  </ArticleTemplate>
</template>

<script setup>
import ArticleTemplate from '../../components/ArticleTemplate.vue'

const relatedArticles = [
  {
    id: 1,
    title: 'New: Premium features in app',
    link: '/premium-features',
    image: '/tools-bg.jpg'
  },
  {
    id: 2,
    title: 'Partnership – Everengine',
    link: '/partnership-everengine',
    image: '/Webkey-Stills-part2-0002-1920x1080.jpg'
  }
]
</script>
