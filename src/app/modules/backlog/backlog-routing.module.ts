import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog.component';
import { ToDoItemViewComponent } from './components/to-do-item-view/to-do-item-view.component';

const routes: Routes = [
    {
        path: '',
        component: BacklogComponent,
        children: [
            {
                path: ':id',
                component: ToDoItemViewComponent,
            },
        ],
    },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class BacklogRoutingModule { }
