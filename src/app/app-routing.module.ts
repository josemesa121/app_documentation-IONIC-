import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'agente-escrito',
    loadChildren: () => import('./pages/agente-escrito/agente-escrito.module').then( m => m.AgenteEscritoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'progreso-moodle',
    loadChildren: () => import('./pages/progreso-moodle/progreso-moodle.module').then( m => m.ProgresoMoodlePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agente-voz',
    loadChildren: () => import('./pages/agente-voz/agente-voz.module').then( m => m.AgenteVozPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-get-info',
    loadChildren: () => import('./pages/user-get-info/user-get-info.module').then( m => m.UserGetInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'actualizar-info',
    loadChildren: () => import('./pages/actualizar-info/actualizar-info.module').then( m => m.ActualizarInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'validate-user',
    loadChildren: () => import('./pages/validate-user/validate-user.module').then( m => m.ValidateUserPageModule)
  },
  {
    path: 'device-register',
    loadChildren: () => import('./pages/device-register/device-register.module').then( m => m.DeviceRegisterPageModule)
  },
  {
    path: 'device-update',
    loadChildren: () => import('./pages/device-update/device-update.module').then( m => m.DeviceUpdatePageModule)
  },
  {
    path: 'device-get',
    loadChildren: () => import('./pages/device-get/device-get.module').then( m => m.DeviceGetPageModule)
  },
  {
    path: 'device-delete',
    loadChildren: () => import('./pages/device-delete/device-delete.module').then( m => m.DeviceDeletePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'accept-forgot-password',
    loadChildren: () => import('./pages/accept-forgot-password/accept-forgot-password.module').then( m => m.AcceptForgotPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'resend-validate-user',
    loadChildren: () => import('./pages/resend-validate-user/resend-validate-user.module').then( m => m.ResendValidateUserPageModule)
  },
  {
    path: 'meta-register',
    loadChildren: () => import('./pages/meta-register/meta-register.module').then( m => m.MetaRegisterPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meta-update',
    loadChildren: () => import('./pages/meta-update/meta-update.module').then( m => m.MetaUpdatePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meta-get-all',
    loadChildren: () => import('./pages/meta-get-all/meta-get-all.module').then( m => m.MetaGetAllPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meta-get',
    loadChildren: () => import('./pages/meta-get/meta-get.module').then( m => m.MetaGetPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meta-delete',
    loadChildren: () => import('./pages/meta-delete/meta-delete.module').then( m => m.MetaDeletePageModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
