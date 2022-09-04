import request from '~/modules/request/index'
import { bldgBaseApiUri } from '~/modules/request/api'

const prefix = bldgBaseApiUri

export default {
  createToken: async (username: string, password: string) => {
    const url = `${prefix}/token`
    const res = await request.postToken({
      url: url,
      params: {
        username,
        password
      }
    })
    return res
  }
}
