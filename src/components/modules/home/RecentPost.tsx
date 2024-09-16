import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPost = async () => {
  const { data: posts } = await getRecentPosts();
  console.log("data", posts);
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recent Found Items</h2>
        <p className="text-center">
          A lst of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {posts.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default">
          <Link href="/foun-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPost;
