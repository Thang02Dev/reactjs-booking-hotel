import axios from "./axiosConfig";

const CategoryService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`utilities/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("utilities");
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (page) => {
    try {
      return await axios.get(`utilities/page/${page}`);
    } catch (error) {
      console.error(error);
    }
  };
  const Update = async (id, data) => {
    try {
      return await axios.put(`utilities/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`utilities/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const Create = async (data) => {
    try {
      return await axios.post(`utilities`, data);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    getById,
    getAll,
    Update,
    Delete,
    Create,
    getPage,
  };
};

export default CategoryService;
