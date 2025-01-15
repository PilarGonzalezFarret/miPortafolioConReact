/* Interface sirve para asignar un tipo  de variable al props... como string, number, boolean, etc . el "CardProps" también puede llamarse "Props", pero para no confundirme, prefiero llamarle CardProps.*/

import { ReactNode } from "react";

interface CardProps {
    children : ReactNode;
} 
/* Dentro de la función card escribí return y pegué un código copiado de la página de bootstrap (después fue cortado y pegado al fragmento de más abajo). Por otro lado, el "props" que esstá entre paréntesis, es para exportar el "body" que está entre llaves. ¿a dónde se va a exportar? al archivo que sea que lo esté importando, en este caso App.ts, lo importa en las primeras líneas*/

function Card(props : CardProps) {
    const {children} = props;

    return (
        <div className="card" style = {{width : '350px',}}> {/* sin doble llave no funciona */}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

interface CardBodyProps {
    title: string
    text?: string
}

export function CardBody(props: CardBodyProps) {
    const {title, text} = props;
    return(
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    );
}

export default Card;
