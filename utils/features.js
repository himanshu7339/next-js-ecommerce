export const ProductsList = async () => {
  const res = await fetch("http://localhost:3000/api/v1/products/",{
    cache:"no-cache"
  });
  if (!res.ok) return new Error("Something went Wrong");

  return await res.json();
};
