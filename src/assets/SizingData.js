function standardSizeCategories(gender, garment) {
    switch (gender) {
        /* Here need to add UK sizing too */
        case "women":
            switch (garment) {
                case "tops":
                    return ["Bust (inch)", "Bust (cm)", "US Sizing", "EU Sizing", "FR Sizing"];
                case "bottoms":
                    return ["Waist (inch)", "Waist (cm)", "Hip (inch)", "Hip (cm)", "US Sizing", "EU Sizing", "FR Sizing"];
            }
            break;
        case "men":
            switch (garment) {
                case "tops":
                    return ["Chest (inch)", "Chest (cm)", "US Sizing", "EU Sizing", "FR Sizing"];
                case "bottoms":
                    return ["Waist (inch)", "Waist (cm)", "EU Sizing", "FR Sizing"];
            }
            break;
    }
}

const kidSizeCategories = ["Height (inch)", "Height (cm)", "Chest (inch)", "Chest (cm)", "Waist (inch)", "Waist (cm)", "UK / EU Sizing"];

function nosilifeSizeCategories(gender) {
    switch (gender) {
        case "women":
            return ["Waist (inch)", "Waist (cm)", "Hip (inch)", "Hip (cm)", "Leg length (inch)", "Leg length (cm)", "Nosi Sizing", "UK Sizing", "US Sizing", "FR Sizing"];
        case "men":
            return ["Waist (inch)", "Waist (cm)", "Leg length (inch)", "Leg length (cm)", "Nosi Sizing", "UK/US Sizing", "FR Sizing"];
    }
}

const sizeNosilifeWomen = ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "64", "68", "72", "76", "80", "84", "88", "92", "96", "100", "104"];

const sizeNosilifeWomenUK = [
    "8S", "9S", "10S", "11S", "12S", "14S", "16S", "18S", "20S", "22S", "24S",
    "8R", "9R", "10R", "11R", "12R", "14R", "16R", "18R", "20R", "22R",
    "8L", "9L", "10L", "11L", "12L", "14L", "16L", "18L", "20L", "22L", "24L"
];

const sizeNosilifeMen = ["23", "24", "25", "26", "27", "28", "29", "30", "46", "48", "50", "52", "54", "56", "58", "60", "90", "94", "98", "102", "106", "110", "114", "118"];

const sizeNosilifeMenUK = [
    "30S", "32S", "34S", "36S", "38S", "40S", "42S", "44S",
    "30R", "32R", "34R", "36R", "38R", "40R", "42R", "44R",
    "30L", "32L", "34L", "36L", "38L", "40L", "42L", "44L"
];


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


function nosilifeWomenSizing(size) {
    switch (size) {
        case "16":
        case "8S":
            return ["26", "66", "35", "89", "30", "76", "16", "8 S", "XS/4S", "34 S"];
        case "17":
        case "9S":
            return ["27", "69", "36", "91", "30", "76", "17", "9 S", "XS-S/5S", "36 S"];
        case "18":
        case "10S":
            return ["28", "71", "37", "94", "30", "76", "18", "10 S", "S/6S", "38 S"];
        case "19":
        case "11S":
            return ["29", "74", "38", "97", "30", "76", "19", "11 S", "S-M/7R", "40 S"];
        case "12S":
            return ["30", "76", "39", "99", "30", "76", "20", "12 S", "M/8S", "42 S"];
        case "21":
        case "14S":
            return ["32", "81", "41", "104", "30", "76", "21", "14 S", "L/10S", "44 S"];
        case "22":
        case "16S":
            return ["34", "86", "43", "109", "30", "76", "22", "16 S", "XL/12S", "46 S"];
        case "23":
        case "18S":
            return ["36", "91", "45", "114", "30", "76", "23", "18 S", "XXL/14S", "48 S"];
        case "24":
        case "20S":
            return ["38", "97", "47", "119", "30", "76", "24", "20 S", "3XL/16S", "50 S"];
        case "25":
        case "22S":
            return ["40", "102", "49", "124", "30", "76", "25", "22 S", "4XL/18S", "52 S"];
        case "26":
        case "24S":
            return ["42", "107", "51", "130", "30", "76", "26", "24 S", "5XL/20S", "54 S"];
        case "32":
        case "8R":
            return ["26", "66", "35", "89", "32", "81", "32", "8 R", "XS/4R", "34 R"];
        case "34":
        case "9R":
            return ["27", "69", "36", "91", "32", "81", "34", "9 R", "XS-S/5R", "36 R"];
        case "36":
        case "10R":
            return ["28", "71", "37", "94", "32", "81", "36", "10 R", "S/6R", "38 R"];
        case "38":
        case "11R":
            return ["29", "74", "38", "97", "32", "81", "38", "11 R", "S-M/7R", "40 R"];
        case "40":
        case "12R":
            return ["30", "76", "39", "99", "32", "81", "40", "12 R", "M/8R", "42 R"];
        case "42":
        case "14R":
            return ["32", "81", "41", "104", "32", "81", "42", "14 R", "L/10R", "44 R"];
        case "44":
        case "16R":
            return ["32", "81", "41", "104", "32", "81", "44", "16 R", "L/10R", "44 R"];
        case "46":
        case "18R":
            return ["34", "86", "43", "109", "32", "81", "46", "18 R", "XL/12R", "46 R"];
        case "48":
        case "20R":
            return ["36", "91", "45", "114", "32", "81", "48", "20 R", "XXL/14R", "48 R"];
        case "50":
        case "22R":
            return ["38", "97", "47", "119", "32", "81", "50", "22 R", "3XL/16R", "50 R"];
        case "52":
        case "24R":
            return ["40", "102", "49", "124", "32", "81", "52", "24 R", "4XL/18R", "52 R"];
        case "64":
        case "8L":
            return ["26", "66", "35", "89", "34", "86", "64", "8 L", "XS/4L", "34 L"]; 
        case "68":
        case "9L":
            return ["27", "69", "36", "91", "34", "86", "68", "9 L", "XS-S/5L", "36 L"];
        case "72":
        case "10L":
            return ["28", "71", "37", "94", "34", "86", "72", "10 L", "S/6L", "38 L"];
        case "76":
        case "11L":
            return ["29", "74", "38", "97", "34", "86", "76", "11 L", "S-M/7L", "40 L"];
        case "80":
        case "12L":
            return ["30", "76", "39", "99", "34", "86", "80", "12 L", "M/8L", "42 L"];
        case "84":
        case "14L":
            return ["32", "81", "41", "104", "34", "86", "84", "14 L", "L/10L", "44 L"];
        case "88":
        case "16L":
            return ["34", "86", "43", "109", "34", "86", "88", "16 L", "XL/12L", "46 L"];
        case "92":
        case "18L":
            return ["36", "91", "45", "114", "34", "86", "92", "18 L", "XXL/14L", "48 L"];
        case "96":
        case "20L":
            return ["38", "97", "47", "119", "34", "86", "96", "20 L", "3XL/16L", "50 L"];
        case "100":
        case "22L":
            return ["40", "102", "49", "124", "34", "86", "100", "22 L", "4XL/18L", "52 L"];
        case "104":
        case "24L":
            return ["42", "107", "51", "130", "34", "86", "104", "24 L", "5XL/20L", "54 L"];
        default:
            return [];
    }
}


function nosilifeMenSizing(size) {
    switch (size) {
        case "23":
        case "30S":
            return ["32", "81", "30", "76", "23", "30 S", "40 S"];
        case "24":
        case "32S":
            return ["34", "86", "30.5", "77", "24", "32 S", "42 S"];
        case "25":
        case "34S":
            return ["36", "91", "30.5", "77", "25", "34 S", "44 S"];
        case "26":
        case "36S":
            return ["38", "97", "31", "79", "26", "36 S", "46 S"];
        case "27":
        case "38S":
            return ["40", "102", "31", "79", "27", "38 S", "48 S"];
        case "28":
        case "40S":
            return ["42", "107", "31.5", "80", "28", "40 S", "50 S"];
        case "29":
        case "42S":
            return ["44", "112", "31.5", "80", "29", "42 S", "52 S"];
        case "30":
        case "44S":
            return ["46", "117", "32", "81", "30", "44 S", "54 S"];
        case "46":
        case "30R":
            return ["32", "81", "32", "81", "46", "30 R", "40 R"];
        case "48":
        case "32R":
            return ["34", "86", "32.5", "83", "48", "32 R", "42 R"];
        case "50":
        case "34R":
            return ["36", "91", "32.5", "83", "50", "34 R", "44 R"];
        case "52":
        case "36R":
            return ["38", "97", "33", "84", "52", "36 R", "46 R"];
        case "54":
        case "38R":
            return ["40", "102", "33", "84", "54", "38 R", "48 R"];
        case "56":
        case "40R":
            return ["42", "107", "33.5", "85", "56", "40 R", "50 R"];
        case "58":
        case "42R":
            return ["44", "112", "33.5", "85", "58", "42 R", "52 R"];
        case "60":
        case "44R":
            return ["46", "117", "34", "86", "60", "44 R", "54 R"];
        case "90":
        case "30L":
            return ["32", "81", "34", "86", "90", "30 L", "40 L"];
        case "94":
        case "32L":
            return ["34", "86", "34.5", "88", "94", "32 L", "42 L"];
        case "98":
        case "34L":
            return ["36", "91", "34.5", "88", "98", "34 L", "44 L"];
        case "102":
        case "36L":
            return ["38", "97", "35", "89", "102", "36 L", "46 L"];
        case "106":
        case "38L":
            return ["40", "102", "35", "89", "106", "38 L", "48 L"];
        case "110":
        case "40L":
            return ["42", "107", "35.5", "90", "110", "40 L", "50 L"];
        case "114":
        case "42L":
            return ["44", "112", "35.5", "90", "114", "42 L", "52 L"];
        case "118":
        case "44L":
            return ["46", "117", "36", "91", "118", "44 L", "54 L"];
        default:
            return [];
    }
}

function getKidSizing(size) {
    switch (size) {
        case "3-4":
        case "104":
            return ["38.5 - 41", "98-104", "21.5 - 22.5", "55 - 57", "21-21.5", "53 - 54", "3-4 / 104"];
        case "5-6":
        case "116":
            return ["43.25 - 45.5", "110 - 116", "23.25 - 24", "59 - 61", "21.75 - 22.5", "55 - 57", "5-6 / 116"];
        case "7-8":
        case "128":
            return ["48 - 50.25", "122 - 128", "24.75 - 26.5", "63 - 67", "22.75 - 23.5", "58 - 60", "7-8 / 128"];
        case "9-10":
        case "140":
            return ["52.75 - 55", "134 - 140", "27.25 - 28.75", "69 - 73", "24 - 25.25", "61 - 64", "9-10 / 140"];
        case "11-12":
        case "152":
            return ["57.5 - 59.75", "146 - 152", "29.5 - 31", "75 - 79", "25 - 26.5", "65 - 67", "11-12 / 152"];
        case "13":
        case "158":
            return ["62.25", "158", "32.5", "83", "27.5", "70", "13 / 158"];
        default:
            return "";
    }
}

function getSizingSpecifications(gender, garment, size) {
    switch (gender) {
        case "women":
            switch (garment) {
                case "tops":
                    switch (size) {
                        case "32":
                        case "6":
                            return ["30", "76", "XXS/2", "32", "34"];
                        case "34":
                        case "8":
                            return ["32", "81", "XS/4", "34", "36"];
                        case "36":
                        case "10":
                            return ["34", "86", "S/6", "36", "38"];
                        case "38":
                        case "12":
                            return ["36", "91", "M/8", "38", "40"];
                        case "40":
                        case "14":
                            return ["39", "99", "L/10", "40", "42"];
                        case "42":
                        case "16":
                            return ["41", "104", "XL/12", "42", "44"];
                        case "44":
                        case "18":
                            return ["43", "109", "XXL/14", "44", "46"];
                        case "46":
                        case "20":
                            return ["45", "114", "3XL/16", "46", "48"];
                        case "48":
                        case "22":
                            return ["47", "119", "4XL/18", "48", "50"];
                        case "50":
                        case "24":
                            return ["49", "124", "5XL/18", "50", "52"];
                        default:
                            return ["Unknown sizing specifications"];
                    }
                case "bottoms":
                    switch (size) {
                        case "32":
                        case "6":
                            return ["24", "61", "33", "84", "XXS/2", "32", "34"];
                        case "34":
                        case "8":
                            return ["26", "66", "35", "89", "XS/4", "34", "36"];
                        case "36":
                        case "10":
                            return ["28", "71", "37", "94", "S/6", "36", "38"];
                        case "38":
                        case "12":
                            return ["30", "76", "39", "99", "M/8", "38", "40"];
                        case "40":
                        case "14":
                            return ["33", "84", "42", "107", "L/10", "40", "42"];
                        case "42":
                        case "16":
                            return ["35", "89", "44", "112", "XL/12", "42", "44"];
                        case "44":
                        case "18":
                            return ["37", "94", "46", "117", "XXL/14", "44", "46"];
                        case "46":
                        case "20":
                            return ["39", "99", "48", "122", "3XL/16", "46", "48"];
                        case "48":
                        case "22":
                            return ["41", "104", "50", "127", "4XL/18", "48", "50"];
                        case "50":
                        case "24":
                            return ["43", "109", "52", "132", "5XL/20", "50", "52"];
                        default:
                            return ["Unknown sizing specifications"];
                    }
            }
            break;
        case "men":
            switch (garment) {
                case "tops":
                    switch (size) {
                        case "46":
                        case "XS":
                            return ["36", "91", "36", "46", "48"];
                        case "48":
                        case "S":
                            return ["38", "97", "38", "48", "50"];
                        case "50":
                        case "M":
                            return ["40", "102", "40", "50", "52"];
                        case "52-54":
                        case "L":
                            return ["43", "109", "43", "52-54", "54-56"];
                        case "56":
                        case "XL":
                            return ["46", "117", "46", "56", "58"];
                        case "58":
                        case "XXL":
                            return ["49", "124", "49", "58", "60"];
                        case "60-62":
                        case "3XL":
                            return ["52", "132", "52", "60-62", "62-64"];
                        case "64":
                        case "4XL":
                            return ["55", "140", "55", "64", "66"];
                        default:
                            return ["Please specify the size"];
                    }
                case "bottoms":
                    switch (size) {
                        /*error here with the 44 EU Size */
                        case "44-":
                        case "28":
                            return ["30", "76", "44", "38"];
                        case "46":
                        case "30":
                            return ["32", "81", "46", "40"];
                        case "48":
                        case "32":
                            return ["34", "86", "48", "42"];
                        case "50":
                        case "34":
                            return ["36", "91", "50", "44"];
                        case "52":
                        case "36":
                            return ["38", "97", "52", "46"];
                        case "54":
                        case "38":
                            return ["40", "102", "54", "48"];
                        case "56":
                        case "40":
                            return ["42", "107", "56", "50"];
                        case "58":
                        case "42":
                            return ["44", "112", "58", "52"];
                        case "60":
                        case "44":
                            return ["46", "117", "60", "54"];
                        default:
                            return ["Please specify the size"];
                    }
                default:
                    return ["Unknown garment type"];
            }
        default:
            return ["Unknown gender"];
    }
}


export { nosilifeWomenSizing, nosilifeMenSizing, getSizingSpecifications, getKidSizing, standardSizeCategories, kidSizeCategories, nosilifeSizeCategories, sizeNosilifeWomen, sizeNosilifeWomenUK, sizeNosilifeMen, sizeNosilifeMenUK, sizeKid, sizeKidEu, sizeWomenTops, sizeWomenTopsEu, sizeWomenBottoms, sizeWomenBottomsEu, sizeMenTops, sizeMenTopsEu, sizeMenBottoms, sizeMenBottomsEu }