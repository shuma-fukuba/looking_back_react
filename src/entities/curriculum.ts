import { EntitySchema, Entity, UuidType, Optional } from './base'
import { WeekSchema } from './week'

interface _CurriculumSchema extends EntitySchema<UuidType> {
  curriculumName: string
}

export interface ResponseCurriculumSchema extends _CurriculumSchema {
  week: WeekSchema
}

class Curriculum extends Entity<UuidType> implements ResponseCurriculumSchema {
  curriculumName: string

  private _week: WeekSchema

  constructor(props: ResponseCurriculumSchema) {
    super(props)
    this.curriculumName = (props as ResponseCurriculumSchema).curriculumName

    this._week = (props as ResponseCurriculumSchema).week
  }
  get week(): WeekSchema {
    return this._week
  }
}

export class InputCurriculum extends Curriculum {}

export class OutputCurriculums extends Curriculum {}
