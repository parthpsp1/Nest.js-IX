import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
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

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
