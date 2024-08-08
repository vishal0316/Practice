import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function FilterPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const [filters, setFilters] = useState({
    rating: 0,
    pricing: 500,
    type: {
      professional: false,
      mobile: false,
    },
    selected: "rating", // Add this to keep track of the selected filter
  });

  const handleRatingChange = (e) => {
    if (e.target) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        rating: e.target.value,
      }));
    }
  };

  const handlePricingChange = (e) => {
    if (e.target) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        pricing: e.target.value,
      }));
    }
  };

  const handleTypeChange = (e) => {
    if (e.target) {
      const { name, checked } = e.target;
      setFilters((prevFilters) => ({
        ...prevFilters,
        type: {
          ...prevFilters.type,
          [name]: checked,
        },
      }));
    }
  };

  const applyFilters = () => {
    console.log("applyFilters called"); // Debugging statement
    console.log("Current Filters:", filters); // Log current filters to check their values

    console.log(
      `Rating: ${filters.rating}, Pricing: ${
        filters.pricing
      }, Type: ${JSON.stringify(filters.type)}`
    );
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Filter
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 relative">
            <span
              className="absolute top-4 right-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPopup(false)}
            >
              <RxCross2 />
            </span>
            <div className="flex">
              <div className="w-1/3  bg-gray-200 rounded-md p-4">
                <h3 className="text-xl font-bold mb-4">Filters</h3>
                <ul className="space-y-4">
                  <li>
                    <button
                      className={`w-full text-left ${
                        filters.selected === "rating"
                          ? "bg-white rounded-lg p-2 shadow"
                          : "p-2"
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, selected: "rating" })
                      }
                    >
                      Rating
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full text-left ${
                        filters.selected === "pricing"
                          ? "bg-white rounded-lg p-2 shadow"
                          : "p-2"
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, selected: "pricing" })
                      }
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full text-left   ${
                        filters.selected === "type"
                          ? "bg-white rounded-lg p-2 shadow"
                          : "p-2"
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, selected: "type" })
                      }
                    >
                      Type
                    </button>
                  </li>
                </ul>
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-blue-500 text-white rounded mt-4 mb-4 ml-4"
                >
                  Apply
                </button>
              </div>

              <div className="w-2/3 p-4">
                {filters.selected === "rating" && (
                  <div className="relative w-full">
                    {/* <h4 className="text-lg font-semibold mb-4">Rating</h4> */}
                    <div className="flex items-center mt-[50%] justify-between">
                      <GoStarFill className="text-yellow-500" />
                      <span className="text-xs">1</span>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        value={filters.rating}
                        onChange={handleRatingChange}
                        className="w-full "
                      />
                      <span className="text-xs">5</span>
                      <GoStarFill className="text-yellow-500" />
                      <GoStarFill className="text-yellow-500" />
                      <GoStarFill className="text-yellow-500" />
                      <GoStarFill className="text-yellow-500" />
                      <GoStarFill className="text-yellow-500" />
                    </div>

                    <div className="text-center mt-2">
                      Selected Rating: {filters.rating}
                    </div>
                  </div>
                )}
                {filters.selected === "pricing" && (
                  <div className="mt-[50%] ">
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      step="500"
                      value={filters.pricing}
                      onChange={handlePricingChange}
                      className="w-full"
                    />
                    <div className="flex justify-between">
                      {[].map((price) => (
                        <span key={price}>{price}</span>
                      ))}
                    </div>
                    <div className="text-center mt-2">
                      Selected Pricing: Rs {filters.pricing}
                    </div>
                  </div>
                )}
                {filters.selected === "type" && (
                  <div className="mt-[50%] ">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          id="typeProfessional"
                          name="professional"
                          checked={filters.type.professional}
                          onChange={handleTypeChange}
                        />
                        <label htmlFor="typeProfessional" className="ml-2">
                          Professional Photographer
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="typeMobile"
                          name="mobile"
                          checked={filters.type.mobile}
                          onChange={handleTypeChange}
                        />
                        <label htmlFor="typeMobile" className="ml-2">
                          Mobile Photographer
                        </label>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterPopup;
