/* eslint-disable react/prop-types */
import "./SizeTableNosilife.scss";
import { nosilifeWomenSizing, nosilifeMenSizing, nosilifeSizeCategories } from "../assets/SizingData"


const renderCategories = (categories, sizes) => {
    return categories.map((category, i) => (
        <tr key={i}>
            <th>{category}</th>
            <td>{sizes[i]}</td>
        </tr>
    ));
};

function SizeTableNosilife({ gender, size }) {
    const selectCategories = (g) => {
        if (g === "men") {
            return nosilifeSizeCategories("men");
        } else if (g === "women") {
            return nosilifeSizeCategories("women");
        } else {
            return [];
        }
    };

    const selectSizing = (g, s) => {
        if (g === "men") {
            return nosilifeMenSizing(s);
        } else if (g === "women") {
            return nosilifeWomenSizing(s);
        } else {
            return [];
        }
    };

    return (
        <div className={`size-table-container-tab1 ${gender === "women" ? "expanded" : ""}`}>
            <div>
                <h4>{gender === "men" ? "Men" : "Women"} Sizing Chart</h4>
                <table className="size-table-container-tab1__table">
                    <thead>
                        <tr className="first-row">
                            <th scope="col">Measure</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCategories(selectCategories(gender), selectSizing(gender, size))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SizeTableNosilife;