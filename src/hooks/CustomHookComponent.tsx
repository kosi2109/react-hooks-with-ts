import React, { useState, useEffect, useRef, FC, useMemo } from "react";

interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}



// function useFetchData<Payload>(url : string):{data : Payload | null , done : boolean}{

// }



const useFetchData = <Payload extends {}>(
  url: string
): { data: Payload | null; done: boolean } => {
  const [data, setData] = useState<null | Payload>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        setData(d);
        setDone(true);
      });
  }, [url]);

  return { data, done };
};

const CustomHookComponent: FC = () => {
  const { data, done } = useFetchData<Beverage[]>("/taplist.json");

  const portLandTap = useMemo(
    () =>
      (data || []).filter((d: Beverage) =>
        d.producerLocation.includes("Portland")
      ),
    []
  );

  return <div>{portLandTap.length && <img src={portLandTap![0].logo} alt="" />}</div>;
};

export default CustomHookComponent;
