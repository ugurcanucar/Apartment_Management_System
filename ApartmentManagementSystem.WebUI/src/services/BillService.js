import api from "services/ApiService";

const billService = {
  getBillsMonthly: async (date) => {
    return api
      .get(`Bill/GetBillsMonthly?date=${date}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getUserBillsMonthly: async (date, userId) => {
    return api
      .get(`Bill/GetUserBillsMonthly?date=${date}&userId=${userId}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getBillTypes: async () => {
    return api
      .get(`BillType/GetBillTypes`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateBillTypes: async (model) => {
    return api
      .put(`BillType/UpdateBillType`, model)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addBillType: async (model) => {
    return api
      .post(`BillType/AddBillType`, model)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteBillType: async (id) => {
    return api
      .delete(`BillType/DeleteBillType?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeBill: async (id) => {
    return api
      .delete(`Bill/DeleteBill?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addBill: async (obj) => {
    return api
      .post(`Bill/AddBill`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateBill: async (obj) => {
    return api
      .put(`Bill/UpdateBill`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default billService;
