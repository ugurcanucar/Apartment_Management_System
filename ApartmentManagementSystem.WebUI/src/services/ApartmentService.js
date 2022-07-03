import api from "services/ApiService";

const apartmentService = {
  getApartmentTypes: async () => {
    return api
      .get(`ApartmentType/GetApartmentTypes`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeApartment: async (id) => {
    return api
      .delete(`Apartment/Delete?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getApartments: async () => {
    return api
      .get(`Apartment/GetApartments`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addApartment: async (obj) => {
    return api
      .post(`Apartment/Add`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateApartment: async (obj) => {
    return api
      .put(`Apartment/Update`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default apartmentService;
