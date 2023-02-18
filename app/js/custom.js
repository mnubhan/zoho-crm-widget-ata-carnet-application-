function initializeWidget() {
  ZOHO.embeddedApp.on("PageLoad", function (data) {
    console.log(data);
    ZOHO.CRM.API.getAllRecords({
      Entity: "Contacts",
      sort_order: "asc",
      per_page: 1,
      page: 1,
    }).then(function (data) {
      try {
        var firstName = data.data[0].First_Name;
        var lastName = data.data[0].Last_Name;
        var email = data.data[0].Email;
        var sStreet = data.data[0].Mailing_Street;
        var sCode = data.data[0].Mailing_Zip;
        var sCity = data.data[0].Mailing_City;
        var sState = data.data[0].Mailing_State;
        var sCountry = data.data[0].Mailing_Country;
        var placeholder = (value) => (value ? value : "");
        var datastring = `firstName=${placeholder(
          firstName
        )}&lastName=${placeholder(lastName)}&email=${placeholder(
          email
        )}&sStreet=${placeholder(sStreet)}&sCode=${placeholder(
          sCode
        )}&sCity=${placeholder(sCity)}&sState=${placeholder(
          sState
        )}&sCountry=${placeholder(sCountry)}`;
        var url = `https://forms.zohopublic.com/itdepartment3/form/AtaCarnetApplication/formperma/k4vXweMxRsOjKup3XUC86fKgGwMWWKxPzpHha-ZvMrU?${datastring}`;
        var f = document.createElement("iframe");
        f.src = url;
        f.style.border = "none";
        f.style.height = "100%";
        f.style.width = "100%";
        f.style.transition = "all 0.5s ease";
        var d = document.getElementById(
          "zf_div_YScGpndCwUhuSJa4_ojEh2O8lmKthmabrzfU-2NAe1M"
        );
        d.appendChild(f);
        window.addEventListener(
          "message",
          function () {
            var evntData = event.data;
            if (evntData && evntData.constructor == String) {
              var zf_ifrm_data = evntData.split("|");
              if (zf_ifrm_data.length == 2) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
                var iframe = document
                  .getElementById(
                    "zf_div_YScGpndCwUhuSJa4_ojEh2O8lmKthmabrzfU-2NAe1M"
                  )
                  .getElementsByTagName("iframe")[0];
                if (
                  iframe.src.indexOf("formperma") > 0 &&
                  iframe.src.indexOf(zf_perma) > 0
                ) {
                  var prevIframeHeight = iframe.style.height;
                  if (prevIframeHeight != zf_ifrm_ht_nw) {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          },
          false
        );
      } catch (e) {}
    })();
  });

  ZOHO.embeddedApp.init();
}
