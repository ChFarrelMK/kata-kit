import { css } from 'styled-components';

export default css`
  @charset "UTF-8";

  @font-face {
    font-family: 'kata';
    src: url('https://kata.blob.core.windows.net/static/kata-font-icon/kata.eot');
    src: url('https://kata.blob.core.windows.net/static/kata-font-icon/kata.eot?#iefix')
        format('embedded-opentype'),
      url('https://kata.blob.core.windows.net/static/kata-font-icon/kata.woff')
        format('woff'),
      url('https://kata.blob.core.windows.net/static/kata-font-icon/kata.ttf')
        format('truetype'),
      url('https://kata.blob.core.windows.net/static/kata-font-icon/kata.svg#kata')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [data-icon]:before {
    font-family: 'kata' !important;
    content: attr(data-icon);
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [class^='icon-']:before,
  [class*=' icon-']:before {
    font-family: 'kata' !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-arrow:before {
    content: '\6d';
  }
  .icon-close:before {
    content: '\6e';
  }
  .icon-dict:before {
    content: '\6f';
  }
  .icon-info:before {
    content: '\70';
  }
  .icon-more:before {
    content: '\71';
  }
  .icon-phrase:before {
    content: '\72';
  }
  .icon-remove:before {
    content: '\73';
  }
  .icon-add:before {
    content: '\62';
  }
  .icon-analytics:before {
    content: '\64';
  }
  .icon-bot:before {
    content: '\66';
  }
  .icon-dashboard:before {
    content: '\68';
  }
  .icon-docs:before {
    content: '\6a';
  }
  .icon-entity:before {
    content: '\6b';
  }
  .icon-settings:before {
    content: '\76';
  }
  .icon-training:before {
    content: '\78';
  }
  .icon-trait:before {
    content: '\79';
  }
  .icon-log:before {
    content: '\41';
  }
  .icon-nlu:before {
    content: '\43';
  }
  .icon-cms:before {
    content: '\44';
  }
  .icon-remove-tag:before {
    content: '\45';
  }
  .icon-test-nlu:before {
    content: '\77';
  }
  .icon-copy:before {
    content: '\46';
  }
  .icon-train:before {
    content: '\47';
  }
  .icon-trash:before {
    content: '\48';
  }
  .icon-video:before {
    content: '\61';
  }
  .icon-error:before {
    content: '\69';
  }
  .icon-warning:before {
    content: '\42';
  }
  .icon-methods:before {
    content: '\63';
  }
  .icon-users:before {
    content: '\67';
  }
  .icon-deployments:before {
    content: '\6c';
  }
  .icon-version-lists:before {
    content: '\75';
  }
  .icon-forms:before {
    content: '\7a';
  }
  .icon-error-log:before {
    content: '\49';
  }
  .icon-test-chatbot:before {
    content: '\4a';
  }
  .icon-settings-cms:before {
    content: '\74';
  }
  .icon-tick:before {
    content: '\4c';
  }
  .icon-refresh:before {
    content: '\4d';
  }
  .icon-download:before {
    content: '\4e';
  }
  .icon-arrow-right:before {
    content: '\4f';
  }
  .icon-view:before {
    content: '\50';
  }
  .icon-arrow-left:before {
    content: '\51';
  }
  .icon-edit:before {
    content: '\65';
  }
  .icon-ok:before {
    content: '\52';
  }
  .icon-account:before {
    content: '\4b';
  }
  .icon-api:before {
    content: '\53';
  }
  .icon-audio:before {
    content: '\54';
  }
  .icon-button:before {
    content: '\55';
  }
  .icon-carousel:before {
    content: '\56';
  }
  .icon-command:before {
    content: '\57';
  }
  .icon-conversation:before {
    content: '\58';
  }
  .icon-dynamic-carousel:before {
    content: '\59';
  }
  .icon-fallback:before {
    content: '\5a';
  }
  .icon-image:before {
    content: '\30';
  }
  .icon-image-map:before {
    content: '\31';
  }
  .icon-location:before {
    content: '\32';
  }
  .icon-method:before {
    content: '\33';
  }
  .icon-nlus:before {
    content: '\34';
  }
  .icon-schedule:before {
    content: '\35';
  }
  .icon-sticker:before {
    content: '\36';
  }
  .icon-tapescript:before {
    content: '\37';
  }
  .icon-text:before {
    content: '\38';
  }
  .icon-videos:before {
    content: '\39';
  }
  .icon-text-data:before {
    content: '\21';
  }
  .icon-drag:before {
    content: '\22';
  }
  .icon-invoice:before {
    content: '\23';
  }
  .icon-overal-analytic:before {
    content: '\24';
  }
  .icon-password:before {
    content: '\25';
  }
  .icon-pricing:before {
    content: '\26';
  }
  .icon-subscription:before {
    content: '\27';
  }
  .icon-admin:before {
    content: '\28';
  }
  .icon-building:before {
    content: '\29';
  }
  .icon-email:before {
    content: '\2a';
  }
  .icon-account-type:before {
    content: '\2b';
  }
  .icon-success:before {
    content: '\2c';
  }
  .icon-save:before {
    content: '\2d';
  }

  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSansRounded-100.otf');
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSansRounded-300.otf');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSansRounded-500.otf');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSansRounded-700.otf');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSansRounded-900.otf');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSansRounded-1000.otf');
    font-style: normal;
    font-weight: 1000;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-100.otf');
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-100Italic.otf');
    font-style: italic;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-300.otf');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-300Italic.otf');
    font-style: italic;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-500.otf');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-500Italic.otf');
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-700.otf');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-700Italic.otf');
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-900.otf');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('https://kata.blob.core.windows.net/static/museo-sans/files/MuseoSans-900Italic.otf');
    font-style: italic;
    font-weight: 900;
  }
`;
