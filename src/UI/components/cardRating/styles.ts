import styled from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 129px;
    min-width: 345px;
    height: 129px;
    width: 345px;
    padding: 17px;
    border-radius: 8px;
    border: 2px solid ${colors.lightBlue3};
    margin: 0 12px 24px 12px;
`;

export const ContainerHeader = styled.div`
    display: flex;
`;

export const Description = styled.p`
    font-family: ${fonts.regular};
    font-size: 14px;
    color: ${colors.mediumGray};
`;

export const Name = styled.p`
    font-family: ${fonts.regular};
    font-size: 16px;
    color: ${colors.black};
`;

export const NumberRating = styled.p`
    font-family: ${fonts.regular};
    font-size: 16px;
    color: ${colors.heading};
`;

export const ContainerFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const ContainerRating = styled.div`
    display: flex;

`;
