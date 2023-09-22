import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.Open_AI_Key
});

const openai = new OpenAIApi(configuration)

export async function POST(req: Request){
try{
    const {userId} = auth();
    const body = await req.json();
    const {prompt, amount =1 , resolution= '512 x 512'} =body;

    if(!userId){
        return new NextResponse("UnAuthorized User", {status:401})
    }
    if(!configuration.apiKey){
        return new NextResponse("OpenAi API ket is not configured", {status:500})
    }
    if(!prompt){
        return new NextResponse("Prompt are Required", {status:400})
    }
    if(!amount){
        return new NextResponse("Messages are Required", {status:400})
    }
    if(!resolution){
        return new NextResponse("Messages are Required", {status:400})
    }

    const response = await openai.createImage({
        prompt,
        n: parseInt(amount,10),
        size: resolution
    })
    return NextResponse.json(response.data.data)

}
catch(error){
    console.log("[Image_ERROR]", error)
    return new NextResponse("Internal Error", {status:500})
}
}
