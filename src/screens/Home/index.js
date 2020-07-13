import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, fetchTrendings } from '../../actions/movies';
import MovieCard from '../../components/MovieCard';
import MoviesList from '../../components/MoviesList';
import { Container, Content, TitleApp, TitleTrending, ViewTitleApp } from './styled';

function HomeScreen() {

	const dispatch = useDispatch()
	const trendings = useSelector(state => state.movies.trendings)
	const genres = useSelector(state => state.movies.genres)

	useEffect(() => {
		init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function init() {
		dispatch(fetchTrendings())
			.then(() => {
				console.debug('SUCCESS TRENDINGS')
			})
			.catch((e) => {
				alert('Ocorreu um erro ao buscar os filmes mais populares')
			})
		
		dispatch(fetchGenres())
			.then(() => {
				console.debug('SUCCESS GENRES')
			})
			.catch((e) => {
				alert('Ocorreu um erro ao buscar os generos')
			})
	}

  return (
		<Container>
			<Content>

				<ViewTitleApp>
					<Ionicons name='tv-outline' size={16} style={{ color: 'black', marginRight: 2 }} />
					<TitleApp>
						The Movie APP
					</TitleApp>
				</ViewTitleApp>

				<TitleTrending>
					Populares
				</TitleTrending>
				{trendings ? (
					<FlatList
						data={trendings.results}
						renderItem={({ item }) => <MovieCard item={item} />}
						keyExtractor={item => `${item.id}`}
						horizontal={true}
					/>
				) : (
					<ActivityIndicator size="small" color="#2F95D6" />
				)}

				{genres && genres.map((item, key) => (
					<MoviesList key={key} genre={item} />
				))}

			</Content>
		</Container>	
  );
}

export default HomeScreen;
