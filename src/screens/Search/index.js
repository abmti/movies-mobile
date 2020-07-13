import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByQuery } from '../../actions/movies';
import MovieCardList from '../../components/MovieCardList';
import { Container, TextInput, TextNoResults } from './styled';
import useDebounce from '../../hooks/useDebounce';

function SearchScreen(props) {

	const [value, setValue] = useState('');
	const dispatch = useDispatch()
	const movies = useSelector(state => state.movies.filteredMovies)
	const debouncedSearchTerm = useDebounce(value, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(fetchMoviesByQuery(debouncedSearchTerm))	
		} 
	}, [debouncedSearchTerm]);


	function handleChangeText(text) {
		setValue(text)
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
				<>
					{movies.results.length > 0 ? (
						<FlatList
							data={movies.results}
							renderItem={({ item }) => <MovieCardList item={item} />}
							keyExtractor={item => `${item.id}`}
						/>
					) : (
						<TextNoResults>Nenhum registro encontrado.</TextNoResults>
					) }
					
				</>	
			)}

		</Container>
  );
}

export default SearchScreen;