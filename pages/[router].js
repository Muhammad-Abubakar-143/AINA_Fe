import { useRouter } from "next/router";

import React from 'react'

const router = () => {
    const route = useRouter();
    const pageNumber= route.query.router;
  return (
    <>
    <h1>{pageNumber}</h1>
    </>
  )
}

export default router