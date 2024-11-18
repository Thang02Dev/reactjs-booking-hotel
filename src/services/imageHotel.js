import axios from "./axiosConfig";

const ImageHotelService = () => {
  const getById = async (id) => {
    try {
      return await axios.get(`imagehotels/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      return await axios.get("imagehotels");
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (page) => {
    try {
      return await axios.get(`imagehotels/page/${page}`);
    } catch (error) {
      console.error(error);
    }
  };
  const Update = async (id, data) => {
    try {
      return await axios.put(`imagehotels/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(`imagehotels/${id}`);
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
      formData.append("HotelId", data.hotelId);
      formData.append("Id", data.id);
      formData.append("Position", data.position);
      formData.append("Active", data.active);
      formData.append("Image", data.image);

      const response = await axios.post(`ImageHotels`, formData, {});

      return response;
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

export default ImageHotelService;
