import React from 'react';
import { ReactSVG, Path } from 'react-svg'
import { IconContainer } from './styles';

interface StarIconProps {
    color: string;
    size: number;
}

export const StarIcon: React.FC<StarIconProps> = ({ color, size }: StarIconProps) => {
    return (
        <IconContainer>
            <ReactSVG width={size} height={size} viewBox="0 0 28.973 27.634">
                <Path
                    id="Caminho_7315"
                    data-name="Caminho 7315"
                    d="M35.244,37.469l-8.091-1.178-3.62-7.331a1.645,1.645,0,0,0-2.837,0l-3.62,7.331L8.989,37.469a1.582,1.582,0,0,0-.88,2.7l5.852,5.7-1.378,8.062a1.584,1.584,0,0,0,2.3,1.666l7.236-3.8,7.236,3.8a1.576,1.576,0,0,0,1.669-.12,1.578,1.578,0,0,0,.63-1.545l-1.381-8.059,5.855-5.7a1.584,1.584,0,0,0-.884-2.7Z"
                    transform="translate(-7.631 -28.147)"
                    fill={color}
                />
            </ReactSVG>
        </IconContainer>
    );
};
