import { EntitySchema, Entity, UuidType, Optional } from './base'
import { WeekSchema } from './week'
import { UserSchema } from './user'

interface _LearningTimeSchema extends EntitySchema<UuidType> {
  learningTime: number
}

export interface LearningTimeSchema extends _LearningTimeSchema {
  week: WeekSchema
  user: UserSchema
}

// TODO set response model
export interface ResponseLearningTimeSchema extends _LearningTimeSchema {}

export class LearningTime
  extends Entity<UuidType>
  implements LearningTimeSchema
{
  learningTime: number

  private _week
  private _user

  constructor(props: LearningTimeSchema) {
    super(props)
    this.learningTime = (props as LearningTimeSchema).learningTime

    this._week = (props as LearningTimeSchema).week
    this._user = (props as LearningTimeSchema).user
  }

  // TODO return week value
  get week(): WeekSchema {
    return this._week
  }

  get user(): UserSchema {
    return this._user
  }
}
