// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserDto } from "@/dto/userDto";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDto>
) {
  const user: UserDto = {
    email: "abc@gmail.com",
    id: 1,
    name: "abc",
  };

  //성공
  res.json(user);
  //실패
  // res.status(400).json(user);
}
