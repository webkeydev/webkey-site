<template>
  <div class="cookie-policy-page">
    <AppHeader theme="light" />

    <!-- Cookie Policy Content -->
    <section class="cookie-policy-section">
      <div class="cookie-policy-container">
        <div class="content-wrapper">
          <h1>Cookie Policy</h1>
          <h5>Webkey Cookie Policy</h5>
          <h5>Last Updated Date: January 30, 2018</h5>
          <p>&nbsp;</p>
          <p>In common with most other websites, Webkey Development Kft. ("Webkey", "we" or "us") uses cookies to provide a seamless user experience and help us understand how people use our website and mobile applications so that we can keep improving our platform and service. In the spirit of transparency, we have created this cookie policy (in accordance with our privacy policy, click here) to provide you with clear and explicit information about the cookies that we use and your choices when it comes to these technologies.</p>
          <p>This cookie policy applies to our website and mobile applications (collectively, the "Website"). By accessing and continuing to use the Website on any device, you are consenting to our use of cookies in accordance with this cookie policy. If you do not agree to our use of cookies in this way, you should set your browser settings accordingly (see below: How can I control or delete cookies?).</p>

          <div class="content-section">
            <h2>What are cookies and what are they used for?</h2>
            <p>
              A cookie is a small string of information that the website you visit transfers to your computer for identification purposes. Cookies can be used to follow your activity throughout the Website and that information helps us to understand your preferences and improve your experience.
            </p>
            <p>
              Webkey cookies do not collect personal information from you, and we do not combine the general information collected through cookies with other personal information you may provide to personally identify you.
            </p>
          </div>

          <div class="content-section">
            <h2>What types of cookies do we use?</h2>
            <p>
              On the Website, both first-party and third-party cookies are allowed. First-party cookies are cookies that are set by Webkey. Third-party cookies are set by a domain other than ours.
            </p>
            <p>
              Webkey cookies may be session cookies and persistent cookies. Session cookies are temporary cookies that remain on your device only until you leave the Website. A persistent cookie remains on your device for the period specified in the cookie or until you manually delete it.
            </p>
            <p>
              Based on their function, our Website uses the following categories of cookies:
            </p>
            <p>
              <strong>Strictly necessary cookies (security, payment):</strong> These cookies are essential in order to enable you to move around the Website and use its features, such as accessing secure areas of the Website. Without these cookies, the services you have asked for, like shopping baskets or e-billing, cannot be provided.
            </p>
            <p>
              <strong>Performance cookies (analytics, A/B testing):</strong> These cookies allow us to recognize and count the number of visitors and to see how visitors move around the Website when they're using it. This helps us to improve the way the Website works, for example by making sure users are finding what they need easily.
            </p>
            <p>
              <strong>Functionality:</strong> These cookies allow the Website to remember the choices you make (such as your user name, language or the region you are in) to provide a more personalized online experience. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize. They may also be used to provide services you have asked for such as watching a video or asking questions and commenting thereon.
            </p>
            <p>
              <strong>Advertising/marketing cookies:</strong> These cookies are used to deliver adverts more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as to help measure the effectiveness of advertising campaigns. They are usually placed by advertising networks with Prezi's – as the Website operator's – permission. They remember that you have visited a website and this information is shared with other organisations such as advertisers. Quite often advertising cookies will be linked to site functionality provided by third parties.
            </p>
          </div>

          <div class="content-section">
            <h2>Cookies we use</h2>
            <p>
              We use Google Analytics as described in "<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses data when you use our partners' sites or apps</a>." You can prevent your data from being used by Google Analytics on websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on here</a>.
            </p>
            <p>
              <strong>Strictly necessary cookies:</strong> auth-session, admin-token (These cookies are necessary for the dashboard login, without these cookies it's impossible to login to the service and it's not possible to access these features.)
            </p>
            <p>
              <strong>Performance cookies:</strong> _ga (This cookie name is associated with Google Analytics. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports. By default it is set to expire after 2 years.), _gat (This cookie name is associated with Google Analytics, according to documentation it is used to throttle the request rate - limiting the collection of data on high traffic sites. It expires after 10 minutes.), _gid (Registers a unique ID that is used to generate statistical data on how the visitor uses the website.), collect (Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels.)
            </p>
            <p>
              <strong>Functionality:</strong> N/A
            </p>
            <p>
              <strong>Advertising/marketing cookies:</strong> _hjIncludedInSample (Hotjar cookie. This session cookie is set to let Hotjar know whether that visitor is included in the sample which is used to generate funnels. It expires after 1 year.), r/collect (Session cookie by Doubleclick for tracking visitor behaviour.)
            </p>
          </div>

          <div class="content-section">
            <h2>How can I control or delete cookies?</h2>
            <p>
              You can turn off all cookies, if you prefer not to receive them. You can also have your computer warn you whenever cookies are being used.
            </p>
            <p>
              Most internet browsers are initially set up to automatically accept cookies. You can change the settings to block cookies or to alert you when cookies are being sent to your device. There are a number of ways to manage cookies. Please refer to documentation provided with your web browser (e.g., Firefox, Safari, Chrome, or Internet Explorer) for information on enabling cookies. There are also software products available that can manage cookies for you. If you use different devices to view and access the Website (e.g. your computer, smartphone, tablet etc.) you will need to ensure that each browser on each device is adjusted to suit your cookie preferences.
            </p>
            <p>
              Please be aware, however, that when you choose to reject cookies, this choice may limit the functionality of the Website and you may lose access to some of its features.
            </p>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.cookie-policy-page {
  min-height: 100vh;
}

.cookie-policy-section {
  padding: 140px var(--padding-horizontal) 80px;
  background: #ffffff;
}

.cookie-policy-container {
  max-width: 1000px;
  margin: 0 auto;
}

.content-wrapper {
  padding: 0;
}

.content-wrapper h1 {
  font-family: 'DrukWide', sans-serif;
  font-size: 42px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 10px;
  line-height: 1.2;
  letter-spacing: 1px;
}

.content-wrapper h5 {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin: 0 0 5px;
}

.content-wrapper > p:first-of-type {
  margin-bottom: 40px;
}

.content-section {
  margin-bottom: 50px;
}

.content-section h2 {
  font-family: 'DrukWide', sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: #20242e;
  margin: 0 0 20px;
  line-height: 1.2;
  letter-spacing: 1px;
}

.content-section h3 {
  font-family: 'DrukWide', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #20242e;
  margin: 30px 0 15px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

.content-section p {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0 0 20px;
}

.content-section p:last-child {
  margin-bottom: 0;
}

.content-section ul {
  font-family: 'DecimaMonoPro', monospace;
  font-size: 16px;
  line-height: 28px;
  color: #20242e;
  margin: 0 0 20px;
  padding-left: 25px;
}

.content-section li {
  margin-bottom: 10px;
}

.content-section li:last-child {
  margin-bottom: 0;
}

.content-section a {
  color: #0066cc;
  text-decoration: none;
  transition: color 0.2s ease;
}

.content-section a:hover {
  color: #004499;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cookie-policy-section {
    padding: 120px 40px 60px;
  }

  .content-wrapper h1 {
    font-size: 36px;
  }

  .content-wrapper h5 {
    font-size: 13px;
  }

  .content-section h2 {
    font-size: 24px;
  }

  .content-section h3 {
    font-size: 18px;
  }

  .content-section p,
  .content-section ul {
    font-size: 15px;
    line-height: 26px;
  }
}

@media (max-width: 768px) {
  .cookie-policy-section {
    padding: 100px var(--padding-horizontal-mobile) 50px;
  }

  .content-wrapper h1 {
    font-size: 32px;
  }

  .content-wrapper h5 {
    font-size: 12px;
  }

  .content-wrapper > p:first-of-type {
    margin-bottom: 30px;
  }

  .content-section {
    margin-bottom: 40px;
  }

  .content-section h2 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .content-section h3 {
    font-size: 16px;
    margin: 25px 0 12px;
  }

  .content-section p,
  .content-section ul {
    font-size: 14px;
    line-height: 24px;
  }

  .content-section ul {
    padding-left: 20px;
  }

  .content-section li {
    margin-bottom: 8px;
  }
}
</style>
