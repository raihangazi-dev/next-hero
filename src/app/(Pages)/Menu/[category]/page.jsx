import Image from "next/image";

export async function fetchAllMeals(category) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await res.json();
  return data?.meals;
}

export const metadata = {
  title: "All"
}
export default async function SingleCategory({ params }) {
  const category = await params;
  const meals = await fetchAllMeals(category?.category);

  return (
    <main>
      <section className="bg-gray-50 p-20">
        <div className="di-container">
          <div className="di-grid di-grid-3">
            {meals.map((meal) => (
              <div className="di-card di-card-dish" key={meal?.idMeal}>
                <div
                  // className="di-dish-img"
                  // style={{ backgroundImage: `url(${meal?.strMealThumb})` }}
                />
                <Image src={meal?.strMealThumb} width={250} height={200} alt="Meals"/>
                <div className="di-card-body">
                  <h3 className="text-white font-bold">{meal?.strMeal}</h3>
                  {/* <p>
                    {meal?.strCategoryDescription.length > 60
                      ? `${meal?.strCategoryDescription.slice(0, 60)} ...`
                      : meal?.strCategoryDescription}
                  </p> */}
                  <div className="di-card-footer">
                    <span className="di-price">TK: {meal?.idMeal}</span>
                    <span className="di-pill">
                      See All
                    </span>
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
