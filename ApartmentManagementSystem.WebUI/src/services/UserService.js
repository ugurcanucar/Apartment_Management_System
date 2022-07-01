import api from "services/ApiService";

const userService = {
  getUsers: async () => {
    return api
      .get(`User/GetUsers`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  login: async (obj) => {
    return api
      .post(`User/Login`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default userService;
