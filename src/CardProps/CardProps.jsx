const CardProps = ({ image, h3, p, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex items-center m-10 rounded-xl justify-center flex-col h-[250px] w-[300px]"
    >
      <img
        src={image}
        alt="profile image"
        className=" w-[100px] h-[100px] rounded-full object-cover "
      />

      <h3>{h3}</h3>

      <p>{p}</p>
    </div>
  );
};

export default CardProps;
