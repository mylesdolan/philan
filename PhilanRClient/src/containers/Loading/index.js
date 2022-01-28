import * as React from "react";

function Loading () {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={'spinner'}>
                        <div className="fa-3x">
                            <i className="fas fa-spinner fa-pulse"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export {
    Loading
}
