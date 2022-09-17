import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function SearchLayout() {

    
    console.log("search will be done",sText)
    return (
        <div>
            <Outlet />
        </div>
    );
}
