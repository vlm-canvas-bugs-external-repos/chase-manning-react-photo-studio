import React from "react";
import styled from "styled-components";

const StyledDocumentFooter = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  background-color: var(--sidebar);
`;

const DocumentFooter = () => {
  return <StyledDocumentFooter></StyledDocumentFooter>;
};

export default DocumentFooter;