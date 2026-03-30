import { getDistance } from "./Distance";

export const fetchNearbyPlaces = async (userLat, userLon) => {
  try {
    const query = `
      [out:json];
      (
        node["amenity"="pharmacy"](around:3000, ${userLat}, ${userLon});
        node["amenity"="clinic"](around:3000, ${userLat}, ${userLon});
      );
      out body;
    `;

    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    });

    let data = await res.json();

    // 🔥 RETRY LOGIC
    if (!data.elements || data.elements.length === 0) {
      console.log("⚠️ No data, retrying...");

      await new Promise(resolve => setTimeout(resolve, 1000));

      const retryRes = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      });

      const retryData = await retryRes.json();

      if (!retryData.elements || retryData.elements.length === 0) {
        console.log("❌ Still no data after retry");
        return [];
      }

      data = retryData;
    }

    const formatted = data.elements.map((item, index) => {
      const distance = getDistance(
        userLat,
        userLon,
        item.lat,
        item.lon
      );

      const type = item.tags?.amenity;

      return {
        id: index.toString(),
        name: item.tags?.name || "Unnamed Place",
        distance,
        rating: (Math.random() * (5 - 3) + 3).toFixed(1),
        image:
          type === "pharmacy"
            ? "https://cdn.pixabay.com/photo/2023/09/20/07/36/doctor-8264057_1280.jpg"
            : "https://abpharmacy.ca/wp-content/uploads/Page_Complaints-aspect-ratio-302-204-1536x1038.jpg"
      };
    });

    formatted.sort((a, b) => a.distance - b.distance);

    return formatted;

  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};