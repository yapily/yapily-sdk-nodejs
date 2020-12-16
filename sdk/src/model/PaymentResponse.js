/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.292
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Amount', 'model/ChargeDetails', 'model/ExchangeRateInformationResponse', 'model/FrequencyResponse', 'model/Payee', 'model/Payer', 'model/PaymentStatusDetails', 'model/RefundAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./ChargeDetails'), require('./ExchangeRateInformationResponse'), require('./FrequencyResponse'), require('./Payee'), require('./Payer'), require('./PaymentStatusDetails'), require('./RefundAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount, root.YapilyApi.ChargeDetails, root.YapilyApi.ExchangeRateInformationResponse, root.YapilyApi.FrequencyResponse, root.YapilyApi.Payee, root.YapilyApi.Payer, root.YapilyApi.PaymentStatusDetails, root.YapilyApi.RefundAccount);
  }
}(this, function(ApiClient, Amount, ChargeDetails, ExchangeRateInformationResponse, FrequencyResponse, Payee, Payer, PaymentStatusDetails, RefundAccount) {
  'use strict';



  /**
   * The PaymentResponse model module.
   * @module model/PaymentResponse
   * @version 0.0.292
   */

  /**
   * Constructs a new <code>PaymentResponse</code>.
   * @alias module:model/PaymentResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentResponse} obj Optional instance to populate.
   * @return {module:model/PaymentResponse} The populated <code>PaymentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('institutionConsentId')) {
        obj['institutionConsentId'] = ApiClient.convertToType(data['institutionConsentId'], 'String');
      }
      if (data.hasOwnProperty('paymentIdempotencyId')) {
        obj['paymentIdempotencyId'] = ApiClient.convertToType(data['paymentIdempotencyId'], 'String');
      }
      if (data.hasOwnProperty('paymentLifecycleId')) {
        obj['paymentLifecycleId'] = ApiClient.convertToType(data['paymentLifecycleId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusDetails')) {
        obj['statusDetails'] = PaymentStatusDetails.constructFromObject(data['statusDetails']);
      }
      if (data.hasOwnProperty('payer')) {
        obj['payer'] = Payer.constructFromObject(data['payer']);
      }
      if (data.hasOwnProperty('payeeDetails')) {
        obj['payeeDetails'] = Payee.constructFromObject(data['payeeDetails']);
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Amount.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('firstPaymentAmount')) {
        obj['firstPaymentAmount'] = Amount.constructFromObject(data['firstPaymentAmount']);
      }
      if (data.hasOwnProperty('firstPaymentDateTime')) {
        obj['firstPaymentDateTime'] = ApiClient.convertToType(data['firstPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('nextPaymentAmount')) {
        obj['nextPaymentAmount'] = Amount.constructFromObject(data['nextPaymentAmount']);
      }
      if (data.hasOwnProperty('nextPaymentDateTime')) {
        obj['nextPaymentDateTime'] = ApiClient.convertToType(data['nextPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('finalPaymentAmount')) {
        obj['finalPaymentAmount'] = Amount.constructFromObject(data['finalPaymentAmount']);
      }
      if (data.hasOwnProperty('finalPaymentDateTime')) {
        obj['finalPaymentDateTime'] = ApiClient.convertToType(data['finalPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('numberOfPayments')) {
        obj['numberOfPayments'] = ApiClient.convertToType(data['numberOfPayments'], 'Number');
      }
      if (data.hasOwnProperty('previousPaymentAmount')) {
        obj['previousPaymentAmount'] = Amount.constructFromObject(data['previousPaymentAmount']);
      }
      if (data.hasOwnProperty('previousPaymentDateTime')) {
        obj['previousPaymentDateTime'] = ApiClient.convertToType(data['previousPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('chargeDetails')) {
        obj['chargeDetails'] = ApiClient.convertToType(data['chargeDetails'], [ChargeDetails]);
      }
      if (data.hasOwnProperty('scheduledPaymentType')) {
        obj['scheduledPaymentType'] = ApiClient.convertToType(data['scheduledPaymentType'], 'String');
      }
      if (data.hasOwnProperty('scheduledPaymentDateTime')) {
        obj['scheduledPaymentDateTime'] = ApiClient.convertToType(data['scheduledPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = FrequencyResponse.constructFromObject(data['frequency']);
      }
      if (data.hasOwnProperty('currencyOfTransfer')) {
        obj['currencyOfTransfer'] = ApiClient.convertToType(data['currencyOfTransfer'], 'String');
      }
      if (data.hasOwnProperty('purpose')) {
        obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('exchangeRate')) {
        obj['exchangeRate'] = ExchangeRateInformationResponse.constructFromObject(data['exchangeRate']);
      }
      if (data.hasOwnProperty('refundAccount')) {
        obj['refundAccount'] = RefundAccount.constructFromObject(data['refundAccount']);
      }
      if (data.hasOwnProperty('bulkAmountSum')) {
        obj['bulkAmountSum'] = ApiClient.convertToType(data['bulkAmountSum'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} institutionConsentId
   */
  exports.prototype['institutionConsentId'] = undefined;
  /**
   * @member {String} paymentIdempotencyId
   */
  exports.prototype['paymentIdempotencyId'] = undefined;
  /**
   * @member {String} paymentLifecycleId
   */
  exports.prototype['paymentLifecycleId'] = undefined;
  /**
   * @member {module:model/PaymentResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/PaymentStatusDetails} statusDetails
   */
  exports.prototype['statusDetails'] = undefined;
  /**
   * @member {module:model/Payer} payer
   */
  exports.prototype['payer'] = undefined;
  /**
   * @member {module:model/Payee} payeeDetails
   */
  exports.prototype['payeeDetails'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Amount} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {module:model/Amount} firstPaymentAmount
   */
  exports.prototype['firstPaymentAmount'] = undefined;
  /**
   * @member {Date} firstPaymentDateTime
   */
  exports.prototype['firstPaymentDateTime'] = undefined;
  /**
   * @member {module:model/Amount} nextPaymentAmount
   */
  exports.prototype['nextPaymentAmount'] = undefined;
  /**
   * @member {Date} nextPaymentDateTime
   */
  exports.prototype['nextPaymentDateTime'] = undefined;
  /**
   * @member {module:model/Amount} finalPaymentAmount
   */
  exports.prototype['finalPaymentAmount'] = undefined;
  /**
   * @member {Date} finalPaymentDateTime
   */
  exports.prototype['finalPaymentDateTime'] = undefined;
  /**
   * @member {Number} numberOfPayments
   */
  exports.prototype['numberOfPayments'] = undefined;
  /**
   * @member {module:model/Amount} previousPaymentAmount
   */
  exports.prototype['previousPaymentAmount'] = undefined;
  /**
   * @member {Date} previousPaymentDateTime
   */
  exports.prototype['previousPaymentDateTime'] = undefined;
  /**
   * @member {Array.<module:model/ChargeDetails>} chargeDetails
   */
  exports.prototype['chargeDetails'] = undefined;
  /**
   * @member {String} scheduledPaymentType
   */
  exports.prototype['scheduledPaymentType'] = undefined;
  /**
   * @member {Date} scheduledPaymentDateTime
   */
  exports.prototype['scheduledPaymentDateTime'] = undefined;
  /**
   * @member {module:model/FrequencyResponse} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * @member {String} currencyOfTransfer
   */
  exports.prototype['currencyOfTransfer'] = undefined;
  /**
   * @member {String} purpose
   */
  exports.prototype['purpose'] = undefined;
  /**
   * @member {module:model/PaymentResponse.PriorityEnum} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {module:model/ExchangeRateInformationResponse} exchangeRate
   */
  exports.prototype['exchangeRate'] = undefined;
  /**
   * @member {module:model/RefundAccount} refundAccount
   */
  exports.prototype['refundAccount'] = undefined;
  /**
   * Control sum for bulk payments
   * @member {Number} bulkAmountSum
   */
  exports.prototype['bulkAmountSum'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "COMPLETED_SETTLEMENT_IN_PROCESS"
     * @const
     */
    "COMPLETED_SETTLEMENT_IN_PROCESS": "COMPLETED_SETTLEMENT_IN_PROCESS",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE"  };

  /**
   * Allowed values for the <code>priority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriorityEnum = {
    /**
     * value: "NORMAL"
     * @const
     */
    "NORMAL": "NORMAL",
    /**
     * value: "URGENT"
     * @const
     */
    "URGENT": "URGENT"  };


  return exports;
}));


