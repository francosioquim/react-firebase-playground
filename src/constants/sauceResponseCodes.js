export const SUCCESS_RESPONSE_CODE = 'SC_0000'
export const SUCCESS_RESPONSE_MESSAGE = 'Success'

export const INTERNAL_RESPONSE_CODE = 'SC_0001'
export const INTERNAL_RESPONSE_MESSAGE = 'Internal server error'

export const CLOCKWORK_RESPONSE_CODE = 'SC_0002'
export const CLOCKWORK_RESPONSE_MESSAGE = 'Logic error'

export const NOT_FOUND_RESPONSE_CODE = 'SC_0003'
export const NOT_FOUND_RESPONSE_MESSAGE = 'Not found'

export const UNAUTHENTICATED_FOUND_RESPONSE_CODE = 'SC_0005'
export const UNAUTHENTICATED_RESPONSE_MESSAGE = 'Unauthenticated'

export const UNAUTHORISED_RESPONSE_CODE = 'SC_0006'
export const UNAUTHORISED_RESPONSE_MESSAGE = 'Unauthorised'

export const INVALID_CREDENTIALS_RESPONSE_CODE = 'SC_0007'
export const INVALID_CREDENTIALS_RESPONSE_MESSAGE = 'Your email address and password did not match out records.'

export const SUPERFLUOUS_PARAM_RESPONSE_CODE = 'SC_0011'
export const SUPERFLUOUS_PARAM_RESPONSE_MESSAGE = 'Superfluous parameters'

export const RESET_EXPIRED_RESPONSE_CODE = 'SC_0019'
export const RESET_EXPIRED_RESPONSE_MESSAGE = 'Ooops... Your token is invalid or has expired'

export const LOGIN_LOCKED_RESPONSE_CODE = 'SC_0022'
export const LOGIN_LOCKED_RESPONSE_MESSAGE = 'Too many failed attempts! Your account has been locked out.'

export const SESSION_EXPIRED_RESPONSE_CODE = 'SC_0036'
export const SESSION_EXPIRED_RESPONSE_MESSAGE = 'Your session has expired. Refresh or login again'

export const UNKNOWN_RESPONSE_MESSAGE = 'Ooops... Something went wrong.'

export const mappedCode = {
    [SUCCESS_RESPONSE_CODE]: SUCCESS_RESPONSE_MESSAGE,
    [INTERNAL_RESPONSE_CODE]: INTERNAL_RESPONSE_MESSAGE,
    [CLOCKWORK_RESPONSE_CODE]: CLOCKWORK_RESPONSE_MESSAGE,
    [NOT_FOUND_RESPONSE_CODE]: NOT_FOUND_RESPONSE_MESSAGE,
    [UNAUTHENTICATED_FOUND_RESPONSE_CODE]: UNAUTHENTICATED_RESPONSE_MESSAGE,
    [UNAUTHORISED_RESPONSE_CODE]: UNAUTHORISED_RESPONSE_MESSAGE,
    [INVALID_CREDENTIALS_RESPONSE_CODE]: INVALID_CREDENTIALS_RESPONSE_MESSAGE,
    [SUPERFLUOUS_PARAM_RESPONSE_CODE]: SUPERFLUOUS_PARAM_RESPONSE_MESSAGE,
    [RESET_EXPIRED_RESPONSE_CODE]: RESET_EXPIRED_RESPONSE_MESSAGE,
    [LOGIN_LOCKED_RESPONSE_CODE]: LOGIN_LOCKED_RESPONSE_MESSAGE,
    [SESSION_EXPIRED_RESPONSE_CODE]: SESSION_EXPIRED_RESPONSE_MESSAGE,
}
/**
 * export var Clockwork = new errlib.ApiError(
    500,
	prefix,
    2,
    'Logic error'
);

export var NotFound = new errlib.ApiError(
    404,
	prefix,
    3,
    'Not found'
);

export var Validation = new errlib.ApiError(
    400,
	prefix,
    4,
    'One or more parameters are invalid'
);

export var Unauthenticated = new errlib.ApiError(
    401,
	prefix,
    5,
    'Unauthenticated'
);

export var Unauthorised = new errlib.ApiError(
    401,
	prefix,
    6,
    'Unauthorised'
);

export var InvalidCredentials = new errlib.ApiError(
    401,
	prefix,
    7,
    'Invalid credentials'
);

export var BadAuthorizationHeader = new errlib.ApiError(
    400,
	prefix,
    8,
    'Corrupt Authorization header'
);

export var NoAccessDefined = new errlib.ApiError(
    500,
	prefix,
    9,
    'Missing access control definition'
);

export var InvalidRoute = new errlib.ApiError(
    404,
	prefix,
    10,
    'Invalid route'
);

export var SuperflousParams = new errlib.ApiError(
    400,
	prefix,
    11,
    'Superfluous parameters'
);

export var ActionAlreadyDone = new errlib.ApiError(
    401,
	prefix,
    12,
    'Action already done'
)

export var IdentityNotVerified = new errlib.ApiError(
    401,
	prefix,
    13,
    'Email not verified'
);

export var IdentifierExists = new errlib.ApiError(
	422,
	prefix,
	14,
	"The identifier is already in use"
)

export var MissingAppConfig = new errlib.ApiError(
    500,
	prefix,
    15,
    'App config is misconfigured'
);

export var PaymentServiceError = new errlib.ApiError(
    200,
	prefix,
    16,
    'A problem occurred with the payment service'
);

export var Locked = new errlib.ApiError(
    409,
	prefix,
    17,
    'Could not acquire a lock'
);

export var AwaitingAuthorisation = new errlib.ApiError(
    200,
	prefix,
    18,
    'Awaiting payment authorisation'
);

export var TokenNotFound = new errlib.ApiError(
    401,
	prefix,
    19,
    "That token was not found"
);

export var NoBillingId = new errlib.ApiError(
    404,
	prefix,
    20,
    'Could not retrieve billing id from the specified session id'
);

export var DatabaseError = new errlib.ApiError(
    500,
	prefix,
    21,
    'There was a database error'
);

export var LoginLock = new errlib.ApiError(
    409,
	prefix,
    22,
    'This account is temporarily locked'
);

export var WaitForPaymentProcessing = new errlib.ApiError(
    400,
	prefix,
    23,
    'Too many payments still being processed'
);

export var UpdateAppVersion = new errlib.ApiError(
    400,
	prefix,
    24,
    'Please update your app'
);

export var Misconfiguration = new errlib.ApiError(
	500,
	prefix,
	25,
	"Something is misconfigured"
);

export var EmailExists = new errlib.ApiError(
	400,
	prefix,
	26,
	"Email exists"
);

export var MobileExists = new errlib.ApiError(
	400,
	prefix,
	27,
	"Mobile number exists"
);

export var MalformedRequestBody = new errlib.ApiError(
	400,
	prefix,
	28,
	"The request body is malformed"
);

export var UploadFailed = new errlib.ApiError(
	409,
	prefix,
	29,
	"Was unable to upload the file"
);

export var ThreadNotFound = new errlib.ApiError(
	404,
	prefix,
	30,
	"Could not find thread"
);

export var NoAccessToThread = new errlib.ApiError(
	403,
	prefix,
	31,
	"You do not have access to read or message that thread"
);

export var MessageTooLong = new errlib.ApiError(
	413,
	prefix,
	32,
	"The message you are trying to send is too big"
);

export var PrivateThreadTooManyUsers = new errlib.ApiError(
	413,
	prefix,
	33,
	"Cannot create a private chat with more than one other user"
);

export var PrivateThreadNotFound = new errlib.ApiError(
	404,
	prefix,
	34,
	"No private thread found with that user"
);

export var MessageNoAccessAttachments = new errlib.ApiError(
	403,
	prefix,
	35,
	"You do not have permission to add those attachments"
);

export var SessionExpired = new errlib.ApiError(
	400,
	prefix,
	36,
	"Your session has expired. Refresh or login again"
);

export var NotAllowed = new errlib.ApiError(
	403,
	prefix,
	37,
	'You\'re not allowed to do that'
);

export var S3NotUploaded = new errlib.ApiError(
	404,
	prefix,
	38,
	'No data was uploaded'
);

export var DatabaseLimitExceeded = new errlib.ApiError(
	400,
	prefix,
	39,
	'Number of database rows exceeded'
);

export var NoAppVersions = new errlib.ApiError(
	404,
	prefix,
	40,
	'No App versions saved in database'
);

export var AppMaintenance = new errlib.ApiError(
	400,
	prefix,
	41,
	'App is currently in maintenance'
);

export var IdentityTemporarilyBlocked = new errlib.ApiError(
    401,
    prefix,
    42,
    'Account temporarily blocked, please contact support'
);


export var TaskHandlerDoesNotExist = new errlib.ApiError(
	500,
	prefix,
	100,
	'Task running class is missing'
);

export const FacebookAuthFailed = (errorMessage: string) => {
	return new errlib.ApiError(
		403,
		prefix,
		102,
		errorMessage
	);
}

export var CreatePinFailed = new errlib.ApiError(
    400,
    prefix,
    43,
    "Failed to create pin"
);

export var UpdatePinFailed = new errlib.ApiError(
    400,
    prefix,
    44,
    "Failed to update pin"
);

export var PinRequired = new errlib.ApiError(
    400,
    prefix,
    45,
    "It requires pin hash param"
);

export var IncorrectPin = new errlib.ApiError(
    400,
    prefix,
    46,
    "Incorrect pin"
);

export var SessionRevokedFailedPinAttempt = new errlib.ApiError(
    400,
    prefix,
    47,
    "Session revoked due to too many failed pin attempt"
);

export var NoPinHashForSession = new errlib.ApiError(
    400,
    prefix,
    48,
    "There is no pin hash for the session."
);
 */
