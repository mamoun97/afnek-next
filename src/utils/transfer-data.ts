

export default function transferDataGet(data?: PaginationFilter) {
    let dataReturn = {
        page: 0,
        limit: 10,
        search: "",
        sort: "",
        relations: "",
        filter: "",
    };
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

    return dataReturn;
}