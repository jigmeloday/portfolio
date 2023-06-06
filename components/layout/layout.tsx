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
              <div>
                  <div className='
                  text-[16px]
                  md:text-[28px]
                   lg:hidden text-primary-main flex
                    justify-center items-center
                     md:top-[70px]
                     top-[50px]
                      w-[50px]
                      md:w-[80px]
                      border fixed
                       py-[14px]
                       md:py-[24px]
                      shadow-2xl rounded-r-[10px]'
                       onClick={() => dispatch(setNavState(!isOpen))}>
                      <FaBars />
                  </div>
                  {props.children}
              </div>
          </div>


    );
}

export default Layout;