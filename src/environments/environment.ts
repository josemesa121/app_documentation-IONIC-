// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // AC B2C
  ADClientId: 'c9b5745b-5e00-45e3-bd45-0cd3b773d630',
  ADAuthority: 'https://smartutorks.b2clogin.com/smartutorks.onmicrosoft.com/B2C_1_smartTutor',
  ADB2cScopes: ['openid'],

  // URL
  baseUrl: 'https://cors-anywhere.herokuapp.com/https://smartutor-dev.azurewebsites.net/api',
  logIn: '/login',
  validateUser: '/validate_user',
  resendValidateUser: '/resend_validate_user',
  forgotPassword: '/forgot_password',
  acceptForgotPassword: '/accept_forgot_password',
  changePassword: '/change_password',
  agenteEscrito: '/agent',
  user: '/user',
  moodle: '/view_progress',
  redirectUri: 'https://devsmartutor.z13.web.core.windows.net/login/test',
  device: '/deviceRegister',
  meta: '/create_goal'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
