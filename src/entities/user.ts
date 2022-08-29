import { EntitySchema, Entity, UuidType, Optional } from './base'

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
