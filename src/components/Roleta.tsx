"use client";

import { useEffect, useRef } from "react";


export default function Roleta() {

    //TESTE

    const cores = [
        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93",
        "#f72585",
        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93",
        "#f72585",
        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93",
        "#f72585",
        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93",
        "#f72585"
    ];

    const opcoes = [
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Churrasco",
        "Pasta",
        "Tacos",
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Churrasco",
        "Pasta",
        "Tacos",
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Churrasco",
        "Pasta",
        "Tacos",
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Churrasco",
        "Pasta",
        "Tacos"
    ];

    const anguloSegmento = (Math.PI * 2) / opcoes.length;

    //TESTE

    const CanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const centroX = 600;
        const centroY = centroX;

        const canvas = CanvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        opcoes.forEach((opcao, index) => {
            const inicio = index * anguloSegmento;
            const fim = inicio + anguloSegmento;

            ctx.beginPath();

            ctx.moveTo(centroX, centroY);

            ctx.arc(
                centroX,
                centroY,
                600,
                inicio,
                fim
            );

            ctx.closePath();

            ctx.fillStyle = cores[index];
            ctx.fill();
        });


    },[]);


    return (
        <canvas
            ref={CanvasRef}
            width={1200}
            height={1200}
            style={{
                width: "600px",
                height: "600px"
            }}
        />
    );
}