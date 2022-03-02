const ListGroupItem = ({
  label,
  value,
  weight = "bold",
  fontSize = "lg",
  display,
}) => {
  return (
    <li
      className={`border list-none uppercase font-${weight} text-${fontSize} rounded-sm px-5 py-5 ${display}`}
    >
      <strong className="text-gray-700 font-medium">
        {label} {":  "}
      </strong>
      {value}
    </li>
  );
};

export default ListGroupItem;
