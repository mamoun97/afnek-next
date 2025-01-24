
export function transferDataGet(data?: PaginationFilter) {
    const dataReturn = {
        page: 1,
        limit: 10,
        search: "",
        sort: "",
        relations: "",
        filter: "",
        paranoid: true,
    };
    if (data) {
        if (data.search?.length) {
            data.search.map((x) => {
                if (x.value != "" && x.value) {
                    if (dataReturn.search == "") {
                        dataReturn.search = x.field + ":" + x.value;
                    } else {
                        dataReturn.search =
                            dataReturn.search + "," + x.field + ":" + x.value;
                    }
                }
            });
        } else {
            delete data.search;
        }

        if (data.limit) {
            dataReturn.limit = data.limit;
        }

        if (data.page) {
            dataReturn.page = data.page;
        }

        if (data.paranoid == true || data.paranoid == false) {
            dataReturn.paranoid = data.paranoid;
        }

        if (data.sort?.length) {
            data.sort.map((x) => {
                if (dataReturn.sort == "") {
                    dataReturn.sort = x.field + ":" + x.by;
                } else {
                    dataReturn.sort = dataReturn.sort + "," + x.field + ":" + x.by;
                }
            });
        } else {
            delete data.sort;
        }

        if (data.filter?.length) {
            data.filter.map((x) => {
                if (dataReturn.filter == "") {
                    dataReturn.filter = x.field + ":" + x.operation + ":" + x.value;
                } else {
                    dataReturn.filter =
                        dataReturn.filter +
                        "|" +
                        x.field +
                        ":" +
                        x.operation +
                        ":" +
                        x.value;
                }
            });
        } else {
            delete data.filter;
        }

        if (data.relations?.length) {
            data.relations.map((x) => {
                if (dataReturn.relations == "") {
                    dataReturn.relations = x;
                } else {
                    dataReturn.relations = dataReturn.relations + "," + x;
                }
            });
        } else {
            delete data.relations;
        }
    }

    return convertToQueryString(dataReturn);
}
function convertToQueryString(params: Record<string, any>): string {
    // Filter out undefined, null, or empty string values
    const filteredParams = Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            acc[key] = value;
        }
        return acc;
    }, {} as Record<string, any>);

    // Convert the filtered object to a query string
    const queryString = new URLSearchParams(filteredParams).toString();

    // Add a "?" prefix if the query string is not empty
    return queryString ? `?${queryString}` : "";
}
export function KeyData(data?: PaginationFilter) {
    if (data?.search?.length && data.search[0].value == "") {
        delete data.search;
    }
    if (data?.relations?.length && !data.relations[0]) {
        delete data.relations;
    }
    return data;
}

type ReturnProps = {
    search: { field: string; value?: string }[];
    filter: { field: string; operation: string; value: string | string[] | number | number[] }[];
}
export function FilterToPaginationFilter(data: Filter): ReturnProps {
    return {
        search: [],
        filter: [
            // ...data.adult ? [{
            //     field: "adult",
            //     operation: "=",
            //     value: data.adult
            // }] : [],
            ...data.children ? [{
                field: "children",
                operation: "=",
                value: data.children
            }] : [],
            // ...data.room ? [{
            //     field: "room",
            //     operation: "=",
            //     value: data.room
            // }] : [],
            ...data.date_start ? [{
                field: "date_start",
                operation: "=",
                value: data.date_start
            }] : [],
            ...data.date_end ? [{
                field: "date_end",
                operation: "=",
                value: data.date_end
            }] : [],
            // ...data.rating ? [{
            //     field: "rating",
            //     operation: "=",
            //     value: data.rating
            // }] : [],
            // ...data.max_price ? [{
            //     field: "price",
            //     operation: "<=",
            //     value: data.max_price
            // }] : [],
            // ...data.min_price ? [{
            //     field: "min_price",
            //     operation: "=",
            //     value: data.min_price
            // }] : [],
        ]
    }
}