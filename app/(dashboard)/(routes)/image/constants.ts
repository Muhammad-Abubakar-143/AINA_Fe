import * as z from 'zod'

export const formShema = z.object({
    prompt: z.string().min(1, {
        message: "Image Prompt is Required",
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1),
});

export const amountOption = [
    {
        value: '1',
        label: '1 Image'
    },
    {
        value: '2',
        label: '2 Image'
    },
    {
        value: '3',
        label: '3 Image'
    },
    {
        value: '4',
        label: '4 Image'
    },
    {
        value: '5',
        label: '5 Image'
    },
];


export const resolutionOptions = [
    {
        value: '256 x 256',
        label: '256 x 256'
    },
    {
        value: '512 x 512',
        label: '512 x 512'
    },
    {
        value: '1024 x 1024',
        label: '1024 x 1024'
    },
]