export const authorTypeDef = `#graphql
    type Author{
        id:ID!,
        name:String!,
        verified:Boolean!,
        reviews:[Review!]
    }
    type Query {
        authors:[Author],
        author( id:ID! ): Author!
    }
`;
