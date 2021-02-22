import Axios from "axios";

export const getBlogPosts = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/1`);

    if (res.status === 200 && res?.data) {
      setter(res?.data);
      console.log('blog post');
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const othersPost = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/2`);

    if (res.status === 200 && res?.data) {
      setter(res?.data);
      console.log('other');
    }
  } catch (error) {
    console.log(error.message);
  }
};
