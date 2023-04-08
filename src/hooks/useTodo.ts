// import { TodoDto } from "@/dto/todoDto";
// import { fetchTodo } from "@/http/content/fetchTodo";
// import { useEffect, useState } from "react";

// export function useTodo(todoId: number) {
//   const [todo, setTodo] = useState<TodoDto | undefined>();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | undefined>();

//   async function _fetchTodo() {
//     try {
//       const todo = await fetchTodo(todoId);
//       setTodo(todo);
//     } catch (err) {
//       const e = err as Error;
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     _fetchTodo();
//   }, []);

//   return { todo, loading, error };
// }

//복습
import { TodoDto } from "@/dto/todoDto";
import { fetchTodo } from "@/http/content/fetchTodo";
import { useEffect, useState } from "react";

export function useTodo(todoId: number) {
  const [todo, setTodo] = useState<TodoDto | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchTodo() {
    try {
      const todo = await fetchTodo(todoId);
      setTodo(todo);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    _fetchTodo();
  }, []);

  return { todo, loading, error };
}
