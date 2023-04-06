import { useTodo } from "@/hooks/useTodo";
import { useTodos } from "@/hooks/useTodos";

import { useUser } from "@/hooks/useUser";
import { useUsers } from "@/hooks/useUsers";
import { fetchAlbum } from "@/http/content/fetchAlbum";
import { fetchAlbums } from "@/http/content/fetchAlbums";
import { fetchComment } from "@/http/content/fetchComment";
import { fetchComments } from "@/http/content/fetchComments";
import { fetchPhoto } from "@/http/content/fetchPhoto";
import { fetchPhotos } from "@/http/content/fetchPhotos";
import { fetchPost } from "@/http/content/fetchPost";
import { fetchPosts } from "@/http/content/fetchPosts";
import { fetchTodo } from "@/http/content/fetchTodo";
import { fetchTodos } from "@/http/content/fetchTodos";
import { fetchUser } from "@/http/user/fetchUser";
import { fetchUsers } from "@/http/user/fetchUsers";
import axios from "axios";
import { useEffect, useState } from "react";

function TestPage() {
  // const { user, loading, error } = useUser(1);
  // const { users, loading, error } = useUsers();
  // const { todo, loading, error } = useTodo(1);
  const { todos, loading, error } = useTodos();

  useEffect(() => {
    // fetchUser(1);
    // fetchUsers();
    // fetchAlbum(1);
    // fetchAlbums();
    // fetchComment(1);
    // fetchComments();
    // fetchPhoto(1);
    // fetchPhotos();
    // fetchPost(1);
    // fetchPosts();
    // fetchTodo(1);
    // fetchTodos();
  }, []);

  //로딩시
  if (loading === true) {
    return <h1>LOADING!</h1>;
  }
  //에러시
  if (error) {
    return <h1>ERROR!</h1>;
  }

  // >>>>>>useUsers
  // //유저가 없는 경우 =undefined
  // if (!users) {
  //   // user
  //   return <h1>NO USER!</h1>;
  // }
  // //undefined 제외 유저를 걸러서 아래로 준다
  // // user

  //>>>>>useTodo
  if (!todos) {
    // todo
    return <h1>NO TODO!</h1>;
  }

  return (
    <div>
      {/* useUser사용시
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.id}</h1>
            <h1>이름 : {user.name}</h1>
            <h1>연락처 : {user.phone}</h1>
            <h1>이메일 : {user.email}</h1>
            <h1>직장 : {user.company.name}</h1>
          </div>
        );
      })} */}

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.id}</h1>
            <h1>제목 : {todo.title}</h1>
            <h1>진행 : {todo.completed ? "완료" : "진행중"}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default TestPage;
