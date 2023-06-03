import { TYPING_INTERVAL_MAX, TYPING_INTERVAL_MIN } from '@/shared/constant/shared.constant';

export const getRandomTypingInterval = (): number =>
    Math.floor( Math.random() * ( TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1 ) ) +
    TYPING_INTERVAL_MIN;
