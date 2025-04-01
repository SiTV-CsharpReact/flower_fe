'use client'
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

const Filter = () => {
  const [value, setValue] = useState([50]); // Giá trị mặc định là 50

  return (
    <>
      <p>Price</p>
      <Slider
        defaultValue={value}
        max={10000}
        step={100}
        className="w-[80%]"
        onValueChange={(newValue) => {
          setValue(newValue); // Cập nhật giá trị
        //   console.log("Slider Value:", newValue[0]); // Log giá trị
        }}
        
      />
      <p>Range: 0 - {value[0]} đ</p>
    </>
  );
};

export default Filter;
