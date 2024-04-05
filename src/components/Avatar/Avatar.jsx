import React, { useEffect, useState } from "react";
import {
  AvatarImage,
  AvatarInitials,
  AvatarWrapper,
  SubTitle,
  Title,
  UserDetails,
} from "./Avatar.styled";

const Avatar = ({
  size,
  outlineWeight,
  outlineColor,
  src,
  title,
  subTitle,
  srcList,
  disableGrouping = false,
  layer,
  alignment = "horizontal",
  max,
}) => {
  const [initials, setInitials] = useState("");
  const [layering, setLayering] = useState(new Array(srcList || 5).fill(1));
  const [remaining, setRemaining] = useState(srcList.length || undefined);

  const grabInitials = () => {
    const initialsArray = title.toUpperCase().split(" ");
    const firstChar = initialsArray[0][0];
    if (initialsArray.length > 1) {
      const secondChar = initialsArray[1][0];
      setInitials(`${firstChar}${secondChar}`);
    } else {
      setInitials(`${firstChar}`);
    }
  };

  const getRemainingAvatarCount = () => {
    return srcList.length - max;
  };

  useEffect(() => {
    if (max) {
      setRemaining(getRemainingAvatarCount());
    }
  }, [max]);

  useEffect(() => {
    if (layer) {
      if (layer === "downward") {
        let arr = [];
        for (let i = srcList.length; i > 0; i--) {
          arr.push(i);
        }
        setLayering(arr);
      } else {
        let arr = [];
        for (let i = 1; i < srcList.length + 1; i++) {
          arr.push(i);
        }
        setLayering(arr);
      }
    }
  }, [layer]);

  useEffect(() => {
    grabInitials();
  }, [title]);

  if ((src && !srcList) || (src && srcList.length > 1 && disableGrouping)) {
    return (
      <AvatarWrapper alignment={"horizontal"}>
        {src ? (
          <AvatarImage
            srcList={srcList}
            disableGrouping={disableGrouping}
            size={size}
            outlineWeight={outlineWeight}
            outlineColor={outlineColor}
            src={src}
          />
        ) : (
          <AvatarInitials
            size={size}
            outlineWeight={outlineWeight}
            outlineColor={outlineColor}
          >
            {initials}
          </AvatarInitials>
        )}

        <UserDetails>
          <Title size={size}>{title}</Title>
          <SubTitle size={size}>{subTitle}</SubTitle>
        </UserDetails>
      </AvatarWrapper>
    );
  } else {
    return (
      <AvatarWrapper alignment={alignment}>
        {srcList.slice(-max).map((ele, i) => (
          <AvatarImage
            size={size}
            srcList={srcList}
            disableGrouping={disableGrouping}
            outlineWeight={outlineWeight}
            outlineColor={outlineColor}
            src={ele.src}
            style={{ zIndex: layering[i] }}
          />
        ))}
        <AvatarInitials
          style={{ zIndex: layer === "upward" ? 999 : 0 }}
          size={size}
          outlineWeight={outlineWeight}
          outlineColor={outlineColor}
          bgColor={true}
        >
          +{remaining}
        </AvatarInitials>
      </AvatarWrapper>
    );
  }
};

export default Avatar;
