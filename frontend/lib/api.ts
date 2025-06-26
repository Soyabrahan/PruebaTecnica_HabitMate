import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Endpoints para hábitos
export const habitsApi = {
  createHabit: (habitData: { name: string; userId: number }) =>
    api.post("/habitos", habitData),
  getHabitsByUserId: (userId: number) => api.get(`/habitos?userId=${userId}`),
  updateHabit: (id: number, habitData: { name?: string }) =>
    api.patch(`/habitos/${id}`, habitData),
  deleteHabit: (id: number) => api.delete(`/habitos/${id}`),
};

// Endpoints para seguimiento
export const trackingApi = {
  createTracking: (trackingData: {
    habitId: number;
    date: string;
    completed: boolean;
  }) => api.post("/seguimiento", trackingData),
  getTrackingById: (id: number) => api.get(`/seguimiento/${id}`),
  updateTracking: (id: number, trackingData: { completed?: boolean }) =>
    api.patch(`/seguimiento/${id}`, trackingData),
  deleteTracking: (id: number) => api.delete(`/seguimiento/${id}`),
  getWeeklyProgress: (userId: number, semana: string) =>
    api.get(`/seguimiento/${userId}/weekly-progress?semana=${semana}`),
};

export default api;
