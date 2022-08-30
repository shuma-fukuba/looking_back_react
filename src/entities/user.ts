import { EntitySchema, Entity, UuidType, Optional } from './base'
import { PosseYear } from './posse-year'

interface _UserSchema extends EntitySchema<UuidType> {
  username: string
  email: string
  hashedPassword: string
  university: string
  universityEntranceYear: number
  lineId: Optional<string>
  githubUsername: Optional<string>
  githubRepository: Optional<string>
  githubAccessToken: Optional<string>
}

export interface ResponseUserSchema extends _UserSchema {
  posseYear: Optional<PosseYear>
}

export interface UserSchema extends _UserSchema {
  posseYear: Optional<PosseYear>
}

export class User extends Entity<UuidType> implements UserSchema {
  username: string
  email: string
  hashedPassword: string
  university: string
  universityEntranceYear: number
  lineId: Optional<string>
  githubUsername: Optional<string>
  githubRepository: Optional<string>
  githubAccessToken: Optional<string>

  private _posseYear: Optional<PosseYear>

  constructor(props: UserSchema | ResponseUserSchema) {
    super(props)
    this.username =
      (props as UserSchema).username || (props as ResponseUserSchema).username
    this.email =
      (props as UserSchema).email || (props as ResponseUserSchema).email
    this.hashedPassword =
      (props as UserSchema).hashedPassword ||
      (props as ResponseUserSchema).hashedPassword
    this.university =
      (props as UserSchema).university ||
      (props as ResponseUserSchema).university
    this.universityEntranceYear =
      (props as UserSchema).universityEntranceYear ||
      (props as ResponseUserSchema).universityEntranceYear

    this._posseYear =
      (props as UserSchema).posseYear || (props as ResponseUserSchema).posseYear
  }

  get posseYear(): PosseYear | undefined {
    return this._posseYear
  }

  get posseYearNum(): number | undefined {
    return this._posseYear?.year
  }
}
