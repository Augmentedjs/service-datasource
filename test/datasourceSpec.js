describe("Given an Augmented Service DataSource", () => {
  it("is defined", async () => {
      expect(Service.DataSource).to.be.not.undefined;
  });
});

describe("Given an Augmented Service DataSourceFactory", () => {
  it("a factory is defined", async () => {
    expect(Service.DataSourceFactory).to.be.not.undefined;
  });

  describe("Given a DataSource instance", () => {
    it("is defined", async () => {
      expect(Service.DataSource).to.be.not.undefined;
    });
  });

  describe("Given a Memory DataSource", () => {
    let ds;
    beforeEach(() => {
      ds = Service.DataSourceFactory.getDatasource(Service.DataSourceFactory.Type.MEMORY, {});
    });
    afterEach(() => {
      ds = null;
    });

    it("can get a Memory DataSource instance", async () => {
      expect(ds).to.be.not.undefined;
      expect(ds instanceof Service.MemoryDataSource).to.be.true;
    });

    // it("can insert into the db", async () => {
    //   ds.insert("monkey");
    //   expect(ds).to.be.not.undefined;
    // });
    // it("can insert into the db", async () => {
    //   ds.insert("monkey");
    //   expect(ds).to.be.not.undefined;
    // });
    // it("can query into the db", async () => {
    //   ds.query("monkey");
    //   expect(ds).to.be.not.undefined;
    // });
  });

  describe("Given a MongoDB DataSource", () => {
    let ds;
    beforeEach(() => {
      ds = Service.DataSourceFactory.getDatasource(Service.DataSourceFactory.Type.MONGODB, {});
    });
    afterEach(() => {
      ds = null;
    });

    it("can get a MongoDB DataSource instance", async () => {
      expect(ds).to.be.not.undefined;
      expect(ds instanceof Service.DataSource).to.be.true;
    });
  });

  describe("Given a SOLR DataSource", () => {
    let ds;
    beforeEach(() => {
      ds = Service.DataSourceFactory.getDatasource(Service.DataSourceFactory.Type.SOLR, {});
    });
    afterEach(() => {
      ds = null;
    });
    it("can get a SOLR DataSource instance", async () => {
      expect(ds).to.be.not.undefined;
      expect(ds instanceof Service.DataSource).to.be.true;
    });
  });
});
