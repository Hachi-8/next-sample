import { NextResponse } from "next/server";

export function GET() {
  const res = [
    { id: 1, name: "taro", age: 14 },
    { id: 2, name: "jiro", age: 12 },
    { id: 3, name: "saburo", age: 10 },
  ];

  return NextResponse.json(res);
}
