import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';
import Drawer from '@/components/layout/navigation/drawer';
import SideNav from '@/components/layout/navigation/side-nav';
import { FaBars } from 'react-icons/fa';

function Layout(props: { children: ReactNode }) {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();
    return(
          <div className='flex'>
              <Drawer />
              <div className='flex items-center min-h-screen fixed left-[6%] '>
                  <SideNav />
              </div>
              <div className='relative'>
                  <div className=' text-[24px] text-primary-main flex justify-center items-center top-[30px] w-[70px] border fixed py-[20px] shadow-2xl rounded-r-[10px]' onClick={() => dispatch(setNavState(!isOpen))}>
                      <FaBars />
                  </div>
                  {/*<button className='lg:hidden text-white absolute' onClick={() => dispatch(setNavState(!isOpen))}>press </button>*/}
                  {props.children}
              </div>
          </div>


    );
}

export default Layout;