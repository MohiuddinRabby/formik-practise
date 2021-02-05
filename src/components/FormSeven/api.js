import Axios from "axios";

export const getDivisions = async (setter) => {
  try {
    const res = await Axios.get(
      `https://bdapis.herokuapp.com/api/v1.0/divisions`
    );

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.data?.map((item) => {
        return { value: item?._id, label: item?.division };
      });
      setter(newData);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getThana = async (thanaName, setter) => {
  try {
    const res = await Axios.get(
      `https://bdapis.herokuapp.com/api/v1.0/division/${thanaName}`
    );

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.data?.map((item) => {
        return {
          value: item?._id,
          label: item?.district,
        };
      });
      setter(newData);
    }
  } catch (error) {
    console.log(error.message);
  }
};
