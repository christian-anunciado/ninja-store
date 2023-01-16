import React from 'react'
import ReactLoading from 'react-loading';
import './Loading.scss'

function Loading({ color, height, width, loadingHeight, loadingWidth }) {

    const style = {
        height: height || 'auto',
        width: width || 'auto'
    }
    return (
        <div className='loading' style={style}>
            <ReactLoading
                type='spin'
                color={color || '#ffffff'}
                height={loadingHeight}
                width={loadingWidth}
            />
        </div>
    )
}

export default Loading
