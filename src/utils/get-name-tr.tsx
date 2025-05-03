type ItemType = {
    name_ar?: string | null,
    name_fr?: string | null,
    name_en?: string,
    ar?: string | null,
    fr?: string | null,
    en?: string,
    [key: string]: any;
};

// Define the return type for the function
type ReturnTypeF = "name_ar" | "name_fr" | "name_en";

const getNameTr = (lang: "ar" | "fr" | "en", item: ItemType): ReturnTypeF => {

    let name= (lang == "ar" && item.name_ar) && "name_ar" ||
              (lang == "ar" && item.ar) && "ar" ||
              (lang == "fr" && item.name_fr) && "name_fr" ||
              (lang == "fr" && item.fr) && "fr" ||
               item.en&&"en"||
        "name_en";

        return item[name]
};
export default getNameTr
