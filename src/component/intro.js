import React from 'react';

export default function Intro({title, content, children}){
    return (
        <section data-kine='intro'>
            <h1>{title}</h1>
            <p>{content}</p>
            {children}
        </section>
    );
}
