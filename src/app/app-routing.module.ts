import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'backlog',
        pathMatch: 'full',
    },
    {
        path: 'backlog',
        loadChildren: () => import('./modules/backlog/backlog.module')
            .then(m => m.BacklogModule),
    },
    {
        path: 'board',
        loadChildren: () => import('./modules/board/board.module')
            .then(m => m.BoardModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(AppRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
