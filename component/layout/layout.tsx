import { ReactNode } from 'react';

function Layout(props: { children: ReactNode }) {
    return(
      <div>{props.children}</div>
    );
}

export default Layout;