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

export const translatedToDoListItemStatus: { [status in ToDoListItemStatus]: string } = {
    [ToDoListItemStatus.InProgress]: $localize`:@@in_progress:In progress`,
    [ToDoListItemStatus.Completed]: $localize`:@@completed:Completed`,
}