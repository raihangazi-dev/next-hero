import Link from "next/link";

export async function fetchAllCategories() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  return data.categories;
}

export const metadata = {
  title : "All categories | Dine",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus?"
}

export default async function CategoriesPage() {
  const categories = await fetchAllCategories();

  return (
    <main>
      <section className="bg-gray-50 p-20">
        <div className="di-container">
          <div className="di-grid di-grid-3">
            {categories.map((cat) => (
              <div className="di-card di-card-dish" key={cat?.idCategory}>
                <div
                  className="di-dish-img"
                  style={{ backgroundImage: `url(${cat?.strCategoryThumb})` }}
                />
                <div className="di-card-body">
                  <h3 className="text-white font-bold">{cat?.strCategory}</h3>
                  <p>
                    {cat?.strCategoryDescription.length > 60 ? `${cat?.strCategoryDescription.slice(0 , 60)} ...` : cat?.strCategoryDescription}
                  </p>
                  <div className="di-card-footer">
                    <span className="di-price">Interested ?</span>
                    <span className="di-pill"><Link href={`/Menu/${cat?.strCategory}`}>See All</Link></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
