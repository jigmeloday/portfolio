import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

function Layout(props: { children: ReactNode }) {
    return(
      <Provider store={store}>{props.children}</Provider>
    );
}

export default Layout;