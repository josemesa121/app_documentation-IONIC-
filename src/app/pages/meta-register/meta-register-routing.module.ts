import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetaRegisterPage } from './meta-register.page';

const routes: Routes = [
  {
    path: '',
    component: MetaRegisterPage,
    children: [
      {
        path: 'docs',
        children: [
          {
            path: '',
            loadChildren: () => import('./docs/docs.module').then(m => m.DocsPageModule)
          }
        ]
      },
      {
        path: 'test',
        children: [
          {
            path: '',
            loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
          }
        ]
      },
      {
        path: 'code',
        children: [
          {
            path: '',
            loadChildren: () => import('./code/code.module').then(m => m.CodePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/meta-register/test',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetaRegisterPageRoutingModule {}
