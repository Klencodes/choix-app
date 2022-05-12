import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserType } from './core/models/user';
import { LayoutComponent } from './layout/layout.component';
import { CreateOrganizationComponent } from './pages/account/create-organization/create-organization.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateVoteComponent } from './pages/vote-module/create-vote/create-vote.component';
import { VotesComponent } from './pages/vote-module/votes/votes.component';

const routes: Routes = [

  { path: '', component: LayoutComponent, children: [
    { path: '', component: DashboardComponent,  },
    { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },

    { path: 'votes', component: VotesComponent, data: { title: 'Votes' } },
    { path: 'votes/create-vote', component: CreateVoteComponent, data: { title: 'Create Vote' } },

    { path: 'account/profile', component: ProfileComponent, data: { title: 'Profile' } },
    // { path: 'account/create-organization', component: CreateOrganizationComponent, data: { title: 'Create Organization' } },
  ], canActivate: [AuthGuard]},

  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },

  { path: '**', redirectTo:'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
