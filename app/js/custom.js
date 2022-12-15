function initializeWidget() {
  ZOHO.embeddedApp.on("PageLoad", function (data) {
    console.log(data);
    ZOHO.CRM.API.getAllRecords({
      Entity: "Contacts",
      sort_order: "asc",
      per_page: 1,
      page: 1,
    }).then(function (data) {
      document
        .getElementById("firstName")
        .setAttribute("value", data.data[0].First_Name);
      document
        .getElementById("lastName")
        .setAttribute("value", data.data[0].Last_Name);
      document
        .getElementById("email")
        .setAttribute("value", data.data[0].Email);
      document
        .getElementById("phone")
        .setAttribute("value", data.data[0].Phone);
    });
  });

  ZOHO.embeddedApp.init();
}
