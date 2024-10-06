/* eslint-disable react/prop-types */
import "./Styles.scss";
import { getSizingSpecifications, getKidSizing, standardSizeCategories, kidSizeCategories } from "../assets/SizingData";

function SizeTableStandard({ kid, size, gender, garment }) {

  const selectedCategories = (kid, gender, garment) => {
    if (kid) {
      return kidSizeCategories
      /* This needs to be fixed: check what is neg and pos */
    } else if (!kid && gender === "women" && garment) {
      return standardSizeCategories("women", "tops")
    } else if (!kid && gender === "women" && !garment) {
      return standardSizeCategories("women", "bottoms")
    } else if (!kid && gender === "men" && garment) {
      return standardSizeCategories("men", "tops")
    } else if (!kid && gender === "men" && !garment) {
      return standardSizeCategories("men", "bottoms")
    } else {
      return ["Please finish your selection"]
    }
  }

  const selectedSizing = (kid, size, gender, garment) => {
    if (kid) {
      return getKidSizing(size);
    } else if (gender === "women" && garment) {
      return getSizingSpecifications("women", "tops", size);
    } else if (gender === "women" && !garment) {
      return getSizingSpecifications("women", "bottoms", size);
    } else if (gender === "men" && garment) {
      return getSizingSpecifications("men", "tops", size);
    } else if (gender === "men" && !garment) {
      return getSizingSpecifications("men", "bottoms", size);
    } else {
      return ["Please finish your selection"];
    }
  };

  const chartTitle = (gender, kid) => {
    if (kid) {
      return "Kid"
    } else if (gender === "men" ) {
      return "Men"
    } else return "Women"
  }

  const renderCategories = (categories, sizes) => {
    return categories.map((category, i) => (
      <tr key={i} className="border-b">
        <th>{category}</th>
        <td>{sizes[i]}</td>
      </tr>
    ));
  };

  return (
    <div className={`size-table-container selectedTab2 ${gender === "women" || garment || kid ? "expandedTab2" : ""}`}>
      <div>
      <h4>{chartTitle(gender, kid)} Sizing Chart</h4>
        <table className={"size-table-container__table"}>
          <thead>
            <tr className="first-row">
              <th>Measure</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {renderCategories(selectedCategories(kid, gender, garment), selectedSizing(kid, size, gender, garment))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SizeTableStandard
