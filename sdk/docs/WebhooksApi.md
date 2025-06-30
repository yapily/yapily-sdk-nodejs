# YapilyApi.WebhooksApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /webhook/events/{webhook_id} | Delete Webhook Event
[**getRegisteredWebhooks**](WebhooksApi.md#getRegisteredWebhooks) | **GET** /webhook/events | Retrieve All Webhook Events
[**getWebhookEventsCategories**](WebhooksApi.md#getWebhookEventsCategories) | **GET** /webhook/events/categories | Get Webhook Categories
[**registerWebhook**](WebhooksApi.md#registerWebhook) | **POST** /webhook/events | Register Webhook Event
[**webhookSecretReset**](WebhooksApi.md#webhookSecretReset) | **POST** /webhook/secrets/{webhook_id} | Reset Webhook Secret



## deleteWebhook

> InlineResponse2005 deleteWebhook(webhookId, opts)

Delete Webhook Event

Delete a webhook event for a specified webhook ID, unregistering it from receiving any further notifications for the subscribed event categories in your application.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.WebhooksApi();
let webhookId = "webhookId_example"; // String | Registered webhook id
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.deleteWebhook(webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Registered webhook id | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getRegisteredWebhooks

> InlineResponse2004 getRegisteredWebhooks(opts)

Retrieve All Webhook Events

Retrieve the list of registered webhooks for your application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.WebhooksApi();
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getRegisteredWebhooks(opts, (error, data, response) => {
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
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getWebhookEventsCategories

> InlineResponse2003 getWebhookEventsCategories()

Get Webhook Categories

Retrieve a comprehensive list of event categories that can be registered for webhook notifications in your application. These event categories can be used to subscribe a webhook to specific events, enabling your application to receive real-time notifications when these events occur.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.WebhooksApi();
apiInstance.getWebhookEventsCategories((error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## registerWebhook

> InlineResponse2011 registerWebhook(opts)

Register Webhook Event

Register a webhook to one or multiple event categories to receive real-time notifications when specific events occur in your application.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.WebhooksApi();
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'inlineObject1': new YapilyApi.InlineObject1() // InlineObject1 | 
};
apiInstance.registerWebhook(opts, (error, data, response) => {
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
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## webhookSecretReset

> InlineResponse2011 webhookSecretReset(webhookId, opts)

Reset Webhook Secret

Reset webhook secret for a webhook that is already registered to your application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.WebhooksApi();
let webhookId = "webhookId_example"; // String | Registered webhook id
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'inlineObject2': new YapilyApi.InlineObject2() // InlineObject2 | 
};
apiInstance.webhookSecretReset(webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Registered webhook id | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

