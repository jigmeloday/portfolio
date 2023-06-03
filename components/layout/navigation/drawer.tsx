import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';
import NavItems from '@/components/layout/navigation/nav-items';

function Drawer() {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();

    return(
        <div className={` flex flex-col items-center justify-center top-0 left-0 w-80 bg-primary-drawer shadow-lg fixed h-full z-40 ease-in-out duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <NavItems />
            <button onClick={() => dispatch(setNavState(!isOpen)) }> hello </button>
        </div>
    );
}

export default Drawer;