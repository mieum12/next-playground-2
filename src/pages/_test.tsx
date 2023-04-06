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
  useEffect(() => {
    // fetchUser(1);
    // fetchUsers();
    // fetchAlbum(1);
    // fetchAlbums();
    // fetchComment(1);
    // fetchComments();
    fetchPhoto(1);
    // fetchPhotos();
    // fetchPost(1);
    // fetchPosts();
    // fetchTodo(1);
    // fetchTodos();
  }, []);

  return <h1>TEST PAGE</h1>;
}

export default TestPage;
