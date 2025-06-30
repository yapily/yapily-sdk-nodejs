# YapilyApi.NotificationsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEventSubscription**](NotificationsApi.md#createEventSubscription) | **POST** /notifications/event-subscriptions | Create Event Subscription
[**deleteEventSubscriptionById**](NotificationsApi.md#deleteEventSubscriptionById) | **DELETE** /notifications/event-subscriptions/{eventTypeId} | Delete Event Subscription
[**getEventSubscriptionById**](NotificationsApi.md#getEventSubscriptionById) | **GET** /notifications/event-subscriptions/{eventTypeId} | Get Event Subscription
[**getEventSubscriptions**](NotificationsApi.md#getEventSubscriptions) | **GET** /notifications/event-subscriptions | Get Event Subscriptions



## createEventSubscription

> ApiResponseOfEventSubscriptionResponse createEventSubscription(eventSubscriptionRequest, opts)

Create Event Subscription

Used to subscribe to notifications relating to a specified event type.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.NotificationsApi();
let eventSubscriptionRequest = new YapilyApi.EventSubscriptionRequest(); // EventSubscriptionRequest | 
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.createEventSubscription(eventSubscriptionRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventSubscriptionRequest** | [**EventSubscriptionRequest**](EventSubscriptionRequest.md)|  | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiResponseOfEventSubscriptionResponse**](ApiResponseOfEventSubscriptionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventSubscriptionById

> ApiResponseOfEventSubscriptionDeleteResponse deleteEventSubscriptionById(eventTypeId, opts)

Delete Event Subscription

Used to unsubscribe to notifications relating to a specified event type.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.NotificationsApi();
let eventTypeId = "eventTypeId_example"; // String | Unique identifier of the event type (for which notifications will be sent). 
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID for which event type will be deleted
};
apiInstance.deleteEventSubscriptionById(eventTypeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | **String**| Unique identifier of the event type (for which notifications will be sent).  | 
 **subApplication** | **String**| The sub-application ID for which event type will be deleted | [optional] 

### Return type

[**ApiResponseOfEventSubscriptionDeleteResponse**](ApiResponseOfEventSubscriptionDeleteResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventSubscriptionById

> ApiResponseOfEventSubscriptionResponse getEventSubscriptionById(eventTypeId, opts)

Get Event Subscription

Used to get details of your subscription to a specified event type.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.NotificationsApi();
let eventTypeId = "eventTypeId_example"; // String | Unique identifier of the event type (for which notifications will be sent). 
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getEventSubscriptionById(eventTypeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | **String**| Unique identifier of the event type (for which notifications will be sent).  | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiResponseOfEventSubscriptionResponse**](ApiResponseOfEventSubscriptionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventSubscriptions

> ApiListResponseOfEventSubscriptionResponse getEventSubscriptions(opts)

Get Event Subscriptions

Get all event subscriptions that your application is subscribed to

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.NotificationsApi();
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID for which all event subscriptions will be returned
};
apiInstance.getEventSubscriptions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subApplication** | **String**| The sub-application ID for which all event subscriptions will be returned | [optional] 

### Return type

[**ApiListResponseOfEventSubscriptionResponse**](ApiListResponseOfEventSubscriptionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

