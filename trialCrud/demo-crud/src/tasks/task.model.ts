export interface Task {
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
}

export enum TaskStatus {
    OPEN = "Open",
    DONE = "Done",
    IN_PROGRESS = "In Progress"
}