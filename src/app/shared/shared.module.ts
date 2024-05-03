import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
    declarations: [
        ButtonComponent,
        TooltipDirective,
        TooltipComponent,
        ToastComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
    ],
    providers: [
        ToastService,
    ],
    exports: [
        ButtonComponent,
        TooltipDirective,
    ],
})
export class SharedModule { }
