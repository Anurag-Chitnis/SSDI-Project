import React from "react";

const TableHeader = ({ Pxaxis, Pyaxis, content, position }) => {
  return (
    <th
      scope="col"
      className={`${Pxaxis} ${Pyaxis} ${position} text-base font-medium text-gray-500 tracking-wider`}
    >
      {content}
    </th>
  );
};

TableHeader.default = {
  position: "text-left",
};

const TableHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <TableHeader Pxaxis="pl-6" Pyaxis="py-3" content="PRODUCT IMAGE" />
        <TableHeader Pxaxis="px-5" Pyaxis="" content="NAME" />
        <TableHeader Pxaxis="px-5" Pyaxis="py-3" content="CATEGORY" />
        <TableHeader Pxaxis="px-6" Pyaxis="py-3" content="QUANTITY" />
        <TableHeader Pxaxis="px-6" Pyaxis="py-3" content="PRICE" />
        <TableHeader
          Pxaxis="px-5"
          Pyaxis="py-3"
          content="ACTION"
          position="text-center"
        />
      </tr>
    </thead>
  );
};

export default TableHead;
