import "./App.css";
import HabitList from "./components/HabitList";
import Panel from "./components/Panel";
import HabitForm from "./components/HabitForm";
import { useHabits, HabitsProvider } from "./context/HabitsContext";

function AppContent() {
  const { habits, completedCount } = useHabits();

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
        <HabitForm />
      </Panel>

      <Panel title="Hábitos de hoje">
        <HabitList />
      </Panel>
    </main>
  );
}

export default function App() {
  return (
    <HabitsProvider>
      <AppContent />
    </HabitsProvider>
  );
}