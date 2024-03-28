import axios from "./axiosConfig";

const FeatureService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`features/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("features");
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (page) => {
    try {
      return await axios.get(`features/page/${page}`);
    } catch (error) {
      console.error(error);
    }
  };
  const Update = async (id, data) => {
    try {
      return await axios.put(`features/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`features/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const Create = async (data) => {
    try {
      return await axios.post(`features`, data);
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

export default FeatureService;
