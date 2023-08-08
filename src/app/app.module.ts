import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturesComponent } from './features/features.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ChildComponent } from './child/child.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { DigitcountPipe } from './digitcount.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LoginComponent } from './login/login.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AnimationTestComponent } from './animation-test/animation-test.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ReactiveFormsModule} from '@angular/forms';
 


@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FeaturesComponent,
    CustomstyleDirective,
    ChildComponent,
    ExpenseEntryListComponent,
    PipesComponent,
    DigitcountPipe,
    DataBindingComponent,
    LoginComponent,
    EventBindingComponent,
    DirectiveComponent,
    ReactiveComponent,
    AnimationTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [HeaderComponent, ContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
