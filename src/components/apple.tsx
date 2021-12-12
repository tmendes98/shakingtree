import { FC, CSSProperties } from "react";
import { ReactComponent as AppleSvg } from "../assets/apple.svg";

type Props = {
  /**
   * @summary
   * className prop
   */
  className?: string;
  /**
   * @summary
   * Styling prop
   */
  style?: CSSProperties;
};

const AppleComponent: FC<Props> = ({ className, style }: Props) => {
  return <AppleSvg className={className} style={style} />;
};

export default AppleComponent;
