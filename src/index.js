import DataSource from "./datasource.js";
import DATASOURCE_STYLE from "./datasourceStyle.js";
import MemoryDataSource from "./memoryDataSource.js";
import MongoDataSource from "./mongoDataSource.js";
import SOLRDataSource from "./solrDataSource.js";
import DataSourceFactory from "./datasourceFactory.js";

module.exports.DataSource = DataSource;
module.exports.DATASOURCE_STYLE = DATASOURCE_STYLE;
module.exports.MemoryDataSource = MemoryDataSource;
module.exports.MongoDataSource = MongoDataSource;
module.exports.SOLRDataSource = SOLRDataSource;
module.exports.DataSourceFactory = DataSourceFactory;
