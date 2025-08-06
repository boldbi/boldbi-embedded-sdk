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

* Resolved the issue of multiple error messages appearing in multi-tab dashboards during SDK-based embedding.
* Improved error handling by displaying a proper error message when an invalid widget ID format is passed in widget-based SDK embedding.
* Added appropriate error messages when either the dashboard ID or view ID is missing in SDK-based token embedding.
* Fixed the issue where the header of a multi-tab dashboard was not displaying correctly in SDK-based token embedding.
* Resolved the issue where long tab names in multi-tab dashboards were getting truncated in SDK-based embedding.
* Fixed the issue where data caching was not functioning correctly in draft mode for SDK-based embedding.
* Addressed UI spacing issues in Pinboard SDK-based embedding.
* Fixed the issue where dashboards rendered blank when a data source ID was provided in viewer SDK-based embedding.
* Fixed the issue where a dashboard was not correctly saved as public when saving a draft using the saveDashboard method by properly setting the isPublic parameter to true in SDK-based embedding.
* Fixed the issue when rendering the multi-tab dashboard using same dashboard IDs in SDK-based embedding.
* Fixed the issue where the AI Assistant was not functioning unless summarization was initialized in SDK-based embedding.
* Fixed an issue where loading multiple widgets with the same widget name caused an infinite loading state.

### Improvements

* Introduced a new boolean member, hideChatHelp, to control the visibility of the help icon in the AI Assistant.
* Enable seamless transition between dashboard viewer to designer modes and vice versa in embedded application.
* Provided custom brand name in the AI Assistant for SDK-based embedding

## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use?utm_source=github&utm_medium=backlinks).
