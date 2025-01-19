import type {
    NextApiRequest,
    // NextApiResponse
} from 'next'

// type ResponseData = {
//     message: string
// }

export function GET(req: NextApiRequest) {
    console.log(req)
    return Response.redirect('https://pix-ai.vercel.app/')
}