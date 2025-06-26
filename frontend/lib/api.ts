import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
console.log("API_URL used:", API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface Habit {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  trackings: Tracking[];
}

interface CreateHabitDto {
  name: string;
  description?: string;
}

interface Tracking {
  id: number;
  date: string;
  isCompleted: boolean;
  habitId: number;
}

interface CreateTrackingDto {
  date: string;
  isCompleted: boolean;
  habitId: number;
}

interface UpdateTrackingDto {
  date?: string;
  isCompleted?: boolean;
  habitId?: number;
}

// Endpoints para hábitos
export const habitsApi = {
  async createHabit(createHabitDto: CreateHabitDto) {
    return api.post<Habit>("/habitos", createHabitDto);
  },
  async getAllHabits() {
    return api.get<Habit[]>("/habitos");
  },
  async getHabitById(id: number) {
    return api.get<Habit>(`/habitos/${id}`);
  },
  async updateHabit(id: number, updateHabitDto: CreateHabitDto) {
    return api.patch<Habit>(`/habitos/${id}`, updateHabitDto);
  },
  async deleteHabit(id: number) {
    return api.delete<void>(`/habitos/${id}`);
  },
};

// Endpoints para seguimiento
export const trackingApi = {
  async createTracking(createTrackingDto: CreateTrackingDto) {
    return api.post<Tracking>("/seguimiento", createTrackingDto);
  },
  async getWeeklyProgress(week: string) {
    return api.get<Habit[]>(`/seguimiento/weekly-progress/${week}`);
  },
  async updateTracking(id: number, updateTrackingDto: UpdateTrackingDto) {
    return api.patch<Tracking>(`/seguimiento/${id}`, updateTrackingDto);
  },
};

export default api;
