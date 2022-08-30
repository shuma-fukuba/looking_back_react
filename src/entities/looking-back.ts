import { Entity, UuidType, EntitySchema, Optional } from './base'
import { WeekSchema } from './week'
import { UserSchema } from './user'

interface _LookingBackSchema extends EntitySchema<UuidType> {
  goodPoint: string
  whyItWorked: string
  shouldContinue: string
  badPoint: string
  whyItDidntWorked: string
  shouldStop: string
  improvePoint: string
}

export interface LookingBackSchema extends _LookingBackSchema {
  week: WeekSchema
  user: UserSchema
}

// TODO set respose model
export interface ResponseLookingBackSchema extends _LookingBackSchema {}

export class LookingBack extends Entity<UuidType> implements LookingBackSchema {
  goodPoint: string
  whyItWorked: string
  shouldContinue: string
  badPoint: string
  whyItDidntWorked: string
  shouldStop: string
  improvePoint: string

  private _week
  private _user

  constructor(props: LookingBackSchema) {
    super(props)
    this.goodPoint = (props as LookingBackSchema).goodPoint
    this.whyItWorked = (props as LookingBackSchema).whyItWorked
    this.shouldContinue = (props as LookingBackSchema).shouldContinue
    this.badPoint = (props as LookingBackSchema).badPoint
    this.whyItDidntWorked = (props as LookingBackSchema).whyItDidntWorked
    this.shouldStop = (props as LookingBackSchema).shouldStop
    this.improvePoint = (props as LookingBackSchema).improvePoint

    this._week = (props as LookingBackSchema).week
    this._user = (props as LookingBackSchema).user
  }

  get week(): WeekSchema {
    return this._week
  }

  get user(): UserSchema {
    return this._user
  }
}
