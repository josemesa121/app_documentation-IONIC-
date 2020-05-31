import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../services/data.service';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  canActivate() {

    if (this.dataService.loggedIn()) {
      return true;
    }

    Swal.fire({
      title: 'Inautorizado',
      text: 'debes iniciar sesión primero',
      icon: 'warning',
      confirmButtonText: 'Ok'
    });

    this.router.navigate(['/log-in']);
    return false;
  }

}
