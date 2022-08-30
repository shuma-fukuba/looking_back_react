import { EntitySchema, Entity, UuidType, Optional } from './base'

export interface WeekSchema extends EntitySchema<UuidType> {
  week: number
}
