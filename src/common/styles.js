import styled from "styled-components";

export const Text = styled.p`
  margin: 0;
  color: var(--on-background-color);
`;

export const HugeTitle = styled(Text)`
  font-size: 48px;
  font-weight: bold;
`;

export const BigTitle = styled(HugeTitle)`
  font-size: 34px;
  font-weight: bold;
`;

export const Title = styled(BigTitle)`
  font-size: 24px;
  font-weight: bold;
`;

export const SmallTitle = styled(Title)`
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle1 = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

export const SubTitle2 = styled(Text)`
  font-size: 16px;
`;

export const Body1 = styled(Text)`
  font-size: 18px;
`;

export const Body2 = styled(Text)`
  font-size: 16px;
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.25px;
`;

export const Card = styled.div`
  // border-color: var(--primary-color);
  // border-width: 1px;
  // border-style: dashed;

  box-shadow: 2px 4px 8px;
  :hover {
    transform: scale(1.1);
    box-shadow: 4px 8px 12px;
  }

  :active {
    transform: scale(0.98);
    box-shadow: 8px 10px 12px;
    transition: transform var(--quick-animation-speed) ease-in-out;
  }

  transition: all var(--animation-speed) ease-in-out;
`;
