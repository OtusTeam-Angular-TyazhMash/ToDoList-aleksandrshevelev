import { Component } from '@angular/core';
import { translations } from 'src/locale/translations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly translations = translations;
}
