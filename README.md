## Bold BI

`Embedded BI` is the integration of customized dashboards into an application, making data visualization more powerful and easier to manage. It allows you to interact with data visualizations and gain business insights from a single application. Bold BI is a powerful tool for creating embedded dashboards.

## Getting Started
1. Install the BoldBI-Embedded-SDK package in your application using below command.
```
npm install -save @boldbi/boldbi-embedded-sdk
```

2. You could import the boldbi-embedded-sdk package into your application as below.
```
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
```
3. Then, you could use that `BoldBI` instance for creating object with respective values. For more details please go through the `getting started with npm` section from [here](https://help.boldbi.com/embedding-options/embedding-using-npm-package/#create-bold-bi-instance).

## Demos

### Online Demos

Take a look at the `Bold BI Embedded samples` live demo [here](https://samples.boldbi.com/embed).

## Documentation

For complete `Bold BI SDK Embedding with NPM` documentation, please visit this [link](https://help.boldbi.com/embedding-options/embedding-using-npm-package/).

### Offline Demos

Download our Bold BI Platform installer from [here](https://www.boldbi.com/account).

## Support

In case of any questions regarding the use of `Bold BI Embedding`, please [contact us](mailto:support@boldbi.com) by sending your queries.

## Release Notes

Please refer to the `Bold BI` Product Release Notes on this [Release History](https://www.boldbi.com/release-history/) page.

**Bug**
 
* Hide RefreshSettings button in JS based data source embedding.
* Fixed issue where deleted views were still appearing in embedded dashboards.
* Fixed a bug that prevented users from using the 'Mark as default' button on embedded dashboards loaded using the loadView() method.
* Fixed the issue where the multi-tab dashboard was not rendering properly when the child dashboard is private without the authorized API in JS Embedding.
* Fixed issue in JS based embedding where saved view was not updated on BoldBI server.

## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use).
