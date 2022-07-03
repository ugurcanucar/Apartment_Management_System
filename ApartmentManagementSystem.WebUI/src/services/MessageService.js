import api from "services/ApiService";

const messageService = {
  getMessages: async () => {
    return api
      .get(`Message/GetMessages`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getMessagesByUser: async (id) => {
    return api
      .get(`Message/GetMessageByUser?userId=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  sendMessage: async (obj) => {
    return api
      .post(`Message/SendMessage`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  readMessage: async (obj) => {
    return api
      .put(`Message/ReadMessage`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateMessage: async (obj) => {
    return api
      .put(`Message/UpdateMessage`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteMessage: async (id) => {
    return api
      .delete(`Message/DeleteMessage?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default messageService;
