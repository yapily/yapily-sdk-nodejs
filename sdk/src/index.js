/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.159
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ATMMapServiceLinks', 'model/ATMOpenData', 'model/ATMOpenDataBrand', 'model/ATMOpenDataResponse', 'model/Account', 'model/AccountAuthorisationRequest', 'model/AccountBalance', 'model/AccountIdentification', 'model/AccountName', 'model/AccountRequest', 'model/AccountStatement', 'model/Address', 'model/AddressDetails', 'model/AgeEligibility', 'model/Amount', 'model/ApiError', 'model/ApiListResponseOfAccount', 'model/ApiListResponseOfAccountStatement', 'model/ApiListResponseOfBulkUserDelete', 'model/ApiListResponseOfConsent', 'model/ApiListResponseOfFeatureDetails', 'model/ApiListResponseOfInstitution', 'model/ApiListResponseOfPaymentResponse', 'model/ApiListResponseOfTransaction', 'model/ApiResponseOfAccount', 'model/ApiResponseOfAccountStatement', 'model/ApiResponseOfAuthorisationRequestResponse', 'model/ApiResponseOfBulkUserDeleteDetails', 'model/ApiResponseOfConsent', 'model/ApiResponseOfConsentDeleteResponse', 'model/ApiResponseOfIdentity', 'model/ApiResponseOfListOfATMOpenDataResponse', 'model/ApiResponseOfListOfPersonalCurrentAccountData', 'model/ApiResponseOfPaymentAuthorisationRequestResponse', 'model/ApiResponseOfPaymentResponse', 'model/ApiResponseOfPaymentResponses', 'model/ApiResponseOfTransferResponse', 'model/ApiResponseOfUserDeleteResponse', 'model/Application', 'model/ApplicationUser', 'model/AuthorisationRequestResponse', 'model/Balance', 'model/Branch', 'model/BulkUserDelete', 'model/BulkUserDeleteDetails', 'model/ChargeDetails', 'model/Consent', 'model/ConsentAuthCodeRequest', 'model/ConsentDeleteResponse', 'model/CoreProduct', 'model/Country', 'model/CreateConsentAccessToken', 'model/CreditCheck', 'model/CreditInterest', 'model/CreditInterestCreditInterestEligibility', 'model/CreditInterestTierBand', 'model/CreditInterestTierBandSet', 'model/CreditLine', 'model/CurrencyExchange', 'model/Eligibility', 'model/EligibilityOtherEligibility', 'model/FeatureDetails', 'model/FilterAndSort', 'model/FrequencyRequest', 'model/FrequencyResponse', 'model/GeoLocation1', 'model/GeographicCoordinates1', 'model/IDVerificationCheck', 'model/Identity', 'model/IdentityAddress', 'model/InlineResponse2001ATM', 'model/InlineResponse2001OtherATMServices', 'model/InlineResponse2001OtherAccessibility', 'model/Institution', 'model/InstitutionConsent', 'model/IsoBankTransactionCode', 'model/IsoCodeDetails', 'model/Location', 'model/LocationOtherLocationCategory', 'model/Media', 'model/Merchant', 'model/MerchantInfo', 'model/MonitoringFeatureStatus', 'model/MultiAuthorisation', 'model/NewApplicationUser', 'model/Next', 'model/OneTimeTokenRequest', 'model/OtherApplicationFrequency', 'model/OtherBankInterestType', 'model/OtherCalculationFrequency', 'model/OtherFeeRateType', 'model/OtherFeeType', 'model/OtherResidencyType', 'model/OtherType', 'model/Overdraft', 'model/OverdraftOtherFeeType', 'model/OverdraftOverdraftFeeChargeCap', 'model/OverdraftOverdraftFeeChargeDetail', 'model/OverdraftOverdraftFeesCharges', 'model/OverdraftOverdraftFeesCharges1', 'model/OverdraftOverdraftTierBand', 'model/OverdraftOverdraftTierBandSet', 'model/Pagination', 'model/Payee', 'model/PaymentAuthorisationRequest', 'model/PaymentAuthorisationRequestResponse', 'model/PaymentRequest', 'model/PaymentResponse', 'model/PaymentResponses', 'model/PaymentStatusDetails', 'model/PeriodicPaymentRequest', 'model/PersonalCurrentAccountBrand', 'model/PersonalCurrentAccountData', 'model/PersonalCurrentAccountPCA', 'model/PersonalCurrentAccountPCAMarketingState', 'model/PostalAddress1', 'model/ProprietaryBankTransactionCode', 'model/ResidencyEligibility', 'model/ResponseEntity', 'model/ResponseListMeta', 'model/ResponseMeta', 'model/Site', 'model/SortCodePaymentAuthRequest', 'model/SortCodePaymentRequest', 'model/StatementReference', 'model/Transaction', 'model/TransferRequest', 'model/TransferResponse', 'model/UserDeleteRequest', 'model/UserDeleteResponse', 'model/YapilyAccessToken', 'api/AccountsApi', 'api/ApplicationUsersApi', 'api/ApplicationsApi', 'api/ConsentsApi', 'api/IdentityApi', 'api/InstitutionsApi', 'api/InstitutionsOpenDataApi', 'api/OAuthApi', 'api/PaymentsApi', 'api/StatementsApi', 'api/TransactionsApi', 'api/TransfersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ATMMapServiceLinks'), require('./model/ATMOpenData'), require('./model/ATMOpenDataBrand'), require('./model/ATMOpenDataResponse'), require('./model/Account'), require('./model/AccountAuthorisationRequest'), require('./model/AccountBalance'), require('./model/AccountIdentification'), require('./model/AccountName'), require('./model/AccountRequest'), require('./model/AccountStatement'), require('./model/Address'), require('./model/AddressDetails'), require('./model/AgeEligibility'), require('./model/Amount'), require('./model/ApiError'), require('./model/ApiListResponseOfAccount'), require('./model/ApiListResponseOfAccountStatement'), require('./model/ApiListResponseOfBulkUserDelete'), require('./model/ApiListResponseOfConsent'), require('./model/ApiListResponseOfFeatureDetails'), require('./model/ApiListResponseOfInstitution'), require('./model/ApiListResponseOfPaymentResponse'), require('./model/ApiListResponseOfTransaction'), require('./model/ApiResponseOfAccount'), require('./model/ApiResponseOfAccountStatement'), require('./model/ApiResponseOfAuthorisationRequestResponse'), require('./model/ApiResponseOfBulkUserDeleteDetails'), require('./model/ApiResponseOfConsent'), require('./model/ApiResponseOfConsentDeleteResponse'), require('./model/ApiResponseOfIdentity'), require('./model/ApiResponseOfListOfATMOpenDataResponse'), require('./model/ApiResponseOfListOfPersonalCurrentAccountData'), require('./model/ApiResponseOfPaymentAuthorisationRequestResponse'), require('./model/ApiResponseOfPaymentResponse'), require('./model/ApiResponseOfPaymentResponses'), require('./model/ApiResponseOfTransferResponse'), require('./model/ApiResponseOfUserDeleteResponse'), require('./model/Application'), require('./model/ApplicationUser'), require('./model/AuthorisationRequestResponse'), require('./model/Balance'), require('./model/Branch'), require('./model/BulkUserDelete'), require('./model/BulkUserDeleteDetails'), require('./model/ChargeDetails'), require('./model/Consent'), require('./model/ConsentAuthCodeRequest'), require('./model/ConsentDeleteResponse'), require('./model/CoreProduct'), require('./model/Country'), require('./model/CreateConsentAccessToken'), require('./model/CreditCheck'), require('./model/CreditInterest'), require('./model/CreditInterestCreditInterestEligibility'), require('./model/CreditInterestTierBand'), require('./model/CreditInterestTierBandSet'), require('./model/CreditLine'), require('./model/CurrencyExchange'), require('./model/Eligibility'), require('./model/EligibilityOtherEligibility'), require('./model/FeatureDetails'), require('./model/FilterAndSort'), require('./model/FrequencyRequest'), require('./model/FrequencyResponse'), require('./model/GeoLocation1'), require('./model/GeographicCoordinates1'), require('./model/IDVerificationCheck'), require('./model/Identity'), require('./model/IdentityAddress'), require('./model/InlineResponse2001ATM'), require('./model/InlineResponse2001OtherATMServices'), require('./model/InlineResponse2001OtherAccessibility'), require('./model/Institution'), require('./model/InstitutionConsent'), require('./model/IsoBankTransactionCode'), require('./model/IsoCodeDetails'), require('./model/Location'), require('./model/LocationOtherLocationCategory'), require('./model/Media'), require('./model/Merchant'), require('./model/MerchantInfo'), require('./model/MonitoringFeatureStatus'), require('./model/MultiAuthorisation'), require('./model/NewApplicationUser'), require('./model/Next'), require('./model/OneTimeTokenRequest'), require('./model/OtherApplicationFrequency'), require('./model/OtherBankInterestType'), require('./model/OtherCalculationFrequency'), require('./model/OtherFeeRateType'), require('./model/OtherFeeType'), require('./model/OtherResidencyType'), require('./model/OtherType'), require('./model/Overdraft'), require('./model/OverdraftOtherFeeType'), require('./model/OverdraftOverdraftFeeChargeCap'), require('./model/OverdraftOverdraftFeeChargeDetail'), require('./model/OverdraftOverdraftFeesCharges'), require('./model/OverdraftOverdraftFeesCharges1'), require('./model/OverdraftOverdraftTierBand'), require('./model/OverdraftOverdraftTierBandSet'), require('./model/Pagination'), require('./model/Payee'), require('./model/PaymentAuthorisationRequest'), require('./model/PaymentAuthorisationRequestResponse'), require('./model/PaymentRequest'), require('./model/PaymentResponse'), require('./model/PaymentResponses'), require('./model/PaymentStatusDetails'), require('./model/PeriodicPaymentRequest'), require('./model/PersonalCurrentAccountBrand'), require('./model/PersonalCurrentAccountData'), require('./model/PersonalCurrentAccountPCA'), require('./model/PersonalCurrentAccountPCAMarketingState'), require('./model/PostalAddress1'), require('./model/ProprietaryBankTransactionCode'), require('./model/ResidencyEligibility'), require('./model/ResponseEntity'), require('./model/ResponseListMeta'), require('./model/ResponseMeta'), require('./model/Site'), require('./model/SortCodePaymentAuthRequest'), require('./model/SortCodePaymentRequest'), require('./model/StatementReference'), require('./model/Transaction'), require('./model/TransferRequest'), require('./model/TransferResponse'), require('./model/UserDeleteRequest'), require('./model/UserDeleteResponse'), require('./model/YapilyAccessToken'), require('./api/AccountsApi'), require('./api/ApplicationUsersApi'), require('./api/ApplicationsApi'), require('./api/ConsentsApi'), require('./api/IdentityApi'), require('./api/InstitutionsApi'), require('./api/InstitutionsOpenDataApi'), require('./api/OAuthApi'), require('./api/PaymentsApi'), require('./api/StatementsApi'), require('./api/TransactionsApi'), require('./api/TransfersApi'));
  }
}(function(ApiClient, ATMMapServiceLinks, ATMOpenData, ATMOpenDataBrand, ATMOpenDataResponse, Account, AccountAuthorisationRequest, AccountBalance, AccountIdentification, AccountName, AccountRequest, AccountStatement, Address, AddressDetails, AgeEligibility, Amount, ApiError, ApiListResponseOfAccount, ApiListResponseOfAccountStatement, ApiListResponseOfBulkUserDelete, ApiListResponseOfConsent, ApiListResponseOfFeatureDetails, ApiListResponseOfInstitution, ApiListResponseOfPaymentResponse, ApiListResponseOfTransaction, ApiResponseOfAccount, ApiResponseOfAccountStatement, ApiResponseOfAuthorisationRequestResponse, ApiResponseOfBulkUserDeleteDetails, ApiResponseOfConsent, ApiResponseOfConsentDeleteResponse, ApiResponseOfIdentity, ApiResponseOfListOfATMOpenDataResponse, ApiResponseOfListOfPersonalCurrentAccountData, ApiResponseOfPaymentAuthorisationRequestResponse, ApiResponseOfPaymentResponse, ApiResponseOfPaymentResponses, ApiResponseOfTransferResponse, ApiResponseOfUserDeleteResponse, Application, ApplicationUser, AuthorisationRequestResponse, Balance, Branch, BulkUserDelete, BulkUserDeleteDetails, ChargeDetails, Consent, ConsentAuthCodeRequest, ConsentDeleteResponse, CoreProduct, Country, CreateConsentAccessToken, CreditCheck, CreditInterest, CreditInterestCreditInterestEligibility, CreditInterestTierBand, CreditInterestTierBandSet, CreditLine, CurrencyExchange, Eligibility, EligibilityOtherEligibility, FeatureDetails, FilterAndSort, FrequencyRequest, FrequencyResponse, GeoLocation1, GeographicCoordinates1, IDVerificationCheck, Identity, IdentityAddress, InlineResponse2001ATM, InlineResponse2001OtherATMServices, InlineResponse2001OtherAccessibility, Institution, InstitutionConsent, IsoBankTransactionCode, IsoCodeDetails, Location, LocationOtherLocationCategory, Media, Merchant, MerchantInfo, MonitoringFeatureStatus, MultiAuthorisation, NewApplicationUser, Next, OneTimeTokenRequest, OtherApplicationFrequency, OtherBankInterestType, OtherCalculationFrequency, OtherFeeRateType, OtherFeeType, OtherResidencyType, OtherType, Overdraft, OverdraftOtherFeeType, OverdraftOverdraftFeeChargeCap, OverdraftOverdraftFeeChargeDetail, OverdraftOverdraftFeesCharges, OverdraftOverdraftFeesCharges1, OverdraftOverdraftTierBand, OverdraftOverdraftTierBandSet, Pagination, Payee, PaymentAuthorisationRequest, PaymentAuthorisationRequestResponse, PaymentRequest, PaymentResponse, PaymentResponses, PaymentStatusDetails, PeriodicPaymentRequest, PersonalCurrentAccountBrand, PersonalCurrentAccountData, PersonalCurrentAccountPCA, PersonalCurrentAccountPCAMarketingState, PostalAddress1, ProprietaryBankTransactionCode, ResidencyEligibility, ResponseEntity, ResponseListMeta, ResponseMeta, Site, SortCodePaymentAuthRequest, SortCodePaymentRequest, StatementReference, Transaction, TransferRequest, TransferResponse, UserDeleteRequest, UserDeleteResponse, YapilyAccessToken, AccountsApi, ApplicationUsersApi, ApplicationsApi, ConsentsApi, IdentityApi, InstitutionsApi, InstitutionsOpenDataApi, OAuthApi, PaymentsApi, StatementsApi, TransactionsApi, TransfersApi) {
  'use strict';

  /**
   * To_access_endpoints_that_require_authentication_use_your_application_key_and_secret_created_in_the_Dashboard__httpsdashboard_yapily_com.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var YapilyApi = require('index'); // See note below*.
   * var xxxSvc = new YapilyApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new YapilyApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new YapilyApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new YapilyApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.160
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ATMMapServiceLinks model constructor.
     * @property {module:model/ATMMapServiceLinks}
     */
    ATMMapServiceLinks: ATMMapServiceLinks,
    /**
     * The ATMOpenData model constructor.
     * @property {module:model/ATMOpenData}
     */
    ATMOpenData: ATMOpenData,
    /**
     * The ATMOpenDataBrand model constructor.
     * @property {module:model/ATMOpenDataBrand}
     */
    ATMOpenDataBrand: ATMOpenDataBrand,
    /**
     * The ATMOpenDataResponse model constructor.
     * @property {module:model/ATMOpenDataResponse}
     */
    ATMOpenDataResponse: ATMOpenDataResponse,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountAuthorisationRequest model constructor.
     * @property {module:model/AccountAuthorisationRequest}
     */
    AccountAuthorisationRequest: AccountAuthorisationRequest,
    /**
     * The AccountBalance model constructor.
     * @property {module:model/AccountBalance}
     */
    AccountBalance: AccountBalance,
    /**
     * The AccountIdentification model constructor.
     * @property {module:model/AccountIdentification}
     */
    AccountIdentification: AccountIdentification,
    /**
     * The AccountName model constructor.
     * @property {module:model/AccountName}
     */
    AccountName: AccountName,
    /**
     * The AccountRequest model constructor.
     * @property {module:model/AccountRequest}
     */
    AccountRequest: AccountRequest,
    /**
     * The AccountStatement model constructor.
     * @property {module:model/AccountStatement}
     */
    AccountStatement: AccountStatement,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The AddressDetails model constructor.
     * @property {module:model/AddressDetails}
     */
    AddressDetails: AddressDetails,
    /**
     * The AgeEligibility model constructor.
     * @property {module:model/AgeEligibility}
     */
    AgeEligibility: AgeEligibility,
    /**
     * The Amount model constructor.
     * @property {module:model/Amount}
     */
    Amount: Amount,
    /**
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
    ApiError: ApiError,
    /**
     * The ApiListResponseOfAccount model constructor.
     * @property {module:model/ApiListResponseOfAccount}
     */
    ApiListResponseOfAccount: ApiListResponseOfAccount,
    /**
     * The ApiListResponseOfAccountStatement model constructor.
     * @property {module:model/ApiListResponseOfAccountStatement}
     */
    ApiListResponseOfAccountStatement: ApiListResponseOfAccountStatement,
    /**
     * The ApiListResponseOfBulkUserDelete model constructor.
     * @property {module:model/ApiListResponseOfBulkUserDelete}
     */
    ApiListResponseOfBulkUserDelete: ApiListResponseOfBulkUserDelete,
    /**
     * The ApiListResponseOfConsent model constructor.
     * @property {module:model/ApiListResponseOfConsent}
     */
    ApiListResponseOfConsent: ApiListResponseOfConsent,
    /**
     * The ApiListResponseOfFeatureDetails model constructor.
     * @property {module:model/ApiListResponseOfFeatureDetails}
     */
    ApiListResponseOfFeatureDetails: ApiListResponseOfFeatureDetails,
    /**
     * The ApiListResponseOfInstitution model constructor.
     * @property {module:model/ApiListResponseOfInstitution}
     */
    ApiListResponseOfInstitution: ApiListResponseOfInstitution,
    /**
     * The ApiListResponseOfPaymentResponse model constructor.
     * @property {module:model/ApiListResponseOfPaymentResponse}
     */
    ApiListResponseOfPaymentResponse: ApiListResponseOfPaymentResponse,
    /**
     * The ApiListResponseOfTransaction model constructor.
     * @property {module:model/ApiListResponseOfTransaction}
     */
    ApiListResponseOfTransaction: ApiListResponseOfTransaction,
    /**
     * The ApiResponseOfAccount model constructor.
     * @property {module:model/ApiResponseOfAccount}
     */
    ApiResponseOfAccount: ApiResponseOfAccount,
    /**
     * The ApiResponseOfAccountStatement model constructor.
     * @property {module:model/ApiResponseOfAccountStatement}
     */
    ApiResponseOfAccountStatement: ApiResponseOfAccountStatement,
    /**
     * The ApiResponseOfAuthorisationRequestResponse model constructor.
     * @property {module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    ApiResponseOfAuthorisationRequestResponse: ApiResponseOfAuthorisationRequestResponse,
    /**
     * The ApiResponseOfBulkUserDeleteDetails model constructor.
     * @property {module:model/ApiResponseOfBulkUserDeleteDetails}
     */
    ApiResponseOfBulkUserDeleteDetails: ApiResponseOfBulkUserDeleteDetails,
    /**
     * The ApiResponseOfConsent model constructor.
     * @property {module:model/ApiResponseOfConsent}
     */
    ApiResponseOfConsent: ApiResponseOfConsent,
    /**
     * The ApiResponseOfConsentDeleteResponse model constructor.
     * @property {module:model/ApiResponseOfConsentDeleteResponse}
     */
    ApiResponseOfConsentDeleteResponse: ApiResponseOfConsentDeleteResponse,
    /**
     * The ApiResponseOfIdentity model constructor.
     * @property {module:model/ApiResponseOfIdentity}
     */
    ApiResponseOfIdentity: ApiResponseOfIdentity,
    /**
     * The ApiResponseOfListOfATMOpenDataResponse model constructor.
     * @property {module:model/ApiResponseOfListOfATMOpenDataResponse}
     */
    ApiResponseOfListOfATMOpenDataResponse: ApiResponseOfListOfATMOpenDataResponse,
    /**
     * The ApiResponseOfListOfPersonalCurrentAccountData model constructor.
     * @property {module:model/ApiResponseOfListOfPersonalCurrentAccountData}
     */
    ApiResponseOfListOfPersonalCurrentAccountData: ApiResponseOfListOfPersonalCurrentAccountData,
    /**
     * The ApiResponseOfPaymentAuthorisationRequestResponse model constructor.
     * @property {module:model/ApiResponseOfPaymentAuthorisationRequestResponse}
     */
    ApiResponseOfPaymentAuthorisationRequestResponse: ApiResponseOfPaymentAuthorisationRequestResponse,
    /**
     * The ApiResponseOfPaymentResponse model constructor.
     * @property {module:model/ApiResponseOfPaymentResponse}
     */
    ApiResponseOfPaymentResponse: ApiResponseOfPaymentResponse,
    /**
     * The ApiResponseOfPaymentResponses model constructor.
     * @property {module:model/ApiResponseOfPaymentResponses}
     */
    ApiResponseOfPaymentResponses: ApiResponseOfPaymentResponses,
    /**
     * The ApiResponseOfTransferResponse model constructor.
     * @property {module:model/ApiResponseOfTransferResponse}
     */
    ApiResponseOfTransferResponse: ApiResponseOfTransferResponse,
    /**
     * The ApiResponseOfUserDeleteResponse model constructor.
     * @property {module:model/ApiResponseOfUserDeleteResponse}
     */
    ApiResponseOfUserDeleteResponse: ApiResponseOfUserDeleteResponse,
    /**
     * The Application model constructor.
     * @property {module:model/Application}
     */
    Application: Application,
    /**
     * The ApplicationUser model constructor.
     * @property {module:model/ApplicationUser}
     */
    ApplicationUser: ApplicationUser,
    /**
     * The AuthorisationRequestResponse model constructor.
     * @property {module:model/AuthorisationRequestResponse}
     */
    AuthorisationRequestResponse: AuthorisationRequestResponse,
    /**
     * The Balance model constructor.
     * @property {module:model/Balance}
     */
    Balance: Balance,
    /**
     * The Branch model constructor.
     * @property {module:model/Branch}
     */
    Branch: Branch,
    /**
     * The BulkUserDelete model constructor.
     * @property {module:model/BulkUserDelete}
     */
    BulkUserDelete: BulkUserDelete,
    /**
     * The BulkUserDeleteDetails model constructor.
     * @property {module:model/BulkUserDeleteDetails}
     */
    BulkUserDeleteDetails: BulkUserDeleteDetails,
    /**
     * The ChargeDetails model constructor.
     * @property {module:model/ChargeDetails}
     */
    ChargeDetails: ChargeDetails,
    /**
     * The Consent model constructor.
     * @property {module:model/Consent}
     */
    Consent: Consent,
    /**
     * The ConsentAuthCodeRequest model constructor.
     * @property {module:model/ConsentAuthCodeRequest}
     */
    ConsentAuthCodeRequest: ConsentAuthCodeRequest,
    /**
     * The ConsentDeleteResponse model constructor.
     * @property {module:model/ConsentDeleteResponse}
     */
    ConsentDeleteResponse: ConsentDeleteResponse,
    /**
     * The CoreProduct model constructor.
     * @property {module:model/CoreProduct}
     */
    CoreProduct: CoreProduct,
    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country: Country,
    /**
     * The CreateConsentAccessToken model constructor.
     * @property {module:model/CreateConsentAccessToken}
     */
    CreateConsentAccessToken: CreateConsentAccessToken,
    /**
     * The CreditCheck model constructor.
     * @property {module:model/CreditCheck}
     */
    CreditCheck: CreditCheck,
    /**
     * The CreditInterest model constructor.
     * @property {module:model/CreditInterest}
     */
    CreditInterest: CreditInterest,
    /**
     * The CreditInterestCreditInterestEligibility model constructor.
     * @property {module:model/CreditInterestCreditInterestEligibility}
     */
    CreditInterestCreditInterestEligibility: CreditInterestCreditInterestEligibility,
    /**
     * The CreditInterestTierBand model constructor.
     * @property {module:model/CreditInterestTierBand}
     */
    CreditInterestTierBand: CreditInterestTierBand,
    /**
     * The CreditInterestTierBandSet model constructor.
     * @property {module:model/CreditInterestTierBandSet}
     */
    CreditInterestTierBandSet: CreditInterestTierBandSet,
    /**
     * The CreditLine model constructor.
     * @property {module:model/CreditLine}
     */
    CreditLine: CreditLine,
    /**
     * The CurrencyExchange model constructor.
     * @property {module:model/CurrencyExchange}
     */
    CurrencyExchange: CurrencyExchange,
    /**
     * The Eligibility model constructor.
     * @property {module:model/Eligibility}
     */
    Eligibility: Eligibility,
    /**
     * The EligibilityOtherEligibility model constructor.
     * @property {module:model/EligibilityOtherEligibility}
     */
    EligibilityOtherEligibility: EligibilityOtherEligibility,
    /**
     * The FeatureDetails model constructor.
     * @property {module:model/FeatureDetails}
     */
    FeatureDetails: FeatureDetails,
    /**
     * The FilterAndSort model constructor.
     * @property {module:model/FilterAndSort}
     */
    FilterAndSort: FilterAndSort,
    /**
     * The FrequencyRequest model constructor.
     * @property {module:model/FrequencyRequest}
     */
    FrequencyRequest: FrequencyRequest,
    /**
     * The FrequencyResponse model constructor.
     * @property {module:model/FrequencyResponse}
     */
    FrequencyResponse: FrequencyResponse,
    /**
     * The GeoLocation1 model constructor.
     * @property {module:model/GeoLocation1}
     */
    GeoLocation1: GeoLocation1,
    /**
     * The GeographicCoordinates1 model constructor.
     * @property {module:model/GeographicCoordinates1}
     */
    GeographicCoordinates1: GeographicCoordinates1,
    /**
     * The IDVerificationCheck model constructor.
     * @property {module:model/IDVerificationCheck}
     */
    IDVerificationCheck: IDVerificationCheck,
    /**
     * The Identity model constructor.
     * @property {module:model/Identity}
     */
    Identity: Identity,
    /**
     * The IdentityAddress model constructor.
     * @property {module:model/IdentityAddress}
     */
    IdentityAddress: IdentityAddress,
    /**
     * The InlineResponse2001ATM model constructor.
     * @property {module:model/InlineResponse2001ATM}
     */
    InlineResponse2001ATM: InlineResponse2001ATM,
    /**
     * The InlineResponse2001OtherATMServices model constructor.
     * @property {module:model/InlineResponse2001OtherATMServices}
     */
    InlineResponse2001OtherATMServices: InlineResponse2001OtherATMServices,
    /**
     * The InlineResponse2001OtherAccessibility model constructor.
     * @property {module:model/InlineResponse2001OtherAccessibility}
     */
    InlineResponse2001OtherAccessibility: InlineResponse2001OtherAccessibility,
    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution: Institution,
    /**
     * The InstitutionConsent model constructor.
     * @property {module:model/InstitutionConsent}
     */
    InstitutionConsent: InstitutionConsent,
    /**
     * The IsoBankTransactionCode model constructor.
     * @property {module:model/IsoBankTransactionCode}
     */
    IsoBankTransactionCode: IsoBankTransactionCode,
    /**
     * The IsoCodeDetails model constructor.
     * @property {module:model/IsoCodeDetails}
     */
    IsoCodeDetails: IsoCodeDetails,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The LocationOtherLocationCategory model constructor.
     * @property {module:model/LocationOtherLocationCategory}
     */
    LocationOtherLocationCategory: LocationOtherLocationCategory,
    /**
     * The Media model constructor.
     * @property {module:model/Media}
     */
    Media: Media,
    /**
     * The Merchant model constructor.
     * @property {module:model/Merchant}
     */
    Merchant: Merchant,
    /**
     * The MerchantInfo model constructor.
     * @property {module:model/MerchantInfo}
     */
    MerchantInfo: MerchantInfo,
    /**
     * The MonitoringFeatureStatus model constructor.
     * @property {module:model/MonitoringFeatureStatus}
     */
    MonitoringFeatureStatus: MonitoringFeatureStatus,
    /**
     * The MultiAuthorisation model constructor.
     * @property {module:model/MultiAuthorisation}
     */
    MultiAuthorisation: MultiAuthorisation,
    /**
     * The NewApplicationUser model constructor.
     * @property {module:model/NewApplicationUser}
     */
    NewApplicationUser: NewApplicationUser,
    /**
     * The Next model constructor.
     * @property {module:model/Next}
     */
    Next: Next,
    /**
     * The OneTimeTokenRequest model constructor.
     * @property {module:model/OneTimeTokenRequest}
     */
    OneTimeTokenRequest: OneTimeTokenRequest,
    /**
     * The OtherApplicationFrequency model constructor.
     * @property {module:model/OtherApplicationFrequency}
     */
    OtherApplicationFrequency: OtherApplicationFrequency,
    /**
     * The OtherBankInterestType model constructor.
     * @property {module:model/OtherBankInterestType}
     */
    OtherBankInterestType: OtherBankInterestType,
    /**
     * The OtherCalculationFrequency model constructor.
     * @property {module:model/OtherCalculationFrequency}
     */
    OtherCalculationFrequency: OtherCalculationFrequency,
    /**
     * The OtherFeeRateType model constructor.
     * @property {module:model/OtherFeeRateType}
     */
    OtherFeeRateType: OtherFeeRateType,
    /**
     * The OtherFeeType model constructor.
     * @property {module:model/OtherFeeType}
     */
    OtherFeeType: OtherFeeType,
    /**
     * The OtherResidencyType model constructor.
     * @property {module:model/OtherResidencyType}
     */
    OtherResidencyType: OtherResidencyType,
    /**
     * The OtherType model constructor.
     * @property {module:model/OtherType}
     */
    OtherType: OtherType,
    /**
     * The Overdraft model constructor.
     * @property {module:model/Overdraft}
     */
    Overdraft: Overdraft,
    /**
     * The OverdraftOtherFeeType model constructor.
     * @property {module:model/OverdraftOtherFeeType}
     */
    OverdraftOtherFeeType: OverdraftOtherFeeType,
    /**
     * The OverdraftOverdraftFeeChargeCap model constructor.
     * @property {module:model/OverdraftOverdraftFeeChargeCap}
     */
    OverdraftOverdraftFeeChargeCap: OverdraftOverdraftFeeChargeCap,
    /**
     * The OverdraftOverdraftFeeChargeDetail model constructor.
     * @property {module:model/OverdraftOverdraftFeeChargeDetail}
     */
    OverdraftOverdraftFeeChargeDetail: OverdraftOverdraftFeeChargeDetail,
    /**
     * The OverdraftOverdraftFeesCharges model constructor.
     * @property {module:model/OverdraftOverdraftFeesCharges}
     */
    OverdraftOverdraftFeesCharges: OverdraftOverdraftFeesCharges,
    /**
     * The OverdraftOverdraftFeesCharges1 model constructor.
     * @property {module:model/OverdraftOverdraftFeesCharges1}
     */
    OverdraftOverdraftFeesCharges1: OverdraftOverdraftFeesCharges1,
    /**
     * The OverdraftOverdraftTierBand model constructor.
     * @property {module:model/OverdraftOverdraftTierBand}
     */
    OverdraftOverdraftTierBand: OverdraftOverdraftTierBand,
    /**
     * The OverdraftOverdraftTierBandSet model constructor.
     * @property {module:model/OverdraftOverdraftTierBandSet}
     */
    OverdraftOverdraftTierBandSet: OverdraftOverdraftTierBandSet,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The Payee model constructor.
     * @property {module:model/Payee}
     */
    Payee: Payee,
    /**
     * The PaymentAuthorisationRequest model constructor.
     * @property {module:model/PaymentAuthorisationRequest}
     */
    PaymentAuthorisationRequest: PaymentAuthorisationRequest,
    /**
     * The PaymentAuthorisationRequestResponse model constructor.
     * @property {module:model/PaymentAuthorisationRequestResponse}
     */
    PaymentAuthorisationRequestResponse: PaymentAuthorisationRequestResponse,
    /**
     * The PaymentRequest model constructor.
     * @property {module:model/PaymentRequest}
     */
    PaymentRequest: PaymentRequest,
    /**
     * The PaymentResponse model constructor.
     * @property {module:model/PaymentResponse}
     */
    PaymentResponse: PaymentResponse,
    /**
     * The PaymentResponses model constructor.
     * @property {module:model/PaymentResponses}
     */
    PaymentResponses: PaymentResponses,
    /**
     * The PaymentStatusDetails model constructor.
     * @property {module:model/PaymentStatusDetails}
     */
    PaymentStatusDetails: PaymentStatusDetails,
    /**
     * The PeriodicPaymentRequest model constructor.
     * @property {module:model/PeriodicPaymentRequest}
     */
    PeriodicPaymentRequest: PeriodicPaymentRequest,
    /**
     * The PersonalCurrentAccountBrand model constructor.
     * @property {module:model/PersonalCurrentAccountBrand}
     */
    PersonalCurrentAccountBrand: PersonalCurrentAccountBrand,
    /**
     * The PersonalCurrentAccountData model constructor.
     * @property {module:model/PersonalCurrentAccountData}
     */
    PersonalCurrentAccountData: PersonalCurrentAccountData,
    /**
     * The PersonalCurrentAccountPCA model constructor.
     * @property {module:model/PersonalCurrentAccountPCA}
     */
    PersonalCurrentAccountPCA: PersonalCurrentAccountPCA,
    /**
     * The PersonalCurrentAccountPCAMarketingState model constructor.
     * @property {module:model/PersonalCurrentAccountPCAMarketingState}
     */
    PersonalCurrentAccountPCAMarketingState: PersonalCurrentAccountPCAMarketingState,
    /**
     * The PostalAddress1 model constructor.
     * @property {module:model/PostalAddress1}
     */
    PostalAddress1: PostalAddress1,
    /**
     * The ProprietaryBankTransactionCode model constructor.
     * @property {module:model/ProprietaryBankTransactionCode}
     */
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCode,
    /**
     * The ResidencyEligibility model constructor.
     * @property {module:model/ResidencyEligibility}
     */
    ResidencyEligibility: ResidencyEligibility,
    /**
     * The ResponseEntity model constructor.
     * @property {module:model/ResponseEntity}
     */
    ResponseEntity: ResponseEntity,
    /**
     * The ResponseListMeta model constructor.
     * @property {module:model/ResponseListMeta}
     */
    ResponseListMeta: ResponseListMeta,
    /**
     * The ResponseMeta model constructor.
     * @property {module:model/ResponseMeta}
     */
    ResponseMeta: ResponseMeta,
    /**
     * The Site model constructor.
     * @property {module:model/Site}
     */
    Site: Site,
    /**
     * The SortCodePaymentAuthRequest model constructor.
     * @property {module:model/SortCodePaymentAuthRequest}
     */
    SortCodePaymentAuthRequest: SortCodePaymentAuthRequest,
    /**
     * The SortCodePaymentRequest model constructor.
     * @property {module:model/SortCodePaymentRequest}
     */
    SortCodePaymentRequest: SortCodePaymentRequest,
    /**
     * The StatementReference model constructor.
     * @property {module:model/StatementReference}
     */
    StatementReference: StatementReference,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The TransferRequest model constructor.
     * @property {module:model/TransferRequest}
     */
    TransferRequest: TransferRequest,
    /**
     * The TransferResponse model constructor.
     * @property {module:model/TransferResponse}
     */
    TransferResponse: TransferResponse,
    /**
     * The UserDeleteRequest model constructor.
     * @property {module:model/UserDeleteRequest}
     */
    UserDeleteRequest: UserDeleteRequest,
    /**
     * The UserDeleteResponse model constructor.
     * @property {module:model/UserDeleteResponse}
     */
    UserDeleteResponse: UserDeleteResponse,
    /**
     * The YapilyAccessToken model constructor.
     * @property {module:model/YapilyAccessToken}
     */
    YapilyAccessToken: YapilyAccessToken,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The ApplicationUsersApi service constructor.
     * @property {module:api/ApplicationUsersApi}
     */
    ApplicationUsersApi: ApplicationUsersApi,
    /**
     * The ApplicationsApi service constructor.
     * @property {module:api/ApplicationsApi}
     */
    ApplicationsApi: ApplicationsApi,
    /**
     * The ConsentsApi service constructor.
     * @property {module:api/ConsentsApi}
     */
    ConsentsApi: ConsentsApi,
    /**
     * The IdentityApi service constructor.
     * @property {module:api/IdentityApi}
     */
    IdentityApi: IdentityApi,
    /**
     * The InstitutionsApi service constructor.
     * @property {module:api/InstitutionsApi}
     */
    InstitutionsApi: InstitutionsApi,
    /**
     * The InstitutionsOpenDataApi service constructor.
     * @property {module:api/InstitutionsOpenDataApi}
     */
    InstitutionsOpenDataApi: InstitutionsOpenDataApi,
    /**
     * The OAuthApi service constructor.
     * @property {module:api/OAuthApi}
     */
    OAuthApi: OAuthApi,
    /**
     * The PaymentsApi service constructor.
     * @property {module:api/PaymentsApi}
     */
    PaymentsApi: PaymentsApi,
    /**
     * The StatementsApi service constructor.
     * @property {module:api/StatementsApi}
     */
    StatementsApi: StatementsApi,
    /**
     * The TransactionsApi service constructor.
     * @property {module:api/TransactionsApi}
     */
    TransactionsApi: TransactionsApi,
    /**
     * The TransfersApi service constructor.
     * @property {module:api/TransfersApi}
     */
    TransfersApi: TransfersApi
  };

  return exports;
}));
