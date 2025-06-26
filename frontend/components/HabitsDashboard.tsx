"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";
import {
  SlideInOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { habitsApi, trackingApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Tracking {
  id: number;
  date: string;
  isCompleted: boolean;
  habitId: number;
}

interface FunctionalHabit {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  trackings: Tracking[];
  completed: boolean[]; // Propiedad para el estado de completado semanal en el frontend
}

export function HabitsDashboard() {
  const [habits, setHabits] = useState<FunctionalHabit[]>([]);
  const [newHabitName, setNewHabitName] = useState("");
  const days = ["L", "M", "X", "J", "V", "S", "D"];

  // Helper para obtener el número de la semana en formato YYYY-WW
  const getWeekNumber = (d: Date): string => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getFullYear(), 0, 1));
    const weekNo = Math.ceil(
      ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
    );
    return `${d.getUTCFullYear()}-${weekNo < 10 ? "0" : ""}${weekNo}`;
  };

  const fetchHabitsAndProgress = async () => {
    try {
      const habitsResponse = await habitsApi.getAllHabits();
      const currentWeek = getWeekNumber(new Date());
      console.log("Frontend: Solicitando progreso semanal para:", currentWeek);
      const weeklyProgressResponse = await trackingApi.getWeeklyProgress(
        currentWeek
      );

      const mergedHabits: FunctionalHabit[] = habitsResponse.data.map(
        (habit) => {
          const progressForHabit = weeklyProgressResponse.data.find(
            (wp) => wp.id === habit.id
          );
          const completedDays: boolean[] = [];

          // Calcular la fecha de inicio de la semana (Lunes)
          const [yearStr, weekStr] = currentWeek.split("-");
          const year = parseInt(yearStr);
          const weekNumber = parseInt(weekStr);

          const simpleDate = new Date(year, 0, 1 + (weekNumber - 1) * 7);
          const dayOfWeek = simpleDate.getDay();
          const startDate = new Date(
            simpleDate.getFullYear(),
            simpleDate.getMonth(),
            simpleDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
          );

          for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            const formattedDate = date.toISOString().split("T")[0];
            const isCompleted =
              progressForHabit?.trackings.some(
                (t: any) =>
                  new Date(t.date).toISOString().split("T")[0] ===
                    formattedDate && t.isCompleted
              ) || false;
            completedDays.push(isCompleted);
          }

          return {
            ...habit,
            completed: completedDays,
            trackings: progressForHabit?.trackings || [],
          };
        }
      );
      setHabits(mergedHabits);
    } catch (error) {
      console.error("Error fetching habits or weekly progress:", error);
      // TODO: Manejar el estado de error en la UI
    }
  };

  useEffect(() => {
    fetchHabitsAndProgress();
  }, []);

  const handleCreateHabit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    try {
      await habitsApi.createHabit({ name: newHabitName });
      setNewHabitName("");
      fetchHabitsAndProgress(); // Recargar hábitos después de crear uno nuevo
    } catch (error) {
      console.error("Error creating habit:", error);
      // TODO: Manejar el estado de error en la UI
    }
  };

  const handleToggleTracking = async (habitId: number, dayIndex: number) => {
    try {
      const currentWeek = getWeekNumber(new Date());
      const [yearStr, weekStr] = currentWeek.split("-");
      const year = parseInt(yearStr);
      const weekNumber = parseInt(weekStr);

      const simpleDate = new Date(year, 0, 1 + (weekNumber - 1) * 7);
      const dayOfWeek = simpleDate.getDay();
      const startDate = new Date(
        simpleDate.getFullYear(),
        simpleDate.getMonth(),
        simpleDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
      );

      const targetDate = new Date(startDate);
      targetDate.setDate(startDate.getDate() + dayIndex);
      const formattedDate = targetDate.toISOString().split("T")[0];

      const habitToUpdate = habits.find((h) => h.id === habitId);
      const existingTracking = habitToUpdate?.trackings.find(
        (t) => new Date(t.date).toISOString().split("T")[0] === formattedDate
      );

      if (existingTracking) {
        // Actualizar el registro existente
        await trackingApi.updateTracking(existingTracking.id, {
          isCompleted: !existingTracking.isCompleted,
        });
      } else {
        // Crear un nuevo registro
        await trackingApi.createTracking({
          habitId,
          date: formattedDate,
          isCompleted: true, // Asumimos que al hacer clic por primera vez se marca como completado
        });
      }
      fetchHabitsAndProgress(); // Recargar hábitos y progreso después de actualizar el seguimiento
    } catch (error) {
      console.error("Error toggling tracking:", error);
      // TODO: Manejar el estado de error en la UI
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <SlideInOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tu progreso, siempre visible
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visualiza tus hábitos de forma clara y mantente motivado con cada
            logro
          </p>
        </div>
      </SlideInOnScroll>

      <SlideInOnScroll delay={0.3}>
        <div className="max-w-4xl mx-auto">
          {/* Formulario para añadir nuevo hábito */}
          <Card className="mb-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Añadir Nuevo Hábito</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleCreateHabit} className="flex space-x-4">
                <Input
                  type="text"
                  placeholder="Nombre del Hábito"
                  value={newHabitName}
                  onChange={(e) => setNewHabitName(e.target.value)}
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Añadir Hábito
                </Button>
              </form>
            </CardContent>
          </Card>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <motion.div
                {...({
                  className:
                    "bg-gradient-to-r from-green-500 to-blue-500 text-white",
                } as HTMLMotionProps<"div">)}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Dashboard de Hábitos
                  </CardTitle>
                  <CardDescription className="text-green-100">
                    Semana actual
                  </CardDescription>
                </CardHeader>
              </motion.div>
              <CardContent className="p-6">
                <StaggerContainer className="space-y-4">
                  {habits.length === 0 ? (
                    <p className="text-gray-500 text-center">
                      No tienes hábitos todavía. ¡Añade uno!
                    </p>
                  ) : (
                    habits.map((habit) => (
                      <StaggerItem key={habit.id}>
                        <motion.div
                          {...({
                            className:
                              "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
                          } as HTMLMotionProps<"div">)}
                          whileHover={{ x: 5, backgroundColor: "#f0fdf4" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              </motion.div>
                              <span className="font-medium text-gray-900">
                                {habit.name}
                              </span>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-700"
                              >
                                {habit.trackings?.filter((t) => t.isCompleted)
                                  .length || 0}{" "}
                                días completados
                              </Badge>
                            </motion.div>
                          </div>
                          <div className="flex space-x-1">
                            {days.map((dayLabel, dayIndex) => {
                              const isCompleted =
                                habit.completed?.[dayIndex] || false;
                              return (
                                <motion.div
                                  key={dayLabel}
                                  {...({
                                    className: "text-center",
                                  } as HTMLMotionProps<"div">)}
                                  whileHover={{ scale: 1.2, y: -2 }}
                                  transition={{ duration: 0.2 }}
                                  onClick={() =>
                                    handleToggleTracking(habit.id, dayIndex)
                                  }
                                >
                                  <div className="text-xs text-gray-500 mb-1">
                                    {dayLabel}
                                  </div>
                                  <motion.div
                                    {...({
                                      className: `w-8 h-8 rounded-full flex items-center justify-center ${
                                        isCompleted
                                          ? "bg-green-500 text-white"
                                          : "bg-gray-200 text-gray-400"
                                      }`,
                                    } as HTMLMotionProps<"div">)}
                                    whileHover={{
                                      scale: 1.1,
                                      boxShadow: isCompleted
                                        ? "0 0 20px rgba(34, 197, 94, 0.5)"
                                        : "0 0 10px rgba(0, 0, 0, 0.1)",
                                    }}
                                    animate={
                                      isCompleted
                                        ? {
                                            boxShadow: [
                                              "0 0 0px rgba(34, 197, 94, 0.5)",
                                              "0 0 20px rgba(34, 197, 94, 0.3)",
                                              "0 0 0px rgba(34, 197, 94, 0.5)",
                                            ],
                                          }
                                        : {}
                                    }
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                    }}
                                  >
                                    {isCompleted ? "✓" : "○"}
                                  </motion.div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))
                  )}
                </StaggerContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SlideInOnScroll>
    </section>
  );
}
