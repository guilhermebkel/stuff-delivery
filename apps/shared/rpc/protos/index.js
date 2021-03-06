/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AuthTokenData = (function() {

    /**
     * Properties of an AuthTokenData.
     * @exports IAuthTokenData
     * @interface IAuthTokenData
     * @property {number|null} [id] AuthTokenData id
     * @property {string|null} [email] AuthTokenData email
     * @property {boolean|null} [admin] AuthTokenData admin
     */

    /**
     * Constructs a new AuthTokenData.
     * @exports AuthTokenData
     * @classdesc Represents an AuthTokenData.
     * @implements IAuthTokenData
     * @constructor
     * @param {IAuthTokenData=} [properties] Properties to set
     */
    function AuthTokenData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthTokenData id.
     * @member {number} id
     * @memberof AuthTokenData
     * @instance
     */
    AuthTokenData.prototype.id = 0;

    /**
     * AuthTokenData email.
     * @member {string} email
     * @memberof AuthTokenData
     * @instance
     */
    AuthTokenData.prototype.email = "";

    /**
     * AuthTokenData admin.
     * @member {boolean} admin
     * @memberof AuthTokenData
     * @instance
     */
    AuthTokenData.prototype.admin = false;

    /**
     * Creates a new AuthTokenData instance using the specified properties.
     * @function create
     * @memberof AuthTokenData
     * @static
     * @param {IAuthTokenData=} [properties] Properties to set
     * @returns {AuthTokenData} AuthTokenData instance
     */
    AuthTokenData.create = function create(properties) {
        return new AuthTokenData(properties);
    };

    /**
     * Encodes the specified AuthTokenData message. Does not implicitly {@link AuthTokenData.verify|verify} messages.
     * @function encode
     * @memberof AuthTokenData
     * @static
     * @param {IAuthTokenData} message AuthTokenData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthTokenData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.email != null && message.hasOwnProperty("email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
        if (message.admin != null && message.hasOwnProperty("admin"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.admin);
        return writer;
    };

    /**
     * Encodes the specified AuthTokenData message, length delimited. Does not implicitly {@link AuthTokenData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthTokenData
     * @static
     * @param {IAuthTokenData} message AuthTokenData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthTokenData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthTokenData message from the specified reader or buffer.
     * @function decode
     * @memberof AuthTokenData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthTokenData} AuthTokenData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthTokenData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthTokenData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.email = reader.string();
                break;
            case 3:
                message.admin = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthTokenData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthTokenData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthTokenData} AuthTokenData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthTokenData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuthTokenData message.
     * @function verify
     * @memberof AuthTokenData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthTokenData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.admin != null && message.hasOwnProperty("admin"))
            if (typeof message.admin !== "boolean")
                return "admin: boolean expected";
        return null;
    };

    /**
     * Creates an AuthTokenData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthTokenData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthTokenData} AuthTokenData
     */
    AuthTokenData.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthTokenData)
            return object;
        var message = new $root.AuthTokenData();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.email != null)
            message.email = String(object.email);
        if (object.admin != null)
            message.admin = Boolean(object.admin);
        return message;
    };

    /**
     * Creates a plain object from an AuthTokenData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthTokenData
     * @static
     * @param {AuthTokenData} message AuthTokenData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthTokenData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.email = "";
            object.admin = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.admin != null && message.hasOwnProperty("admin"))
            object.admin = message.admin;
        return object;
    };

    /**
     * Converts this AuthTokenData to JSON.
     * @function toJSON
     * @memberof AuthTokenData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthTokenData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AuthTokenData;
})();

$root.IsAuthenticatedRequest = (function() {

    /**
     * Properties of an IsAuthenticatedRequest.
     * @exports IIsAuthenticatedRequest
     * @interface IIsAuthenticatedRequest
     * @property {string} token IsAuthenticatedRequest token
     * @property {string|null} [authType] IsAuthenticatedRequest authType
     */

    /**
     * Constructs a new IsAuthenticatedRequest.
     * @exports IsAuthenticatedRequest
     * @classdesc Represents an IsAuthenticatedRequest.
     * @implements IIsAuthenticatedRequest
     * @constructor
     * @param {IIsAuthenticatedRequest=} [properties] Properties to set
     */
    function IsAuthenticatedRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IsAuthenticatedRequest token.
     * @member {string} token
     * @memberof IsAuthenticatedRequest
     * @instance
     */
    IsAuthenticatedRequest.prototype.token = "";

    /**
     * IsAuthenticatedRequest authType.
     * @member {string} authType
     * @memberof IsAuthenticatedRequest
     * @instance
     */
    IsAuthenticatedRequest.prototype.authType = "";

    /**
     * Creates a new IsAuthenticatedRequest instance using the specified properties.
     * @function create
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {IIsAuthenticatedRequest=} [properties] Properties to set
     * @returns {IsAuthenticatedRequest} IsAuthenticatedRequest instance
     */
    IsAuthenticatedRequest.create = function create(properties) {
        return new IsAuthenticatedRequest(properties);
    };

    /**
     * Encodes the specified IsAuthenticatedRequest message. Does not implicitly {@link IsAuthenticatedRequest.verify|verify} messages.
     * @function encode
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {IIsAuthenticatedRequest} message IsAuthenticatedRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IsAuthenticatedRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        if (message.authType != null && message.hasOwnProperty("authType"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.authType);
        return writer;
    };

    /**
     * Encodes the specified IsAuthenticatedRequest message, length delimited. Does not implicitly {@link IsAuthenticatedRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {IIsAuthenticatedRequest} message IsAuthenticatedRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IsAuthenticatedRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IsAuthenticatedRequest message from the specified reader or buffer.
     * @function decode
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IsAuthenticatedRequest} IsAuthenticatedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IsAuthenticatedRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IsAuthenticatedRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.authType = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: message });
        return message;
    };

    /**
     * Decodes an IsAuthenticatedRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IsAuthenticatedRequest} IsAuthenticatedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IsAuthenticatedRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IsAuthenticatedRequest message.
     * @function verify
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IsAuthenticatedRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.token))
            return "token: string expected";
        if (message.authType != null && message.hasOwnProperty("authType"))
            if (!$util.isString(message.authType))
                return "authType: string expected";
        return null;
    };

    /**
     * Creates an IsAuthenticatedRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IsAuthenticatedRequest} IsAuthenticatedRequest
     */
    IsAuthenticatedRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.IsAuthenticatedRequest)
            return object;
        var message = new $root.IsAuthenticatedRequest();
        if (object.token != null)
            message.token = String(object.token);
        if (object.authType != null)
            message.authType = String(object.authType);
        return message;
    };

    /**
     * Creates a plain object from an IsAuthenticatedRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IsAuthenticatedRequest
     * @static
     * @param {IsAuthenticatedRequest} message IsAuthenticatedRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IsAuthenticatedRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.token = "";
            object.authType = "";
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.authType != null && message.hasOwnProperty("authType"))
            object.authType = message.authType;
        return object;
    };

    /**
     * Converts this IsAuthenticatedRequest to JSON.
     * @function toJSON
     * @memberof IsAuthenticatedRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IsAuthenticatedRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IsAuthenticatedRequest;
})();

$root.IsAuthenticatedResponse = (function() {

    /**
     * Properties of an IsAuthenticatedResponse.
     * @exports IIsAuthenticatedResponse
     * @interface IIsAuthenticatedResponse
     * @property {boolean|null} [success] IsAuthenticatedResponse success
     * @property {string|null} [error] IsAuthenticatedResponse error
     * @property {IAuthTokenData|null} [tokenData] IsAuthenticatedResponse tokenData
     */

    /**
     * Constructs a new IsAuthenticatedResponse.
     * @exports IsAuthenticatedResponse
     * @classdesc Represents an IsAuthenticatedResponse.
     * @implements IIsAuthenticatedResponse
     * @constructor
     * @param {IIsAuthenticatedResponse=} [properties] Properties to set
     */
    function IsAuthenticatedResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IsAuthenticatedResponse success.
     * @member {boolean} success
     * @memberof IsAuthenticatedResponse
     * @instance
     */
    IsAuthenticatedResponse.prototype.success = false;

    /**
     * IsAuthenticatedResponse error.
     * @member {string} error
     * @memberof IsAuthenticatedResponse
     * @instance
     */
    IsAuthenticatedResponse.prototype.error = "";

    /**
     * IsAuthenticatedResponse tokenData.
     * @member {IAuthTokenData|null|undefined} tokenData
     * @memberof IsAuthenticatedResponse
     * @instance
     */
    IsAuthenticatedResponse.prototype.tokenData = null;

    /**
     * Creates a new IsAuthenticatedResponse instance using the specified properties.
     * @function create
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {IIsAuthenticatedResponse=} [properties] Properties to set
     * @returns {IsAuthenticatedResponse} IsAuthenticatedResponse instance
     */
    IsAuthenticatedResponse.create = function create(properties) {
        return new IsAuthenticatedResponse(properties);
    };

    /**
     * Encodes the specified IsAuthenticatedResponse message. Does not implicitly {@link IsAuthenticatedResponse.verify|verify} messages.
     * @function encode
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {IIsAuthenticatedResponse} message IsAuthenticatedResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IsAuthenticatedResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && message.hasOwnProperty("success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        if (message.tokenData != null && message.hasOwnProperty("tokenData"))
            $root.AuthTokenData.encode(message.tokenData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified IsAuthenticatedResponse message, length delimited. Does not implicitly {@link IsAuthenticatedResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {IIsAuthenticatedResponse} message IsAuthenticatedResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IsAuthenticatedResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IsAuthenticatedResponse message from the specified reader or buffer.
     * @function decode
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IsAuthenticatedResponse} IsAuthenticatedResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IsAuthenticatedResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IsAuthenticatedResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.success = reader.bool();
                break;
            case 2:
                message.error = reader.string();
                break;
            case 3:
                message.tokenData = $root.AuthTokenData.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an IsAuthenticatedResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IsAuthenticatedResponse} IsAuthenticatedResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IsAuthenticatedResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IsAuthenticatedResponse message.
     * @function verify
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IsAuthenticatedResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        if (message.tokenData != null && message.hasOwnProperty("tokenData")) {
            var error = $root.AuthTokenData.verify(message.tokenData);
            if (error)
                return "tokenData." + error;
        }
        return null;
    };

    /**
     * Creates an IsAuthenticatedResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IsAuthenticatedResponse} IsAuthenticatedResponse
     */
    IsAuthenticatedResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.IsAuthenticatedResponse)
            return object;
        var message = new $root.IsAuthenticatedResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.error != null)
            message.error = String(object.error);
        if (object.tokenData != null) {
            if (typeof object.tokenData !== "object")
                throw TypeError(".IsAuthenticatedResponse.tokenData: object expected");
            message.tokenData = $root.AuthTokenData.fromObject(object.tokenData);
        }
        return message;
    };

    /**
     * Creates a plain object from an IsAuthenticatedResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IsAuthenticatedResponse
     * @static
     * @param {IsAuthenticatedResponse} message IsAuthenticatedResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IsAuthenticatedResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.error = "";
            object.tokenData = null;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.tokenData != null && message.hasOwnProperty("tokenData"))
            object.tokenData = $root.AuthTokenData.toObject(message.tokenData, options);
        return object;
    };

    /**
     * Converts this IsAuthenticatedResponse to JSON.
     * @function toJSON
     * @memberof IsAuthenticatedResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IsAuthenticatedResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IsAuthenticatedResponse;
})();

$root.Asgardian = (function() {

    /**
     * Constructs a new Asgardian service.
     * @exports Asgardian
     * @classdesc Represents an Asgardian
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Asgardian(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Asgardian.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Asgardian;

    /**
     * Creates new Asgardian service using the specified rpc implementation.
     * @function create
     * @memberof Asgardian
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Asgardian} RPC service. Useful where requests and/or responses are streamed.
     */
    Asgardian.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Asgardian#isAuthenticated}.
     * @memberof Asgardian
     * @typedef isAuthenticatedCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {IsAuthenticatedResponse} [response] IsAuthenticatedResponse
     */

    /**
     * Calls isAuthenticated.
     * @function isAuthenticated
     * @memberof Asgardian
     * @instance
     * @param {IIsAuthenticatedRequest} request IsAuthenticatedRequest message or plain object
     * @param {Asgardian.isAuthenticatedCallback} callback Node-style callback called with the error, if any, and IsAuthenticatedResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Asgardian.prototype.isAuthenticated = function isAuthenticated(request, callback) {
        return this.rpcCall(isAuthenticated, $root.IsAuthenticatedRequest, $root.IsAuthenticatedResponse, request, callback);
    }, "name", { value: "isAuthenticated" });

    /**
     * Calls isAuthenticated.
     * @function isAuthenticated
     * @memberof Asgardian
     * @instance
     * @param {IIsAuthenticatedRequest} request IsAuthenticatedRequest message or plain object
     * @returns {Promise<IsAuthenticatedResponse>} Promise
     * @variation 2
     */

    return Asgardian;
})();

$root.SendMailRequestContext = (function() {

    /**
     * Properties of a SendMailRequestContext.
     * @exports ISendMailRequestContext
     * @interface ISendMailRequestContext
     * @property {string|null} [userName] SendMailRequestContext userName
     */

    /**
     * Constructs a new SendMailRequestContext.
     * @exports SendMailRequestContext
     * @classdesc Represents a SendMailRequestContext.
     * @implements ISendMailRequestContext
     * @constructor
     * @param {ISendMailRequestContext=} [properties] Properties to set
     */
    function SendMailRequestContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMailRequestContext userName.
     * @member {string} userName
     * @memberof SendMailRequestContext
     * @instance
     */
    SendMailRequestContext.prototype.userName = "";

    /**
     * Creates a new SendMailRequestContext instance using the specified properties.
     * @function create
     * @memberof SendMailRequestContext
     * @static
     * @param {ISendMailRequestContext=} [properties] Properties to set
     * @returns {SendMailRequestContext} SendMailRequestContext instance
     */
    SendMailRequestContext.create = function create(properties) {
        return new SendMailRequestContext(properties);
    };

    /**
     * Encodes the specified SendMailRequestContext message. Does not implicitly {@link SendMailRequestContext.verify|verify} messages.
     * @function encode
     * @memberof SendMailRequestContext
     * @static
     * @param {ISendMailRequestContext} message SendMailRequestContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMailRequestContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
        return writer;
    };

    /**
     * Encodes the specified SendMailRequestContext message, length delimited. Does not implicitly {@link SendMailRequestContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMailRequestContext
     * @static
     * @param {ISendMailRequestContext} message SendMailRequestContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMailRequestContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMailRequestContext message from the specified reader or buffer.
     * @function decode
     * @memberof SendMailRequestContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMailRequestContext} SendMailRequestContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMailRequestContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMailRequestContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendMailRequestContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMailRequestContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMailRequestContext} SendMailRequestContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMailRequestContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMailRequestContext message.
     * @function verify
     * @memberof SendMailRequestContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMailRequestContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
        return null;
    };

    /**
     * Creates a SendMailRequestContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMailRequestContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMailRequestContext} SendMailRequestContext
     */
    SendMailRequestContext.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMailRequestContext)
            return object;
        var message = new $root.SendMailRequestContext();
        if (object.userName != null)
            message.userName = String(object.userName);
        return message;
    };

    /**
     * Creates a plain object from a SendMailRequestContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMailRequestContext
     * @static
     * @param {SendMailRequestContext} message SendMailRequestContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMailRequestContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userName = "";
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        return object;
    };

    /**
     * Converts this SendMailRequestContext to JSON.
     * @function toJSON
     * @memberof SendMailRequestContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMailRequestContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendMailRequestContext;
})();

$root.SendMailRequest = (function() {

    /**
     * Properties of a SendMailRequest.
     * @exports ISendMailRequest
     * @interface ISendMailRequest
     * @property {string} to SendMailRequest to
     * @property {string} subject SendMailRequest subject
     * @property {string} template SendMailRequest template
     * @property {ISendMailRequestContext|null} [context] SendMailRequest context
     */

    /**
     * Constructs a new SendMailRequest.
     * @exports SendMailRequest
     * @classdesc Represents a SendMailRequest.
     * @implements ISendMailRequest
     * @constructor
     * @param {ISendMailRequest=} [properties] Properties to set
     */
    function SendMailRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMailRequest to.
     * @member {string} to
     * @memberof SendMailRequest
     * @instance
     */
    SendMailRequest.prototype.to = "";

    /**
     * SendMailRequest subject.
     * @member {string} subject
     * @memberof SendMailRequest
     * @instance
     */
    SendMailRequest.prototype.subject = "";

    /**
     * SendMailRequest template.
     * @member {string} template
     * @memberof SendMailRequest
     * @instance
     */
    SendMailRequest.prototype.template = "";

    /**
     * SendMailRequest context.
     * @member {ISendMailRequestContext|null|undefined} context
     * @memberof SendMailRequest
     * @instance
     */
    SendMailRequest.prototype.context = null;

    /**
     * Creates a new SendMailRequest instance using the specified properties.
     * @function create
     * @memberof SendMailRequest
     * @static
     * @param {ISendMailRequest=} [properties] Properties to set
     * @returns {SendMailRequest} SendMailRequest instance
     */
    SendMailRequest.create = function create(properties) {
        return new SendMailRequest(properties);
    };

    /**
     * Encodes the specified SendMailRequest message. Does not implicitly {@link SendMailRequest.verify|verify} messages.
     * @function encode
     * @memberof SendMailRequest
     * @static
     * @param {ISendMailRequest} message SendMailRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMailRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.to);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.subject);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.template);
        if (message.context != null && message.hasOwnProperty("context"))
            $root.SendMailRequestContext.encode(message.context, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SendMailRequest message, length delimited. Does not implicitly {@link SendMailRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMailRequest
     * @static
     * @param {ISendMailRequest} message SendMailRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMailRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMailRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SendMailRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMailRequest} SendMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMailRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMailRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.to = reader.string();
                break;
            case 2:
                message.subject = reader.string();
                break;
            case 3:
                message.template = reader.string();
                break;
            case 4:
                message.context = $root.SendMailRequestContext.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("to"))
            throw $util.ProtocolError("missing required 'to'", { instance: message });
        if (!message.hasOwnProperty("subject"))
            throw $util.ProtocolError("missing required 'subject'", { instance: message });
        if (!message.hasOwnProperty("template"))
            throw $util.ProtocolError("missing required 'template'", { instance: message });
        return message;
    };

    /**
     * Decodes a SendMailRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMailRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMailRequest} SendMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMailRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMailRequest message.
     * @function verify
     * @memberof SendMailRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMailRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.to))
            return "to: string expected";
        if (!$util.isString(message.subject))
            return "subject: string expected";
        if (!$util.isString(message.template))
            return "template: string expected";
        if (message.context != null && message.hasOwnProperty("context")) {
            var error = $root.SendMailRequestContext.verify(message.context);
            if (error)
                return "context." + error;
        }
        return null;
    };

    /**
     * Creates a SendMailRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMailRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMailRequest} SendMailRequest
     */
    SendMailRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMailRequest)
            return object;
        var message = new $root.SendMailRequest();
        if (object.to != null)
            message.to = String(object.to);
        if (object.subject != null)
            message.subject = String(object.subject);
        if (object.template != null)
            message.template = String(object.template);
        if (object.context != null) {
            if (typeof object.context !== "object")
                throw TypeError(".SendMailRequest.context: object expected");
            message.context = $root.SendMailRequestContext.fromObject(object.context);
        }
        return message;
    };

    /**
     * Creates a plain object from a SendMailRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMailRequest
     * @static
     * @param {SendMailRequest} message SendMailRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMailRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.to = "";
            object.subject = "";
            object.template = "";
            object.context = null;
        }
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
        if (message.subject != null && message.hasOwnProperty("subject"))
            object.subject = message.subject;
        if (message.template != null && message.hasOwnProperty("template"))
            object.template = message.template;
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = $root.SendMailRequestContext.toObject(message.context, options);
        return object;
    };

    /**
     * Converts this SendMailRequest to JSON.
     * @function toJSON
     * @memberof SendMailRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMailRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendMailRequest;
})();

$root.SendMailResponse = (function() {

    /**
     * Properties of a SendMailResponse.
     * @exports ISendMailResponse
     * @interface ISendMailResponse
     * @property {boolean|null} [success] SendMailResponse success
     * @property {string|null} [error] SendMailResponse error
     */

    /**
     * Constructs a new SendMailResponse.
     * @exports SendMailResponse
     * @classdesc Represents a SendMailResponse.
     * @implements ISendMailResponse
     * @constructor
     * @param {ISendMailResponse=} [properties] Properties to set
     */
    function SendMailResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMailResponse success.
     * @member {boolean} success
     * @memberof SendMailResponse
     * @instance
     */
    SendMailResponse.prototype.success = false;

    /**
     * SendMailResponse error.
     * @member {string} error
     * @memberof SendMailResponse
     * @instance
     */
    SendMailResponse.prototype.error = "";

    /**
     * Creates a new SendMailResponse instance using the specified properties.
     * @function create
     * @memberof SendMailResponse
     * @static
     * @param {ISendMailResponse=} [properties] Properties to set
     * @returns {SendMailResponse} SendMailResponse instance
     */
    SendMailResponse.create = function create(properties) {
        return new SendMailResponse(properties);
    };

    /**
     * Encodes the specified SendMailResponse message. Does not implicitly {@link SendMailResponse.verify|verify} messages.
     * @function encode
     * @memberof SendMailResponse
     * @static
     * @param {ISendMailResponse} message SendMailResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMailResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && message.hasOwnProperty("success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified SendMailResponse message, length delimited. Does not implicitly {@link SendMailResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMailResponse
     * @static
     * @param {ISendMailResponse} message SendMailResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMailResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMailResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SendMailResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMailResponse} SendMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMailResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMailResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.success = reader.bool();
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendMailResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMailResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMailResponse} SendMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMailResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMailResponse message.
     * @function verify
     * @memberof SendMailResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMailResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a SendMailResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMailResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMailResponse} SendMailResponse
     */
    SendMailResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMailResponse)
            return object;
        var message = new $root.SendMailResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a SendMailResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMailResponse
     * @static
     * @param {SendMailResponse} message SendMailResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMailResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.error = "";
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this SendMailResponse to JSON.
     * @function toJSON
     * @memberof SendMailResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMailResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendMailResponse;
})();

$root.Iris = (function() {

    /**
     * Constructs a new Iris service.
     * @exports Iris
     * @classdesc Represents an Iris
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Iris(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Iris.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Iris;

    /**
     * Creates new Iris service using the specified rpc implementation.
     * @function create
     * @memberof Iris
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Iris} RPC service. Useful where requests and/or responses are streamed.
     */
    Iris.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Iris#sendMail}.
     * @memberof Iris
     * @typedef sendMailCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {SendMailResponse} [response] SendMailResponse
     */

    /**
     * Calls sendMail.
     * @function sendMail
     * @memberof Iris
     * @instance
     * @param {ISendMailRequest} request SendMailRequest message or plain object
     * @param {Iris.sendMailCallback} callback Node-style callback called with the error, if any, and SendMailResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Iris.prototype.sendMail = function sendMail(request, callback) {
        return this.rpcCall(sendMail, $root.SendMailRequest, $root.SendMailResponse, request, callback);
    }, "name", { value: "sendMail" });

    /**
     * Calls sendMail.
     * @function sendMail
     * @memberof Iris
     * @instance
     * @param {ISendMailRequest} request SendMailRequest message or plain object
     * @returns {Promise<SendMailResponse>} Promise
     * @variation 2
     */

    return Iris;
})();

module.exports = $root;
