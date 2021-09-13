import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const GameCardContainer = styled.View`
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid gray;
  margin-top: 5px;
  border-radius: 8px;
`;

export const styles = StyleSheet.create({
  cardTitle: {
    color: 'black',
    borderWidth: 2,
    borderColor: 'darkgray',
    backgroundColor: 'white',
    opacity: 0.5,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
