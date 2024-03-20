const weightMapping = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  subtitle: "h6",
  "button-text": "span",
  "body-text": "p",
  "body-text-small": "p",
};

const styleMapping = {
  h1: {
    fontSize: "2.5rem",
    lineHeight: "auto",
  },
  h2: {
    fontSize: "2rem",
    lineHeight: "2.3rem",
  },
  h3: {
    fontSize: "1.7rem",
    lineHeight: "2.1rem",
  },
  h4: {
    fontSize: "1.3rem",
    lineHeight: "1.75rem",
  },
  subtitle: {
    fontSize: "1rem",
    lineHeight: "1.50rem",
  },
  "button-text": {
    fontSize: "0.8rem",
    lineHeight: "1.25rem",
  },
  "body-text": {
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
  },
  "body-text-small": {
    fontSize: "0.7rem",
    lineHeight: "1.1rem",
  },
};

export const getStyles = (variant, color, weight, style) => {
  const Element = variantMapping[variant] || "p";
  const fontWeight = weightMapping[weight] || weightMapping["regular"];
  const defaultStyle = styleMapping[variant] || styleMapping["body-text"];

  const styles = {
    ...defaultStyle,
    color: color || "black",
    fontWeight,
    letterSpacing: 0,
    ...style,
  };

  return {
    Element,
    styles,
  };
};
