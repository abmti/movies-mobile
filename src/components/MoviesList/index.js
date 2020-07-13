import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchMoviesByGenre } from '../../actions/movies';
import MovieCard from '../../components/MovieCard';
import { TitleGenre } from './styled';

function MoviesList(props) {

	const dispatch = useDispatch()
	const genre = props.genre

	useEffect(() => {
		init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function init() {
		dispatch(fetchMoviesByGenre(genre.id))
	}

  return (		
		<View>
			<TitleGenre>
				{genre.name}
			</TitleGenre>
			{genre.movies ? (
				<FlatList
					data={genre.movies.results}
					renderItem={({ item }) => <MovieCard item={item} />}
					keyExtractor={item => `${item.id}`}
					horizontal={true}
				/>
			) : (
				<ActivityIndicator size="small" color="#2F95D6" />
			)}
		</View>
	);
	
}

export default MoviesList;
