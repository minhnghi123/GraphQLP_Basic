export const reviewTypeDef = `#graphql
    type Review {
            id:ID!,
            rating:Int!,
            content:String!,
            author:Author! ,
            game:Game!
        }
    
        type Query{
            reviews:[Review],
        
        }
`;
