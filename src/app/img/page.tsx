import Image from "next/image";
import HachiImg from "../../../public/hati.png";
export default function Img(): JSX.Element {
  return (
    <div>
      <h1>Using Image Component</h1>
      <Image src={HachiImg} alt="" />
      <h1>Not Using Image Component</h1>
      <img src="/hati.png" />
    </div>
  );
}
