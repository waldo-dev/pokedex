import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokemon from './Card/Pokemon';

const Paginas = () => {
    return (
        <section>
            < Switch >
                < Route path="/" exact component={Pokemon}/>
            </Switch>
        </section>
    )
}

export default Paginas;