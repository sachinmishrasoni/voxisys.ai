import React, { ReactElement } from 'react';
import { Tooltip, TooltipProps } from '@mui/material';

interface IProps extends TooltipProps {
    children: ReactElement;
    title: ReactElement;
}
const Infotip: React.FC<IProps> = ({ children, title, placement = 'bottom', ...props }) => {
    return (
        <Tooltip
            title={title}
            placement={placement}
            arrow
            sx={{
                
            }}
            {...props}
        >
            {children}
        </Tooltip>
    )
}

export default Infotip;