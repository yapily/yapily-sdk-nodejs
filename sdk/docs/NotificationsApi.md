# YapilyApi.NotificationsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEventSubscription**](NotificationsApi.md#createEventSubscription) | **POST** /notifications/event-subscriptions | Create Event Subscription
[**deleteEventSubscriptionById**](NotificationsApi.md#deleteEventSubscriptionById) | **DELETE** /notifications/event-subscriptions/{eventTypeId} | Delete Event Subscription
[**getEventSubscriptionById**](NotificationsApi.md#getEventSubscriptionById) | **GET** /notifications/event-subscriptions/{eventTypeId} | Get Event Subscription
[**getEventSubscriptions**](NotificationsApi.md#getEventSubscriptions) | **GET** /notifications/event-subscriptions | Get Event Subscriptions



## createEventSubscription

> ApiResponseOfEventSubscriptionResponse createEventSubscription(eventSubscriptionRequest)

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
apiInstance.createEventSubscription(eventSubscriptionRequest, (error, data, response) => {
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

### Return type

[**ApiResponseOfEventSubscriptionResponse**](ApiResponseOfEventSubscriptionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventSubscriptionById

> ApiResponseOfEventSubscriptionDeleteResponse deleteEventSubscriptionById(eventTypeId)

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
let eventTypeId = "eventTypeId_example"; // String | Unique identifier of the event type (for which notifications will be sent)
apiInstance.deleteEventSubscriptionById(eventTypeId, (error, data, response) => {
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
 **eventTypeId** | **String**| Unique identifier of the event type (for which notifications will be sent) | 

### Return type

[**ApiResponseOfEventSubscriptionDeleteResponse**](ApiResponseOfEventSubscriptionDeleteResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventSubscriptionById

> ApiResponseOfEventSubscriptionResponse getEventSubscriptionById(eventTypeId)

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
let eventTypeId = "eventTypeId_example"; // String | Unique identifier of the event type (for which notifications will be sent)
apiInstance.getEventSubscriptionById(eventTypeId, (error, data, response) => {
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
 **eventTypeId** | **String**| Unique identifier of the event type (for which notifications will be sent) | 

### Return type

[**ApiResponseOfEventSubscriptionResponse**](ApiResponseOfEventSubscriptionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventSubscriptions

> ApiListResponseOfEventSubscriptionResponse getEventSubscriptions()

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
apiInstance.getEventSubscriptions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiListResponseOfEventSubscriptionResponse**](ApiListResponseOfEventSubscriptionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

