import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';

function Drawer() {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();

    return(
        <div className={` top-0 left-0 w-80 bg-primary-dark p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
           hello
            <button onClick={() => dispatch(setNavState(!isOpen)) }> hello </button>
        </div>
    );
}

export default Drawer;