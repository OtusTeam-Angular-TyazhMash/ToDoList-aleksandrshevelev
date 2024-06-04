import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogComponent } from './backlog.component';
import { BacklogRoutingModule } from './backlog-routing.module';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ToDoCreateItemComponent } from './components/to-do-create-item/to-do-create-item.component';
import { ToDoItemViewComponent } from './components/to-do-item-view/to-do-item-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
    declarations: [
        BacklogComponent,
        ToDoListComponent,
        ToDoListItemComponent,
        ToDoCreateItemComponent,
        ToDoItemViewComponent,
    ],
    imports: [
        CommonModule,
        BacklogRoutingModule,
        FormsModule,
        AngularMaterialModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class BacklogModule { }
