export const gameTypeDef = `#graphql
     input addGameInput{
        title:String!,
        platform:[String!]!
    }
    input updateGameInput{
        title:String,
        platform:[String!]
    }
    type Game{
        id:ID!,
        title:String,
        platform:[String!]!,
        reviews:[Review!]
    }
    type Query{
        games:[Game],
        game( id:ID!): Game! 
    }
    type Mutation{
        deleteGame(id:ID!):[Game],
        addGame(game:addGameInput!) :Game!,
        updateGame(id:ID!,game:updateGameInput!) :Game!
    }
`;
