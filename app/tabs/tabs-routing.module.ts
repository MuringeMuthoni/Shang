import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'tab-live-classes',
        loadChildren: () => import('../tab-live-classes/tab-live-classes.module').then(m => m.TabLiveClassesPageModule)
      },
      {
        path: 'tab-search',
        loadChildren: () => import('../tab-search/tab-search.module').then(m => m.TabSearchPageModule)
      },
      {
        path: 'tab-wishlist',
        loadChildren: () => import('../tab-wishlist/tab-wishlist.module').then(m => m.TabWishlistPageModule)
      },     
      {
        path: 'tab-account',
        loadChildren: () => import('../tab-account/tab-account.module').then(m => m.TabAccountPageModule)
      },      
      {
        path: 'tab-mycourses',
        loadChildren: () => import('../tab-mycourses/tab-mycourses.module').then(m => m.TabMycoursesPageModule)
      },      
         
      // {
      //   path: 'CartTest',
      //   loadChildren: () => import('../CartTest/CartTest.module').then(m => m.CartTestPageModule)
      // },    
      {
        path: '',
        redirectTo: 'tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab-live-classes',
    pathMatch: 'full'
  }
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
