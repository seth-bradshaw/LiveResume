import React from 'react'

export default function Footer() {
    return (
        <div className="min-w-full h-64 flex items-center">
            <div className="flex justify-between m-auto w-3/5 md:w-1/2">
                <span className="text-white">
                    <a href="https://github.com/seth-bradshaw" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
                </span>
                <span className="text-white">
                    <a href="https://www.facebook.com/seth.bradshaw.50" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                </span>
                <span className="text-white">
                    <a href="https://www.linkedin.com/in/seth-bradshaw/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                </span>
            </div>
        </div>
    )
}
