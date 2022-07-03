import api from "services/ApiService";

const apartmentTypeService = {
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
  addApartmentType: async (obj) => {
    return api
      .post(`ApartmentType/AddApartmentType`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateApartmentType: async (obj) => {
    return api
      .put(`ApartmentType/UpdateApartmentType`, obj)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteApartmentType: async (id) => {
    return api
      .delete(`ApartmentType/DeleteApartmentType?id=${id}`)
      .then((d) => {
        return d.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default apartmentTypeService;
