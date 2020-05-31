import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import axios from 'axios';
const axiosClient = axios.create();

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router: Router
  ) { }

  logIn(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.logIn,
      data: {
        email: test.email,
        password: test.password
      }
    });
  }

  userRegister(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.user,
      data: test
    });
  }

  userValidate(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.validateUser,
      data: test
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return  localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


  agenteEscrito(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.agenteEscrito + '?q=' + test.q,
      headers: {
        Authorization: this.getToken()
      }
    });
  }

  userGetInfo(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.user + '?email=' + test.email,
      headers: {
        Authorization: this.getToken(),
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  }

  userUpdate(test) {
    return axiosClient({
      method: 'put',
      url: environment.baseUrl + environment.user,
      headers: {
        Authorization: this.getToken(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: test
    });
  }

  moodleGet() {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.moodle,
      headers: {
        Authorization: this.getToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  }

  deviceRegister(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.device,
      data: test
    });
  }

  deviceUpdate(test) {
    return axiosClient({
      method: 'put',
      url: environment.baseUrl + environment.device,
      data: test
    });
  }

  deviceGet(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.device + '?deviceId=' + test.deviceId
    });
  }

  deviceDelete(test) {
    return axiosClient({
      method: 'delete',
      url: environment.baseUrl + environment.device,
      data: test
    });
  }

  forgotPassword(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.forgotPassword + '?email=' + test.email,
    });
  }

  acceptForgotPassword(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.acceptForgotPassword,
      data: test
    });
  }

  changePassword(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.changePassword,
      data: test
    });
  }

  resendValidateUser(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.resendValidateUser + '?email=' + test.email,
      data: test
    });
  }

  // Funcion para convertir formato de hora 24 a 12
  tConvert(time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }


  metaRegister(test) {
    return axiosClient({
      method: 'post',
      url: environment.baseUrl + environment.meta,
      headers: {
        Authorization: this.getToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: test
    });
  }

  metaUpdate(test) {
    return axiosClient({
      method: 'put',
      url: environment.baseUrl + environment.meta,
      headers: {
        Authorization: this.getToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: test
    });
  }

  metaGetAll(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.meta,
      headers: {
        Authorization: this.getToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: test
    });
  }

  metaGet(test) {
    return axiosClient({
      method: 'get',
      url: environment.baseUrl + environment.meta + '?id=' + test.id,
      headers: {
        Authorization: this.getToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  metaDelete(test) {
    return axiosClient({
      method: 'delete',
      url: environment.baseUrl + environment.meta,
      headers: {
        Authorization: this.getToken(),
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: test
    });
  }
}
