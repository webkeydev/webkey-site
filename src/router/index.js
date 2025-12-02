import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PricingPage from '../views/PricingPage.vue'
import FeaturesPage from '../views/FeaturesPage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import FaqPage from '../views/FaqPage.vue'
import KnowledgeBasePage from '../views/KnowledgeBasePage.vue'
import AlreadyUsingWebkeyPage from '../views/AlreadyUsingWebkeyPage.vue'
import SignOurApkPage from '../views/SignOurApkPage.vue'
import DigitalSignagePage from '../views/DigitalSignagePage.vue'
import WebkeyForDigitalSignagePage from '../views/WebkeyForDigitalSignagePage.vue'
import PartnersPage from '../views/PartnersPage.vue'
import ServerPage from '../views/ServerPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'
import EditionsPage from '../views/EditionsPage.vue'
import BusinessPage from '../views/BusinessPage.vue'
import TermsPage from '../views/TermsPage.vue'
import CookiePolicyPage from '../views/CookiePolicyPage.vue'

// Article pages
import RenameYourDevicePage from '../views/articles/RenameYourDevicePage.vue'
import LocationTrackingPage from '../views/articles/LocationTrackingPage.vue'
import ScreenMirroringPage from '../views/articles/ScreenMirroringPage.vue'
import PricingOverviewPage from '../views/articles/PricingOverviewPage.vue'
import RemoteControlPage from '../views/articles/RemoteControlPage.vue'
import LegacyScreenStreamPage from '../views/articles/LegacyScreenStreamPage.vue'
import PartnershipPage from '../views/articles/PartnershipPage.vue'
import SmallBusinessPage from '../views/articles/SmallBusinessPage.vue'
import PremiumFeaturesPage from '../views/articles/PremiumFeaturesPage.vue'
import HeadlessVersionPage from '../views/articles/HeadlessVersionPage.vue'
import FirewallSettingsPage from '../views/articles/FirewallSettingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingPage
  },
  {
    path: '/features',
    name: 'Features',
    component: FeaturesPage
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsPage
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqPage
  },
  {
    path: '/knowledge-base',
    name: 'KnowledgeBase',
    component: KnowledgeBasePage
  },
  {
    path: '/already-using-webkey',
    name: 'AlreadyUsingWebkey',
    component: AlreadyUsingWebkeyPage
  },
  {
    path: '/sign-our-apk',
    name: 'SignOurApk',
    component: SignOurApkPage
  },
  {
    path: '/digital-signage',
    name: 'DigitalSignage',
    component: DigitalSignagePage
  },
  {
    path: '/webkey-for-digital-signage',
    name: 'WebkeyForDigitalSignage',
    component: WebkeyForDigitalSignagePage
  },
  {
    path: '/partners',
    name: 'Partners',
    component: PartnersPage
  },
  {
    path: '/server',
    name: 'Server',
    component: ServerPage
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsPage
  },
  {
    path: '/editions',
    name: 'Editions',
    component: EditionsPage
  },
  {
    path: '/business',
    name: 'Business',
    component: BusinessPage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: TermsPage,
    alias: '/terms'
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicyPage
  },
  // Article routes
  {
    path: '/rename-your-device',
    name: 'RenameYourDevice',
    component: RenameYourDevicePage
  },
  {
    path: '/locationtracking',
    name: 'LocationTracking',
    component: LocationTrackingPage
  },
  {
    path: '/screen-mirroring-webkey',
    name: 'ScreenMirroring',
    component: ScreenMirroringPage
  },
  {
    path: '/pricing-overview',
    name: 'PricingOverview',
    component: PricingOverviewPage
  },
  {
    path: '/remote-control-non-rooted',
    name: 'RemoteControl',
    component: RemoteControlPage
  },
  {
    path: '/legacy-screen-stream',
    name: 'LegacyScreenStream',
    component: LegacyScreenStreamPage
  },
  {
    path: '/partnership-everengine',
    name: 'Partnership',
    component: PartnershipPage
  },
  {
    path: '/why-webkey-small-business',
    name: 'SmallBusiness',
    component: SmallBusinessPage
  },
  {
    path: '/premium-features',
    name: 'PremiumFeatures',
    component: PremiumFeaturesPage
  },
  {
    path: '/webkey-headless',
    name: 'HeadlessVersion',
    component: HeadlessVersionPage
  },
  {
    path: '/firewall-and-network-settings',
    name: 'FirewallSettings',
    component: FirewallSettingsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
