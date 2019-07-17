var _config = {
  url: 'https://dev10-web-cosmoprof.demandware.net/s/CosmoProf/dw/shop/v17_8',
  client_id: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  user_name: 'rmallick',
  password: 'India@##123',
  oauth_host: 'https://dev10-web-cosmoprof.demandware.net/dw/oauth2/access_token'
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
      dataType: 'json',
      url: buildOauthURI(),
      type: 'POST',
      data: 'grant_type=urn:demandware:params:oauth:grant-type:client-id:dwsid:dwsecuretoken',
      headers: {
        Authorization: 'Basic' + generateEncodedBaseToken(),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    // success
    .done(function (response) {
      console.log(JSON.stringify(response));
    })
    // failed
    .fail(function (xhr, textStatus) {
      alert(textStatus);
    });
  });
});



