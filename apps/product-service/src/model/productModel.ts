import mongoose from 'mongoose';

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    expiryOn: {
      type: String
    },
    benifit: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
      default: [],
    },
    variant: {
      type: String,
      required: true,
    },
    subategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subategory',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    childCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChildCategory',
    },
    origin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Origin',
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
    },
    ageGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AgeGroup',
    },
    returnPolicy: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    is_active: {
      default: 1,
      type: Number,
      required: true,
    },
    status: {
      default: 1,
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret: any) {
        const { __v, ...rest } = ret;
        return rest;
      },
    },
  },
);

export const Product = mongoose.model('Product', product);
