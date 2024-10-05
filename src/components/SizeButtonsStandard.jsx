/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@nextui-org/react";

const renderSizeButtons = (sizes, handleSizeSelectionWithState, selectedSize) => {
    return sizes.map((sizeEl, i) => (
        <Button
            key={i}
            size="sm"
            className="bg-white hover:bg-green-100 font-semibold border rounded"
            onClick={() => handleSizeSelectionWithState(sizeEl)}
            isDisabled={selectedSize === sizeEl}
        >{sizeEl}</Button>
    ))
}

const SizingSelect = ({ gender, region, kid, garment, handleSizeSelectionWithState, selectedSize }) => {

    const sizeKid = ["3-4", "5-6", "7-8", "9-10", "11-12", "13"]
    const sizeKidEu = ["104", "116", "128", "140", "152", "158"]

    const sizeWomenTops = ["6", "8", "10", "12", "14", "16", "18", "20", "22", "24"];
    const sizeWomenTopsEu = ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50"]

    const sizeWomenBottoms = ["6", "8", "10", "12", "14", "16", "18", "20", "22", "24"];
    const sizeWomenBottomsEu = ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50"];

    const sizeMenTops = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
    const sizeMenTopsEu = ["46", "48", "50", "52-54", "56", "58", "60-62", "64"]

    const sizeMenBottoms = ["28", "30", "32", "34", "36", "38", "40", "42", "44"];
    const sizeMenBottomsEu = ["44", "46", "48", "50", "52", "54", "56", "58", "60"]

    return (
        <div>
            {kid && (
                renderSizeButtons(region ? sizeKid : sizeKidEu, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "women" && garment && (
                renderSizeButtons(region ? sizeWomenTopsEu : sizeWomenTops, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "women" && !garment && (
                renderSizeButtons(region ? sizeWomenBottoms : sizeWomenBottomsEu, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "men" && garment && (
                renderSizeButtons(region ? sizeMenTopsEu : sizeMenTops, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "men" && !garment && (
                renderSizeButtons(region ? sizeMenBottomsEu : sizeMenBottoms, handleSizeSelectionWithState, selectedSize)
            )}
        </div>
    )
}

const SizeButtonsStandard = ({ gender, region, kid, garment, handleSizeSelection }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelectionWithState = (s) => {
        setSelectedSize(s);
        handleSizeSelection(s);
    };
    
    return (
        <div className="buttons-container">
            <SizingSelect
            kid={kid}
            garment={garment}
            gender={gender}
            region={region}
            handleSizeSelectionWithState={handleSizeSelectionWithState}
            selectedSize={selectedSize}
            />
        </div>
    )
}

export default SizeButtonsStandard
