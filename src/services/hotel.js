import axios from "./axiosConfig";

const HotelService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`hotels/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("hotels");
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (page) => {
    try {
      return await axios.get(`hotels/page/${page}`);
    } catch (error) {
      console.error(error);
    }
  };
  const Update = async (id, data) => {
    try {
      return await axios.put(`hotels/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`hotels/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const Create = async (data) => {
    try {
      return await axios.post(`hotels`, data);
    } catch (error) {
      console.error(error);
    }
  };
  const ChangedActive = async (id) => {
    try {
      return await axios.post(`hotels/changed-active/${id}`);
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
    ChangedActive,
  };
};

export default HotelService;
