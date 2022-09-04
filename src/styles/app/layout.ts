import { css } from '@emotion/core'
import { greaterThan } from '../utils/media'

export const LayoutStyle = css`
  ${greaterThan('large')} {
    max-width: 1760px;
    padding-right: 80px;
    padding-left: 80px;
    margin: 0px auto;
  }

  ${greaterThan('medium')} {
    padding-left: 40px;
    padding-right: 40px;
  }

  padding-left: 24px;
  padding-right: 24px;
  max-width: 1600px;
`
