import Link from "next/link";
import { HeaderContainer } from "./styles";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <HeaderContainer>
      <ul>
        <li>
          <Link href={"/"} prefetch={false}>
            INÍCIO
          </Link>
        </li>
        <li>
          <Link href={"/category/movies"} prefetch={false}>
            FILMES
          </Link>
        </li>
        <li>
          <Link href={"/category/tv"} prefetch={false}>
            SÉRIES
          </Link>
        </li>
        <li>
          <Link href={"/search"} prefetch={false}>
            PESQUISA
          </Link>
        </li>
        <li>
          <Link href={"/list"} prefetch={false}>
            +MINHA LISTA
          </Link>
        </li>
      </ul>

      <FaBars size={26} />
    </HeaderContainer>
  );
}
