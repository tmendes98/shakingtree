import { FC } from "react";
import { ReactComponent as TreeSvg } from "../assets/tree.svg";

type Props = {
  /**
   * @summary
   * className prop
   */
  className?: string;
};

const TreeComponent: FC<Props> = ({ className }: Props) => {
  return <TreeSvg className={className} />;
};

export default TreeComponent;
