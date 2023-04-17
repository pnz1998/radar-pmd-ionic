import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageTabsComponent } from './page-tabs/page-tabs.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    component: PageTabsComponent,
    children: [
      {
        path: '',
        redirectTo: '/home/homePage', pathMatch: 'full'
      },
      {
        path: 'homePage',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'userPage',
        loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)
      }
    ]
  },
  {
    path: 'warning-analysis',
    loadChildren: () => import('./warning-analysis/warning-analysis.module').then(m => m.WarningAnalysisModule)
  },
  {
    path: 'warning-pending',
    loadChildren: () => import('./warning-pending/warning-pending.module').then(m => m.WarningPendingModule)
  },
  {
    path: 'warning-processed',
    loadChildren: () => import('./warning-processed/warning-processed.module').then(m => m.WarningProcessedModule)
  },
  {
    path: 'dormitory',
    loadChildren: () => import('./dormitory/dormitory.module').then(m => m.DormitoryModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
