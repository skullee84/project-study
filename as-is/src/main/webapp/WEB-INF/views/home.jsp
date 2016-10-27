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
    <h2>${view }</h2>
    <ul>
      <c:forEach items="${data}" var="item">
        <li>id: ${item.id}, name: ${item.name }</li>
      </c:forEach>
    </ul>
  </div>

  <hr />

  <div>
    <h2>ajax</h2>
    <button id="getDataBtn">getData</button>
    <ul id="userList">

    </ul>
  </div>

  <script>
    $(function() {
      $('#getDataBtn').on('click', function () {

        $.ajax({
          url: '<c:url value="/api/data" />',
          method: 'GET',
          contentType: 'application/json; charset=UTF-8'
        }).done(function(res) {
          drawData(res);
        });

      });
    });

    function drawData(data) {
      $('#userList').empty();
      $.each(data, function(idx, elm) {
        $('#userList').append('<li>id: ' + elm.id + ', name: ' + elm.name + '</li>');
      });
    }
  </script>
</body>
</html>
