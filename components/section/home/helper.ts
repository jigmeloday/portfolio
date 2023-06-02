export function Weather() {
    const time = new Date().getHours();
    if ( parseInt(String( time )) < 5 && parseInt(String( time )) > 9 ) {
        return 'morning';
    } else if ( parseInt(String( time )) > 9 && parseInt(String( time )) < 16 ) {
        return 'afternoon';
    } else if ( parseInt(String( time )) > 16 && parseInt(String( time )) < 18 ) {
        return 'evening';
    } else {
        return 'night';
    }
}