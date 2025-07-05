interface IProps {
  imageUrl: string;
  alt: string;
  classname: string;

}


const Image = ({ imageUrl,alt,classname }: IProps) => {
  return (
    <img
      // className=" w-10 h-10 rounded-full border"
      src={imageUrl}
      alt={alt}
      className={classname}
    />
  );
};
export default Image
