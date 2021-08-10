
export const calculateHouer = ( myDate ) =>
{
    var newDate = new Date( myDate * 1000 )
    let today = new Date();
    let dates = ( today.getTime() - newDate.getTime() ) / 1000;
    dates /= ( 60 * 60 );

    return Math.abs( Math.round( dates ) );
}

