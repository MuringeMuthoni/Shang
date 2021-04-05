import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'default',
    loadChildren: () => import('./default/default.module').then( m => m.DefaultPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab-home',
    loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
  },
  {
    path: 'tab-live-classes',
    loadChildren: () => import('./tab-live-classes/tab-live-classes.module').then( m => m.TabLiveClassesPageModule)
  },
  {
    path: 'tab-search',
    loadChildren: () => import('./tab-search/tab-search.module').then( m => m.TabSearchPageModule)
  },
  {
    path: 'tab-mycourses',
    loadChildren: () => import('./tab-mycourses/tab-mycourses.module').then( m => m.TabMycoursesPageModule)
  },
  {
    path: 'tab-wishlist',
    loadChildren: () => import('./tab-wishlist/tab-wishlist.module').then( m => m.TabWishlistPageModule)
  },
  {
    path: 'tab-account',
    loadChildren: () => import('./tab-account/tab-account.module').then( m => m.TabAccountPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
