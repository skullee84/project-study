<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <script src="<c:url value="/resources/libs/jquery/jquery-3.1.1.min.js" />"></script>
</head>
<body>
  <div>
    <h2>ajax</h2>
    <button id="getData">getData</button>
    <button id="getView">getView</button>
    <button id="clear">clear</button>

    <ul id="userList"></ul>
  </div>

  <script>
    $(function() {

      $('#getData').on('click', function() {
        $.ajax({
          url: '<c:url value="/api/data" />',
          method: 'GET',
          contentType: 'application/json; charset=UTF-8'
        }).done(function(res) {
          clear();
          $.each(res, function(idx, elm) {
            $('#userList').append('<li>id: ' + elm.id + ', name: ' + elm.name + '</li>');
          });
        });
      });

      $('#getView').on('click', function() {
        $.ajax({
          url: '<c:url value="/view/template/rows" />',
          method: 'GET'
        }).done(function(res) {
          clear();
          $('#userList').html(res);
        });
      });

      $('#clear').on('click', function() {
        clear();
      });

    });

    function clear() {
      $('#userList').empty();
    }
  </script>
</body>
</html>
