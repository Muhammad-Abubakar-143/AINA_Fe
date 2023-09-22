import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.Open_AI_Key
});

const openai = new OpenAIApi(configuration)
const instruction : ChatCompletionRequestMessage = {
    role:'system',
    content:'You are a code Generaator. You must answer only in markdown code snippets, Use code comments for explaination',
}

export async function POST(req: Request){
try{
    const {userId} = auth();
    const body = await req.json();
    const {messages} =body;

    if(!userId){
        return new NextResponse("UnAuthorized User", {status:401})
    }
    if(!configuration.apiKey){
        return new NextResponse("OpenAi API ket is not configured", {status:500})
    }
    if(!messages){
        return new NextResponse("Messages are Required", {status:400})
    }

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
         messages: [instruction, ...messages]
    })
    return NextResponse.json(response.data.choices[0].message)

}
catch(error){
    console.log("[CODE_ERROR]", error)
    return new NextResponse("Internal Error", {status:500})
}
}
