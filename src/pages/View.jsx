import { Button } from "@mui/base";
import { Box, Stack } from "@mui/system";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const View = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [unchangeData, setUnhangedData] = useState([]);

  const getDetails = async () => {
    try {
      const url = `https://hp-api.onrender.com/api/characters`;
      const res = await fetch(url);
      const response = await res.json();
      console.log(response);
      setData(response);
      setUnhangedData(response);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleChange = (e) => {
    const newSearch = e.target.value.toLowerCase();
    console.log("newsearch" + newSearch);
    console.log("search" + search);
    setSearch(newSearch);
    setData(unchangeData);
    setData((prevData) =>
      prevData.filter((item) => item.name.toLowerCase().includes(newSearch))
    );
  };
  const handleClick = () => {};

  return (
    <Box>
      <Box sx={{ alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          label="Search"
          value={search}
          onChange={handleChange}
        />

        {/* <Button onClick={handleClick}>Go to Details</Button> */}
        <Box
          sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}
        >
          {data.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Card obj={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default View;
