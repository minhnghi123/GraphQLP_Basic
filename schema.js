export const typeDefs = `#graphql
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
    type Review {
        id:ID!,
        rating:Int!,
        content:String!,
        author:Author! ,
        game:Game!
    }
    type Author{
        id:ID!,
        name:String!,
        verified:Boolean!,
        reviews:[Review!]
    }
    type Query{
        reviews:[Review],
        games:[Game],
        authors:[Author],
        game( id:ID!): Game! ,
        author( id:ID! ): Author!
    }
    type Mutation{
        deleteGame(id:ID!):[Game],
        addGame(game:addGameInput!) :Game!,
        updateGame(id:ID!,game:updateGameInput!) :Game!
    }

`;
