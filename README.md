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

### Improvements

* Provided API key support.
* Provided API support to hide the Custom Expression button and dropdown button in the dashboard designer banner.
* Provided API support to hide the metric option.
* Provided method support in the while embedding multiple widgets at single instance by using loadMultipleWidgets from version 8.1.41.
* Introduced new method `removeInstance` to remove the filter widget instance.

### Bugs

* Shown the view Saved Filter Icon in the fullscreen mode.
* Fixed the issue where the more option is not hidden when access via widget selection and export is set false in the client side.
* Fixed the issue where the filter was not applying to the public dashboard in the programmatic Multitab dashboard embedding.
* Fixed an issue where the datacache was not worked in the token draft SDK-based embedding.
* Displayed an appropriate error message when invalid or empty widget names are provided in the loadMultipleWidgets method.
* Fixed an issue while loading the multiple dashboards by using same dashboard ID or path.
* Shown the proper state to the default view button in the SDK based embedding.

## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use?utm_source=github&utm_medium=backlinks).