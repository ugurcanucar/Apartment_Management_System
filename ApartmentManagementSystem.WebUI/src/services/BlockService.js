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
  updateBlock: async (model) => {
    return api
      .put(`Block/UpdateBlock`, model)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addBlock: async (model) => {
    return api
      .post(`Block/AddBlock`, model)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteBlock: async (id) => {
    return api
      .delete(`Block/DeleteBlock?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default blockService;
