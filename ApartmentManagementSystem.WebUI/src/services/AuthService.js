import api from "services/ApiService";

const authService = {
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
export default authService;
