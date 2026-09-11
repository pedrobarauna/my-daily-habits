import { useState } from "react";
import { useHabits } from "../context/HabitsContext";

export default function HabitForm() {
  const { handleAddHabit } = useHabits();

  const [form, setForm] = useState({
    title: "",
    goal: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = form.title.trim();
    const goal = form.goal.trim();

    if (!title || !goal) {
      setError("Preencha o hábito e a meta.");
      return;
    }

    handleAddHabit({
      id: crypto.randomUUID(),
      title,
      goal,
      completed: false,
    });

    setForm({
      title: "",
      goal: "",
    });

    setError("");
  }

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Hábito</label>

        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Ex. Estudar React"
        />
      </div>

      <div className="field">
        <label htmlFor="goal">Meta</label>

        <input
          id="goal"
          name="goal"
          value={form.goal}
          onChange={handleChange}
          placeholder="Ex. 20 minutos"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Adicionar hábito</button>
    </form>
  );
}
