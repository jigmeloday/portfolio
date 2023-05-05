import { ReactNode } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '@/store/store';
import SideNav from '@/components/layout/side-nav/side-nav';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';

function Layout(props: { children: ReactNode }) {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();
    return(
          <div className='flex'>
              {
                  isOpen && <SideNav />
              }
              <div>
                  <button onClick={() => dispatch(setNavState(!isOpen))}>press </button>
                  {props.children}
              </div>
          </div>


    );
}

export default Layout;