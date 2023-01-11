import { CategoriesContainer, Categori } from "./styleCategories";

const Categories = () => {
  return (
    <CategoriesContainer>
      <Categori to={"/"}>All Products</Categori>
      <Categori to={"/category/electronics"}>Electronics</Categori>
      <Categori to={"/category/jewelery"}>Jewelery</Categori>
      <Categori to={"/category/men's%20clothing"}>Men's Clothing</Categori>
      <Categori to={"/category/women's%20clothing"}>Women's Clothing</Categori>
    </CategoriesContainer>
  );
};

export default Categories;
