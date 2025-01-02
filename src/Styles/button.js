import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  padding: 3px;
  border: 2px solid var(--lightBlue);
  border-color: ${(props) =>
    props.$cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.$cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s linear;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    background: ${(props) =>
      props.$cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
// I am removing the disabled styles for now
