import igdb from "igdb-api-node";

export async function getAccessToken() {
    const resposta = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: process.env.TWITCH_CLIENT_ID!,
            client_secret: process.env.TWITCH_CLIENT_SECRET!,
            grant_type: "client_credentials",
        }),
    });

    const dados = await resposta.json();

    return dados.access_token;
}

export async function getIgdbClient() {
    const token = await getAccessToken();

    return igdb(
        process.env.TWITCH_CLIENT_ID!,
        token
    );
}