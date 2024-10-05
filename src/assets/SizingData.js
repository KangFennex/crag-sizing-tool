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
                    return ["Waist (inch)", "Waist (cm)", "Eu Sizing", "FR Sizing"];
            }
            break;
    }
}

const kidSizeCategories = ["Height (inch)", "Height (cm)", "Chest (inch)", "Chest (cm)", "Waist (inch)", "Waist (cm)", "UK / EU Sizing"];

function nosilifeSizeCategories(gender) {
    switch (gender) {
        case "women":
            return ["Waist (inch)", "Waist (cm)", "Hip (inch)", "Hip (cm)", "Leg length (inch)", "Leg length (cm)", "UK Sizing", "US Sizing", "FR Sizing"];
        case "men":
            return ["Waist (inch)", "Waist (cm)", "Leg length (inch)", "Leg length (cm)", "UK/US Sizing", "FR Sizing"];
    }
}


function nosilifeWomenSizing(size) {
    switch (size) {
        case "16":
            return ["26", "66", "35", "89", "30", "76", "8S", "XS/4S", "34S"];
        case "17":
            return ["27", "69", "36", "91", "30", "76", "9S", "XS-S/5S", "36S"];
        case "18":
            return ["28", "71", "37", "94", "30", "76", "10S", "S/6S", "38S"];
        case "19":
            return ["29", "74", "38", "97", "30", "76", "11S", "S-M/7R", "40S"];
        case "20":
            return ["30", "76", "39", "99", "30", "76", "12S", "M/8S", "42S"];
        case "21":
            return ["32", "81", "41", "104", "30", "76", "14S", "L/10S", "44S"];
        case "22":
            return ["34", "86", "43", "109", "30", "76", "16S", "XL/12S", "46S"];
        case "23":
            return ["36", "91", "45", "114", "30", "76", "18S", "XXL/14S", "48S"];
        case "24":
            return ["38", "97", "47", "119", "30", "76", "20S", "3XL/16S", "50S"];
        case "25":
            return ["40", "102", "49", "124", "30", "76", "22S", "4XL/18S", "52S"];
        case "26":
            return ["42", "107", "51", "130", "30", "76", "24S", "5XL/20S", "54S"];
        case "32":
            return ["26", "66", "35", "89", "32", "81", "8R", "XS/4R", "34R"];
        case "34":
            return ["27", "69", "36", "91", "32", "81", "9R", "XS-S/5R", "36R"];
        case "36":
            return ["28", "71", "37", "94", "32", "81", "10R", "S/6R", "38R"];
        case "38":
            return ["29", "74", "38", "97", "32", "81", "11R", "S-M/7R", "40R"];
        case "40":
            return ["30", "76", "39", "99", "32", "81", "12R", "M/8R", "42R"];
        case "42":
            return ["32", "81", "41", "104", "32", "81", "14R", "L/10R", "44R"];
        case "44":
            return ["32", "81", "41", "104", "32", "81", "14R", "L/10R", "44R"];
        case "46":
            return ["34", "86", "43", "109", "32", "81", "16R", "XL/12R", "46R"];
        case "48":
            return ["36", "91", "45", "114", "32", "81", "18R", "XXL/14R", "48R"];
        case "50":
            return ["38", "97", "47", "119", "32", "81", "20R", "3XL/16R", "50R"];
        case "52":
            return ["40", "102", "49", "124", "32", "81", "22R", "4XL/18R", "52R"];
        case "64":
            return ["26", "66", "35", "89", "34", "86", "8L", "XS/4L", "34L"];
        case "68":
            return ["27", "69", "36", "91", "34", "86", "9L", "XS-S/5L", "36L"];
        case "72":
            return ["28", "71", "37", "94", "34", "86", "10L", "S/6L", "38L"];
        case "76":
            return ["29", "74", "38", "97", "34", "86", "11L", "S-M/7L", "40L"];
        case "80":
            return ["30", "76", "39", "99", "34", "86", "12L", "M/8L", "42L"];
        case "84":
            return ["32", "81", "41", "104", "34", "86", "14L", "L/10L", "44L"];
        case "88":
            return ["34", "86", "43", "109", "34", "86", "16L", "XL/12L", "46L"];
        case "92":
            return ["36", "91", "45", "114", "34", "86", "18L", "XXL/14L", "48L"];
        case "96":
            return ["38", "97", "47", "119", "34", "86", "20L", "3XL/16L", "50L"];
        case "100":
            return ["40", "102", "49", "124", "34", "86", "22L", "4XL/18L", "52L"];
        case "104":
            return ["42", "107", "51", "130", "34", "86", "24L", "5XL/20L", "54L"];
        default:
            return [];
    }
}

function nosilifeMenSizing(size) {
    switch (size) {
        case "23":
            return ["32", "81", "30", "76", "30S", "40S"];
        case "24":
            return ["34", "86", "30.5", "77", "32S", "42S"];
        case "25":
            return ["36", "91", "30.5", "77", "34S", "44S"];
        case "26":
            return ["38", "97", "31", "79", "36S", "46S"];
        case "27":
            return ["40", "102", "31", "79", "38S", "48S"];
        case "28":
            return ["42", "107", "31.5", "80", "40S", "50S"];
        case "29":
            return ["44", "112", "31.5", "80", "42S", "52S"];
        case "30":
            return ["46", "117", "32", "81", "44S", "54S"];
        case "46":
            return ["32", "81", "32", "81", "30R", "40R"];
        case "48":
            return ["34", "86", "32.5", "83", "32R", "42R"];
        case "50":
            return ["36", "91", "32.5", "83", "34R", "44R"];
        case "52":
            return ["38", "97", "33", "84", "36R", "46R"];
        case "54":
            return ["40", "102", "33", "84", "38R", "48R"];
        case "56":
            return ["42", "107", "33.5", "85", "40R", "50R"];
        case "58":
            return ["44", "112", "33.5", "85", "42R", "52R"];
        case "60":
            return ["46", "117", "34", "86", "44R", "54R"];
        case "90":
            return ["32", "81", "34", "86", "30L", "40L"];
        case "94":
            return ["34", "86", "34.5", "88", "32L", "42L"];
        case "98":
            return ["36", "91", "34.5", "88", "34L", "44L"];
        case "102":
            return ["38", "97", "35", "89", "36L", "46L"];
        case "106":
            return ["40", "102", "35", "89", "38L", "48L"];
        case "110":
            return ["42", "107", "35.5", "90", "40L", "50L"];
        case "114":
            return ["44", "112", "35.5", "90", "42L", "52L"];
        case "118":
            return ["46", "117", "36", "91", "44L", "54L"];
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


export { nosilifeWomenSizing, nosilifeMenSizing, getSizingSpecifications, getKidSizing, standardSizeCategories, kidSizeCategories, nosilifeSizeCategories }