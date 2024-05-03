import { Injectable } from '@angular/core';
import { ToDoListItem } from 'src/app/models/to-do-list-models';

@Injectable({
    providedIn: 'root',
})
export class ToDoListService {
    private toDoListItems: Array<ToDoListItem> = [
        { id: 0, text: "Complete task 1", description: "Description for task 1" },
        { id: 1, text: "Complete task 2", description: "Description for task 2" },
        { id: 2, text: "Complete task 3", description: "Description for task 3" },
        { id: 3, text: "Complete task 4", description: "Description for task 4" },
        { id: 4, text: "Complete task 5", description: "Description for task 5" },
    ];

    get getToDoListItems() {
        return this.toDoListItems;
    }

    getToDoListItemById(itemId: ToDoListItem["id"]): ToDoListItem | undefined {
        return this.toDoListItems.find(item => item.id === itemId);
    }

    addToDoListItem(text: ToDoListItem["text"], description: ToDoListItem["description"]): void {
        const maxItemId = Math.max(...this.toDoListItems.map(item => item.id), -1);
        this.toDoListItems.push({
            id: maxItemId + 1,
            text: text,
            description: description,
        });
    }

    deleteToDoListItemById(itemId: ToDoListItem["id"]): boolean {
        const itemIndex = this.toDoListItems.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            this.toDoListItems.splice(itemIndex, 1);
            return true;
        }
        else
            return false;
    }

    editToDoListItemTitleById(itemId: ToDoListItem["id"], text: ToDoListItem["text"]): boolean {
        const itemIndex = this.toDoListItems.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            this.toDoListItems[itemIndex].text = text;
            return true;
        } else
            return false;
    }
}
