import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();

  const apiUrl = `http://api.geonames.org/searchJSON?username=bilalfali&${query}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      return new Response("GeoNames API error", { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response("Server error", { status: 500 });
  }
}
