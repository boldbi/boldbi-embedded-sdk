## Bold BI

`Embedded BI` is the integration of customized dashboards into an application, making data visualization more powerful and easier to manage. It allows you to interact with data visualizations and gain business insights from a single application. Bold BI is a powerful tool for creating embedded dashboards.

## Getting Started
1. Install the BoldBI-Embedded-SDK package in your application using below command.
```
npm install -save @boldbi/boldbi-embedded-sdk
```
2. Then include the following script links in your index.html or root web page
```
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
```
3. If you have already using jquery version other than `1.10.2` or may be use different version in future. Use the `jQuery.noConflict()` and apply to `window.bb$` as like in following order. And also include the `jquery.easing` script inside bb$ ready function.
```
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript">window.bb$ = jQuery.noConflict();</script>
  <script>
      bb$(document).ready(function () {
          bb$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
      });
  </script>
  <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
```
4. You could import the boldbi-embedded-sdk package into your application as below.
```
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
```
5. Then, you could use that `BoldBI` instance for creating object with respective values. For more details please go through the `getting started with npm` section from [here](https://help.boldbi.com/embedded-bi/javascript-based/getting-started-with-npm/#create-bold-bi-instance).

## Demos

### Online Demos

Take a look at the `Bold BI Embedded samples` live demo [here](https://samples.boldbi.com/embed).

## Documentation

For complete `Bold BI SDK Embedding with NPM` documentation, please visit [https://help.boldbi.com/embedded-bi/javascript-based//getting-started-with-npm](https://help.boldbi.com/embedded-bi/javascript-based/getting-started-with-npm)

### Offline Demos

Download our Bold BI Platform installer from [here](https://www.boldbi.com/embedded/pricing/).

## Support

In case of any questions regarding the use of `Bold BI Embedding`, please [contact us](mailto:support@boldbi.com) by sending your queries.

## Release Notes

Refer the `Bold BI` Product Release Notes in [online Release Notes at Bold BI](https://www.boldbi.com/release-history/).

## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use).