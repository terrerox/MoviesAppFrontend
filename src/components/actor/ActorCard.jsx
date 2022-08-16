import React from "react";

export const ActorCard = ({ actor }) => {

    return(
        <div className="col-2 wh-100">
        <div className="card bg-dark text-white">
            <img  src={actor.imageUrl} className="img-fluid"/>
            <div className="card-body">
                <span className="card-title text-center h6">{actor.name} {actor.lastName}</span>
            </div>
        </div>
        </div>
    )
}