import { getIgdbClient } from "@/lib/igbd";

export async function GET(request: Request) {
    const client = await getIgdbClient();

    const { searchParams } = new URL(request.url);
    const pesquisa = searchParams.get("pesquisa");

    const resposta = await client
        .fields([
            "id",
            "name",
            "summary",
            "cover.image_id",
        ])
        .search( pesquisa || " " )
        .where("game_type = 0 | game_type = 8 | game_type = 9 | game_type = 10")
        .limit(20)
        .request("/games");
    
    return Response.json(resposta.data);
} 