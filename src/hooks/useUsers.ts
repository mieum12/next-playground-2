import { UserDto } from "@/dto/userDto";
import { fetchUsers } from "@/http/user/fetchUsers";
import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchUsers() {
    try {
      const users = await fetchUsers(); //여기 안에서 에러를 잡아서 던져줘서 undefined가 안넘어온다
      setUsers(users);
    } catch (err) {
      const e = err as Error;
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    _fetchUsers();
  }, []);

  return { users, loading, error };
}
