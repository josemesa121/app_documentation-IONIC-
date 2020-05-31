import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetaDeletePage } from './meta-delete.page';

const routes: Routes = [
  {
    path: '',
    component: MetaDeletePage,
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
        redirectTo: '/meta-delete/test',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetaDeletePageRoutingModule {}
