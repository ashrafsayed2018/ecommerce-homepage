import { BASE_API_URL } from "@/utils/constants";
import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export async function addNewProductService(formData) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/products/add-product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// get all products

export async function getAllAdminProducts() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/products/all-products`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطاء ما الرجاء المحاولة لاحقا ",
    });
  }
}

// update product

export async function updateProductService(formData) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/products/update-product`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطاء ما الرجاء المحاولة لاحقا ",
    });
  }
}
// delete product

export async function deleteProductService(id) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/products/delete-product?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطاء ما الرجاء المحاولة لاحقا",
    });
  }
}

// find product by category
export async function findProductsByCategoryService(category) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/client/product/products-by-category?category=${category}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// find product by id
export async function findProductByIdService(id) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/client/product/product-by-id?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
