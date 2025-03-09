import client from "@/lib/databaseConnect"

export async function GET() {
    const books = client.db('lsburestaurant').collection('books')
    const query = {}
    const result = await books.find(query).sort({ _id: -1 }).toArray()
    return Response.json(result)
}