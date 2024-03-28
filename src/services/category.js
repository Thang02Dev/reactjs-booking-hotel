import axios from "./axiosConfig";

const CategoryService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`categories/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("categories");
    } catch (error) {
      console.error(error);
    }
  };
  const Update = async (id, data) => {
    try {
      return await axios.put(`categories/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };
  const ChangedActive = async (id) => {
    try {
      return await axios.post(`categories/changed-active/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const Delete = async (id) => {
    try {
      const response = await axios.delete(`categories/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const Create = async (data) => {
    try {
      return await axios.post(`categories`, data);
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
    ChangedActive,
  };
};

export default CategoryService;
