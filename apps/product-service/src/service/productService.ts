import { Product } from '../model/productModel';
import { SubCategory } from '../model/subCategoryModel';
import { AgeGroup } from '../model/ageGroupModel';
import { BrandModel } from '../model/brandModel';
import { CategoryModel } from '../model/categoryModel';
import { OriginModel } from '../model/originModel';
import { ChildCategory } from '../model/childCategoryModel';
import { validationError } from '../utils/errorHandler';
import cloudinary from '../utils/cloudinary';


export const addProductService = async (file: any, data: any,userId:any) => {
  try {
    const {
      name,
      description,
      price,
      expiryOn,
      benefit,
      variant,
      subcategoryId,
      categoryId,
      childCategoryId,
      originId,
      brandId,
      ageGroupId,
      returnPolicy,
    } = data;

    const subategoryName = await SubCategory.findById( subcategoryId );

    if (!subategoryName) {
      throw  new validationError('Subcatagroy not found');
    }
    const subCategory = subategoryName.name;

    const categoryName = await CategoryModel.findById( categoryId );

    if (!categoryName) {
      throw  new validationError('Category not found');
    }
    const category = categoryName.name;

    const childCategoryName = await ChildCategory.findById(childCategoryId );

    if (!childCategoryName) {
      throw  new validationError('Child category not found');
    }
    const childCategory = childCategoryName.name;

    const originName = await OriginModel.findById( originId );

    if (!originName) {
      throw  new validationError('origin not found');
    }
    const origin = originName.name;

    const brandName = await BrandModel.findById(brandId );

    if (!brandName) {
      throw  new validationError('origin not found');
    }
    const brand = brandName.name;

    const ageGroupName = await AgeGroup.findById(ageGroupId );

    if (!ageGroupName) {
      throw  new validationError('origin not found');
    }
    const ageGroup = ageGroupName.name;

    let productImage:string[]=[];

    if (file) {
      const image =await cloudinary.uploader.upload(file.path, {
        folder: 'product-images',
      });
      productImage.push(image.secure_url);
    } 

    await Product.create({
      name,
      description,
      price,
      expiryOn,
      benefit,
      image: productImage,
      variant,
      subcategoryId,
      categoryId,
      childCategoryId,
      originId,
      brandId,
      ageGroupId,
      returnPolicy,
      createdBy:userId,
    });

     const productResponse = {
      name,
      description,
      price,
      expiryOn,
      benefit,
      image: productImage,
      variant,
      subCategory,
      subcategoryId,
      category,
      categoryId,
      childCategory,
      origin,
      originId,
      brand,
      brandId,
      ageGroup,
      ageGroupId,
      returnPolicy,
      createdBy: userId,
    };

    return productResponse;
  } catch (error: any) {
    throw new validationError(error.message);
  }
};
