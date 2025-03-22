import React, { useEffect, useState, useCallback } from 'react';
import { NavData, _gStartPageId } from '../Data/PagesData.js';
import Screen from '../Pages/Screen';
import QuestionRadio from '../Pages/QuestionRadio.jsx';
import QuestionChecklist from '../Pages/QuestionChecklist';
import QuestionDnD from '../Pages/QuestionDnD.jsx';
import Result from '../Pages/Result.jsx';
import { useParams } from 'react-router-dom';
import Accordian from '../Pages/Accordian.jsx';
import Cloze from '../Pages/Cloze.jsx';

export default function Main() {
  const { id } = useParams();
  const [data, setData] = useState(NavData);
  const [getPage, setPageData] = useState([]);

  const componentMap = {
    Screen: <Screen />,
    QuestionRadio: <QuestionRadio />,
    QuestionChecklist: <QuestionChecklist />,
    QuestionDnD: <QuestionDnD />,
    Cloze: <Cloze/>,
    Accordian: <Accordian/>,
    Result: <Result />,
  };

  const getPageId = useCallback(
    (Id) => {
      if (!Id) {
        Id = _gStartPageId;
      }
      console.log('Fetching Page Data for ID:', Id);

      const List = Object.values(data);
      const filteredItems = List.filter((x) => x.PgId == Id);

      console.log('Filtered Items:', filteredItems);

      if (filteredItems.length === 0) {
        console.warn('No matching page found for ID:', Id);
      }

      setPageData(filteredItems);
    },
    [data]
  );

  useEffect(() => {
    getPageId(id);
  }, [id, getPageId]);

  return (
    <div className="main">
      {getPage.length > 0 && componentMap[getPage[0]?.PgType] ? (
        componentMap[getPage[0].PgType]
      ) : (
        <p>Loading or Page Not Found...</p>
      )}
    </div>
  );
}
