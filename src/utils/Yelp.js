import noImage from "../assets/No-Image-Placeholder.jpg";
const fetchBusinesses = async (term, location, sort_by) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/yelp?term=${term}&location=${location}&sort_by=${sort_by}`
    );

    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.businesses)) {
      return [];
    }

    const filteredData = data.businesses.map((business) => ({
      id: business.id,
      image_url: business.image_url || noImage,
      name: business.name,
      address: business.location.address1 || "No address available",
      city: business.location.city || "Unknown city",
      state: business.location.state || "Unknown state",
      zip_code: business.location.zip_code || "N/A",
      category: business.categories[0].title || "Unknown",
      rating: business.rating,
      review_count: business.review_count,
    }));

    return filteredData;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message);
  }
};

export default fetchBusinesses;
