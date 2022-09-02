// /** @jsx jsx */
// import { jsx } from '@emotion/core'
// import React, { Dispatch } from 'react'
// import { Route, RouteProps } from 'react-router-dom'
// import { AppState } from '../redux'
// import qs from 'query-string'
// import { push, replace } from 'connected-react-router'

// const escape = encodeURIComponent

// interface RouteWithLayoutProps extends RouteProps {
//   layout: any
//   component: any
// }

// export const RouteWithLayout = ({
//   layout,
//   component,
//   ...props
// }: RouteWithLayoutProps) => {
//   return (
//     <Route
//       {...props}
//       element={(props: any) =>
//         React.createElement(
//           layout,
//           props,
//           React.createElement(component, props)
//         )
//       }
//     />
//   )
// }

// export const mapRouterStateToProps = (state: AppState): RouterProps => ({
//   pathname: state.router.location.pathname,
//   query: state.router.location.search,
//   hash: state.router.location.hash,
// })

// export interface RouterProps {
//   pathname: string
//   query: string
//   hash: string
// }

// export const updateRouteWithQueryString = (
//   dispatch: Dispatch<any>,
//   route: string,
//   currentQuery: string,
//   updateQuery: { [key: string]: string | number | string[] | number[] },
//   recordHistory: boolean = true,
//   dryRun?: boolean
// ) => {}
