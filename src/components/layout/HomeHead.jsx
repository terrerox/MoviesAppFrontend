import React from "react";

export const HomeHead = (props) =>{

return (
    <div className="content__head">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h2 class="content__title">{props.page}</h2>
                </div>
            </div>
        </div>
    </div>
)}