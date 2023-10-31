import * as z from 'zod'

export const formShema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is Required",
    }),
})