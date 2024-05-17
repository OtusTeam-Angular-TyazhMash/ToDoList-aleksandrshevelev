import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { AngularMaterialModule } from './angular-material.module';
import { SharedModule } from './shared/shared.module';
import { ToDoCreateItemComponent } from './components/to-do-create-item/to-do-create-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToDoItemViewComponent } from './components/to-do-item-view/to-do-item-view.component';

@NgModule({
    declarations: [
        AppComponent,
        ToDoListComponent,
        ToDoListItemComponent,
        ToDoCreateItemComponent,
        ToDoItemViewComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        SharedModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
