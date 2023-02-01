import client from "../index";

export const productAPI = (
  name,
  price,
  image,
  description,
  quantity,
  categoryId
) => {
  return client
    .post("/products", {
      name,
      price,
      image,
      description,
      quantity,
      categoryId,
    })
    .then((res) => res.data);
};
export const getProductApi = () => {
  return client.get("/products").then((res) => res.data);
};
export const deleteProductApi = (id) => {
  return client.delete(`/products/${id}`).then((res) => res.data);
};
export const editproductApi = (
  name,
  price,
  image,
  description,
  quantity,
  categoryId
) => {
  return client
    .put("/categories", {
      name,
      price,
      image,
      description,
      quantity,
      categoryId,
    })
    .then((res) => res.data);
};
