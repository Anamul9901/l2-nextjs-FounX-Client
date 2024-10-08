import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import { getPost } from "@/src/services/Post";
import React from "react";

interface IProps {
  params: {
    itemId: string;
  };
}
const ItemDetailPage = async ({ params: { itemId } }: IProps) => {
  const { data: post } = await getPost(itemId);
  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <Post key={post} post={post} />
      </div>
    </Container>
  );
};

export default ItemDetailPage;
