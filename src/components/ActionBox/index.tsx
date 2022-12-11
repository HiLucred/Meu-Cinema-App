import Link from "next/link";
import { useContext } from "react";
import { FaEye, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { ListContext } from "../../context/ListContext";
import { ActionBoxContainer } from "./styles";

interface ActionBoxProps {
  size: "medium" | "large";
  data: {
    id: number;
    title?: string;
    poster_path: string;
    media_type?: string;
  };
}

export default function ActionBox({ size, data }: ActionBoxProps) {
  const { addTitleToList, removeTitleToList, titlesList } =
    useContext(ListContext);

  const titleAlreadyExistInList = titlesList.findIndex(
    (item) => item.id === data.id
  );

  const iconsSize =
    size === "medium"
      ? { trash: 16, plus: 18, eye: 20 }
      : { trash: 22, plus: 26, eye: 28 };

  return (
    <ActionBoxContainer>
      {titleAlreadyExistInList >= 0 ? (
        <FaTrashAlt
          size={iconsSize.trash}
          title={"Remover título da sua lista"}
          color={"white"}
          onClick={() => removeTitleToList(data.id)}
        />
      ) : (
        <FaPlusCircle
          size={iconsSize.plus}
          title={"Adicionar título para sua lista"}
          color={"white"}
          onClick={() => addTitleToList(data)}
        />
      )}

      {"|"}

      <Link href={`/details/${data.media_type}/${data.id}`} prefetch={false}>
        <FaEye
          size={iconsSize.eye}
          title={"Ver detalhes sobre o título"}
          color={"white"}
        />
      </Link>
    </ActionBoxContainer>
  );
}
