import React from "react";
import Avatar from "../../components/Avatar/Avatar";

const AvatarViewer = () => {
  const avatarList = [
    {
      src: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w:740",
    },
    {
      src: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w:740",
    },
    {
      src: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w:740",
    },
    {
      src: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w:740",
    },
    {
      src: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w:740",
    },
  ];
  return (
    <div style={{ padding: "20px" }}>
      <Avatar
        size={"xl"}
        outlineWeight={"2px"}
        outlineColor={"white"}
        src={
          "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?w:740"
        }
        title={"Prajwal Jaiswal"}
        subTitle={"Sasta YouTuber"}
        srcList={avatarList}
        disableGrouping={false}
        alignment={"horizontal"}
        layer={"upward"}
        max={2}
      />
    </div>
  );
};

export default AvatarViewer;
