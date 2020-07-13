import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Card, Poster, TextNoImage, Title, ViewNoImage, ViewTitle } from "./styled";

function MovieCard(props) {

	const { item } = props;
	const navigation = useNavigation();

	function handlePressView() {
		navigation.navigate('Details', { id: item.id });
	}

	return (
		<TouchableWithoutFeedback onPress={handlePressView}>
			<Card>

				{item.backdrop_path ? (
					<Poster
						source={{
							uri: `https://image.tmdb.org/t/p/w185${item.backdrop_path}`,
						}}
					/>
				) : (
					<ViewNoImage>
						<TextNoImage>Sem imagem</TextNoImage>	
					</ViewNoImage>
				)}
				
				<ViewTitle>
					<Title>
						{item.title}
					</Title>
				</ViewTitle>

			</Card>
		</TouchableWithoutFeedback>
	);
	
}

export default MovieCard;
