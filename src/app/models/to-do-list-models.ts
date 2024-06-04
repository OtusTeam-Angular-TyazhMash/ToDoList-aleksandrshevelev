// Модель элемента списка ToDoList
export interface ToDoListItem {
    id: number,
    text: string,
    description: string,
    status: ToDoListItemStatus
}

// Статусы элемента списка ToDoList
export enum ToDoListItemStatus {
    InProgress = "In Progress",
    Completed = "Completed"
}