import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Card, Poster, Title } from "./styled";

function MovieCard(props) {

	const { item } = props;
	const navigation = useNavigation();

	function handlePressView() {
		navigation.navigate('Details', { id: item.id });
	}

	return (
		<TouchableWithoutFeedback onPress={handlePressView}>
			<Card>

				<Poster
					source={{
						uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
					}}
				/>

				<Title ellipsizeMode='tail' numberOfLines={2}>
					{item.title}
				</Title>

			</Card>
		</TouchableWithoutFeedback>
	);
	
}

export default MovieCard;
