import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
	flex: 1;
`

export const Content = styled.ScrollView`
	flex: 1;
`

export const ViewButtonClose = styled.View`
	position: absolute; 
	top: 10px;
	right: 10px;
	zIndex: 100;
	width: 30px;
	height: 30px;
`

export const Title = styled.Text`
	marginTop: 10px;
	fontWeight: bold;
`

export const OriginalTitle = styled.Text`
	marginTop: 5px;
`

export const RowDetails = styled.View`
	flexDirection: row;
	marginTop: 10px;
`

export const ColDetail = styled.View`
	flexDirection: row;
	flex: 1;
`

export const ViewYear = styled.View`
	flex: 1;
	flexDirection: row;
	justifyContent: center;
`

export const ViewMinutes = styled.View`
	flex: 1;
	flexDirection: row;
	justifyContent: flex-end;
`

export const TextOverview = styled.Text`
	marginTop: 10px;
	marginBottom: 10px;
`

export const TextNoImage = styled.Text`
	fontSize: 20px;
	color: gray;
`
