import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

interface Title {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
}

interface ListContextType {
  addTitleToList: (title: Title) => void;
  removeTitleToList: (titleId: number) => void;
  titlesList: Title[];
}

export const ListContext = createContext({} as ListContextType);

interface ListContextProviderProps {
  children: ReactNode;
}

export default function ListContextProvider({
  children,
}: ListContextProviderProps) {
  const [titlesList, setTitlesList] = useState<Title[]>(() => {
    const { cookies } = parseCookies(null, "TITLES_LIST");

    if (cookies) {
      return JSON.parse(cookies);
    }

    return [];
  });

  useEffect(() => {
    setCookie(null, "TITLES_LIST", JSON.stringify(titlesList), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }, [titlesList]);

  function addTitleToList(title: Title) {
    const containInList = titlesList.findIndex((item) => {
      return item.id === title.id;
    });

    if (containInList < 0) {
      setTitlesList((state) => [...state, title]);
    }
  }

  function removeTitleToList(titleId: number) {
    const newTitlesList = titlesList.filter((items) => {
      return items.id != titleId;
    });

    setTitlesList(newTitlesList);
  }

  return (
    <ListContext.Provider
      value={{ addTitleToList, removeTitleToList, titlesList }}
    >
      {children}
    </ListContext.Provider>
  );
}
