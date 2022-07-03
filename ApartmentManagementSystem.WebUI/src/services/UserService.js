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
  addUser: async (obj) => {
    return api
      .post(`User/Add`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateUser: async (obj) => {
    return api
      .put(`User/Update`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeUser: async (id) => {
    return api
      .delete(`User/Delete?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default userService;
