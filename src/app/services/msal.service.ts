import { Injectable } from '@angular/core';

import * as Msal from 'msal';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MsalService {

  appConfig = {
    b2cScopes: environment.ADB2cScopes,
  };

  msalConfig = {
    auth: {
      clientId: environment.ADClientId, //This is your client ID
      authority: environment.ADAuthority, //This is your tenant info
      validateAuthority: false,
      redirectUri: environment.redirectUri
    }
  };

  // instantiate MSAL
  myMSALObj = new Msal.UserAgentApplication(this.msalConfig);

  // request to signin - returns an idToken
  loginRequest = {
    scopes: this.appConfig.b2cScopes
  };

  // request to acquire a token for resource access
  tokenRequest = {
    scopes: this.appConfig.b2cScopes
  };

  constructor(
    private router: Router
  ) { }

  // signin and acquire a token silently with POPUP flow. Fall back in case of failure with silent acquisition to popup
  signIn() {
    this.myMSALObj.loginPopup(this.loginRequest)
    
    .then( loginResponse => {
      console.log(loginResponse);
      this.router.navigate(['/agente-escrito']);

      // console.log(localStorage.getItem('msal.idtoken'));
      // this.getToken(this.tokenRequest).then(this.updateUI);
    }).catch(function (error) {
      console.log(error);
    });
  }

  //acquire a token silently
  // getToken(tokenRequest) {
  //   return this.myMSALObj.acquireTokenSilent(tokenRequest).catch(function(error) {
  //     console.log("aquire token popup");
  //     // fallback to interaction when silent call fails
  //     return this.myMSALObj.acquireTokenPopup(tokenRequest).then(function (tokenResponse) {
  //     }).catch(function(error){
  //       console.log('Failed token acquisition', error);
  //     });
  //   });
  // }

  isLoggedIn(): boolean {
    return this.myMSALObj.getAccount() != null;
  };

  // signout the user
  logout() {
    // Removes all sessions, need to call AAD endpoint to do full logout
    this.myMSALObj.logout();
  }
  
}
