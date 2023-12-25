import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrawlComponent } from './crawl/crawl.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'crawl', component:CrawlComponent},
{path: 'login', component:LoginComponent},
{path:'main', component:MainComponent},
{path:'search', component:SearchComponent},
{path:'account', component:AccountComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
