import React, { Fragment } from "react";
import FilmListItem from './FilmListItem';

function FilmList({ films }) {

    const filmListComponents = films.map(film => {
        return <FilmListItem key={film.id} url={film.url} name={film.name} />
    })

    return (
        <Fragment>
            <ul>
                {filmListComponents}
            </ul>
        </Fragment>
    )
}

export default FilmList;