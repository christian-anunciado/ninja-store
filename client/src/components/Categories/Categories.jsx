import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

function Categories() {
    return (
        <div className="categories">
            <div className="item item-1">
                <img src="https://images.pexels.com/photos/8638298/pexels-photo-8638298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" id='image-1' alt="" />
                <Link className='link' to="/products/sale">
                    <button>
                        <span>Sale</span>
                    </button>
                </Link>
            </div>
            <div className="item item-2">
                <img src="https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" id='image-2' alt="" />
                <Link className='link' to="/products/sports">
                    <button>
                        <span>Sports</span>
                    </button>
                </Link>
            </div>
            <div className="item item-3">
                <img src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id='image-2' alt="" />
                <Link className='link' to="/products/men">
                    <button>
                        <span>Men</span>
                    </button>
                </Link>
            </div>
            <div className="item item-4">
                <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id='image-2' alt="" />
                <Link className='link' to="/products/accessories">
                    <button>
                        <span>Accessories</span>
                    </button>
                </Link>
            </div>

            <div className="item item-5">
                <img src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" alt="" />
                <Link className='link' to="/products/women">
                    <button >
                        <span>Women</span>
                    </button>
                </Link>
            </div>

            <div className="item item-6">
                <img src="https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Link className='link' to="/products/shoes">
                    <button >
                        <span>Shoes</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Categories