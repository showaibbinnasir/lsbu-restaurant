export default async function getBooks() {
  const baseURL = process.env.DOMAIN 
    const url = await fetch(`${baseURL}/api/getBookDetails`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }
