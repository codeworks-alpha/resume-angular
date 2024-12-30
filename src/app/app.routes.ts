import { Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';

export const routes: Routes = [
    { path: ':username', component: UserDetailComponent },
  ];
