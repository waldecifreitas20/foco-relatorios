import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { storageService } from "~/services/StorageService";

export function useRouter() {
  const [currentDate, setCurrentDate] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const date = storageService.load("searchDate");
    setCurrentDate(date);
  }, []);

  function navigateTo(path: string) {
    navigate({
      pathname: path,
      search: `?createdAt=${currentDate}`,
    });
  }

  function getPath(path: string) {
    return  `/?createdAt=${currentDate}`;
  }

  return {
    navigateTo,
    getPath
  };
}
