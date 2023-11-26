import { Task } from "../types/Task";

const API_URL = "https://back-ap-react.onrender.com/tasks";

export const TaskService = {
    getAllTasks: async (): Promise<Task[]> => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        return data;
    },

    getOneTask: async (id: number): Promise<Task> => {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return data;
    },

    getTasksByCategory: async (category: string): Promise<Task[]> => {
        const response = await fetch(`${API_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    },

    deleteTask: async (id: number): Promise<void> => {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
    },

    updateStatusTask: async (id: number, newStatus: string): Promise<Task> => {
        return fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ estado: newStatus }),
        })
        .then((response) => response.json())
        .then(json => {return json})
        .catch((error) => error);
    },

    createTask: async (task: Task): Promise<Task> => {
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
        const data = await response.json(); 
        return data;
    }
};

export default TaskService;