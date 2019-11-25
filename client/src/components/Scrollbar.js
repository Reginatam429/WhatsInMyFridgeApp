import React from "react";
import { MDBContainer, MDBScrollbar } from "mdbreact";
import IngredientList from './IngredientList';


const ScrollBarPage = ({ingredients}) => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
    <MDBContainer className="scroll-container">
      <div className="scrollbar scrollbar-young-passion  mt-5 mx-auto" >
      <IngredientList  ingredients={ingredients}  />
      </div>
    </MDBContainer>
  );
}

export default ScrollBarPage;