// Create Product Feature Class
class ProductFeatureClass {
    constructor(query, string) {
        this.query = query;
        this.string = string;
    }
    // Search
    search() {
        const keyword = this.string.keyword ? {
            name: {
                $regex: this.string.keyword,
                $options: "i"
            }
        } : {

        }
        this.query = this.query.find({ ...keyword });
        return this;
    }
    // Filter
    filter() {
        const queryfilter = { ...this.string };
        const remove = ["keyword", "page", "limit"];

        // Price Filter
        let priceFilter = JSON.stringify(queryfilter);
        priceFilter = priceFilter.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);
        priceFilter = JSON.parse(priceFilter);

        remove.forEach(e => delete queryfilter[e]);
        this.query = this.query.find(priceFilter);
        return this;
    }
    // Pagonation
    pagination(perPage) {
        const currentPage = Number(this.string.page) || 1;
        const skipPage = perPage * (currentPage - 1);
        this.query = this.query.limit(perPage).skip(skipPage).sort({ createdAt: -1 });
        return this;
    }
}
// Export 
module.exports = ProductFeatureClass;