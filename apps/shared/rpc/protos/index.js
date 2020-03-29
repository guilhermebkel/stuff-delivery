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
     * @property {IAuthTokenData|null} [tokenData] IsAuthenticatedResponse tokenData
     * @property {boolean|null} [success] IsAuthenticatedResponse success
     * @property {string|null} [error] IsAuthenticatedResponse error
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
     * IsAuthenticatedResponse tokenData.
     * @member {IAuthTokenData|null|undefined} tokenData
     * @memberof IsAuthenticatedResponse
     * @instance
     */
    IsAuthenticatedResponse.prototype.tokenData = null;

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
        if (message.tokenData != null && message.hasOwnProperty("tokenData"))
            $root.AuthTokenData.encode(message.tokenData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.success != null && message.hasOwnProperty("success"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
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
                message.tokenData = $root.AuthTokenData.decode(reader, reader.uint32());
                break;
            case 2:
                message.success = reader.bool();
                break;
            case 3:
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
        if (message.tokenData != null && message.hasOwnProperty("tokenData")) {
            var error = $root.AuthTokenData.verify(message.tokenData);
            if (error)
                return "tokenData." + error;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
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
        if (object.tokenData != null) {
            if (typeof object.tokenData !== "object")
                throw TypeError(".IsAuthenticatedResponse.tokenData: object expected");
            message.tokenData = $root.AuthTokenData.fromObject(object.tokenData);
        }
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.error != null)
            message.error = String(object.error);
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
            object.tokenData = null;
            object.success = false;
            object.error = "";
        }
        if (message.tokenData != null && message.hasOwnProperty("tokenData"))
            object.tokenData = $root.AuthTokenData.toObject(message.tokenData, options);
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
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

module.exports = $root;
