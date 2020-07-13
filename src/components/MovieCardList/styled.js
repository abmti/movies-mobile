import styled from 'styled-components/native'

export const Card = styled.View`
	backgroundColor: #FAFAFA;
	borderWidth: 0.5px;
	borderColor: #cccccc;
	margin: 4px;
	flexDirection: row
`

export const Poster = styled.Image`
	height: auto;
	width: 150px;
	aspectRatio: 1.8;
`

export const ViewNoImage = styled.View`
	height: auto;
	width: 150px;
	aspectRatio: 1.8;
	backgroundColor: #eeeeee; 
	alignItems: center;
	justifyContent: center;
`

export const TextNoImage = styled.Text`
	fontSize: 10px;
	color: gray;
`

export const ViewTitle = styled.View`
	flex: 1;
	justifyContent: center;
`

export const Title = styled.Text`
	color: #000000;
	fontSize: 12px;
	margin: 3px;
`
