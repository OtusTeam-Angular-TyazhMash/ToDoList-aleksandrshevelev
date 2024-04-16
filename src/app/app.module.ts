import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
    declarations: [
        AppComponent,
        ToDoListComponent,
        ToDoListItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
