import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ShipsQuery } from '@/util/types/graphql';
import { Ships } from '@/graphql/ships';

export const fetchShipsData = async (source: string): Promise<ShipsQuery> => {
  const httpLink = createHttpLink({
    uri : source+"/api/graphql",
  });

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  try {
    const { data } = await client.query<ShipsQuery>({
      query: Ships.query.ships,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
