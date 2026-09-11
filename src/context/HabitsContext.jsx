import { createContext, useContext, useEffect, useState } from "react";
import { initialHabits } from "../data/Habits";

const STORAGE_KEY = "my-daily-habits:habits";

const HabitsContext = createContext(null);

function loadHabits() {
  const savedHabits = localStorage.getItem(STORAGE_KEY);

  if (!savedHabits) {
    return initialHabits;
  }

  try {
    const parsedHabits = JSON.parse(savedHabits);

    return Array.isArray(parsedHabits)
      ? parsedHabits
      : initialHabits;
  } catch {
    return initialHabits;
  }
}

export function HabitsProvider({ children }) {
  const [habits, setHabits] = useState(loadHabits);

  const completedCount = habits.filter(
    (habit) => habit.completed,
  ).length;

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(habits),
    );
  }, [habits]);

  function handleToggleHabit(habitId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === habitId
          ? { ...habit, completed: !habit.completed }
          : habit,
      ),
    );
  }

  function handleAddHabit(newHabit) {
    setHabits((currentHabits) => [
      ...currentHabits,
      newHabit,
    ]);
  }

  return (
    <HabitsContext.Provider
      value={{
        habits,
        completedCount,
        handleToggleHabit,
        handleAddHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
}

export function useHabits() {
  return useContext(HabitsContext);
}

export default HabitsContext;