export type AuthConfig = {
  region: string
  identityPoolId: string
  userPoolId: string
  userPoolWebClientId: string
  authenticationFlowType: string
}

export const config: AuthConfig = {
  region: process.env.REACT_APP_AWS_REGION as string,
  identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID as string,
  userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID as string,
  userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID as string,
  authenticationFlowType: 'USER_PASSWORD_AUTH'
}
