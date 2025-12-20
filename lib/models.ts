import mongoose, { Schema } from "mongoose"

// User Schema
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true },
)

// Hero Schema
const HeroSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    buttonText: { type: String },
    buttonLink: { type: String },
    image: { type: String },
  },
  { timestamps: true },
)

// Category Schema
const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String },
    description: { type: String },
    image: { type: String },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

// Product Schema
const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    sku: { type: String, required: true, unique: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    freeShipping: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true },
)

// Promo Schema
const PromoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    buttonText: { type: String },
    buttonLink: { type: String },
    backgroundColor: { type: String, default: "#00b5c8" },
    backgroundOpacity: { type: Number, default: 0.7 },
    position: { type: String, enum: ["left", "center", "right"], default: "right" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
)

// Define models
export const User = mongoose.models.User || mongoose.model("User", UserSchema)
export const Hero = mongoose.models.Hero || mongoose.model("Hero", HeroSchema)
export const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema)
export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)
export const Promo = mongoose.models.Promo || mongoose.model("Promo", PromoSchema)
