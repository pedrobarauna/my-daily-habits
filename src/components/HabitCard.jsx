export default function HabitCard({
  id,
  title,
  goal,
  completed,
  onToggle,
}) {
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
        onClick={() => onToggle(id)}
      >
        {completed ? "Desmarcar" : "Concluir"}
      </button>
    </article>
  );
}