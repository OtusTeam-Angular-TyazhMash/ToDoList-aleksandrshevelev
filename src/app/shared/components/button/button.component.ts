import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() title!: string;
    @Input() buttonClass: 'button-delete' | 'button-add' | null = null;
    @Input() isDisable = false;
}
