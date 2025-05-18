import CartCount from "./CartCount";
import { Codesandbox } from "lucide-react";

export default function Header(props) {
  const { arrItem } = props;
  return (
    <div className="flex justify-between items-center p-4 pr-8">
      <div className="flex items-center gap-3">
        <Codesandbox size={40} />
        <p className="text-2xl">PoRPaI Shop</p>
      </div>
      <CartCount arrItem={arrItem} />
    </div>
  );
}
