import client from "../index";

export const blogAPI = (title, detail, image) => {
  return client
    .post("/blogs", { title, detail, image })
    .then((res) => res.data);
};
export const getblogApi = () => {
  return client.get("/blogs").then((res) => res.data);
};
export const DeleteblogAPI = (id) => {
  return client.delete(`/blogs/${id}`).then((res) => res.data);
};
export const editblogAPI = ({ title, detail, image }) => {
  return client
    .delete("/blogs", { title, detail, image })
    .then((res) => res.data);
};
