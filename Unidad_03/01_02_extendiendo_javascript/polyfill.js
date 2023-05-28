if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') (function () {
    // Define el tipo de storage (local or session)
    var Storage = function (type) {
      
      function setData(data) {
        // guarda la información en el storage
      }
      function clearData() {
        // limpia la información en el storage
      }
      return {
        length: 0,
        clear: function () {
          clearData();
        },
        getItem: function (key) {
          return data[key] === undefined ? null : data[key];
        },
        key: function (i) {
          var ctr = 0;
          for (var k in data) {
            if (ctr == i) return k;
            else ctr++;
          }
          return null;
        },
        removeItem: function (key) {
          delete data[key];
          this.length--;
          setData(data);
        },
        setItem: function (key, value) {
          data[key] = value + '';
          this.length++;
          setData(data);
        }
      };
    };
    // Guarda el local y session storage en el objeto windows
    
    if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
    if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');
    })();