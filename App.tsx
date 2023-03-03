import * as React from "react";
import styled from "styled-components/native";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import client from "./AppolloConfiguration";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Text>Loading...</Text>;
  if (error) {
    return <Text>Error :{error.message}</Text>;
  }

  return data.locations.map(({ id, name, description, photo }: any) => (
    <View key={id}>
      <Text>{name}</Text>
      <Image alt="location-reference" source={{ uri: `${photo}` }} />

      <Text>About this location:</Text>
      <Text>{description}</Text>
    </View>
  ));
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Text>E-commerce stanley</Text>
        <StatusBar />
        <DisplayLocations />
      </Container>
    </ApolloProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const View = styled.View``;
const Image = styled.Image`
  width: 100px;
  height: 200px;
`;

const Text = styled.Text``;
const StatusBar = styled.StatusBar``;
