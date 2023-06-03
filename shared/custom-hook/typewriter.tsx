import { useEffect, useState } from 'react';
import { TypePhase } from '../model/enum';
import { getRandomTypingInterval } from '../utils/shared.utils';
import { DELETING_INTERVAL, DELETING_PAUSE_MS, TYPING_PAUSE_MS } from '../constant/shared.constant';
export const useTypedSuperpower = (
    superpowers: string[]
)=> {
    const [selectedIndex, setSelectedIndex] = useState( 0 );
    const [phase, setPhase] = useState( TypePhase.Typing );
    const [typedSuperpower, setTypedSuperpower] = useState( '' );

    useEffect( () => {
        switch ( phase ) {
            case TypePhase.Typing: {
                const nextTypedSuperPower = superpowers[selectedIndex].slice(
                    0,
                    typedSuperpower.length + 1
                );

                if ( nextTypedSuperPower === typedSuperpower ) {
                    setPhase( TypePhase.Pausing );
                    return;
                }

                const timeout = setTimeout( () => {
                    setTypedSuperpower( nextTypedSuperPower );
                }, getRandomTypingInterval() );

                return () => clearTimeout( timeout );
            }
            case TypePhase.Deleting: {
                if ( !typedSuperpower ) {
                    const timeout = setTimeout( () => {
                        const nextIndex = selectedIndex + 1;
                        setSelectedIndex( superpowers[nextIndex] ? nextIndex : 0 );
                        setPhase( TypePhase.Typing );
                    }, DELETING_PAUSE_MS );
                    return () => clearTimeout( timeout );
                }

                const nextRemaining = superpowers[selectedIndex].slice(
                    0,
                    typedSuperpower.length - 1
                );

                const timeout = setTimeout( () => {
                    setTypedSuperpower( nextRemaining );
                }, DELETING_INTERVAL );

                return () => clearTimeout( timeout );
            }
            case TypePhase.Pausing:
            default:
                // eslint-disable-next-line no-case-declarations
                const timeout = setTimeout( () => {
                    setPhase( TypePhase.Deleting );
                }, TYPING_PAUSE_MS );

                return () => clearTimeout( timeout );
        }
    }, [superpowers, typedSuperpower, selectedIndex, phase] );

    return  typedSuperpower;
};
