export interface TaskItem {
    id: string;
    title: string;
    description: string;
    date: Date;
    priority : string;
    comment: string;
    completed: boolean;
}