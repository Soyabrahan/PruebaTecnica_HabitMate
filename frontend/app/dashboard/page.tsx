/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { habitsApi } from "../../lib/api";

interface Habit {
  id: number;
  name: string;
  userId: number;
}

export default function DashboardPage() {
  const [newHabitName, setNewHabitName] = useState("");
  const [habits, setHabits] = useState<Habit[]>([]);
  const userId = 1; // Usaremos un userId fijo por ahora. Esto se manejará con autenticación.

  const fetchHabits = async () => {
    try {
      const response = await habitsApi.getHabitsByUserId(userId);
      setHabits(response.data);
    } catch (error) {
      console.error("Error fetching habits:", error);
      // Aquí podrías mostrar una notificación de error al usuario
    }
  };

  const handleCreateHabit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    try {
      const response = await habitsApi.createHabit({
        name: newHabitName,
        userId,
      });
      setHabits([...habits, response.data]);
      setNewHabitName("");
    } catch (error) {
      console.error("Error creating habit:", error);
      // Aquí podrías mostrar una notificación de error al usuario
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Hábitos</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Añadir Nuevo Hábito</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateHabit} className="flex space-x-4">
            <Input
              type="text"
              placeholder="Nombre del Hábito"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">Añadir Hábito</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mis Hábitos</CardTitle>
        </CardHeader>
        <CardContent>
          {habits.length === 0 ? (
            <p className="text-gray-500">
              No tienes hábitos todavía. ¡Añade uno!
            </p>
          ) : (
            <div className="grid gap-4">
              {habits.map((habit) => (
                <Card
                  key={habit.id}
                  className="p-4 flex items-center justify-between"
                >
                  <p className="font-medium">{habit.name}</p>
                  {/* Aquí podrías añadir botones para editar/eliminar o ver seguimiento */}
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
