import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ToastComponent } from './components/toast/toast.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
    declarations: [
        ButtonComponent,
        TooltipDirective,
        TooltipComponent,
        ToastComponent,
        LoadingSpinnerComponent,
        LanguageSelectorComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [
        ButtonComponent,
        TooltipDirective,
        LoadingSpinnerComponent,
        LanguageSelectorComponent,
    ],
})
export class SharedModule { }
