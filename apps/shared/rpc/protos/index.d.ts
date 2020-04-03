import * as $protobuf from "protobufjs";
/** Properties of an AuthTokenData. */
export interface IAuthTokenData {

    /** AuthTokenData id */
    id?: (number|null);

    /** AuthTokenData email */
    email?: (string|null);

    /** AuthTokenData admin */
    admin?: (boolean|null);
}

/** Represents an AuthTokenData. */
export class AuthTokenData implements IAuthTokenData {

    /**
     * Constructs a new AuthTokenData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthTokenData);

    /** AuthTokenData id. */
    public id: number;

    /** AuthTokenData email. */
    public email: string;

    /** AuthTokenData admin. */
    public admin: boolean;

    /**
     * Creates a new AuthTokenData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthTokenData instance
     */
    public static create(properties?: IAuthTokenData): AuthTokenData;

    /**
     * Encodes the specified AuthTokenData message. Does not implicitly {@link AuthTokenData.verify|verify} messages.
     * @param message AuthTokenData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthTokenData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthTokenData message, length delimited. Does not implicitly {@link AuthTokenData.verify|verify} messages.
     * @param message AuthTokenData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthTokenData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthTokenData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthTokenData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthTokenData;

    /**
     * Decodes an AuthTokenData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthTokenData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthTokenData;

    /**
     * Verifies an AuthTokenData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthTokenData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthTokenData
     */
    public static fromObject(object: { [k: string]: any }): AuthTokenData;

    /**
     * Creates a plain object from an AuthTokenData message. Also converts values to other types if specified.
     * @param message AuthTokenData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthTokenData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthTokenData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an IsAuthenticatedRequest. */
export interface IIsAuthenticatedRequest {

    /** IsAuthenticatedRequest token */
    token: string;

    /** IsAuthenticatedRequest authType */
    authType?: (string|null);
}

/** Represents an IsAuthenticatedRequest. */
export class IsAuthenticatedRequest implements IIsAuthenticatedRequest {

    /**
     * Constructs a new IsAuthenticatedRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIsAuthenticatedRequest);

    /** IsAuthenticatedRequest token. */
    public token: string;

    /** IsAuthenticatedRequest authType. */
    public authType: string;

    /**
     * Creates a new IsAuthenticatedRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IsAuthenticatedRequest instance
     */
    public static create(properties?: IIsAuthenticatedRequest): IsAuthenticatedRequest;

    /**
     * Encodes the specified IsAuthenticatedRequest message. Does not implicitly {@link IsAuthenticatedRequest.verify|verify} messages.
     * @param message IsAuthenticatedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIsAuthenticatedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IsAuthenticatedRequest message, length delimited. Does not implicitly {@link IsAuthenticatedRequest.verify|verify} messages.
     * @param message IsAuthenticatedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIsAuthenticatedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IsAuthenticatedRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IsAuthenticatedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IsAuthenticatedRequest;

    /**
     * Decodes an IsAuthenticatedRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IsAuthenticatedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IsAuthenticatedRequest;

    /**
     * Verifies an IsAuthenticatedRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IsAuthenticatedRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IsAuthenticatedRequest
     */
    public static fromObject(object: { [k: string]: any }): IsAuthenticatedRequest;

    /**
     * Creates a plain object from an IsAuthenticatedRequest message. Also converts values to other types if specified.
     * @param message IsAuthenticatedRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IsAuthenticatedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IsAuthenticatedRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an IsAuthenticatedResponse. */
export interface IIsAuthenticatedResponse {

    /** IsAuthenticatedResponse success */
    success?: (boolean|null);

    /** IsAuthenticatedResponse error */
    error?: (string|null);

    /** IsAuthenticatedResponse tokenData */
    tokenData?: (IAuthTokenData|null);
}

/** Represents an IsAuthenticatedResponse. */
export class IsAuthenticatedResponse implements IIsAuthenticatedResponse {

    /**
     * Constructs a new IsAuthenticatedResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIsAuthenticatedResponse);

    /** IsAuthenticatedResponse success. */
    public success: boolean;

    /** IsAuthenticatedResponse error. */
    public error: string;

    /** IsAuthenticatedResponse tokenData. */
    public tokenData?: (IAuthTokenData|null);

    /**
     * Creates a new IsAuthenticatedResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IsAuthenticatedResponse instance
     */
    public static create(properties?: IIsAuthenticatedResponse): IsAuthenticatedResponse;

    /**
     * Encodes the specified IsAuthenticatedResponse message. Does not implicitly {@link IsAuthenticatedResponse.verify|verify} messages.
     * @param message IsAuthenticatedResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIsAuthenticatedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IsAuthenticatedResponse message, length delimited. Does not implicitly {@link IsAuthenticatedResponse.verify|verify} messages.
     * @param message IsAuthenticatedResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIsAuthenticatedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IsAuthenticatedResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IsAuthenticatedResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IsAuthenticatedResponse;

    /**
     * Decodes an IsAuthenticatedResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IsAuthenticatedResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IsAuthenticatedResponse;

    /**
     * Verifies an IsAuthenticatedResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IsAuthenticatedResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IsAuthenticatedResponse
     */
    public static fromObject(object: { [k: string]: any }): IsAuthenticatedResponse;

    /**
     * Creates a plain object from an IsAuthenticatedResponse message. Also converts values to other types if specified.
     * @param message IsAuthenticatedResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IsAuthenticatedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IsAuthenticatedResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an Asgardian */
export class Asgardian extends $protobuf.rpc.Service {

    /**
     * Constructs a new Asgardian service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Asgardian service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Asgardian;

    /**
     * Calls isAuthenticated.
     * @param request IsAuthenticatedRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and IsAuthenticatedResponse
     */
    public isAuthenticated(request: IIsAuthenticatedRequest, callback: Asgardian.isAuthenticatedCallback): void;

    /**
     * Calls isAuthenticated.
     * @param request IsAuthenticatedRequest message or plain object
     * @returns Promise
     */
    public isAuthenticated(request: IIsAuthenticatedRequest): Promise<IsAuthenticatedResponse>;
}

export namespace Asgardian {

    /**
     * Callback as used by {@link Asgardian#isAuthenticated}.
     * @param error Error, if any
     * @param [response] IsAuthenticatedResponse
     */
    type isAuthenticatedCallback = (error: (Error|null), response?: IsAuthenticatedResponse) => void;
}

/** Properties of a SendMailRequestContext. */
export interface ISendMailRequestContext {

    /** SendMailRequestContext userName */
    userName?: (string|null);
}

/** Represents a SendMailRequestContext. */
export class SendMailRequestContext implements ISendMailRequestContext {

    /**
     * Constructs a new SendMailRequestContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMailRequestContext);

    /** SendMailRequestContext userName. */
    public userName: string;

    /**
     * Creates a new SendMailRequestContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendMailRequestContext instance
     */
    public static create(properties?: ISendMailRequestContext): SendMailRequestContext;

    /**
     * Encodes the specified SendMailRequestContext message. Does not implicitly {@link SendMailRequestContext.verify|verify} messages.
     * @param message SendMailRequestContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMailRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendMailRequestContext message, length delimited. Does not implicitly {@link SendMailRequestContext.verify|verify} messages.
     * @param message SendMailRequestContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendMailRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMailRequestContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMailRequestContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMailRequestContext;

    /**
     * Decodes a SendMailRequestContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendMailRequestContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendMailRequestContext;

    /**
     * Verifies a SendMailRequestContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendMailRequestContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendMailRequestContext
     */
    public static fromObject(object: { [k: string]: any }): SendMailRequestContext;

    /**
     * Creates a plain object from a SendMailRequestContext message. Also converts values to other types if specified.
     * @param message SendMailRequestContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendMailRequestContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendMailRequestContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SendMailRequest. */
export interface ISendMailRequest {

    /** SendMailRequest to */
    to: string;

    /** SendMailRequest subject */
    subject: string;

    /** SendMailRequest template */
    template: string;

    /** SendMailRequest context */
    context?: (ISendMailRequestContext|null);
}

/** Represents a SendMailRequest. */
export class SendMailRequest implements ISendMailRequest {

    /**
     * Constructs a new SendMailRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMailRequest);

    /** SendMailRequest to. */
    public to: string;

    /** SendMailRequest subject. */
    public subject: string;

    /** SendMailRequest template. */
    public template: string;

    /** SendMailRequest context. */
    public context?: (ISendMailRequestContext|null);

    /**
     * Creates a new SendMailRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendMailRequest instance
     */
    public static create(properties?: ISendMailRequest): SendMailRequest;

    /**
     * Encodes the specified SendMailRequest message. Does not implicitly {@link SendMailRequest.verify|verify} messages.
     * @param message SendMailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendMailRequest message, length delimited. Does not implicitly {@link SendMailRequest.verify|verify} messages.
     * @param message SendMailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendMailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMailRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMailRequest;

    /**
     * Decodes a SendMailRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendMailRequest;

    /**
     * Verifies a SendMailRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendMailRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendMailRequest
     */
    public static fromObject(object: { [k: string]: any }): SendMailRequest;

    /**
     * Creates a plain object from a SendMailRequest message. Also converts values to other types if specified.
     * @param message SendMailRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendMailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendMailRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SendMailResponse. */
export interface ISendMailResponse {

    /** SendMailResponse success */
    success?: (boolean|null);

    /** SendMailResponse error */
    error?: (string|null);
}

/** Represents a SendMailResponse. */
export class SendMailResponse implements ISendMailResponse {

    /**
     * Constructs a new SendMailResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMailResponse);

    /** SendMailResponse success. */
    public success: boolean;

    /** SendMailResponse error. */
    public error: string;

    /**
     * Creates a new SendMailResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendMailResponse instance
     */
    public static create(properties?: ISendMailResponse): SendMailResponse;

    /**
     * Encodes the specified SendMailResponse message. Does not implicitly {@link SendMailResponse.verify|verify} messages.
     * @param message SendMailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendMailResponse message, length delimited. Does not implicitly {@link SendMailResponse.verify|verify} messages.
     * @param message SendMailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendMailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMailResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMailResponse;

    /**
     * Decodes a SendMailResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendMailResponse;

    /**
     * Verifies a SendMailResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendMailResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendMailResponse
     */
    public static fromObject(object: { [k: string]: any }): SendMailResponse;

    /**
     * Creates a plain object from a SendMailResponse message. Also converts values to other types if specified.
     * @param message SendMailResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendMailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendMailResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an Iris */
export class Iris extends $protobuf.rpc.Service {

    /**
     * Constructs a new Iris service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Iris service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Iris;

    /**
     * Calls sendMail.
     * @param request SendMailRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SendMailResponse
     */
    public sendMail(request: ISendMailRequest, callback: Iris.sendMailCallback): void;

    /**
     * Calls sendMail.
     * @param request SendMailRequest message or plain object
     * @returns Promise
     */
    public sendMail(request: ISendMailRequest): Promise<SendMailResponse>;
}

export namespace Iris {

    /**
     * Callback as used by {@link Iris#sendMail}.
     * @param error Error, if any
     * @param [response] SendMailResponse
     */
    type sendMailCallback = (error: (Error|null), response?: SendMailResponse) => void;
}
