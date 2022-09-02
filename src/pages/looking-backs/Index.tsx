import React, { memo } from 'react'

const Root: React.FC<any> = memo(() => {
  return <Component />
})

export const Component: React.FC<any> = () => {
  return <div>welcome to kingBack</div>
}

export default Root
