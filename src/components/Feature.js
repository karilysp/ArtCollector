import React, { Fragment } from 'react';

// Don't touch this import
import { fetchQueryResultsFromTermAndValue } from '../api';

 
const Searchable = (props) => {
    const {searchTerm, searchValue, setIsLoading, setSearchResults } = props;

    return (
    <span className="content">
    <a href="#" onClick={async (event) => {
        event.preventDefault ();
        setIsLoading(true);

        try {
            const result = await fetchQueryResultsFromTermAndValue (searchTerm, searchValue)
            setSearchResults(result);
        } catch (error) {
            console.log('Error', error);
        } finally {
            setIsLoading(false);
        }
     }}
     >
     {searchTerm}
     </a>
     </span>
    );

};


const Feature = (props) => {

const {featuredResult} = props; 
    if (!featuredResult) {
        return <main id="feature"></main>; 
    }
    const {
        title,
        dated,
        images,
        primaryimageurl,
        description,
        culture,
        style,
        technique,
        medium, 
        dimensions,
        people,
        department,
        division,
        contact,
        creditline,
    } = featuredResult;

    return (
        <main id="feature">
         <div className="object-feature">
            <header>
             <h3>{title}</h3>
             <h4>{dated}</h4>
            </header>
            <section className="facts">
                {description ? (
                    <Fragment>
                        <span className="title">Description</span>
                        <span className="content">{description}</span>
                    </Fragment>
                 ) : null}
                {culture ? (
                    <Fragment>
                        <span className="title">Culture</span>
                        <Searchable
                        searchTerm={culture.toLowerCase()}
                        searchValue={culture.toLowerCase()}
                        {...props}
                        />
                    </Fragment>
                   ) :null }
                   {style ? (
                    <Fragment>
                        <span className="title">Style</span>
                        <span className="content">{style}</span>
                    </Fragment>
                   ) :null}
                    {technique ? (
                        <Fragment>
                            <span className="title">technique</span>
                            <Searchable
                                searchTerm={technique.toLowerCase()}
                                searchValue={technique.toLowerCase()}
                                {...props}
                            />
                        </Fragment>
                    ) : null}
                    {medium ? (
                        <Fragment>
                            <span className="title">Medium</span>
                            <Searchable
                                searchTerm={culture.toLowerCase()}
                                searchValue={culture.toLowerCase()}
                                {...props}
                            />
                        </Fragment>
                    ) : null}
                    {dimensions ? (
                        <Fragment>
                            <span className="title">Dimensions</span>
                            <span className="content">{dimensions}</span>
                        </Fragment>
                    ) : null}
                    {people ? people.map ((person) => (
                        <Fragment>
                            <span key={person.personid}
                            className="title">People</span>
                            <Searchable
                                searchTerm={person.displayname}
                                searchValue={person.displayname}
                                {...props}
                            />
                        </Fragment>
                    )) : null }
                    {division ? (
                        <Fragment>
                            <span className="title">Division</span>
                            <span className="content">{division}</span>
                        </Fragment>
                    ) : null}
                    {department ? (
                        <Fragment>
                            <span className="title">Department</span>
                            <span className="content">{department}</span>
                        </Fragment>
                    ) : null}
                    {contact ? (
                        <Fragment>
                            <span className='title'>Contact</span>
                            <span>
                                <a target="_blank" href="mailto : {contact}">
                                    {contact}
                                </a>
                            </span>
                        </Fragment>
                    ): null}
                    {creditline ? (
                        <Fragment>
                            <span className="title">Creditline</span>
                            <span className="content">{creditline}</span>
                        </Fragment>
                    ) : null}

            </section>
            <section className="photos">
                {images ? (
                    images.map ((image) => (
                        <img
                        key={image.image.id}
                        src={image.baseimageurl}
                        alt={image.description}
                        />
                    ))
                ) : (
                <img src={primaryimageurl} alt={primaryimageurl} />
                )}
           </section>
  </div></main>
    )

}

export default Feature;