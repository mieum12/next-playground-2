import { Header } from "@/components/Header";
import { usePosts, useTodos } from "@/hooks/content.hook";
// import { usePosts } from "@/hooks/usePosts";
// import { useTodos } from "@/hooks/useTodos";
// import { useUser } from "@/hooks/useUser";
// import { useUsers } from "@/hooks/useUsers";
import { useUser } from "@/hooks/user.hooks";

export default function Home() {
  const { user, loading: userLoading, error: userError } = useUser(1);
  const { posts, loading: postsLoding, error: postsError } = usePosts();
  const { todos, loading: todosLoading, error: todosError } = useTodos();

  if (postsLoding || todosLoading || userLoading) {
    return <div>로딩중</div>;
  }
  if (postsError || todosError || userError) {
    return <div>에러!</div>;
  }

  return (
    <div>
      <Header />
      <div>
        <h1>{user?.name}님이 즐겨보는 Posts</h1>
        <hr />
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <div>{post.body}</div>
              <hr />
            </div>
          );
        })}
      </div>
      <div>
        <h1>{user?.name}님의 Todos</h1>
        <hr />
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <div>{todo.completed ? "완료" : "진행중"}</div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
