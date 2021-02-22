import React, { useEffect, useState } from "react";
import Table from "./Table";
import { GetPosts, CreatePost, DeletePost } from "../services";
import { useSelector, useDispatch } from "react-redux";

const initState = { title: "", content: "" };

function Post() {
  const dispatch = useDispatch();
  const [post, setPost] = useState(initState);

  useEffect(() => {
    dispatch(GetPosts());
  }, []);

  const { posts } = useSelector((state) => state.post);

  const createPost = () => {
    dispatch(
      CreatePost({
        userId: "180b30dw-597a-4f4d-93fe-ca75e84c7c0f",
        title: post.title,
        content: post.content,
      })
    );
  };

  const deletePost = (id) => {
    dispatch(DeletePost({ id }));
  };

  const onChange = (type, value) => {
    setPost({ ...post, [type]: value });
  };

  const clear = () => {
    setPost(initState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h2>Posts</h2>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <form>
            <div className="mb-3">
              <label htmlFor="nameData" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={post.title}
                aria-describedby="name"
                className="form-control"
                onChange={(e) => onChange("title", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usernameData" className="form-label">
                Content
              </label>
              <input
                type="text"
                value={post.content}
                className="form-control"
                aria-describedby="username"
                onChange={(e) => onChange("content", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={clear}>
            Cancel
          </button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={createPost}>
            Save
          </button>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div style={{ height: "25px" }} />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Table data={posts} remove={deletePost} type="post" />
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default Post;
