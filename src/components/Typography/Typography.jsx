import React from "react";
import { getStyles } from "./Typography.utils";

const Typography = ({ children, variant, weight, color, style }) => {
  const { Element, styles } = getStyles(variant, color, weight, style);
  return <Element style={styles}>{children}</Element>;
};

export default Typography;
