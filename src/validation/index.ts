/**
 * to check validation of form
 * @param product product:{}
 * @returns error:{}
 */



export const productValidation = (product: {
  title: string;
  description: string;
  imgUrl: string;
  price: string;
}) => {
  // return an object
  const errors = {
    title: "",
    description: "",
    imgUrl: "",
    price: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^"]+$/.test(product.imgUrl);

  if (!
    product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product Title must be between 10 and 80 characters";
  }
  if (!
    product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description = "Product description must be between 10 and 900 characters";
  }
  if (!product.imgUrl.trim() || !validUrl) {
    errors.imgUrl="Valid image URL is required"
  };
  // if (!product.price.trim() || isNaN(Number(product.price))){
  //   errors.price="Valid Price is required"
  // }
  if (!product.price.trim() || !/\d+/.test(product.price)) {
    errors.price = "Valid Price is required";
  }


    return errors;
};
