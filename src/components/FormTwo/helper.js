import Axios from "axios";

export const createUser = async (data) => {
  try {
    const res = await Axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );
    if (res.status === 201) {
      alert("User Created Successfully");
    }
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};
