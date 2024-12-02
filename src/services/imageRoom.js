import axios from "./axiosConfig";

const ImageRoomService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`imagerooms/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("imagerooms");
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (page, data) => {
    try {
      return await axios.get(`imagerooms/page/${page}?roomId=${data}`);
    } catch (error) {
      console.error(error);
    }
  };

  const Update = async (id, data) => {
    try {
      return await axios.put(`imagerooms/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`imagerooms/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const Create = async (data) => {
    try {
      const formData = new FormData();

      Array.from(data.fileimage).forEach((image) =>
        formData.append("files", image)
      );
      formData.append("Description", data.description);
      formData.append("RoomId", data.roomId);
      formData.append("Id", data.id);
      formData.append("Position", data.position);
      formData.append("Active", data.active);
      formData.append("Image", data.image);

      const response = await axios.post(`imagerooms`, formData, {});

      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const ChangedActive = async (id) => {
    try {
      return await axios.post(`imagerooms/changed-active/${id}`);
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

export default ImageRoomService;
