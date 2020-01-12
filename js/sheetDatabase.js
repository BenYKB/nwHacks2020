var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14J1dPNFRejP93AgT15KQldihWKj4Vdpa8w-IZ33x3Bc/edit?usp=sharing';

      function init() {
        Tabletop.init( { key: publicSpreadsheetUrl,
                         callback: showInfo,
                         simpleSheet: true } )
      }

      function showInfo(data, tabletop) {
        alert('Successfully processed!')
        console.log(data);
      }

      window.addEventListener('DOMContentLoaded', init)