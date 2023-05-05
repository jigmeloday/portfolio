import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideNav from '@/components/layout/side-nav/side-nav';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';

function Layout(props: { children: ReactNode }) {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();
    return(
          <div className='flex'>
              <div className={`hidden top-0 left-0 w-80 bg-primary-dark p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
                  isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}>
              <SideNav />
              </div>
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