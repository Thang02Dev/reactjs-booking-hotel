import axios from "./axiosConfig";

const RoomService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`rooms/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("rooms");
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (id, page) => {
    try {
      return await axios.get(`rooms/page/${page}?hotelId=` + id);
    } catch (error) {
      console.error(error);
    }
  };
  const Update = async (id, data) => {
    try {
      return await axios.put(`rooms/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`rooms/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const Create = async (data) => {
    try {
      return await axios.post(`rooms`, data);
    } catch (error) {
      console.error(error);
    }
  };
  const ChangedActive = async (id) => {
    try {
      return await axios.post(`rooms/changed-active/${id}`);
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

export default RoomService;
