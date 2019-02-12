import React from 'react';

import capitalize_words from '../../../helpers/capitalize_words';

import Container from '../Container';
import Title from '../Title';
import Synonyms from '../Content'; // import as Synonyms, not Content
import Translations from '../Content'; // import as Translations, not Content
import Examples from './Examples';

export default Definition = (props) => {
    const { words, word_type, translations, synonyms, examples } = props.datas;

    return(
        <Container>
            <Title titleName={ capitalize_words(word_type) } words={words} />

            {
                translations.length > 0 
                    ? <Translations titleName="Arti" datas={ translations } />
                    : null 
            }

            {
                synonyms.length > 0 
                    ? <Synonyms titleName="Sinonim" datas={ synonyms } />
                    : null 
            }

            {
                examples.length > 0
                    ? <Examples datas={ examples } />
                    : null
            }
        </Container>
    )
}