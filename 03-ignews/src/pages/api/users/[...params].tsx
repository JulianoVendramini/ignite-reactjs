import { NextApiRequest, NextApiResponse} from 'next'

export default function Users(request: NextApiRequest, response: NextApiResponse) {
    console.log(request.query);
    

    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Jack Doe' },
    ]

    return response.json(users)
}