import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem; // 1.5rem = 24px
  width: 100%;

  >div {
    display: flex;
    align-items: center;
    gap: 0.5rem; // = 8px
  }
  `;
