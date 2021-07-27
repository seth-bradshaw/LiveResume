import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="min-w-full h-64 flex items-center">
            <div className="flex justify-between m-auto w-3/5 md:w-1/2">
                <span className="text-white">
                    <a href="https://github.com/seth-bradshaw" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </span>
                <span className="text-white">
                    <a href="https://www.facebook.com/seth.bradshaw.50" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                </span>
                <span className="text-white">
                    <a href="https://www.linkedin.com/in/seth-bradshaw/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                </span>
            </div>
        </div>
    )
}
