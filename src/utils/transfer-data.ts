

export default function transferDataGet(data?: PaginationFilter) {

    let dataReturn = {
        page: data?.page ?? 0,
        limit: data?.limit ?? 10,
        search: "",
        sort: "",
        relations: "",
        filter: "",
    };
    let s="";

    try {
        if (data) {
            if (data.search?.length && data.search[0].value != "") {
                data.search.map((x: any) => {
                    if (dataReturn.search == "") {
                        dataReturn.search = x.field + ":" + x.value;
                    } else {
                        dataReturn.search = dataReturn.search + "," + x.field + ":" + x.value;
                    }
                });
            } else {
                delete data.search;
            }
            if (data.limit) {
                dataReturn.limit = data.limit;
            } else {
                delete data.limit;
            }
            if (data.sort?.length) {
                data.sort.map((x: any) => {
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
                data.filter.map((x: any) => {
                    if (dataReturn.filter == "") {
                        dataReturn.filter = x.field + ":" + x.operation + ":" + x.value;
                    } else {
                        dataReturn.filter =
                            dataReturn.filter +
                            "," +
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
                data.relations.map((x: any) => {
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
        s = "?limit=" + dataReturn.limit + "&page=" + dataReturn.page + "&"
        let { limit, page, ...d } = dataReturn

        s += Object.keys(d).map(el => {
            let val = d[el as keyof typeof d]
            if (val == "")
                return "";
            return el + ":" + val
        }).filter(el => el != "").join("&")

        console.log(s)
    } catch (err:any) {
        console.log(err.message)
    }
    return s;
}