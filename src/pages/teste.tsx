import type { NextPage } from "next";
import { useRouter } from "next/router";

const Teste: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/", "", {});
  };

  return (
    <>
      <button onClick={handleClick}>Voltarrr</button>
    </>
  );
};

// function ActiveLink() {
//   const router = useRouter()
//   const style = {
//     marginRight: 10,
//     color: router.asPath === href ? 'red' : 'black',
//   }

//   const handleClick = (e) => {
//     e.preventDefault()
//     router.push(href)
//   }

//   return (
//     <a href={href} onClick={handleClick} style={style}>
//       {children}
//     </a>
//   )
// }

export default Teste;
