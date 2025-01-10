"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successMessages = exports.errorMessages = void 0;
exports.errorMessages = {
    'EmbedModeInvalid': 'Invalid embedded mode.',
    'EmptyWidgetID': 'Widget id and name cannot not be empty.',
    'EmptyWidgetName': 'Widget name cannot not be empty.',
    'InvalidAllWidgetNames': 'All the widget names are invalid.',
    'UnableWidgetRender': 'Unable to render the widget in design mode.',
    'PinboardNameEmpty': 'The pinboard name cannot be empty.',
    'EmptyWidgetList': 'Please provide the widget details with the containerID in an array.',
    'ArrayWidgetNames': 'Unable to refresh the widget. The widgetName should be in an array.',
    'WidgetNameSpecialChar': 'Please avoid using special characters in widget name.',
    'InvalidDbrdAndWidget': 'Please provide a valid dashboard ID and widget ID.',
    'InvalidWidgetName': 'Please provide a valid widget name.',
    'InvalidDashboardID': 'Please provide a valid dashboard ID.',
    'InvalidChildDbrdID': 'Please provide a valid child dashboard ID.',
    'InvalidViewName': 'Please provide a valid view name.',
    'InvalidQueryString': 'Please provide a valid query string.',
    'EmptyViewDetails': 'View details must not be empty.',
    'InvalidViewID': 'Please provide a valid view ID.',
    'InvalidEmbedType': 'Invalid EmbedType.',
    'UnablePinboardRender': 'Unable to render the pinboard in design mode.',
    'InitFetch': 'Data fetching has been initiated.',
    'InvalidBoldBIURL': 'Invalid Bold BI serverUrl.',
    'EnvironmentMemberError': 'Server not found. If you are using Cloud BI Server, please ensure that the Environment member is set on the client side.',
    'ServerNotFound': 'server Not Found.',
    'InvalidDbrdDetails': 'The provided dashboard details are invalid.',
    'InvalidPinboardName': 'Please provide a valid pinboard name.',
    'AccessDeniedItem': 'Access denied for the item.',
    'NotRenderMultitabDashboard': 'A multitab dashboard cannot be rendered in designer mode.',
    'ErrorInBoldBIDesigner': 'BoldBIDashboardDesigner is not defined.',
    'DbrdDownloadError': 'There was an error while downloading the dashboards.',
    'bbEmbedNotDefined': 'bbEmbed is not defined.',
    'LayoutFailure': 'The change in layout failed due to ',
    'DragAndDropError': 'Drag and drop failure due to ',
    'DbrdPathTokenAPIError': 'The token API does not support rendering a dashboard with the specified dashboardPath.',
    'DataSourceTokenAPIError': 'The Token API does not support rendering the dashboard with the datasourceName.',
    'ViewNameTokenAPIError': 'The Token API does not support rendering a dashboard with the viewName.',
    'InvalidAccessToken': 'Please provide a valid access token.',
    'InvalidApiKey': 'Please provide a valid API Key.',
    'ViewDetailsNotFound': 'View details not found.',
    'WidgetNameTokenAPIError': 'The Token API does not support rendering widgets with the widgetName.',
    'EnsureServerOrSDKVersion': 'Unable to ensure the server version and SDK version for cloud environment.',
    'ErrorLoadMultipleWidget': 'Error: To render multiple widgets, please use the loadMultipleWidget() method.',
    'EmptyDbrdCreate': 'Please provide the DashboardId in BoldBI.Create().',
    'ExistedViewName': 'The view name already exists.',
    'InvalidReplyCommentID': 'Please provide a valid ID for the reply comment.',
    'InvalidCommentText': 'Please provide a comment that is valid.',
    'InvalidDbrdOrWidgetID': 'Please provide a valid dashboard or widget ID.',
    'InvalidCommentID': 'Please provide a valid comment ID.',
    'NetworkIssue': 'Not connected. Please check the network.',
    'NotFound': 'Not Found.',
    'ViewIDNotFound': 'The view id was not found. Please provide a valid view id.',
    'PageNotFound': 'The requested page could not be found (404).',
    'InternalServerError': 'Internal Server Error (500).',
    'UncaughtError': 'An uncaught error has occurred.',
    'AuthorizationServerMissing': 'Access has been denied because the authorization server URL is missing in the BoldBI.Create() method.',
    'InvalidEmbedContainerID': 'Please provide the valid embed container Id.',
    'EmptyServerURL': 'The server URL cannot be empty.',
    'InvalidServerURL': 'Please provide a valid server URL.',
    'InvalidDashboardPath': 'Invalid dashboard path: ',
    'EmptyDbrdOrViewID': 'Dashboard ID, path, and view ID cannot be empty.',
    'EmptyDatasourceDetails': 'Data source ID and name cannot be empty.',
    'MultitabDbrdWidgetRender': 'Unable to render the widget from multitab dashboard.',
    'UnableAddWidget': 'Unable to add the widget due to ',
    'PageUnavailable': 'The page you are looking for was unavailable.',
    'ObjectRefNotSet': 'Object reference not set to an instance of an object.',
    'AvoidSplChar': 'Please avoid using special characters.',
    'EmptyViewName': 'Please enter the name of the view.',
    'NotMatchVersion': 'The Embedded SDK version does not match the Bold BI Server version.',
    'CantReadNull': 'Cannot read property append of null',
    'NotImplementedMethod': 'The LoadDashboardView method has not been implemented.',
    'InvalidThemeName': 'Please provide a valid dashboard theme name',
    'BoldBIEmbedded': 'BoldBI Embedded: ',
    'ProvideCreatePermission': 'Please provide permission to create the dashboard.'
};
exports.successMessages = {
    'UpdateFilterViewMsg': 'and you can add custom functionalities using viewId:',
    'NonDefaultViewInfoMsg': 'If enabled, the current view will be set as your default view for this dashboard.',
    'DefaultViewInfoMsg': 'Based on your dashboard settings in Bold BI, these filters will be applied by default the next time the dashboard is rendered.',
    'MatchVersion': 'The embedded SDK version matches the Bold BI Server version.'
};
