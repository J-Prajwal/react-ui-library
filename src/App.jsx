import styled from "styled-components";
import { componentList } from "./config";
import { useState } from "react";

function App() {
  const [CurrentComponent, setCurrentComponent] = useState(null);
  const handleOnClick = (args) => {
    setCurrentComponent(args.component);
  };
  return (
    <MainContainer>
      <SideBarContainer>
        <SidebarHeader>Component List</SidebarHeader>
        <ComponentListWrapper>
          {componentList.map((ele) => (
            <ComponentList key={ele.id} onClick={() => handleOnClick(ele)}>
              {ele.id}. {ele.name}
            </ComponentList>
          ))}
        </ComponentListWrapper>
      </SideBarContainer>
      <ComponentWrapper>
        {CurrentComponent && CurrentComponent}
      </ComponentWrapper>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
`;

const SideBarContainer = styled.div`
  height: 100vh;
  width: 17%;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidebarHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #3a42b6;
  color: #fff;
  padding: 5px 3px;
`;

const ComponentListWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 5px 3px;
  font-size: large;
`;

const ComponentList = styled.div`
  display: flex;
  cursor: pointer;
`;

const ComponentWrapper = styled.div`
  height: 100vh;
  width: 83%;
  display: flex;
`;
