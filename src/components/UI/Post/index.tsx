"use client";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

import { Button } from "@nextui-org/button";

const Post = () => {
  return (
    <div className="mb-2 rounded-md bg-default-100 p-4">
      <div className="border-b border-default-200 pb-2">
        <div className="flex items-center justify-between border-b border-default-200 pb-4">
          <div className="flex items-center gap-3">
            <Avatar />
            <div></div>
          </div>
        </div>
        <div className="border-b border-default-200 py-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Link href={`/found-items/`}>
                <h1 className="cursor-pointer text-2xl">title</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs">calender</p>
            </div>
            <div>
              <p className="flex items-center gap-1">mapPin</p>
            </div>
          </div>
          <p>descrip</p>
        </div>
        img galary
        <div className="mt-4 flex gap-5">
          <Button variant="light" className="flex-1">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
