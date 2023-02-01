import client from "../index";

export const orderAPI = () => {
  return client.get("/orders").then((res) => res.data);
};
export const addorderAPI = (
  productIds,
  phoneNumber,
  address,
  total,
  username,
  email
) => {
  return client
    .post("/orders", {
      productIds,
      phoneNumber,
      address,
      total,
      username,
      email,
    })
    .then((res) => res.data);
};
