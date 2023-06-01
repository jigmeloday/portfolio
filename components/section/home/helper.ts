export function Weather() {
    const time = new Date().getHours();
    if ( time < 5 && time > 9 ) {
        return 'morning';
    } else if ( time > 9 && time < 16 ) {
        return 'afternoon';
    } else if ( time > 16 && time < 18 ) {
        return 'evening';
    } else {
        return 'night';
    }
}