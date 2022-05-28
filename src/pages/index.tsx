import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Link from "next/link";

// const Home: NextPage = () => {
//   return (
//     <>
//       <Link href="/teste">
//         <a>Ir para teste</a>
//       </Link>
//     </>
//   );
// };

// export default Home;

import { useEffect } from "react";
import { useRouter } from "next/router";

// Here you would fetch and return the user
const useUser = (): string | null => {
  // const userId = localStorage.getItem("user_id");
  const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
  // const user = !!userId ? userId : null;
  return userId || null;
};

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!!user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <p>Redirect...</p>
    </>
  );
};

export default Home;
