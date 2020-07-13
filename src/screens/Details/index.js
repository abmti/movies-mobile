import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieById } from '../../actions/movies';
import { ColDetail, Container, Content, OriginalTitle, RowDetails, Title, ViewButtonClose, ViewMinutes, ViewYear, TextOverview, TextNoImage } from './styled';

function DetailsScreen(props) {

	//props.navigation.setOptions({
	//	headerShown: false
	//})

	const navigation = useNavigation();
	const dispatch = useDispatch()
	const movie = useSelector(state => state.movies.movie)

	useEffect(() => {
		init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function init() {
		dispatch(fetchMovieById(props.route.params.id))
	}

  return (
		<Container>
			<Content>
				
				{movie && (
					<>

						<ViewButtonClose>
							<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
								<Image source={require('../../assets/icon-cancelar.png')} style={{ width: 30, height: 30 }} />
							</TouchableWithoutFeedback>
						</ViewButtonClose>
						
						<View style={{ width: '100%', height: 'auto' }}>
							{movie.backdrop_path ? (
								<Image
									style={styles.img}
									source={{
										uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
									}}
								/>
							) : (
								<View style={styles.img}>
									<TextNoImage>Sem imagem</TextNoImage>
								</View>
							)}
							

						</View>

						<View style={{ margin: 6 }}>
							
							<Title>
								{movie.title}
							</Title>

							<OriginalTitle>
								Título Original: {movie.original_title}
							</OriginalTitle>

							<RowDetails>
								
								<ColDetail>
									<Ionicons name='checkmark' size={14} style={{ color: 'black', marginRight: 2 }} />
									<Text>
										{movie.vote_average * 10}% relevante
									</Text>
								</ColDetail>
								
								<ColDetail>
									<ViewYear>
										<Ionicons name='calendar' size={14} style={{ color: 'black', marginRight: 2 }} />
										<Text>	
											{new Date(movie.release_date).getFullYear()}
										</Text>
									</ViewYear>	
								</ColDetail>

								<ColDetail>
									<ViewMinutes>
										<Ionicons name='time' size={14} style={{ color: 'black', marginRight: 2 }} />
										<Text>	
											{movie.runtime} minutos
										</Text>
									</ViewMinutes>
								</ColDetail>

							</RowDetails>
							
							<TextOverview>
								{movie.overview}
							</TextOverview>

						</View>	

					</>
				)}

			</Content>
		</Container>	
  );
}

const styles = StyleSheet.create({
	img: {
		width: Dimensions.get('window').width,
		height: 'auto',
    aspectRatio: 16/9,
	}
})

export default DetailsScreen;
