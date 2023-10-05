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
3. Then, you could use that `BoldBI` instance for creating object with respective values. For more details please go through the `getting started with npm` section from [here](https://help.boldbi.com/embedded-bi/javascript-based/getting-started-with-npm/#create-bold-bi-instance).

## Demos

### Online Demos

Take a look at the `Bold BI Embedded samples` live demo [here](https://samples.boldbi.com/embed).

## Documentation

For complete `Bold BI SDK Embedding with NPM` documentation, please visit [https://help.boldbi.com/embedded-bi/javascript-based/getting-started-with-npm](https://help.boldbi.com/embedded-bi/javascript-based/getting-started-with-npm)

### Offline Demos

Download our Bold BI Platform installer from [here](https://www.boldbi.com/pricing/).

## Support

In case of any questions regarding the use of `Bold BI Embedding`, please [contact us](mailto:support@boldbi.com) by sending your queries.

## Release Notes

Refer the `Bold BI` Product Release Notes in [online Release Notes at Bold BI](https://www.boldbi.com/release-history/).

**Improvements**

* Provided CSV export support for dashboards in JavaScript-based embedding.
* By making embed_timestamp an optional parameter for token-based SSO embedding, the expiration date for the Iframe Signature URL is extended.

**New Features**

* Provided support to import the user into Bold BI while doing group-based authorization with Azure AD and AWS in JavaScript-based embedding 
* Provided support to embed multiple widgets in a single instance call in JavaScript-based embedding. 


## License Information

For licensing information about `Bold BI Embedding`, Take a look at the Bold BI License Agreements from [here](https://www.boldbi.com/terms-of-use).
