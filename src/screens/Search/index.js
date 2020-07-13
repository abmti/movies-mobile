import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByQuery } from '../../actions/movies';
import MovieCardList from '../../components/MovieCardList';
import { Container, TextInput } from './styled';

function SearchScreen(props) {

	const [value, setValue] = useState('');
	const dispatch = useDispatch()
	const movies = useSelector(state => state.movies.filteredMovies)

	function handleChangeText(text) {
		setValue(text)
		dispatch(fetchMoviesByQuery(text))
	}

  return (
		<Container>
			
			<TextInput
				style={{  }}
				onChangeText={text => handleChangeText(text)}
				value={value}
				placeholder="Pesquisar"
			/>
			
			{movies && (
				<FlatList
					data={movies.results}
					renderItem={({ item }) => <MovieCardList item={item} />}
					keyExtractor={item => `${item.id}`}
				/>
			)}

		</Container>
  );
}

export default SearchScreen;