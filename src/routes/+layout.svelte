<script lang="ts">
  import '../app.postcss';
  import HEADER from '../components/header.svelte';
  import FOOTER from '../components/footer.svelte';
  import '@beyonk/gdpr-cookie-consent-banner/dist/style.css';
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';

  let gdprBanner;
  let choices = {
    necessary: {
      label: 'Unbedingt erforderliche Cookies',
      description:
        'Diese Cookies werden benötigt, damit Sie solch grundlegenden Funktionen wie Sicherheit, Identitätsprüfung und Netzwerkmanagement nutzen können. Sie können daher nicht deaktiviert werden.',
      value: true
    },
    tracking: {
      label: 'Funktionale Cookies',
      description:
        'Funktionale Cookies werden verwendet, um bereits getätigte Angaben zu speichern und darauf basierend verbesserte und personalisierte Funktionen anzubieten. ',
      value: false
    },
    analytics: {
      label: 'Analytics-Cookies',
      description:
        'Wir verwenden diese Cookies, um zu verstehen, wie unsere Website genutzt wird, um Fehler zu entdecken und die Funktionalität der Website zu verbessern.',
      value: false
    },
    marketing: {
      label: 'Cookies für Marketingzwecke',
      description:
        'Cookies für Marketingzwecke werden verwendet, um die Effektivität von Werbung zu messen, Interessen von Besuchern zu erfassen und Werbeanzeigen an deren persönliche Bedürfnisse anzupassen.',
      value: false
    }
  };

  function showCookieBanner() {
    gdprBanner.show();
  }
</script>

<HEADER />

<div class="mainContentContainer">
  <slot />
</div>

<FOOTER openCookieSettings={showCookieBanner} />

<GdprBanner
  bind:this={gdprBanner}
  {choices}
  showEditIcon={false}
  acceptLabel="Zustimmen"
  rejectLabel="Ablehnen"
  settingsLabel="Zu den Einstellungen"
  closeLabel="Einstellungen schließen"
  cookieName="hahnheim-esports"
  heading="Wir verwenden Cookies..."
  description="Wir verwenden Cookies und ähnliche Technologien, um Dienste bzw. Funktionen auf unserer Website zu gewährleisten und um zu verstehen, wie Sie diese nutzen. Indem Sie auf „Zustimmen“ klicken, stimmen Sie deren Verwendung zu."
/>

<style lang="postcss">
  .mainContentContainer {
    min-height: calc(100vh - 260px);
  }
</style>
