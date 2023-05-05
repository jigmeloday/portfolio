import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';

function SideNav() {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();

    return(
        <div className='overflow-y-auto bg-yellow-300 min-h-screen absolute w-80 backdrop-blur-md '>
           hello
            <button onClick={() => dispatch(setNavState(!isOpen)) }> hello </button>
        </div>
    );
}

export default SideNav;