import React from 'react';

export default function() {
    return (
        <div className="input-group add-pin">
            <input type="text" className="form-control" placeholder="Add Image Url" aria-describedby="basic-addon2" />
            <span className="input-group-addon" id="basic-addon2">Add<span className="add-pin-text-right">It</span></span>
        </div>
    );
}