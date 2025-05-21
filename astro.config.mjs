// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';

export default defineConfig({
  integrations: [
    tailwind(), 
    react(), 
    mdx(), 
    icon(),
    jopSoftwarecookieconsent({
      categories: {
        necessary: {
          readOnly: true,
          enabled: true,
        },
        analytics: {
          enabled: false,
        },
        marketing: {
          enabled: false,
        }
      },
      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Wir verwenden Cookies',
              description: 'Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Weitere Informationen zu Cookies erhalten Sie in unserer <a href="/datenschutz" class="cc__link">Datenschutzerklärung</a>.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur Notwendige',
              showPreferencesBtn: 'Einstellungen verwalten',
              footer: '<a href="/impressum">Impressum</a>'
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur Notwendige',
              savePreferencesBtn: 'Auswahl speichern',
              closeIconLabel: 'Schließen',
              sections: [
                {
                  title: 'Cookie-Nutzung',
                  description: 'Wir nutzen Cookies, um Ihre Erfahrung auf unserer Webseite zu verbessern. Einige Cookies sind für den Betrieb der Seite notwendig, während andere uns helfen, die Inhalte zu personalisieren und die Zugriffe auf unsere Webseite zu analysieren. Sie können Ihre Einstellungen jederzeit anpassen.'
                },
                {
                  title: 'Notwendige Cookies <span class="pm__badge">Immer aktiv</span>',
                  description: 'Diese Cookies sind für die Grundfunktionen der Webseite erforderlich und können nicht deaktiviert werden. Sie gewährleisten z.B. die sichere Anmeldung und grundlegende Seitenfunktionen.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analyse-Cookies',
                  description: 'Diese Cookies sammeln Informationen darüber, wie Sie unsere Webseite nutzen, welche Seiten Sie besuchen und welche Links Sie anklicken. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Marketing-Cookies',
                  description: 'Diese Cookies werden von uns und unseren Werbepartnern verwendet, um Ihnen relevante Werbung auf dieser und anderen Webseiten anzuzeigen. Sie speichern keine direkten persönlichen Informationen, basieren aber auf der eindeutigen Identifizierung Ihres Browsers und Internetgeräts.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'Weitere Informationen',
                  description: 'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Auswahlmöglichkeiten kontaktieren Sie uns bitte. Ihre Einwilligung gilt für die folgende Domain: beautomated.at <br>Weitere Details finden Sie in unserer <a href="/datenschutz" class="cc__link">Datenschutzerklärung</a>.',
                },
              ],
            },
          },
        },
      },
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      // Callbacks für spätere Script-Blockierung
      // onFirstConsent: ({cookie}) => { console.log('onFirstConsent', cookie); },
      // onConsent: ({cookie}) => { console.log('onConsent', cookie); },
      // onChange: ({cookie}) => { console.log('onChange', cookie); },
    }),
  ],
});
// https://astro.build/config

