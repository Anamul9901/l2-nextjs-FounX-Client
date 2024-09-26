"use client";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

import { Button } from "@nextui-org/button";
import { IPost, IUser } from "@/src/types";
import ImageGallery from "./ImageGallery";
import ClaimRequestModal from "../../modals/ClaimRequestModal";

const Post = ({ post }: { post: IPost }) => {
  const {
    title,
    dateFound,
    description,
    location,
    city,
    _id,
    images,
    user,
    questions,
  } = post || {};

  const { name, email, profilePhoto } = (user as IUser) || {};
  return (
    <div className="mb-2 rounded-md bg-default-100 p-4">
      <div className="border-b border-default-200 pb-2">
        <div className="flex items-center justify-between border-b border-default-200 pb-4">
          <div className="flex items-center gap-3">
            <Avatar isBordered name={name} radius="sm" src={profilePhoto} />
            <div>
              <p>{name}</p>
              <p className="text-xs">{email}</p>
            </div>
          </div>
        </div>
        <div className="border-b border-default-200 py-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Link href={`/found-items/${_id}`}>
                <h1 className="cursor-pointer text-2xl">{title}</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs">{dateFound}</p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                {location}, {city}
              </p>
            </div>
          </div>
          <p>{description}</p>
        </div>
        <ImageGallery images={images} />
        <div className="mt-4 flex gap-5">
          <ClaimRequestModal id={_id} questions={questions} />
          <Button variant="light" className="flex-1">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
