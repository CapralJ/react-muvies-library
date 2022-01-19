import {Movie} from './Movie';

function Movies (props){
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
        )) : <h4>Nothing</h4> 
    }
    </div>
}

export {Movies}