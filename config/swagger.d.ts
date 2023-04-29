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
