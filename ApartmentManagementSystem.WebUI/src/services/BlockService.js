import api from "services/ApiService";

const blockService = {
  getBlocks: async () => {
    return api
      .get(`Block/GetBlocks`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default blockService;
