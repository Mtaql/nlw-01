import React from 'react';

interface HeaderProps {
    //Propriedade opcional
    title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
        </header>
    );
}

export default Header;