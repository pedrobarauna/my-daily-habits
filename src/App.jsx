import { useState } from "react";
import "./App.css";
import HabitList from "./components/HabitList";
import Panel from "./components/Panel";
import HabitForm from "./components/HabitForm";
import { initialHabits } from "./data/Habits";

export default function App() {
  const [habits, setHabits] = useState(initialHabits);

  const completedCount = habits.filter((habit) => habit.completed).length;

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
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>

        <h1>Minha Rotina Diária</h1>

        <p>
          {completedCount} de {habits.length} hábitos concluídos.
        </p>
      </header>

      <Panel title="Novo hábito">
        <HabitForm onAddHabit={handleAddHabit} />
      </Panel>

      <Panel title="Hábitos de hoje">
        <HabitList habits={habits} onToggle={handleToggleHabit} />
      </Panel>
    </main>
  );
}
