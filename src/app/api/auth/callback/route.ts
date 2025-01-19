import { NextRequest } from 'next/server'

// type ResponseData = {
//     message: string
// }

export function GET(req: Request | NextRequest) {
    console.log(req)
    return Response.redirect('https://pix-ai.vercel.app/')
}