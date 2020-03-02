import React from "react";
import { render } from "@testing-library/react";

function FilmListItem({name, url}){

         return(
            <li>
                <a href={url}>
                {name}
                </a>
            </li>
        )
    }

    export default FilmListItem;

