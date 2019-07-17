var _config = {
  url: 'https://dev10-web-cosmoprof.demandware.net/s/CosmoProf/dw/shop/v17_8',
  client_id: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  user_name: 'rmallick',
  password: 'India@##123',
  oauth_host: 'https://dev10-web-cosmoprof.demandware.net/s/CosmoProf/dw/shop/v18_8/customers/auth'
};

function buildOauthURI() {
  return _config.oauth_host + '?client_id=' + _config.client_id;
}

function generateEncodedBaseToken() {
  var rawString = _config.user_name + ':' + _config.password + ':' + _config.client_id;
  return btoa(rawString);
}
$(document).ready(function () {
  $('.fetch-beare').on('click', function () {
    $.ajax({
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader('Origin', 'https://keen-payne-a47da8.netlify.com');
        xhrObj.setRequestHeader('Content-Type', 'application/json');
        xhrObj.setRequestHeader('Authorization', 'Basic dGVzdGRldmNvZGVAZ21haWwuY29tOnRlc3RkZXZjb2RlQGdtYWlsLmNvbQ==');
      },
      url: buildOauthURI(),
      type: 'POST',
      data: JSON.stringify({ type: 'credentials' })
    })
    // success
    .done(function (response) {
      console.log(JSON.stringify(response));
    });
  });
});
