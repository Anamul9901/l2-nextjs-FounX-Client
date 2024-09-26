import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

const FoundItems = async () => {
  const { data } = await axiosInstance.get("/items");
  console.log("data", data);
  return (
    <div className="mx-auto my-3 max-w-[720px]">
      {data?.data?.map((post: IPost) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default FoundItems;
