import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatMenuModule,
    ],
})
export class AngularMaterialModule { }
