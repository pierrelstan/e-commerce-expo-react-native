import * as React from "react";
import { ThemeProvider } from "styled-components/native";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import client from "./AppolloConfiguration";
import StackNavigation from "./Navigations/Stack/stack";
import { theme } from "./theme";

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <Text>Loading...</Text>;
//   if (error) {
//     return <Text>Error :{error.message}</Text>;
//   }

//   return data.locations.map(({ id, name, description, photo }: any) => (
//     <View key={id}>
//       <Text>{name}</Text>
//       <Image alt="location-reference" source={{ uri: `${photo}` }} />

//       <Text>About this location:</Text>
//       <Text>{description}</Text>
//     </View>
//   ));
// }

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StackNavigation />
      </ThemeProvider>
    </ApolloProvider>
  );
}

/* <Container>
        <Text>E-commerce stanley</Text>
        <StatusBar />
        <DisplayLocations />
      </Container> */

// const Container = styled.View`
//   flex: 1;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;
// `;
// const View = styled.View``;
// const Image = styled.Image`
//   width: 100px;
//   height: 200px;
// `;

// const Text = styled.Text``;
// const StatusBar = styled.StatusBar``;
