import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
    query GetCharacterById($id: ID!) {
        character(id: $id) {
            name
            id
            image
            episode {
                name
                episode
            }
        }
    }
`

export const useCharacterById = (id) => {
    const { error, data, loading } = useQuery(GET_CHARACTER_BY_ID, {
        variables: { id },
    })

    return {
        data,
        error, 
        loading,
    }
}