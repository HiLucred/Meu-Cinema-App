import { useContext } from "react";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { ListContext } from "../../context/ListContext";
import { MovieDetailsProps } from "../../pages/details/movie/[id]";

export default function AddToListButton({ titleDetails }: MovieDetailsProps) {
  const { addTitleToList, titlesList } = useContext(ListContext);

  const titleAlreadyExistInList = titlesList.findIndex(
    (item) => item.id === titleDetails.id
  );

  function handleAddTitleInList() {
    const newTitle = {
      id: titleDetails.id,
      title: titleDetails.title,
      poster_path: titleDetails.poster_path,
      media_type: "movie",
    };

    addTitleToList(newTitle);
  }

  return (
    <>
      {titleAlreadyExistInList >= 0 ? (
        <button disabled={true}>
          <FaCheckCircle size={22} />
          Na sua lista
        </button>
      ) : (
        <button onClick={handleAddTitleInList}>
          <FaPlusCircle size={22} />
          Adicionar na sua lista
        </button>
      )}
    </>
  );
}
