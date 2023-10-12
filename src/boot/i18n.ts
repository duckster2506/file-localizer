import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
