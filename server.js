import ip from 'ip';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import cors from 'cors';

const GRAPHQL_PORT = 80;

const graphQLServer = express();
graphQLServer.use('*', cors({ origin: 'http://192.168.1.1:4000' }));
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
const ipz  = ip.address();

graphQLServer.listen(GRAPHQL_PORT,ipz, () => console.log(
    `GraphiQL is now running on http://${ipz}:${GRAPHQL_PORT}/graphiql`
));