import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>id: {id}</h1>;
}

export default UserPage;
