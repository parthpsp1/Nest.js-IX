import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const id = new Date().toString();
        const newTask: Task = {
            id,
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(newTask);
        return newTask;
    }
}
