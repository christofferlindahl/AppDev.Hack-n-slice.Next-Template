import { AppRouteHandlerFn } from "next/dist/server/route-modules/app-route/module";
import { NextResponse } from "next/server";

export const POST: AppRouteHandlerFn = async (req) => {
  const { name } = await req.json();

  const res = await new Promise<{ greeting: string }>((resolve) => {
    setTimeout(() => {
      resolve({ greeting: `Hello ${name}` });
    }, 2000);
  });

  return new NextResponse(JSON.stringify(res), {
    status: 200,
  });
};
