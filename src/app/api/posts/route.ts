import { postsDB } from "@/server/db/postsDB";
import { PostModel } from "@/server/models";
import { nanoid } from "@reduxjs/toolkit";
import { AppRouteHandlerFn } from "next/dist/server/route-modules/app-route/module";
import { NextResponse } from "next/server";

export const POST: AppRouteHandlerFn = async (req) => {
  const { message } = await req.json();

  const res = await new Promise<PostModel>((resolve) => {
    setTimeout(() => {
      resolve({
        message,
        date: new Date(),
        id: nanoid(),
      });
    }, 1000);
  });

  postsDB.addPost(res);

  return new NextResponse(JSON.stringify(res), {
    status: 201,
  });
};

export const GET: AppRouteHandlerFn = async () => {
  const res = await new Promise<PostModel[]>((resolve) => {
    setTimeout(() => {
      resolve(postsDB.getAll());
    }, 1000);
  });

  return new NextResponse(JSON.stringify(res), {
    status: 200,
  });
};
