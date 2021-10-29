import React from "react";

import { ButtonComponent, CircleRotate } from "./styles";

import { ButtonPropsComponent } from './interfaces'

export const Button: React.FC<ButtonPropsComponent> = ({
    loading = false,
    children,
    variant,
    mini = false,
    max = false,
    height = '50px',
    widthCircle = "32px",
    heightCircle = "32px",
    fontSize = "16px",
    ...rest
}) => {
    return (
        <ButtonComponent loading={loading} mini={mini} {...rest} variant={variant} height={height} fontSize={fontSize} >{loading ? <CircleRotate width={widthCircle} height={heightCircle} /> : children}
        </ButtonComponent>
    );
};
