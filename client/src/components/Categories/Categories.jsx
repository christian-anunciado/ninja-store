import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

function Categories() {
    return (
        <div className="categories">
            <div className="item item-1">
                <img src="https://images.pexels.com/photos/8638298/pexels-photo-8638298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id='image-1' alt="" />
                <button>
                    <Link className='link' to="/products/1">
                        <span>Sale</span>
                    </Link>
                </button>
            </div>
            <div className="item item-2">
                <img src="https://images.pexels.com/photos/8638298/pexels-photo-8638298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id='image-2' alt="" />
                <button>
                    <Link className='link' to="/products/2">
                        <span>New Season</span>
                    </Link>
                </button>
            </div>
            <div className="item item-3">
                Item 3
            </div>
            <div className="item item-4">
                Item 4
            </div>

            <div className="item item-5">
                <img src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button >
                    <Link className='link' to="/products/5">
                        <span>Women</span>
                    </Link>
                </button>
            </div>

            <div className="item item-6">
                ASDSADSADSA
            </div>
        </div>
    )
}

export default Categories