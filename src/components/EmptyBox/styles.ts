import styled from "styled-components";

export const StyledText = styled.p`
  position: relative;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
