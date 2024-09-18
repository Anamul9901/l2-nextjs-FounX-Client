import { ReactNode } from "react";

const layout = ({
  children,
  recentPosts,
}: {
  children: ReactNode;
  RecentPosts: ReactNode;
}) => {
  return (
    <div>
      {children}
      {recentPosts}
    </div>
  );
};

export default layout;
