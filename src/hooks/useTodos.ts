import { TodoDto } from "@/dto/todoDto";
import { fetchTodos } from "@/http/content/fetchTodos";
import { useEffect, useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchTodos() {
    try {
      const todos = await fetchTodos();
      setTodos(todos);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    _fetchTodos();
  }, []);

  return { todos, loading, error };
}
