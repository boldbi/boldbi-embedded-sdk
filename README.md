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

### Bugs

* Restricted dashboard embedding through the authorization server when the user is not verified.
* Fixed the issue where embedding API methods were not functioning properly for multi-tab dashboards.
* Resolved an issue where dashboards were not rendering when category-level permissions were applied to a group for Anonymous User.

### Improvements

* Introduced a new API member to hide error messages.
* Provided a new API to customize the AI Co-Pilot title.
* Introduced a new member called embedToken to securely store the access token generated from the embedAuthorize API, enabling support to render dashboards.
* Provided event Support that selected tab will be loaded as the default tab.
* Resolved a security vulnerability by upgrading jQuery from version 1.10.2 to version 3.5.0 and jquery.UI from version 1.12 to 1.14

## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use?utm_source=github&utm_medium=backlinks).
