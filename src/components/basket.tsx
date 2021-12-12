import { FC } from "react";
import { ReactComponent as BasketSvg } from "../assets/basket.svg";
import AppleComponent from "./apple";

type Props = {
  /**
   * @summary
   * Classname prop
   */
  className?: string;
  /**
   * @summary
   * Count of apple component in the basket
   */
  appleCount?: number;
};

const BasketComponent: FC<Props> = ({ className, appleCount = 0 }: Props) => {
  const showAppleOnBasket = (size: number) => {
    return (
      <div className="apple-basket">
        {[...Array(size)].map((e, i) => (
          <AppleComponent key={i} className="apple-in-basket" />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className={className}>
        <BasketSvg className="basket-svg" />
      </div>
      {showAppleOnBasket(appleCount)}
    </div>
  );
};

export default BasketComponent;
