import React from 'react';


function EstimateEditor({estimate}) {
    return (
        <div className='flex items-fill w-full overflow-scroll'>
            {estimate.id}
        </div>
    )
}

export default EstimateEditor;