# Bold BI

`Embedded BI` is the integration of customized dashboards into an application, making data visualization more powerful and easier to manage. It allows you to interact with data visualizations and gain business insights from a single application. Bold BI is a powerful tool for creating embedded dashboards.

## Getting Started

* Install the BoldBI-Embedded-SDK package in your application using below command.

```bash
npm install -save @boldbi/boldbi-embedded-sdk
```

* You could import the boldbi-embedded-sdk package into your application as below.

```bash
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
```

* Then, you could use that `BoldBI` instance for creating object with respective values. For more details please go through the `getting started with npm` section from [here](https://help.boldbi.com/embedding-options/embedding-using-npm-package/#create-bold-bi-instance?utm_source=github&utm_medium=backlinks).

## Demos

### Online Demos

Take a look at the `Bold BI Embedded samples` live demo [here](https://samples.boldbi.com/embed?utm_source=github&utm_medium=backlinks).

## Documentation

For complete `Bold BI SDK Embedding with NPM` documentation, please visit this [link](https://help.boldbi.com/embedding-options/embedding-using-npm-package/?utm_source=github&utm_medium=backlinks).

### Offline Demos

Download our Bold BI Platform installer from [here](https://www.boldbi.com/account?utm_source=github&utm_medium=backlinks).

## Support

In case of any questions regarding the use of `Bold BI Embedding`, please [contact us](mailto:support@boldbi.com) by sending your queries.

## Release Notes

Please refer to the `Bold BI` Product Release Notes on this [Release History](https://www.boldbi.com/release-history/?utm_source=github&utm_medium=backlinks) page.

### Improvement

* Iframe Embedding - Provided an API to enable the AI Assistant feature for both the dashboard viewer and designer.
* Added API member support for multi-localization in the SDK-based embedding.
* Added a mobile view property that allows users to disable mobile view when the browser width reaches a specified pixel threshold for both SDK-based and Iframe embedding.

### Bug

* Fixed an issue where an invalid error message was displayed when the Group-based Authorization settings were incorrect in the server settings for SDK-based embedding.

## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use?utm_source=github&utm_medium=backlinks).
