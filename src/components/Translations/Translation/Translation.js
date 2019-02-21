import React from 'react';

import Container from '../Container';
import Title from '../Title';
import Content from '../Content';

export default Translation = (props) => {    
    const { type, words } = props.datas;

    const renderTranslation = type.map( (cur, index) => {
        return <Content
            key={index} 
            titleName={cur.word_type}
            datas={ cur.translations }
        />
    })
    
    return(
        <Container>
            <Title 
                titleName="Terjemahan lain"
                words={words}
            />

            { renderTranslation }
            
        </Container>                
    )
}