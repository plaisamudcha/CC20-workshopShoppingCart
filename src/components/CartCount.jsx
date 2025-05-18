import { ShoppingCart } from "lucide-react";

export default function CartCount(props) {
  const { arrItem } = props;
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-secondary ">
        {arrItem.length}
      </span>
      <div>
        <ShoppingCart size={35} />
      </div>
    </div>
  );
}
