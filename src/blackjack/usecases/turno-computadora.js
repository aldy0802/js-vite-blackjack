import { pedirCarta, valorCarta, crearCartaHTML } from './';
import Swal from 'sweetalert2/dist/sweetalert2.js';

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;
 
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            Swal.fire({
                title: 'Empate!',
                text: 'Intenta nuevamente.',
                imageUrl: 'https://cnnespanol.cnn.com/wp-content/uploads/2019/05/grumpy-cat-foto.jpg?quality=100&strip=info',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        } else if ( puntosMinimos > 21 ) {
            Swal.fire({
                title: 'Perdiste!',
                text: 'Intenta nuevamente.',
                imageUrl: 'https://www.petlife.mx/u/fotografias/m/2023/5/18/f768x1-2135_2262_5050.jpg',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        } else if( puntosComputadora > 21 ) {
            Swal.fire({
                title: 'Ganaste!',
                text: 'Felicitaciones!!!.',
                imageUrl: 'https://www.publimetro.com.mx/resizer/QfBQ1ptVlW-JVr7us1ZeBhQbUJg=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/6WIBLK4JVZAM5IU5BCYLYPTG4I.jpg',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo malo ocurrio...Intenta nuevamente!!',
              })
        }
    }, 100 );
}