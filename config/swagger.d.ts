/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserEntity {
  /** @example 1 */
  id: number
  /** @example "Rustem" */
  name: string
  /** @example "Galimov" */
  surname: string
  /** @example "example@mail.ru" */
  email: string
  /** @example "client" */
  role: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  created_at: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  updated_at: string
}

export interface LoginDto {
  /** @example "test@mail.ru" */
  email: string
  /** @example "qwerty123" */
  password: string
}

export interface TokensDto {
  access_token: string
  refresh_token: string
}

export interface CreateUserDto {
  /** @example "Рустем" */
  name: string
  /** @example "Галимов" */
  surname: string
  /** @example "test@mail.ru" */
  email: string
  /** @example "qwerty123" */
  password: string
}

export interface RefreshTokenDto {
  refresh: string
}

export interface CreateOrganizationDto {
  /** @example "ООО Чайка" */
  name: string
  /** @example "Фролов Вадим Вадимовчи" */
  directorFullName: string
  /** @example "test@mail.ru" */
  email: string
  /** @example "+7 965 451 87 12" */
  phone: string
}

export interface OrganizationEntity {
  /** @example 1 */
  id: number
  /** @example "ООО Чайка" */
  name: string
  /** @example "Фролов Вадим Вадимовчи" */
  directorFullName: string
  /** @example "test@mail.ru" */
  email: string
  /** @example "+7 965 451 87 12" */
  phone: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  created_at: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  updated_at: string
}

export interface CreatePavilionMapDto {
  /** @example "Лебяжье" */
  name: string
  /** @example "Респ. Татарстан, г. Казань, ул. Пушкина 152" */
  address: string
}

export interface PavilionMapEntity {
  /** @example 1 */
  id: number
  /** @example "ООО Чайка" */
  name: string
  /** @example "Респ. Татарстан, г. Казань, ул. Пушкина 152" */
  address: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  created_at: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  updated_at: string
}

export interface CreatePavilionDto {
  /** @example "Беседка Уютная" */
  name: string
  /** @example 70 */
  square: number
  /** @example "pavilion" */
  type: 'house' | 'pavilion'
  /** @example 100 */
  capacity: number
  /** @example 5 */
  bedrooms: number
  /** @example 5000 */
  price: number
  /** @example "/images/house-my.jpg" */
  mainImg: string
  /** @example ["/images/house-my.jpg","/images/pavilion.jpg"] */
  images: string[]
  /** @example 2 */
  pavilionMap: number
  /** @example [2,3,5] */
  extraServices: string[]
}

export interface PavilionEntity {
  /** @example 1 */
  id: number
  /** @example "Беседка Уютная" */
  name: string
  /** @example 70 */
  square: number
  /** @example "pavilion" */
  type: 'house' | 'pavilion'
  /** @example 100 */
  capacity: number
  /** @example 5 */
  bedrooms: number
  /** @example 5000 */
  price: number
  /** @example "/images/house-my.jpg" */
  mainImg: string
  /** @example ["/images/house-my.jpg","/images/pavilion.jpg"] */
  images: string[]
  /** @example 2 */
  pavilionMap: object
  /** @example [{"id":1,"src":"/uploads/filename.png","name":"Фуршет","created_at":"2023-02-17 01:43:31.438015+03","updated_at":"2023-02-17 01:43:31.438015+03"}] */
  extraServices: string[]
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  created_at: string
  /**
   * @format date-time
   * @example "2023-02-17 01:43:31.438015+03"
   */
  updated_at: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = ''
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title Item API
 * @version 1.0.0
 * @contact
 *
 * My Item API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @name AppControllerGetHello
     * @request GET:/api
     */
    appControllerGetHello: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerGetUserByToken
     * @summary Получить пользователя
     * @request GET:/api/user/me
     */
    userControllerGetUserByToken: (params: RequestParams = {}) =>
      this.request<UserEntity, any>({
        path: `/api/user/me`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Авторизация
     * @name AuthControllerLogin
     * @summary Авторизация пользователя
     * @request POST:/api/auth/login
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<TokensDto, any>({
        path: `/api/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Авторизация
     * @name AuthControllerRegistration
     * @summary Регистрация пользователя
     * @request POST:/api/auth/signup
     */
    authControllerRegistration: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<TokensDto, any>({
        path: `/api/auth/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Авторизация
     * @name AuthControllerRefreshTokens
     * @summary Обновление токенов через refresh токен
     * @request POST:/api/auth/refresh
     */
    authControllerRefreshTokens: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<TokensDto, any>({
        path: `/api/auth/refresh`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Организация
     * @name OrganizationControllerGetUserByToken
     * @summary Создать организацию
     * @request POST:/api/organization/create
     * @secure
     */
    organizationControllerGetUserByToken: (data: CreateOrganizationDto, params: RequestParams = {}) =>
      this.request<OrganizationEntity, any>({
        path: `/api/organization/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Карта беседок
     * @name PavilionMapControllerGetUserByToken
     * @summary Создать карту беседок
     * @request POST:/api/pavilion_map/create
     */
    pavilionMapControllerGetUserByToken: (data: CreatePavilionMapDto, params: RequestParams = {}) =>
      this.request<PavilionMapEntity, any>({
        path: `/api/pavilion_map/create`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Беседка
     * @name PavilionControllerCreatePavilion
     * @summary Создать беседку
     * @request POST:/api/pavilion/create
     */
    pavilionControllerCreatePavilion: (data: CreatePavilionDto, params: RequestParams = {}) =>
      this.request<PavilionEntity, any>({
        path: `/api/pavilion/create`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
