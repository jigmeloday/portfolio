import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';

function SideNav() {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();

    return(
        <div className='bg-primary-dark'>
           hello
            <button onClick={() => dispatch(setNavState(!isOpen)) }> hello </button>
        </div>
    );
}

export default SideNav;