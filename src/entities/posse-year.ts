import { EntitySchema, UuidType } from './base'

export interface PosseYear extends EntitySchema<UuidType> {
  year: number
  entranceDate: string
}
