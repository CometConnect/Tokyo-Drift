//--------------------------------------------------------------------------------//
//Costume function zone
//--------------------------------//
function needs( color )
{
    if( frameCount===1 )
    {
        Log( "Log" , "Starting up the loop" );
        Log( "Log" , "Player is named as " + Name );
    }
    background( color );
    drawSprites(); 
}
//--------------------------------//
//quick console
function Log( type , message )
{
    var VAl = type.toLowerCase();
    switch ( VAl ) {
        case "log":
            console.log( message );
            break;

        case "warn":
            console.warn( message );
            break;

        case "error":
            console.error( message );
            break;

        default:
            console.error( "Message 'function' has invaid first value, the possible values are 'log', 'warn' & 'error'." );
    }
}
//--------------------------------//
//quick dialog
function dialog( type , message )
{
    var VAl = type.toLowerCase();
    switch ( VAl ) {
        case "alert":   
            alert( message );
            break;

        case "confirm":
            confirm( message );
            break;
    
        default:
            console.error( "Message 'dialog' has invaid first value, the possible values are 'alert' & 'confirm'." );
            break;
    }
}
//--------------------------------//
//quick text maker
function STRING( Text , x , y , size , color )
{
    push();
    fill( color );
    textSize( size );
    text( Text , x , y );
    pop();
}
//--------------------------------//
//--------------------------------------------------------------------------------//