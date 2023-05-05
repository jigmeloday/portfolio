import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';
import Drawer from '@/components/layout/navigation/drawer';

function Layout(props: { children: ReactNode }) {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();
    return(
          <div className='flex'>
              <Drawer />
              <div className=' lg:block hidden absolute top-[40%] left-[8%] bg-primary-dark rounded-[8px] px-4 py-6 text-yellow-300'>
                hhll
              </div>
              <div>
                  <button className='lg:hidden text-white' onClick={() => dispatch(setNavState(!isOpen))}>press </button>
                  {props.children}
              </div>
          </div>


    );
}

export default Layout;