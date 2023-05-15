import { ReactNode } from 'react';

function Chip(props: { children: ReactNode }) {
    return(
        <div>
            {props.children}
        </div>
    );
}

export default Chip;