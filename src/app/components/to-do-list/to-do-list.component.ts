import { Component, OnInit } from '@angular/core';
import { ToDoListItem } from 'src/app/models/to-do-list-models';
import { ToDoListService } from './to-do-list.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    toDoInputText = "";
    toDoInputDescription = "";
    isLoading = true;
    selectedItemId: ToDoListItem["id"] | null = null;
    editedItemId: ToDoListItem["id"] | null = null;

    constructor(private toDoListService: ToDoListService,
        private toastService: ToastService) { }

    ngOnInit(): void {
        setTimeout(() => this.isLoading = false, 500);
    }

    get getToDoListItems() {
        return this.toDoListService.getToDoListItems;
    }

    addToDoListItem(): void {
        this.toDoListService.addToDoListItem(this.toDoInputText, this.toDoInputDescription);
        this.toDoInputText = "";
        this.toDoInputDescription = "";
        this.toastService.showToast("Item added");
    }

    deleteToDoListItemById(itemId: ToDoListItem["id"]): void {
        if (this.toDoListService.deleteToDoListItemById(itemId)) {
            if (itemId === this.selectedItemId)
                this.selectedItemId = null;
            this.toastService.showToast("Item deleted");
        }
    }

    editToDoListItemTitleById(itemId: ToDoListItem["id"], title: ToDoListItem["text"]): void {
        if (this.toDoListService.editToDoListItemTitleById(itemId, title)) {
            this.editedItemId = null;
            this.toastService.showToast("Item edited");
        }
    }

    setSelectedItemId(itemId: ToDoListItem["id"]): void {
        this.selectedItemId = itemId;
    }

    setEditedItemId(itemId: ToDoListItem["id"]): void {
        this.editedItemId = itemId;
    }

    getSelectedItemDescription(): ToDoListItem["description"] {
        if (this.selectedItemId !== null) {
            const toDoListItem = this.toDoListService.getToDoListItemById(this.selectedItemId);
            return toDoListItem ? toDoListItem.description : "";
        } else
            return "";
    }
}
