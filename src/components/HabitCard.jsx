import { useHabits } from "../context/HabitsContext";

export default function HabitCard({
  id,
  title,
  goal,
  completed,
}) {
  const { handleToggleHabit } = useHabits();

  return (
    <article
      className={`habit-card ${
        completed ? "is-complete" : ""
      }`}
    >
      <div>
        <h2>{title}</h2>
        <p>Meta: {goal}</p>
      </div>

      <button
        type="button"
        onClick={() => handleToggleHabit(id)}
      >
        {completed ? "Desmarcar" : "Concluir"}
      </button>
    </article>
  );
}