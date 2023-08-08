import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component'; 
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component'; 
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AnimationTestComponent } from './animation-test/animation-test.component';



//import { AnimationTestComponent } from './animation-test/animation-test.component';


const routes: Routes = [ 
   { path: 'login', component: LoginComponent },
   { path: 'content', component: ContentComponent },
   { path: 'databinding', component: DataBindingComponent },
   { path: 'eventbinding', component: EventBindingComponent },
   { path: 'expenseentry', component: ExpenseEntryComponent },
   { path: 'directive', component: DirectiveComponent },
   { path: 'pipes', component: PipesComponent },
   { path: 'reactive', component: ReactiveComponent },
   { path: 'expenses', component: ExpenseEntryListComponent }, 
   { path: 'expenses/detail/:id', component: ExpenseEntryComponent }, 
   { path: 'animations', component: AnimationTestComponent},
   { path: '', redirectTo: 'expenses', pathMatch: 'full' }]; 
  
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] }) 
export class AppRoutingModule { }