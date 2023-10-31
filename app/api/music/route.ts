import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from 'replicate'


const replicate = new Replicate({
    auth:process.env.REPLICATE_API_KEY,
});




export async function POST(req: Request){
try{
    const {userId} = auth();
    const body = await req.json();
    const {prompt} =body;

    if(!userId){
        return new NextResponse("UnAuthorized User", {status:401})
    }
   
    if(!prompt){
        return new NextResponse("Prompt is Required", {status:400})
    }

    const response = await replicate.run(
      "suno-ai/bark:b76242b40d67c76ab6742e987628a2a9ac019e11d56ab96c4e91ce03b79b2787",
        {
          input: {
            prompt: prompt
          }
        }
      );
    return NextResponse.json(response)

}
catch(error){
    console.log("[GENERATION_ERROR]", error)
    return new NextResponse("Internal Error", {status:500})
}
}
