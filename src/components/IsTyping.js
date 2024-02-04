import React from 'react';
import Typewriter from 'typewriter-effect';
import '../sass/pages/_isTyping.scss';

const IsTyping = () => {
    return (
        <div className='isTyping'>
            <Typewriter
                options={{
                    strings: ["Hello ! Je suis Sina S. KABUYA ",
                        "Développeur web junior frontend, conception des sites web et des applications web"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                }}
            />
        </div>
    )
}

export default IsTyping