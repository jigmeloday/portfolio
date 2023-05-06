import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconsModel } from '@/components/icons/model/icons.model';

function Icons (props: IconsModel ) {
    return(
        <FontAwesomeIcon icon={ props.name } className={props?.className as string}/>

    );
}

export default Icons;